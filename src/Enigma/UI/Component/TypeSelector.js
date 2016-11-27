import React from 'react';
import EventEmitter from 'events';
import {TYPE_M3, TYPE_M4} from '../../Constants';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default class TypeSelector extends React.Component {

  updateType (type) {
    this.props.eventManager.emit('change.type', type);
  }

  render () {
    return (
      <FormGroup>
        <ControlLabel>Type</ControlLabel>
        <FormControl componentClass="select" value={this.props.type} onChange={(evt) => { this.updateType(evt.target.value); }}>
          <option value={TYPE_M3}>Enigma M3</option>
          <option value={TYPE_M4}>Enigma M4</option>
        </FormControl>
      </FormGroup>
    );
  }

}

TypeSelector.propTypes = {
  type: React.PropTypes.oneOf([TYPE_M3, TYPE_M4]).isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};
