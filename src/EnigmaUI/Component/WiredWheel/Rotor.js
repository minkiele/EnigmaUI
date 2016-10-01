import React from 'react';
import {getLetter} from 'enigma-minkiele/src/Utils';

export const INITIAL_ROTOR_TYPE = '';
export const INITIAL_RING_POSITION = 0;
export const INITIAL_WINDOW_POSITION = 0;

export default React.createClass({
  getDefaultProps: function () {
    return {
      type: INITIAL_ROTOR_TYPE
    };
  },
  getInitialState: function () {
    return {
      type: this.props.type || INITIAL_ROTOR_TYPE,
      ringPosition: INITIAL_RING_POSITION,
      windowPosition: INITIAL_WINDOW_POSITION
    };
  },
  getRingPositions: function () {
    let options = [];
    for(let i = 0; i < 26; i += 1){
      let label = `${getLetter(i)} - ${i + 1}`;
      options.push(
        <option key={i} value={i}>{label}</option>
      );
    }

    return options;

  },
  renderChoices: function () {
    var options = [];
    for(var i = 0; i < this.props.choices.length; i += 1) {
      let choice = this.props.choices[i];
      options.push(
        <option key={choice.value} value={choice.value}>
          {choice.label}
        </option>
      );
    }
    return options;
  },
  updateType: function (evt) {
    this.setState({
      type: evt.target.value
    });
  },
  updateRingPosition: function (evt) {
    this.setState({
      ringPosition: evt.target.value
    });
  },
  updateWindowPosition: function (evt) {
    this.setState({
      windowPosition: evt.target.value
    });
  },
  render: function () {
    let choices = this.renderChoices();
    let ringPositions = this.getRingPositions();
    let windowPosition = getLetter(this.state.windowPosition);
    return (
      <div className="enigmaRotor">
        <div className="enigmaRotorType">
          <label>Type</label>
          <select value={this.state.type} onChange={this.updateType}>
            <option value="">Choose a rotor</option>
            {choices}
          </select>
        </div>
        <div className="enigmaRotorRingPosition">
          <label>Ring Position</label>
          <select value={this.state.ringPosition} onChange={this.updateRingPosition}>
            <option value="">Choose a ring position</option>
            {ringPositions}
          </select>
        </div>
        <div className="enigmaRotorWindowPosition">
          <label>Window Position</label>
          <input type="text" value={windowPosition} onChange={this.updateRingPosition}/>
        </div>
      </div>
    );
  }
});
