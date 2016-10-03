import React from 'react';
import {normalizeInput} from 'enigma-minkiele/src/Utils';

export default class Keyboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputLetter: '',
      input: '',
      output: ''
    };
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput (evt) {

    try {

      let newInput = normalizeInput(evt.target.value);

      this.setState((previousState) => {
        let newOutput = this.props.enigma.getEncodedLetter(newInput);
        return {
          inputLetter: '',
          input: `${previousState.input}${newInput}`,
          output: `${previousState.output}${newOutput}`,
        }
      }, () => {
        this.props.updateWindowLetters();
      });
    } catch(e) {
      //Do nothing
    }
  }
  render () {
    return (
      <div className="keyboard">
        <h2>Keyboard</h2>
        <div className="keyboardInput">
          <code>
            {this.state.input}
          </code>
          <input type="text" value={this.state.inputLetter} onChange={this.updateInput} maxLength="1" pattern="[A-Z]" size="2" />
        </div>
        <div className="keyboardOutput">
          <code>
            {this.state.output}
          </code>
        </div>
      </div>
    );
  }
}
