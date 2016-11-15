import React from 'react';
import {getLetter, getIndex, normalizeInput} from 'enigma-minkiele/src/Utils';
import EventEmitter from 'events';

export default class NewPlugBoardWiring extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      wiring: this.getNewWiring()
    };

  }

  getNewWiring () {
    return ['', ''];
  }

  isWiringComplete () {
    try {
      this.state.wiring.forEach(normalizeInput);
      return true;
    } catch (err) {
      return false;
    }
  }

  updatePlug (value, key) {
    this.setState(function (previousState) {
      let wiring = previousState.wiring.slice();
      wiring[key] = value;
      return {
        wiring: wiring
      };
    });
  }

  getForbiddenLetters (andLetter = '') {
    let forbiddenLetters = [];
    this.props.wirings.forEach(function (wiring) {
      forbiddenLetters.push.apply(forbiddenLetters, wiring);
    });
    if(andLetter.length > 0){
    forbiddenLetters.push(andLetter);
    }
    return forbiddenLetters;
  }

  renderAlphabet (disabledLetter = '') {
    let alphabet = [];

    let forbiddenLetters = this.getForbiddenLetters(disabledLetter);

    for(let i = 0; i < 26; i += 1) {
      let letter = getLetter(i);
      let isDisabled = forbiddenLetters.indexOf(letter) > -1;
      alphabet.push(<option key={letter.toString()} disabled={isDisabled} value={letter}>{letter}</option>);
    }
    return alphabet;
  }

  addWiring () {
    if(this.isWiringComplete()) {
      this.props.eventManager.emit('change.plugBoard.addWiring', this.state.wiring);
      this.setState({
        wiring: this.getNewWiring()
      });
    }
  }

  render () {

    return (
      <div className="row enigmaPlugBoardWiring">
        <div className="col-xs-12 col-sm-5">
          <select className="form-control" value={this.state.wiring[0]} onChange={(evt) => { this.updatePlug(evt.target.value, 0); }}>
            <option value=""></option>
            {this.renderAlphabet(this.state.wiring[1])}
          </select>
        </div>
        <div className="col-xs-12 col-sm-5">
          <select className="form-control" value={this.state.wiring[1]} onChange={(evt) => { this.updatePlug(evt.target.value, 1); }}>
            <option value=""></option>
            {this.renderAlphabet(this.state.wiring[0])}
          </select>
        </div>
        <div className="col-xs-12 col-sm-2">
          <button className="btn btn-primary btn-block" disabled={!this.isWiringComplete()} onClick={() => { this.addWiring(); }}>Plug</button>
        </div>
      </div>
    );
  }

}

NewPlugBoardWiring.propTypes = {
  wirings: React.PropTypes.array.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

NewPlugBoardWiring.defaultProps = {
  wirings: []
};
