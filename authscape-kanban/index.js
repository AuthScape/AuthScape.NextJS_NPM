"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["active", "className", "cursor", "icon", "style"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
// import classNames from 'classnames';

var Action = exports.Action = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var active = _ref.active,
    className = _ref.className,
    cursor = _ref.cursor,
    icon = _ref.icon,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    ref: ref
  }, props, {
    className: "Action",
    tabIndex: 0,
    style: _objectSpread(_objectSpread({}, style), {}, {
      cursor: cursor,
      '--fill': active === null || active === void 0 ? void 0 : active.fill,
      '--background': active === null || active === void 0 ? void 0 : active.background
    })
  }), icon());
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["children", "columns", "handleProps", "horizontal", "hover", "onClick", "containerStyles", "onRemove", "label", "placeholder", "style", "scrollable", "shadow", "disableHandle", "disableDelete", "unstyled"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
/// use in testing
// import { Handle } from './Handle';
// import { Remove } from './Remove';

var Container = exports.Container = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 1 : _ref$columns,
    handleProps = _ref.handleProps,
    horizontal = _ref.horizontal,
    hover = _ref.hover,
    onClick = _ref.onClick,
    containerStyles = _ref.containerStyles,
    onRemove = _ref.onRemove,
    label = _ref.label,
    placeholder = _ref.placeholder,
    style = _ref.style,
    scrollable = _ref.scrollable,
    shadow = _ref.shadow,
    _ref$disableHandle = _ref.disableHandle,
    disableHandle = _ref$disableHandle === void 0 ? false : _ref$disableHandle,
    _ref$disableDelete = _ref.disableDelete,
    disableDelete = _ref$disableDelete === void 0 ? false : _ref$disableDelete,
    unstyled = _ref.unstyled,
    props = _objectWithoutProperties(_ref, _excluded);
  var Component = onClick ? 'button' : 'div';
  return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
    ref: ref,
    style: _objectSpread(_objectSpread({}, style), {}, {
      '--columns': columns
    }),
    className: (0, _classnames["default"])(containerStyles.Container, unstyled && containerStyles.unstyled, horizontal && containerStyles.horizontal, hover && containerStyles.hover, placeholder && containerStyles.placeholder, scrollable && containerStyles.scrollable, shadow && containerStyles.shadow),
    onClick: onClick,
    tabIndex: onClick ? 0 : undefined
  }), label ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "Header"
  }, label, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Actions"
  }, !disableDelete && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, onRemove ? /*#__PURE__*/_react["default"].createElement(Remove, {
    onClick: onRemove
  }) : undefined), !disableHandle && /*#__PURE__*/_react["default"].createElement(Handle, handleProps))) : null, placeholder ? children : /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      paddingLeft: "10px",
      paddingRight: "10px",
      marginTop: "5px",
      paddingBottom: "10px"
    }
  }, children));
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRange = createRange;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function createRange(length, initializer) {
  return _toConsumableArray(new Array(length)).map(function (_, index) {
    return initializer(index);
  });
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Handle = void 0;
var _react = _interopRequireWildcard(require("react"));
var _DragIndicatorRounded = _interopRequireDefault(require("@mui/icons-material/DragIndicatorRounded"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/// use in testing
// import {Action} from './Action';

var dragIcon = function dragIcon() {
  return /*#__PURE__*/_react["default"].createElement(_DragIndicatorRounded["default"], null);
};
var Handle = exports.Handle = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Action, _extends({
    icon: dragIcon,
    ref: ref,
    cursor: "grab",
    "data-cypress": "draggable-handle"
  }, props));
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _material = require("@mui/material");
var _excluded = ["color", "dragOverlay", "dragging", "disabled", "fadeIn", "name", "handle", "handleProps", "height", "itemStyles", "cardDetail", "CardTemplate", "index", "listeners", "onRemove", "onCardClicked", "renderItem", "sorting", "style", "transition", "transform", "value", "handleMoreClick", "handleMoreClose", "wrapperStyle"]; /// use in testing
// import { Handle } from './Handle';
// import { Remove } from './Remove';
// import styles from './dist/Item.module.css';
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var Item = exports.Item = /*#__PURE__*/_react["default"].memo(/*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var color = _ref.color,
    dragOverlay = _ref.dragOverlay,
    dragging = _ref.dragging,
    disabled = _ref.disabled,
    fadeIn = _ref.fadeIn,
    name = _ref.name,
    handle = _ref.handle,
    handleProps = _ref.handleProps,
    height = _ref.height,
    itemStyles = _ref.itemStyles,
    cardDetail = _ref.cardDetail,
    CardTemplate = _ref.CardTemplate,
    index = _ref.index,
    listeners = _ref.listeners,
    onRemove = _ref.onRemove,
    onCardClicked = _ref.onCardClicked,
    renderItem = _ref.renderItem,
    sorting = _ref.sorting,
    style = _ref.style,
    transition = _ref.transition,
    transform = _ref.transform,
    value = _ref.value,
    handleMoreClick = _ref.handleMoreClick,
    handleMoreClose = _ref.handleMoreClose,
    wrapperStyle = _ref.wrapperStyle,
    props = _objectWithoutProperties(_ref, _excluded);
  (0, _react.useEffect)(function () {
    if (!dragOverlay) {
      return;
    }
    document.body.style.cursor = 'grabbing';
    return function () {
      document.body.style.cursor = '';
    };
  }, [dragOverlay]);
  cardDetail.moreClicked = handleMoreClick;
  return renderItem ? renderItem({
    dragOverlay: Boolean(dragOverlay),
    dragging: Boolean(dragging),
    sorting: Boolean(sorting),
    index: index,
    fadeIn: Boolean(fadeIn),
    listeners: listeners,
    ref: ref,
    style: style,
    transform: transform,
    transition: transition,
    value: value
  }) : /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _classnames["default"])(itemStyles.Wrapper, fadeIn && itemStyles.fadeIn, sorting && itemStyles.sorting, dragOverlay && itemStyles.dragOverlay),
    style: _objectSpread(_objectSpread({}, wrapperStyle), {}, {
      transition: [transition, wrapperStyle === null || wrapperStyle === void 0 ? void 0 : wrapperStyle.transition].filter(Boolean).join(', '),
      '--translate-x': transform ? "".concat(Math.round(transform.x), "px") : undefined,
      '--translate-y': transform ? "".concat(Math.round(transform.y), "px") : undefined,
      '--scale-x': transform !== null && transform !== void 0 && transform.scaleX ? "".concat(transform.scaleX) : undefined,
      '--scale-y': transform !== null && transform !== void 0 && transform.scaleY ? "".concat(transform.scaleY) : undefined,
      '--index': index,
      '--color': color,
      paddingTop: "10px"
    }),
    ref: ref
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, _extends({
    className: (0, _classnames["default"])(itemStyles.Item, dragging && itemStyles.dragging, handle && itemStyles.withHandle, dragOverlay && itemStyles.dragOverlay, disabled && itemStyles.disabled, color && itemStyles.color),
    onClick: function onClick(e) {
      if (onCardClicked != null) {
        e.stopPropagation();
        onCardClicked(value);
      }
    },
    style: style,
    "data-cypress": "draggable-item"
  }, !handle ? listeners : undefined, props, {
    tabIndex: !handle ? 0 : undefined
  }), CardTemplate != null && /*#__PURE__*/_react["default"].createElement(CardTemplate, {
    props: cardDetail
  }), CardTemplate == null && /*#__PURE__*/_react["default"].createElement(_material.Box, null, name), /*#__PURE__*/_react["default"].createElement("span", {
    className: "Actions"
  }, onRemove ? /*#__PURE__*/_react["default"].createElement(Remove, {
    className: "Remove",
    onClick: onRemove
  }) : null, handle ? /*#__PURE__*/_react["default"].createElement(Handle, _extends({}, handleProps, listeners)) : null)));
}));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRASH_ID = void 0;
exports["default"] = Kanban;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _core = require("@dnd-kit/core");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _authscape = require("authscape");
var _material = require("@mui/material");
var _excluded = ["children", "columns", "disabled", "id", "containerStyles", "items", "disableHandle", "disableDelete", "style"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /// use in testing
// import {coordinateGetter as multipleContainersCoordinateGetter} from './multipleContainersKeyboardCoordinates';
// import { Item } from './item';
// import { Container } from './container';
var animateLayoutChanges = function animateLayoutChanges(args) {
  return (0, _sortable.defaultAnimateLayoutChanges)(_objectSpread(_objectSpread({}, args), {}, {
    wasDragging: true
  }));
};
function DroppableContainer(_ref) {
  var _active$data$current;
  var children = _ref.children,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 1 : _ref$columns,
    disabled = _ref.disabled,
    id = _ref.id,
    containerStyles = _ref.containerStyles,
    items = _ref.items,
    _ref$disableHandle = _ref.disableHandle,
    disableHandle = _ref$disableHandle === void 0 ? false : _ref$disableHandle,
    _ref$disableDelete = _ref.disableDelete,
    disableDelete = _ref$disableDelete === void 0 ? false : _ref$disableDelete,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useSortable = (0, _sortable.useSortable)({
      id: id,
      data: {
        type: 'container',
        children: items
      },
      animateLayoutChanges: animateLayoutChanges
    }),
    active = _useSortable.active,
    attributes = _useSortable.attributes,
    isDragging = _useSortable.isDragging,
    listeners = _useSortable.listeners,
    over = _useSortable.over,
    setNodeRef = _useSortable.setNodeRef,
    transition = _useSortable.transition,
    transform = _useSortable.transform;
  var isOverContainer = over ? id === over.id && (active === null || active === void 0 ? void 0 : (_active$data$current = active.data.current) === null || _active$data$current === void 0 ? void 0 : _active$data$current.type) !== 'container' || items.includes(over.id) : false;
  return /*#__PURE__*/_react["default"].createElement(Container, _extends({
    ref: disabled ? undefined : setNodeRef,
    disableHandle: disableHandle,
    disableDelete: disableDelete,
    containerStyles: containerStyles,
    style: _objectSpread(_objectSpread({}, style), {}, {
      transition: transition,
      transform: _utilities.CSS.Translate.toString(transform),
      opacity: isDragging ? 0.5 : undefined
    }),
    hover: isOverContainer,
    handleProps: _objectSpread(_objectSpread({}, attributes), listeners),
    columns: columns
  }, props), children);
}
var dropAnimation = {
  sideEffects: (0, _core.defaultDropAnimationSideEffects)({
    styles: {
      active: {
        opacity: '0.5'
      }
    }
  })
};
var TRASH_ID = exports.TRASH_ID = 'void';
var PLACEHOLDER_ID = 'placeholder';
var empty = [];
function Kanban(_ref2) {
  var _ref2$adjustScale = _ref2.adjustScale,
    adjustScale = _ref2$adjustScale === void 0 ? false : _ref2$adjustScale,
    _ref2$itemCount = _ref2.itemCount,
    itemCount = _ref2$itemCount === void 0 ? 3 : _ref2$itemCount,
    cancelDrop = _ref2.cancelDrop,
    _ref2$Menu = _ref2.Menu,
    Menu = _ref2$Menu === void 0 ? null : _ref2$Menu,
    columns = _ref2.columns,
    _ref2$loadedUser = _ref2.loadedUser,
    loadedUser = _ref2$loadedUser === void 0 ? true : _ref2$loadedUser,
    _ref2$handle = _ref2.handle,
    handle = _ref2$handle === void 0 ? false : _ref2$handle,
    _ref2$CardTemplate = _ref2.CardTemplate,
    CardTemplate = _ref2$CardTemplate === void 0 ? null : _ref2$CardTemplate,
    initialItems = _ref2.items,
    _ref2$disableContaine = _ref2.disableContainerHandle,
    disableContainerHandle = _ref2$disableContaine === void 0 ? false : _ref2$disableContaine,
    _ref2$disableContaine2 = _ref2.disableContainerDelete,
    disableContainerDelete = _ref2$disableContaine2 === void 0 ? false : _ref2$disableContaine2,
    _ref2$disableAddColum = _ref2.disableAddColumn,
    disableAddColumn = _ref2$disableAddColum === void 0 ? false : _ref2$disableAddColum,
    containerStyles = _ref2.containerStyles,
    itemStyles = _ref2.itemStyles,
    _ref2$identifier = _ref2.identifier,
    identifier = _ref2$identifier === void 0 ? null : _ref2$identifier,
    containerStyle = _ref2.containerStyle,
    _ref2$coordinateGette = _ref2.coordinateGetter,
    coordinateGetter = _ref2$coordinateGette === void 0 ? multipleContainersCoordinateGetter : _ref2$coordinateGette,
    _ref2$getItemStyles = _ref2.getItemStyles,
    getItemStyles = _ref2$getItemStyles === void 0 ? function () {
      return {};
    } : _ref2$getItemStyles,
    _ref2$wrapperStyle = _ref2.wrapperStyle,
    wrapperStyle = _ref2$wrapperStyle === void 0 ? function () {
      return {};
    } : _ref2$wrapperStyle,
    _ref2$minimal = _ref2.minimal,
    minimal = _ref2$minimal === void 0 ? false : _ref2$minimal,
    modifiers = _ref2.modifiers,
    renderItem = _ref2.renderItem,
    _ref2$strategy = _ref2.strategy,
    strategy = _ref2$strategy === void 0 ? _sortable.verticalListSortingStrategy : _ref2$strategy,
    _ref2$trashable = _ref2.trashable,
    trashable = _ref2$trashable === void 0 ? false : _ref2$trashable,
    _ref2$vertical = _ref2.vertical,
    vertical = _ref2$vertical === void 0 ? false : _ref2$vertical,
    onCardClicked = _ref2.onCardClicked,
    _ref2$onCardChangedSt = _ref2.onCardChangedState,
    onCardChangedState = _ref2$onCardChangedSt === void 0 ? null : _ref2$onCardChangedSt,
    scrollable = _ref2.scrollable;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    initItems = _useState2[0],
    setInitItems = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    cards = _useState4[0],
    setCards = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];
  var _useState7 = (0, _react.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    containers = _useState8[0],
    setContainers = _useState8[1];
  var fetchData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, _containers, _initItems, cardNames, container;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            response = null;
            if (!(identifier == null)) {
              _context.next = 7;
              break;
            }
            _context.next = 4;
            return (0, _authscape.apiService)().get("/Kanban/GetKanban");
          case 4:
            response = _context.sent;
            _context.next = 10;
            break;
          case 7:
            _context.next = 9;
            return (0, _authscape.apiService)().get("/Kanban/GetKanban?identifier=" + identifier);
          case 9:
            response = _context.sent;
          case 10:
            if (response != null && response.status == 200) {
              _containers = [];
              _initItems = response.data;
              cardNames = [];
              container = {};
              _initItems.forEach(function (element) {
                _containers.push(element.id);
                var cards = [];
                element.cards.forEach(function (card) {
                  cards.push(card.id);
                  cardNames.push(card);
                });
                container[element.id] = cards;
              });
              setInitItems(_initItems);
              setCards(cardNames);
              setItems(container);
              setContainers(_containers);
            }
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchData() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (loadedUser) {
      fetchData();
    }
  }, [loadedUser]);
  var getContainerName = function getContainerName(containerId) {
    var name = "";
    initItems.forEach(function (element) {
      if (containerId == element.id) {
        name = element.name;
      }
    });
    return name;
  };
  var getCardName = function getCardName(cardId) {
    var name = "";
    if (cards != null) {
      cards.forEach(function (card) {
        if (cardId == card.id) {
          name = card.name;
        }
      });
    }
    return name;
  };
  var getCardDetails = function getCardDetails(cardId) {
    var cardDetail = {};
    if (cards != null) {
      cards.forEach(function (card) {
        if (cardId == card.id) {
          cardDetail = card;
        }
      });
    }
    return cardDetail;
  };
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    activeId = _useState0[0],
    setActiveId = _useState0[1];
  var lastOverId = (0, _react.useRef)(null);
  var recentlyMovedToNewContainer = (0, _react.useRef)(false);
  var isSortingContainer = activeId ? containers.includes(activeId) : false;

  /**
   * Custom collision detection strategy optimized for multiple containers
   *
   * - First, find any droppable containers intersecting with the pointer.
   * - If there are none, find intersecting containers with the active draggable.
   * - If there are no intersecting containers, return the last matched intersection
   *
   */
  var collisionDetectionStrategy = (0, _react.useCallback)(function (args) {
    if (activeId && activeId in items) {
      return (0, _core.closestCenter)(_objectSpread(_objectSpread({}, args), {}, {
        droppableContainers: args.droppableContainers.filter(function (container) {
          return container.id in items;
        })
      }));
    }

    // Start by finding any intersecting droppable
    var pointerIntersections = (0, _core.pointerWithin)(args);
    var intersections = pointerIntersections.length > 0 ?
    // If there are droppables intersecting with the pointer, return those
    pointerIntersections : (0, _core.rectIntersection)(args);
    var overId = (0, _core.getFirstCollision)(intersections, 'id');
    if (overId != null) {
      if (overId === TRASH_ID) {
        // If the intersecting droppable is the trash, return early
        // Remove this if you're not using trashable functionality in your app
        return intersections;
      }
      if (overId in items) {
        var containerItems = items[overId];

        // If a container is matched and it contains items (columns 'A', 'B', 'C')
        if (containerItems.length > 0) {
          var _closestCenter$;
          // Return the closest droppable within that container
          overId = (_closestCenter$ = (0, _core.closestCenter)(_objectSpread(_objectSpread({}, args), {}, {
            droppableContainers: args.droppableContainers.filter(function (container) {
              return container.id !== overId && containerItems.includes(container.id);
            })
          }))[0]) === null || _closestCenter$ === void 0 ? void 0 : _closestCenter$.id;
        }
      }
      lastOverId.current = overId;
      return [{
        id: overId
      }];
    }

    // When a draggable item moves to a new container, the layout may shift
    // and the `overId` may become `null`. We manually set the cached `lastOverId`
    // to the id of the draggable item that was moved to the new container, otherwise
    // the previous `overId` will be returned which can cause items to incorrectly shift positions
    if (recentlyMovedToNewContainer.current) {
      lastOverId.current = activeId;
    }

    // If no droppable is matched, return the last match
    return lastOverId.current ? [{
      id: lastOverId.current
    }] : [];
  }, [activeId, items]);
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    clonedItems = _useState10[0],
    setClonedItems = _useState10[1];
  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.MouseSensor, {
    activationConstraint: {
      distance: 8
    }
  }), (0, _core.useSensor)(_core.TouchSensor, {
    activationConstraint: {
      distance: 8
    }
  }), (0, _core.useSensor)(_core.KeyboardSensor, {
    coordinateGetter: coordinateGetter,
    activationConstraint: {
      distance: 8
    }
  }));
  var findContainer = function findContainer(id) {
    if (id in items) {
      return id;
    }
    return Object.keys(items).find(function (key) {
      return items[key].includes(id);
    });
  };
  var getIndex = function getIndex(id) {
    var container = findContainer(id);
    if (!container) {
      return -1;
    }
    var index = items[container].indexOf(id);
    return index;
  };
  var onDragCancel = function onDragCancel() {
    if (clonedItems) {
      // Reset items to their original state in case items have been
      // Dragged across containers
      setItems(clonedItems);
    }
    setActiveId(null);
    setClonedItems(null);
  };
  (0, _react.useEffect)(function () {
    requestAnimationFrame(function () {
      recentlyMovedToNewContainer.current = false;
    });
  }, [items]);
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    anchorEl = _useState12[0],
    setAnchorEl = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    SelectedCardId = _useState14[0],
    setSelectedCardId = _useState14[1];
  var open = Boolean(anchorEl);
  var _handleMoreClick = function handleMoreClick(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  var _handleMoreClose = function handleMoreClose() {
    setAnchorEl(null);
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Box, null, loadedUser && containers != null && cards != null && items != null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.DndContext, {
    sensors: sensors,
    collisionDetection: collisionDetectionStrategy,
    measuring: {
      droppable: {
        strategy: _core.MeasuringStrategy.Always
      }
    },
    onDragStart: function onDragStart(_ref4) {
      var active = _ref4.active;
      setActiveId(active.id);
      setClonedItems(items);
    },
    onDragOver: function onDragOver(_ref5) {
      var active = _ref5.active,
        over = _ref5.over;
      var overId = over === null || over === void 0 ? void 0 : over.id;
      if (overId == null || overId === TRASH_ID || active.id in items) {
        return;
      }
      var overContainer = findContainer(overId);
      var activeContainer = findContainer(active.id);
      if (!overContainer || !activeContainer) {
        return;
      }
      if (activeContainer !== overContainer) {
        setItems(function (items) {
          var _objectSpread2;
          var activeItems = items[activeContainer];
          var overItems = items[overContainer];
          var overIndex = overItems.indexOf(overId);
          var activeIndex = activeItems.indexOf(active.id);
          var newIndex;
          if (overId in items) {
            newIndex = overItems.length + 1;
          } else {
            var isBelowOverItem = over && active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;
            var modifier = isBelowOverItem ? 1 : 0;
            newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
          }
          recentlyMovedToNewContainer.current = true;
          return _objectSpread(_objectSpread({}, items), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, activeContainer, items[activeContainer].filter(function (item) {
            return item !== active.id;
          })), _defineProperty(_objectSpread2, overContainer, [].concat(_toConsumableArray(items[overContainer].slice(0, newIndex)), [items[activeContainer][activeIndex]], _toConsumableArray(items[overContainer].slice(newIndex, items[overContainer].length)))), _objectSpread2));
        });
      }
    },
    onDragEnd: function onDragEnd(_ref6) {
      var active = _ref6.active,
        over = _ref6.over;
      if (active.id in items && over !== null && over !== void 0 && over.id) {
        setContainers(function (containers) {
          var activeIndex = containers.indexOf(active.id);
          var overIndex = containers.indexOf(over.id);
          var array = (0, _sortable.arrayMove)(containers, activeIndex, overIndex);
          (0, _authscape.apiService)().put("/Kanban/SetColumnOrder", {
            columnsIds: array
          });
          return array;
        });
      }
      var activeContainer = findContainer(active.id);
      if (!activeContainer) {
        setActiveId(null);
        return;
      }
      var overId = over === null || over === void 0 ? void 0 : over.id;
      if (overId == null) {
        setActiveId(null);
        return;
      }
      if (overId === TRASH_ID) {
        setItems(function (items) {
          return _objectSpread(_objectSpread({}, items), {}, _defineProperty({}, activeContainer, items[activeContainer].filter(function (id) {
            return id !== activeId;
          })));
        });
        setActiveId(null);
        return;
      }
      if (overId === PLACEHOLDER_ID) {
        var newContainerId = getNextContainerId();
        (0, _reactDom.unstable_batchedUpdates)(function () {
          setContainers(function (containers) {
            return [].concat(_toConsumableArray(containers), [newContainerId]);
          });
          setItems(function (items) {
            var _objectSpread4;
            return _objectSpread(_objectSpread({}, items), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, activeContainer, items[activeContainer].filter(function (id) {
              return id !== activeId;
            })), _defineProperty(_objectSpread4, newContainerId, [active.id]), _objectSpread4));
          });
          setActiveId(null);
        });
        return;
      }
      var overContainer = findContainer(overId);
      if (overContainer) {
        // you can't get the item from the key in an array, you need to search for it

        var name = getContainerName(overContainer);

        //alert(activeContainer + " \n" + overContainer)

        var activeIndex = items[activeContainer].indexOf(active.id);
        var overIndex = items[overContainer].indexOf(overId);

        //alert(activeIndex + " - " + active.id + " !== " + overId + " - " + overIndex)

        if (activeIndex !== overIndex) {
          var newArray = (0, _sortable.arrayMove)(items[overContainer], activeIndex, overIndex);
          setItems(function (items) {
            return _objectSpread(_objectSpread({}, items), {}, _defineProperty({}, overContainer, newArray));
          });

          // get the items we need to rearrange
          // alert(JSON.stringify(newArray))

          (0, _authscape.apiService)().put("/Kanban/AssignCardsBasedOnOrder", {
            cardId: active.id,
            columnId: overContainer,
            cards: newArray
          });
          var changeStateData = /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(onCardChangedState != null)) {
                      _context2.next = 5;
                      break;
                    }
                    _context2.next = 3;
                    return onCardChangedState(overContainer, active.id);
                  case 3:
                    _context2.next = 5;
                    return fetchData();
                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function changeStateData() {
              return _ref7.apply(this, arguments);
            };
          }();
          changeStateData();
        } else {
          // assign the order of the cards
          (0, _authscape.apiService)().put("/Kanban/AssignColumnForCard", {
            columnId: overContainer,
            cardId: active.id,
            orderId: 0
          });
          var _changeStateData = /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(onCardChangedState != null)) {
                      _context3.next = 5;
                      break;
                    }
                    _context3.next = 3;
                    return onCardChangedState(overContainer, active.id);
                  case 3:
                    _context3.next = 5;
                    return fetchData();
                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function _changeStateData() {
              return _ref8.apply(this, arguments);
            };
          }();
          _changeStateData();
        }
      }
      setActiveId(null);
    },
    cancelDrop: cancelDrop,
    onDragCancel: onDragCancel,
    modifiers: modifiers
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'inline-grid',
      boxSizing: 'border-box',
      padding: 20,
      gridAutoFlow: vertical ? 'row' : 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement(_sortable.SortableContext, {
    items: [].concat(_toConsumableArray(containers), [PLACEHOLDER_ID]),
    strategy: vertical ? _sortable.verticalListSortingStrategy : _sortable.horizontalListSortingStrategy
  }, containers.map(function (containerId) {
    var containerName = getContainerName(containerId);
    return /*#__PURE__*/_react["default"].createElement(DroppableContainer, {
      key: containerId,
      containerStyles: containerStyles,
      id: containerId,
      disableHandle: disableContainerHandle,
      disableDelete: disableContainerDelete,
      label: containerName,
      columns: columns,
      items: items[containerId],
      scrollable: scrollable,
      style: containerStyle,
      unstyled: minimal,
      onRemove: function onRemove() {
        return handleRemove(containerId);
      }
    }, /*#__PURE__*/_react["default"].createElement(_sortable.SortableContext, {
      items: items[containerId],
      strategy: strategy
    }, items[containerId].map(function (value, index) {
      return /*#__PURE__*/_react["default"].createElement(SortableItem, {
        disabled: isSortingContainer,
        key: value,
        onCardClicked: onCardClicked,
        itemStyles: itemStyles,
        id: value,
        cardDetail: getCardDetails(value),
        CardTemplate: CardTemplate,
        handleMoreClick: function handleMoreClick(event) {
          _handleMoreClick(event);
          setSelectedCardId(value);
        },
        handleMoreClose: function handleMoreClose() {
          _handleMoreClose();
          setSelectedCardId(null);
        },
        name: getCardName(value),
        index: index,
        handle: handle,
        style: getItemStyles,
        wrapperStyle: wrapperStyle,
        renderItem: renderItem,
        containerId: containerId,
        getIndex: getIndex
      });
    })));
  }), minimal ? undefined : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disableAddColumn && /*#__PURE__*/_react["default"].createElement(DroppableContainer, {
    id: PLACEHOLDER_ID,
    containerStyles: containerStyles,
    disabled: isSortingContainer,
    items: empty,
    onClick: handleAddColumn,
    placeholder: true
  }, "+ Add column")))), /*#__PURE__*/(0, _reactDom.createPortal)(/*#__PURE__*/_react["default"].createElement(_core.DragOverlay, {
    adjustScale: adjustScale,
    dropAnimation: dropAnimation
  }, activeId ? containers.includes(activeId) ? renderContainerDragOverlay(CardTemplate, activeId, containerStyles) : renderSortableItemDragOverlay(CardTemplate, activeId) : null), document.body), trashable && activeId && !containers.includes(activeId) ? /*#__PURE__*/_react["default"].createElement(Trash, {
    id: TRASH_ID
  }) : null), Menu != null && /*#__PURE__*/_react["default"].createElement(Menu, {
    anchorEl: anchorEl,
    open: open,
    handleMoreClose: _handleMoreClose,
    cardId: SelectedCardId
  })));
  function renderSortableItemDragOverlay(CardTemplate, id) {
    return /*#__PURE__*/_react["default"].createElement(Item, {
      value: id,
      itemStyles: itemStyles,
      name: getCardName(id),
      cardDetail: getCardDetails(id),
      onCardClicked: onCardClicked,
      CardTemplate: CardTemplate,
      handle: handle,
      style: getItemStyles({
        containerId: findContainer(id),
        overIndex: -1,
        index: getIndex(id),
        value: id,
        isSorting: true,
        isDragging: true,
        isDragOverlay: true
      }),
      color: getColor(id),
      wrapperStyle: wrapperStyle({
        index: 0
      }),
      renderItem: renderItem,
      dragOverlay: true
    });
  }
  function renderContainerDragOverlay(CardTemplate, containerId, containerStyles) {
    return /*#__PURE__*/_react["default"].createElement(Container, {
      label: getContainerName(containerId),
      containerStyles: containerStyles,
      columns: columns,
      style: {
        height: '100%',
        paddingRight: "10px"
      },
      shadow: true,
      unstyled: false
    }, items[containerId].map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(Item, {
        key: item,
        onCardClicked: onCardClicked,
        value: item,
        itemStyles: itemStyles,
        CardTemplate: CardTemplate,
        cardDetail: getCardDetails(item),
        name: getCardName(item),
        handle: handle,
        style: getItemStyles({
          containerId: containerId,
          overIndex: -1,
          index: getIndex(item),
          value: item,
          isDragging: false,
          isSorting: false,
          isDragOverlay: false
        }),
        color: getColor(item),
        wrapperStyle: wrapperStyle({
          index: index
        }),
        renderItem: renderItem
      });
    }));
  }
  function handleRemove(containerID) {
    setContainers(function (containers) {
      return containers.filter(function (id) {
        return id !== containerID;
      });
    });
  }
  function handleAddColumn() {
    var newContainerId = getNextContainerId();
    (0, _reactDom.unstable_batchedUpdates)(function () {
      setContainers(function (containers) {
        return [].concat(_toConsumableArray(containers), [newContainerId]);
      });
      setItems(function (items) {
        return _objectSpread(_objectSpread({}, items), {}, _defineProperty({}, newContainerId, []));
      });
    });
  }
  function getNextContainerId() {
    var containerIds = Object.keys(items);
    var lastContainerId = containerIds[containerIds.length - 1];
    return String.fromCharCode(lastContainerId.charCodeAt(0) + 1);
  }
}
function getColor(id) {
  switch (String(id)[0]) {
    case 'A':
      return '#7193f1';
    case 'B':
      return '#ffda6c';
    case 'C':
      return '#00bcd4';
    case 'D':
      return '#ef769f';
  }
  return undefined;
}
function Trash(_ref9) {
  var id = _ref9.id;
  var _useDroppable = (0, _core.useDroppable)({
      id: id
    }),
    setNodeRef = _useDroppable.setNodeRef,
    isOver = _useDroppable.isOver;
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: setNodeRef,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      left: '50%',
      marginLeft: -150,
      bottom: 20,
      width: 300,
      height: 60,
      borderRadius: 5,
      border: '1px solid',
      borderColor: isOver ? 'red' : '#DDD'
    }
  }, "Drop here to delete");
}
function SortableItem(_ref0) {
  var disabled = _ref0.disabled,
    id = _ref0.id,
    index = _ref0.index,
    handle = _ref0.handle,
    name = _ref0.name,
    renderItem = _ref0.renderItem,
    onCardClicked = _ref0.onCardClicked,
    CardTemplate = _ref0.CardTemplate,
    cardDetail = _ref0.cardDetail,
    handleMoreClick = _ref0.handleMoreClick,
    itemStyles = _ref0.itemStyles,
    handleMoreClose = _ref0.handleMoreClose,
    style = _ref0.style,
    containerId = _ref0.containerId,
    getIndex = _ref0.getIndex,
    wrapperStyle = _ref0.wrapperStyle;
  var _useSortable2 = (0, _sortable.useSortable)({
      id: id
    }),
    setNodeRef = _useSortable2.setNodeRef,
    setActivatorNodeRef = _useSortable2.setActivatorNodeRef,
    listeners = _useSortable2.listeners,
    isDragging = _useSortable2.isDragging,
    isSorting = _useSortable2.isSorting,
    over = _useSortable2.over,
    overIndex = _useSortable2.overIndex,
    transform = _useSortable2.transform,
    transition = _useSortable2.transition;
  var mounted = useMountStatus();
  var mountedWhileDragging = isDragging && !mounted;
  return /*#__PURE__*/_react["default"].createElement(Item, {
    ref: disabled ? undefined : setNodeRef,
    value: id,
    itemStyles: itemStyles,
    onCardClicked: onCardClicked,
    dragging: isDragging,
    sorting: isSorting,
    cardDetail: cardDetail,
    CardTemplate: CardTemplate,
    handleMoreClick: handleMoreClick,
    handleMoreClose: handleMoreClose,
    name: name,
    handle: handle,
    handleProps: handle ? {
      ref: setActivatorNodeRef
    } : undefined,
    index: index,
    wrapperStyle: wrapperStyle({
      index: index
    }),
    style: style({
      index: index,
      value: id,
      isDragging: isDragging,
      isSorting: isSorting,
      overIndex: over ? getIndex(over.id) : overIndex,
      containerId: containerId
    }),
    color: getColor(id),
    transition: transition,
    transform: transform,
    fadeIn: mountedWhileDragging,
    listeners: listeners,
    renderItem: renderItem
  });
}
function useMountStatus() {
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isMounted = _useState16[0],
    setIsMounted = _useState16[1];
  (0, _react.useEffect)(function () {
    var timeout = setTimeout(function () {
      return setIsMounted(true);
    }, 500);
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return isMounted;
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multipleContainersCoordinateGetter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@dnd-kit/core");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var directions = [_core.KeyboardCode.Down, _core.KeyboardCode.Right, _core.KeyboardCode.Up, _core.KeyboardCode.Left];
var multipleContainersCoordinateGetter = exports.multipleContainersCoordinateGetter = function multipleContainersCoordinateGetter(event, _ref) {
  var _ref$context = _ref.context,
    active = _ref$context.active,
    droppableRects = _ref$context.droppableRects,
    droppableContainers = _ref$context.droppableContainers,
    collisionRect = _ref$context.collisionRect;
  if (directions.includes(event.code)) {
    event.preventDefault();
    if (!active || !collisionRect) {
      return;
    }
    var filteredContainers = [];
    droppableContainers.getEnabled().forEach(function (entry) {
      if (!entry || entry !== null && entry !== void 0 && entry.disabled) {
        return;
      }
      var rect = droppableRects.get(entry.id);
      if (!rect) {
        return;
      }
      var data = entry.data.current;
      if (data) {
        var type = data.type,
          children = data.children;
        if (type === 'container' && (children === null || children === void 0 ? void 0 : children.length) > 0) {
          var _active$data$current;
          if (((_active$data$current = active.data.current) === null || _active$data$current === void 0 ? void 0 : _active$data$current.type) !== 'container') {
            return;
          }
        }
      }
      switch (event.code) {
        case _core.KeyboardCode.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry);
          }
          break;
        case _core.KeyboardCode.Up:
          if (collisionRect.top > rect.top) {
            filteredContainers.push(entry);
          }
          break;
        case _core.KeyboardCode.Left:
          if (collisionRect.left >= rect.left + rect.width) {
            filteredContainers.push(entry);
          }
          break;
        case _core.KeyboardCode.Right:
          if (collisionRect.left + collisionRect.width <= rect.left) {
            filteredContainers.push(entry);
          }
          break;
      }
    });
    var collisions = (0, _core.closestCorners)({
      active: active,
      collisionRect: collisionRect,
      droppableRects: droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null
    });
    var closestId = (0, _core.getFirstCollision)(collisions, 'id');
    if (closestId != null) {
      var newDroppable = droppableContainers.get(closestId);
      var newNode = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.node.current;
      var newRect = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.rect.current;
      if (newNode && newRect) {
        var _newDroppable$data$cu;
        if (newDroppable.id === 'placeholder') {
          return {
            x: newRect.left + (newRect.width - collisionRect.width) / 2,
            y: newRect.top + (newRect.height - collisionRect.height) / 2
          };
        }
        if (((_newDroppable$data$cu = newDroppable.data.current) === null || _newDroppable$data$cu === void 0 ? void 0 : _newDroppable$data$cu.type) === 'container') {
          return {
            x: newRect.left + 20,
            y: newRect.top + 74
          };
        }
        return {
          x: newRect.left,
          y: newRect.top
        };
      }
    }
  }
  return undefined;
};
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Remove = Remove;
var _react = _interopRequireWildcard(require("react"));
var _DeleteRounded = _interopRequireDefault(require("@mui/icons-material/DeleteRounded"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/// use in testing
// import {Action} from './Action';

var removeIcon = function removeIcon() {
  return /*#__PURE__*/_react["default"].createElement(_DeleteRounded["default"], null);
};
function Remove(props) {
  return /*#__PURE__*/_react["default"].createElement(Action, _extends({
    icon: removeIcon
  }, props, {
    active: {
      fill: 'rgba(255, 70, 70, 0.95)',
      background: 'rgba(255, 70, 70, 0.1)'
    }
  }));
}
