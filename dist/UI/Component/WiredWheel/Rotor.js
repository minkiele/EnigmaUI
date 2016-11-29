'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_WINDOW_POSITION = exports.INITIAL_RING_POSITION = exports.INITIAL_ROTOR_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Utils = require('enigma-minkiele/dist/Utils');

var _Utils2 = require('../../../Utils');

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INITIAL_ROTOR_TYPE = exports.INITIAL_ROTOR_TYPE = '';
var INITIAL_RING_POSITION = exports.INITIAL_RING_POSITION = 0;
var INITIAL_WINDOW_POSITION = exports.INITIAL_WINDOW_POSITION = 'A';

var Rotor = function (_React$Component) {
  _inherits(Rotor, _React$Component);

  function Rotor() {
    _classCallCheck(this, Rotor);

    return _possibleConstructorReturn(this, (Rotor.__proto__ || Object.getPrototypeOf(Rotor)).apply(this, arguments));
  }

  _createClass(Rotor, [{
    key: 'updateType',
    value: function updateType(type) {
      this.props.eventManager.emit('change.rotor.type', type, this.props.position);
    }
  }, {
    key: 'updateRingPosition',
    value: function updateRingPosition(ringPosition) {
      this.props.eventManager.emit('change.rotor.ringPosition', (0, _Utils2.toInt)(ringPosition), this.props.position);
    }
  }, {
    key: 'updateWindowLetter',
    value: function updateWindowLetter(windowLetter) {
      this.props.eventManager.emit('change.rotor.windowLetter', (0, _Utils.normalizeInput)(windowLetter), this.props.position);
    }
  }, {
    key: 'renderRingPositions',
    value: function renderRingPositions() {
      var options = [];
      for (var i = 0; i < 26; i += 1) {
        var label = (0, _Utils.getLetter)(i) + ' - ' + (i + 1);
        options.push(_react2.default.createElement(
          'option',
          { key: i.toString(), value: i },
          label
        ));
      }

      return options;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'enigmaRotor' },
        _react2.default.createElement(
          _FormGroup2.default,
          { className: 'enigmaRotorType' },
          _react2.default.createElement(
            _ControlLabel2.default,
            null,
            'Type'
          ),
          _react2.default.createElement(
            _FormControl2.default,
            { componentClass: 'select', value: this.props.type, onChange: function onChange(evt) {
                _this2.updateType(evt.target.value);
              } },
            _react2.default.createElement(
              'option',
              { value: '' },
              'Choose a rotor'
            ),
            this.props.children
          )
        ),
        _react2.default.createElement(
          _FormGroup2.default,
          { className: 'enigmaRotorRingPosition' },
          _react2.default.createElement(
            _ControlLabel2.default,
            null,
            'Ring Position'
          ),
          _react2.default.createElement(
            _FormControl2.default,
            { componentClass: 'select', value: this.props.ringPosition, onChange: function onChange(evt) {
                _this2.updateRingPosition(evt.target.value);
              } },
            _react2.default.createElement(
              'option',
              { value: '' },
              'Choose a ring position'
            ),
            this.renderRingPositions()
          )
        ),
        _react2.default.createElement(
          _FormGroup2.default,
          { className: 'enigmaRotorWindowLetter' },
          _react2.default.createElement(
            _ControlLabel2.default,
            null,
            'Window Position'
          ),
          _react2.default.createElement(_FormControl2.default, { type: 'text', value: this.props.windowLetter, onChange: function onChange(evt) {
              _this2.updateWindowLetter(evt.target.value);
            }, maxLength: '1', pattern: '[A-Z]', size: '2' })
        )
      );
    }
  }]);

  return Rotor;
}(_react2.default.Component);

exports.default = Rotor;


Rotor.propTypes = {
  type: _react2.default.PropTypes.string.isRequired,
  position: _react2.default.PropTypes.string.isRequired,
  ringPosition: _react2.default.PropTypes.number.isRequired,
  windowLetter: _react2.default.PropTypes.string.isRequired,
  usedRotors: _react2.default.PropTypes.array.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default).isRequired
};

Rotor.defaultProps = {
  type: INITIAL_ROTOR_TYPE,
  ringPosition: INITIAL_RING_POSITION,
  windowLetter: INITIAL_WINDOW_POSITION
};