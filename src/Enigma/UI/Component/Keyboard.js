import React from 'react';
import {normalizeInput} from 'enigma-minkiele/dist/Utils';
import EventEmitter from 'events';
import assign from 'object-assign';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

import {KEYBOARD_EMPTY_STREAM as EMPTY_STREAM, DEFAULT_GROUP_BY} from '../../Constants';

export default class Keyboard extends React.Component {

  constructor (props) {
    super(props);
    this.state = this.getResetState();
  }

  getResetState () {
    return {
      inputLetter: EMPTY_STREAM,
      input: EMPTY_STREAM,
      output: EMPTY_STREAM,
      pendingInputLetter: EMPTY_STREAM,
      groupBy: DEFAULT_GROUP_BY
    };
  }

  resetState () {
    this.setState(this.getResetState());
  }

  updateInput (value) {

    try {

      let normalizedValue = normalizeInput(value);

      this.setState((previousState) => {
        return {
          inputLetter: '',
          pendingInputLetter: normalizedValue
        }
      }, () => {
        this.props.eventManager.emit('change.keyboard.input', this.state.pendingInputLetter);
      });
    } catch(e) {
      //Do nothing
    }
  }

  componentWillReceiveProps (futureProps) {
    if(this.state.pendingInputLetter !== EMPTY_STREAM) {
      this.setState(function (previousState) {

        let newState = {
          pendingInputLetter: EMPTY_STREAM,
          groupBy: previousState.groupBy
        };

        if(!!futureProps.lastEncodedLetter) {
          assign(newState, {
            input: `${previousState.input}${previousState.pendingInputLetter}`,
            output: `${previousState.output}${futureProps.lastEncodedLetter}`
          });
        }

        return newState;

      });
    }
  }

  getGroupedLetters (letters) {
    let output = '';
    for(let i = 0; i < letters.length; i += this.state.groupBy) {
      output += `${letters.substr(i, this.state.groupBy)} `;
    }
    return output.trim();
  }

  useGroupBy () {
    return this.state.groupBy > 0;
  }

  updateGroupBy (value) {
    value = parseInt(value);
    if(value >= 0){
      this.setState({
        groupBy: value
      });
    }
  }

  renderInputGroup (input) {

    let blockClassName;
    let btnClassName;

    if(this.state.output.length > 0){
      blockClassName = 'input-group';
      btnClassName = 'input-group-btn';
    } else {
      btnClassName = 'hidden';
    }


    //Cannot use input groups here, spawning a new reset button
    // will trigger a focus change
    return (
      <div className={blockClassName}>
        {input}
        <span className={btnClassName}>
          <Button bsStyle="danger" onClick={() => { this.resetState(); }}>Reset</Button>
        </span>
      </div>
    );
  }

  render () {

    return (
      <div className="keyboard">
        <Row>
          <Col className="keyboardInput" xs={12} md={2}>
            <FormGroup>
              {this.renderInputGroup(
                <FormControl type="text" value={this.state.inputLetter} onChange={(evt) => { this.updateInput(evt.target.value); }} maxLength="1" pattern="[A-Z]" size="1" placeholder="Input" />
              )}
            </FormGroup>
          </Col>
          <Col className="keyboardInput" xs={12} md={5}>
            <strong>Input:</strong>&nbsp;
            <code>
              {this.useGroupBy() ? this.getGroupedLetters(this.state.input) : this.state.input }
            </code>
          </Col>
          <Col className="keyboardOutput" xs={12} md={5}>
            <strong>Output:</strong>&nbsp;
            <code>
              {this.useGroupBy() ? this.getGroupedLetters(this.state.output) : this.state.output}
            </code>
          </Col>
        </Row>
        <Row>
          <Col className="keyboardOutput" xs={12} md={2}>
            <FormGroup className="splitSize">
              <label>Group output by</label>
              <FormControl type="number" value={this.state.groupBy} onChange={(evt) => { this.updateGroupBy(evt.target.value); }} />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

Keyboard.propTypes = {
  lastEncodedLetter: React.PropTypes.string.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

Keyboard.defaultProps = {
  lastEncodedLetter: EMPTY_STREAM
};
