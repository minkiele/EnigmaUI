import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {
      leftPlug: this.props.initialLeftPlug,
      rightPlug: this.props.initialRightPlug
    };
  },
  setPlug: function (prop, evt) {
    let mutatedState = {};
    mutatedState[prop] = evt.target.value;
    this.setState(mutatedState, () => {
      this.props.updateWiring({
          leftPlug: this.state.leftPlug,
          rightPlug: this.state.rightPlug
      });
    });
  },
  setLeftPlug: function (evt) {
    this.setPlug('leftPlug', evt);
  },
  setRightPlug: function (evt) {
    this.setPlug('rightPlug', evt);
  },
  renderAlphabet: function () {
    let alphabet = [];
    let aIndex = 'A'.charCodeAt(0);
    
    for(let i = 0; i < 26; i += 1) {
      let letter = String.fromCharCode(aIndex + i);
      alphabet.push(<option key={letter} value={letter}>{letter}</option>);
    }
    return alphabet;
  },
  render: function () {
    let plugAlphabet = this.renderAlphabet();
    // let rightPlugAlphabet = this.renderAlphabet();

    return (
      <div className="enigmaPlugBoardWiring">
        <select value={this.state.leftPlug} onChange={this.setLeftPlug}>
          <option value=""></option>
          {plugAlphabet}
        </select>
        <select value={this.state.rightPlug} onChange={this.setRightPlug}>
          <option value=""></option>
          {plugAlphabet}
        </select>
      </div>
    );
  }
});
