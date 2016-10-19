import React from 'react';
import PlugBoardWiring from './PlugBoard/PlugBoardWiring';

export const PLUGBOARD_MAX_SIZE = 10;

export default class PlugBoard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      wirings: {}
    };
    this.addWiring = this.addWiring.bind(this);
  }
  getNewWiringKey () {
    let now = new Date();
    return `w${now.getTime()}${now.getMilliseconds()}`;
  }
  render () {

    let wirings = Object.keys(this.state.wirings).map((key) => {
      let wiring = this.state.wirings[key];
      return (
        <li key={key}>
          <PlugBoardWiring initialLeftPlug={wiring.leftPlug} initialRightPlug={wiring.rightPlug} updateWiring={(wiring) => { this.updateWiring(wiring, key); }} />
          <button className="btn btn-danger" onClick={() => { this.removeWiring(key); }}>Remove</button>
        </li>
      );
    });

    return (
      <div className="enigmaPlugBoard">
        <h2>PlugBoard</h2>
        <button className="btn btn-primary" onClick={this.addWiring}>Add wiring</button>
        <ol className="enigmaPlugBoardWirings">
          {wirings}
        </ol>
      </div>
    );
  }
  addWiring () {
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
    }, () => {
      this.props.updatePlugBoard(this.state.wirings);
    });
  }
  removeWiring (index) {
    this.setState(function(previousState) {
      delete previousState.wirings[index];
      return {
        wirings: previousState.wirings
      };
    }, () => {
      this.props.updatePlugBoard(this.state.wirings);
    });
  }
  updateWiring (wiring, index) {

    this.setState(function (previousState) {
      previousState.wirings[index].leftPlug = wiring.leftPlug;
      previousState.wirings[index].rightPlug = wiring.rightPlug;
      return {
        wirings: previousState.wirings
      };
    }, () => {
      this.props.updatePlugBoard(this.state.wirings);
    });
  }
}
