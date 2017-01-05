"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_Utils=require("enigma-minkiele/dist/Utils"),_events=require("events"),_events2=_interopRequireDefault(_events),_NewPluggableWiring=require("../../../Pluggable/NewPluggableWiring"),_NewPluggableWiring2=_interopRequireDefault(_NewPluggableWiring),NewReflectorWiring=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"getForbiddenLetters",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];return this.props.wirings.forEach(function(e){t.push.apply(t,e)}),e.length>0&&t.push(e),t}},{key:"renderAlphabet",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[],r=this.getForbiddenLetters(e),n=0;n<26;n+=1){var i=r.indexOf(n)>-1;t.push(_react2.default.createElement("option",{key:n.toString(),disabled:i,value:n},n))}return t}},{key:"render",value:function(){var e=this.renderAlphabet.bind(this);return _react2.default.createElement(_NewPluggableWiring2.default,_extends({},this.props,{addWiringEvent:"change.reflector.addWiring",renderAlphabet:e}))}}]),t}(_react2.default.Component);exports.default=NewReflectorWiring,NewReflectorWiring.propTypes={wirings:_react2.default.PropTypes.array.isRequired,eventManager:_react2.default.PropTypes.instanceOf(_events2.default)},NewReflectorWiring.defaultProps={wirings:[]},module.exports=exports.default;