import EventEmitter from 'events';

import React from 'react';

import EnigmaM3 from 'enigma-minkiele/dist/Enigma';
import EnigmaM4 from 'enigma-minkiele/dist/EnigmaM4';
import RotorI from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorI';
import RotorII from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorII';
import RotorIII from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorIII';
import RotorIV from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorIV';
import RotorV from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorV';
import RotorVI from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorVI';
import RotorVII from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorVII';
import RotorVIII from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorVIII';

import ThinRotorBeta from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/ThinRotor/ThinRotorBeta';
import ThinRotorGamma from 'enigma-minkiele/dist/Component/WiredWheel/Rotor/ThinRotor/ThinRotorGamma';

import ReflectorA from 'enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorA';
import ReflectorB from 'enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorB';
import ReflectorC from 'enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorC';
import ReflectorD from 'enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorD';
import ReflectorBeta from 'enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorBeta';
import ReflectorGamma from 'enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorGamma';

import ThinReflectorB from 'enigma-minkiele/dist/Component/WiredWheel/Reflector/ThinReflector/ThinReflectorB';
import ThinReflectorC from 'enigma-minkiele/dist/Component/WiredWheel/Reflector/ThinReflector/ThinReflectorC';

import * as Const from './Constants';

import EnigmaUI from './UI/Enigma';

import {getTimestampKey as getNewWiringKey} from './Utils';

export default class Enigma {

  constructor (renderingEngine) {

    this.renderingEngine = renderingEngine;

    this.eventManager = new EventEmitter();
    this.setType(Const.DEFAULT_TYPE);
    this.setLastEncodedLetter('');

    this.render();

    this.eventManager.on('change.type', (type) => {
      this.setType(type);
      this.render();
    });

    this.eventManager.on('change.reflector', (reflector) => {
      this.setReflector(reflector);
      this.render();
    });

    this.eventManager.on('change.rotor.type', (rotor, position) => {
      this.setRotor(rotor, position);
      this.render();
    });

    this.eventManager.on('change.rotor.windowLetter', (letter, position) => {
      this.setRotorWindowLetter(letter, position);
      this.render();
    });

    this.eventManager.on('change.rotor.ringPosition', (letter, position) => {
      this.setRotorRingPosition(letter, position);
      this.render();
    });

    this.eventManager.on('change.plugBoard.removeWiring', (wiring) => {
      try {
        this.enigma.plugBoard.unplugWire(wiring[0], wiring[1]);
        this.render();
      } catch (err) {
        //Keep calm and carry on
        //Silently accept the situation
      }
    });

    this.eventManager.on('change.plugBoard.addWiring', (newWiring) => {

      try {
        this.enigma.plugBoard.plugWire(newWiring[0], newWiring[1]);
        this.render();
      } catch (err) {
        //Keep calm and carry on
        //Silently accept the situation
      }

    });

    this.eventManager.on('change.reflector.removeWiring', (wiring) => {
      try {
        this.enigma.reflector.unplugWire(wiring[0], wiring[1]);
        this.render();
      } catch (err) {
        //Keep calm and carry on
        //Silently accept the situation
      }
    });

    this.eventManager.on('change.reflector.addWiring', (newWiring) => {

      try {
        this.enigma.reflector.plugWire(newWiring[0], newWiring[1]);
        this.render();
      } catch (err) {
        //Keep calm and carry on
        //Silently accept the situation
      }

    });

    this.eventManager.on('change.keyboard.input', (input) => {
      try {
        this.setLastEncodedLetter(this.enigma.getEncodedLetter(input));
        this.render();
      } catch (err) {
        //Silently accept the situation
      }
    });

  }

  setType (type) {
    switch(type) {
      case Const.TYPE_M3:
        this.enigma = new EnigmaM3();
        break;
      case Const.TYPE_M4:
        this.enigma = new EnigmaM4();
        break;
    }

  }

  getType () {
    if(this.enigma instanceof EnigmaM4) {
      return Const.TYPE_M4;
    } else if(this.enigma instanceof EnigmaM3) {
      return Const.TYPE_M3;
    }
  }

  setReflector (type) {

    let reflector;

    switch(type) {
      case Const.RE_TYPE_A:
        reflector = new ReflectorA();
        break;
      case Const.RE_TYPE_B:
        reflector = new ReflectorB();
        break;
      case Const.RE_TYPE_C:
        reflector = new ReflectorC();
      case Const.RE_TYPE_D:
        reflector = new ReflectorD();
        break;
      case Const.RE_TYPE_BETA:
        reflector = new ReflectorBeta();
        break;
      case Const.RE_TYPE_GAMMA:
        reflector = new ReflectorGamma();
        break;
      case Const.RE_TYPE_THIN_B:
        reflector = new ThinReflectorB();
        break;
      case Const.RE_TYPE_THIN_C:
        reflector = new ThinReflectorC();
        break;
    }

    this.enigma.setReflector(reflector);

  }

