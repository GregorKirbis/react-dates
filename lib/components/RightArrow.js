"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var RightArrow = function RightArrow(_ref) {
  var props = (0, _extends2["default"])({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    focusable: "false",
    viewBox: "0 0 1000 1000",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"
  }));
};
var _default = exports["default"] = RightArrow;