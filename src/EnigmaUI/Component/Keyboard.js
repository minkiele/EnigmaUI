import React from 'react';
import {normalizeInput} from 'enigma-minkiele/src/Utils';

export default React.createClass({
  getInitialState: function () {
    return {
      inputLetter: '',
      input: '',
      output: ''
    };
  },
  updateInput: function (evt) {

    var inputLetter = evt.target.value;

    this.setState((previousState) => {
      let newInput = normalizeInput(inputLetter);
      let newOutput = this.props.enigma.getEncodedLetter(newInput);
      return {
        inputLetter: '',
        input: `${previousState.input}${newInput}`,
        output: `${previousState.output}${newOutput}`,
      }
    }, () => {
      this.props.updateWindowLetters();
    });
  },
  render: function () {
    return (
      <div className="keyboard">
        <h2>Keyboard</h2>
        {this.state.input}
        <input type="text" value={this.state.inputLetter} onChange={this.updateInput} maxLength="1" pattern="[A-Z]" size="2" />
        <div className="output">
          {this.state.output}
        </div>
      </div>
    );
  }
});
