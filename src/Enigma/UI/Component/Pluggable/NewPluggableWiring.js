import React from 'react';
import {getLetter, getIndex, normalizeInput} from 'enigma-minkiele/dist/Utils';
import EventEmitter from 'events';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class NewPluggableWiring extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      wiring: this.getNewWiring()
    };

  }

  getNewWiring () {
    return ['', ''];
  }

  isWiringComplete () {
    try {
      this.state.wiring.forEach(normalizeInput);
      return true;
    } catch (err) {
      return false;
    }
  }

  updatePlug (value, key) {
    this.setState(function (previousState) {
      let wiring = previousState.wiring.slice();
      wiring[key] = value;
      return {
        wiring: wiring
      };
    });
  }

  addWiring () {
    if(this.isWiringComplete()) {
      this.props.eventManager.emit(this.props.addWiringEvent, this.state.wiring);
      this.setState({
        wiring: this.getNewWiring()
      });
    }
  }

  render () {

    return (
      <Row className="enigmaPluggableWiring">
        <Col xs={12} sm={5}>
          <FormGroup>
            <FormControl componentClass="select" value={this.state.wiring[0]} onChange={(evt) => { this.updatePlug(evt.target.value, 0); }}>
              <option value=""></option>
              {this.props.renderAlphabet(this.state.wiring[1])}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={12} sm={5}>
          <FormGroup>
            <FormControl componentClass="select" value={this.state.wiring[1]} onChange={(evt) => { this.updatePlug(evt.target.value, 1); }}>
              <option value=""></option>
              {this.props.renderAlphabet(this.state.wiring[0])}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={12} sm={2}>
          <Button bsStyle="primary" block disabled={!this.isWiringComplete()} onClick={() => { this.addWiring(); }}>Plug</Button>
        </Col>
      </Row>
    );
  }

}

NewPluggableWiring.propTypes = {
  wirings: React.PropTypes.array.isRequired,
  addWiringEvent: React.PropTypes.string.isRequired,
  renderAlphabet: React.PropTypes.func.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

NewPluggableWiring.defaultProps = {
  wirings: [],
  addWiringEvent: 'change.pluggable.addWiring'
};
