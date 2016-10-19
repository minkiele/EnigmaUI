import React from 'react';
import {getLetter} from 'enigma-minkiele/src/Utils';

export default class PlugBoardWiring extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      leftPlug: this.props.initialLeftPlug,
      rightPlug: this.props.initialRightPlug
    };
    this.setLeftPlug = this.setLeftPlug.bind(this);
    this.setRightPlug = this.setRightPlug.bind(this);
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

    for(let i = 0; i < 26; i += 1) {
      let letter = getLetter(i);
      alphabet.push(<option key={letter} value={letter}>{letter}</option>);
    }
    return alphabet;
  }
  render () {
    let plugAlphabet = this.renderAlphabet();
    return (
      <div className="enigmaPlugBoardWiring">
        <select className="form-control" value={this.state.leftPlug} onChange={this.setLeftPlug}>
          <option value=""></option>
          {plugAlphabet}
        </select>
        <select className="form-control" value={this.state.rightPlug} onChange={this.setRightPlug}>
          <option value=""></option>
          {plugAlphabet}
        </select>
      </div>
    );
  }
}
