import React from 'react';
import EnigmaPlugBoard from './Component/PlugBoard';
import Rotor from './Component/WiredWheel/Rotor/Rotor';
import Reflector from './Component/WiredWheel/Reflector/Reflector';
import ThinRotor from './Component/WiredWheel/Rotor/ThinRotor';
import ThinReflector from './Component/WiredWheel/Reflector/ThinReflector';

export const TYPE_M3 = 'M3';
export const TYPE_M4 = 'M4';

export default React.createClass({
  getInitialState: function () {
    return { type: TYPE_M3 };
  },
  setEnigmaConfiguration: function (evt) {
    this.setState({
      type: evt.target.value
    });
  },
  renderEnigmaConfiguration: function () {
    if(this.state.type === TYPE_M3) {
      return (
        <div className="enigmaM3Configuration">
          <div className="reflector">
            <h2>Reflector</h2>
            <Reflector/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="enigmaM4Configuration">
          <div className="reflector thinReflector">
            <h2>Thin Reflector</h2>
            <ThinReflector/>
          </div>
          <div className="rotor thinRotor">
            <h2>Fourth Rotor</h2>
            <ThinRotor/>
          </div>
        </div>
      );
    }
  },
  render: function () {

    let enigmaConfiguration = this.renderEnigmaConfiguration();

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
          {enigmaConfiguration}
          <div className="leftRotor">
            <h2>Left Rotor</h2>
            <Rotor/>
          </div>
          <div className="centerRotor">
            <h2>Center Rotor</h2>
            <Rotor/>
          </div>
          <div className="rightRotor">
            <h2>Right Rotor</h2>
            <Rotor/>
          </div>
        </div>
        <EnigmaPlugBoard/>
      </div>
    );
  }
});
