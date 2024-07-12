import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, mutuallyExclusiveProps, nonNegativeInteger } from 'airbnb-prop-types';
import { withStyles, withStylesPropTypes } from 'react-with-styles';
import moment from 'moment';
import { addEventListener } from 'consolidated-events';
import { CalendarDayPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import noflip from '../utils/noflip';
import CalendarMonth from './CalendarMonth';
import isTransitionEndSupported from '../utils/isTransitionEndSupported';
import getTransformStyles from '../utils/getTransformStyles';
import getCalendarMonthWidth from '../utils/getCalendarMonthWidth';
import toISOMonthString from '../utils/toISOMonthString';
import isPrevMonth from '../utils/isPrevMonth';
import isNextMonth from '../utils/isNextMonth';
import ModifiersShape from '../shapes/ModifiersShape';
import ScrollableOrientationShape from '../shapes/ScrollableOrientationShape';
import DayOfWeekShape from '../shapes/DayOfWeekShape';
import { HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION, VERTICAL_SCROLLABLE, DAY_SIZE } from '../constants';
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps(_objectSpread(_objectSpread({}, withStylesPropTypes), {}, {
  enableOutsideDays: PropTypes.bool,
  firstVisibleMonthIndex: PropTypes.number,
  horizontalMonthPadding: nonNegativeInteger,
  initialMonth: momentPropTypes.momentObj,
  isAnimating: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  modifiers: PropTypes.objectOf(PropTypes.objectOf(ModifiersShape)),
  orientation: ScrollableOrientationShape,
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  onMonthTransitionEnd: PropTypes.func,
  onMonthChange: PropTypes.func,
  onYearChange: PropTypes.func,
  renderMonthText: mutuallyExclusiveProps(PropTypes.func, 'renderMonthText', 'renderMonthElement'),
  renderCalendarDay: PropTypes.func,
  renderDayContents: PropTypes.func,
  translationValue: PropTypes.number,
  renderMonthElement: mutuallyExclusiveProps(PropTypes.func, 'renderMonthText', 'renderMonthElement'),
  daySize: nonNegativeInteger,
  focusedDate: momentPropTypes.momentObj,
  // indicates focusable day
  isFocused: PropTypes.bool,
  // indicates whether or not to move focus to focusable day
  firstDayOfWeek: DayOfWeekShape,
  setMonthTitleHeight: PropTypes.func,
  isRTL: PropTypes.bool,
  transitionDuration: nonNegativeInteger,
  verticalBorderSpacing: nonNegativeInteger,
  // i18n
  monthFormat: PropTypes.string,
  phrases: PropTypes.shape(getPhrasePropTypes(CalendarDayPhrases)),
  dayAriaLabelFormat: PropTypes.string
})) : {};
var defaultProps = {
  enableOutsideDays: false,
  firstVisibleMonthIndex: 0,
  horizontalMonthPadding: 13,
  initialMonth: moment(),
  isAnimating: false,
  numberOfMonths: 1,
  modifiers: {},
  orientation: HORIZONTAL_ORIENTATION,
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
  daySize: DAY_SIZE,
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
  phrases: CalendarDayPhrases,
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
    var withoutTransitionMonths = props.orientation === VERTICAL_SCROLLABLE;
    _this.state = {
      months: getMonths(props.initialMonth, props.numberOfMonths, withoutTransitionMonths)
    };
    _this.isTransitionEndSupported = isTransitionEndSupported();
    _this.onTransitionEnd = _this.onTransitionEnd.bind(_this);
    _this.setContainerRef = _this.setContainerRef.bind(_this);
    _this.locale = moment.locale();
    _this.onMonthSelect = _this.onMonthSelect.bind(_this);
    _this.onYearSelect = _this.onYearSelect.bind(_this);
    return _this;
  }
  _inheritsLoose(CalendarMonthGrid, _Component);
  CalendarMonthGrid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initialMonth = nextProps.initialMonth,
      numberOfMonths = nextProps.numberOfMonths,
      orientation = nextProps.orientation;
    var months = prevState.months;
    var withoutTransitionMonths = orientation === VERTICAL_SCROLLABLE;
    var newMonths = months;
    if (!initialMonth.isSame(prevState.initialMonth, 'month') || numberOfMonths !== prevState.numberOfMonths) {
      if (isNextMonth(prevState.initialMonth, initialMonth)) {
        newMonths = months.slice(1);
        newMonths.push(months[months.length - 1].clone().add(1, 'month'));
      } else if (isPrevMonth(prevState.initialMonth, initialMonth)) {
        newMonths = months.slice(0, months.length - 1);
        newMonths.unshift(months[0].clone().subtract(1, 'month'));
      } else {
        newMonths = getMonths(initialMonth, numberOfMonths, withoutTransitionMonths);
      }
    }
    if (moment.locale() !== prevState.locale) {
      newMonths = newMonths.map(function (m) {
        return m.locale(moment.locale());
      });
    }
    return {
      months: newMonths,
      initialMonth: initialMonth,
      numberOfMonths: numberOfMonths,
      locale: moment.locale()
    };
  };
  var _proto = CalendarMonthGrid.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.removeEventListener = addEventListener(this.container, 'transitionend', this.onTransitionEnd);
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
    var withoutTransitionMonths = orientation === VERTICAL_SCROLLABLE;
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
    var withoutTransitionMonths = orientation === VERTICAL_SCROLLABLE;
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
    var isVertical = orientation === VERTICAL_ORIENTATION;
    var isVerticalScrollable = orientation === VERTICAL_SCROLLABLE;
    var isHorizontal = orientation === HORIZONTAL_ORIENTATION;
    var calendarMonthWidth = getCalendarMonthWidth(daySize, horizontalMonthPadding);
    var width = isVertical || isVerticalScrollable ? calendarMonthWidth : (numberOfMonths + 2) * calendarMonthWidth;
    var transformType = isVertical || isVerticalScrollable ? 'translateY' : 'translateX';
    var transformValue = "".concat(transformType, "(").concat(translationValue, "px)");
    return /*#__PURE__*/React.createElement("div", _extends({}, css(styles.CalendarMonthGrid, isHorizontal && styles.CalendarMonthGrid__horizontal, isVertical && styles.CalendarMonthGrid__vertical, isVerticalScrollable && styles.CalendarMonthGrid__vertical_scrollable, isAnimating && styles.CalendarMonthGrid__animating, isAnimating && transitionDuration && {
      transition: "transform ".concat(transitionDuration, "ms ease-in-out 0.1s")
    }, _objectSpread(_objectSpread({}, getTransformStyles(transformValue)), {}, {
      width: width
    })), {
      ref: this.setContainerRef,
      onTransitionEnd: onMonthTransitionEnd
    }), months.map(function (month, i) {
      var isVisible = i >= firstVisibleMonthIndex && i < firstVisibleMonthIndex + numberOfMonths;
      var hideForAnimation = i === 0 && !isVisible;
      var showForAnimation = i === 0 && isAnimating && isVisible;
      var monthString = toISOMonthString(month);
      return /*#__PURE__*/React.createElement("div", _extends({
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
      }, !isVisible && !isAnimating && styles.CalendarMonthGrid_month__hidden)), /*#__PURE__*/React.createElement(CalendarMonth, {
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
}(Component);
CalendarMonthGrid.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CalendarMonthGrid.defaultProps = defaultProps;
export default withStyles(function (_ref) {
  var _ref$reactDates = _ref.reactDates,
    color = _ref$reactDates.color,
    spacing = _ref$reactDates.spacing,
    zIndex = _ref$reactDates.zIndex;
  return {
    CalendarMonthGrid: {
      background: color.background,
      textAlign: noflip('left'),
      zIndex: zIndex
    },
    CalendarMonthGrid__animating: {
      zIndex: zIndex + 1
    },
    CalendarMonthGrid__horizontal: {
      position: 'absolute',
      left: noflip(spacing.dayPickerHorizontalPadding)
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
  pureComponent: typeof React.PureComponent !== 'undefined'
})(CalendarMonthGrid);