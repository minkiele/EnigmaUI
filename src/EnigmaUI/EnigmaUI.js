import React from 'react';
import PlugBoard from './Component/PlugBoard';
import Rotor from './Component/WiredWheel/Rotor/Rotor';
import Reflector from './Component/WiredWheel/Reflector/Reflector';
import ThinRotor from './Component/WiredWheel/Rotor/ThinRotor';
import ThinReflector from './Component/WiredWheel/Reflector/ThinReflector';
import Keyboard from './Component/Keyboard';

import Enigma from 'enigma-minkiele/src/Enigma';
import EnigmaM4 from 'enigma-minkiele/src/EnigmaM4';
import RotorI from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorI';
import RotorII from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorII';
import RotorIII from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorIII';
import RotorIV from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorIV';
import RotorV from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorV';
import RotorVI from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorVI';
import RotorVII from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorVII';
import RotorVIII from 'enigma-minkiele/src/Component/WiredWheel/Rotor/RotorVIII';

import ThinRotorBeta from 'enigma-minkiele/src/Component/WiredWheel/Rotor/ThinRotor/ThinRotorBeta';
import ThinRotorGamma from 'enigma-minkiele/src/Component/WiredWheel/Rotor/ThinRotor/ThinRotorGamma';

import ReflectorA from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorA';
import ReflectorB from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorB';
import ReflectorC from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorC';
import ReflectorBeta from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorBeta';
import ReflectorGamma from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ReflectorGamma';

import ThinReflectorB from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ThinReflector/ThinReflectorB';
import ThinReflectorC from 'enigma-minkiele/src/Component/WiredWheel/Reflector/ThinReflector/ThinReflectorC';


export const TYPE_M3 = 'M3';
export const TYPE_M4 = 'M4';

export default class EnigmaUI extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      type: TYPE_M3,
      machine: new Enigma()
    };

    this.setReflectorConfiguration = this.setReflectorConfiguration.bind(this);
    this.setEnigmaConfiguration = this.setEnigmaConfiguration.bind(this);
    this.updateWindowLetters = this.updateWindowLetters.bind(this);
    this.setPlugBoardConfiguration = this.setPlugBoardConfiguration.bind(this);

  }
  setEnigmaConfiguration (evt) {

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

  }
  setReflectorConfiguration (config) {
    this.setState((previousState) => {

      let newState = {
        machine: previousState.machine,
      };

      let currentReflector;

      if(previousState.reflector !== config.type) {
        switch(config.type) {
          case 'A':
            currentReflector = new ReflectorA();
            break;
          case 'B':
            currentReflector = new ReflectorB();
            break;
          case 'C':
            currentReflector = new ReflectorC();
            break;
          case 'BETA':
            currentReflector = new ReflectorBeta();
            break;
          case 'GAMMA':
            currentReflector = new ReflectorGamma();
            break;
          case 'THINB':
            currentReflector = new ThinReflectorB();
            break;
          case 'THINC':
            currentReflector = new ThinReflectorC();
            break;
        }
      }

      if(!!currentReflector) {
        newState.reflector = currentReflector;
        newState.machine.setReflector(currentReflector);
        newState.reflector = config.type;
      }

      return newState;

    });
  }
  setRotorConfiguration (config, rotor) {
    this.setState((previousState) => {

      let newState = {
        machine: previousState.machine,
      };

      let currentRotor;

      if(previousState[rotor] !== config.type) {
        switch(config.type) {
          case 'I':
            currentRotor = new RotorI();
            break;
          case 'II':
            currentRotor = new RotorII();
            break;
          case 'III':
            currentRotor = new RotorIII();
            break;
          case 'IV':
            currentRotor = new RotorIV();
            break;
          case 'V':
            currentRotor = new RotorV();
            break;
          case 'VI':
            currentRotor = new RotorVI();
            break;
          case 'VII':
            currentRotor = new RotorVII();
            break;
          case 'VIII':
            currentRotor = new RotorVIII();
            break;
          case 'BETA':
            currentRotor = new ThinRotorBeta();
            break;
          case 'GAMMA':
            currentRotor = new ThinRotorGamma();
            break;
        }

        newState.machine.setRotor(currentRotor, rotor);
        newState[rotor] = config.type;

      } else {
        currentRotor = previousState.machine.getRotor(rotor);
      }

      if(!!currentRotor) {

        let ringPosition = parseInt(config.ringPosition);

        currentRotor.setRingPosition(ringPosition);
        newState[`${rotor}-ringPosition`] = ringPosition;

        newState.machine.setRotorWindowLetter(config.windowLetter, rotor);
        newState[`${rotor}-windowLetter`] = config.windowLetter;
      }

      return newState;

    });
  }
  setPlugBoardConfiguration (config) {
    this.setState((previousState) => {

      let newState = {
        machine: previousState.machine,
      };

      newState.machine.plugBoard.unplugAllWires();

      Object.keys(config).forEach(function (key) {
        try{
          newState.machine.plugBoard.plugWire(config[key].leftPlug, config[key].rightPlug);
        } catch (e) {
          //What?
          console.error(e);
          //Everything is ok
        }
      });

      return newState;

    });
  }
  renderEnigmaConfiguration () {

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

  }
  updateWindowLetters () {
    console.log('Should perform an update of the window positions');
  }
  render () {

    return (
      <div className="enigmaUI">
        <h1>EnigmaUI</h1>
        <div className="enigmaType">
          <label>Type</label>
          <select className="form-control" value={this.state.type} onChange={this.setEnigmaConfiguration}>
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
        <PlugBoard updatePlugBoard={this.setPlugBoardConfiguration} />
        <Keyboard enigma={this.state.machine} updateWindowLetters={this.updateWindowLetters} />
      </div>
    );
  }
}
