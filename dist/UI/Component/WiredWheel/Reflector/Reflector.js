"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_events=require("events"),_events2=_interopRequireDefault(_events),_Reflector=require("../Reflector"),_Reflector2=_interopRequireDefault(_Reflector),_Constants=require("../../../../Constants"),_Utils=require("../../../../Utils"),_ReflectorD=require("./Settings/ReflectorD"),_ReflectorD2=_interopRequireDefault(_ReflectorD),Reflector=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"renderChoices",value:function(){var e=this;return[_Constants.RE_TYPE_A,_Constants.RE_TYPE_B,_Constants.RE_TYPE_C,_Constants.RE_TYPE_D,_Constants.RE_TYPE_BETA,_Constants.RE_TYPE_GAMMA].map(function(t){return _react2.default.createElement("option",{key:t,value:t},(0,_Utils.rudimentaryTranslator)(t,e.props.labels))})}},{key:"renderReflectorOptions",value:function(){switch(this.props.type){case _Constants.RE_TYPE_D:return _react2.default.createElement(_ReflectorD2.default,this.props)}}},{key:"render",value:function(){return _react2.default.createElement("div",null,_react2.default.createElement(_Reflector2.default,this.props,this.renderChoices()),this.renderReflectorOptions())}}]),t}(_react2.default.Component);exports.default=Reflector,Reflector.propTypes={type:_react2.default.PropTypes.oneOf([_Constants.RE_TYPE_A,_Constants.RE_TYPE_B,_Constants.RE_TYPE_C,_Constants.RE_TYPE_D,_Constants.RE_TYPE_BETA,_Constants.RE_TYPE_GAMMA,_Reflector.INITIAL_REFLECTOR_TYPE]).isRequired,labels:_react2.default.PropTypes.object.isRequired,eventManager:_react2.default.PropTypes.instanceOf(_events2.default).isRequired},Reflector.defaultProps={type:_Reflector.INITIAL_REFLECTOR_TYPE,labels:function(){var e={};return e[_Constants.RE_TYPE_BETA]="Beta",e[_Constants.RE_TYPE_GAMMA]="Gamma",e}()},module.exports=exports.default;