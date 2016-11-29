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

var _Rotor = require('../Rotor');

var _Rotor2 = _interopRequireDefault(_Rotor);

var _Constants = require('../../../../Constants');

var _Utils = require('../../../../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThinRotor = function (_React$Component) {
  _inherits(ThinRotor, _React$Component);

  function ThinRotor() {
    _classCallCheck(this, ThinRotor);

    return _possibleConstructorReturn(this, (ThinRotor.__proto__ || Object.getPrototypeOf(ThinRotor)).apply(this, arguments));
  }

  _createClass(ThinRotor, [{
    key: 'renderChoices',
    value: function renderChoices() {
      var _this2 = this;

      return [_Constants.RO_TYPE_THIN_BETA, _Constants.RO_TYPE_THIN_GAMMA].map(function (rotor) {
        var disabled = _this2.props.usedRotors.indexOf(rotor) > -1;
        return _react2.default.createElement(
          'option',
          { key: rotor, disabled: disabled, value: rotor },
          (0, _Utils.rudimentaryTranslator)(rotor, _this2.props.labels)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Rotor2.default,
        _extends({}, this.props, { position: _Constants.FOURTH_ROTOR }),
        this.renderChoices()
      );
    }
  }]);

  return ThinRotor;
}(_react2.default.Component);

exports.default = ThinRotor;


ThinRotor.propTypes = {
  type: _react2.default.PropTypes.oneOf([_Constants.RO_TYPE_THIN_BETA, _Constants.RO_TYPE_THIN_GAMMA, _Rotor.INITIAL_ROTOR_TYPE]).isRequired,
  ringPosition: _react2.default.PropTypes.number.isRequired,
  windowLetter: _react2.default.PropTypes.string.isRequired,
  labels: _react2.default.PropTypes.object.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default).isRequired
};

ThinRotor.defaultProps = {
  type: _Rotor.INITIAL_ROTOR_TYPE,
  ringPosition: _Rotor.INITIAL_RING_POSITION,
  windowLetter: _Rotor.INITIAL_WINDOW_POSITION,
  labels: function () {
    var labels = {};
    labels[_Constants.RO_TYPE_THIN_BETA] = 'Thin Beta', labels[_Constants.RO_TYPE_THIN_GAMMA] = 'Thin Gamma';
    return labels;
  }()
};
module.exports = exports['default'];