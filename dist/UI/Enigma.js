'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _TypeSelector = require('./Component/TypeSelector');

var _TypeSelector2 = _interopRequireDefault(_TypeSelector);

var _PlugBoard = require('./Component/PlugBoard');

var _PlugBoard2 = _interopRequireDefault(_PlugBoard);

var _Rotor = require('./Component/WiredWheel/Rotor/Rotor');

var _Rotor2 = _interopRequireDefault(_Rotor);

var _Reflector = require('./Component/WiredWheel/Reflector/Reflector');

var _Reflector2 = _interopRequireDefault(_Reflector);

var _ThinRotor = require('./Component/WiredWheel/Rotor/ThinRotor');

var _ThinRotor2 = _interopRequireDefault(_ThinRotor);

var _ThinReflector = require('./Component/WiredWheel/Reflector/ThinReflector');

var _ThinReflector2 = _interopRequireDefault(_ThinReflector);

var _Keyboard = require('./Component/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Constants = require('../Constants');

var _PanelTitle = require('./Bootstrap/PanelTitle');

var _PanelTitle2 = _interopRequireDefault(_PanelTitle);

var _Panel = require('react-bootstrap/lib/Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enigma = function (_React$Component) {
  _inherits(Enigma, _React$Component);

  function Enigma(props) {
    _classCallCheck(this, Enigma);

    return _possibleConstructorReturn(this, (Enigma.__proto__ || Object.getPrototypeOf(Enigma)).call(this, props));
  }

  _createClass(Enigma, [{
    key: 'getUsedRotors',
    value: function getUsedRotors(excludedRotor) {
      var _this2 = this;

      var testable = ['leftRotor', 'centerRotor', 'rightRotor'];
      if (this.props.type === _Constants.TYPE_M4) {
        testable.push('fourthRotor');
      }

      return testable.filter(function (key) {
        return key !== excludedRotor;
        //Remove the rotor asking for other rotor values
      }).map(function (key) {
        //Get the rotor values instead of keys
        return _this2.props[key].type;
      }).filter(function (value) {
        //Filter out empty values
        return typeof value === 'string' && value.length > 0;
      });
    }
  }, {
    key: 'renderReflectorConfiguration',
    value: function renderReflectorConfiguration() {

      var title = void 0,
          config = void 0;

      switch (this.props.type) {
        case _Constants.TYPE_M3:
          title = 'Reflector';
          config = _react2.default.createElement(_Reflector2.default, { type: this.props.reflector, eventManager: this.props.eventManager });
          break;
        case _Constants.TYPE_M4:
          title = 'Thin Reflector';
          config = _react2.default.createElement(_ThinReflector2.default, { type: this.props.reflector, eventManager: this.props.eventManager });
          break;
      }

      return _react2.default.createElement(
        _Panel2.default,
        { bsStyle: this.getPanelSuccessFromReflector(), header: _react2.default.createElement(
            _PanelTitle2.default,
            null,
            title
          ) },
        config
      );
    }
  }, {
    key: 'getRotorColsClass',
    value: function getRotorColsClass() {
      var width = void 0;
      switch (this.props.type) {
        case _Constants.TYPE_M3:
          width = 4;
          break;
        case _Constants.TYPE_M4:
          width = 3;
          break;
      }
      return {
        xs: 12,
        md: width
      };
    }
  }, {
    key: 'renderRotorsConfiguration',
    value: function renderRotorsConfiguration() {

      var config = void 0;

      switch (this.props.type) {
        case _Constants.TYPE_M4:
          config = _react2.default.createElement(
            _Col2.default,
            this.getRotorColsClass(),
            _react2.default.createElement(
              _Panel2.default,
              { header: _react2.default.createElement(
                  _PanelTitle2.default,
                  null,
                  'Fourth Rotor'
                ), bsStyle: this.getPanelSuccessFromRotor('fourthRotor') },
              _react2.default.createElement(_ThinRotor2.default, _extends({}, this.props.fourthRotor, { usedRotors: this.getUsedRotors('fourthRotor'), eventManager: this.props.eventManager }))
            )
          );
          break;
      }

      return config;
    }
  }, {
    key: 'getPanelSuccessFromRotor',
    value: function getPanelSuccessFromRotor(rotor) {
      return !!this.props[rotor].type ? 'success' : void 0;
    }
  }, {
    key: 'getPanelSuccessFromReflector',
    value: function getPanelSuccessFromReflector() {
      return !!this.props.reflector ? 'success' : void 0;
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'enigmaUI' },
        _react2.default.createElement(
          _Panel2.default,
          { bsStyle: 'info', header: _react2.default.createElement(
              _PanelTitle2.default,
              null,
              'Machine type'
            ) },
          _react2.default.createElement(_TypeSelector2.default, { type: this.props.type, eventManager: this.props.eventManager })
        ),
        _react2.default.createElement(
          'div',
          { className: 'enigmaConfiguration' },
          this.renderReflectorConfiguration(),
          _react2.default.createElement(
            _Row2.default,
            null,
            this.renderRotorsConfiguration(),
            _react2.default.createElement(
              _Col2.default,
              this.getRotorColsClass(),
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    _PanelTitle2.default,
                    null,
                    'Left Rotor'
                  ), bsStyle: this.getPanelSuccessFromRotor('leftRotor') },
                _react2.default.createElement(_Rotor2.default, _extends({}, this.props.leftRotor, { position: _Constants.LEFT_ROTOR, usedRotors: this.getUsedRotors('leftRotor'), eventManager: this.props.eventManager }))
              )
            ),
            _react2.default.createElement(
              _Col2.default,
              this.getRotorColsClass(),
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    _PanelTitle2.default,
                    null,
                    'Center Rotor'
                  ), bsStyle: this.getPanelSuccessFromRotor('centerRotor') },
                _react2.default.createElement(_Rotor2.default, _extends({}, this.props.centerRotor, { position: _Constants.CENTER_ROTOR, usedRotors: this.getUsedRotors('centerRotor'), eventManager: this.props.eventManager }))
              )
            ),
            _react2.default.createElement(
              _Col2.default,
              this.getRotorColsClass(),
              _react2.default.createElement(
                _Panel2.default,
                { header: _react2.default.createElement(
                    _PanelTitle2.default,
                    null,
                    'Right Rotor'
                  ), bsStyle: this.getPanelSuccessFromRotor('rightRotor') },
                _react2.default.createElement(_Rotor2.default, _extends({}, this.props.rightRotor, { position: _Constants.RIGHT_ROTOR, usedRotors: this.getUsedRotors('rightRotor'), eventManager: this.props.eventManager }))
              )
            )
          )
        ),
        _react2.default.createElement(
          _Panel2.default,
          { bsStyle: 'info', header: _react2.default.createElement(
              _PanelTitle2.default,
              null,
              'Plugboard'
            ) },
          _react2.default.createElement(_PlugBoard2.default, { wirings: this.props.plugBoardWirings, eventManager: this.props.eventManager })
        ),
        _react2.default.createElement(
          _Panel2.default,
          { header: _react2.default.createElement(
              _PanelTitle2.default,
              null,
              'Keyboard'
            ) },
          _react2.default.createElement(_Keyboard2.default, { lastEncodedLetter: this.props.lastEncodedLetter, eventManager: this.props.eventManager })
        )
      );
    }
  }]);

  return Enigma;
}(_react2.default.Component);

exports.default = Enigma;


Enigma.propTypes = {
  type: _react2.default.PropTypes.oneOf([_Constants.TYPE_M3, _Constants.TYPE_M4]).isRequired,
  reflector: _react2.default.PropTypes.string,
  fourthRotor: _react2.default.PropTypes.object,
  leftRotor: _react2.default.PropTypes.object,
  centerRotor: _react2.default.PropTypes.object,
  rightRotor: _react2.default.PropTypes.object,
  plugBoardWirings: _react2.default.PropTypes.array,
  lastEncodedLetter: _react2.default.PropTypes.string,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default).isRequired
};

Enigma.defaultProps = {
  type: _Constants.DEFAULT_TYPE
};
module.exports = exports['default'];