import React from 'react';
import Enigma from 'enigma-minkiele/src/Enigma';
import EnigmaM4 from 'enigma-minkiele/src/EnigmaM4';
import EnigmaPlugBoard from './Component/PlugBoard';
import Rotor from './Component/WiredWheel/Rotor/Rotor';
import Reflector from './Component/WiredWheel/Reflector/Reflector';
import ThinRotor from './Component/WiredWheel/Rotor/ThinRotor';
import ThinReflector from './Component/WiredWheel/Reflector/ThinReflector';

export const TYPE_M3 = 'M3';
export const TYPE_M4 = 'M4';

export default React.createClass({
  getInitialState: function () {
    return {
      type: TYPE_M3,
      machine: new Enigma()
    };
  },
  setEnigmaConfiguration: function (evt) {

    let type = evt.target.value;
    let machine;
    switch(type) {
      case TYPE_M3:
        machine = new Enigma();
        break;
      case TYPE_M4:
        machine = new EnigmaM4();
        break;
    }

    this.setState({
      type: type,
      machine: machine
    });

  },
  setReflectorConfiguration: function (config) {
    console.log(config);
  },
  setRotorConfiguration: function (config, rotor) {
    console.log(config, rotor);
  },
  setPlugBoardConfiguration: function (config) {
    console.log(config);
  },
  renderEnigmaConfiguration: function () {

    let config;

    switch(this.state.type) {
      case TYPE_M3:
        config = (
          <div className="enigmaM3Configuration">
            <div className="reflector">
              <h2>Reflector</h2>
              <Reflector updateReflector={this.setReflectorConfiguration} />
            </div>
          </div>
        );
        break;
      case TYPE_M4:
        config = (
          <div className="enigmaM4Configuration">
            <div className="reflector thinReflector">
              <h2>Thin Reflector</h2>
              <ThinReflector updateReflector={this.setReflectorConfiguration} />
            </div>
            <div className="rotor thinRotor">
              <h2>Fourth Rotor</h2>
              <ThinRotor updateRotor={(config) => { this.setRotorConfiguration(config, EnigmaM4.FOURTH_ROTOR); }} />
            </div>
          </div>
        );
        break;
    }

    return config;

  },
  render: function () {

    return (
      <div className="enigmaUI">
        <h1>EnigmaUI</h1>
        <div className="enigmaType">
          <label>Type</label>
          <select value={this.state.type} onChange={this.setEnigmaConfiguration}>
            <option value={TYPE_M3}>Enigma M3</option>
            <option value={TYPE_M4}>Enigma M4</option>
          </select>
        </div>
        <div className="enigmaConfiguration">
          {this.renderEnigmaConfiguration()}
          <div className="leftRotor">
            <h2>Left Rotor</h2>
            <Rotor updateRotor={(config) => { this.setRotorConfiguration(config, Enigma.LEFT_ROTOR); }} />
          </div>
          <div className="centerRotor">
            <h2>Center Rotor</h2>
            <Rotor updateRotor={(config) => { this.setRotorConfiguration(config, Enigma.CENTER_ROTOR); }} />
          </div>
          <div className="rightRotor">
            <h2>Right Rotor</h2>
            <Rotor updateRotor={(config) => { this.setRotorConfiguration(config, EnigmaM4.RIGHT_ROTOR); }} />
          </div>
        </div>
        <EnigmaPlugBoard updatePlugBoard={this.setPlugBoardConfiguration} />
      </div>
    );
  }
});
