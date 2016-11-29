'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Constants = require('../../Constants');

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

var TypeSelector = function (_React$Component) {
  _inherits(TypeSelector, _React$Component);

  function TypeSelector() {
    _classCallCheck(this, TypeSelector);

    return _possibleConstructorReturn(this, (TypeSelector.__proto__ || Object.getPrototypeOf(TypeSelector)).apply(this, arguments));
  }

  _createClass(TypeSelector, [{
    key: 'updateType',
    value: function updateType(type) {
      this.props.eventManager.emit('change.type', type);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _FormGroup2.default,
        null,
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
            { value: _Constants.TYPE_M3 },
            'Enigma M3'
          ),
          _react2.default.createElement(
            'option',
            { value: _Constants.TYPE_M4 },
            'Enigma M4'
          )
        )
      );
    }
  }]);

  return TypeSelector;
}(_react2.default.Component);

exports.default = TypeSelector;


TypeSelector.propTypes = {
  type: _react2.default.PropTypes.oneOf([_Constants.TYPE_M3, _Constants.TYPE_M4]).isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default).isRequired
};
module.exports = exports['default'];