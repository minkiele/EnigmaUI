import React from 'react';
import EventEmitter from 'events';
import NewReflectorWiring from './NewReflectorWiring';
import Pluggable from '../../../Pluggable/Pluggable';

export const WIRINGS_MAX_SIZE = 12;

export default class ReflectorD extends React.Component {

  render () {

    let newPluggableWiring = <NewReflectorWiring {...this.props} />;

    return (
      <Pluggable {...this.props} maxSize={WIRINGS_MAX_SIZE} newPluggableWiring={newPluggableWiring} removeWiringEvent="change.reflector.removeWiring" />
    );
  }
}

ReflectorD.propTypes = {
  wirings: React.PropTypes.array.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

ReflectorD.defaultProps = {
  wirings: []
};
