'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Rotor = require('../Rotor');

var _Rotor2 = _interopRequireDefault(_Rotor);

var _Constants = require('../../../../Constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rotor = function (_React$Component) {
  _inherits(Rotor, _React$Component);

  function Rotor() {
    _classCallCheck(this, Rotor);

    return _possibleConstructorReturn(this, (Rotor.__proto__ || Object.getPrototypeOf(Rotor)).apply(this, arguments));
  }

  _createClass(Rotor, [{
    key: 'renderChoices',
    value: function renderChoices() {
      var _this2 = this;

      return [_Constants.RO_TYPE_I, _Constants.RO_TYPE_II, _Constants.RO_TYPE_III, _Constants.RO_TYPE_IV, _Constants.RO_TYPE_V, _Constants.RO_TYPE_VI, _Constants.RO_TYPE_VII, _Constants.RO_TYPE_VIII].map(function (rotor) {
        var disabled = _this2.props.usedRotors.indexOf(rotor) > -1;
        return _react2.default.createElement(
          'option',
          { key: rotor, disabled: disabled, value: rotor },
          rotor
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Rotor2.default,
        this.props,
        this.renderChoices()
      );
    }
  }]);

  return Rotor;
}(_react2.default.Component);

exports.default = Rotor;


Rotor.propTypes = {
  type: _react2.default.PropTypes.oneOf([_Constants.RO_TYPE_I, _Constants.RO_TYPE_II, _Constants.RO_TYPE_III, _Constants.RO_TYPE_IV, _Constants.RO_TYPE_V, _Constants.RO_TYPE_VI, _Constants.RO_TYPE_VII, _Constants.RO_TYPE_VIII, _Rotor.INITIAL_ROTOR_TYPE]).isRequired,
  position: _react2.default.PropTypes.string.isRequired,
  ringPosition: _react2.default.PropTypes.number.isRequired,
  windowLetter: _react2.default.PropTypes.string.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default).isRequired
};

Rotor.defaultProps = {
  type: _Rotor.INITIAL_ROTOR_TYPE,
  ringPosition: _Rotor.INITIAL_RING_POSITION,
  windowLetter: _Rotor.INITIAL_WINDOW_POSITION
};
module.exports = exports['default'];