import React from 'react';
import EventEmitter from 'events';
import PlugBoard from './Component/PlugBoard';
import Rotor from './Component/WiredWheel/Rotor/Rotor';
import Reflector from './Component/WiredWheel/Reflector/Reflector';
import ThinRotor from './Component/WiredWheel/Rotor/ThinRotor';
import ThinReflector from './Component/WiredWheel/Reflector/ThinReflector';
import Keyboard from './Component/Keyboard';
import {TYPE_M3, TYPE_M4, LEFT_ROTOR, CENTER_ROTOR, RIGHT_ROTOR, DEFAULT_TYPE} from '../Constants';

export default class Enigma extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      type: this.props.type
    };
  }

  updateType (newType) {
    this.setState({
      type: newType
    }, () => {
      this.props.eventManager.emit('change.type', this.state.type);
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
              <Reflector type={this.props.reflector} eventManager={this.props.eventManager} />
            </div>
          </div>
        );
        break;
      case TYPE_M4:
        config = (
          <div className="enigmaM4Configuration">
            <div className="reflector thinReflector">
              <h2>Thin Reflector</h2>
              <ThinReflector type={this.props.reflector} eventManager={this.props.eventManager} />
            </div>
            <div className="rotor thinRotor">
              <h2>Fourth Rotor</h2>
              <ThinRotor {...this.props.fourthRotor} eventManager={this.props.eventManager} />
            </div>
          </div>
        );
        break;
    }

    return config;

  }

  render () {

    return (
      <div className="enigmaUI">
        <h1>EnigmaUI</h1>
        <div className="enigmaType">
          <label>Type</label>
          <select className="form-control" value={this.state.type} onChange={(evt) => {this.updateType(evt.target.value)}}>
            <option value={TYPE_M3}>Enigma M3</option>
            <option value={TYPE_M4}>Enigma M4</option>
          </select>
        </div>
        <div className="enigmaConfiguration">
          {this.renderEnigmaConfiguration()}
          <div className="leftRotor">
            <h2>Left Rotor</h2>
            <Rotor {...this.props.leftRotor} position={LEFT_ROTOR} eventManager={this.props.eventManager} />
          </div>
          <div className="centerRotor">
            <h2>Center Rotor</h2>
            <Rotor {...this.props.centerRotor} position={CENTER_ROTOR} eventManager={this.props.eventManager} />
          </div>
          <div className="rightRotor">
            <h2>Right Rotor</h2>
            <Rotor {...this.props.rightRotor} position={RIGHT_ROTOR} eventManager={this.props.eventManager} />
          </div>
        </div>
        <PlugBoard wirings={this.props.plugBoardWirings} eventManager={this.props.eventManager} />
        <Keyboard lastEncodedLetter={this.props.lastEncodedLetter} eventManager={this.props.eventManager} />
      </div>
    );
  }
}

Enigma.propTypes = {
  type: React.PropTypes.oneOf([TYPE_M3, TYPE_M4]).isRequired,
  reflector: React.PropTypes.string,
  fourthRotor: React.PropTypes.object,
  leftRotor: React.PropTypes.object,
  centerRotor: React.PropTypes.object,
  rightRotor: React.PropTypes.object,
  plugBoardWirings: React.PropTypes.object,
  lastEncodedLetter: React.PropTypes.string,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

Enigma.defaultProps = {
  type: DEFAULT_TYPE
};
