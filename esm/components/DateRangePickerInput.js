import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';
import { withStyles, withStylesPropTypes } from 'react-with-styles';
import { DateRangePickerInputPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import noflip from '../utils/noflip';
import openDirectionShape from '../shapes/OpenDirectionShape';
import DateInput from './DateInput';
import IconPositionShape from '../shapes/IconPositionShape';
import DisabledShape from '../shapes/DisabledShape';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import CloseButton from './CloseButton';
import CalendarIcon from './CalendarIcon';
import { START_DATE, END_DATE, ICON_BEFORE_POSITION, ICON_AFTER_POSITION, OPEN_DOWN } from '../constants';
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps(_objectSpread(_objectSpread({}, withStylesPropTypes), {}, {
  children: PropTypes.node,
  startDateId: PropTypes.string,
  startDatePlaceholderText: PropTypes.string,
  startDateAriaLabel: PropTypes.string,
  startDateTitleText: PropTypes.string,
  screenReaderMessage: PropTypes.string,
  endDateId: PropTypes.string,
  endDatePlaceholderText: PropTypes.string,
  endDateAriaLabel: PropTypes.string,
  endDateTitleText: PropTypes.string,
  onStartDateFocus: PropTypes.func,
  onEndDateFocus: PropTypes.func,
  onStartDateChange: PropTypes.func,
  onEndDateChange: PropTypes.func,
  onStartDateShiftTab: PropTypes.func,
  onEndDateTab: PropTypes.func,
  onClearDates: PropTypes.func,
  onKeyDownArrowDown: PropTypes.func,
  onKeyDownQuestionMark: PropTypes.func,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  isStartDateFocused: PropTypes.bool,
  isEndDateFocused: PropTypes.bool,
  showClearDates: PropTypes.bool,
  disabled: DisabledShape,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  openDirection: openDirectionShape,
  showCaret: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  inputIconPosition: IconPositionShape,
  customInputIcon: PropTypes.node,
  customArrowIcon: PropTypes.node,
  customCloseIcon: PropTypes.node,
  noBorder: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  regular: PropTypes.bool,
  verticalSpacing: nonNegativeInteger,
  autoComplete: PropTypes.string,
  // accessibility
  isFocused: PropTypes.bool,
  // describes actual DOM focus

  // i18n
  phrases: PropTypes.shape(getPhrasePropTypes(DateRangePickerInputPhrases)),
  isRTL: PropTypes.bool
})) : {};
function DateRangePickerInput(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? null : _ref$children,
    _ref$startDate = _ref.startDate,
    startDate = _ref$startDate === void 0 ? '' : _ref$startDate,
    _ref$startDateId = _ref.startDateId,
    startDateId = _ref$startDateId === void 0 ? START_DATE : _ref$startDateId,
    _ref$startDatePlaceho = _ref.startDatePlaceholderText,
    startDatePlaceholderText = _ref$startDatePlaceho === void 0 ? 'Start Date' : _ref$startDatePlaceho,
    _ref$screenReaderMess = _ref.screenReaderMessage,
    screenReaderMessage = _ref$screenReaderMess === void 0 ? '' : _ref$screenReaderMess,
    _ref$isStartDateFocus = _ref.isStartDateFocused,
    isStartDateFocused = _ref$isStartDateFocus === void 0 ? false : _ref$isStartDateFocus,
    _ref$onStartDateChang = _ref.onStartDateChange,
    onStartDateChange = _ref$onStartDateChang === void 0 ? function () {} : _ref$onStartDateChang,
    _ref$onStartDateFocus = _ref.onStartDateFocus,
    onStartDateFocus = _ref$onStartDateFocus === void 0 ? function () {} : _ref$onStartDateFocus,
    _ref$onStartDateShift = _ref.onStartDateShiftTab,
    onStartDateShiftTab = _ref$onStartDateShift === void 0 ? function () {} : _ref$onStartDateShift,
    startDateAriaLabel = _ref.startDateAriaLabel,
    startDateTitleText = _ref.startDateTitleText,
    _ref$endDate = _ref.endDate,
    endDate = _ref$endDate === void 0 ? '' : _ref$endDate,
    _ref$endDateId = _ref.endDateId,
    endDateId = _ref$endDateId === void 0 ? END_DATE : _ref$endDateId,
    _ref$endDatePlacehold = _ref.endDatePlaceholderText,
    endDatePlaceholderText = _ref$endDatePlacehold === void 0 ? 'End Date' : _ref$endDatePlacehold,
    _ref$isEndDateFocused = _ref.isEndDateFocused,
    isEndDateFocused = _ref$isEndDateFocused === void 0 ? false : _ref$isEndDateFocused,
    _ref$onEndDateChange = _ref.onEndDateChange,
    onEndDateChange = _ref$onEndDateChange === void 0 ? function () {} : _ref$onEndDateChange,
    _ref$onEndDateFocus = _ref.onEndDateFocus,
    onEndDateFocus = _ref$onEndDateFocus === void 0 ? function () {} : _ref$onEndDateFocus,
    _ref$onEndDateTab = _ref.onEndDateTab,
    onEndDateTab = _ref$onEndDateTab === void 0 ? function () {} : _ref$onEndDateTab,
    endDateAriaLabel = _ref.endDateAriaLabel,
    endDateTitleText = _ref.endDateTitleText,
    _ref$onKeyDownArrowDo = _ref.onKeyDownArrowDown,
    onKeyDownArrowDown = _ref$onKeyDownArrowDo === void 0 ? function () {} : _ref$onKeyDownArrowDo,
    _ref$onKeyDownQuestio = _ref.onKeyDownQuestionMark,
    onKeyDownQuestionMark = _ref$onKeyDownQuestio === void 0 ? function () {} : _ref$onKeyDownQuestio,
    _ref$onClearDates = _ref.onClearDates,
    onClearDates = _ref$onClearDates === void 0 ? function () {} : _ref$onClearDates,
    _ref$showClearDates = _ref.showClearDates,
    showClearDates = _ref$showClearDates === void 0 ? false : _ref$showClearDates,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    _ref$showCaret = _ref.showCaret,
    showCaret = _ref$showCaret === void 0 ? false : _ref$showCaret,
    _ref$openDirection = _ref.openDirection,
    openDirection = _ref$openDirection === void 0 ? OPEN_DOWN : _ref$openDirection,
    _ref$showDefaultInput = _ref.showDefaultInputIcon,
    showDefaultInputIcon = _ref$showDefaultInput === void 0 ? false : _ref$showDefaultInput,
    _ref$inputIconPositio = _ref.inputIconPosition,
    inputIconPosition = _ref$inputIconPositio === void 0 ? ICON_BEFORE_POSITION : _ref$inputIconPositio,
    _ref$customInputIcon = _ref.customInputIcon,
    customInputIcon = _ref$customInputIcon === void 0 ? null : _ref$customInputIcon,
    _ref$customArrowIcon = _ref.customArrowIcon,
    customArrowIcon = _ref$customArrowIcon === void 0 ? null : _ref$customArrowIcon,
    _ref$customCloseIcon = _ref.customCloseIcon,
    customCloseIcon = _ref$customCloseIcon === void 0 ? null : _ref$customCloseIcon,
    _ref$isFocused = _ref.isFocused,
    isFocused = _ref$isFocused === void 0 ? false : _ref$isFocused,
    _ref$phrases = _ref.phrases,
    phrases = _ref$phrases === void 0 ? DateRangePickerInputPhrases : _ref$phrases,
    _ref$isRTL = _ref.isRTL,
    isRTL = _ref$isRTL === void 0 ? false : _ref$isRTL,
    _ref$noBorder = _ref.noBorder,
    noBorder = _ref$noBorder === void 0 ? false : _ref$noBorder,
    _ref$block = _ref.block,
    block = _ref$block === void 0 ? false : _ref$block,
    verticalSpacing = _ref.verticalSpacing,
    _ref$small = _ref.small,
    small = _ref$small === void 0 ? false : _ref$small,
    _ref$regular = _ref.regular,
    regular = _ref$regular === void 0 ? false : _ref$regular,
    css = _ref.css,
    styles = _ref.styles;
  var calendarIcon = customInputIcon || /*#__PURE__*/React.createElement(CalendarIcon, css(styles.DateRangePickerInput_calendarIcon_svg));
  var arrowIcon = /*#__PURE__*/React.createElement(RightArrow, css(styles.DateRangePickerInput_arrow_svg));
  if (isRTL) arrowIcon = /*#__PURE__*/React.createElement(LeftArrow, css(styles.DateRangePickerInput_arrow_svg));
  if (small) arrowIcon = '-';
  if (customArrowIcon) arrowIcon = customArrowIcon;
  var closeIcon = customCloseIcon || /*#__PURE__*/React.createElement(CloseButton, css(styles.DateRangePickerInput_clearDates_svg, small && styles.DateRangePickerInput_clearDates_svg__small));
  var screenReaderStartDateText = screenReaderMessage || phrases.keyboardForwardNavigationInstructions;
  var screenReaderEndDateText = screenReaderMessage || phrases.keyboardBackwardNavigationInstructions;
  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && /*#__PURE__*/React.createElement("button", _extends({}, css(styles.DateRangePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onKeyDownArrowDown
  }), calendarIcon);
  var startDateDisabled = disabled === START_DATE || disabled === true;
  var endDateDisabled = disabled === END_DATE || disabled === true;
  return /*#__PURE__*/React.createElement("div", css(styles.DateRangePickerInput, disabled && styles.DateRangePickerInput__disabled, isRTL && styles.DateRangePickerInput__rtl, !noBorder && styles.DateRangePickerInput__withBorder, block && styles.DateRangePickerInput__block, showClearDates && styles.DateRangePickerInput__showClearDates), inputIconPosition === ICON_BEFORE_POSITION && inputIcon, /*#__PURE__*/React.createElement(DateInput, {
    id: startDateId,
    placeholder: startDatePlaceholderText,
    ariaLabel: startDateAriaLabel,
    autoComplete: autoComplete,
    titleText: startDateTitleText,
    displayValue: startDate,
    screenReaderMessage: screenReaderStartDateText,
    focused: isStartDateFocused,
    isFocused: isFocused,
    disabled: startDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onStartDateChange,
    onFocus: onStartDateFocus,
    onKeyDownShiftTab: onStartDateShiftTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), !isEndDateFocused && children, /*#__PURE__*/React.createElement("div", _extends({}, css(styles.DateRangePickerInput_arrow), {
    "aria-hidden": "true",
    role: "presentation"
  }), arrowIcon), /*#__PURE__*/React.createElement(DateInput, {
    id: endDateId,
    placeholder: endDatePlaceholderText,
    ariaLabel: endDateAriaLabel,
    autoComplete: autoComplete,
    titleText: endDateTitleText,
    displayValue: endDate,
    screenReaderMessage: screenReaderEndDateText,
    focused: isEndDateFocused,
    isFocused: isFocused,
    disabled: endDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onEndDateChange,
    onFocus: onEndDateFocus,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    onKeyDownTab: onEndDateTab,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), isEndDateFocused && children, showClearDates && /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": phrases.clearDates
  }, css(styles.DateRangePickerInput_clearDates, small && styles.DateRangePickerInput_clearDates__small, !customCloseIcon && styles.DateRangePickerInput_clearDates_default, !(startDate || endDate) && styles.DateRangePickerInput_clearDates__hide), {
    onClick: onClearDates,
    disabled: disabled
  }), closeIcon), inputIconPosition === ICON_AFTER_POSITION && inputIcon);
}
DateRangePickerInput.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
export default withStyles(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
    border = _ref2$reactDates.border,
    color = _ref2$reactDates.color,
    sizing = _ref2$reactDates.sizing;
  return {
    DateRangePickerInput: {
      backgroundColor: color.background,
      display: 'inline-block'
    },
    DateRangePickerInput__disabled: {
      background: color.disabled
    },
    DateRangePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    DateRangePickerInput__rtl: {
      direction: noflip('rtl')
    },
    DateRangePickerInput__block: {
      display: 'block'
    },
    DateRangePickerInput__showClearDates: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop
    },
    DateRangePickerInput_arrow: {
      display: 'inline-block',
      verticalAlign: 'middle',
      color: color.text
    },
    DateRangePickerInput_arrow_svg: {
      verticalAlign: 'middle',
      fill: color.text,
      height: sizing.arrowWidth,
      width: sizing.arrowWidth
    },
    DateRangePickerInput_clearDates: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      padding: 10,
      margin: '0 10px 0 5px',
      // TODO: should be noflip wrapped and handled by an isRTL prop
      position: 'absolute',
      right: 0,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      top: '50%',
      transform: 'translateY(-50%)'
    },
    DateRangePickerInput_clearDates__small: {
      padding: 6
    },
    DateRangePickerInput_clearDates_default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    DateRangePickerInput_clearDates__hide: {
      visibility: 'hidden'
    },
    DateRangePickerInput_clearDates_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    DateRangePickerInput_clearDates_svg__small: {
      height: 9
    },
    DateRangePickerInput_calendarIcon: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: 10,
      margin: '0 5px 0 10px' // TODO: should be noflip wrapped and handled by an isRTL prop
    },
    DateRangePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof React.PureComponent !== 'undefined'
})(DateRangePickerInput);