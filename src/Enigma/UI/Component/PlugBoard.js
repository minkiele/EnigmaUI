import React from 'react';
import EventEmitter from 'events';
import PlugBoardWiring from './PlugBoard/PlugBoardWiring';
import assign from 'object-assign';
import {getTimestampKey as getNewWiringKey} from '../../Utils';

export const PLUGBOARD_MAX_SIZE = 10;

export default class PlugBoard extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      //Shallow copy of the prop
      wirings: assign({}, this.props.wirings)
    };
  }

  //Need this because it won't receive the updated properties
  componentWillReceiveProps (nextProps) {
    this.setState({
      //Again, shallow copy of the props
      wirings: assign({}, nextProps.wirings)
    });
  }

  addWiring () {
    this.setState((previousState) => {

      let keys = Object.keys(previousState.wirings);

      if(keys.length < PLUGBOARD_MAX_SIZE) {

        let newKey = getNewWiringKey();
        previousState.wirings[newKey] = ['', ''];
        return {wirings: previousState.wirings};

      }
    });
  }

  removeWiring (key) {

    let toBeRemovedWiring;

    this.setState(function(previousState) {
      toBeRemovedWiring = previousState.wirings[key];
      delete previousState.wirings[key];
      return {
        wirings: previousState.wirings
      };
    }, () => {
      this.props.eventManager.emit('change.plugBoard.wiringRemoved', toBeRemovedWiring);
    });
  }

  render () {

    let wirings = Object.keys(this.state.wirings).map((key) => {
      let wiring = this.state.wirings[key];
      return (
        <li key={key}>
          <PlugBoardWiring wiring={wiring} index={key} eventManager={this.props.eventManager} />
          <button className="btn btn-danger" onClick={() => { this.removeWiring(key); }}>Remove</button>
        </li>
      );
    });

    return (
      <div className="enigmaPlugBoard">
        <h2>PlugBoard</h2>
        <ol className="enigmaPlugBoardWirings">
          {wirings}
        </ol>
        <button className="btn btn-primary" onClick={() => { this.addWiring(); }}>Add wiring</button>
      </div>
    );
  }
}

PlugBoard.propTypes = {
  wirings: React.PropTypes.object.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

PlugBoard.defaultProps = {
  wirings: {}
};
