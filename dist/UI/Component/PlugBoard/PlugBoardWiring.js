'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlugBoardWiring = function (_React$Component) {
  _inherits(PlugBoardWiring, _React$Component);

  function PlugBoardWiring() {
    _classCallCheck(this, PlugBoardWiring);

    return _possibleConstructorReturn(this, (PlugBoardWiring.__proto__ || Object.getPrototypeOf(PlugBoardWiring)).apply(this, arguments));
  }

  _createClass(PlugBoardWiring, [{
    key: 'removeWiring',
    value: function removeWiring() {
      this.props.eventManager.emit('change.plugBoard.removeWiring', this.props.wiring);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'enigmaPlugBoardWiring clearfix' },
        _react2.default.createElement(
          'strong',
          null,
          ' ',
          this.props.wiring[0],
          ' \u21D4 ',
          this.props.wiring[1],
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'pull-right' },
          _react2.default.createElement(
            _Button2.default,
            { bsStyle: 'danger', onClick: function onClick() {
                _this2.removeWiring();
              } },
            'Remove'
          )
        )
      );
    }
  }]);

  return PlugBoardWiring;
}(_react2.default.Component);

exports.default = PlugBoardWiring;


PlugBoardWiring.propTypes = {
  wiring: _react2.default.PropTypes.array.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default)
};
module.exports = exports['default'];