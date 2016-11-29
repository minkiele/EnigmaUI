'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Utils = require('enigma-minkiele/dist/Utils');

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPlugBoardWiring = function (_React$Component) {
  _inherits(NewPlugBoardWiring, _React$Component);

  function NewPlugBoardWiring(props) {
    _classCallCheck(this, NewPlugBoardWiring);

    var _this = _possibleConstructorReturn(this, (NewPlugBoardWiring.__proto__ || Object.getPrototypeOf(NewPlugBoardWiring)).call(this, props));

    _this.state = {
      wiring: _this.getNewWiring()
    };

    return _this;
  }

  _createClass(NewPlugBoardWiring, [{
    key: 'getNewWiring',
    value: function getNewWiring() {
      return ['', ''];
    }
  }, {
    key: 'isWiringComplete',
    value: function isWiringComplete() {
      try {
        this.state.wiring.forEach(_Utils.normalizeInput);
        return true;
      } catch (err) {
        return false;
      }
    }
  }, {
    key: 'updatePlug',
    value: function updatePlug(value, key) {
      this.setState(function (previousState) {
        var wiring = previousState.wiring.slice();
        wiring[key] = value;
        return {
          wiring: wiring
        };
      });
    }
  }, {
    key: 'getForbiddenLetters',
    value: function getForbiddenLetters() {
      var andLetter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var forbiddenLetters = [];
      this.props.wirings.forEach(function (wiring) {
        forbiddenLetters.push.apply(forbiddenLetters, wiring);
      });
      if (andLetter.length > 0) {
        forbiddenLetters.push(andLetter);
      }
      return forbiddenLetters;
    }
  }, {
    key: 'renderAlphabet',
    value: function renderAlphabet() {
      var disabledLetter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var alphabet = [];

      var forbiddenLetters = this.getForbiddenLetters(disabledLetter);

      for (var i = 0; i < 26; i += 1) {
        var letter = (0, _Utils.getLetter)(i);
        var isDisabled = forbiddenLetters.indexOf(letter) > -1;
        alphabet.push(_react2.default.createElement(
          'option',
          { key: letter.toString(), disabled: isDisabled, value: letter },
          letter
        ));
      }
      return alphabet;
    }
  }, {
    key: 'addWiring',
    value: function addWiring() {
      if (this.isWiringComplete()) {
        this.props.eventManager.emit('change.plugBoard.addWiring', this.state.wiring);
        this.setState({
          wiring: this.getNewWiring()
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Row2.default,
        { className: 'enigmaPlugBoardWiring' },
        _react2.default.createElement(
          _Col2.default,
          { xs: 12, sm: 5 },
          _react2.default.createElement(
            _FormGroup2.default,
            null,
            _react2.default.createElement(
              _FormControl2.default,
              { componentClass: 'select', value: this.state.wiring[0], onChange: function onChange(evt) {
                  _this2.updatePlug(evt.target.value, 0);
                } },
              _react2.default.createElement('option', { value: '' }),
              this.renderAlphabet(this.state.wiring[1])
            )
          )
        ),
        _react2.default.createElement(
          _Col2.default,
          { xs: 12, sm: 5 },
          _react2.default.createElement(
            _FormGroup2.default,
            null,
            _react2.default.createElement(
              _FormControl2.default,
              { componentClass: 'select', value: this.state.wiring[1], onChange: function onChange(evt) {
                  _this2.updatePlug(evt.target.value, 1);
                } },
              _react2.default.createElement('option', { value: '' }),
              this.renderAlphabet(this.state.wiring[0])
            )
          )
        ),
        _react2.default.createElement(
          _Col2.default,
          { xs: 12, sm: 2 },
          _react2.default.createElement(
            _Button2.default,
            { bsStyle: 'primary', block: true, disabled: !this.isWiringComplete(), onClick: function onClick() {
                _this2.addWiring();
              } },
            'Plug'
          )
        )
      );
    }
  }]);

  return NewPlugBoardWiring;
}(_react2.default.Component);

exports.default = NewPlugBoardWiring;


NewPlugBoardWiring.propTypes = {
  wirings: _react2.default.PropTypes.array.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default)
};

NewPlugBoardWiring.defaultProps = {
  wirings: []
};
module.exports = exports['default'];