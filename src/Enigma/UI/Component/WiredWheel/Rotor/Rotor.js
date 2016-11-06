import React from 'react';
import EventEmitter from 'events';
import AbstractRotor, {INITIAL_ROTOR_TYPE, INITIAL_RING_POSITION, INITIAL_WINDOW_POSITION} from '../Rotor';
import {RO_TYPE_I, RO_TYPE_II, RO_TYPE_III, RO_TYPE_IV, RO_TYPE_V, RO_TYPE_VI, RO_TYPE_VII, RO_TYPE_VIII} from '../../../../Constants';

export default class Rotor extends React.Component {

  renderChoices () {
    return [RO_TYPE_I, RO_TYPE_II, RO_TYPE_III, RO_TYPE_IV, RO_TYPE_V, RO_TYPE_VI, RO_TYPE_VII, RO_TYPE_VIII].map(function (rotor) {
      return <option key={rotor} value={rotor}>{rotor}</option>;
    });
  }

  render () {
    return (
      <AbstractRotor {...this.props}>
        {this.renderChoices()}
      </AbstractRotor>
    );
  }
}

Rotor.propTypes = {
  type: React.PropTypes.oneOf([RO_TYPE_I, RO_TYPE_II, RO_TYPE_III, RO_TYPE_IV, RO_TYPE_V, RO_TYPE_VI, RO_TYPE_VII, RO_TYPE_VIII, INITIAL_ROTOR_TYPE]).isRequired,
  position: React.PropTypes.string.isRequired,
  ringPosition: React.PropTypes.number.isRequired,
  windowLetter: React.PropTypes.string.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

Rotor.defaultProps = {
  type: INITIAL_ROTOR_TYPE,
  ringPosition: INITIAL_RING_POSITION,
  windowLetter: INITIAL_WINDOW_POSITION
};
