import React from 'react';
import EventEmitter from 'events';
import {getLetter, normalizeInput} from 'enigma-minkiele/dist/Utils';
import {toInt} from '../../../Utils';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

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
        <FormGroup className="enigmaRotorType">
          <ControlLabel>Type</ControlLabel>
          <FormControl componentClass="select" value={this.props.type} onChange={(evt) => { this.updateType(evt.target.value); }}>
            <option value="">Choose a rotor</option>
            {this.props.children}
          </FormControl>
        </FormGroup>
        <FormGroup className="enigmaRotorRingPosition">
          <ControlLabel>Ring Position</ControlLabel>
          <FormControl componentClass="select" value={this.props.ringPosition} onChange={(evt) => { this.updateRingPosition(evt.target.value); }}>
            <option value="">Choose a ring position</option>
            {this.renderRingPositions()}
          </FormControl>
        </FormGroup>
        <FormGroup className="enigmaRotorWindowLetter">
          <ControlLabel>Window Position</ControlLabel>
          <FormControl type="text" value={this.props.windowLetter} onChange={(evt) => { this.updateWindowLetter(evt.target.value); }} maxLength="1" pattern="[A-Z]" size="2" />
        </FormGroup>
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
