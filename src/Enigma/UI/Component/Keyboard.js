import React from 'react';
import {normalizeInput} from 'enigma-minkiele/src/Utils';
import EventEmitter from 'events';
import assign from 'object-assign';
import Row from '../Bootstrap/Row';

const EMPTY_STREAM = '';

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
      pendingInputLetter: EMPTY_STREAM
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
          pendingInputLetter: EMPTY_STREAM
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
    for(let i = 0; i < letters.length; i += 4) {
      output += `${letters.substr(i, 4)} `;
    }
    return output.trim();
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

    return (
      <div className={blockClassName}>
        {input}
        <span className={btnClassName}>
          <button className="btn btn-danger" onClick={() => { this.resetState(); }}>Reset</button>
        </span>
      </div>
    );
  }

  render () {

    return (
      <div className="keyboard">
        <Row>
          <div className="keyboardInput col-xs-12 col-md-2">
            {this.renderInputGroup(
              <input className="form-control" type="text" value={this.state.inputLetter} onChange={(evt) => { this.updateInput(evt.target.value); }} maxLength="1" pattern="[A-Z]" size="1" placeholder="Input" />
            )}
          </div>
          <div className="keyboardInput col-xs-12 col-md-5">
            <strong>Input:</strong>&nbsp;
            <code>
              {this.getGroupedLetters(this.state.input)}
            </code>
          </div>
          <div className="keyboardOutput col-xs-12 col-md-5">
            <strong>Output:</strong>&nbsp;
            <code>
              {this.getGroupedLetters(this.state.output)}
            </code>
          </div>
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
