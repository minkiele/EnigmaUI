import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class ReflectorOptions extends React.Component {

  renderWirings () {
    let wirings = [];
    return wirings;
  }

  render () {
    return (
      <Well>
        <ControlLabel>Reflector Wirings</ControlLabel>
        <ListGroup>
          {this.renderWirings()}
        </ListGroup>
      </Well>
    );
  }

}
