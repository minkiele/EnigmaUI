"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelTitle = function PanelTitle(props) {
  return _react2.default.createElement(
    "h2",
    { className: "panel-title" },
    props.children
  );
};

exports.default = PanelTitle;
module.exports = exports["default"];