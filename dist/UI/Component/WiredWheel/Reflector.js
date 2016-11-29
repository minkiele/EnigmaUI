'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_REFLECTOR_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INITIAL_REFLECTOR_TYPE = exports.INITIAL_REFLECTOR_TYPE = '';

var Reflector = function (_React$Component) {
  _inherits(Reflector, _React$Component);

  function Reflector() {
    _classCallCheck(this, Reflector);

    return _possibleConstructorReturn(this, (Reflector.__proto__ || Object.getPrototypeOf(Reflector)).apply(this, arguments));
  }

  _createClass(Reflector, [{
    key: 'updateType',
    value: function updateType(type) {
      this.props.eventManager.emit('change.reflector', type);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'enigmaReflector' },
        _react2.default.createElement(
          'div',
          { className: 'enigmaReflectorType' },
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
              'Choose a reflector'
            ),
            this.props.children
          )
        )
      );
    }
  }]);

  return Reflector;
}(_react2.default.Component);

exports.default = Reflector;


Reflector.propTypes = {
  type: _react2.default.PropTypes.string.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default).isRequired
};

Reflector.defaultProps = {
  type: INITIAL_REFLECTOR_TYPE
};