"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));
var _airbnbPropTypes = require("airbnb-prop-types");
var _reactWithStyles = require("react-with-styles");
var _moment = _interopRequireDefault(require("moment"));
var _consolidatedEvents = require("consolidated-events");
var _defaultPhrases = require("../defaultPhrases");
var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));
var _noflip = _interopRequireDefault(require("../utils/noflip"));
var _CalendarMonth = _interopRequireDefault(require("./CalendarMonth"));
var _isTransitionEndSupported = _interopRequireDefault(require("../utils/isTransitionEndSupported"));
var _getTransformStyles = _interopRequireDefault(require("../utils/getTransformStyles"));
var _getCalendarMonthWidth = _interopRequireDefault(require("../utils/getCalendarMonthWidth"));
var _toISOMonthString = _interopRequireDefault(require("../utils/toISOMonthString"));
var _isPrevMonth = _interopRequireDefault(require("../utils/isPrevMonth"));
var _isNextMonth = _interopRequireDefault(require("../utils/isNextMonth"));
var _ModifiersShape = _interopRequireDefault(require("../shapes/ModifiersShape"));
var _ScrollableOrientationShape = _interopRequireDefault(require("../shapes/ScrollableOrientationShape"));
var _DayOfWeekShape = _interopRequireDefault(require("../shapes/DayOfWeekShape"));
var _constants = require("../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread(_objectSpread({}, _reactWithStyles.withStylesPropTypes), {}, {
  enableOutsideDays: _propTypes["default"].bool,
  firstVisibleMonthIndex: _propTypes["default"].number,
  horizontalMonthPadding: _airbnbPropTypes.nonNegativeInteger,
  initialMonth: _reactMomentProptypes["default"].momentObj,
  isAnimating: _propTypes["default"].bool,
  numberOfMonths: _propTypes["default"].number,
  modifiers: _propTypes["default"].objectOf(_propTypes["default"].objectOf(_ModifiersShape["default"])),
  orientation: _ScrollableOrientationShape["default"],
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  onMonthTransitionEnd: _propTypes["default"].func,
  onMonthChange: _propTypes["default"].func,
  onYearChange: _propTypes["default"].func,
  renderMonthText: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  renderCalendarDay: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  translationValue: _propTypes["default"].number,
  renderMonthElement: (0, _airbnbPropTypes.mutuallyExclusiveProps)(_propTypes["default"].func, 'renderMonthText', 'renderMonthElement'),
  daySize: _airbnbPropTypes.nonNegativeInteger,
  focusedDate: _reactMomentProptypes["default"].momentObj,
  // indicates focusable day
  isFocused: _propTypes["default"].bool,
  // indicates whether or not to move focus to focusable day
  firstDayOfWeek: _DayOfWeekShape["default"],
  setMonthTitleHeight: _propTypes["default"].func,
  isRTL: _propTypes["default"].bool,
  transitionDuration: _airbnbPropTypes.nonNegativeInteger,
  verticalBorderSpacing: _airbnbPropTypes.nonNegativeInteger,
  // i18n
  monthFormat: _propTypes["default"].string,
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.CalendarDayPhrases)),
  dayAriaLabelFormat: _propTypes["default"].string
})) : {};
var defaultProps = {
  enableOutsideDays: false,
  firstVisibleMonthIndex: 0,
  horizontalMonthPadding: 13,
  initialMonth: (0, _moment["default"])(),
  isAnimating: false,
  numberOfMonths: 1,
  modifiers: {},
  orientation: _constants.HORIZONTAL_ORIENTATION,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  onMonthChange: function onMonthChange() {},
  onYearChange: function onYearChange() {},
  onMonthTransitionEnd: function onMonthTransitionEnd() {},
  renderMonthText: null,
  renderCalendarDay: undefined,
  renderDayContents: null,
  translationValue: null,
  renderMonthElement: null,
  daySize: _constants.DAY_SIZE,
  focusedDate: null,
  isFocused: false,
  firstDayOfWeek: null,
  setMonthTitleHeight: null,
  isRTL: false,
  transitionDuration: 200,
  verticalBorderSpacing: undefined,
  // i18n
  monthFormat: 'MMMM YYYY',
  // english locale
  phrases: _defaultPhrases.CalendarDayPhrases,
  dayAriaLabelFormat: undefined
};
function getMonths(initialMonth, numberOfMonths, withoutTransitionMonths) {
  var month = initialMonth.clone();
  if (!withoutTransitionMonths) month = month.subtract(1, 'month');
  var months = [];
  for (var i = 0; i < (withoutTransitionMonths ? numberOfMonths : numberOfMonths + 2); i += 1) {
    months.push(month);
    month = month.clone().add(1, 'month');
  }
  return months;
}
var CalendarMonthGrid = /*#__PURE__*/function (_Component) {
  function CalendarMonthGrid(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var withoutTransitionMonths = props.orientation === _constants.VERTICAL_SCROLLABLE;
    _this.state = {
      months: getMonths(props.initialMonth, props.numberOfMonths, withoutTransitionMonths)
    };
    _this.isTransitionEndSupported = (0, _isTransitionEndSupported["default"])();
    _this.onTransitionEnd = _this.onTransitionEnd.bind(_this);
    _this.setContainerRef = _this.setContainerRef.bind(_this);
    _this.locale = _moment["default"].locale();
    _this.onMonthSelect = _this.onMonthSelect.bind(_this);
    _this.onYearSelect = _this.onYearSelect.bind(_this);
    return _this;
  }
  (0, _inheritsLoose2["default"])(CalendarMonthGrid, _Component);
  CalendarMonthGrid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initialMonth = nextProps.initialMonth,
      numberOfMonths = nextProps.numberOfMonths,
      orientation = nextProps.orientation;
    var months = prevState.months;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var newMonths = months;
    if (!initialMonth.isSame(prevState.initialMonth, 'month') || numberOfMonths !== prevState.numberOfMonths) {
      if ((0, _isNextMonth["default"])(prevState.initialMonth, initialMonth)) {
        newMonths = months.slice(1);
        newMonths.push(months[months.length - 1].clone().add(1, 'month'));
      } else if ((0, _isPrevMonth["default"])(prevState.initialMonth, initialMonth)) {
        newMonths = months.slice(0, months.length - 1);
        newMonths.unshift(months[0].clone().subtract(1, 'month'));
      } else {
        newMonths = getMonths(initialMonth, numberOfMonths, withoutTransitionMonths);
      }
    }
    if (_moment["default"].locale() !== prevState.locale) {
      newMonths = newMonths.map(function (m) {
        return m.locale(_moment["default"].locale());
      });
    }
    return {
      months: newMonths,
      initialMonth: initialMonth,
      numberOfMonths: numberOfMonths,
      locale: _moment["default"].locale()
    };
  };
  var _proto = CalendarMonthGrid.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.removeEventListener = (0, _consolidatedEvents.addEventListener)(this.container, 'transitionend', this.onTransitionEnd);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
      isAnimating = _this$props.isAnimating,
      transitionDuration = _this$props.transitionDuration,
      onMonthTransitionEnd = _this$props.onMonthTransitionEnd;
    if ((!this.isTransitionEndSupported || !transitionDuration) && isAnimating) {
      onMonthTransitionEnd();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.removeEventListener) this.removeEventListener();
  };
  _proto.onTransitionEnd = function onTransitionEnd() {
    var onMonthTransitionEnd = this.props.onMonthTransitionEnd;
    onMonthTransitionEnd();
  };
  _proto.onMonthSelect = function onMonthSelect(currentMonth, newMonthVal) {
    var newMonth = currentMonth.clone();
    var _this$props2 = this.props,
      onMonthChange = _this$props2.onMonthChange,
      orientation = _this$props2.orientation;
    var months = this.state.months;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var initialMonthSubtraction = months.indexOf(currentMonth);
    if (!withoutTransitionMonths) {
      initialMonthSubtraction -= 1;
    }
    newMonth.set('month', newMonthVal).subtract(initialMonthSubtraction, 'months');
    onMonthChange(newMonth);
  };
  _proto.onYearSelect = function onYearSelect(currentMonth, newYearVal) {
    var newMonth = currentMonth.clone();
    var _this$props3 = this.props,
      onYearChange = _this$props3.onYearChange,
      orientation = _this$props3.orientation;
    var months = this.state.months;
    var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
    var initialMonthSubtraction = months.indexOf(currentMonth);
    if (!withoutTransitionMonths) {
      initialMonthSubtraction -= 1;
    }
    newMonth.set('year', newYearVal).subtract(initialMonthSubtraction, 'months');
    onYearChange(newMonth);
  };
  _proto.setContainerRef = function setContainerRef(ref) {
    this.container = ref;
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props4 = this.props,
      enableOutsideDays = _this$props4.enableOutsideDays,
      firstVisibleMonthIndex = _this$props4.firstVisibleMonthIndex,
      horizontalMonthPadding = _this$props4.horizontalMonthPadding,
      isAnimating = _this$props4.isAnimating,
      modifiers = _this$props4.modifiers,
      numberOfMonths = _this$props4.numberOfMonths,
      monthFormat = _this$props4.monthFormat,
      orientation = _this$props4.orientation,
      translationValue = _this$props4.translationValue,
      daySize = _this$props4.daySize,
      onDayMouseEnter = _this$props4.onDayMouseEnter,
      onDayMouseLeave = _this$props4.onDayMouseLeave,
      onDayClick = _this$props4.onDayClick,
      renderMonthText = _this$props4.renderMonthText,
      renderCalendarDay = _this$props4.renderCalendarDay,
      renderDayContents = _this$props4.renderDayContents,
      renderMonthElement = _this$props4.renderMonthElement,
      onMonthTransitionEnd = _this$props4.onMonthTransitionEnd,
      firstDayOfWeek = _this$props4.firstDayOfWeek,
      focusedDate = _this$props4.focusedDate,
      isFocused = _this$props4.isFocused,
      isRTL = _this$props4.isRTL,
      css = _this$props4.css,
      styles = _this$props4.styles,
      phrases = _this$props4.phrases,
      dayAriaLabelFormat = _this$props4.dayAriaLabelFormat,
      transitionDuration = _this$props4.transitionDuration,
      verticalBorderSpacing = _this$props4.verticalBorderSpacing,
      setMonthTitleHeight = _this$props4.setMonthTitleHeight;
    var months = this.state.months;
    var isVertical = orientation === _constants.VERTICAL_ORIENTATION;
    var isVerticalScrollable = orientation === _constants.VERTICAL_SCROLLABLE;
    var isHorizontal = orientation === _constants.HORIZONTAL_ORIENTATION;
    var calendarMonthWidth = (0, _getCalendarMonthWidth["default"])(daySize, horizontalMonthPadding);
    var width = isVertical || isVerticalScrollable ? calendarMonthWidth : (numberOfMonths + 2) * calendarMonthWidth;
    var transformType = isVertical || isVerticalScrollable ? 'translateY' : 'translateX';
    var transformValue = "".concat(transformType, "(").concat(translationValue, "px)");
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, css(styles.CalendarMonthGrid, isHorizontal && styles.CalendarMonthGrid__horizontal, isVertical && styles.CalendarMonthGrid__vertical, isVerticalScrollable && styles.CalendarMonthGrid__vertical_scrollable, isAnimating && styles.CalendarMonthGrid__animating, isAnimating && transitionDuration && {
      transition: "transform ".concat(transitionDuration, "ms ease-in-out 0.1s")
    }, _objectSpread(_objectSpread({}, (0, _getTransformStyles["default"])(transformValue)), {}, {
      width: width
    })), {
      ref: this.setContainerRef,
      onTransitionEnd: onMonthTransitionEnd
    }), months.map(function (month, i) {
      var isVisible = i >= firstVisibleMonthIndex && i < firstVisibleMonthIndex + numberOfMonths;
      var hideForAnimation = i === 0 && !isVisible;
      var showForAnimation = i === 0 && isAnimating && isVisible;
      var monthString = (0, _toISOMonthString["default"])(month);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        key: monthString
      }, css(isHorizontal && styles.CalendarMonthGrid_month__horizontal, hideForAnimation && styles.CalendarMonthGrid_month__hideForAnimation, showForAnimation && !isVertical && !isRTL && {
        position: 'absolute',
        left: -calendarMonthWidth
      }, showForAnimation && !isVertical && isRTL && {
        position: 'absolute',
        right: 0
      }, showForAnimation && isVertical && {
        position: 'absolute',
        top: -translationValue
      }, !isVisible && !isAnimating && styles.CalendarMonthGrid_month__hidden)), /*#__PURE__*/_react["default"].createElement(_CalendarMonth["default"], {
        month: month,
        isVisible: isVisible,
        enableOutsideDays: enableOutsideDays,
        modifiers: modifiers[monthString],
        monthFormat: monthFormat,
        orientation: orientation,
        onDayMouseEnter: onDayMouseEnter,
        onDayMouseLeave: onDayMouseLeave,
        onDayClick: onDayClick,
        onMonthSelect: _this2.onMonthSelect,
        onYearSelect: _this2.onYearSelect,
        renderMonthText: renderMonthText,
        renderCalendarDay: renderCalendarDay,
        renderDayContents: renderDayContents,
        renderMonthElement: renderMonthElement,
        firstDayOfWeek: firstDayOfWeek,
        daySize: daySize,
        focusedDate: isVisible ? focusedDate : null,
        isFocused: isFocused,
        phrases: phrases,
        setMonthTitleHeight: setMonthTitleHeight,
        dayAriaLabelFormat: dayAriaLabelFormat,
        verticalBorderSpacing: verticalBorderSpacing,
        horizontalMonthPadding: horizontalMonthPadding
      }));
    }));
  };
  return CalendarMonthGrid;
}(_react.Component);
CalendarMonthGrid.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CalendarMonthGrid.defaultProps = defaultProps;
var _default = exports["default"] = (0, _reactWithStyles.withStyles)(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
    color = _ref$reactDates.color,
    spacing = _ref$reactDates.spacing,
    zIndex = _ref$reactDates.zIndex;
  return {
    CalendarMonthGrid: {
      background: color.background,
      textAlign: (0, _noflip["default"])('left'),
      zIndex: zIndex
    },
    CalendarMonthGrid__animating: {
      zIndex: zIndex + 1
    },
    CalendarMonthGrid__horizontal: {
      position: 'absolute',
      left: (0, _noflip["default"])(spacing.dayPickerHorizontalPadding)
    },
    CalendarMonthGrid__vertical: {
      margin: '0 auto'
    },
    CalendarMonthGrid__vertical_scrollable: {
      margin: '0 auto'
    },
    CalendarMonthGrid_month__horizontal: {
      display: 'inline-block',
      verticalAlign: 'top',
      minHeight: '100%'
    },
    CalendarMonthGrid_month__hideForAnimation: {
      position: 'absolute',
      zIndex: zIndex - 1,
      opacity: 0,
      pointerEvents: 'none'
    },
    CalendarMonthGrid_month__hidden: {
      visibility: 'hidden'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CalendarMonthGrid);