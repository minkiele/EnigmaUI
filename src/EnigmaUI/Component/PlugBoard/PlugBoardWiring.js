import React from 'react';

export default class PlugBoardWiring extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      leftPlug: this.props.initialLeftPlug,
      rightPlug: this.props.initialRightPlug
    };
  }
  setPlug (prop, evt) {
    let mutatedState = {};
    mutatedState[prop] = evt.target.value;
    this.setState(mutatedState, () => {
      this.props.updateWiring({
          leftPlug: this.state.leftPlug,
          rightPlug: this.state.rightPlug
      });
    });
  }
  setLeftPlug (evt) {
    this.setPlug('leftPlug', evt);
  }
  setRightPlug (evt) {
    this.setPlug('rightPlug', evt);
  }
  renderAlphabet () {
    let alphabet = [];
    let aIndex = 'A'.charCodeAt(0);
    
    for(let i = 0; i < 26; i += 1) {
      let letter = String.fromCharCode(aIndex + i);
      alphabet.push(<option key={letter} value={letter}>{letter}</option>);
    }
    return alphabet;
  }
  render () {
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
}
