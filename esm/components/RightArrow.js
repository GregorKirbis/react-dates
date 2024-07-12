import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "color"];
import React from 'react';
import PropTypes from 'prop-types';
var RightArrow = function RightArrow(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'black' : _ref$color,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2l10 10-10 10-1.41-1.41L18.17 12l-7.58-7.59L12 2z"
  }));
};
RightArrow.propTypes = process.env.NODE_ENV !== "production" ? {
  size: PropTypes.number,
  color: PropTypes.string
} : {};
export default RightArrow;