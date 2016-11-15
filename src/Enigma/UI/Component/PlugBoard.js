import React from 'react';
import EventEmitter from 'events';
import PlugBoardWiring from './PlugBoard/PlugBoardWiring';
import NewPlugBoardWiring from './PlugBoard/NewPlugBoardWiring';

export const PLUGBOARD_MAX_SIZE = 10;

export default class PlugBoard extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      isAdding: false
    };

  }

  render () {

    let wirings = this.props.wirings.map((wiring) => {
      let key = wiring.join('');
      return (
        <li className="list-group-item" key={key}>
          <PlugBoardWiring wiring={wiring} index={key} eventManager={this.props.eventManager} />
        </li>
      );
    });

    let addWiring;

    if(this.props.wirings.length < PLUGBOARD_MAX_SIZE) {
      addWiring = (
        <div className="plugBoardAddWiring well">
          <label>New Wiring</label>
          <NewPlugBoardWiring wirings={this.props.wirings} eventManager={this.props.eventManager} />
        </div>
      );
    }

    return (
      <div className="enigmaPlugBoard">
        <ol className="enigmaPlugBoardWirings list-group">
          {wirings}
        </ol>
        {addWiring}
      </div>
    );
  }
}

PlugBoard.propTypes = {
  wirings: React.PropTypes.array.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

PlugBoard.defaultProps = {
  wirings: []
};
