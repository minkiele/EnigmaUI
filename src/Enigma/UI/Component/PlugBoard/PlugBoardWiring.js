import React from 'react';
import {getLetter} from 'enigma-minkiele/src/Utils';

export default class PlugBoardWiring extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      wiring: this.props.wiring
    };
  }

  updatePlug (value, key) {
    this.setState(function (previousState) {
      previousState.wiring[key] = value;
      return previousState;
    }, () => {
      if(this.isWiringComplete()){
        this.props.eventManager.emit('change.plugBoard.updateWiring', this.state.wiring, this.props.key);
      }
    });
  }

  renderAlphabet () {
    let alphabet = [];

    for(let i = 0; i < 26; i += 1) {
      let letter = getLetter(i);
      alphabet.push(<option key={letter.toString()} value={letter}>{letter}</option>);
    }
    return alphabet;
  }

  isWiringComplete (wiring) {
    return wiring[0].length > 0 && wiring[1].length > 0;
  }

  render () {
    let plugAlphabet = this.renderAlphabet();
    return (
      <div className="enigmaPlugBoardWiring">
        <select className="form-control" value={this.state.wiring[0]} onChange={(evt) => { this.updatePlug(evt.target.value, 0); }}>
          <option value=""></option>
          {plugAlphabet}
        </select>
        <select className="form-control" value={this.state.wiring[1]} onChange={(evt) => { this.updatePlug(evt.target.value, 1); }}>
          <option value=""></option>
          {plugAlphabet}
        </select>
      </div>
    );
  }

}
