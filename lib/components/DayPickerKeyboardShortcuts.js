"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TOP_RIGHT = exports.TOP_LEFT = exports.BOTTOM_RIGHT = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _airbnbPropTypes = require("airbnb-prop-types");
var _reactWithStyles = require("react-with-styles");
var _defaultPhrases = require("../defaultPhrases");
var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));
var _KeyboardShortcutRow = _interopRequireDefault(require("./KeyboardShortcutRow"));
var _CloseButton = _interopRequireDefault(require("./CloseButton"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TOP_LEFT = exports.TOP_LEFT = 'top-left';
var TOP_RIGHT = exports.TOP_RIGHT = 'top-right';
var BOTTOM_RIGHT = exports.BOTTOM_RIGHT = 'bottom-right';
var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread(_objectSpread({}, _reactWithStyles.withStylesPropTypes), {}, {
  block: _propTypes["default"].bool,
  buttonLocation: _propTypes["default"].oneOf([TOP_LEFT, TOP_RIGHT, BOTTOM_RIGHT]),
  showKeyboardShortcutsPanel: _propTypes["default"].bool,
  openKeyboardShortcutsPanel: _propTypes["default"].func,
  closeKeyboardShortcutsPanel: _propTypes["default"].func,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DayPickerKeyboardShortcutsPhrases)),
  renderKeyboardShortcutsButton: _propTypes["default"].func,
  renderKeyboardShortcutsPanel: _propTypes["default"].func
})) : {};
var defaultProps = {
  block: false,
  buttonLocation: BOTTOM_RIGHT,
  showKeyboardShortcutsPanel: false,
  openKeyboardShortcutsPanel: function openKeyboardShortcutsPanel() {},
  closeKeyboardShortcutsPanel: function closeKeyboardShortcutsPanel() {},
  phrases: _defaultPhrases.DayPickerKeyboardShortcutsPhrases,
  renderKeyboardShortcutsButton: undefined,
  renderKeyboardShortcutsPanel: undefined
};
function getKeyboardShortcuts(phrases) {
  return [{
    unicode: '↵',
    label: phrases.enterKey,
    action: phrases.selectFocusedDate
  }, {
    unicode: '←/→',
    label: phrases.leftArrowRightArrow,
    action: phrases.moveFocusByOneDay
  }, {
    unicode: '↑/↓',
    label: phrases.upArrowDownArrow,
    action: phrases.moveFocusByOneWeek
  }, {
    unicode: 'PgUp/PgDn',
    label: phrases.pageUpPageDown,
    action: phrases.moveFocusByOneMonth
  }, {
    unicode: 'Home/End',
    label: phrases.homeEnd,
    action: phrases.moveFocustoStartAndEndOfWeek
  }, {
    unicode: 'Esc',
    label: phrases.escape,
    action: phrases.returnFocusToInput
  }, {
    unicode: '?',
    label: phrases.questionMark,
    action: phrases.openThisPanel
  }];
}
var DayPickerKeyboardShortcuts = /*#__PURE__*/function (_Component) {
  function DayPickerKeyboardShortcuts(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      keyboardShortcuts: getKeyboardShortcuts(props.phrases)
    };
    _this.onShowKeyboardShortcutsButtonClick = _this.onShowKeyboardShortcutsButtonClick.bind(_this);
    _this.setShowKeyboardShortcutsButtonRef = _this.setShowKeyboardShortcutsButtonRef.bind(_this);
    _this.setHideKeyboardShortcutsButtonRef = _this.setHideKeyboardShortcutsButtonRef.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }
  (0, _inheritsLoose2["default"])(DayPickerKeyboardShortcuts, _Component);
  DayPickerKeyboardShortcuts.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.phrases !== prevState.phrases) {
      return {
        keyboardShortcuts: getKeyboardShortcuts(nextProps.phrases)
      };
    }
    return null;
  };
  var _proto = DayPickerKeyboardShortcuts.prototype;
  _proto.componentDidUpdate = function componentDidUpdate() {
    this.handleFocus();
  };
  _proto.handleFocus = function handleFocus() {
    if (this.hideKeyboardShortcutsButton) {
      this.hideKeyboardShortcutsButton.focus();
    }
  };
  _proto.onKeyDown = function onKeyDown(e) {
    e.stopPropagation();
    var closeKeyboardShortcutsPanel = this.props.closeKeyboardShortcutsPanel;
    switch (e.key) {
      case 'Escape':
        closeKeyboardShortcutsPanel();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        break;
      case 'Tab':
      case 'Home':
      case 'End':
      case 'PageUp':
      case 'PageDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        e.preventDefault();
        break;
      default:
        break;
    }
  };
  _proto.onShowKeyboardShortcutsButtonClick = function onShowKeyboardShortcutsButtonClick() {
    var _this2 = this;
    var openKeyboardShortcutsPanel = this.props.openKeyboardShortcutsPanel;
    openKeyboardShortcutsPanel(function () {
      _this2.showKeyboardShortcutsButton.focus();
    });
  };
  _proto.setShowKeyboardShortcutsButtonRef = function setShowKeyboardShortcutsButtonRef(ref) {
    this.showKeyboardShortcutsButton = ref;
  };
  _proto.setHideKeyboardShortcutsButtonRef = function setHideKeyboardShortcutsButtonRef(ref) {
    this.hideKeyboardShortcutsButton = ref;
  };
  _proto.render = function render() {
    var _this$props = this.props,
      block = _this$props.block,
      buttonLocation = _this$props.buttonLocation,
      showKeyboardShortcutsPanel = _this$props.showKeyboardShortcutsPanel,
      closeKeyboardShortcutsPanel = _this$props.closeKeyboardShortcutsPanel,
      css = _this$props.css,
      styles = _this$props.styles,
      phrases = _this$props.phrases,
      renderKeyboardShortcutsButton = _this$props.renderKeyboardShortcutsButton,
      renderKeyboardShortcutsPanel = _this$props.renderKeyboardShortcutsPanel;
    var toggleButtonText = showKeyboardShortcutsPanel ? phrases.hideKeyboardShortcutsPanel : phrases.showKeyboardShortcutsPanel;
    var bottomRight = buttonLocation === BOTTOM_RIGHT;
    var topRight = buttonLocation === TOP_RIGHT;
    var topLeft = buttonLocation === TOP_LEFT;
    return /*#__PURE__*/_react["default"].createElement("div", null, renderKeyboardShortcutsButton && renderKeyboardShortcutsButton({
      ref: this.setShowKeyboardShortcutsButtonRef,
      onClick: this.onShowKeyboardShortcutsButtonClick,
      ariaLabel: toggleButtonText
    }), !renderKeyboardShortcutsButton && /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
      ref: this.setShowKeyboardShortcutsButtonRef
    }, css(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_show, bottomRight && styles.DayPickerKeyboardShortcuts_show__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_show__topRight, topLeft && styles.DayPickerKeyboardShortcuts_show__topLeft), {
      type: "button",
      "aria-label": toggleButtonText,
      onClick: this.onShowKeyboardShortcutsButtonClick,
      onMouseUp: function onMouseUp(e) {
        e.currentTarget.blur();
      }
    }), /*#__PURE__*/_react["default"].createElement("span", css(styles.DayPickerKeyboardShortcuts_showSpan, bottomRight && styles.DayPickerKeyboardShortcuts_showSpan__bottomRight, topRight && styles.DayPickerKeyboardShortcuts_showSpan__topRight, topLeft && styles.DayPickerKeyboardShortcuts_showSpan__topLeft), "?")), showKeyboardShortcutsPanel && (renderKeyboardShortcutsPanel ? renderKeyboardShortcutsPanel({
      closeButtonAriaLabel: phrases.hideKeyboardShortcutsPanel,
      keyboardShortcuts: this.state.keyboardShortcuts,
      onCloseButtonClick: closeKeyboardShortcutsPanel,
      onKeyDown: this.onKeyDown,
      title: phrases.keyboardShortcuts
    }) : /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, css(styles.DayPickerKeyboardShortcuts_panel), {
      role: "dialog",
      "aria-labelledby": "DayPickerKeyboardShortcuts_title",
      "aria-describedby": "DayPickerKeyboardShortcuts_description"
    }), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, css(styles.DayPickerKeyboardShortcuts_title), {
      id: "DayPickerKeyboardShortcuts_title"
    }), phrases.keyboardShortcuts), /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
      ref: this.setHideKeyboardShortcutsButtonRef
    }, css(styles.DayPickerKeyboardShortcuts_buttonReset, styles.DayPickerKeyboardShortcuts_close), {
      type: "button",
      tabIndex: "0",
      "aria-label": phrases.hideKeyboardShortcutsPanel,
      onClick: closeKeyboardShortcutsPanel,
      onKeyDown: this.onKeyDown
    }), /*#__PURE__*/_react["default"].createElement(_CloseButton["default"], css(styles.DayPickerKeyboardShortcuts_closeSvg))), /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({}, css(styles.DayPickerKeyboardShortcuts_list), {
      id: "DayPickerKeyboardShortcuts_description"
    }), this.state.keyboardShortcuts.map(function (_ref) {
      var unicode = _ref.unicode,
        label = _ref.label,
        action = _ref.action;
      return /*#__PURE__*/_react["default"].createElement(_KeyboardShortcutRow["default"], {
        key: label,
        unicode: unicode,
        label: label,
        action: action,
        block: block
      });
    })))));
  };
  return DayPickerKeyboardShortcuts;
}(_react.Component);
DayPickerKeyboardShortcuts.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DayPickerKeyboardShortcuts.defaultProps = defaultProps;
var _default = exports["default"] = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
    color = _ref2$reactDates.color,
    font = _ref2$reactDates.font,
    zIndex = _ref2$reactDates.zIndex;
  return {
    DayPickerKeyboardShortcuts_buttonReset: {
      background: 'none',
      border: 0,
      borderRadius: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      padding: 0,
      cursor: 'pointer',
      fontSize: font.size,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_show: {
      width: 33,
      height: 26,
      position: 'absolute',
      zIndex: zIndex + 2,
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute'
      }
    },
    DayPickerKeyboardShortcuts_show__bottomRight: {
      bottom: 0,
      right: 0,
      '::before': {
        borderTop: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        bottom: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topRight: {
      top: 0,
      right: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderRight: "33px solid ".concat(color.core.primary),
        top: 0,
        right: 0
      },
      ':hover::before': {
        borderRight: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_show__topLeft: {
      top: 0,
      left: 0,
      '::before': {
        borderBottom: '26px solid transparent',
        borderLeft: "33px solid ".concat(color.core.primary),
        top: 0,
        left: 0
      },
      ':hover::before': {
        borderLeft: "33px solid ".concat(color.core.primary_dark)
      }
    },
    DayPickerKeyboardShortcuts_showSpan: {
      color: color.core.white,
      position: 'absolute'
    },
    DayPickerKeyboardShortcuts_showSpan__bottomRight: {
      bottom: 0,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topRight: {
      top: 1,
      right: 5
    },
    DayPickerKeyboardShortcuts_showSpan__topLeft: {
      top: 1,
      left: 5
    },
    DayPickerKeyboardShortcuts_panel: {
      overflow: 'auto',
      background: color.background,
      border: "1px solid ".concat(color.core.border),
      borderRadius: 2,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: zIndex + 2,
      padding: 22,
      margin: 33,
      textAlign: 'left'
    },
    DayPickerKeyboardShortcuts_title: {
      fontSize: 16,
      fontWeight: 'bold',
      margin: 0
    },
    DayPickerKeyboardShortcuts_list: {
      listStyle: 'none',
      padding: 0,
      fontSize: font.size
    },
    DayPickerKeyboardShortcuts_close: {
      position: 'absolute',
      right: 22,
      top: 22,
      zIndex: zIndex + 2,
      ':active': {
        outline: 'none'
      }
    },
    DayPickerKeyboardShortcuts_closeSvg: {
      height: 15,
      width: 15,
      fill: color.core.grayLighter,
      ':hover': {
        fill: color.core.grayLight
      },
      ':focus': {
        fill: color.core.grayLight
      }
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DayPickerKeyboardShortcuts);