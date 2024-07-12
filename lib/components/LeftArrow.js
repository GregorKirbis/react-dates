"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var LeftArrow = function LeftArrow(_ref) {
  var props = (0, _extends2["default"])({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    focusable: "false",
    viewBox: "0 0 1000 1000",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z"
  }));
};
var _default = exports["default"] = LeftArrow;