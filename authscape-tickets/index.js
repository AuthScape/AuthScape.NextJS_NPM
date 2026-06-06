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
var _LockRounded = _interopRequireDefault(require("@mui/icons-material/LockRounded"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _SendRounded = _interopRequireDefault(require("@mui/icons-material/SendRounded"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _authscape = require("authscape");
var _dateFns = require("date-fns");
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
    currentUser = _ref.currentUser,
    onCountChange = _ref.onCountChange;
  var theme = (0, _material.useTheme)();
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    comments = _useState2[0],
    setComments = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var messagesEndRef = (0, _react.useRef)(null);
  var formatRelativeTime = function formatRelativeTime(dateStr) {
    try {
      var date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return (0, _dateFns.formatDistanceToNow)(date, {
        addSuffix: true
      });
    } catch (_unused) {
      return dateStr;
    }
  };
  var reloadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _authscape.apiService)().get("/Ticket/GetMessages?TicketId=" + ticketId + "&isNote=" + isNote);
          case 2:
            response = _context.sent;
            if (response != null && response.status == 200) {
              setComments(response.data);
              if (onCountChange) {
                onCountChange(response.data.length);
              }
            }
            setTimeout(function () {
              var node = document.getElementById('messages-end');
              if (node != null) {
                (0, _scrollIntoViewIfNeeded["default"])(node, {
                  behavior: 'smooth',
                  scrollMode: 'if-needed'
                });
              }
            }, 100);
          case 5:
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
            if (!(message.trim() !== "")) {
              _context3.next = 8;
              break;
            }
            _context3.next = 3;
            return (0, _authscape.apiService)().post("/Ticket/CreateMessage", {
              ticketId: ticketId,
              name: currentUser.firstName,
              message: message.trim(),
              createdByUserId: currentUser.id,
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
  var getInitials = function getInitials(firstName) {
    return (firstName === null || firstName === void 0 ? void 0 : firstName.charAt(0).toUpperCase()) || '?';
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      height: "500px",
      bgcolor: 'background.default',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, isNote && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
      px: 2,
      py: 1,
      bgcolor: (0, _material.alpha)(theme.palette.warning.main, 0.08),
      borderBottom: "1px solid ".concat((0, _material.alpha)(theme.palette.warning.main, 0.15)),
      color: theme.palette.mode === 'dark' ? 'warning.light' : 'warning.dark'
    }
  }, /*#__PURE__*/_react["default"].createElement(_LockRounded["default"], {
    sx: {
      fontSize: 14
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    fontWeight: 500
  }, "Internal notes \u2014 not visible to customers")), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      flex: "1 1 auto",
      overflow: "auto",
      p: 2
    }
  }, comments.length == 0 ? /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'text.secondary'
    }
  }, /*#__PURE__*/_react["default"].createElement(_QuestionAnswerOutlined["default"], {
    sx: {
      fontSize: 48,
      mb: 2,
      opacity: 0.3
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    textAlign: "center"
  }, "Add your first ", isNote ? "note" : "message"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    textAlign: "center",
    color: "text.secondary"
  }, isNote ? "Your notes" : "The conversation history", " will appear here")) : /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    spacing: 2
  }, comments.map(function (comment, index) {
    var isCurrentUser = comment.firstName === currentUser.firstName;
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: index,
      sx: {
        display: 'flex',
        gap: 1.5,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      sx: {
        width: 36,
        height: 36,
        bgcolor: isCurrentUser ? 'primary.main' : 'secondary.main',
        fontSize: '0.875rem'
      }
    }, getInitials(comment.firstName)), /*#__PURE__*/_react["default"].createElement(_material.Box, {
      sx: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mb: 0.5
      }
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      fontWeight: 600
    }, comment.firstName), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: comment.created,
      arrow: true
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption",
      color: "text.secondary",
      sx: {
        cursor: 'default'
      }
    }, formatRelativeTime(comment.created)))), /*#__PURE__*/_react["default"].createElement(_material.Paper, {
      elevation: 0,
      sx: {
        p: 1.5,
        bgcolor: isCurrentUser ? (0, _material.alpha)(theme.palette.primary.main, 0.08) : (0, _material.alpha)(theme.palette.background["default"], 0.5),
        border: "1px solid ".concat((0, _material.alpha)(theme.palette.divider, 0.1)),
        borderRadius: 2,
        borderTopLeftRadius: 4
      }
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      sx: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
      }
    }, comment.message))));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "messages-end",
    ref: messagesEndRef
  }))), /*#__PURE__*/_react["default"].createElement(_material.Divider, null), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      p: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    elevation: 0,
    sx: {
      p: 1,
      display: 'flex',
      alignItems: 'center',
      border: "1px solid ".concat((0, _material.alpha)(theme.palette.divider, 0.1)),
      borderRadius: 2,
      bgcolor: 'background.paper',
      '&:focus-within': {
        borderColor: 'primary.main',
        boxShadow: "0 0 0 2px ".concat((0, _material.alpha)(theme.palette.primary.main, 0.1))
      },
      transition: 'all 0.2s'
    }
  }, /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
    sx: {
      ml: 1,
      flex: 1,
      fontSize: '0.875rem'
    },
    disabled: isDisabled,
    multiline: true,
    maxRows: 4,
    onKeyDown: function onKeyDown(event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        SendMessage();
      }
    },
    placeholder: !isNote ? "Type your message..." : "Write your notes...",
    value: message,
    onChange: function onChange(value) {
      setMessage(value.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    disabled: isDisabled || !message.trim(),
    sx: {
      bgcolor: message.trim() ? 'primary.main' : 'transparent',
      color: message.trim() ? 'white' : 'text.secondary',
      '&:hover': {
        bgcolor: message.trim() ? 'primary.dark' : (0, _material.alpha)(theme.palette.action.hover, 0.04)
      },
      transition: 'all 0.2s',
      '&.Mui-disabled': {
        bgcolor: 'transparent',
        color: 'text.disabled'
      }
    },
    onClick: function onClick() {
      SendMessage();
    }
  }, /*#__PURE__*/_react["default"].createElement(_SendRounded["default"], {
    fontSize: "small"
  }))), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    sx: {
      mt: 1,
      display: 'block'
    }
  }, "Press Enter to send, Shift+Enter for new line")));
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
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _material = require("@mui/material");
var _InsertDriveFileRounded = _interopRequireDefault(require("@mui/icons-material/InsertDriveFileRounded"));
var _CloseRounded = _interopRequireDefault(require("@mui/icons-material/CloseRounded"));
var _PersonRounded = _interopRequireDefault(require("@mui/icons-material/PersonRounded"));
var _CalendarTodayRounded = _interopRequireDefault(require("@mui/icons-material/CalendarTodayRounded"));
var _UpdateRounded = _interopRequireDefault(require("@mui/icons-material/UpdateRounded"));
var _PriorityHighRounded = _interopRequireDefault(require("@mui/icons-material/PriorityHighRounded"));
var _CategoryRounded = _interopRequireDefault(require("@mui/icons-material/CategoryRounded"));
var _GroupRounded = _interopRequireDefault(require("@mui/icons-material/GroupRounded"));
var _BusinessRounded = _interopRequireDefault(require("@mui/icons-material/BusinessRounded"));
var _LocationOnRounded = _interopRequireDefault(require("@mui/icons-material/LocationOnRounded"));
var _DownloadRounded = _interopRequireDefault(require("@mui/icons-material/DownloadRounded"));
var _CloudUploadRounded = _interopRequireDefault(require("@mui/icons-material/CloudUploadRounded"));
var _DeleteRounded = _interopRequireDefault(require("@mui/icons-material/DeleteRounded"));
var _EditRounded = _interopRequireDefault(require("@mui/icons-material/EditRounded"));
var _ContentCopyRounded = _interopRequireDefault(require("@mui/icons-material/ContentCopyRounded"));
var _ImageRounded = _interopRequireDefault(require("@mui/icons-material/ImageRounded"));
var _PictureAsPdfRounded = _interopRequireDefault(require("@mui/icons-material/PictureAsPdfRounded"));
var _DescriptionRounded = _interopRequireDefault(require("@mui/icons-material/DescriptionRounded"));
var _TableChartRounded = _interopRequireDefault(require("@mui/icons-material/TableChartRounded"));
var _FolderZipRounded = _interopRequireDefault(require("@mui/icons-material/FolderZipRounded"));
var _AttachFileRounded = _interopRequireDefault(require("@mui/icons-material/AttachFileRounded"));
var _NavigateNextRounded = _interopRequireDefault(require("@mui/icons-material/NavigateNextRounded"));
var _authscape = require("authscape");
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _reactDropzone = require("react-dropzone");
var _excluded = ["children", "value", "index"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import {Comments} from './comments';
var TicketDetail = exports.TicketDetail = function TicketDetail(_ref) {
  var _ticket$assignedFirst;
  var ticketId = _ref.ticketId,
    setIsLoading = _ref.setIsLoading,
    currentUser = _ref.currentUser,
    _ref$GoBackToViewTick = _ref.GoBackToViewTickets,
    GoBackToViewTickets = _ref$GoBackToViewTick === void 0 ? null : _ref$GoBackToViewTick,
    _ref$customTabName = _ref.customTabName,
    customTabName = _ref$customTabName === void 0 ? null : _ref$customTabName,
    _ref$customTabElement = _ref.customTabElement,
    customTabElement = _ref$customTabElement === void 0 ? null : _ref$customTabElement,
    _ref$onDeleteTicket = _ref.onDeleteTicket,
    onDeleteTicket = _ref$onDeleteTicket === void 0 ? null : _ref$onDeleteTicket;
  var theme = (0, _material.useTheme)();
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
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isEditingDescription = _useState18[0],
    setIsEditingDescription = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isEditingTitle = _useState20[0],
    setIsEditingTitle = _useState20[1];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    editTitle = _useState22[0],
    setEditTitle = _useState22[1];
  var _useState23 = (0, _react.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    companyList = _useState24[0],
    setCompanyList = _useState24[1];
  var _useState25 = (0, _react.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    selectedCompany = _useState26[0],
    setSelectedCompany = _useState26[1];
  var _useState27 = (0, _react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    locationList = _useState28[0],
    setLocationList = _useState28[1];
  var _useState29 = (0, _react.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    selectedLocation = _useState30[0],
    setSelectedLocation = _useState30[1];
  var _useState31 = (0, _react.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    createdByList = _useState32[0],
    setCreatedByList = _useState32[1];
  var _useState33 = (0, _react.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    selectedCreatedBy = _useState34[0],
    setSelectedCreatedBy = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    uploadingFile = _useState36[0],
    setUploadingFile = _useState36[1];
  var _useState37 = (0, _react.useState)(''),
    _useState38 = _slicedToArray(_useState37, 2),
    uploadFileName = _useState38[0],
    setUploadFileName = _useState38[1];
  var fileInputRef = (0, _react.useRef)(null);
  var _useState39 = (0, _react.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    messageCount = _useState40[0],
    setMessageCount = _useState40[1];
  var _useState41 = (0, _react.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    noteCount = _useState42[0],
    setNoteCount = _useState42[1];
  var _useState43 = (0, _react.useState)({
      open: false,
      message: '',
      severity: 'success'
    }),
    _useState44 = _slicedToArray(_useState43, 2),
    snackbar = _useState44[0],
    setSnackbar = _useState44[1];
  var _useState45 = (0, _react.useState)({
      open: false,
      title: '',
      message: '',
      onConfirm: null
    }),
    _useState46 = _slicedToArray(_useState45, 2),
    confirmDialog = _useState46[0],
    setConfirmDialog = _useState46[1];
  var showSnackbar = function showSnackbar(message) {
    var severity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
    setSnackbar({
      open: true,
      message: message,
      severity: severity
    });
  };
  var showConfirm = function showConfirm(title, message, onConfirm) {
    setConfirmDialog({
      open: true,
      title: title,
      message: message,
      onConfirm: onConfirm
    });
  };
  var uploadFile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
      var formData, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (file) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setUploadingFile(true);
            setUploadFileName(file.name);
            _context.prev = 4;
            formData = new FormData();
            formData.append('TicketId', ticketId);
            formData.append('File', file);
            _context.next = 10;
            return (0, _authscape.apiService)().post('/Ticket/AddAttachment', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
          case 10:
            response = _context.sent;
            if (response != null && response.status == 200) {
              setTicketAttachments(function (prev) {
                return [].concat(_toConsumableArray(prev), [response.data]);
              });
              showSnackbar('File uploaded successfully');
            }
            _context.next = 18;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](4);
            console.error('Error uploading file:', _context.t0);
            showSnackbar('Error uploading file', 'error');
          case 18:
            _context.prev = 18;
            setUploadingFile(false);
            setUploadFileName('');
            if (fileInputRef.current) {
              fileInputRef.current.value = '';
            }
            return _context.finish(18);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 14, 18, 23]]);
    }));
    return function uploadFile(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleFileUpload = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var file;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            file = event.target.files[0];
            _context2.next = 3;
            return uploadFile(file);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleFileUpload(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var onDrop = (0, _react.useCallback)(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(acceptedFiles) {
      var _iterator, _step, file;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _iterator = _createForOfIteratorHelper(acceptedFiles);
            _context3.prev = 1;
            _iterator.s();
          case 3:
            if ((_step = _iterator.n()).done) {
              _context3.next = 9;
              break;
            }
            file = _step.value;
            _context3.next = 7;
            return uploadFile(file);
          case 7:
            _context3.next = 3;
            break;
          case 9:
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            _iterator.e(_context3.t0);
          case 14:
            _context3.prev = 14;
            _iterator.f();
            return _context3.finish(14);
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 11, 14, 17]]);
    }));
    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }(), [ticketId]);
  var _useDropzone = (0, _reactDropzone.useDropzone)({
      onDrop: onDrop,
      noClick: false
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    isDragActive = _useDropzone.isDragActive;
  var handleDeleteAttachment = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(attachmentId) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            showConfirm('Delete Attachment', 'Are you sure you want to delete this attachment? This action cannot be undone.', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var response;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return (0, _authscape.apiService)()["delete"]('/Ticket/DeleteAttachment?attachmentId=' + attachmentId);
                  case 3:
                    response = _context4.sent;
                    if (response != null && response.status == 200) {
                      setTicketAttachments(ticketAttachments.filter(function (a) {
                        return a.id !== attachmentId;
                      }));
                      showSnackbar('Attachment deleted');
                    }
                    _context4.next = 11;
                    break;
                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](0);
                    console.error('Error deleting attachment:', _context4.t0);
                    showSnackbar('Error deleting attachment', 'error');
                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, null, [[0, 7]]);
            })));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function handleDeleteAttachment(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              setIsLoading(true);
              _context6.next = 3;
              return (0, _authscape.apiService)().get("/Ticket/GetTicket?ticketId=" + ticketId);
            case 3:
              response = _context6.sent;
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
                setEditTitle(response.data.name || '');

                // Set company and location if available
                if (response.data.companyId) {
                  setSelectedCompany({
                    id: response.data.companyId,
                    title: response.data.companyName
                  });
                }
                if (response.data.locationId) {
                  setSelectedLocation({
                    id: response.data.locationId,
                    name: response.data.locationName
                  });
                }
              }
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function fetchData() {
        return _ref7.apply(this, arguments);
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
    }, children));
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
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(query) {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _authscape.apiService)().get("/ticket/findUser?query=" + query);
          case 2:
            response = _context7.sent;
            if (response != null && response.status == 200) {
              setCreatedByList(response.data);
            }
          case 4:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function refreshCreatedByList(_x5) {
      return _ref8.apply(this, arguments);
    };
  }();
  var refreshCompanyList = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(query) {
      var response;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0, _authscape.apiService)().get("/UserManagement/GetCompanies?name=" + (query || ''));
          case 2:
            response = _context8.sent;
            if (response != null && response.status == 200) {
              setCompanyList(response.data);
            }
          case 4:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function refreshCompanyList(_x6) {
      return _ref9.apply(this, arguments);
    };
  }();
  var refreshLocationList = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(query) {
      var companyId,
        url,
        response,
        _args9 = arguments;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            companyId = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : null;
            url = "/UserManagement/GetLocations?name=" + (query || '');
            if (companyId) {
              url += "&companyId=" + companyId;
            }
            _context9.next = 5;
            return (0, _authscape.apiService)().get(url);
          case 5:
            response = _context9.sent;
            if (response != null && response.status == 200) {
              setLocationList(response.data);
            }
          case 7:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function refreshLocationList(_x7) {
      return _ref0.apply(this, arguments);
    };
  }();
  var getPriorityColor = function getPriorityColor(priority) {
    switch (priority) {
      case 4:
        return 'error';
      case 3:
        return 'warning';
      case 2:
        return 'info';
      case 1:
        return 'success';
      default:
        return 'default';
    }
  };
  var getPriorityLabel = function getPriorityLabel(priority) {
    switch (priority) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      default:
        return 'None';
    }
  };
  var getPriorityAccentColor = function getPriorityAccentColor(priority) {
    switch (priority) {
      case 4:
        return theme.palette.error.main;
      case 3:
        return theme.palette.warning.main;
      case 2:
        return theme.palette.info.main;
      case 1:
        return theme.palette.success.main;
      default:
        return theme.palette.grey[400];
    }
  };
  var getStatusColor = function getStatusColor(statusName) {
    var s = (statusName === null || statusName === void 0 ? void 0 : statusName.toLowerCase()) || '';
    if (s.includes('open') || s.includes('new')) return 'info';
    if (s.includes('progress') || s.includes('assigned')) return 'warning';
    if (s.includes('resolved') || s.includes('closed')) return 'success';
    if (s.includes('pending')) return 'default';
    return 'default';
  };
  var getStatusName = function getStatusName() {
    if (!ticket || !ticket.ticketStatuses) return '';
    var s = ticket.ticketStatuses.find(function (ts) {
      return ts.id === status;
    });
    return (s === null || s === void 0 ? void 0 : s.name) || '';
  };
  var getTypeName = function getTypeName() {
    if (!ticket || !ticket.ticketTypes) return '';
    var t = ticket.ticketTypes.find(function (tt) {
      return tt.id === ticketType;
    });
    return (t === null || t === void 0 ? void 0 : t.name) || '';
  };
  var copyTicketLink = function copyTicketLink() {
    var url = "".concat(window.location.origin, "/tickets?id=").concat(ticketId);
    navigator.clipboard.writeText(url);
    showSnackbar('Ticket link copied to clipboard');
  };
  var getFileIcon = function getFileIcon(fileName) {
    var _fileName$split$pop;
    var ext = fileName === null || fileName === void 0 ? void 0 : (_fileName$split$pop = fileName.split('.').pop()) === null || _fileName$split$pop === void 0 ? void 0 : _fileName$split$pop.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) return {
      Icon: _ImageRounded["default"],
      color: 'success.main',
      bgColor: (0, _system.alpha)(theme.palette.success.main, 0.1)
    };
    if (['pdf'].includes(ext)) return {
      Icon: _PictureAsPdfRounded["default"],
      color: 'error.main',
      bgColor: (0, _system.alpha)(theme.palette.error.main, 0.1)
    };
    if (['doc', 'docx'].includes(ext)) return {
      Icon: _DescriptionRounded["default"],
      color: 'info.main',
      bgColor: (0, _system.alpha)(theme.palette.info.main, 0.1)
    };
    if (['xls', 'xlsx', 'csv'].includes(ext)) return {
      Icon: _TableChartRounded["default"],
      color: 'success.main',
      bgColor: (0, _system.alpha)(theme.palette.success.main, 0.1)
    };
    if (['zip', 'rar', '7z'].includes(ext)) return {
      Icon: _FolderZipRounded["default"],
      color: 'warning.main',
      bgColor: (0, _system.alpha)(theme.palette.warning.main, 0.1)
    };
    return {
      Icon: _InsertDriveFileRounded["default"],
      color: 'primary.main',
      bgColor: (0, _system.alpha)(theme.palette.primary.main, 0.1)
    };
  };
  var isImageFile = function isImageFile(fileName) {
    var _fileName$split$pop2;
    var ext = fileName === null || fileName === void 0 ? void 0 : (_fileName$split$pop2 = fileName.split('.').pop()) === null || _fileName$split$pop2 === void 0 ? void 0 : _fileName$split$pop2.toLowerCase();
    return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext);
  };
  var DownloadFile = function DownloadFile(_ref1) {
    var fileName = _ref1.fileName,
      uri = _ref1.uri,
      attachmentId = _ref1.attachmentId,
      onDelete = _ref1.onDelete;
    var _getFileIcon = getFileIcon(fileName),
      Icon = _getFileIcon.Icon,
      color = _getFileIcon.color,
      bgColor = _getFileIcon.bgColor;
    var isImage = isImageFile(fileName);
    return /*#__PURE__*/_react["default"].createElement(_material.Card, {
      elevation: 0,
      sx: {
        border: "1px solid ".concat((0, _system.alpha)(theme.palette.divider, 0.1)),
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.2s',
        position: 'relative',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[4]
        }
      }
    }, onDelete && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      onClick: function onClick() {
        return onDelete(attachmentId);
      },
      sx: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
        bgcolor: (0, _system.alpha)(theme.palette.error.main, 0.9),
        color: 'white',
        '&:hover': {
          bgcolor: theme.palette.error.main
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_DeleteRounded["default"], {
      fontSize: "small"
    })), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
      spacing: 0
    }, isImage ? /*#__PURE__*/_react["default"].createElement(_system.Box, {
      component: "img",
      src: uri,
      alt: fileName,
      sx: {
        width: '100%',
        height: 140,
        objectFit: 'cover'
      }
    }) : /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
        bgcolor: bgColor
      }
    }, /*#__PURE__*/_react["default"].createElement(Icon, {
      sx: {
        fontSize: 48,
        color: color
      }
    })), /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        p: 2
      }
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      fontWeight: 500,
      noWrap: true,
      sx: {
        mb: 1.5
      }
    }, fileName), /*#__PURE__*/_react["default"].createElement(_material.Button, {
      variant: "outlined",
      size: "small",
      fullWidth: true,
      startIcon: /*#__PURE__*/_react["default"].createElement(_DownloadRounded["default"], null),
      onClick: function onClick() {
        window.open(uri);
      },
      sx: {
        borderRadius: 1.5
      }
    }, "Download"))));
  };
  return /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      bgcolor: 'background.default',
      minHeight: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      height: 4,
      background: "linear-gradient(90deg, ".concat(getPriorityAccentColor(priorty), ", ").concat((0, _system.alpha)(getPriorityAccentColor(priorty), 0.3), ")")
    }
  }), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      bgcolor: 'background.paper',
      borderBottom: "1px solid ".concat((0, _system.alpha)(theme.palette.divider, 0.1)),
      p: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Breadcrumbs, {
    separator: /*#__PURE__*/_react["default"].createElement(_NavigateNextRounded["default"], {
      sx: {
        fontSize: 16
      }
    }),
    sx: {
      mb: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Link, {
    underline: "hover",
    color: "text.secondary",
    sx: {
      cursor: 'pointer',
      fontSize: '0.875rem'
    },
    onClick: function onClick() {
      if (GoBackToViewTickets != null) GoBackToViewTickets();
    }
  }, "Tickets"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.primary",
    fontWeight: 500
  }, "#", ticketId)), isEditingTitle ? /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    value: editTitle,
    onChange: function onChange(e) {
      return setEditTitle(e.target.value);
    },
    onBlur: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            setIsEditingTitle(false);
            if (!(ticket && editTitle !== ticket.name)) {
              _context0.next = 6;
              break;
            }
            setTicket(_objectSpread(_objectSpread({}, ticket), {}, {
              name: editTitle
            }));
            _context0.next = 5;
            return (0, _authscape.apiService)().put("/ticket/UpdateDescription", {
              id: ticket.id,
              description: ticketDescription,
              title: editTitle
            });
          case 5:
            showSnackbar('Title updated');
          case 6:
          case "end":
            return _context0.stop();
        }
      }, _callee0);
    })),
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        e.target.blur();
      }
      if (e.key === 'Escape') {
        setEditTitle((ticket === null || ticket === void 0 ? void 0 : ticket.name) || '');
        setIsEditingTitle(false);
      }
    },
    autoFocus: true,
    fullWidth: true,
    variant: "standard",
    InputProps: {
      sx: {
        fontSize: '1.5rem',
        fontWeight: 600
      }
    }
  }) : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5",
    fontWeight: 600,
    sx: {
      mb: 1,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1,
      borderRadius: 1,
      px: 0.5,
      mx: -0.5,
      transition: 'background-color 0.15s',
      '&:hover': {
        bgcolor: (0, _system.alpha)(theme.palette.primary.main, 0.04),
        '& .edit-icon': {
          opacity: 1
        }
      }
    },
    onClick: function onClick() {
      setEditTitle((ticket === null || ticket === void 0 ? void 0 : ticket.name) || '');
      setIsEditingTitle(true);
    }
  }, ticket != null && ticket.name, /*#__PURE__*/_react["default"].createElement(_EditRounded["default"], {
    className: "edit-icon",
    sx: {
      fontSize: 16,
      opacity: 0,
      transition: 'opacity 0.15s',
      color: 'text.secondary'
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    spacing: 1,
    flexWrap: "wrap",
    useFlexGap: true
  }, getStatusName() && /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: getStatusName(),
    size: "small",
    color: getStatusColor(getStatusName()),
    sx: {
      fontWeight: 500,
      height: 26
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: getPriorityLabel(priorty),
    size: "small",
    color: getPriorityColor(priorty),
    variant: "outlined",
    icon: /*#__PURE__*/_react["default"].createElement(_PriorityHighRounded["default"], {
      sx: {
        fontSize: 14
      }
    }),
    sx: {
      fontWeight: 500,
      height: 26
    }
  }), getTypeName() && /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: getTypeName(),
    size: "small",
    variant: "outlined",
    icon: /*#__PURE__*/_react["default"].createElement(_CategoryRounded["default"], {
      sx: {
        fontSize: 14
      }
    }),
    sx: {
      fontWeight: 500,
      height: 26
    }
  }), ticketAttachments.length > 0 && /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: "".concat(ticketAttachments.length, " file").concat(ticketAttachments.length > 1 ? 's' : ''),
    size: "small",
    variant: "outlined",
    icon: /*#__PURE__*/_react["default"].createElement(_AttachFileRounded["default"], {
      sx: {
        fontSize: 14
      }
    }),
    sx: {
      fontWeight: 500,
      height: 26
    }
  }))), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    spacing: 1,
    sx: {
      ml: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: "Copy ticket link"
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: copyTicketLink,
    sx: {
      bgcolor: (0, _system.alpha)(theme.palette.grey[500], 0.08),
      color: 'text.secondary',
      '&:hover': {
        bgcolor: (0, _system.alpha)(theme.palette.grey[500], 0.15)
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_ContentCopyRounded["default"], {
    fontSize: "small"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: "Close"
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      if (GoBackToViewTickets != null) GoBackToViewTickets();
    },
    sx: {
      bgcolor: (0, _system.alpha)(theme.palette.grey[500], 0.08),
      color: 'text.secondary',
      '&:hover': {
        bgcolor: (0, _system.alpha)(theme.palette.grey[500], 0.15)
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], {
    fontSize: "small"
  })))))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 8
  }, /*#__PURE__*/_react["default"].createElement(_material.Card, {
    elevation: 0,
    sx: {
      border: "1px solid ".concat((0, _system.alpha)(theme.palette.divider, 0.1)),
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider',
      bgcolor: (0, _system.alpha)(theme.palette.background["default"], 0.5)
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
    value: value,
    onChange: handleChange,
    "aria-label": "ticket tabs",
    sx: {
      '& .MuiTab-root': {
        textTransform: 'none',
        fontWeight: 500,
        minHeight: 48
      },
      '& .MuiTabs-indicator': {
        height: 3,
        borderRadius: '3px 3px 0 0'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: "Description"
  }, a11yProps(0))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: /*#__PURE__*/_react["default"].createElement(_material.Badge, {
      badgeContent: messageCount,
      color: "primary",
      max: 99,
      sx: {
        '& .MuiBadge-badge': {
          fontSize: '0.65rem',
          minWidth: 18,
          height: 18
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        pr: messageCount > 0 ? 1 : 0
      }
    }, "Chat"))
  }, a11yProps(1))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: /*#__PURE__*/_react["default"].createElement(_material.Badge, {
      badgeContent: noteCount,
      color: "secondary",
      max: 99,
      sx: {
        '& .MuiBadge-badge': {
          fontSize: '0.65rem',
          minWidth: 18,
          height: 18
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        pr: noteCount > 0 ? 1 : 0
      }
    }, "Notes"))
  }, a11yProps(2))), /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: /*#__PURE__*/_react["default"].createElement(_material.Badge, {
      badgeContent: ticketAttachments.length,
      color: "default",
      max: 99,
      sx: {
        '& .MuiBadge-badge': {
          fontSize: '0.65rem',
          minWidth: 18,
          height: 18
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        pr: ticketAttachments.length > 0 ? 1 : 0
      }
    }, "Attachments"))
  }, a11yProps(3))), customTabName != null && /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    label: customTabName
  }, a11yProps(4))))), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 0
  }, isEditingDescription ? /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_authscape.RichTextEditor, {
    html: ticketDescription && !ticketDescription.trim().startsWith('<') ? "<p>".concat(ticketDescription, "</p>") : ticketDescription || '',
    onSave: (/*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1(html) {
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              setTicketDescription(html);
              setIsEditingDescription(false);
              _context1.next = 4;
              return (0, _authscape.apiService)().put("/ticket/UpdateDescription", {
                id: ticket.id,
                description: html
              });
            case 4:
              showSnackbar('Description saved');
            case 5:
            case "end":
              return _context1.stop();
          }
        }, _callee1);
      }));
      return function (_x8) {
        return _ref11.apply(this, arguments);
      };
    }())
  }), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    onClick: function onClick() {
      return setIsEditingDescription(false);
    },
    sx: {
      mt: 2,
      borderRadius: 2
    }
  }, "Cancel")) : /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'flex-end',
      mb: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    size: "small",
    startIcon: /*#__PURE__*/_react["default"].createElement(_EditRounded["default"], {
      sx: {
        fontSize: 14
      }
    }),
    onClick: function onClick() {
      return setIsEditingDescription(true);
    },
    sx: {
      borderRadius: 2,
      textTransform: 'none'
    }
  }, "Edit")), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      whiteSpace: "pre-wrap",
      '& img': {
        maxWidth: '100%',
        borderRadius: 1
      },
      '& a': {
        color: 'primary.main',
        textDecoration: 'underline',
        '&:hover': {
          textDecoration: 'none'
        }
      },
      minHeight: 100,
      p: 2,
      borderRadius: 2,
      border: "1px solid ".concat((0, _system.alpha)(theme.palette.divider, 0.1)),
      bgcolor: (0, _system.alpha)(theme.palette.background["default"], 0.5)
    }
  }, ticketDescription ? /*#__PURE__*/_react["default"].createElement(_system.Box, {
    dangerouslySetInnerHTML: {
      __html: ticketDescription.replace(/href="(?!https?:\/\/|mailto:|tel:)([^"]+)"/g, 'href="https://$1"').replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')
    }
  }) : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary",
    sx: {
      fontStyle: 'italic'
    }
  }, "No description provided.")))), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 1
  }, ticket != null && /*#__PURE__*/_react["default"].createElement(Comments, {
    ticketId: ticket.id,
    isDisabled: false,
    isNote: false,
    currentUser: currentUser,
    onCountChange: setMessageCount
  })), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 2
  }, ticket != null && /*#__PURE__*/_react["default"].createElement(Comments, {
    ticketId: ticket.id,
    isDisabled: false,
    isNote: true,
    currentUser: currentUser,
    onCountChange: setNoteCount
  })), /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 3
  }, ticket != null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, _extends({}, getRootProps(), {
    sx: {
      border: "2px dashed ".concat(isDragActive ? theme.palette.primary.main : (0, _system.alpha)(theme.palette.divider, 0.3)),
      borderRadius: 2,
      p: 4,
      textAlign: 'center',
      bgcolor: isDragActive ? (0, _system.alpha)(theme.palette.primary.main, 0.04) : 'transparent',
      cursor: 'pointer',
      transition: 'all 0.2s',
      mb: 3,
      '&:hover': {
        borderColor: theme.palette.primary.main,
        bgcolor: (0, _system.alpha)(theme.palette.primary.main, 0.02)
      }
    }
  }), /*#__PURE__*/_react["default"].createElement("input", _extends({}, getInputProps(), {
    ref: fileInputRef
  })), /*#__PURE__*/_react["default"].createElement(_CloudUploadRounded["default"], {
    sx: {
      fontSize: 48,
      color: 'text.secondary',
      opacity: 0.4
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mt: 1
    }
  }, isDragActive ? 'Drop files here...' : 'Drag & drop files here, or click to browse')), uploadingFile && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mb: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 16
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary"
  }, "Uploading ", uploadFileName, "...")), /*#__PURE__*/_react["default"].createElement(_material.LinearProgress, {
    sx: {
      borderRadius: 2
    }
  })), ticketAttachments.length > 0 ? /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, ticketAttachments.map(function (attachment, index) {
    return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      key: attachment.id || index
    }, /*#__PURE__*/_react["default"].createElement(DownloadFile, {
      fileName: attachment.name,
      uri: attachment.url,
      attachmentId: attachment.id,
      onDelete: handleDeleteAttachment
    }));
  })) : !uploadingFile && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      textAlign: 'center',
      py: 4,
      color: 'text.secondary'
    }
  }, /*#__PURE__*/_react["default"].createElement(_InsertDriveFileRounded["default"], {
    sx: {
      fontSize: 48,
      mb: 2,
      opacity: 0.3
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, "No attachments yet")))), customTabName != null && /*#__PURE__*/_react["default"].createElement(TabPanel, {
    value: value,
    index: 4
  }, customTabElement(customTabPayload)))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Card, {
    elevation: 0,
    sx: {
      border: "1px solid ".concat((0, _system.alpha)(theme.palette.divider, 0.1)),
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      height: 3,
      bgcolor: getPriorityAccentColor(priorty)
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.CardContent, {
    sx: {
      pt: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "overline",
    color: "text.secondary",
    letterSpacing: 1,
    sx: {
      mb: 2,
      display: 'block'
    }
  }, "DETAILS"), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 2.5
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    sx: {
      minWidth: 60,
      flexShrink: 0
    }
  }, "Status"), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: status,
    displayEmpty: true,
    onChange: (/*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(val) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              setStatus(val.target.value);
              _context10.next = 3;
              return (0, _authscape.apiService)().put("/ticket/UpdateStatus", {
                id: ticket.id,
                ticketStatusId: val.target.value
              });
            case 3:
              showSnackbar('Status updated');
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      return function (_x9) {
        return _ref12.apply(this, arguments);
      };
    }()),
    sx: {
      borderRadius: 1.5
    }
  }, ticket != null && ticket.ticketStatuses.map(function (status, index) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: index,
      value: status.id
    }, status.name);
  })))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    sx: {
      minWidth: 60,
      flexShrink: 0
    }
  }, "Priority"), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: priorty,
    onChange: (/*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(val) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              setPriority(val.target.value);
              _context11.next = 3;
              return (0, _authscape.apiService)().put("/ticket/UpdateTicketPriority", {
                id: ticket.id,
                priorityLevel: val.target.value
              });
            case 3:
              showSnackbar('Priority updated');
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      return function (_x0) {
        return _ref13.apply(this, arguments);
      };
    }()),
    renderValue: function renderValue(value) {
      return /*#__PURE__*/_react["default"].createElement(_material.Chip, {
        label: getPriorityLabel(value),
        size: "small",
        color: getPriorityColor(value),
        sx: {
          height: 24
        }
      });
    },
    sx: {
      borderRadius: 1.5
    }
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
  }, "Urgent")))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    sx: {
      minWidth: 60,
      flexShrink: 0
    }
  }, "Type"), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: ticketType,
    onChange: (/*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(val) {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              setTicketType(val.target.value);
              _context12.next = 3;
              return (0, _authscape.apiService)().put("/ticket/UpdateTicketType", {
                id: ticket.id,
                TicketTypeId: val.target.value
              });
            case 3:
              showSnackbar('Ticket type updated');
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      return function (_x1) {
        return _ref14.apply(this, arguments);
      };
    }()),
    sx: {
      borderRadius: 1.5
    }
  }, ticket != null && ticket.ticketTypes.map(function (status, index) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: index,
      value: status.id
    }, status.name);
  }))))))), /*#__PURE__*/_react["default"].createElement(_material.Card, {
    elevation: 0,
    sx: {
      border: "1px solid ".concat((0, _system.alpha)(theme.palette.divider, 0.1)),
      borderRadius: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardContent, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "overline",
    color: "text.secondary",
    letterSpacing: 1,
    sx: {
      mb: 2,
      display: 'block'
    }
  }, "PEOPLE & ORGANIZATION"), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 2.5
  }, ticket != null && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      p: 1.5,
      borderRadius: 2,
      bgcolor: (0, _system.alpha)(theme.palette.primary.main, 0.04),
      border: "1px solid ".concat((0, _system.alpha)(theme.palette.primary.main, 0.08))
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    sx: {
      width: 40,
      height: 40,
      bgcolor: 'primary.main',
      fontSize: '1rem'
    }
  }, (_ticket$assignedFirst = ticket.assignedFirstName) === null || _ticket$assignedFirst === void 0 ? void 0 : _ticket$assignedFirst.charAt(0)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      minWidth: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    display: "block",
    noWrap: true
  }, "Assignee"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    fontWeight: 600,
    noWrap: true
  }, ticket.assignedFirstName, " ", ticket.assignedLastName), ticket.assignedEmail && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 0.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    noWrap: true
  }, ticket.assignedEmail), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small",
    onClick: function onClick() {
      navigator.clipboard.writeText(ticket.assignedEmail);
      showSnackbar('Email copied to clipboard');
    },
    sx: {
      p: 0.25
    }
  }, /*#__PURE__*/_react["default"].createElement(_ContentCopyRounded["default"], {
    sx: {
      fontSize: 14
    }
  })))))), /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    sx: {
      mb: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 0.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_GroupRounded["default"], {
    sx: {
      fontSize: 14
    }
  }), "Participants (", participants.length, ")"), participants.length > 0 && /*#__PURE__*/_react["default"].createElement(_material.AvatarGroup, {
    max: 5,
    sx: {
      justifyContent: 'flex-start',
      mb: 1.5,
      '& .MuiAvatar-root': {
        width: 28,
        height: 28,
        fontSize: '0.75rem'
      }
    }
  }, participants.map(function (p, i) {
    return /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
      title: p.label || '',
      key: p.id || i
    }, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
      sx: {
        bgcolor: i % 2 === 0 ? 'primary.main' : 'secondary.main'
      }
    }, (p.label || '?').charAt(0)));
  })), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    multiple: true,
    size: "small",
    value: participants,
    options: createdByList,
    onChange: (/*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(event, newValue) {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return (0, _authscape.apiService)().put("/ticket/UpdateParticipants", {
                ticketId: ticketId,
                participants: newValue
              });
            case 2:
              setParticipants(newValue);
              showSnackbar('Participants updated');
            case 4:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      return function (_x10, _x11) {
        return _ref15.apply(this, arguments);
      };
    }()),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        placeholder: "Add participants...",
        onChange: function onChange(val) {
          refreshCreatedByList(val.currentTarget.value);
        },
        sx: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 1.5
          }
        }
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Divider, null), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_BusinessRounded["default"], {
    sx: {
      fontSize: 18,
      color: 'text.secondary',
      mt: 1
    }
  }), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flex: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    sx: {
      mb: 0.5,
      display: 'block'
    }
  }, "Company"), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    size: "small",
    value: selectedCompany,
    options: companyList,
    getOptionLabel: function getOptionLabel(option) {
      return option.title || '';
    },
    isOptionEqualToValue: function isOptionEqualToValue(option, value) {
      return option.id === value.id;
    },
    onChange: (/*#__PURE__*/function () {
      var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(event, newValue) {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              setSelectedCompany(newValue);
              setSelectedLocation(null);
              setLocationList([]);
              _context14.next = 5;
              return (0, _authscape.apiService)().put("/ticket/UpdateCompany", {
                id: ticket.id,
                companyId: (newValue === null || newValue === void 0 ? void 0 : newValue.id) || null,
                companyName: (newValue === null || newValue === void 0 ? void 0 : newValue.title) || null
              });
            case 5:
              showSnackbar('Company updated');
            case 6:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      return function (_x12, _x13) {
        return _ref16.apply(this, arguments);
      };
    }()),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        placeholder: "Select company...",
        onChange: function onChange(e) {
          return refreshCompanyList(e.target.value);
        },
        sx: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 1.5
          }
        }
      }));
    }
  }))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_LocationOnRounded["default"], {
    sx: {
      fontSize: 18,
      color: 'text.secondary',
      mt: 1
    }
  }), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flex: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary",
    sx: {
      mb: 0.5,
      display: 'block'
    }
  }, "Location"), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    size: "small",
    value: selectedLocation,
    options: locationList,
    getOptionLabel: function getOptionLabel(option) {
      return option.name || '';
    },
    isOptionEqualToValue: function isOptionEqualToValue(option, value) {
      return option.id === value.id;
    },
    onChange: (/*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(event, newValue) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              setSelectedLocation(newValue);
              _context15.next = 3;
              return (0, _authscape.apiService)().put("/ticket/UpdateLocation", {
                id: ticket.id,
                locationId: (newValue === null || newValue === void 0 ? void 0 : newValue.id) || null,
                locationName: (newValue === null || newValue === void 0 ? void 0 : newValue.name) || null
              });
            case 3:
              showSnackbar('Location updated');
            case 4:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      return function (_x14, _x15) {
        return _ref17.apply(this, arguments);
      };
    }()),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        placeholder: "Select location...",
        onChange: function onChange(e) {
          return refreshLocationList(e.target.value, selectedCompany === null || selectedCompany === void 0 ? void 0 : selectedCompany.id);
        },
        sx: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 1.5
          }
        }
      }));
    }
  })))))), /*#__PURE__*/_react["default"].createElement(_material.Card, {
    elevation: 0,
    sx: {
      border: "1px solid ".concat((0, _system.alpha)(theme.palette.divider, 0.1)),
      borderRadius: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardContent, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "overline",
    color: "text.secondary",
    letterSpacing: 1,
    sx: {
      mb: 2,
      display: 'block'
    }
  }, "TIMELINE"), /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 1.5
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_CalendarTodayRounded["default"], {
    sx: {
      fontSize: 14,
      color: 'text.secondary'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary"
  }, "Created")), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    fontWeight: 500
  }, ticket != null ? ticket.created : "")), /*#__PURE__*/_react["default"].createElement(_material.Divider, null), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_UpdateRounded["default"], {
    sx: {
      fontSize: 14,
      color: 'text.secondary'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary"
  }, "Updated")), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    fontWeight: 500
  }, ticket != null ? ticket.lastUpdated : ""))))), onDeleteTicket && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    sx: {
      mb: 2
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "overline",
    color: "error.main",
    letterSpacing: 1,
    sx: {
      mb: 1,
      display: 'block'
    }
  }, "DANGER ZONE"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    color: "error",
    fullWidth: true,
    startIcon: /*#__PURE__*/_react["default"].createElement(_DeleteRounded["default"], null),
    onClick: function onClick() {
      showConfirm('Delete Ticket', 'Are you sure you want to delete this ticket? This action cannot be undone and all messages, notes, and attachments will be lost.', function () {
        onDeleteTicket();
      });
    },
    sx: {
      borderRadius: 2
    }
  }, "Delete Ticket")))))), /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    open: confirmDialog.open,
    onClose: function onClose() {
      return setConfirmDialog(_objectSpread(_objectSpread({}, confirmDialog), {}, {
        open: false
      }));
    },
    PaperProps: {
      sx: {
        borderRadius: 3
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogTitle, {
    sx: {
      fontWeight: 600
    }
  }, confirmDialog.title), /*#__PURE__*/_react["default"].createElement(_material.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, confirmDialog.message)), /*#__PURE__*/_react["default"].createElement(_material.DialogActions, {
    sx: {
      p: 2.5,
      gap: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setConfirmDialog(_objectSpread(_objectSpread({}, confirmDialog), {}, {
        open: false
      }));
    },
    variant: "outlined",
    sx: {
      borderRadius: 2
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    color: "error",
    variant: "contained",
    onClick: function onClick() {
      if (confirmDialog.onConfirm) confirmDialog.onConfirm();
      setConfirmDialog(_objectSpread(_objectSpread({}, confirmDialog), {}, {
        open: false
      }));
    },
    sx: {
      borderRadius: 2
    }
  }, "Delete"))), /*#__PURE__*/_react["default"].createElement(_material.Snackbar, {
    open: snackbar.open,
    autoHideDuration: 4000,
    onClose: function onClose() {
      return setSnackbar(_objectSpread(_objectSpread({}, snackbar), {}, {
        open: false
      }));
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Alert, {
    severity: snackbar.severity,
    variant: "filled",
    onClose: function onClose() {
      return setSnackbar(_objectSpread(_objectSpread({}, snackbar), {}, {
        open: false
      }));
    },
    sx: {
      borderRadius: 2
    }
  }, snackbar.message)));
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
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _router = require("next/router");
var _authscape = require("authscape");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _AddRounded = _interopRequireDefault(require("@mui/icons-material/AddRounded"));
var _ConfirmationNumberRounded = _interopRequireDefault(require("@mui/icons-material/ConfirmationNumberRounded"));
var _FilterListRounded = _interopRequireDefault(require("@mui/icons-material/FilterListRounded"));
var _SearchRounded = _interopRequireDefault(require("@mui/icons-material/SearchRounded"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import { TicketDetail } from './ticketDetail';
function Tickets(_ref) {
  var setIsLoading = _ref.setIsLoading,
    currentUser = _ref.currentUser,
    _ref$customTabName = _ref.customTabName,
    customTabName = _ref$customTabName === void 0 ? null : _ref$customTabName,
    _ref$customTabElement = _ref.customTabElement,
    customTabElement = _ref$customTabElement === void 0 ? null : _ref$customTabElement;
  var theme = (0, _material.useTheme)();
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    ticketStatuses = _useState2[0],
    setTicketStatuses = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    ticketTypes = _useState4[0],
    setTicketTypes = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    ticketTypeId = _useState6[0],
    setTicketTypeId = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    dataGridRefreshKey = _useState8[0],
    setDataGridRefreshKey = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    statusId = _useState0[0],
    setStatusId = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedTicketId = _useState10[0],
    setSelectedTicketId = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    searchQuery = _useState12[0],
    setSearchQuery = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showFilters = _useState14[0],
    setShowFilters = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showNewTicketDialog = _useState16[0],
    setShowNewTicketDialog = _useState16[1];
  var newTicketTitle = (0, _react.useRef)();
  var newTicketDescription = (0, _react.useRef)();
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    newTicketType = _useState18[0],
    setNewTicketType = _useState18[1];
  var _useState19 = (0, _react.useState)(2),
    _useState20 = _slicedToArray(_useState19, 2),
    newTicketPriority = _useState20[0],
    setNewTicketPriority = _useState20[1];
  var router = (0, _router.useRouter)();
  (0, _react.useEffect)(function () {
    if (router.query.id != null) {
      setSelectedTicketId(router.query.id);
    }
  }, [router.isReady]);
  var getPriorityColor = function getPriorityColor(priority) {
    switch (priority) {
      case 4:
        return 'error';
      // Urgent
      case 3:
        return 'warning';
      // High
      case 2:
        return 'info';
      // Medium
      case 1:
        return 'success';
      // Low
      default:
        return 'default';
      // None
    }
  };
  var getPriorityLabel = function getPriorityLabel(priority) {
    switch (priority) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      default:
        return 'None';
    }
  };
  var getStatusColor = function getStatusColor(status) {
    var statusLower = (status === null || status === void 0 ? void 0 : status.toLowerCase()) || '';
    if (statusLower.includes('open') || statusLower.includes('new')) return 'info';
    if (statusLower.includes('progress') || statusLower.includes('assigned')) return 'warning';
    if (statusLower.includes('resolved') || statusLower.includes('closed')) return 'success';
    if (statusLower.includes('pending')) return 'default';
    return 'default';
  };
  var columns = [{
    field: 'id',
    headerName: 'Ticket #',
    width: 100,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react["default"].createElement(_system.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "body2",
        fontWeight: 600,
        color: "primary"
      }, "#", params.value));
    }
  }, {
    field: 'title',
    flex: 1,
    headerName: 'Subject',
    minWidth: 250,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react["default"].createElement(_system.Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%'
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "body2",
        fontWeight: 500,
        noWrap: true
      }, params.value), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "caption",
        color: "text.secondary",
        noWrap: true
      }, params.row.ticketType));
    }
  }, {
    field: 'ticketStatus',
    headerName: 'Status',
    width: 150,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.Chip, {
        label: params.value,
        size: "small",
        color: getStatusColor(params.value),
        sx: {
          fontWeight: 500
        }
      });
    }
  }, {
    field: 'priority',
    headerName: 'Priority',
    width: 120,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.Chip, {
        label: getPriorityLabel(params.row.priorityLevel || 0),
        size: "small",
        color: getPriorityColor(params.row.priorityLevel || 0),
        variant: "outlined",
        sx: {
          fontWeight: 500
        }
      });
    }
  }, {
    field: 'ticketParticipants',
    headerName: 'Participants',
    width: 120,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.Chip, {
        label: params.value || 0,
        size: "small",
        variant: "outlined"
      });
    }
  }, {
    field: 'messages',
    headerName: 'Messages',
    width: 100,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.Chip, {
        label: params.value || 0,
        size: "small",
        color: "default",
        variant: "outlined"
      });
    }
  }, {
    field: 'created',
    headerName: 'Created',
    width: 150,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "caption",
        color: "text.secondary"
      }, params.value);
    }
  }];
  (0, _react.useEffect)(function () {
    var fetchStatusesAndTypes = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
        return _ref2.apply(this, arguments);
      };
    }();
    fetchStatusesAndTypes();
  }, []);
  (0, _react.useEffect)(function () {
    var newKey = dataGridRefreshKey + 1;
    setDataGridRefreshKey(newKey);
  }, [ticketTypeId, statusId]);
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Card, {
    elevation: 0,
    sx: {
      mb: 3,
      border: "1px solid ".concat((0, _material.alpha)(theme.palette.divider, 0.1)),
      borderRadius: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardContent, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      mb: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 2,
      bgcolor: (0, _material.alpha)(theme.palette.primary.main, 0.1),
      color: 'primary.main'
    }
  }, /*#__PURE__*/_react["default"].createElement(_ConfirmationNumberRounded["default"], {
    sx: {
      fontSize: 28
    }
  })), /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    fontWeight: 600,
    sx: {
      mb: 0.5
    }
  }, "Tickets"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, "Manage and track all requests"))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      gap: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    startIcon: /*#__PURE__*/_react["default"].createElement(_FilterListRounded["default"], null),
    onClick: function onClick() {
      return setShowFilters(!showFilters);
    },
    sx: {
      borderRadius: 2
    }
  }, "Filters"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    startIcon: /*#__PURE__*/_react["default"].createElement(_AddRounded["default"], null),
    onClick: function onClick() {
      return setShowNewTicketDialog(true);
    },
    sx: {
      borderRadius: 2
    }
  }, "New Ticket"))), showFilters && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      p: 3,
      bgcolor: (0, _material.alpha)(theme.palette.background["default"], 0.5),
      borderRadius: 2,
      mb: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    placeholder: "Search tickets...",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    },
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_SearchRounded["default"], null))
    },
    sx: {
      '& .MuiOutlinedInput-root': {
        borderRadius: 2,
        bgcolor: 'background.paper'
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "status-select-label"
  }, "Ticket Status"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "status-select-label",
    id: "status-select",
    value: statusId,
    label: "Ticket Status",
    onChange: function onChange(event) {
      setStatusId(event.target.value);
    },
    sx: {
      borderRadius: 2,
      bgcolor: 'background.paper'
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: null
  }, "All Statuses"), ticketStatuses != null && ticketStatuses.map(function (tStatus) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: tStatus.id,
      value: tStatus.id
    }, tStatus.name);
  })))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "type-select-label"
  }, "Ticket Type"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "type-select-label",
    id: "type-select",
    value: ticketTypeId,
    label: "Ticket Type",
    onChange: function onChange(event) {
      setTicketTypeId(event.target.value);
    },
    sx: {
      borderRadius: 2,
      bgcolor: 'background.paper'
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: null
  }, "All Types"), ticketTypes != null && ticketTypes.map(function (tTicketType) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: tTicketType.id,
      value: tTicketType.id
    }, tTicketType.name);
  })))))))), /*#__PURE__*/_react["default"].createElement(_material.Card, {
    elevation: 0,
    sx: {
      border: "1px solid ".concat((0, _material.alpha)(theme.palette.divider, 0.1)),
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_authscape.EditableDatagrid, {
    height: "600px",
    key: dataGridRefreshKey,
    url: "/ticket/GetTickets",
    params: {
      ticketStatusId: statusId,
      ticketTypeId: ticketTypeId
    },
    columns: columns,
    onRowClick: function onRowClick(params) {
      setSelectedTicketId(params.row.id);
    },
    sx: {
      border: 'none',
      '& .MuiDataGrid-cell:focus': {
        outline: 'none'
      },
      '& .MuiDataGrid-row:hover': {
        bgcolor: (0, _material.alpha)(theme.palette.primary.main, 0.04),
        cursor: 'pointer'
      },
      '& .MuiDataGrid-columnHeaders': {
        bgcolor: (0, _material.alpha)(theme.palette.background["default"], 0.5),
        borderBottom: "2px solid ".concat((0, _material.alpha)(theme.palette.divider, 0.1))
      },
      '& .MuiDataGrid-columnHeaderTitle': {
        fontWeight: 600
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: selectedTicketId != null ? true : false,
    onClose: function onClose() {
      var newKey = dataGridRefreshKey + 1;
      setDataGridRefreshKey(newKey);
      setSelectedTicketId(null);
    },
    fullWidth: true,
    maxWidth: "xl",
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    PaperProps: {
      sx: {
        borderRadius: 3,
        maxHeight: '90vh'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
    sx: {
      p: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
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
    },
    onDeleteTicket: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var newKey;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _authscape.apiService)()["delete"]("/Ticket/ArchiveTicket?id=" + selectedTicketId);
          case 2:
            newKey = dataGridRefreshKey + 1;
            setDataGridRefreshKey(newKey);
            setSelectedTicketId(null);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))
  })))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: showNewTicketDialog,
    onClose: function onClose() {
      return setShowNewTicketDialog(false);
    },
    fullWidth: true,
    maxWidth: "sm",
    PaperProps: {
      sx: {
        borderRadius: 3
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 2,
      bgcolor: (0, _material.alpha)(theme.palette.primary.main, 0.1),
      color: 'primary.main'
    }
  }, /*#__PURE__*/_react["default"].createElement(_AddRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    fontWeight: 600
  }, "Create New Ticket"))), /*#__PURE__*/_react["default"].createElement(_material.Divider, null), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
    sx: {
      pt: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 3
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    inputRef: newTicketTitle,
    label: "Ticket Title",
    placeholder: "Brief description of the issue",
    fullWidth: true,
    required: true,
    sx: {
      '& .MuiOutlinedInput-root': {
        borderRadius: 2
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    inputRef: newTicketDescription,
    label: "Description",
    placeholder: "Provide detailed information about the ticket",
    fullWidth: true,
    multiline: true,
    rows: 4,
    required: true,
    sx: {
      '& .MuiOutlinedInput-root': {
        borderRadius: 2
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "new-ticket-type-label"
  }, "Ticket Type"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "new-ticket-type-label",
    value: newTicketType,
    label: "Ticket Type",
    onChange: function onChange(e) {
      return setNewTicketType(e.target.value);
    },
    sx: {
      borderRadius: 2
    }
  }, ticketTypes.map(function (type) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: type.id,
      value: type.id
    }, type.name);
  }))), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "new-ticket-priority-label"
  }, "Priority"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "new-ticket-priority-label",
    value: newTicketPriority,
    label: "Priority",
    onChange: function onChange(e) {
      return setNewTicketPriority(e.target.value);
    },
    renderValue: function renderValue(value) {
      return /*#__PURE__*/_react["default"].createElement(_system.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
        label: value === 4 ? 'Urgent' : value === 3 ? 'High' : value === 2 ? 'Medium' : value === 1 ? 'Low' : 'None',
        size: "small",
        color: value === 4 ? 'error' : value === 3 ? 'warning' : value === 2 ? 'info' : value === 1 ? 'success' : 'default',
        sx: {
          height: 24
        }
      }));
    },
    sx: {
      borderRadius: 2
    }
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
  }, "Urgent"))))), /*#__PURE__*/_react["default"].createElement(_material.Divider, null), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], {
    sx: {
      p: 2.5,
      gap: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setShowNewTicketDialog(false);
    },
    variant: "outlined",
    sx: {
      borderRadius: 2
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _newTicketTitle$curre, _newTicketDescription;
      var message, description, response, _response$data, errorMessage, _error$response, _error$response$data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            message = (_newTicketTitle$curre = newTicketTitle.current) === null || _newTicketTitle$curre === void 0 ? void 0 : _newTicketTitle$curre.value;
            description = (_newTicketDescription = newTicketDescription.current) === null || _newTicketDescription === void 0 ? void 0 : _newTicketDescription.value;
            if (!(!message || !description)) {
              _context3.next = 5;
              break;
            }
            alert('Please fill in both title and description');
            return _context3.abrupt("return");
          case 5:
            if (newTicketType) {
              _context3.next = 8;
              break;
            }
            alert('Please select a ticket type');
            return _context3.abrupt("return");
          case 8:
            if (!(ticketStatuses.length === 0)) {
              _context3.next = 11;
              break;
            }
            alert('Ticket statuses have not loaded yet. Please try again.');
            return _context3.abrupt("return");
          case 11:
            _context3.prev = 11;
            _context3.next = 14;
            return (0, _authscape.apiService)().post("/Ticket/CreateTicket", {
              message: message,
              description: description,
              ticketTypeId: newTicketType,
              ticketStatusId: ticketStatuses[0].id,
              priorityLevel: newTicketPriority
            });
          case 14:
            response = _context3.sent;
            if (response != null && response.status == 200) {
              setShowNewTicketDialog(false);
              setDataGridRefreshKey(dataGridRefreshKey + 1);

              // Reset form
              if (newTicketTitle.current) newTicketTitle.current.value = '';
              if (newTicketDescription.current) newTicketDescription.current.value = '';
              setNewTicketType(null);
              setNewTicketPriority(2);

              // Open the newly created ticket
              if (response.data) {
                setSelectedTicketId(response.data);
              }
            } else {
              errorMessage = (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || (response === null || response === void 0 ? void 0 : response.data) || 'Unknown error';
              console.error('Failed to create ticket:', response === null || response === void 0 ? void 0 : response.status, errorMessage);
              alert('Failed to create ticket: ' + errorMessage);
            }
            _context3.next = 22;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](11);
            console.error('Error creating ticket:', _context3.t0);
            alert('Error creating ticket: ' + (((_error$response = _context3.t0.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || _context3.t0.message || 'Unknown error'));
          case 22:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[11, 18]]);
    })),
    variant: "contained",
    startIcon: /*#__PURE__*/_react["default"].createElement(_AddRounded["default"], null),
    sx: {
      borderRadius: 2
    }
  }, "Create Ticket"))));
}
