import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import {Dispatcher} from 'flux';

const PLUGBOARD_MAX_SIZE = 10;

let uiDispatcher = new Dispatcher();

let EnigmaUI = React.createClass({
  render: function () {
    return (
      <div className="enigmaUI">
        <EnigmaPlugBoard/>
      </div>
    );
  }
});

let EnigmaPlugBoard = React.createClass({
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
    uiDispatcher.register((payload) => {
      console.log(payload);
    });
  }
});

let EnigmaPlugBoardWiring = React.createClass({
  getInitialState: function () {
    return {
      leftPlug: this.props.initialLeftPlug,
      rightPlug: this.props.initialRightPlug
    };
  },
  setPlug: function (prop, evt) {
    let mutatedState = {};
    mutatedState[prop] = evt.target.value;
    this.setState(mutatedState, function () {
      uiDispatcher.dispatch({
        action: 'plugBoard-setPlug',
        wiring: this.state
      });
    });
  },
  setLeftPlug: function (evt) {
    this.setPlug('leftPlug', evt);
  },
  setRightPlug: function (evt) {
    this.setPlug('rightPlug', evt);
  },
  render: function () {
    return (
      <div className="enigmaPlugBoardWiring">
        <input type="text" maxLength="1" pattern="[A-Z]" value={this.state.leftPlug} onChange={this.setLeftPlug}/>
        <input type="text" maxLength="1" pattern="[A-Z]" value={this.state.rightPlug} onChange={this.setRightPlug}/>
      </div>
    );
  }
});

ReactDOM.render(<EnigmaUI/>, document.getElementById('app'));
