'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Reflector = require('../Reflector');

var _Reflector2 = _interopRequireDefault(_Reflector);

var _Constants = require('../../../../Constants');

var _Utils = require('../../../../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reflector = function (_React$Component) {
  _inherits(Reflector, _React$Component);

  function Reflector() {
    _classCallCheck(this, Reflector);

    return _possibleConstructorReturn(this, (Reflector.__proto__ || Object.getPrototypeOf(Reflector)).apply(this, arguments));
  }

  _createClass(Reflector, [{
    key: 'renderChoices',
    value: function renderChoices() {
      var _this2 = this;

      return [_Constants.RE_TYPE_A, _Constants.RE_TYPE_B, _Constants.RE_TYPE_C, _Constants.RE_TYPE_BETA, _Constants.RE_TYPE_GAMMA].map(function (reflector) {
        return _react2.default.createElement(
          'option',
          { key: reflector, value: reflector },
          (0, _Utils.rudimentaryTranslator)(reflector, _this2.props.labels)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Reflector2.default,
        this.props,
        this.renderChoices()
      );
    }
  }]);

  return Reflector;
}(_react2.default.Component);

exports.default = Reflector;


Reflector.propTypes = {
  type: _react2.default.PropTypes.oneOf([_Constants.RE_TYPE_A, _Constants.RE_TYPE_B, _Constants.RE_TYPE_C, _Constants.RE_TYPE_BETA, _Constants.RE_TYPE_GAMMA, _Reflector.INITIAL_REFLECTOR_TYPE]).isRequired,
  labels: _react2.default.PropTypes.object.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default).isRequired
};

Reflector.defaultProps = {
  type: _Reflector.INITIAL_REFLECTOR_TYPE,
  labels: function () {
    var labels = {};
    labels[_Constants.RE_TYPE_BETA] = 'Beta', labels[_Constants.RE_TYPE_GAMMA] = 'Gamma';
    return labels;
  }()
};
module.exports = exports['default'];