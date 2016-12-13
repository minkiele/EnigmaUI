"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_events=require("events"),_events2=_interopRequireDefault(_events),_Button=require("react-bootstrap/lib/Button"),_Button2=_interopRequireDefault(_Button),PlugBoardWiring=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"removeWiring",value:function(){this.props.eventManager.emit("change.plugBoard.removeWiring",this.props.wiring)}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",{className:"enigmaPlugBoardWiring clearfix"},_react2.default.createElement("strong",null," ",this.props.wiring[0]," ⇔ ",this.props.wiring[1]," "),_react2.default.createElement("div",{className:"pull-right"},_react2.default.createElement(_Button2.default,{bsStyle:"danger",onClick:function(){e.removeWiring()}},"Remove")))}}]),t}(_react2.default.Component);exports.default=PlugBoardWiring,PlugBoardWiring.propTypes={wiring:_react2.default.PropTypes.array.isRequired,eventManager:_react2.default.PropTypes.instanceOf(_events2.default)},module.exports=exports.default;