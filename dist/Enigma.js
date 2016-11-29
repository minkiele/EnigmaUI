'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Enigma = require('enigma-minkiele/dist/Enigma');

var _Enigma2 = _interopRequireDefault(_Enigma);

var _EnigmaM = require('enigma-minkiele/dist/EnigmaM4');

var _EnigmaM2 = _interopRequireDefault(_EnigmaM);

var _RotorI = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorI');

var _RotorI2 = _interopRequireDefault(_RotorI);

var _RotorII = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorII');

var _RotorII2 = _interopRequireDefault(_RotorII);

var _RotorIII = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorIII');

var _RotorIII2 = _interopRequireDefault(_RotorIII);

var _RotorIV = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorIV');

var _RotorIV2 = _interopRequireDefault(_RotorIV);

var _RotorV = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorV');

var _RotorV2 = _interopRequireDefault(_RotorV);

var _RotorVI = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorVI');

var _RotorVI2 = _interopRequireDefault(_RotorVI);

var _RotorVII = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorVII');

var _RotorVII2 = _interopRequireDefault(_RotorVII);

var _RotorVIII = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/RotorVIII');

var _RotorVIII2 = _interopRequireDefault(_RotorVIII);

var _ThinRotorBeta = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/ThinRotor/ThinRotorBeta');

var _ThinRotorBeta2 = _interopRequireDefault(_ThinRotorBeta);

var _ThinRotorGamma = require('enigma-minkiele/dist/Component/WiredWheel/Rotor/ThinRotor/ThinRotorGamma');

var _ThinRotorGamma2 = _interopRequireDefault(_ThinRotorGamma);

var _ReflectorA = require('enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorA');

var _ReflectorA2 = _interopRequireDefault(_ReflectorA);

var _ReflectorB = require('enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorB');

var _ReflectorB2 = _interopRequireDefault(_ReflectorB);

var _ReflectorC = require('enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorC');

var _ReflectorC2 = _interopRequireDefault(_ReflectorC);

var _ReflectorBeta = require('enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorBeta');

var _ReflectorBeta2 = _interopRequireDefault(_ReflectorBeta);

var _ReflectorGamma = require('enigma-minkiele/dist/Component/WiredWheel/Reflector/ReflectorGamma');

var _ReflectorGamma2 = _interopRequireDefault(_ReflectorGamma);

var _ThinReflectorB = require('enigma-minkiele/dist/Component/WiredWheel/Reflector/ThinReflector/ThinReflectorB');

var _ThinReflectorB2 = _interopRequireDefault(_ThinReflectorB);

var _ThinReflectorC = require('enigma-minkiele/dist/Component/WiredWheel/Reflector/ThinReflector/ThinReflectorC');

var _ThinReflectorC2 = _interopRequireDefault(_ThinReflectorC);

var _Constants = require('./Constants');

var Const = _interopRequireWildcard(_Constants);

var _Enigma3 = require('./UI/Enigma');

var _Enigma4 = _interopRequireDefault(_Enigma3);

