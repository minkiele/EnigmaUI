"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_events=require("events"),_events2=_interopRequireDefault(_events),_TypeSelector=require("./Component/TypeSelector"),_TypeSelector2=_interopRequireDefault(_TypeSelector),_PlugBoard=require("./Component/PlugBoard"),_PlugBoard2=_interopRequireDefault(_PlugBoard),_Rotor=require("./Component/WiredWheel/Rotor/Rotor"),_Rotor2=_interopRequireDefault(_Rotor),_Reflector=require("./Component/WiredWheel/Reflector/Reflector"),_Reflector2=_interopRequireDefault(_Reflector),_ThinRotor=require("./Component/WiredWheel/Rotor/ThinRotor"),_ThinRotor2=_interopRequireDefault(_ThinRotor),_ThinReflector=require("./Component/WiredWheel/Reflector/ThinReflector"),_ThinReflector2=_interopRequireDefault(_ThinReflector),_Keyboard=require("./Component/Keyboard"),_Keyboard2=_interopRequireDefault(_Keyboard),_Constants=require("../Constants"),_PanelTitle=require("./Bootstrap/PanelTitle"),_PanelTitle2=_interopRequireDefault(_PanelTitle),_Panel=require("react-bootstrap/lib/Panel"),_Panel2=_interopRequireDefault(_Panel),_Col=require("react-bootstrap/lib/Col"),_Col2=_interopRequireDefault(_Col),_Row=require("react-bootstrap/lib/Row"),_Row2=_interopRequireDefault(_Row),Enigma=function(e){function t(e){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return _inherits(t,e),_createClass(t,[{key:"getUsedRotors",value:function(e){var t=this,r=["leftRotor","centerRotor","rightRotor"];return this.props.type===_Constants.TYPE_M4&&r.push("fourthRotor"),r.filter(function(t){return t!==e}).map(function(e){return t.props[e].type}).filter(function(e){return"string"==typeof e&&e.length>0})}},{key:"renderReflectorConfiguration",value:function(){var e=void 0,t=void 0;switch(this.props.type){case _Constants.TYPE_M3:e="Reflector",t=_react2.default.createElement(_Reflector2.default,{type:this.props.reflector,wirings:this.props.reflectorWirings,eventManager:this.props.eventManager});break;case _Constants.TYPE_M4:e="Thin Reflector",t=_react2.default.createElement(_ThinReflector2.default,{type:this.props.reflector,eventManager:this.props.eventManager})}return _react2.default.createElement(_Panel2.default,{bsStyle:this.getPanelSuccessFromReflector(),header:_react2.default.createElement(_PanelTitle2.default,null,e)},t)}},{key:"getRotorColsClass",value:function(){var e=void 0;switch(this.props.type){case _Constants.TYPE_M3:e=4;break;case _Constants.TYPE_M4:e=3}return{xs:12,md:e}}},{key:"renderRotorsConfiguration",value:function(){var e=void 0;switch(this.props.type){case _Constants.TYPE_M4:e=_react2.default.createElement(_Col2.default,this.getRotorColsClass(),_react2.default.createElement(_Panel2.default,{header:_react2.default.createElement(_PanelTitle2.default,null,"Fourth Rotor"),bsStyle:this.getPanelSuccessFromRotor("fourthRotor")},_react2.default.createElement(_ThinRotor2.default,_extends({},this.props.fourthRotor,{usedRotors:this.getUsedRotors("fourthRotor"),eventManager:this.props.eventManager}))))}return e}},{key:"getPanelSuccessFromRotor",value:function(e){return this.props[e].type?"success":void 0}},{key:"getPanelSuccessFromReflector",value:function(){return this.props.reflector?"success":void 0}},{key:"render",value:function(){return _react2.default.createElement("div",{className:"enigmaUI"},_react2.default.createElement(_Panel2.default,{bsStyle:"info",header:_react2.default.createElement(_PanelTitle2.default,null,"Machine type")},_react2.default.createElement(_TypeSelector2.default,{type:this.props.type,eventManager:this.props.eventManager})),_react2.default.createElement("div",{className:"enigmaConfiguration"},this.renderReflectorConfiguration(),_react2.default.createElement(_Row2.default,null,this.renderRotorsConfiguration(),_react2.default.createElement(_Col2.default,this.getRotorColsClass(),_react2.default.createElement(_Panel2.default,{header:_react2.default.createElement(_PanelTitle2.default,null,"Left Rotor"),bsStyle:this.getPanelSuccessFromRotor("leftRotor")},_react2.default.createElement(_Rotor2.default,_extends({},this.props.leftRotor,{position:_Constants.LEFT_ROTOR,usedRotors:this.getUsedRotors("leftRotor"),eventManager:this.props.eventManager})))),_react2.default.createElement(_Col2.default,this.getRotorColsClass(),_react2.default.createElement(_Panel2.default,{header:_react2.default.createElement(_PanelTitle2.default,null,"Center Rotor"),bsStyle:this.getPanelSuccessFromRotor("centerRotor")},_react2.default.createElement(_Rotor2.default,_extends({},this.props.centerRotor,{position:_Constants.CENTER_ROTOR,usedRotors:this.getUsedRotors("centerRotor"),eventManager:this.props.eventManager})))),_react2.default.createElement(_Col2.default,this.getRotorColsClass(),_react2.default.createElement(_Panel2.default,{header:_react2.default.createElement(_PanelTitle2.default,null,"Right Rotor"),bsStyle:this.getPanelSuccessFromRotor("rightRotor")},_react2.default.createElement(_Rotor2.default,_extends({},this.props.rightRotor,{position:_Constants.RIGHT_ROTOR,usedRotors:this.getUsedRotors("rightRotor"),eventManager:this.props.eventManager})))))),_react2.default.createElement(_Panel2.default,{bsStyle:"info",header:_react2.default.createElement(_PanelTitle2.default,null,"Plugboard")},_react2.default.createElement(_PlugBoard2.default,{wirings:this.props.plugBoardWirings,eventManager:this.props.eventManager})),_react2.default.createElement(_Panel2.default,{header:_react2.default.createElement(_PanelTitle2.default,null,"Keyboard")},_react2.default.createElement(_Keyboard2.default,{lastEncodedLetter:this.props.lastEncodedLetter,eventManager:this.props.eventManager})))}}]),t}(_react2.default.Component);exports.default=Enigma,Enigma.propTypes={type:_react2.default.PropTypes.oneOf([_Constants.TYPE_M3,_Constants.TYPE_M4]).isRequired,reflector:_react2.default.PropTypes.string,fourthRotor:_react2.default.PropTypes.object,leftRotor:_react2.default.PropTypes.object,centerRotor:_react2.default.PropTypes.object,rightRotor:_react2.default.PropTypes.object,plugBoardWirings:_react2.default.PropTypes.array,lastEncodedLetter:_react2.default.PropTypes.string,eventManager:_react2.default.PropTypes.instanceOf(_events2.default).isRequired},Enigma.defaultProps={type:_Constants.DEFAULT_TYPE},module.exports=exports.default;