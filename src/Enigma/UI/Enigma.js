import React from 'react';
import EventEmitter from 'events';
import TypeSelector from './Component/TypeSelector';
import PlugBoard from './Component/PlugBoard';
import Rotor from './Component/WiredWheel/Rotor/Rotor';
import Reflector from './Component/WiredWheel/Reflector/Reflector';
import ThinRotor from './Component/WiredWheel/Rotor/ThinRotor';
import ThinReflector from './Component/WiredWheel/Reflector/ThinReflector';
import Keyboard from './Component/Keyboard';
import {TYPE_M3, TYPE_M4, LEFT_ROTOR, CENTER_ROTOR, RIGHT_ROTOR, DEFAULT_TYPE} from '../Constants';
import PT from './Bootstrap/PanelTitle';

import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

export default class Enigma extends React.Component {

  constructor (props) {
    super(props);
  }

  getUsedRotors (excludedRotor) {
    let testable = ['leftRotor', 'centerRotor', 'rightRotor'];
    if(this.props.type === TYPE_M4) {
      testable.push('fourthRotor');
    }

    return testable.filter(function (key) {
      return key !== excludedRotor;
      //Remove the rotor asking for other rotor values
    }).map((key) => {
      //Get the rotor values instead of keys
      return this.props[key].type;
    }).filter(function (value) {
      //Filter out empty values
      return typeof value === 'string' && value.length > 0;
    });

  }

  renderReflectorConfiguration () {

    let title, config;

    switch(this.props.type) {
      case TYPE_M3:
        title = 'Reflector';
        config = (
          <Reflector type={this.props.reflector} eventManager={this.props.eventManager} />
        );
        break;
      case TYPE_M4:
        title = 'Thin Reflector';
        config = (
          <ThinReflector type={this.props.reflector} eventManager={this.props.eventManager} />
        );
        break;
    }

    return (
      <Panel bsStyle={this.getPanelSuccessFromReflector()} header={<PT>{title}</PT>}>
        {config}
      </Panel>
    );
  }


  getRotorColsClass () {
    let width;
    switch(this.props.type) {
      case TYPE_M3:
        width = 4;
        break;
      case TYPE_M4:
        width = 3;
        break;
    }
    return {
      xs: 12,
      md: width
    };
  }

  renderRotorsConfiguration () {

    let config;

    switch(this.props.type) {
      case TYPE_M4:
        config = (
          <Col {...this.getRotorColsClass()}>
            <Panel header={<PT>Fourth Rotor</PT>} bsStyle={this.getPanelSuccessFromRotor('fourthRotor')}>
              <ThinRotor {...this.props.fourthRotor} usedRotors={this.getUsedRotors('fourthRotor')} eventManager={this.props.eventManager} />
            </Panel>
          </Col>
        );
        break;
    }

    return config;

  }

  getPanelSuccessFromRotor (rotor) {
    return !!this.props[rotor].type ? 'success' : void (0);
  }

  getPanelSuccessFromReflector() {
    return !!this.props.reflector ? 'success' : void (0);
  }

  render () {

    return (
      <div className="enigmaUI">
        <Panel bsStyle="info" header={<PT>Machine type</PT>}>
          <TypeSelector type={this.props.type} eventManager={this.props.eventManager} />
        </Panel>
        <div className="enigmaConfiguration">
          {this.renderReflectorConfiguration()}
          <Row>
            {this.renderRotorsConfiguration()}
            <Col {...this.getRotorColsClass()}>
              <Panel header={<PT>Left Rotor</PT>} bsStyle={this.getPanelSuccessFromRotor('leftRotor')}>
                <Rotor {...this.props.leftRotor} position={LEFT_ROTOR} usedRotors={this.getUsedRotors('leftRotor')} eventManager={this.props.eventManager} />
              </Panel>
            </Col>
            <Col {...this.getRotorColsClass()}>
              <Panel header={<PT>Center Rotor</PT>} bsStyle={this.getPanelSuccessFromRotor('centerRotor')}>
                <Rotor {...this.props.centerRotor} position={CENTER_ROTOR} usedRotors={this.getUsedRotors('centerRotor')} eventManager={this.props.eventManager} />
              </Panel>
            </Col>
            <Col {...this.getRotorColsClass()}>
              <Panel header={<PT>Right Rotor</PT>} bsStyle={this.getPanelSuccessFromRotor('rightRotor')}>
                <Rotor {...this.props.rightRotor} position={RIGHT_ROTOR} usedRotors={this.getUsedRotors('rightRotor')} eventManager={this.props.eventManager} />
              </Panel>
            </Col>
          </Row>
        </div>
        <Panel bsStyle="info" header={<PT>Plugboard</PT>}>
          <PlugBoard wirings={this.props.plugBoardWirings} eventManager={this.props.eventManager} />
        </Panel>
        <Panel header={<PT>Keyboard</PT>}>
          <Keyboard lastEncodedLetter={this.props.lastEncodedLetter} eventManager={this.props.eventManager} />
        </Panel>
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
  plugBoardWirings: React.PropTypes.array,
  lastEncodedLetter: React.PropTypes.string,
  eventManager: React.PropTypes.instanceOf(EventEmitter).isRequired
};

Enigma.defaultProps = {
  type: DEFAULT_TYPE
};