var _Utils = require('./Utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enigma = function () {
  function Enigma(renderingEngine) {
    var _this = this;

    _classCallCheck(this, Enigma);

    this.renderingEngine = renderingEngine;

    this.eventManager = new _events2.default();
    this.setType(Const.DEFAULT_TYPE);
    this.setLastEncodedLetter('');

    this.render();

    this.eventManager.on('change.type', function (type) {
      _this.setType(type);
      _this.render();
    });

    this.eventManager.on('change.reflector', function (reflector) {
      _this.setReflector(reflector);
      _this.render();
    });

    this.eventManager.on('change.rotor.type', function (rotor, position) {
      _this.setRotor(rotor, position);
      _this.render();
    });

    this.eventManager.on('change.rotor.windowLetter', function (letter, position) {
      _this.setRotorWindowLetter(letter, position);
      _this.render();
    });

    this.eventManager.on('change.rotor.ringPosition', function (letter, position) {
      _this.setRotorRingPosition(letter, position);
      _this.render();
    });

    this.eventManager.on('change.plugBoard.removeWiring', function (wiring) {
      try {
        _this.enigma.plugBoard.unplugWire(wiring[0], wiring[1]);
        _this.render();
      } catch (err) {
        //Keep calm and carry on
        //Silently accept the situation
      }
    });

    this.eventManager.on('change.plugBoard.addWiring', function (newWiring) {

      try {
        _this.enigma.plugBoard.plugWire(newWiring[0], newWiring[1]);
        _this.render();
      } catch (err) {
        //Keep calm and carry on
        //Silently accept the situation
      }
    });

    this.eventManager.on('change.keyboard.input', function (input) {
      try {
        _this.setLastEncodedLetter(_this.enigma.getEncodedLetter(input));
        _this.render();
      } catch (err) {
        //Silently accept the situation
      }
    });
  }

  _createClass(Enigma, [{
    key: 'setType',
    value: function setType(type) {
      switch (type) {
        case Const.TYPE_M3:
          this.enigma = new _Enigma2.default();
          break;
        case Const.TYPE_M4:
          this.enigma = new _EnigmaM2.default();
          break;
      }
    }
  }, {
    key: 'getType',
    value: function getType() {
      if (this.enigma instanceof _EnigmaM2.default) {
        return Const.TYPE_M4;
      } else if (this.enigma instanceof _Enigma2.default) {
        return Const.TYPE_M3;
      }
    }
  }, {
    key: 'setReflector',
    value: function setReflector(type) {

      var reflector = void 0;

      switch (type) {
        case Const.RE_TYPE_A:
          reflector = new _ReflectorA2.default();
          break;
        case Const.RE_TYPE_B:
          reflector = new _ReflectorB2.default();
          break;
        case Const.RE_TYPE_C:
          reflector = new _ReflectorC2.default();
          break;
        case Const.RE_TYPE_BETA:
          reflector = new _ReflectorBeta2.default();
          break;
        case Const.RE_TYPE_GAMMA:
          reflector = new _ReflectorGamma2.default();
          break;
        case Const.RE_TYPE_THIN_B:
          reflector = new _ThinReflectorB2.default();
          break;
        case Const.RE_TYPE_THIN_C:
          reflector = new _ThinReflectorC2.default();
          break;
      }

      this.enigma.setReflector(reflector);
    }
  }, {
    key: 'getReflectorType',
    value: function getReflectorType() {

      var reflector = this.enigma.reflector;

      if (reflector instanceof _ReflectorA2.default) {
        return Const.RE_TYPE_A;
      } else if (reflector instanceof _ReflectorB2.default) {
        return Const.RE_TYPE_B;
      } else if (reflector instanceof _ReflectorC2.default) {
        return Const.RE_TYPE_C;
      } else if (reflector instanceof _ReflectorBeta2.default) {
        return Const.RE_TYPE_BETA;
      } else if (reflector instanceof _ReflectorGamma2.default) {
        return Const.RE_TYPE_GAMMA;
      } else if (reflector instanceof _ThinReflectorB2.default) {
        return Const.RE_TYPE_THIN_B;
      } else if (reflector instanceof _ThinReflectorC2.default) {
        return Const.RE_TYPE_THIN_C;
      }
    }
  }, {
    key: 'setRotor',
    value: function setRotor(type, position) {

      var rotor = void 0;

      switch (type) {
        case Const.RO_TYPE_I:
          rotor = new _RotorI2.default();
          break;
        case Const.RO_TYPE_II:
          rotor = new _RotorII2.default();
          break;
        case Const.RO_TYPE_III:
          rotor = new _RotorIII2.default();
          break;
        case Const.RO_TYPE_IV:
          rotor = new _RotorIV2.default();
          break;
        case Const.RO_TYPE_V:
          rotor = new _RotorV2.default();
          break;
        case Const.RO_TYPE_VI:
          rotor = new _RotorVI2.default();
          break;
        case Const.RO_TYPE_VII:
          rotor = new _RotorVII2.default();
          break;
        case Const.RO_TYPE_VII:
          rotor = new _RotorVII2.default();
          break;
        case Const.RO_TYPE_VIII:
          rotor = new _RotorVIII2.default();
          break;
        case Const.RO_TYPE_THIN_BETA:
          rotor = new _ThinRotorBeta2.default();
          break;
        case Const.RO_TYPE_THIN_GAMMA:
          rotor = new _ThinRotorGamma2.default();
          break;
      }

      this.enigma.setRotor(rotor, position);
    }
  }, {
    key: 'getRotorType',
    value: function getRotorType(position) {

      var rotor = this.enigma.getRotor(position);

      if (rotor instanceof _RotorI2.default) {
        return Const.RO_TYPE_I;
      } else if (rotor instanceof _RotorII2.default) {
        return Const.RO_TYPE_II;
      } else if (rotor instanceof _RotorIII2.default) {
        return Const.RO_TYPE_III;
      } else if (rotor instanceof _RotorIV2.default) {
        return Const.RO_TYPE_IV;
      } else if (rotor instanceof _RotorV2.default) {
        return Const.RO_TYPE_V;
      } else if (rotor instanceof _RotorVI2.default) {
        return Const.RO_TYPE_VI;
      } else if (rotor instanceof _RotorVII2.default) {
        return Const.RO_TYPE_VII;
      } else if (rotor instanceof _RotorVIII2.default) {
        return Const.RO_TYPE_VIII;
      } else if (rotor instanceof _ThinRotorBeta2.default) {
        return Const.RO_TYPE_THIN_BETA;
      } else if (rotor instanceof _ThinRotorGamma2.default) {
        return Const.RO_TYPE_THIN_GAMMA;
      }
    }
  }, {
    key: 'getRotorProps',
    value: function getRotorProps(position) {

      var props = {};
      var type = this.getRotorType(position);

      if (typeof type !== 'undefined') {
        var rotor = this.enigma.getRotor(position);
        props.type = type;
        props.windowLetter = this.enigma.getRotorWindowLetter(position);
        props.ringPosition = this.enigma.getRotor(position).ringPosition;
      }

      return props;
    }
  }, {
    key: 'setRotorWindowLetter',
    value: function setRotorWindowLetter(letter, position) {
      this.enigma.setRotorWindowLetter(letter, position);
    }
  }, {
    key: 'setRotorRingPosition',
    value: function setRotorRingPosition(ringPosition, position) {
      var rotor = this.enigma.getRotor(position);
      if (typeof rotor !== 'undefined') {
        rotor.setRingPosition(ringPosition);
      }
    }
  }, {
    key: 'getPlugBoardWirings',
    value: function getPlugBoardWirings() {

      var wirings = this.enigma.plugBoard.wirings.slice();
      return wirings;
    }
  }, {
    key: 'setLastEncodedLetter',
    value: function setLastEncodedLetter(letter) {
      this.lastEncodedLetter = letter;
    }
  }, {
    key: 'getLastEncodedLetter',
    value: function getLastEncodedLetter() {
      var lastEncodedLetter = this.lastEncodedLetter;
      return lastEncodedLetter;
    }
  }, {
    key: 'getRenderingEngine',
    value: function getRenderingEngine() {
      throw 'App must override this method';
    }
  }, {
    key: 'render',
    value: function render() {
      this.renderingEngine.render(_react2.default.createElement(_Enigma4.default, {
        type: this.getType(),
        reflector: this.getReflectorType(),
        fourthRotor: this.getRotorProps(Const.FOURTH_ROTOR),
        leftRotor: this.getRotorProps(Const.LEFT_ROTOR),
        centerRotor: this.getRotorProps(Const.CENTER_ROTOR),
        rightRotor: this.getRotorProps(Const.RIGHT_ROTOR),
        plugBoardWirings: this.getPlugBoardWirings(),
        lastEncodedLetter: this.getLastEncodedLetter(),
        eventManager: this.eventManager
      }));
    }
  }]);

  return Enigma;
}();

exports.default = Enigma;
module.exports = exports['default'];