import React from 'react';
import EventEmitter from 'events';
import NewPlugBoardWiring from './PlugBoard/NewPlugBoardWiring';
import Pluggable from './Pluggable/Pluggable';

export const PLUGBOARD_MAX_SIZE = 10;

export default class PlugBoard extends React.Component {

  render () {

    let newPluggableWiring = <NewPlugBoardWiring {...this.props} />;

    return (
      <Pluggable {...this.props} maxSize={PLUGBOARD_MAX_SIZE} newPluggableWiring={newPluggableWiring} removeWiringEvent="change.plugBoard.removeWiring" />
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
