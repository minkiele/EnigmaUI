import React from 'react';
import EnigmaPlugBoardWiring from './PlugBoard/PlugBoardWiring';

export const PLUGBOARD_MAX_SIZE = 10;

export default React.createClass({
  getInitialState: function () {

    let initialState = {
      wirings: []
    };

    return initialState;

  },

  render: function () {

    let wirings = this.state.wirings.map((wiring, index) => {
      let key = `wiring-${index + 1}`;
      return (
        <li key={key}>
          <EnigmaPlugBoardWiring {...wiring} />
          <button onClick={() => {this.removeWiring(index)}}>Remove</button>
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
    this.setState(function(previousState, currentProps) {
      if(previousState.wirings.length < PLUGBOARD_MAX_SIZE) {
        let wirings = previousState.wirings;
        wirings.push({
          initialLeftPlug: '',
          initialRightPlug: ''
        });
        return {wirings: wirings};
      }
    });
  },
  removeWiring: function (index) {
    this.setState((previousState) => {
      previousState.wirings.splice(index, 1);
      return {
        wirings: previousState.wirings
      };
    });
  },
  componentDidMount: function () {
    console.log('Do something');
  }
});
