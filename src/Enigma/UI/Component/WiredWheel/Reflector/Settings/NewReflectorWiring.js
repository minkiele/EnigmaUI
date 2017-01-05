import React from 'react';
import {getLetter, getIndex, normalizeInput} from 'enigma-minkiele/dist/Utils';
import EventEmitter from 'events';
import NewPluggableWiring from '../../../Pluggable/NewPluggableWiring';

export default class NewReflectorWiring extends React.Component {

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
      let isDisabled = forbiddenLetters.indexOf(i) > -1;
      alphabet.push(<option key={i.toString()} disabled={isDisabled} value={i}>{i}</option>);
    }
    return alphabet;
  }

  render () {

    let renderAlphabet = this.renderAlphabet.bind(this);

    return (
      <NewPluggableWiring {...this.props} addWiringEvent="change.reflector.addWiring" renderAlphabet={renderAlphabet} />
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