  getReflectorType () {

    let reflector = this.enigma.reflector;

    if(reflector instanceof ReflectorA) {
      return Const.RE_TYPE_A;
    } else if(reflector instanceof ReflectorB) {
      return Const.RE_TYPE_B;
    } else if(reflector instanceof ReflectorC) {
      return Const.RE_TYPE_C;
    } else if(reflector instanceof ReflectorD) {
      return Const.RE_TYPE_D;
    } else if(reflector instanceof ReflectorBeta) {
      return Const.RE_TYPE_BETA;
    } else if(reflector instanceof ReflectorGamma) {
      return Const.RE_TYPE_GAMMA;
    } else if(reflector instanceof ThinReflectorB) {
      return Const.RE_TYPE_THIN_B;
    } else if(reflector instanceof ThinReflectorC) {
      return Const.RE_TYPE_THIN_C;
    }

  }

  setRotor (type, position) {

    let rotor;

    switch(type) {
      case Const.RO_TYPE_I:
        rotor = new RotorI();
        break;
      case Const.RO_TYPE_II:
        rotor = new RotorII();
        break;
      case Const.RO_TYPE_III:
        rotor = new RotorIII();
        break;
      case Const.RO_TYPE_IV:
        rotor = new RotorIV();
        break;
      case Const.RO_TYPE_V:
        rotor = new RotorV();
        break;
      case Const.RO_TYPE_VI:
        rotor = new RotorVI();
        break;
      case Const.RO_TYPE_VII:
        rotor = new RotorVII();
        break;
      case Const.RO_TYPE_VII:
        rotor = new RotorVII();
        break;
      case Const.RO_TYPE_VIII:
        rotor = new RotorVIII();
        break;
      case Const.RO_TYPE_THIN_BETA:
        rotor = new ThinRotorBeta();
        break;
      case Const.RO_TYPE_THIN_GAMMA:
        rotor = new ThinRotorGamma();
        break;
    }

    this.enigma.setRotor(rotor, position);

  }

  getRotorType (position) {

    let rotor = this.enigma.getRotor(position);

    if(rotor instanceof RotorI) {
      return Const.RO_TYPE_I;
    } else if(rotor instanceof RotorII) {
      return Const.RO_TYPE_II;
    } else if(rotor instanceof RotorIII) {
      return Const.RO_TYPE_III;
    } else if(rotor instanceof RotorIV) {
      return Const.RO_TYPE_IV;
    } else if(rotor instanceof RotorV) {
      return Const.RO_TYPE_V;
    } else if(rotor instanceof RotorVI) {
      return Const.RO_TYPE_VI;
    } else if(rotor instanceof RotorVII) {
      return Const.RO_TYPE_VII;
    } else if(rotor instanceof RotorVIII) {
      return Const.RO_TYPE_VIII;
    } else if(rotor instanceof ThinRotorBeta) {
      return Const.RO_TYPE_THIN_BETA;
    } else if(rotor instanceof ThinRotorGamma) {
      return Const.RO_TYPE_THIN_GAMMA;
    }

  }

  getRotorProps (position) {

    let props = {};
    let type = this.getRotorType(position);

    if(typeof type !== 'undefined') {
      let rotor = this.enigma.getRotor(position);
      props.type = type
      props.windowLetter = this.enigma.getRotorWindowLetter(position);
      props.ringPosition = this.enigma.getRotor(position).ringPosition;
    }

    return props;

  }

  setRotorWindowLetter (letter, position) {
    this.enigma.setRotorWindowLetter(letter, position);
  }

  setRotorRingPosition (ringPosition, position) {
    let rotor = this.enigma.getRotor(position);
    if(typeof rotor !== 'undefined') {
      rotor.setRingPosition(ringPosition);
    }
  }

  getPlugBoardWirings () {

    let wirings = this.enigma.plugBoard.wirings.slice();
    return wirings;

  }

  setLastEncodedLetter (letter) {
    this.lastEncodedLetter = letter;
  }

  getLastEncodedLetter () {
    let lastEncodedLetter = this.lastEncodedLetter;
    return lastEncodedLetter;
  }

  getRenderingEngine () {
    throw 'App must override this method';
  }

  render () {
    this.renderingEngine.render(
      <EnigmaUI
        type={this.getType()}
        reflector={this.getReflectorType()}
        fourthRotor={this.getRotorProps(Const.FOURTH_ROTOR)}
        leftRotor={this.getRotorProps(Const.LEFT_ROTOR)}
        centerRotor={this.getRotorProps(Const.CENTER_ROTOR)}
        rightRotor={this.getRotorProps(Const.RIGHT_ROTOR)}
        plugBoardWirings={this.getPlugBoardWirings()}
        lastEncodedLetter={this.getLastEncodedLetter()}
        eventManager={this.eventManager}
      />
    );
  }

}
