import React from 'react';
import EventEmitter from 'events';
import PlugBoardWiring from './PlugBoard/PlugBoardWiring';

export const PLUGBOARD_MAX_SIZE = 10;

export default class PlugBoard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      wirings: this.props.wirings
    };
  }

  addWiring () {
    this.setState((previousState) => {

      let keys = Object.keys(previousState.wirings);

      if(keys.length < PLUGBOARD_MAX_SIZE) {

        let newKey = keys.length.toString();
        previousState.wirings[newKey] = ['', ''];
        return {wirings: previousState.wirings};

      }
    });
  }

  removeWiring (key) {
    this.setState(function(previousState) {
      delete previousState.wirings[key];
      return {
        wirings: previousState.wirings
      };
    }, () => {
      this.props.eventManager.emit('change.plugBoard.removeWiring', key);
    });
  }

  render () {

    let wirings = Object.keys(this.state.wirings).map((key) => {
      let wiring = this.state.wirings[key];
      return (
        <li key={key}>
          <PlugBoardWiring wiring={wiring} index={key} />
          <button className="btn btn-danger" onClick={() => { this.removeWiring(key); }}>Remove</button>
        </li>
      );
    });

    return (
      <div className="enigmaPlugBoard">
        <h2>PlugBoard</h2>
        <button className="btn btn-primary" onClick={() => { this.addWiring(); }}>Add wiring</button>
        <ol className="enigmaPlugBoardWirings">
          {wirings}
        </ol>
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
