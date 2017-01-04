import React from 'react';
import {getLetter, getIndex, normalizeInput} from 'enigma-minkiele/dist/Utils';
import EventEmitter from 'events';
import NewPluggableWiring from '../Pluggable/NewPluggableWiring';

export default class NewPlugBoardWiring extends React.Component {

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

  render () {

    let renderAlphabet = this.renderAlphabet.bind(this);

    return (
      <NewPluggableWiring {...this.props} addWiringEvent="change.plugBoard.addWiring" renderAlphabet={renderAlphabet} />
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
