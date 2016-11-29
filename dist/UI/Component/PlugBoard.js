'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLUGBOARD_MAX_SIZE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _PlugBoardWiring = require('./PlugBoard/PlugBoardWiring');

var _PlugBoardWiring2 = _interopRequireDefault(_PlugBoardWiring);

var _NewPlugBoardWiring = require('./PlugBoard/NewPlugBoardWiring');

var _NewPlugBoardWiring2 = _interopRequireDefault(_NewPlugBoardWiring);

var _Well = require('react-bootstrap/lib/Well');

var _Well2 = _interopRequireDefault(_Well);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _ListGroup = require('react-bootstrap/lib/ListGroup');

var _ListGroup2 = _interopRequireDefault(_ListGroup);

var _ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PLUGBOARD_MAX_SIZE = exports.PLUGBOARD_MAX_SIZE = 10;

var PlugBoard = function (_React$Component) {
  _inherits(PlugBoard, _React$Component);

  function PlugBoard(props) {
    _classCallCheck(this, PlugBoard);

    var _this = _possibleConstructorReturn(this, (PlugBoard.__proto__ || Object.getPrototypeOf(PlugBoard)).call(this, props));

    _this.state = {
      isAdding: false
    };

    return _this;
  }

  _createClass(PlugBoard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var wirings = this.props.wirings.map(function (wiring) {
        var key = wiring.join('');
        return _react2.default.createElement(
          _ListGroupItem2.default,
          { key: key },
          _react2.default.createElement(_PlugBoardWiring2.default, { wiring: wiring, index: key, eventManager: _this2.props.eventManager })
        );
      });

      var addWiring = void 0;

      if (this.props.wirings.length < PLUGBOARD_MAX_SIZE) {
        addWiring = _react2.default.createElement(
          _Well2.default,
          { className: 'plugBoardAddWiring' },
          _react2.default.createElement(
            _ControlLabel2.default,
            null,
            'New Wiring'
          ),
          _react2.default.createElement(_NewPlugBoardWiring2.default, { wirings: this.props.wirings, eventManager: this.props.eventManager })
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'enigmaPlugBoard' },
        _react2.default.createElement(
          _ListGroup2.default,
          { className: 'enigmaPlugBoardWirings' },
          wirings
        ),
        addWiring
      );
    }
  }]);

  return PlugBoard;
}(_react2.default.Component);

exports.default = PlugBoard;


PlugBoard.propTypes = {
  wirings: _react2.default.PropTypes.array.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default)
};

PlugBoard.defaultProps = {
  wirings: []
};