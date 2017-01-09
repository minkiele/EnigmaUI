import React from 'react';
import {getLetter, getIndex, normalizeInput} from 'enigma-minkiele/dist/Utils';
import EventEmitter from 'events';
import NewPluggableWiring from '../../../Pluggable/NewPluggableWiring';

export default class NewReflectorWiring extends React.Component {

  isWiringComplete (wiring) {
    return !isNaN(parseInt(wiring[0])) && !isNaN(parseInt(wiring[1]));
  }

  getForbiddenLetters (andLetter = '') {
    let forbiddenLetters = [];
    this.props.wirings.forEach(function (wiring) {
      forbiddenLetters.push.apply(forbiddenLetters, wiring);
    });
    if(!isNaN(parseInt(andLetter))){
    forbiddenLetters.push(andLetter);
    }
    return forbiddenLetters;
  }

  renderAlphabet (disabledLetter = '') {
    let alphabet = [];

    let forbiddenLetters = this.getForbiddenLetters(disabledLetter);

    for(let i = 0; i < 26; i += 1) {
      let isDisabled = forbiddenLetters.indexOf(i) > -1;
      alphabet.push(<option key={i.toString()} disabled={isDisabled} value={i}>{i}</option>);
    }
    return alphabet;
  }

  render () {

    let renderAlphabet = this.renderAlphabet.bind(this);
    let isWiringComplete = this.isWiringComplete;

    return (
      <NewPluggableWiring {...this.props} addWiringEvent="change.reflector.addWiring" renderAlphabetCallback={renderAlphabet} validateWiringCallback={isWiringComplete} />
    );
  }

}

NewReflectorWiring.propTypes = {
  wirings: React.PropTypes.array.isRequired,
  eventManager: React.PropTypes.instanceOf(EventEmitter)
};

NewReflectorWiring.defaultProps = {
  wirings: []
};
