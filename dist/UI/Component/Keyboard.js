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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Constants = require('../../Constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Keyboard = function (_React$Component) {
  _inherits(Keyboard, _React$Component);

  function Keyboard(props) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, props));

    _this.state = _this.getResetState();
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'getResetState',
    value: function getResetState() {
      return {
        inputLetter: _Constants.KEYBOARD_EMPTY_STREAM,
        input: _Constants.KEYBOARD_EMPTY_STREAM,
        output: _Constants.KEYBOARD_EMPTY_STREAM,
        pendingInputLetter: _Constants.KEYBOARD_EMPTY_STREAM,
        groupBy: _Constants.DEFAULT_GROUP_BY
      };
    }
  }, {
    key: 'resetState',
    value: function resetState() {
      this.setState(this.getResetState());
    }
  }, {
    key: 'updateInput',
    value: function updateInput(value) {
      var _this2 = this;

      try {
        (function () {

          var normalizedValue = (0, _Utils.normalizeInput)(value);

          _this2.setState(function (previousState) {
            return {
              inputLetter: '',
              pendingInputLetter: normalizedValue
            };
          }, function () {
            _this2.props.eventManager.emit('change.keyboard.input', _this2.state.pendingInputLetter);
          });
        })();
      } catch (e) {
        //Do nothing
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(futureProps) {
      if (this.state.pendingInputLetter !== _Constants.KEYBOARD_EMPTY_STREAM) {
        this.setState(function (previousState) {

          var newState = {
            pendingInputLetter: _Constants.KEYBOARD_EMPTY_STREAM,
            groupBy: previousState.groupBy
          };

          if (!!futureProps.lastEncodedLetter) {
            (0, _objectAssign2.default)(newState, {
              input: '' + previousState.input + previousState.pendingInputLetter,
              output: '' + previousState.output + futureProps.lastEncodedLetter
            });
          }

          return newState;
        });
      }
    }
  }, {
    key: 'getGroupedLetters',
    value: function getGroupedLetters(letters) {
      var output = '';
      for (var i = 0; i < letters.length; i += this.state.groupBy) {
        output += letters.substr(i, this.state.groupBy) + ' ';
      }
      return output.trim();
    }
  }, {
    key: 'useGroupBy',
    value: function useGroupBy() {
      return this.state.groupBy > 0;
    }
  }, {
    key: 'updateGroupBy',
    value: function updateGroupBy(value) {
      value = parseInt(value);
      if (value >= 0) {
        this.setState({
          groupBy: value
        });
      }
    }
  }, {
    key: 'renderInputGroup',
    value: function renderInputGroup(input) {
      var _this3 = this;

      var blockClassName = void 0;
      var btnClassName = void 0;

      if (this.state.output.length > 0) {
        blockClassName = 'input-group';
        btnClassName = 'input-group-btn';
      } else {
        btnClassName = 'hidden';
      }

      //Cannot use input groups here, spawning a new reset button
      // will trigger a focus change
      return _react2.default.createElement(
        'div',
        { className: blockClassName },
        input,
        _react2.default.createElement(
          'span',
          { className: btnClassName },
          _react2.default.createElement(
            _Button2.default,
            { bsStyle: 'danger', onClick: function onClick() {
                _this3.resetState();
              } },
            'Reset'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'keyboard' },
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { className: 'keyboardInput', xs: 12, md: 2 },
            _react2.default.createElement(
              _FormGroup2.default,
              null,
              this.renderInputGroup(_react2.default.createElement(_FormControl2.default, { type: 'text', value: this.state.inputLetter, onChange: function onChange(evt) {
                  _this4.updateInput(evt.target.value);
                }, maxLength: '1', pattern: '[A-Z]', size: '1', placeholder: 'Input' }))
            )
          ),
          _react2.default.createElement(
            _Col2.default,
            { className: 'keyboardInput', xs: 12, md: 5 },
            _react2.default.createElement(
              'strong',
              null,
              'Input:'
            ),
            '\xA0',
            _react2.default.createElement(
              'code',
              null,
              this.useGroupBy() ? this.getGroupedLetters(this.state.input) : this.state.input
            )
          ),
          _react2.default.createElement(
            _Col2.default,
            { className: 'keyboardOutput', xs: 12, md: 5 },
            _react2.default.createElement(
              'strong',
              null,
              'Output:'
            ),
            '\xA0',
            _react2.default.createElement(
              'code',
              null,
              this.useGroupBy() ? this.getGroupedLetters(this.state.output) : this.state.output
            )
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { className: 'keyboardOutput', xs: 12, md: 2 },
            _react2.default.createElement(
              _FormGroup2.default,
              { className: 'splitSize' },
              _react2.default.createElement(
                'label',
                null,
                'Group output by'
              ),
              _react2.default.createElement(_FormControl2.default, { type: 'number', value: this.state.groupBy, onChange: function onChange(evt) {
                  _this4.updateGroupBy(evt.target.value);
                } })
            )
          )
        )
      );
    }
  }]);

  return Keyboard;
}(_react2.default.Component);

exports.default = Keyboard;


Keyboard.propTypes = {
  lastEncodedLetter: _react2.default.PropTypes.string.isRequired,
  eventManager: _react2.default.PropTypes.instanceOf(_events2.default).isRequired
};

Keyboard.defaultProps = {
  lastEncodedLetter: _Constants.KEYBOARD_EMPTY_STREAM
};
module.exports = exports['default'];