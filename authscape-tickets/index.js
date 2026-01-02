"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = Comments;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _QuestionAnswerOutlined = _interopRequireDefault(require("@mui/icons-material/QuestionAnswerOutlined"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _SendRounded = _interopRequireDefault(require("@mui/icons-material/SendRounded"));
var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _authscape = require("authscape");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
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
function Comments(_ref) {
  var ticketId = _ref.ticketId,
    isNote = _ref.isNote,
    isDisabled = _ref.isDisabled,
    currentUser = _ref.currentUser;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    comments = _useState2[0],
    setComments = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  // const [messageDialogOpen, setMessageDialogOpen] = useState(false);

  var reloadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, node;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _authscape.apiService)().get("/Ticket/GetMessages?TicketId=" + ticketId + "&isNote=" + isNote);
          case 2:
            response = _context.sent;
            if (response != null && response.status == 200) {
              setComments(response.data);
            }
            node = document.getElementById('messages');
            if (node != null) {
              (0, _scrollIntoViewIfNeeded["default"])(node, {
                behavior: 'smooth',
                scrollMode: 'if-needed'
              });
            }

            // setIsLoading(false);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function reloadMessages() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (ticketId != null) {
      var asyncPush = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return reloadMessages();
              case 2:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function asyncPush() {
          return _ref3.apply(this, arguments);
        };
      }();
      asyncPush();
    }
  }, [ticketId]);
  var SendMessage = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(message !== "")) {
              _context3.next = 8;
              break;
            }
            _context3.next = 3;
            return (0, _authscape.apiService)().post("/Ticket/CreateMessage", {
              ticketId: ticketId,
              name: currentUser.firstName,
              message: message,
              isNote: isNote
            });
          case 3:
            response = _context3.sent;
            if (!(response != null && response.status == 200)) {
              _context3.next = 8;
              break;
            }
            _context3.next = 7;
            return reloadMessages();
          case 7:
            // messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            // let messages = comments.slice();
            // messages.push(message);
            // setComments(messages);
            setMessage("");
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function SendMessage() {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      backgroundColor: "#F3F5F7",
      overflow: "auto",
      flex: "1 1 auto"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, null, comments.length == 0 && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      paddingLeft: 4
    }
  }, /*#__PURE__*/_react["default"].createElement(_QuestionAnswerOutlined["default"], {
    sx: {
      fill: "gray",
      position: "relative",
      top: "4px",
      marginRight: 2
    },
    fontSize: "2px"
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle2",
    color: "text.secondary",
    component: "span",
    sx: {
      marginTop: 1
    }
  }, "Add your first ", isNote ? "note" : "message", ". ", isNote ? "Your notes" : "The conversation history", " will appear here")), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      overflow: "scroll",
      height: "300px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_List["default"], null, comments != null && comments.map(function (comment, index) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: index,
      sx: {
        marginTop: 1
      }
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 1
    }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 11
    }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
      direction: "row",
      spacing: 1
    }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
      sx: {
        fontSize: 12
      }
    }, comment.firstName), /*#__PURE__*/_react["default"].createElement(_material.Box, {
      sx: {
        fontSize: 12
      }
    }, comment.created)), /*#__PURE__*/_react["default"].createElement(_material.Box, {
      sx: {
        fontSize: 16
      }
    }, comment.message))));
  }), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "messages"
  })))))))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      flex: "0 1 40px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    sx: {
      p: '2px 4px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
    sx: {
      ml: 1,
      flex: 1
    },
    disabled: isDisabled,
    onKeyUp: function onKeyUp(event) {
      if (event.key == "Enter") {
        SendMessage();
      }
    },
    placeholder: !isNote ? "Write your message here..." : "Write your notes here...",
    value: message,
    onChange: function onChange(value) {
      setMessage(value.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    disabled: isDisabled,
    type: "button",
    sx: {
      p: '10px'
    },
    "aria-label": "search",
    onClick: function onClick() {
      SendMessage();
    }
  }, /*#__PURE__*/_react["default"].createElement(_SendRounded["default"], null)))));
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicketDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));
var _Tab = _interopRequireDefault(require("@mui/material/Tab"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Autocomplete = _interopRequireWildcard(require("@mui/material/Autocomplete"));
var _material = require("@mui/material");
var _InsertDriveFileRounded = _interopRequireDefault(require("@mui/icons-material/InsertDriveFileRounded"));
var _ArrowBackIosRounded = _interopRequireDefault(require("@mui/icons-material/ArrowBackIosRounded"));
var _authscape = require("authscape");
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _CloseRounded = _interopRequireDefault(require("@mui/icons-material/CloseRounded"));
var _excluded = ["children", "value", "index"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
//import {Comments} from './comments';

var TicketDetail = exports.TicketDetail = function TicketDetail(_ref) {
  var ticketId = _ref.ticketId,
    setIsLoading = _ref.setIsLoading,
    currentUser = _ref.currentUser,
    _ref$GoBackToViewTick = _ref.GoBackToViewTickets,
    GoBackToViewTickets = _ref$GoBackToViewTick === void 0 ? null : _ref$GoBackToViewTick,
    _ref$customTabName = _ref.customTabName,
    customTabName = _ref$customTabName === void 0 ? null : _ref$customTabName,
    _ref$customTabElement = _ref.customTabElement,
    customTabElement = _ref$customTabElement === void 0 ? null : _ref$customTabElement;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    ticketType = _useState6[0],
    setTicketType = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    ticket = _useState8[0],
    setTicket = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    priorty = _useState0[0],
    setPriority = _useState0[1];
  var _useState1 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    participants = _useState10[0],
    setParticipants = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    ticketAttachments = _useState12[0],
    setTicketAttachments = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    customTabPayload = _useState14[0],
    setCustomTabPayload = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    ticketDescription = _useState16[0],
    setTicketDescription = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    createdByList = _useState18[0],
    setCreatedByList = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedCreatedBy = _useState20[0],
    setSelectedCreatedBy = _useState20[1];
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              _context.next = 3;
              return (0, _authscape.apiService)().get("/Ticket/GetTicket?ticketId=" + ticketId);
            case 3:
              response = _context.sent;
              if (response != null && response.status == 200) {
                setTicket(response.data);
                setIsLoading(false);
                setStatus(response.data.selectedTicketStatusId);
                setTicketType(response.data.selectedTicketTypeId);
                setPriority(response.data.selectedPriortyId);
                setSelectedCreatedBy(response.data.selectedCreatedBy);
                setParticipants(response.data.participants);
                setTicketAttachments(response.data.attachments);
                setCustomTabPayload(response.data.customTabPayload);
                setTicketDescription(response.data.description);
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (ticketId != null) {
      fetchData();
    }
  }, [ticketId]);
  function TabPanel(props) {
    var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties(props, _excluded);
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      role: "tabpanel",
      hidden: value !== index,
      id: "simple-tabpanel-".concat(index),
      "aria-labelledby": "simple-tab-".concat(index)
    }, other), value === index && /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        p: 3
      }
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, children)));
  }
  function a11yProps(index) {
    return {
      id: "simple-tab-".concat(index),
      'aria-controls': "simple-tabpanel-".concat(index)
    };
  }
  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };
  var refreshCreatedByList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(query) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _authscape.apiService)().get("/ticket/findUser?query=" + query);
          case 2:
            response = _context2.sent;
            if (response != null && response.status == 200) {
              setCreatedByList(response.data);
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function refreshCreatedByList(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var DownloadFile = function DownloadFile(_ref4) {
    var fileName = _ref4.fileName,
      uri = _ref4.uri;
    return /*#__PURE__*/_react["default"].createElement(_material.Card, {
      sx: {
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        // display: "flex",
        // alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        textAlign: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement(_InsertDriveFileRounded["default"], {
      sx: {
        fontSize: 50
      }
    })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h6",
      component: "div"
    }, fileName), /*#__PURE__*/_react["default"].createElement(_material.Button, {
      variant: "contained",
      color: "primary",
      onClick: function onClick() {
        window.open(uri);
      }
    }, "Download")));
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    "aria-label": "delete",
    size: "small",
    sx: {
      position: "absolute",
      right: 20,
      top: 20
    },
    onClick: function onClick() {
      if (GoBackToViewTickets != null) {
        GoBackToViewTickets();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], {
    fontSize: "inherit",
    sx: {
      width: 40,
      height: 40
    }
  })), /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement("h2", null, ticket != null && ticket.name)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Status:"), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: status,
    displayEmpty: true,
    inputProps: {
      'aria-label': 'Without label'
    },
    InputLabelProps: {
      shrink: true
    },
    onChange: (/*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(val) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              setStatus(val.target.value);
              _context3.next = 3;
              return (0, _authscape.apiService)().put("/ticket/UpdateStatus", {
                id: ticket.id,
                ticketStatusId: val.target.value
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }())
  }, ticket != null && ticket.ticketStatuses.map(function (status, index) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: index,
      value: status.id
    }, status.name);
  })))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Assigned to:"), selectedCreatedBy != null && /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    disablePortal: true,
    options: createdByList,
    value: selectedCreatedBy,
    onChange: (/*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event, newValue) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              setSelectedCreatedBy(newValue.id);
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3, _x4) {
        return _ref6.apply(this, arguments);
      };
    }()),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "",
        onChange: function onChange(val) {
          refreshCreatedByList(val.currentTarget.value);
        }
      }));
    }
  }), ticket != null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 1,
      fontSize: 18
    }
  }, ticket.assignedFirstName + " " + ticket.assignedLastName, " (", ticket.assignedEmail, ")"))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Priority:"), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-simple-select-label"
  }), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: priorty,
    label: "",
    onChange: (/*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(val) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              setPriority(val.target.value);
              _context5.next = 3;
              return (0, _authscape.apiService)().put("/ticket/UpdateTicketPriority", {
                id: ticket.id,
                priorityLevel: val.target.value
              });
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x5) {
        return _ref7.apply(this, arguments);
      };
    }())
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 0
  }, "None"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 1
  }, "Low"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 2
  }, "Medium"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 3
  }, "High"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 4
  }, "Urgent")))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Ticket Type:"), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-simple-select-label"
  }), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "ticketType",
    value: ticketType,
    label: "",
    onChange: (/*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(val) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              setTicketType(val.target.value);
              _context6.next = 3;
              return (0, _authscape.apiService)().put("/ticket/UpdateTicketType", {
                id: ticket.id,
                TicketTypeId: val.target.value
              });
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x6) {
        return _ref8.apply(this, arguments);
      };
    }())
  }, ticket != null && ticket.ticketTypes.map(function (status, index) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: index,
      value: status.id
    }, status.name);
  })))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Participants:"), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    multiple: true,
    disablePortal: true,
    value: participants,
    options: createdByList,
    onChange: (/*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(event, newValue) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return (0, _authscape.apiService)().put("/ticket/UpdateParticipants", {
                ticketId: ticketId,
                participants: newValue
              });
            case 2:
              setParticipants(newValue);
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function (_x7, _x8) {
        return _ref9.apply(this, arguments);
      };
    }()),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "",
        onChange: function onChange(val) {
          refreshCreatedByList(val.currentTarget.value);
        }
      }));
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Created:"), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "created",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    },
    disabled: true,
    label: "",
    variant: "outlined",
    autoFocus: true,
    value: ticket != null ? ticket.created : ""
  })), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Last Updated:"), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "lastUpdated",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    },
    disabled: true,
    label: "",
    variant: "outlined",
    autoFocus: true,
    value: ticket != null ? ticket.lastUpdated : ""
  }))))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      width: '100%',
      marginTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
    value: value,
    onChange: handleChange,
    "aria-label": "basic tabs example"
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: "Description"
  }, a11yProps(0))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: "Chat"
  }, a11yProps(1))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: "Notes"
  }, a11yProps(2))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: "Attachments"
  }, a11yProps(3))), customTabName != null && /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: customTabName
  }, a11yProps(4))))), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 0
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    dangerouslySetInnerHTML: {
      __html: ticketDescription
    }
  }))), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 1
  }, ticket != null && /*#__PURE__*/_react["default"].createElement(Comments, {
    ticketId: ticket.id,
    isDisabled: false,
    isNote: false,
    currentUser: currentUser
  })), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 2
  }, ticket != null && /*#__PURE__*/_react["default"].createElement(Comments, {
    ticketId: ticket.id,
    isDisabled: false,
    isNote: true,
    currentUser: currentUser
  })), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 3
  }, ticket != null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, ticketAttachments.map(function (attachment) {
    return /*#__PURE__*/_react["default"].createElement(DownloadFile, {
      fileName: attachment.name,
      uri: attachment.url
    });
  }), ticketAttachments.length == 0 && /*#__PURE__*/_react["default"].createElement(_system.Box, null, "There are no attachments"))), customTabName != null && /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 4
  }, customTabElement(customTabPayload))));
};
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tickets;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _system = require("@mui/system");
var _xDataGrid = require("@mui/x-data-grid");
var _DeleteRounded = _interopRequireDefault(require("@mui/icons-material/DeleteRounded"));
var _VisibilityRounded = _interopRequireDefault(require("@mui/icons-material/VisibilityRounded"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireWildcard(require("@mui/material/Select"));
var _router = require("next/router");
var _authscape = require("authscape");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } //import { TicketDetail } from './ticketDetail';
function Tickets(_ref) {
  var setIsLoading = _ref.setIsLoading,
    currentUser = _ref.currentUser,
    _ref$customTabName = _ref.customTabName,
    customTabName = _ref$customTabName === void 0 ? null : _ref$customTabName,
    _ref$customTabElement = _ref.customTabElement,
    customTabElement = _ref$customTabElement === void 0 ? null : _ref$customTabElement;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    archiveTicketId = _useState2[0],
    setArchiveTicketId = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    ticketStatuses = _useState4[0],
    setTicketStatuses = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    ticketTypes = _useState6[0],
    setTicketTypes = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    ticketTypeId = _useState8[0],
    setTicketTypeId = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    dataGridRefreshKey = _useState0[0],
    setDataGridRefreshKey = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    statusId = _useState10[0],
    setStatusId = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedTicketId = _useState12[0],
    setSelectedTicketId = _useState12[1];
  var router = (0, _router.useRouter)();
  (0, _react.useEffect)(function () {
    if (router.query.id != null) {
      setSelectedTicketId(router.query.id);
    }
  }, [router.isReady]);
  var columns = [{
    field: 'id',
    headerName: 'Id',
    width: 150
  }, {
    field: 'title',
    flex: 1,
    headerName: 'Customer',
    width: 200
  }, {
    field: 'ticketStatus',
    headerName: 'Status',
    width: 150
  }, {
    field: 'ticketType',
    headerName: 'Ticket Type',
    width: 150
  }, {
    field: 'created',
    headerName: 'Created',
    width: 150
  }, {
    field: 'ticketParticipants',
    headerName: 'Participants',
    width: 150
  }, {
    field: 'messages',
    headerName: 'Messages',
    width: 150
  }, {
    field: "actions",
    type: "actions",
    width: 200,
    headerName: "Actions",
    cellClassName: "actions",
    getActions: function getActions(_ref2) {
      var id = _ref2.id,
        row = _ref2.row;
      return [/*#__PURE__*/_react["default"].createElement(_xDataGrid.GridActionsCellItem, {
        key: id,
        icon: /*#__PURE__*/_react["default"].createElement(_VisibilityRounded["default"], null),
        label: "View",
        onClick: function onClick() {
          setSelectedTicketId(row.id);
        }
      }), /*#__PURE__*/_react["default"].createElement(_xDataGrid.GridActionsCellItem, {
        key: id,
        icon: /*#__PURE__*/_react["default"].createElement(_DeleteRounded["default"], null),
        label: "Delete",
        className: "textPrimary",
        onClick: function onClick() {
          setArchiveTicketId(row.id);
        }
      })];
    }
  }];
  (0, _react.useEffect)(function () {
    var fetchStatusesAndTypes = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var responseStatus, responseType;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _authscape.apiService)().get("/Ticket/GetStatuses");
            case 2:
              responseStatus = _context.sent;
              if (responseStatus != null && responseStatus.status == 200) {
                setTicketStatuses(responseStatus.data);
              }
              _context.next = 6;
              return (0, _authscape.apiService)().get("/Ticket/GetTicketTypes");
            case 6:
              responseType = _context.sent;
              if (responseType != null && responseType.status == 200) {
                setTicketTypes(responseType.data);
              }
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function fetchStatusesAndTypes() {
        return _ref3.apply(this, arguments);
      };
    }();
    fetchStatusesAndTypes();
    setTicketStatuses();
  }, []);
  (0, _react.useEffect)(function () {
    var newKey = dataGridRefreshKey + 1;
    setDataGridRefreshKey(newKey);
  }, [ticketTypeId, statusId]);
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2,
      paddingBottom: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-simple-select-label"
  }, "Ticket Status"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: statusId,
    label: "ticketStatus",
    onChange: function onChange(event) {
      setStatusId(event.target.value);
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: null
  }, "Not Assigned"), ticketStatuses != null && ticketStatuses.map(function (tStatus) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: tStatus.id
    }, tStatus.name);
  }))))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-simple-select-label"
  }, "Ticket Type"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: ticketTypeId,
    label: "TicketType",
    onChange: function onChange(event) {
      setTicketTypeId(event.target.value);
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: null
  }, "Not Assigned"), ticketTypes != null && ticketTypes.map(function (tTicketType) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: tTicketType.id
    }, tTicketType.name);
  })))))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_authscape.EditableDatagrid, {
    height: "80vh",
    key: dataGridRefreshKey,
    url: "/ticket/GetTickets",
    params: {
      ticketStatusId: statusId,
      ticketTypeId: ticketTypeId
    },
    columns: columns
  })), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: selectedTicketId != null ? true : false,
    onClose: function onClose() {
      var newKey = dataGridRefreshKey + 1;
      setDataGridRefreshKey(newKey);
      setSelectedTicketId(null);
    },
    fullWidth: true,
    maxWidth: "lg",
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      padding: 2,
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(TicketDetail, {
    ticketId: selectedTicketId,
    setIsLoading: setIsLoading,
    currentUser: currentUser,
    customTabName: customTabName,
    customTabElement: customTabElement,
    GoBackToViewTickets: function GoBackToViewTickets() {
      var newKey = dataGridRefreshKey + 1;
      setDataGridRefreshKey(newKey);
      setSelectedTicketId(null);
    }
  })))), /*#__PURE__*/_react["default"].createElement(_authscape.YesNoDialog, {
    open: archiveTicketId != null ? true : false,
    title: "Remove Ticket",
    message: "Are you sure you want to close this ticket?",
    YesAction: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var newKey;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _authscape.apiService)()["delete"]("/Ticket/ArchiveTicket?id=" + archiveTicketId);
          case 2:
            newKey = dataGridRefreshKey + 1;
            setDataGridRefreshKey(newKey);
            setArchiveTicketId(null);
            setSelectedTicketId(null);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })),
    NoAction: function NoAction() {
      var newKey = dataGridRefreshKey + 1;
      setDataGridRefreshKey(newKey);
      setArchiveTicketId(null);
      setSelectedTicketId(null);
    }
  }));
}
