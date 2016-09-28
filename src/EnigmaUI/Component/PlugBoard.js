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

    let wirings = this.state.wirings.map(function (wiring, index) {
      let key = `wiring-${index}`;
      return <li key={key}><EnigmaPlugBoardWiring {...wiring} /></li>
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
  componentDidMount: function () {
    console.log('Do something');
  }
});
