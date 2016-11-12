import React from 'react';
import {normalizeInput} from 'enigma-minkiele/src/Utils';
import EventEmitter from 'events';

const EMPTY_STREAM = '';

export default class Keyboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputLetter: EMPTY_STREAM,
      input: EMPTY_STREAM,
      output: EMPTY_STREAM,
      pendingInputLetter: EMPTY_STREAM
    };
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
        return {
          pendingInputLetter: EMPTY_STREAM,
          input: `${previousState.input}${previousState.pendingInputLetter}`,
          output: `${previousState.output}${futureProps.lastEncodedLetter}`
        }
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

  render () {
    return (
      <div className="keyboard">
        <h2>Keyboard</h2>
        <div className="keyboardInput">
          <code>
            {this.getGroupedLetters(this.state.input)}
          </code>
          <input className="form-control" type="text" value={this.state.inputLetter} onChange={(evt) => { this.updateInput(evt.target.value); }} maxLength="1" pattern="[A-Z]" size="2" />
        </div>
        <div className="keyboardOutput">
          <code>
            {this.getGroupedLetters(this.state.output)}
          </code>
        </div>
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
