import React from 'react';
import EventEmitter from 'events';
import {getLetter, normalizeInput} from 'enigma-minkiele/src/Utils';
import {toInt} from '../../../Utils';

export const INITIAL_ROTOR_TYPE = '';
export const INITIAL_RING_POSITION = 0;
export const INITIAL_WINDOW_POSITION = 'A';

export default class Rotor extends React.Component {

  updateType (type) {
      this.props.eventManager.emit('change.rotor.type', type, this.props.position);
  }
  updateRingPosition (ringPosition) {
      this.props.eventManager.emit('change.rotor.ringPosition', toInt(ringPosition), this.props.position);
  }
  updateWindowLetter (windowLetter) {
      this.props.eventManager.emit('change.rotor.windowLetter', normalizeInput(windowLetter), this.props.position);
  }

  renderRingPositions () {
    let options = [];
    for(let i = 0; i < 26; i += 1){
      let label = `${getLetter(i)} - ${(i + 1)}`;
      options.push(
        <option key={i.toString()} value={i}>{label}</option>
      );
    }

    return options;

  }

  render () {
    return (
      <div className="enigmaRotor">
        <div className="enigmaRotorType">
          <label>Type</label>
          <select className="form-control" value={this.props.type} onChange={(evt) => { this.updateType(evt.target.value); }}>
            <option value="">Choose a rotor</option>
            {this.props.children}
          </select>
        </div>
        <div className="enigmaRotorRingPosition">
          <label>Ring Position</label>
          <select className="form-control" value={this.props.ringPosition} onChange={(evt) => { this.updateRingPosition(evt.target.value); }}>
            <option value="">Choose a ring position</option>
            {this.renderRingPositions()}
          </select>
        </div>
        <div className="enigmaRotorWindowLetter">
          <label>Window Position</label>
          <input className="form-control" type="text" value={this.props.windowLetter} onChange={(evt) => { this.updateWindowLetter(evt.target.value); }} maxLength="1" pattern="[A-Z]" size="2" />
        </div>
      </div>
    );
  }
}

Rotor.propTypes = {
  type: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired,
  ringPosition: React.PropTypes.number.isRequired,
  windowLetter: React.PropTypes.string.isRequired,
  usedRotors: React.PropTypes.array.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

Rotor.defaultProps = {
  type: INITIAL_ROTOR_TYPE,
  ringPosition: INITIAL_RING_POSITION,
  windowLetter: INITIAL_WINDOW_POSITION
};
