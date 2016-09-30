import React from 'react';
import EnigmaPlugBoardWiring from './PlugBoard/PlugBoardWiring';

export const PLUGBOARD_MAX_SIZE = 10;

export default React.createClass({
  getInitialState: function () {

    let initialState = {
      wirings: {}
    };

    return initialState;

  },
  getNewWiringKey: function () {
    let now = new Date();
    return `w${now.getTime()}{now.getMilliseconds()}`;
  },
  render: function () {

    let wirings = Object.keys(this.state.wirings).map((key) => {
      let wiring = this.state.wirings[key];
      return (
        <li key={key}>
          <EnigmaPlugBoardWiring initialLeftPlug={wiring.leftPlug} initialRightPlug={wiring.rightPlug} updateWiring={(wiring) => { this.updateWiring(wiring, key); }} />
          <button onClick={() => {this.removeWiring(key);}}>Remove</button>
        </li>
      );
    });

    return (
      <div className="enigmaPlugBoard">
        <h2>PlugBoard</h2>
        <button onClick={this.addWiring}>Add wiring</button>
        <ol className="enigmaPlugBoardWirings">
          {wirings}
        </ol>
      </div>
    );
  },
  addWiring: function () {
    this.setState((previousState, currentProps) => {
      let keys = Object.keys(previousState.wirings);
      if(keys.length < PLUGBOARD_MAX_SIZE) {
        let newKey = this.getNewWiringKey();
        previousState.wirings[newKey] = {
          leftPlug: '',
          rightPlug: ''
        };
        return {wirings: previousState.wirings};
      }
    });
  },
  removeWiring: function (index) {
    this.setState(function(previousState) {
      delete previousState.wirings[index];
      return {
        wirings: previousState.wirings
      };
    });
  },
  updateWiring: function (wiring, index) {

    this.setState(function (previousState) {
      previousState.wirings[index].leftPlug = wiring.leftPlug;
      previousState.wirings[index].rightPlug = wiring.rightPlug;
      return {
        wirings: previousState.wirings
      };
    });
  },
  componentDidMount: function () {
    console.log('Do something');
  }
});
