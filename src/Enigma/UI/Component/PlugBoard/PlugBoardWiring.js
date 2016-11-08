import React from 'react';
import {getLetter} from 'enigma-minkiele/src/Utils';

export default class PlugBoardWiring extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      //Shallow copy of the array
      wiring: this.props.wiring.slice()
    };
  }

  updatePlug (value, key) {
    this.setState(function (previousState) {
      previousState.wiring[key] = value;
      return previousState;
    }, () => {
      this.props.eventManager.emit('change.plugBoard.wiringUpdated', this.props.wiring, this.state.wiring);
    });
  }

  renderAlphabet (disabledIndex = -1) {
    let alphabet = [];

    for(let i = 0; i < 26; i += 1) {
      let letter = getLetter(i);
      let isDisabled = disabledIndex === letter;
      alphabet.push(<option key={letter.toString()} disabled={isDisabled} value={letter}>{letter}</option>);
    }
    return alphabet;
  }

  render () {
    return (
      <div className="enigmaPlugBoardWiring">
        <select className="form-control" value={this.state.wiring[0]} onChange={(evt) => { this.updatePlug(evt.target.value, 0); }}>
          <option value=""></option>
          {this.renderAlphabet(this.state.wiring[1])}
        </select>
        <select className="form-control" value={this.state.wiring[1]} onChange={(evt) => { this.updatePlug(evt.target.value, 1); }}>
          <option value=""></option>
          {this.renderAlphabet(this.state.wiring[0])}
        </select>
      </div>
    );
  }

}
