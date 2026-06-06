"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _material = require("@mui/material");
var _reactHookForm = require("react-hook-form");
var _authscape = require("authscape");
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _BusinessRounded = _interopRequireDefault(require("@mui/icons-material/BusinessRounded"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// remove when publishing
// import {renderCustomField, renderSystemField } from './EditorFields';
// import { UserManagement } from './UserManagement';
// import { DropZone } from '../dropzone';

var CompanyEditor = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$companyId = _ref.companyId,
    companyId = _ref$companyId === void 0 ? null : _ref$companyId,
    platformType = _ref.platformType,
    _ref$onSaved = _ref.onSaved,
    onSaved = _ref$onSaved === void 0 ? null : _ref$onSaved,
    _ref$onCustomTabs = _ref.onCustomTabs,
    onCustomTabs = _ref$onCustomTabs === void 0 ? null : _ref$onCustomTabs;
  var _useForm = (0, _reactHookForm.useForm)(),
    control = _useForm.control,
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors,
    watch = _useForm.watch,
    setValue = _useForm.setValue;
  var theme = (0, _material.useTheme)();
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    editors = _useState2[0],
    setEditors = _useState2[1];
  var refShouldClose = (0, _react.useRef)(false);
  var refSubmitButton = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRoles = _useState4[0],
    setSelectedRole = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPermission = _useState6[0],
    setSelectedPermission = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    inputCompanyValue = _useState8[0],
    setInputCompanyValue = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    editAddLocationId = _useState0[0],
    setEditAddLocationId = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    company = _useState10[0],
    setCompany = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    locations = _useState12[0],
    setLocations = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    location = _useState14[0],
    setLocation = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    inputLocationValue = _useState16[0],
    setInputLocationValue = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    domains = _useState18[0],
    setDomains = _useState18[1];
  var _useState19 = (0, _react.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    domainInput = _useState20[0],
    setDomainInput = _useState20[1];
  var _useState21 = (0, _react.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    customFields = _useState22[0],
    setCustomFields = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    user = _useState24[0],
    setUser = _useState24[1];
  var _useState25 = (0, _react.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    customTabs = _useState26[0],
    setCustomTabs = _useState26[1];
  var _useState27 = (0, _react.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    companyLogo = _useState28[0],
    setCompanyLogo = _useState28[1];
  var _useState29 = (0, _react.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    tabOptions = _useState30[0],
    setTabOptions = _useState30[1];
  var ITEM_HEIGHT = 48;
  var ITEM_PADDING_TOP = 8;
  var _useState31 = (0, _react.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    tabValue = _useState32[0],
    setTabValue = _useState32[1];
  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
  };
  var fetchCompanyData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return refreshTabOptions();
          case 2:
            _context.next = 4;
            return (0, _authscape.apiService)().get("/UserManagement/GetCompany?companyId=" + companyId);
          case 4:
            response = _context.sent;
            if (response != null && response.status == 200) {
              setCompanyLogo(response.data.logo);
              setLocation(response.data.locations);
              setDomains(response.data.emailDomains || []);
              setCompany(response.data);
              if (response.data.customFields != null) {
                setCustomFields(response.data.customFields);
              }
              setEditors(_objectSpread({}, editors));
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchCompanyData() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (companyId != -1) {
      fetchCompanyData();
    }
  }, [companyId]);
  var fields = ["Title", "IsDeactivated"];
  var refreshTabOptions = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var customTabResponse, dataElement;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _authscape.apiService)().get("/UserManagement/GetCustomTabs?platformType=" + platformType);
          case 2:
            customTabResponse = _context2.sent;
            if (customTabResponse != null && customTabResponse.status == 200) {
              dataElement = customTabResponse.data;
              setTabOptions(dataElement);
              if (dataElement.length > 0) {
                setTabValue(dataElement[0].id);
              }
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function refreshTabOptions() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, _response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(company != null)) {
                _context3.next = 12;
                break;
              }
              if (!(inputLocationValue == null || inputLocationValue == "")) {
                _context3.next = 8;
                break;
              }
              _context3.next = 4;
              return (0, _authscape.apiService)().get("/UserManagement/GetLocations?companyId=" + company.id);
            case 4:
              response = _context3.sent;
              if (response != null && response.status == 200) {
                setLocations(response.data);
              }
              _context3.next = 12;
              break;
            case 8:
              _context3.next = 10;
              return (0, _authscape.apiService)().get("/UserManagement/GetLocations?companyId=" + company.id + "&name=" + inputLocationValue);
            case 10:
              _response = _context3.sent;
              if (_response != null && _response.status == 200) {
                setLocations(_response.data);
              }
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function fetchData() {
        return _ref4.apply(this, arguments);
      };
    }();
    if (company != null || companyId == -1) {
      fetchData();
    }
  }, [company, companyId, inputLocationValue, company]);
  var saveChanges = function saveChanges(shouldClose) {
    refShouldClose.current = shouldClose;
    refSubmitButton.current.click();
  };
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      saveChanges: saveChanges
    };
  });
  (0, _react.useEffect)(function () {
    if (companyId != null && onCustomTabs != null) {
      var fetchData = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var tabs;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return onCustomTabs(platformType, companyId);
              case 2:
                tabs = _context4.sent;
                if (tabs != null) {
                  setCustomTabs(tabs);
                }
              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function fetchData() {
          return _ref5.apply(this, arguments);
        };
      }();
      fetchData();
    }
  }, [companyId]);
  return /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      backgroundColor: theme.palette.background["default"],
      minHeight: '100vh',
      color: theme.palette.text.primary
    }
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit(/*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
        var userCustomFields, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              userCustomFields = [];
              customFields && customFields.forEach(/*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(customField) {
                  var newValue, dateObject, simpleDate, newBlob, _data, _response2;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        newValue =
                        // customField.customFieldType == 2 ? 
                        // draftToHTML(editors[customField.customFieldId].getCurrentContent()) 
                        // : 
                        data[customField.customFieldId];
                        if (!(newValue != null && typeof newValue === 'string')) {
                          _context5.next = 5;
                          break;
                        }
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: newValue.toString()
                        });
                        _context5.next = 26;
                        break;
                      case 5:
                        if (!(newValue != null && typeof newValue === 'boolean')) {
                          _context5.next = 9;
                          break;
                        }
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: newValue.toString()
                        });
                        _context5.next = 26;
                        break;
                      case 9:
                        if (!(newValue != null && _typeof(newValue) === 'object')) {
                          _context5.next = 15;
                          break;
                        }
                        dateObject = new Date(newValue);
                        simpleDate = dateObject.toISOString().split('T')[0];
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: simpleDate.toString()
                        });
                        _context5.next = 26;
                        break;
                      case 15:
                        if (!(newValue instanceof Blob)) {
                          _context5.next = 26;
                          break;
                        }
                        newBlob = new Blob([newValue], {
                          type: newValue.type
                        });
                        _data = new FormData();
                        _data.append("file", newBlob);
                        _data.append("identifier", companyId);
                        _data.append("platformType", 2); // company
                        _data.append("customFieldId", customField.customFieldId);
                        _context5.next = 24;
                        return (0, _authscape.apiService)().post("/UserManagement/UploadCustomFieldImage", _data);
                      case 24:
                        _response2 = _context5.sent;
                        if (_response2 != null && _response2.status == 200) {
                          userCustomFields.push({
                            customFieldId: customField.customFieldId,
                            name: customField.name,
                            isRequired: customField.isRequired,
                            customFieldType: customField.customFieldType,
                            value: _response2.data
                          });
                        }
                      case 26:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x2) {
                  return _ref7.apply(this, arguments);
                };
              }());
              _context6.next = 4;
              return (0, _authscape.apiService)().post("/UserManagement/UpdateCompany", {
                id: companyId,
                title: data.Title,
                isDeactivated: !data.IsActive,
                customFields: userCustomFields,
                locations: location,
                domains: domains
              });
            case 4:
              response = _context6.sent;
              if (response != null && response.status == 200) {
                if (onSaved != null) {
                  onSaved(refShouldClose.current, 2, companyId, response.data);
                }
              }
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }()),
    noValidate: true,
    autoComplete: "off"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: {
      xs: 12,
      md: 4
    },
    sx: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 2,
      border: "1px solid ".concat(theme.palette.divider),
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_authscape.DropZone, {
    image: companyLogo != null ? companyLogo : "",
    text: "Drag 'n' drop your logo here, or click to select your logo",
    onDrop: (/*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(blob) {
        var data, response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              data = new FormData();
              data.append("file", blob);
              data.append("companyId", companyId);
              _context7.next = 5;
              return (0, _authscape.apiService)().post("/UserManagement/UploadLogo", data);
            case 5:
              response = _context7.sent;
              if (response != null && response.status == 200) {
                fetchCompanyData();
              }
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function (_x3) {
        return _ref8.apply(this, arguments);
      };
    }())
  })), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      fontWeight: "bold",
      paddingBottom: 1
    }
  }, "About this company"), renderSystemField(companyId, company, control, errors, register, fields), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      fontWeight: "bold",
      paddingTop: 1,
      paddingBottom: 1
    }
  }, "Locations"), /*#__PURE__*/_react["default"].createElement(_material.Autocomplete, {
    id: "LocationSelect",
    multiple: true,
    getOptionLabel: function getOptionLabel(option) {
      return option.title || option;
    },
    options: [].concat(_toConsumableArray(locations), [{
      title: "Add Location",
      isAddOption: true
    }]) // Add option appended here
    ,
    autoComplete: true,
    includeInputInList: true,
    filterSelectedOptions: true,
    renderTags: function renderTags(value, getTagProps) {
      return value.map(function (option, index) {
        return /*#__PURE__*/_react["default"].createElement(_material.Chip, _extends({}, getTagProps({
          index: index
        }), {
          sx: {
            height: 60
          },
          label: /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center'
            }
          }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
            variant: "body1",
            style: {
              fontWeight: 'bold'
            }
          }, option.title), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
            variant: "body2",
            color: "textSecondary"
          }, option.address))
        }));
      });
    },
    value: location,
    noOptionsText: "No locations",
    onChange: function onChange(event, newValue) {
      if (newValue !== null && newValue !== void 0 && newValue.isAddOption) {
        setEditAddLocationId(-1);
      } else {
        setLocation(newValue); // Select an existing location
      }
    },
    onInputChange: function onInputChange(event, newInputValue) {
      // Optional: Update input handling logic
      setInputCompanyValue(newInputValue);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "Location",
        fullWidth: true
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", _extends({}, props, {
        key: "location-" + option.title
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          display: 'flex',
          width: 44
        }
      }, /*#__PURE__*/_react["default"].createElement(_BusinessRounded["default"], {
        sx: {
          color: 'text.secondary'
        }
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          width: 'calc(100% - 44px)',
          wordWrap: 'break-word'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body2",
        color: option.isAddOption ? "primary" : "text.secondary"
      }, option.title))));
    }
  }), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      fontWeight: "bold",
      paddingTop: 2,
      paddingBottom: 1
    }
  }, "Email Domains"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "textSecondary",
    sx: {
      display: "block",
      paddingBottom: 1
    }
  }, "Add email domains (e.g., example.org, example.com) to automatically map users to this company when they sign up"), /*#__PURE__*/_react["default"].createElement(_material.Autocomplete, {
    id: "DomainSelect",
    multiple: true,
    freeSolo: true,
    options: [],
    value: domains,
    onChange: function onChange(event, newValue) {
      // Validate and format domains
      var formattedDomains = newValue.map(function (domain) {
        var formatted = domain.trim().toLowerCase();
        // Add @ if not present
        if (formatted && !formatted.startsWith('@')) {
          formatted = '@' + formatted;
        }
        return formatted;
      }).filter(function (domain) {
        return domain.length > 1;
      }); // Remove empty or just @ domains

      setDomains(formattedDomains);
    },
    renderTags: function renderTags(value, getTagProps) {
      return value.map(function (option, index) {
        return /*#__PURE__*/_react["default"].createElement(_material.Chip, _extends({}, getTagProps({
          index: index
        }), {
          label: option,
          color: "primary",
          variant: "outlined"
        }));
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "Email Domains",
        placeholder: "Type domain and press Enter (e.g., example.org or example.com)",
        fullWidth: true
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    size: {
      xs: 12,
      md: 8
    },
    sx: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 2,
      border: "1px solid ".concat(theme.palette.divider),
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Tabs, {
    value: tabValue,
    onChange: handleTabChange,
    variant: "fullWidth",
    "aria-label": "basic tabs example",
    centered: true
  }, tabOptions.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Tab, {
      key: tab.id,
      label: tab.name,
      value: tab.id
    });
  }), customTabs != null && customTabs.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Tab, {
      key: "custom-" + tab.id,
      label: tab.title,
      value: tab.id
    });
  }))), /*#__PURE__*/_react["default"].createElement(_system.Box, null, tabOptions.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, tabValue === tab.id && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, customFields && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderCustomField(companyId, company, control, errors, register, setValue, customFields.filter(function (s) {
      return s.tabId == tab.id;
    })))));
  }), customTabs != null && customTabs.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, tabValue === tab.id && /*#__PURE__*/_react["default"].createElement(_system.Box, null, tab.content));
  }))), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    ref: refSubmitButton,
    variant: "contained",
    type: "submit",
    sx: {
      display: "none"
    }
  }, "Save Changes")))), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
    key: "right"
  }, /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "right",
    open: editAddLocationId != null,
    maxWidth: "lg",
    onClose: function onClose() {
      setEditAddLocationId(null);
    },
    sx: {
      "& .MuiDrawer-paper": {
        width: "80vw",
        // Set width to 80% of the viewport width
        maxWidth: "1000px" // Optional: Limit the maximum width
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(UserManagement, {
    platformType: 3,
    companyId: company != null ? company.id : -1,
    defaultIdentifier: editAddLocationId,
    onSaved: (/*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(shouldClose, platformType, id, fields) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              setEditAddLocationId(null);
              _context8.next = 3;
              return fetchUserData();
            case 3:
              onSaved(shouldClose, platformType, id, fields);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      return function (_x4, _x5, _x6, _x7) {
        return _ref9.apply(this, arguments);
      };
    }())
  })))));
});
CompanyEditor.displayName = "CompanyEditor";
var _default = exports["default"] = CompanyEditor;
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrmConnections = CrmConnections;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));
var _Sync = _interopRequireDefault(require("@mui/icons-material/Sync"));
var _Settings = _interopRequireDefault(require("@mui/icons-material/Settings"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _authscape = require("authscape");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _LinearProgress = _interopRequireDefault(require("@mui/material/LinearProgress"));
var _ContentCopy = _interopRequireDefault(require("@mui/icons-material/ContentCopy"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var syncDirectionLabels = {
  0: 'Inbound Only',
  1: 'Outbound Only',
  2: 'Bidirectional'
};
function CrmConnections(_ref) {
  var _syncResult$errors;
  var onSelectConnection = _ref.onSelectConnection;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    connections = _useState2[0],
    setConnections = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    providers = _useState4[0],
    setProviders = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    dialogOpen = _useState8[0],
    setDialogOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    deleteDialogOpen = _useState0[0],
    setDeleteDialogOpen = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    editingConnection = _useState10[0],
    setEditingConnection = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    testResult = _useState12[0],
    setTestResult = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    testing = _useState14[0],
    setTesting = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    syncing = _useState16[0],
    setSyncing = _useState16[1];
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    syncProgress = _useState18[0],
    setSyncProgress = _useState18[1]; // { connectionId: { progress: 0, message: '', currentStep: 0, totalSteps: 0 } }
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    syncResult = _useState20[0],
    setSyncResult = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    syncResultDialogOpen = _useState22[0],
    setSyncResultDialogOpen = _useState22[1];

  // Form state
  var _useState23 = (0, _react.useState)({
      provider: 0,
      displayName: '',
      environmentUrl: '',
      apiKey: '',
      syncDirection: 2,
      syncIntervalMinutes: 15,
      isEnabled: true
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    formData = _useState24[0],
    setFormData = _useState24[1];
  var refreshConnections = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmConnections");
          case 4:
            response = _context.sent;
            if (response && response.status === 200) {
              setConnections(response.data);
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("Error fetching connections:", _context.t0);
          case 11:
            setLoading(false);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function refreshConnections() {
      return _ref2.apply(this, arguments);
    };
  }();
  var fetchProviders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmProviders");
          case 3:
            response = _context2.sent;
            console.log("GetCrmProviders response:", response);
            if (response && response.status === 200) {
              console.log("Providers data:", response.data);
              setProviders(response.data);
            }
            _context2.next = 12;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error("Error fetching providers:", _context2.t0);
            console.error("Error response:", _context2.t0.response);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return function fetchProviders() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    refreshConnections();
    fetchProviders();
  }, []);
  var handleOpenDialog = function handleOpenDialog() {
    var connection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (connection) {
      setEditingConnection(connection);
      setFormData({
        provider: connection.provider,
        displayName: connection.displayName || '',
        environmentUrl: connection.environmentUrl || '',
        apiKey: '',
        syncDirection: connection.syncDirection,
        syncIntervalMinutes: connection.syncIntervalMinutes,
        isEnabled: connection.isEnabled
      });
    } else {
      setEditingConnection(null);
      setFormData({
        provider: 0,
        displayName: '',
        environmentUrl: '',
        apiKey: '',
        syncDirection: 2,
        syncIntervalMinutes: 15,
        isEnabled: true
      });
    }
    setTestResult(null);
    setDialogOpen(true);
  };
  var handleCloseDialog = function handleCloseDialog() {
    setDialogOpen(false);
    setEditingConnection(null);
    setTestResult(null);
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var updateData;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!editingConnection) {
              _context3.next = 8;
              break;
            }
            // Build update request - only include credentials if they were changed
            updateData = {
              displayName: formData.displayName,
              environmentUrl: formData.environmentUrl,
              syncDirection: formData.syncDirection,
              syncIntervalMinutes: formData.syncIntervalMinutes,
              isEnabled: formData.isEnabled
            }; // Include API key if entered (for updating existing connections)
            if (formData.apiKey) updateData.apiKey = formData.apiKey;
            _context3.next = 6;
            return (0, _authscape.apiService)().put("/UserManagement/UpdateCrmConnection?id=".concat(editingConnection.id), updateData);
          case 6:
            _context3.next = 10;
            break;
          case 8:
            _context3.next = 10;
            return (0, _authscape.apiService)().post("/UserManagement/CreateCrmConnection", formData);
          case 10:
            _context3.next = 12;
            return refreshConnections();
          case 12:
            handleCloseDialog();
            _context3.next = 18;
            break;
          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            console.error("Error saving connection:", _context3.t0);
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 15]]);
    }));
    return function handleSave() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/DeleteCrmConnection?id=".concat(id));
          case 3:
            _context4.next = 5;
            return refreshConnections();
          case 5:
            setDeleteDialogOpen(null);
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.error("Error deleting connection:", _context4.t0);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function handleDelete(_x) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleTestConnection = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setTesting(true);
            setTestResult(null);
            _context5.prev = 2;
            _context5.next = 5;
            return (0, _authscape.apiService)().post("/UserManagement/TestCrmConnection?id=".concat(id));
          case 5:
            response = _context5.sent;
            if (response && response.status === 200) {
              setTestResult(response.data);
            }
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            setTestResult({
              success: false,
              message: _context5.t0.message || 'Test failed'
            });
          case 12:
            setTesting(false);
          case 13:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[2, 9]]);
    }));
    return function handleTestConnection(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  var pollSyncProgress = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(connectionId) {
      var response, progressData;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmSyncProgress?connectionId=".concat(connectionId));
          case 3:
            response = _context6.sent;
            if (!(response && response.status === 200)) {
              _context6.next = 8;
              break;
            }
            progressData = response.data;
            setSyncProgress(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, connectionId, {
                progress: progressData.progress,
                message: progressData.message,
                currentStep: progressData.currentStep,
                totalSteps: progressData.totalSteps
              }));
            });
            return _context6.abrupt("return", progressData.isRunning);
          case 8:
            _context6.next = 13;
            break;
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.error("Error polling sync progress:", _context6.t0);
          case 13:
            return _context6.abrupt("return", false);
          case 14:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 10]]);
    }));
    return function pollSyncProgress(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleSync = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(conn) {
      var pollInterval, response, _error$response, _error$response$data, _error$response2, _error$response2$data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            setSyncing(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, conn.id, true));
            });
            setSyncProgress(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, conn.id, {
                progress: 0,
                message: 'Starting sync...',
                currentStep: 0,
                totalSteps: 0
              }));
            });
            setSyncResult(null);

            // Start polling for progress
            pollInterval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var isRunning;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return pollSyncProgress(conn.id);
                  case 2:
                    isRunning = _context7.sent;
                    if (!isRunning) {
                      clearInterval(pollInterval);
                    }
                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            })), 500); // Poll every 500ms
            _context8.prev = 4;
            _context8.next = 7;
            return (0, _authscape.apiService)().post("/UserManagement/SyncCrmConnection?id=".concat(conn.id));
          case 7:
            response = _context8.sent;
            clearInterval(pollInterval); // Stop polling when sync completes
            if (!(response && response.status === 200)) {
              _context8.next = 16;
              break;
            }
            setSyncResult(_objectSpread(_objectSpread({}, response.data), {}, {
              connectionName: conn.displayName || 'CRM'
            }));
            setSyncResultDialogOpen(true);
            // Refresh connections to update last sync time
            _context8.next = 14;
            return refreshConnections();
          case 14:
            _context8.next = 17;
            break;
          case 16:
            if (response && response.data) {
              setSyncResult({
                success: false,
                message: response.data.error || 'Sync failed',
                connectionName: conn.displayName || 'CRM'
              });
              setSyncResultDialogOpen(true);
            }
          case 17:
            _context8.next = 25;
            break;
          case 19:
            _context8.prev = 19;
            _context8.t0 = _context8["catch"](4);
            clearInterval(pollInterval); // Stop polling on error
            console.error("Error syncing connection:", _context8.t0);
            setSyncResult({
              success: false,
              message: ((_error$response = _context8.t0.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error) || _context8.t0.message || 'Sync failed',
              connectionName: conn.displayName || 'CRM',
              errors: ((_error$response2 = _context8.t0.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.errors) || []
            });
            setSyncResultDialogOpen(true);
          case 25:
            setSyncing(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, conn.id, false));
            });
            setSyncProgress(function (prev) {
              var newProgress = _objectSpread({}, prev);
              delete newProgress[conn.id];
              return newProgress;
            });
          case 27:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[4, 19]]);
    }));
    return function handleSync(_x4) {
      return _ref8.apply(this, arguments);
    };
  }();
  var getProviderName = function getProviderName(type) {
    var provider = providers.find(function (p) {
      return p.type === type;
    });
    return provider ? provider.name : "Provider ".concat(type);
  };
  var selectedProvider = providers.find(function (p) {
    return p.type === formData.provider;
  });
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5"
  }, "CRM Connections"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return handleOpenDialog();
    }
  }, "Add Connection")), loading ? /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      p: 4
    }
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null)) : connections.length === 0 ? /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "info"
  }, "No CRM connections configured. Click \"Add Connection\" to create one.") : /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      position: 'relative'
    }
  }, Object.values(syncing).some(Boolean) && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      mb: 2
    }
  }, Object.entries(syncProgress).map(function (_ref0) {
    var _ref1 = _slicedToArray(_ref0, 2),
      connId = _ref1[0],
      progress = _ref1[1];
    return /*#__PURE__*/_react["default"].createElement(_system.Box, {
      key: connId,
      sx: {
        mb: 1
      }
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 0.5
      }
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      color: "text.secondary"
    }, progress.message || 'Syncing...'), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      fontWeight: "medium"
    }, progress.progress, "%")), /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], {
      variant: "determinate",
      value: progress.progress,
      sx: {
        height: 8,
        borderRadius: 4
      }
    }));
  })), /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    component: _Paper["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], null, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Connection ID"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Name"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Provider"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Environment"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Sync Direction"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Status"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Last Sync"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    align: "right"
  }, "Actions"))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, connections.map(function (conn) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: conn.id,
      hover: true
    }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Click to copy"
    }, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      label: conn.id,
      size: "small",
      variant: "outlined",
      onClick: function onClick() {
        navigator.clipboard.writeText(conn.id.toString());
      },
      sx: {
        cursor: 'pointer',
        fontFamily: 'monospace'
      }
    }))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, conn.displayName || 'Unnamed'), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, getProviderName(conn.provider)), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, conn.environmentUrl || '-'), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, syncDirectionLabels[conn.syncDirection]), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      label: conn.isEnabled ? 'Enabled' : 'Disabled',
      color: conn.isEnabled ? 'success' : 'default',
      size: "small"
    })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, conn.lastSyncAt ? new Date(conn.lastSyncAt).toLocaleString() : 'Never'), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      align: "right"
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      onClick: function onClick() {
        return handleSync(conn);
      },
      disabled: syncing[conn.id] || !conn.isEnabled,
      title: conn.isEnabled ? "Sync All Mapped Entities" : "Enable connection to sync",
      color: "primary"
    }, syncing[conn.id] ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      size: 20
    }) : /*#__PURE__*/_react["default"].createElement(_Sync["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      onClick: function onClick() {
        return onSelectConnection && onSelectConnection(conn);
      },
      title: "Configure Mappings"
    }, /*#__PURE__*/_react["default"].createElement(_Settings["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      onClick: function onClick() {
        return handleOpenDialog(conn);
      },
      title: "Edit"
    }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      color: "error",
      onClick: function onClick() {
        return setDeleteDialogOpen(conn);
      },
      title: "Delete"
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null))));
  }))))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: dialogOpen,
    onClose: handleCloseDialog,
    maxWidth: "sm",
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, editingConnection ? 'Edit CRM Connection' : 'Add CRM Connection'), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    spacing: 2,
    sx: {
      mt: 1
    }
  }, editingConnection && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    variant: "outlined",
    sx: {
      p: 2,
      bgcolor: 'action.hover'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle2",
    color: "text.secondary",
    gutterBottom: true
  }, "Connection ID"), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    sx: {
      fontFamily: 'monospace',
      fontWeight: 600
    }
  }, editingConnection.id), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Copy to clipboard"
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: function onClick() {
      navigator.clipboard.writeText(editingConnection.id.toString());
    }
  }, /*#__PURE__*/_react["default"].createElement(_ContentCopy["default"], {
    fontSize: "small"
  })))), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    color: "text.secondary"
  }, "Use this ID when setting up webhooks in Power Automate")), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true,
    disabled: !!editingConnection
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, "Provider"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: formData.provider,
    label: "Provider",
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        provider: e.target.value
      }));
    }
  }, providers.map(function (p) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: p.type,
      value: p.type
    }, p.name);
  }))), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "Display Name",
    value: formData.displayName,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        displayName: e.target.value
      }));
    },
    fullWidth: true
  }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "Environment URL",
    value: formData.environmentUrl,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        environmentUrl: e.target.value
      }));
    },
    fullWidth: true,
    placeholder: "e.g., https://org.crm.dynamics.com"
  }), (selectedProvider === null || selectedProvider === void 0 ? void 0 : selectedProvider.supportsApiKey) && /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "API Key",
    type: "password",
    value: formData.apiKey,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        apiKey: e.target.value
      }));
    },
    fullWidth: true,
    helperText: editingConnection ? "Leave blank to keep existing" : ""
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, "Sync Direction"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: formData.syncDirection,
    label: "Sync Direction",
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        syncDirection: e.target.value
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 0
  }, "Inbound Only (CRM to AuthScape)"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 1
  }, "Outbound Only (AuthScape to CRM)"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 2
  }, "Bidirectional"))), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: formData.isEnabled,
      onChange: function onChange(e) {
        return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          isEnabled: e.target.checked
        }));
      }
    }),
    label: "Enabled"
  }), editingConnection && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    onClick: function onClick() {
      return handleTestConnection(editingConnection.id);
    },
    disabled: testing,
    startIcon: testing ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      size: 16
    }) : /*#__PURE__*/_react["default"].createElement(_Sync["default"], null)
  }, "Test Connection"), testResult && /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: testResult.success ? 'success' : 'error',
    sx: {
      mt: 1
    }
  }, testResult.message)))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleCloseDialog
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleSave,
    variant: "contained"
  }, editingConnection ? 'Update' : 'Create'))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: !!deleteDialogOpen,
    onClose: function onClose() {
      return setDeleteDialogOpen(null);
    }
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, "Delete Connection?"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, "Are you sure you want to delete the connection \"", deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.displayName, "\"? This will also delete all entity and field mappings associated with this connection.")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setDeleteDialogOpen(null);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return handleDelete(deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.id);
    },
    color: "error",
    variant: "contained"
  }, "Delete"))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: syncResultDialogOpen,
    onClose: function onClose() {
      return setSyncResultDialogOpen(false);
    },
    maxWidth: "sm",
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, "Sync ", syncResult !== null && syncResult !== void 0 && syncResult.success ? 'Completed' : 'Failed', " - ", syncResult === null || syncResult === void 0 ? void 0 : syncResult.connectionName), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: syncResult !== null && syncResult !== void 0 && syncResult.success ? 'success' : 'error',
    sx: {
      mb: 2
    }
  }, syncResult === null || syncResult === void 0 ? void 0 : syncResult.message), (syncResult === null || syncResult === void 0 ? void 0 : syncResult.totalProcessed) > 0 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle2",
    gutterBottom: true
  }, "Sync Statistics:"), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Total Processed:"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, syncResult.totalProcessed)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Successful:"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "success.main"
  }, syncResult.successCount)), syncResult.failedCount > 0 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Failed:"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "error.main"
  }, syncResult.failedCount)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Created:"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, syncResult.createdCount)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Updated:"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, syncResult.updatedCount)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Inbound (CRM to AuthScape):"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, syncResult.inboundCount)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Outbound (AuthScape to CRM):"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, syncResult.outboundCount)), syncResult.durationMs > 0 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, "Duration:"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, (syncResult.durationMs / 1000).toFixed(2), "s")))), (syncResult === null || syncResult === void 0 ? void 0 : (_syncResult$errors = syncResult.errors) === null || _syncResult$errors === void 0 ? void 0 : _syncResult$errors.length) > 0 && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle2",
    color: "error",
    gutterBottom: true
  }, "Errors:"), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    variant: "outlined",
    sx: {
      p: 1,
      maxHeight: 150,
      overflow: 'auto'
    }
  }, syncResult.errors.map(function (err, idx) {
    return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      key: idx,
      variant: "caption",
      display: "block",
      color: "error.main"
    }, err);
  })))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setSyncResultDialogOpen(false);
    },
    variant: "contained"
  }, "Close"))));
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrmEntityMappings = CrmEntityMappings;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));
var _ArrowBack = _interopRequireDefault(require("@mui/icons-material/ArrowBack"));
var _List = _interopRequireDefault(require("@mui/icons-material/List"));
var _Sync = _interopRequireDefault(require("@mui/icons-material/Sync"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _authscape = require("authscape");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var signalR = _interopRequireWildcard(require("@microsoft/signalr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var syncDirectionLabels = {
  0: 'Inbound',
  1: 'Outbound',
  2: 'Bidirectional'
};
var authScapeEntityLabels = {
  0: 'User',
  1: 'Company',
  2: 'Location'
};
function CrmEntityMappings(_ref) {
  var connection = _ref.connection,
    onBack = _ref.onBack,
    onSelectEntityMapping = _ref.onSelectEntityMapping;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    entityMappings = _useState2[0],
    setEntityMappings = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    crmEntities = _useState4[0],
    setCrmEntities = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    authScapeTypes = _useState6[0],
    setAuthScapeTypes = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    dialogOpen = _useState0[0],
    setDialogOpen = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    deleteDialogOpen = _useState10[0],
    setDeleteDialogOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    editingMapping = _useState12[0],
    setEditingMapping = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    crmEntitiesError = _useState14[0],
    setCrmEntitiesError = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    crmEntitiesLoading = _useState16[0],
    setCrmEntitiesLoading = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    syncingMappingId = _useState18[0],
    setSyncingMappingId = _useState18[1];
  var _useState19 = (0, _react.useState)({
      open: false,
      message: '',
      severity: 'info'
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    snackbar = _useState20[0],
    setSnackbar = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    syncProgress = _useState22[0],
    setSyncProgress = _useState22[1]; // { syncId, percentComplete, currentOperation, currentRecord, totalRecords }
  var hubConnectionRef = (0, _react.useRef)(null);

  // Form state
  var _useState23 = (0, _react.useState)({
      crmEntityName: '',
      crmEntityDisplayName: '',
      authScapeEntityType: 0,
      syncDirection: 2,
      isEnabled: true,
      crmFilterExpression: ''
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    formData = _useState24[0],
    setFormData = _useState24[1];
  var refreshMappings = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmEntityMappings?connectionId=".concat(connection.id));
          case 4:
            response = _context.sent;
            if (response && response.status === 200) {
              setEntityMappings(response.data);
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("Error fetching entity mappings:", _context.t0);
          case 11:
            setLoading(false);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function refreshMappings() {
      return _ref2.apply(this, arguments);
    };
  }();
  var fetchCrmEntities = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, _error$response, _error$response$data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setCrmEntitiesLoading(true);
            setCrmEntitiesError(null);
            _context2.prev = 2;
            console.log("Fetching CRM entities for connection:", connection.id);
            _context2.next = 6;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmAvailableEntities?connectionId=".concat(connection.id));
          case 6:
            response = _context2.sent;
            console.log("CRM entities response:", response);
            if (response && response.status === 200) {
              console.log("CRM entities data:", response.data);
              setCrmEntities(response.data);
            } else if (response && response.data && response.data.error) {
              // Handle error response from API
              setCrmEntitiesError(response.data.error);
              console.error("CRM entities error:", response.data.error);
            } else if (response && response.status >= 400) {
              setCrmEntitiesError("Failed to fetch entities (status: ".concat(response.status, ")"));
            }
            _context2.next = 16;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](2);
            console.error("Error fetching CRM entities:", _context2.t0);
            console.error("Error response:", _context2.t0.response);
            setCrmEntitiesError(((_error$response = _context2.t0.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error) || _context2.t0.message || "Failed to fetch CRM entities");
          case 16:
            setCrmEntitiesLoading(false);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 11]]);
    }));
    return function fetchCrmEntities() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fetchAuthScapeTypes = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _authscape.apiService)().get('/UserManagement/GetCrmAuthScapeEntityTypes');
          case 3:
            response = _context3.sent;
            if (response && response.status === 200) {
              setAuthScapeTypes(response.data);
            }
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error("Error fetching AuthScape types:", _context3.t0);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function fetchAuthScapeTypes() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (connection) {
      refreshMappings();
      fetchCrmEntities();
      fetchAuthScapeTypes();
    }
  }, [connection]);

  // Setup SignalR connection for sync progress updates
  (0, _react.useEffect)(function () {
    var setupSignalR = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var apiUri, hubUrl, hubConnection;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              apiUri = process.env.apiUri || 'http://localhost:54218';
              hubUrl = "".concat(apiUri, "/crmsync");
              hubConnection = new signalR.HubConnectionBuilder().withUrl(hubUrl).withAutomaticReconnect().build();
              hubConnection.on('OnSyncProgress', function (progress) {
                console.log('Sync progress update:', progress);
                setSyncProgress(progress);
                if (progress.status === 'Completed' || progress.status === 'Failed') {
                  // Clear progress after a short delay
                  setTimeout(function () {
                    setSyncProgress(null);
                    setSyncingMappingId(null);
                  }, 2000);
                }
              });
              _context4.next = 7;
              return hubConnection.start();
            case 7:
              console.log('SignalR connected for CRM sync progress');
              hubConnectionRef.current = hubConnection;
              _context4.next = 14;
              break;
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              console.error('SignalR connection error:', _context4.t0);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 11]]);
      }));
      return function setupSignalR() {
        return _ref5.apply(this, arguments);
      };
    }();
    setupSignalR();
    return function () {
      if (hubConnectionRef.current) {
        hubConnectionRef.current.stop();
      }
    };
  }, []);
  var handleOpenDialog = function handleOpenDialog() {
    var mapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (mapping) {
      setEditingMapping(mapping);
      setFormData({
        crmEntityName: mapping.crmEntityName,
        crmEntityDisplayName: mapping.crmEntityDisplayName || '',
        authScapeEntityType: mapping.authScapeEntityType,
        syncDirection: mapping.syncDirection,
        isEnabled: mapping.isEnabled,
        crmFilterExpression: mapping.crmFilterExpression || ''
      });
    } else {
      setEditingMapping(null);
      setFormData({
        crmEntityName: '',
        crmEntityDisplayName: '',
        authScapeEntityType: 0,
        syncDirection: 2,
        isEnabled: true,
        crmFilterExpression: ''
      });
    }
    setDialogOpen(true);
  };
  var handleCloseDialog = function handleCloseDialog() {
    setDialogOpen(false);
    setEditingMapping(null);
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!editingMapping) {
              _context5.next = 6;
              break;
            }
            _context5.next = 4;
            return (0, _authscape.apiService)().put("/UserManagement/UpdateCrmEntityMapping?id=".concat(editingMapping.id), {
              crmEntityDisplayName: formData.crmEntityDisplayName,
              syncDirection: formData.syncDirection,
              isEnabled: formData.isEnabled,
              crmFilterExpression: formData.crmFilterExpression
            });
          case 4:
            _context5.next = 8;
            break;
          case 6:
            _context5.next = 8;
            return (0, _authscape.apiService)().post("/UserManagement/CreateCrmEntityMapping", {
              connectionId: connection.id,
              crmEntityName: formData.crmEntityName,
              crmEntityDisplayName: formData.crmEntityDisplayName,
              authScapeEntityType: formData.authScapeEntityType,
              syncDirection: formData.syncDirection,
              isEnabled: formData.isEnabled,
              crmFilterExpression: formData.crmFilterExpression
            });
          case 8:
            _context5.next = 10;
            return refreshMappings();
          case 10:
            handleCloseDialog();
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            console.error("Error saving entity mapping:", _context5.t0);
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleSave() {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/DeleteCrmEntityMapping?id=".concat(id));
          case 3:
            _context6.next = 5;
            return refreshMappings();
          case 5:
            setDeleteDialogOpen(null);
            _context6.next = 11;
            break;
          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.error("Error deleting entity mapping:", _context6.t0);
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 8]]);
    }));
    return function handleDelete(_x) {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleSyncEntityMapping = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(mapping) {
      var response, result, _result$stats, _error$response2, _error$response2$data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            setSyncingMappingId(mapping.id);
            setSyncProgress({
              percentComplete: 0,
              currentOperation: 'Starting sync...',
              totalRecords: 0,
              currentRecord: 0
            });
            _context7.prev = 2;
            if (!hubConnectionRef.current) {
              _context7.next = 6;
              break;
            }
            _context7.next = 6;
            return hubConnectionRef.current.invoke('JoinSyncProgress', "entityMapping_".concat(mapping.id));
          case 6:
            _context7.next = 8;
            return (0, _authscape.apiService)().post("/UserManagement/TriggerCrmEntityMappingSync?entityMappingId=".concat(mapping.id, "&fullSync=true"));
          case 8:
            response = _context7.sent;
            if (!(response && response.status === 200)) {
              _context7.next = 15;
              break;
            }
            result = response.data; // Join the sync-specific group if we got a syncId
            if (!(result.syncId && hubConnectionRef.current)) {
              _context7.next = 14;
              break;
            }
            _context7.next = 14;
            return hubConnectionRef.current.invoke('JoinSyncProgress', result.syncId);
          case 14:
            if (result.success) {
              setSnackbar({
                open: true,
                message: "Sync completed: ".concat(((_result$stats = result.stats) === null || _result$stats === void 0 ? void 0 : _result$stats.successCount) || 0, " records synced"),
                severity: 'success'
              });
            } else {
              setSnackbar({
                open: true,
                message: result.message || 'Sync completed with errors',
                severity: 'warning'
              });
            }
          case 15:
            _context7.next = 23;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](2);
            console.error("Error syncing entity mapping:", _context7.t0);
            setSnackbar({
              open: true,
              message: ((_error$response2 = _context7.t0.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || 'Sync failed',
              severity: 'error'
            });
            setSyncProgress(null);
            setSyncingMappingId(null);
          case 23:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[2, 17]]);
    }));
    return function handleSyncEntityMapping(_x2) {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleCrmEntitySelect = function handleCrmEntitySelect(event, value) {
    if (value) {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        crmEntityName: value.logicalName,
        crmEntityDisplayName: value.displayName
      }));
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    alignItems: "center",
    spacing: 2,
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: onBack
  }, /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flex: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5"
  }, "Entity Mappings"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, connection.displayName || 'Unnamed Connection')), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return handleOpenDialog();
    }
  }, "Add Entity Mapping")), loading ? /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      p: 4
    }
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null)) : entityMappings.length === 0 ? /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "info"
  }, "No entity mappings configured. Click \"Add Entity Mapping\" to map a CRM entity to an AuthScape entity type.") : /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    component: _Paper["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], null, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "CRM Entity"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "AuthScape Type"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Sync Direction"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Status"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Filter"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    align: "right"
  }, "Actions"))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, entityMappings.map(function (mapping) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: mapping.id
    }, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      hover: true
    }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      fontWeight: "medium"
    }, mapping.crmEntityDisplayName || mapping.crmEntityName), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption",
      color: "text.secondary"
    }, mapping.crmEntityName))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      label: authScapeEntityLabels[mapping.authScapeEntityType],
      size: "small",
      color: "primary",
      variant: "outlined"
    })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, syncDirectionLabels[mapping.syncDirection]), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      label: mapping.isEnabled ? 'Enabled' : 'Disabled',
      color: mapping.isEnabled ? 'success' : 'default',
      size: "small"
    })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, mapping.crmFilterExpression ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption",
      sx: {
        fontFamily: 'monospace'
      }
    }, mapping.crmFilterExpression.substring(0, 30), mapping.crmFilterExpression.length > 30 ? '...' : '') : '-'), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      align: "right"
    }, /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
      title: "Field Mappings"
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      onClick: function onClick() {
        return onSelectEntityMapping && onSelectEntityMapping(mapping);
      }
    }, /*#__PURE__*/_react["default"].createElement(_List["default"], null))), /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
      title: "Sync this entity"
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      onClick: function onClick() {
        return handleSyncEntityMapping(mapping);
      },
      disabled: syncingMappingId === mapping.id || !mapping.isEnabled,
      color: "primary"
    }, syncingMappingId === mapping.id ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      size: 20
    }) : /*#__PURE__*/_react["default"].createElement(_Sync["default"], null)))), /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
      title: "Edit"
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      onClick: function onClick() {
        return handleOpenDialog(mapping);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null))), /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
      title: "Delete"
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      color: "error",
      onClick: function onClick() {
        return setDeleteDialogOpen(mapping);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null))))), syncingMappingId === mapping.id && syncProgress && /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      colSpan: 7,
      sx: {
        py: 1,
        px: 2
      }
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        mb: 0.5
      }
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption",
      color: "text.secondary"
    }, syncProgress.currentOperation || 'Syncing...'), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption",
      color: "text.secondary"
    }, syncProgress.percentComplete, "% (", syncProgress.currentRecord || 0, " / ", syncProgress.totalRecords || '?', ")")), /*#__PURE__*/_react["default"].createElement(_material.LinearProgress, {
      variant: "determinate",
      value: syncProgress.percentComplete || 0,
      sx: {
        height: 8,
        borderRadius: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        '& .MuiLinearProgress-bar': {
          borderRadius: 1,
          backgroundColor: syncProgress.status === 'Failed' ? 'error.main' : syncProgress.status === 'Completed' ? 'success.main' : 'primary.main'
        }
      }
    })))));
  })))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: dialogOpen,
    onClose: handleCloseDialog,
    maxWidth: "sm",
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, editingMapping ? 'Edit Entity Mapping' : 'Add Entity Mapping'), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    spacing: 2,
    sx: {
      mt: 1
    }
  }, !editingMapping ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, crmEntitiesError && /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "error",
    sx: {
      mb: 2
    }
  }, crmEntitiesError), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    options: crmEntities,
    getOptionLabel: function getOptionLabel(option) {
      return "".concat(option.displayName, " (").concat(option.logicalName, ")");
    },
    onChange: handleCrmEntitySelect,
    loading: crmEntitiesLoading,
    noOptionsText: crmEntitiesError ? "Error loading entities" : "No entities found",
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "CRM Entity",
        placeholder: "Select a CRM entity",
        error: !!crmEntitiesError,
        helperText: crmEntitiesError ? "Check connection credentials" : "",
        InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
          endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, crmEntitiesLoading ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        })
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", props, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body2"
      }, option.displayName), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        color: "text.secondary"
      }, option.logicalName)));
    }
  })) : /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "CRM Entity",
    value: formData.crmEntityDisplayName || formData.crmEntityName,
    disabled: true,
    fullWidth: true
  }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "Display Name (optional)",
    value: formData.crmEntityDisplayName,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        crmEntityDisplayName: e.target.value
      }));
    },
    fullWidth: true
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true,
    disabled: !!editingMapping
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, "AuthScape Entity Type"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: formData.authScapeEntityType,
    label: "AuthScape Entity Type",
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        authScapeEntityType: e.target.value
      }));
    }
  }, authScapeTypes.map(function (type) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: type.type,
      value: type.type
    }, type.name);
  }))), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, "Sync Direction"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: formData.syncDirection,
    label: "Sync Direction",
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        syncDirection: e.target.value
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 0
  }, "Inbound Only (CRM to AuthScape)"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 1
  }, "Outbound Only (AuthScape to CRM)"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 2
  }, "Bidirectional"))), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "Filter Expression (optional)",
    value: formData.crmFilterExpression,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        crmFilterExpression: e.target.value
      }));
    },
    fullWidth: true,
    multiline: true,
    rows: 2,
    placeholder: "e.g., statecode eq 0 (OData filter for Dynamics)",
    helperText: "Filter which CRM records to sync"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: formData.isEnabled,
      onChange: function onChange(e) {
        return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          isEnabled: e.target.checked
        }));
      }
    }),
    label: "Enabled"
  }))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleCloseDialog
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleSave,
    variant: "contained"
  }, editingMapping ? 'Update' : 'Create'))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: !!deleteDialogOpen,
    onClose: function onClose() {
      return setDeleteDialogOpen(null);
    }
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, "Delete Entity Mapping?"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, "Are you sure you want to delete the mapping for \"", (deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.crmEntityDisplayName) || (deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.crmEntityName), "\"? This will also delete all field mappings associated with this entity.")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setDeleteDialogOpen(null);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return handleDelete(deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.id);
    },
    color: "error",
    variant: "contained"
  }, "Delete"))), /*#__PURE__*/_react["default"].createElement(_material.Snackbar, {
    open: snackbar.open,
    autoHideDuration: 6000,
    onClose: function onClose() {
      return setSnackbar(_objectSpread(_objectSpread({}, snackbar), {}, {
        open: false
      }));
    },
    message: snackbar.message,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    }
  }));
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrmFieldMappings = CrmFieldMappings;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));
var _ArrowBack = _interopRequireDefault(require("@mui/icons-material/ArrowBack"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _AutoFixHigh = _interopRequireDefault(require("@mui/icons-material/AutoFixHigh"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _authscape = require("authscape");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _ArrowForward = _interopRequireDefault(require("@mui/icons-material/ArrowForward"));
var _SyncAlt = _interopRequireDefault(require("@mui/icons-material/SyncAlt"));
var _ArrowBackIos = _interopRequireDefault(require("@mui/icons-material/ArrowBackIos"));
var _Link = _interopRequireDefault(require("@mui/icons-material/Link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var syncDirectionLabels = {
  0: 'Inbound',
  1: 'Outbound',
  2: 'Bidirectional'
};
var getSyncDirectionIcon = function getSyncDirectionIcon(direction) {
  switch (direction) {
    case 0:
      return /*#__PURE__*/_react["default"].createElement(_ArrowBackIos["default"], {
        fontSize: "small"
      });
    case 1:
      return /*#__PURE__*/_react["default"].createElement(_ArrowForward["default"], {
        fontSize: "small"
      });
    case 2:
      return /*#__PURE__*/_react["default"].createElement(_SyncAlt["default"], {
        fontSize: "small"
      });
    default:
      return /*#__PURE__*/_react["default"].createElement(_SyncAlt["default"], {
        fontSize: "small"
      });
  }
};
function CrmFieldMappings(_ref) {
  var connection = _ref.connection,
    entityMapping = _ref.entityMapping,
    onBack = _ref.onBack,
    onOpenRelationships = _ref.onOpenRelationships;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    fieldMappings = _useState2[0],
    setFieldMappings = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    crmFields = _useState4[0],
    setCrmFields = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    authScapeFields = _useState6[0],
    setAuthScapeFields = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    transformations = _useState8[0],
    setTransformations = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    dialogOpen = _useState10[0],
    setDialogOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    deleteDialogOpen = _useState12[0],
    setDeleteDialogOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    editingMapping = _useState14[0],
    setEditingMapping = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loadingDefaults = _useState16[0],
    setLoadingDefaults = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    crmFieldsLoading = _useState18[0],
    setCrmFieldsLoading = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    crmFieldsError = _useState20[0],
    setCrmFieldsError = _useState20[1];

  // Form state
  var _useState21 = (0, _react.useState)({
      authScapeField: '',
      crmField: '',
      syncDirection: 2,
      isEnabled: true,
      transformationType: '',
      transformationConfig: ''
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    formData = _useState22[0],
    setFormData = _useState22[1];
  var refreshMappings = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmFieldMappings?entityMappingId=".concat(entityMapping.id));
          case 4:
            response = _context.sent;
            if (response && response.status === 200) {
              setFieldMappings(response.data);
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("Error fetching field mappings:", _context.t0);
          case 11:
            setLoading(false);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function refreshMappings() {
      return _ref2.apply(this, arguments);
    };
  }();
  var fetchCrmFields = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, _error$response, _error$response$data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setCrmFieldsLoading(true);
            setCrmFieldsError(null);
            _context2.prev = 2;
            console.log("Fetching CRM fields for entity:", entityMapping.crmEntityName);
            _context2.next = 6;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmEntityFields?connectionId=".concat(connection.id, "&entityName=").concat(entityMapping.crmEntityName));
          case 6:
            response = _context2.sent;
            console.log("CRM fields response:", response);
            if (response && response.status === 200) {
              console.log("CRM fields data:", response.data);
              setCrmFields(response.data);
            } else if (response && response.data && response.data.error) {
              setCrmFieldsError(response.data.error);
              console.error("CRM fields error:", response.data.error);
            }
            _context2.next = 16;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](2);
            console.error("Error fetching CRM fields:", _context2.t0);
            console.error("Error response:", _context2.t0.response);
            setCrmFieldsError(((_error$response = _context2.t0.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error) || _context2.t0.message || "Failed to fetch CRM fields");
          case 16:
            setCrmFieldsLoading(false);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 11]]);
    }));
    return function fetchCrmFields() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fetchAuthScapeFields = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, entityType;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _authscape.apiService)().get('/UserManagement/GetCrmAuthScapeEntityTypes');
          case 3:
            response = _context3.sent;
            if (response && response.status === 200) {
              entityType = response.data.find(function (t) {
                return t.type === entityMapping.authScapeEntityType;
              });
              if (entityType) {
                setAuthScapeFields(entityType.availableFields);
              }
            }
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error("Error fetching AuthScape fields:", _context3.t0);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    return function fetchAuthScapeFields() {
      return _ref4.apply(this, arguments);
    };
  }();
  var fetchTransformations = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _authscape.apiService)().get('/UserManagement/GetCrmTransformationTypes');
          case 3:
            response = _context4.sent;
            if (response && response.status === 200) {
              setTransformations(response.data);
            }
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error("Error fetching transformations:", _context4.t0);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function fetchTransformations() {
      return _ref5.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (entityMapping) {
      refreshMappings();
      fetchCrmFields();
      fetchAuthScapeFields();
      fetchTransformations();
    }
  }, [entityMapping]);
  var handleOpenDialog = function handleOpenDialog() {
    var mapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (mapping) {
      setEditingMapping(mapping);
      setFormData({
        authScapeField: mapping.authScapeField,
        crmField: mapping.crmField,
        syncDirection: mapping.syncDirection,
        isEnabled: mapping.isEnabled,
        transformationType: mapping.transformationType || '',
        transformationConfig: mapping.transformationConfig || ''
      });
    } else {
      setEditingMapping(null);
      setFormData({
        authScapeField: '',
        crmField: '',
        syncDirection: 2,
        isEnabled: true,
        transformationType: '',
        transformationConfig: ''
      });
    }
    setDialogOpen(true);
  };
  var handleCloseDialog = function handleCloseDialog() {
    setDialogOpen(false);
    setEditingMapping(null);
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (!editingMapping) {
              _context5.next = 6;
              break;
            }
            _context5.next = 4;
            return (0, _authscape.apiService)().put("/UserManagement/UpdateCrmFieldMapping?id=".concat(editingMapping.id), {
              authScapeField: formData.authScapeField,
              crmField: formData.crmField,
              syncDirection: formData.syncDirection,
              isEnabled: formData.isEnabled,
              transformationType: formData.transformationType || null,
              transformationConfig: formData.transformationConfig || null
            });
          case 4:
            _context5.next = 8;
            break;
          case 6:
            _context5.next = 8;
            return (0, _authscape.apiService)().post("/UserManagement/CreateCrmFieldMapping", {
              entityMappingId: entityMapping.id,
              authScapeField: formData.authScapeField,
              crmField: formData.crmField,
              syncDirection: formData.syncDirection,
              isEnabled: formData.isEnabled,
              transformationType: formData.transformationType || null,
              transformationConfig: formData.transformationConfig || null
            });
          case 8:
            _context5.next = 10;
            return refreshMappings();
          case 10:
            handleCloseDialog();
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            console.error("Error saving field mapping:", _context5.t0);
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleSave() {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/DeleteCrmFieldMapping?id=".concat(id));
          case 3:
            _context6.next = 5;
            return refreshMappings();
          case 5:
            setDeleteDialogOpen(null);
            _context6.next = 11;
            break;
          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.error("Error deleting field mapping:", _context6.t0);
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 8]]);
    }));
    return function handleDelete(_x) {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleLoadDefaults = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            setLoadingDefaults(true);
            _context7.prev = 1;
            _context7.next = 4;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmDefaultFieldMappings?connectionId=".concat(connection.id, "&entityType=").concat(entityMapping.authScapeEntityType));
          case 4:
            response = _context7.sent;
            if (!(response && response.status === 200 && response.data.length > 0)) {
              _context7.next = 10;
              break;
            }
            _context7.next = 8;
            return (0, _authscape.apiService)().post("/UserManagement/CreateCrmFieldMappingsBatch", {
              entityMappingId: entityMapping.id,
              mappings: response.data.map(function (d) {
                return {
                  authScapeField: d.authScapeField,
                  crmField: d.crmField,
                  syncDirection: d.syncDirection,
                  isEnabled: d.isEnabled,
                  transformationType: d.transformationType,
                  transformationConfig: d.transformationConfig
                };
              })
            });
          case 8:
            _context7.next = 10;
            return refreshMappings();
          case 10:
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](1);
            console.error("Error loading defaults:", _context7.t0);
          case 15:
            setLoadingDefaults(false);
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 12]]);
    }));
    return function handleLoadDefaults() {
      return _ref8.apply(this, arguments);
    };
  }();
  var selectedTransformation = transformations.find(function (t) {
    return t.type === formData.transformationType;
  });
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    alignItems: "center",
    spacing: 2,
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: onBack
  }, /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flex: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5"
  }, "Field Mappings"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, entityMapping.crmEntityDisplayName || entityMapping.crmEntityName, " - ", connection.displayName)), /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: "Load default field mappings for this entity type"
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    onClick: handleLoadDefaults,
    disabled: loadingDefaults,
    startIcon: loadingDefaults ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      size: 16
    }) : /*#__PURE__*/_react["default"].createElement(_AutoFixHigh["default"], null)
  }, "Load Defaults")), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    onClick: function onClick() {
      console.log('Relationships button clicked');
      if (onOpenRelationships) {
        onOpenRelationships();
      } else {
        console.error('onOpenRelationships prop is not defined');
      }
    },
    startIcon: /*#__PURE__*/_react["default"].createElement(_Link["default"], null)
  }, "Relationships"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return handleOpenDialog();
    },
    startIcon: /*#__PURE__*/_react["default"].createElement(_Add["default"], null)
  }, "Add Field Mapping")), loading ? /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      p: 4
    }
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null)) : fieldMappings.length === 0 ? /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "info"
  }, "No field mappings configured. Click \"Add Field Mapping\" to map CRM fields to AuthScape fields, or click \"Load Defaults\" to populate common mappings.") : /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    component: _Paper["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], null, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "AuthScape Field"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    align: "center"
  }, "Direction"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "CRM Field"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Transformation"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Status"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    align: "right"
  }, "Actions"))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, fieldMappings.map(function (mapping) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: mapping.id,
      hover: true
    }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      fontWeight: "medium"
    }, mapping.authScapeField)), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      align: "center"
    }, /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
      title: syncDirectionLabels[mapping.syncDirection]
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, getSyncDirectionIcon(mapping.syncDirection)))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2"
    }, mapping.crmField)), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, mapping.transformationType ? /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      label: mapping.transformationType,
      size: "small",
      variant: "outlined"
    }) : '-'), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      label: mapping.isEnabled ? 'Enabled' : 'Disabled',
      color: mapping.isEnabled ? 'success' : 'default',
      size: "small"
    })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      align: "right"
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      onClick: function onClick() {
        return handleOpenDialog(mapping);
      },
      title: "Edit"
    }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      color: "error",
      onClick: function onClick() {
        return setDeleteDialogOpen(mapping);
      },
      title: "Delete"
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null))));
  })))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: dialogOpen,
    onClose: handleCloseDialog,
    maxWidth: "sm",
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, editingMapping ? 'Edit Field Mapping' : 'Add Field Mapping'), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    spacing: 2,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    options: authScapeFields,
    value: formData.authScapeField,
    onChange: function onChange(e, value) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        authScapeField: value || ''
      }));
    },
    freeSolo: true,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "AuthScape Field",
        placeholder: "Select or type a field name"
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, "Sync Direction"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: formData.syncDirection,
    label: "Sync Direction",
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        syncDirection: e.target.value
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 0
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_ArrowBackIos["default"], {
    fontSize: "small"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Inbound Only (CRM to AuthScape)"))), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 1
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_ArrowForward["default"], {
    fontSize: "small"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Outbound Only (AuthScape to CRM)"))), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 2
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_SyncAlt["default"], {
    fontSize: "small"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Bidirectional"))))), crmFieldsError && /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "error",
    sx: {
      mb: 1
    }
  }, crmFieldsError), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    options: crmFields,
    getOptionLabel: function getOptionLabel(option) {
      return typeof option === 'string' ? option : "".concat(option.displayName, " (").concat(option.logicalName, ")");
    },
    value: crmFields.find(function (f) {
      return f.logicalName === formData.crmField;
    }) || formData.crmField,
    onChange: function onChange(e, value) {
      if (typeof value === 'string') {
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          crmField: value
        }));
      } else if (value) {
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          crmField: value.logicalName
        }));
      } else {
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          crmField: ''
        }));
      }
    },
    freeSolo: true,
    openOnFocus: true,
    loading: crmFieldsLoading,
    noOptionsText: crmFieldsError ? "Error loading fields" : crmFieldsLoading ? "Loading..." : "No fields found (".concat(crmFields.length, " loaded)"),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "CRM Field",
        placeholder: "Select or type a field name",
        error: !!crmFieldsError,
        helperText: crmFieldsLoading ? "Loading fields..." : crmFields.length > 0 ? "".concat(crmFields.length, " fields available") : "",
        InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
          endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, crmFieldsLoading ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        })
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", props, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body2"
      }, option.displayName), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        color: "text.secondary"
      }, option.logicalName, " (", option.dataType, ")")));
    }
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, "Transformation (optional)"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: formData.transformationType,
    label: "Transformation (optional)",
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        transformationType: e.target.value,
        transformationConfig: ''
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: ""
  }, /*#__PURE__*/_react["default"].createElement("em", null, "None")), transformations.map(function (t) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: t.type,
      value: t.type
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2"
    }, t.type), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption",
      color: "text.secondary"
    }, t.description)));
  }))), (selectedTransformation === null || selectedTransformation === void 0 ? void 0 : selectedTransformation.requiresConfig) && /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "Transformation Config",
    value: formData.transformationConfig,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        transformationConfig: e.target.value
      }));
    },
    fullWidth: true,
    multiline: true,
    rows: 3,
    placeholder: selectedTransformation.configSchema,
    helperText: "JSON configuration for the transformation"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: formData.isEnabled,
      onChange: function onChange(e) {
        return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          isEnabled: e.target.checked
        }));
      }
    }),
    label: "Enabled"
  }))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleCloseDialog
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleSave,
    variant: "contained"
  }, editingMapping ? 'Update' : 'Create'))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: !!deleteDialogOpen,
    onClose: function onClose() {
      return setDeleteDialogOpen(null);
    }
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, "Delete Field Mapping?"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, "Are you sure you want to delete the mapping \"", deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.authScapeField, "\" to \"", deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.crmField, "\"?")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setDeleteDialogOpen(null);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return handleDelete(deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.id);
    },
    color: "error",
    variant: "contained"
  }, "Delete"))));
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrmRelationshipMappings = CrmRelationshipMappings;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));
var _ArrowBack = _interopRequireDefault(require("@mui/icons-material/ArrowBack"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _Link = _interopRequireDefault(require("@mui/icons-material/Link"));
var _CloudDownload = _interopRequireDefault(require("@mui/icons-material/CloudDownload"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _authscape = require("authscape");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _Alert = _interopRequireDefault(require("@mui/material/Alert"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _ArrowForward = _interopRequireDefault(require("@mui/icons-material/ArrowForward"));
var _SyncAlt = _interopRequireDefault(require("@mui/icons-material/SyncAlt"));
var _ArrowBackIos = _interopRequireDefault(require("@mui/icons-material/ArrowBackIos"));
var signalR = _interopRequireWildcard(require("@microsoft/signalr"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var syncDirectionLabels = {
  0: 'Inbound',
  1: 'Outbound',
  2: 'Bidirectional'
};
var authScapeEntityLabels = {
  0: 'User',
  1: 'Company',
  2: 'Location'
};
var getSyncDirectionIcon = function getSyncDirectionIcon(direction) {
  switch (direction) {
    case 0:
      return /*#__PURE__*/_react["default"].createElement(_ArrowBackIos["default"], {
        fontSize: "small"
      });
    case 1:
      return /*#__PURE__*/_react["default"].createElement(_ArrowForward["default"], {
        fontSize: "small"
      });
    case 2:
      return /*#__PURE__*/_react["default"].createElement(_SyncAlt["default"], {
        fontSize: "small"
      });
    default:
      return /*#__PURE__*/_react["default"].createElement(_SyncAlt["default"], {
        fontSize: "small"
      });
  }
};
function CrmRelationshipMappings(_ref) {
  var connection = _ref.connection,
    entityMapping = _ref.entityMapping,
    onBack = _ref.onBack;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    relationshipMappings = _useState2[0],
    setRelationshipMappings = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    relationshipFields = _useState4[0],
    setRelationshipFields = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    crmFields = _useState6[0],
    setCrmFields = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    entityMappings = _useState8[0],
    setEntityMappings = _useState8[1]; // All entity mappings for this connection
  var _useState9 = (0, _react.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    dialogOpen = _useState10[0],
    setDialogOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    deleteDialogOpen = _useState12[0],
    setDeleteDialogOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    editingMapping = _useState14[0],
    setEditingMapping = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    crmFieldsLoading = _useState16[0],
    setCrmFieldsLoading = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    syncingUserLocations = _useState18[0],
    setSyncingUserLocations = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    autoCreateCompany = _useState20[0],
    setAutoCreateCompany = _useState20[1];
  var _useState21 = (0, _react.useState)({
      open: false,
      message: '',
      severity: 'info'
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    snackbar = _useState22[0],
    setSnackbar = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    syncProgress = _useState24[0],
    setSyncProgress = _useState24[1];
  var hubConnectionRef = (0, _react.useRef)(null);

  // Form state
  var _useState25 = (0, _react.useState)({
      authScapeField: '',
      relatedAuthScapeEntityType: 1,
      // Company by default
      crmLookupField: '',
      crmRelatedEntityName: '',
      displayName: '',
      syncDirection: 2,
      isEnabled: true,
      autoCreateRelated: false,
      syncNullValues: true
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    formData = _useState26[0],
    setFormData = _useState26[1];
  var refreshMappings = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmRelationshipMappings?entityMappingId=".concat(entityMapping.id));
          case 4:
            response = _context.sent;
            if (response && response.status === 200) {
              setRelationshipMappings(response.data);
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("Error fetching relationship mappings:", _context.t0);
          case 11:
            setLoading(false);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function refreshMappings() {
      return _ref2.apply(this, arguments);
    };
  }();
  var fetchRelationshipFields = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmRelationshipFields?entityType=".concat(entityMapping.authScapeEntityType));
          case 3:
            response = _context2.sent;
            if (response && response.status === 200) {
              setRelationshipFields(response.data);
            }
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error("Error fetching relationship fields:", _context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function fetchRelationshipFields() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fetchCrmFields = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, lookupFields;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setCrmFieldsLoading(true);
            _context3.prev = 1;
            console.log("Fetching CRM fields for entity:", entityMapping.crmEntityName);
            _context3.next = 5;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmEntityFields?connectionId=".concat(connection.id, "&entityName=").concat(entityMapping.crmEntityName));
          case 5:
            response = _context3.sent;
            console.log("CRM fields response:", response);
            if (response && response.status === 200) {
              console.log("CRM fields data:", response.data);
              // Filter to only show lookup fields (fields that reference other entities)
              lookupFields = response.data.filter(function (f) {
                return f.dataType === 'Lookup' || f.dataType === 'Customer' || f.dataType === 'Owner';
              });
              console.log("Lookup fields found:", lookupFields.length, lookupFields);
              setCrmFields(lookupFields);
            }
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            console.error("Error fetching CRM fields:", _context3.t0);
          case 13:
            setCrmFieldsLoading(false);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 10]]);
    }));
    return function fetchCrmFields() {
      return _ref4.apply(this, arguments);
    };
  }();

  // Fetch all entity mappings for this connection to determine CRM entity for related AuthScape entities
  var fetchEntityMappings = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _authscape.apiService)().get("/UserManagement/GetCrmEntityMappings?connectionId=".concat(connection.id));
          case 3:
            response = _context4.sent;
            if (response && response.status === 200) {
              setEntityMappings(response.data);
              console.log("Entity mappings loaded:", response.data);
            }
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error("Error fetching entity mappings:", _context4.t0);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function fetchEntityMappings() {
      return _ref5.apply(this, arguments);
    };
  }();

  // Helper function to find the CRM entity name for a given AuthScape entity type
  var getCrmEntityForAuthScapeType = function getCrmEntityForAuthScapeType(authScapeEntityType) {
    var mapping = entityMappings.find(function (m) {
      return m.authScapeEntityType === authScapeEntityType;
    });
    return (mapping === null || mapping === void 0 ? void 0 : mapping.crmEntityName) || null;
  };
  (0, _react.useEffect)(function () {
    if (entityMapping) {
      refreshMappings();
      fetchRelationshipFields();
      fetchCrmFields();
      fetchEntityMappings();
    }
  }, [entityMapping]);

  // Setup SignalR connection for sync progress updates
  (0, _react.useEffect)(function () {
    var setupSignalR = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var apiUri, hubUrl, hubConnection;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              apiUri = process.env.apiUri || 'http://localhost:54218';
              hubUrl = "".concat(apiUri, "/crmsync");
              hubConnection = new signalR.HubConnectionBuilder().withUrl(hubUrl).withAutomaticReconnect().build();
              hubConnection.on('OnSyncProgress', function (progress) {
                console.log('Relationship sync progress update:', progress);
                setSyncProgress(progress);
                if (progress.status === 'Completed' || progress.status === 'Failed') {
                  // Clear progress after a short delay
                  setTimeout(function () {
                    setSyncProgress(null);
                    setSyncingUserLocations(false);
                  }, 2000);
                }
              });
              _context5.next = 7;
              return hubConnection.start();
            case 7:
              console.log('SignalR connected for relationship sync progress');
              hubConnectionRef.current = hubConnection;
              _context5.next = 14;
              break;
            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              console.error('SignalR connection error:', _context5.t0);
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 11]]);
      }));
      return function setupSignalR() {
        return _ref6.apply(this, arguments);
      };
    }();
    setupSignalR();
    return function () {
      if (hubConnectionRef.current) {
        hubConnectionRef.current.stop();
      }
    };
  }, []);
  var handleOpenDialog = function handleOpenDialog() {
    var mapping = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (mapping) {
      setEditingMapping(mapping);
      setFormData({
        authScapeField: mapping.authScapeField,
        relatedAuthScapeEntityType: mapping.relatedAuthScapeEntityType,
        crmLookupField: mapping.crmLookupField,
        crmRelatedEntityName: mapping.crmRelatedEntityName,
        displayName: mapping.displayName || '',
        syncDirection: mapping.syncDirection,
        isEnabled: mapping.isEnabled,
        autoCreateRelated: mapping.autoCreateRelated,
        syncNullValues: mapping.syncNullValues
      });
    } else {
      var _firstField$relatedEn;
      setEditingMapping(null);
      // Pre-fill with first available relationship field if any
      var firstField = relationshipFields[0];
      var relatedEntityType = (_firstField$relatedEn = firstField === null || firstField === void 0 ? void 0 : firstField.relatedEntityType) !== null && _firstField$relatedEn !== void 0 ? _firstField$relatedEn : 1;
      // Auto-determine CRM entity based on existing entity mappings
      var crmEntity = getCrmEntityForAuthScapeType(relatedEntityType) || '';
      setFormData({
        authScapeField: (firstField === null || firstField === void 0 ? void 0 : firstField.field) || '',
        relatedAuthScapeEntityType: relatedEntityType,
        crmLookupField: '',
        crmRelatedEntityName: crmEntity,
        displayName: '',
        syncDirection: 2,
        isEnabled: true,
        autoCreateRelated: false,
        syncNullValues: true
      });
    }
    setDialogOpen(true);
  };
  var handleCloseDialog = function handleCloseDialog() {
    setDialogOpen(false);
    setEditingMapping(null);
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (!editingMapping) {
              _context6.next = 6;
              break;
            }
            _context6.next = 4;
            return (0, _authscape.apiService)().put("/UserManagement/UpdateCrmRelationshipMapping?id=".concat(editingMapping.id), {
              authScapeField: formData.authScapeField,
              relatedAuthScapeEntityType: formData.relatedAuthScapeEntityType,
              crmLookupField: formData.crmLookupField,
              crmRelatedEntityName: formData.crmRelatedEntityName,
              displayName: formData.displayName,
              syncDirection: formData.syncDirection,
              isEnabled: formData.isEnabled,
              autoCreateRelated: formData.autoCreateRelated,
              syncNullValues: formData.syncNullValues
            });
          case 4:
            _context6.next = 8;
            break;
          case 6:
            _context6.next = 8;
            return (0, _authscape.apiService)().post("/UserManagement/CreateCrmRelationshipMapping", {
              entityMappingId: entityMapping.id,
              authScapeField: formData.authScapeField,
              relatedAuthScapeEntityType: formData.relatedAuthScapeEntityType,
              crmLookupField: formData.crmLookupField,
              crmRelatedEntityName: formData.crmRelatedEntityName,
              displayName: formData.displayName,
              syncDirection: formData.syncDirection,
              isEnabled: formData.isEnabled,
              autoCreateRelated: formData.autoCreateRelated,
              syncNullValues: formData.syncNullValues
            });
          case 8:
            _context6.next = 10;
            return refreshMappings();
          case 10:
            handleCloseDialog();
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            console.error("Error saving relationship mapping:", _context6.t0);
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function handleSave() {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/DeleteCrmRelationshipMapping?id=".concat(id));
          case 3:
            _context7.next = 5;
            return refreshMappings();
          case 5:
            setDeleteDialogOpen(null);
            _context7.next = 11;
            break;
          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.error("Error deleting relationship mapping:", _context7.t0);
          case 11:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 8]]);
    }));
    return function handleDelete(_x) {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleSyncUserLocationsFromCrm = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var response, result, _result$stats, _error$response, _error$response$data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            setSyncingUserLocations(true);
            setSyncProgress({
              percentComplete: 0,
              currentOperation: 'Syncing user locations from CRM...',
              totalRecords: 0,
              currentRecord: 0
            });
            _context8.prev = 2;
            if (!hubConnectionRef.current) {
              _context8.next = 6;
              break;
            }
            _context8.next = 6;
            return hubConnectionRef.current.invoke('JoinConnectionProgress', connection.id);
          case 6:
            _context8.next = 8;
            return (0, _authscape.apiService)().post("/UserManagement/SyncCrmUserLocations?connectionId=".concat(connection.id, "&autoCreateCompany=").concat(autoCreateCompany));
          case 8:
            response = _context8.sent;
            if (!(response && response.status === 200)) {
              _context8.next = 15;
              break;
            }
            result = response.data; // Join the sync-specific group if we got a syncId
            if (!(result.syncId && hubConnectionRef.current)) {
              _context8.next = 14;
              break;
            }
            _context8.next = 14;
            return hubConnectionRef.current.invoke('JoinSyncProgress', result.syncId);
          case 14:
            if (result.success) {
              setSnackbar({
                open: true,
                message: result.message || "Sync completed: ".concat(((_result$stats = result.stats) === null || _result$stats === void 0 ? void 0 : _result$stats.updateCount) || 0, " users updated"),
                severity: 'success'
              });
            } else {
              setSnackbar({
                open: true,
                message: result.message || 'Sync completed with some issues',
                severity: 'warning'
              });
            }
          case 15:
            _context8.next = 21;
            break;
          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](2);
            console.error("Error syncing user locations from CRM:", _context8.t0);
            setSnackbar({
              open: true,
              message: ((_error$response = _context8.t0.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || 'Sync failed',
              severity: 'error'
            });
          case 21:
            _context8.prev = 21;
            setSyncProgress(null);
            setSyncingUserLocations(false);
            return _context8.finish(21);
          case 25:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[2, 17, 21, 25]]);
    }));
    return function handleSyncUserLocationsFromCrm() {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleRelationshipFieldSelect = function handleRelationshipFieldSelect(event, value) {
    if (value) {
      // Auto-determine CRM entity based on existing entity mappings for the related entity type
      var crmEntity = getCrmEntityForAuthScapeType(value.relatedEntityType) || '';
      console.log("Selected relationship field ".concat(value.field, ", related entity type: ").concat(value.relatedEntityType, ", mapped CRM entity: ").concat(crmEntity));
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        authScapeField: value.field,
        relatedAuthScapeEntityType: value.relatedEntityType,
        displayName: value.displayName,
        crmRelatedEntityName: crmEntity
      }));
    }
  };
  var handleCrmFieldSelect = function handleCrmFieldSelect(event, value) {
    if (value) {
      // Only set the lookup field - don't auto-fill crmRelatedEntityName
      // because that should be the CRM entity that the related AuthScape entity syncs to,
      // NOT the target of the lookup field
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        crmLookupField: value.logicalName
      }));
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    alignItems: "center",
    spacing: 2,
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: onBack
  }, /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null)), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flex: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5"
  }, "Relationship Mappings"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, entityMapping.crmEntityDisplayName || entityMapping.crmEntityName, " \u2192 ", authScapeEntityLabels[entityMapping.authScapeEntityType])), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: autoCreateCompany,
      onChange: function onChange(e) {
        return setAutoCreateCompany(e.target.checked);
      },
      size: "small"
    }),
    label: /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2"
    }, "Auto-create Company")
  }), /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: "Pull location assignments from CRM Contacts based on relationship mapping"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    color: "secondary",
    startIcon: syncingUserLocations ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      size: 16
    }) : /*#__PURE__*/_react["default"].createElement(_CloudDownload["default"], null),
    onClick: handleSyncUserLocationsFromCrm,
    disabled: syncingUserLocations
  }, "Sync User Locations from CRM"))), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Add["default"], null),
    onClick: function onClick() {
      return handleOpenDialog();
    }
  }, "Add Relationship")), /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "info",
    sx: {
      mb: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, "Relationship mappings link AuthScape entities (like Company or Location) to CRM lookup fields. For example, map User.CompanyId to Contact.parentcustomerid to automatically associate contacts with accounts.")), syncingUserLocations && syncProgress && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    sx: {
      p: 2,
      mb: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "text.secondary"
  }, syncProgress.currentOperation || 'Syncing relationships...'), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    fontWeight: "medium"
  }, syncProgress.percentComplete, "% (", syncProgress.currentRecord || 0, " / ", syncProgress.totalRecords || '?', ")")), /*#__PURE__*/_react["default"].createElement(_material.LinearProgress, {
    variant: "determinate",
    value: syncProgress.percentComplete || 0,
    sx: {
      height: 10,
      borderRadius: 1,
      backgroundColor: 'rgba(0,0,0,0.1)',
      '& .MuiLinearProgress-bar': {
        borderRadius: 1,
        backgroundColor: syncProgress.status === 'Failed' ? 'error.main' : syncProgress.status === 'Completed' ? 'success.main' : 'primary.main'
      }
    }
  }))), loading ? /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      p: 4
    }
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null)) : relationshipMappings.length === 0 ? /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "warning"
  }, "No relationship mappings configured. Add a mapping to link related entities between AuthScape and CRM.") : /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    component: _Paper["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], null, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "AuthScape Field"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Related Entity"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "CRM Lookup Field"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "CRM Entity"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Direction"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Status"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    align: "right"
  }, "Actions"))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, relationshipMappings.map(function (mapping) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: mapping.id,
      hover: true
    }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }
    }, /*#__PURE__*/_react["default"].createElement(_Link["default"], {
      fontSize: "small",
      color: "primary"
    }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2"
    }, mapping.displayName || mapping.authScapeField))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      label: authScapeEntityLabels[mapping.relatedAuthScapeEntityType],
      size: "small",
      color: "secondary",
      variant: "outlined"
    })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      sx: {
        fontFamily: 'monospace'
      }
    }, mapping.crmLookupField)), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2",
      sx: {
        fontFamily: 'monospace'
      }
    }, mapping.crmRelatedEntityName)), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
      title: syncDirectionLabels[mapping.syncDirection]
    }, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      icon: getSyncDirectionIcon(mapping.syncDirection),
      label: syncDirectionLabels[mapping.syncDirection],
      size: "small",
      variant: "outlined"
    }))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      label: mapping.isEnabled ? 'Enabled' : 'Disabled',
      color: mapping.isEnabled ? 'success' : 'default',
      size: "small"
    })), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      align: "right"
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      onClick: function onClick() {
        return handleOpenDialog(mapping);
      },
      title: "Edit"
    }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      color: "error",
      onClick: function onClick() {
        return setDeleteDialogOpen(mapping);
      },
      title: "Delete"
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null))));
  })))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: dialogOpen,
    onClose: handleCloseDialog,
    maxWidth: "sm",
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, editingMapping ? 'Edit Relationship Mapping' : 'Add Relationship Mapping'), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    spacing: 2,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle2",
    color: "text.secondary"
  }, "AuthScape Relationship"), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    options: relationshipFields,
    getOptionLabel: function getOptionLabel(option) {
      return "".concat(option.displayName, " (").concat(option.field, ")");
    },
    value: relationshipFields.find(function (f) {
      return f.field === formData.authScapeField;
    }) || null,
    onChange: handleRelationshipFieldSelect,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "AuthScape Relationship Field",
        placeholder: "Select a relationship field"
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", props, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body2"
      }, option.displayName), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        color: "text.secondary"
      }, option.field, " \u2192 ", authScapeEntityLabels[option.relatedEntityType])));
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle2",
    color: "text.secondary",
    sx: {
      mt: 2
    }
  }, "CRM Lookup Configuration"), formData.crmRelatedEntityName && /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "info",
    sx: {
      py: 0.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, authScapeEntityLabels[formData.relatedAuthScapeEntityType], " syncs to ", /*#__PURE__*/_react["default"].createElement("strong", null, formData.crmRelatedEntityName), " in CRM. Select the lookup field that references this entity.")), !formData.crmRelatedEntityName && formData.authScapeField && /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    severity: "warning",
    sx: {
      py: 0.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2"
  }, "No entity mapping found for ", authScapeEntityLabels[formData.relatedAuthScapeEntityType], ". Please create an entity mapping first.")), /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    options: crmFields,
    getOptionLabel: function getOptionLabel(option) {
      var name = option.displayName || option.logicalName;
      return "".concat(name, " (").concat(option.logicalName, ")");
    },
    value: crmFields.find(function (f) {
      return f.logicalName === formData.crmLookupField;
    }) || null,
    onChange: handleCrmFieldSelect,
    loading: crmFieldsLoading,
    noOptionsText: crmFieldsLoading ? "Loading..." : "No lookup fields found for ".concat(entityMapping.crmEntityName),
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "CRM Lookup Field",
        placeholder: "Select a CRM lookup field",
        helperText: "".concat(crmFields.length, " lookup field(s) from ").concat(entityMapping.crmEntityName),
        InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
          endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, crmFieldsLoading ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        })
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", props, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body2"
      }, option.displayName || option.logicalName), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        color: "text.secondary"
      }, option.logicalName, " ", option.dataType ? "(".concat(option.dataType, ")") : '')));
    }
  }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "Display Name (optional)",
    value: formData.displayName,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        displayName: e.target.value
      }));
    },
    fullWidth: true
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, "Sync Direction"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: formData.syncDirection,
    label: "Sync Direction",
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        syncDirection: e.target.value
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 0
  }, "Inbound Only (CRM to AuthScape)"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 1
  }, "Outbound Only (AuthScape to CRM)"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: 2
  }, "Bidirectional"))), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: formData.isEnabled,
      onChange: function onChange(e) {
        return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          isEnabled: e.target.checked
        }));
      }
    }),
    label: "Enabled"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      checked: formData.syncNullValues,
      onChange: function onChange(e) {
        return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          syncNullValues: e.target.checked
        }));
      }
    }),
    label: "Sync Null Values"
  })))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleCloseDialog
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleSave,
    variant: "contained"
  }, editingMapping ? 'Update' : 'Create'))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: !!deleteDialogOpen,
    onClose: function onClose() {
      return setDeleteDialogOpen(null);
    }
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, "Delete Relationship Mapping?"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, "Are you sure you want to delete the relationship mapping \"", (deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.displayName) || (deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.authScapeField), "\"?")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setDeleteDialogOpen(null);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return handleDelete(deleteDialogOpen === null || deleteDialogOpen === void 0 ? void 0 : deleteDialogOpen.id);
    },
    color: "error",
    variant: "contained"
  }, "Delete"))), /*#__PURE__*/_react["default"].createElement(_material.Snackbar, {
    open: snackbar.open,
    autoHideDuration: 6000,
    onClose: function onClose() {
      return setSnackbar(_objectSpread(_objectSpread({}, snackbar), {}, {
        open: false
      }));
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
    onClose: function onClose() {
      return setSnackbar(_objectSpread(_objectSpread({}, snackbar), {}, {
        open: false
      }));
    },
    severity: snackbar.severity,
    sx: {
      width: '100%'
    }
  }, snackbar.message)));
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSVUsersUpload = CSVUsersUpload;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _material = require("@mui/material");
var _authscape = require("authscape");
var _Stepper = _interopRequireDefault(require("@mui/material/Stepper"));
var _Step = _interopRequireDefault(require("@mui/material/Step"));
var _StepButton = _interopRequireDefault(require("@mui/material/StepButton"));
var _CloudDownloadRounded = _interopRequireDefault(require("@mui/icons-material/CloudDownloadRounded"));
var _ChevronLeftRounded = _interopRequireDefault(require("@mui/icons-material/ChevronLeftRounded"));
var _ChevronRightRounded = _interopRequireDefault(require("@mui/icons-material/ChevronRightRounded"));
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
function CSVUsersUpload(_ref) {
  var customFields = _ref.customFields,
    showDialog = _ref.showDialog,
    platformType = _ref.platformType,
    _onClose = _ref.onClose;
  var _React$useState = _react["default"].useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeStep = _React$useState2[0],
    setActiveStep = _React$useState2[1];
  var _React$useState3 = _react["default"].useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    completed = _React$useState4[0],
    setCompleted = _React$useState4[1];
  var steps = ['Download CSV Template', 'Upload CSV Template'];
  var totalSteps = function totalSteps() {
    return steps.length;
  };
  var completedSteps = function completedSteps() {
    return Object.keys(completed).length;
  };
  var isLastStep = function isLastStep() {
    return activeStep === totalSteps() - 1;
  };
  var allStepsCompleted = function allStepsCompleted() {
    return completedSteps() === totalSteps();
  };
  var handleNext = function handleNext() {
    var newActiveStep = isLastStep() && !allStepsCompleted() ?
    // It's the last step, but not all steps have been completed,
    // find the first step that has been completed
    steps.findIndex(function (step, i) {
      return !(i in completed);
    }) : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };
  var handleStep = function handleStep(step) {
    return function () {
      setActiveStep(step);
    };
  };
  var handleReset = function handleReset() {
    setActiveStep(0);
    setCompleted({});
  };
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: showDialog,
    onClose: function onClose() {
      if (_onClose != null) {
        _onClose();
      }
    },
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, "Upload users"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, "Upload multiple users using a CSV sheet"), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingBottom: 0,
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Stepper["default"], {
    nonLinear: true,
    activeStep: activeStep
  }, steps.map(function (label, index) {
    return /*#__PURE__*/_react["default"].createElement(_Step["default"], {
      key: label,
      completed: completed[index]
    }, /*#__PURE__*/_react["default"].createElement(_StepButton["default"], {
      color: "inherit",
      onClick: handleStep(index)
    }, label));
  })), /*#__PURE__*/_react["default"].createElement("div", null, allStepsCompleted() ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    sx: {
      mt: 2,
      mb: 1
    }
  }, "All steps completed - you're finished"), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      pt: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flex: '1 1 auto'
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleReset
  }, "Reset"))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }, activeStep == 0 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      fontSize: 14
    }
  }, "Download our CSV template to make sure your CSV is formatted correctly.", /*#__PURE__*/_react["default"].createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react["default"].createElement(_CloudDownloadRounded["default"], null),
    variant: "contained",
    sx: {
      marginTop: 2
    },
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _authscape.apiService)().DownloadFile("/UserManagement/GetDownloadTemplate?platformType=".concat(platformType), "DownloadFile.csv", function () {});
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))
  }, "Download Template")), activeStep == 1 && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_authscape.FileUploader, {
    url: "/UserManagement/UploadUsers",
    onUploadCompleted: function onUploadCompleted(results) {
      if (_onClose != null) {
        _onClose();
      }
    }
  })))))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      height: 200
    }
  })), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      pt: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    color: "inherit",
    startIcon: /*#__PURE__*/_react["default"].createElement(_ChevronLeftRounded["default"], null),
    disabled: activeStep === 0,
    onClick: handleBack,
    sx: {
      mr: 1
    }
  }, "Back"), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flex: '1 1 auto'
    }
  }), activeStep !== steps.length - 1 && /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleNext,
    endIcon: /*#__PURE__*/_react["default"].createElement(_ChevronRightRounded["default"], null),
    sx: {
      mr: 1
    }
  }, "Next"))));
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomFields = CustomFields;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Table = _interopRequireDefault(require("@mui/material/Table"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableContainer = _interopRequireDefault(require("@mui/material/TableContainer"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _authscape = require("authscape");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
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
function CustomFields(_ref) {
  var platformType = _ref.platformType;
  var roleNameRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    customFields = _useState2[0],
    setCustomFields = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    newCustomFieldOpen = _useState4[0],
    setNewCustomFieldOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    newTabFieldOpen = _useState6[0],
    setNewTabFieldOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    deleteCustomFieldOpen = _useState8[0],
    setDeleteCustomFieldOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    deleteCustomTabOpen = _useState0[0],
    setDeleteCustomTabOpen = _useState0[1];
  var RefreshFields = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _authscape.apiService)().get("/UserManagement/GetCustomFields?platformType=" + platformType);
          case 2:
            response = _context.sent;
            if (response != null && response.status == 200) {
              setCustomFields(response.data);
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function RefreshFields() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    RefreshFields();
  }, []);
  var AddNewCustomField = function AddNewCustomField() {
    var refName = (0, _react.useRef)(null);
    var _useState1 = (0, _react.useState)(1),
      _useState10 = _slicedToArray(_useState1, 2),
      fieldType = _useState10[0],
      setFieldType = _useState10[1];
    var _useState11 = (0, _react.useState)(1),
      _useState12 = _slicedToArray(_useState11, 2),
      gridSize = _useState12[0],
      setGridSize = _useState12[1];
    var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isRequired = _useState14[0],
      setIsRequired = _useState14[1];
    var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isColumnVisibleInDatagrid = _useState16[0],
      setIsColumnVisibleInDatagrid = _useState16[1];
    var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      tabOptions = _useState18[0],
      setTabOptions = _useState18[1];
    var _useState19 = (0, _react.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      selectProperties = _useState20[0],
      setSelectProperties = _useState20[1];
    var _useState21 = (0, _react.useState)(null),
      _useState22 = _slicedToArray(_useState21, 2),
      tabSelection = _useState22[0],
      setTabSelection = _useState22[1];
    var refTabName = (0, _react.useRef)(null);
    var refreshTabOptions = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var customTabResponse;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _authscape.apiService)().get("/UserManagement/GetCustomTabs?platformType=" + platformType);
            case 2:
              customTabResponse = _context2.sent;
              if (customTabResponse && customTabResponse.status == 200) {
                setTabOptions(customTabResponse.data);
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function refreshTabOptions() {
        return _ref3.apply(this, arguments);
      };
    }();
    var fetchCustomField = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var customFieldResponse;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return refreshTabOptions();
            case 2:
              _context3.next = 4;
              return (0, _authscape.apiService)().get("/UserManagement/GetCustomField?id=" + newCustomFieldOpen);
            case 4:
              customFieldResponse = _context3.sent;
              if (customFieldResponse != null && customFieldResponse.status == 200) {
                refName.current.value = customFieldResponse.data.name;
                setFieldType(customFieldResponse.data.fieldType);
                setIsRequired(customFieldResponse.data.isRequired);
                setGridSize(customFieldResponse.data.gridSize);
                setTabSelection(customFieldResponse.data.tabId ? customFieldResponse.data.tabId : null);
                setIsColumnVisibleInDatagrid(customFieldResponse.data.isColumnOnDatagrid);
                if (customFieldResponse.data.properties != null && customFieldResponse.data.properties != "") {
                  setSelectProperties(JSON.parse(customFieldResponse.data.properties));
                }
              }
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function fetchCustomField() {
        return _ref4.apply(this, arguments);
      };
    }();
    (0, _react.useEffect)(function () {
      if (newCustomFieldOpen) {
        // look up the record for this custom field so we can display the values on the components
        if (newCustomFieldOpen != -1) fetchCustomField();
        refreshTabOptions();
      }
    }, [newCustomFieldOpen]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
      open: newTabFieldOpen != null ? true : false,
      fullWidth: true,
      onClose: function onClose() {
        setNewTabFieldOpen(null);
      },
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
      id: "alert-dialog-title"
    }, newTabFieldOpen == -1 && newTabFieldOpen != null && "Create Tab", newTabFieldOpen != -1 && newTabFieldOpen != null && "Edit Tab"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      inputRef: refTabName,
      label: "Name",
      variant: "outlined",
      fullWidth: true,
      InputLabelProps: {
        shrink: true
      },
      sx: {
        paddingBottom: 2,
        marginTop: 2
      }
    })), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
      onClick: function onClick() {
        setNewTabFieldOpen(null);
      }
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var id;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              id = null;
              if (newTabFieldOpen != -1) {
                id = newTabFieldOpen;
              }
              _context4.next = 4;
              return (0, _authscape.apiService)().post("/UserManagement/CreateTab", {
                id: id,
                name: refTabName.current.value,
                platformType: platformType
              });
            case 4:
              _context4.next = 6;
              return refreshTabOptions();
            case 6:
              setNewTabFieldOpen(null);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      })),
      autoFocus: true
    }, "Add"))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
      open: newCustomFieldOpen,
      onClose: function onClose() {
        setNewCustomFieldOpen(null);
      },
      fullWidth: true,
      maxWidth: "md",
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
      id: "alert-dialog-title"
    }, newCustomFieldOpen == -1 && newCustomFieldOpen != null && "New Custom Field", newCustomFieldOpen != -1 && newCustomFieldOpen != null && "Edit Custom Field"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: fieldType == 6 || fieldType == 7 ? 6 : 12
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      inputRef: refName,
      label: "Name",
      variant: "outlined",
      fullWidth: true,
      InputLabelProps: {
        shrink: true
      },
      sx: {
        paddingBottom: 2,
        marginTop: 2
      }
    }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
      fullWidth: true,
      sx: {
        paddingBottom: 2
      }
    }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
      id: "demo-simple-select-label"
    }, "Field Type"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
      labelId: "demo-simple-select-label",
      id: "demo-simple-select",
      value: fieldType,
      label: "Field Type",
      onChange: function onChange(event) {
        setFieldType(event.target.value);
      }
    }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 1
    }, "Text Field"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 2
    }, "Rich Text Editor"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 3
    }, "Number"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 4
    }, "Date"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 5
    }, "Yes / No"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 6
    }, "Image"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 7
    }, "Select"))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        paddingBottom: 2
      }
    }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
      fullWidth: true
    }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
      shrink: true,
      id: "tab-simple-select-label",
      sx: {
        backgroundColor: "white",
        px: "3px"
      }
    }, "Tabs"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
      "aria-expanded": true,
      labelId: "tab-simple-select-label",
      id: "tab-simple-select",
      renderValue: function renderValue(selected) {
        return tabOptions.find(function (t) {
          return t.id == selected;
        }).name;
      },
      value: tabSelection,
      label: "tabs",
      onChange: function onChange(event) {
        setTabSelection(event.target.value);
      }
    }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: null
    }, " ", /*#__PURE__*/_react["default"].createElement("em", null, "None"), " "), tabOptions && tabOptions.map(function (tab) {
      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        key: tab.id,
        value: tab.id
      }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
        direction: "row",
        sx: {
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%"
        }
      }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, tab.name)), /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
        color: "error",
        onClick: function onClick(event) {
          event.stopPropagation();
          setDeleteCustomTabOpen(tab);
        }
      }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)))));
    }))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        textAlign: "right"
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
      variant: "text",
      onClick: function onClick() {
        setNewTabFieldOpen(-1);
      }
    }, "Create Tab"))), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
      control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
        checked: isRequired,
        onChange: function onChange(event) {
          setIsRequired(event.target.checked);
        }
      }),
      label: "Is Required",
      sx: {
        paddingBottom: 2
      }
    }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
      control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
        checked: isColumnVisibleInDatagrid,
        onChange: function onChange(event) {
          setIsColumnVisibleInDatagrid(event.target.checked);
        }
      }),
      label: "Is column visible in datagrid",
      sx: {
        paddingBottom: 2
      }
    }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
      fullWidth: true,
      sx: {
        paddingBottom: 2
      }
    }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
      id: "demo-simple-select-label"
    }, "Grid Size"), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
      labelId: "demo-simple-select-label",
      id: "demo-simple-select",
      value: gridSize,
      label: "Grid Size",
      onChange: function onChange(event) {
        setGridSize(event.target.value);
      }
    }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 1
    }, "1"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 2
    }, "2"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 3
    }, "3"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 4
    }, "4"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 5
    }, "5"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 6
    }, "6"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 7
    }, "7"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 8
    }, "8"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 9
    }, "9"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 10
    }, "10"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 11
    }, "11"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: 12
    }, "12"))))), (fieldType == 6 || fieldType == 7) && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: 6
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Properties"), /*#__PURE__*/_react["default"].createElement(_system.Box, null, fieldType == 6 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        paddingTop: 2
      }
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: 6
    }, "Image Size"), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: 6,
      sx: {
        textAlign: "right"
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
      variant: "contained",
      onClick: function onClick() {
        var newItem = {
          id: Date.now(),
          key: "",
          value: ""
        };
        setSelectProperties(function (prevItems) {
          return Array.isArray(prevItems) ? [].concat(_toConsumableArray(prevItems), [newItem]) : [newItem];
        });
      }
    }, "Add Option")), selectProperties && selectProperties.map(function (propObj) {
      return /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
        key: propObj.id,
        direction: "row",
        spacing: 1,
        sx: {
          paddingTop: 2
        }
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        label: "Name",
        defaultValue: propObj.name,
        InputLabelProps: {
          shrink: true
        },
        variant: "outlined",
        onChange: function onChange(val) {
          propObj.name = val.currentTarget.value;
        }
      }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        label: "Width",
        defaultValue: propObj.width,
        InputLabelProps: {
          shrink: true
        },
        variant: "outlined",
        onChange: function onChange(val) {
          propObj.width = val.currentTarget.value;
        }
      }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        label: "Height",
        defaultValue: propObj.height,
        InputLabelProps: {
          shrink: true
        },
        variant: "outlined",
        onChange: function onChange(val) {
          propObj.height = val.currentTarget.value;
        }
      }), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
        "aria-label": "delete",
        onClick: function onClick() {
          setSelectProperties(function (prevItems) {
            return prevItems.filter(function (item) {
              return item.id !== propObj.id;
            });
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)));
    })), fieldType == 7 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        paddingTop: 2
      }
    }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
      sx: {
        paddingBottom: 1
      }
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: 6
    }, "Select"), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: 6,
      sx: {
        textAlign: "right"
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
      variant: "contained",
      onClick: function onClick() {
        var newItem = {
          id: Date.now(),
          key: "",
          value: ""
        };
        setSelectProperties(function (prevItems) {
          return Array.isArray(prevItems) ? [].concat(_toConsumableArray(prevItems), [newItem]) : [newItem];
        });
      }
    }, "Add Option")))), selectProperties && selectProperties.map(function (propObj) {
      return /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
        key: propObj.id,
        direction: "row",
        spacing: 1,
        sx: {
          paddingTop: 2
        }
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        label: "Key",
        variant: "outlined",
        defaultValue: propObj.key,
        InputLabelProps: {
          shrink: true
        },
        onChange: function onChange(val) {
          propObj.key = val.currentTarget.value;
        }
      }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        label: "Value",
        variant: "outlined",
        defaultValue: propObj.value,
        InputLabelProps: {
          shrink: true
        },
        onChange: function onChange(val) {
          propObj.value = val.currentTarget.value;
        }
      }), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
        "aria-label": "delete",
        onClick: function onClick() {
          setSelectProperties(function (prevItems) {
            return prevItems.filter(function (item) {
              return item.id !== propObj.id;
            });
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)));
    })))))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
      onClick: function onClick() {
        setNewCustomFieldOpen(null);
      }
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var properties, id;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              properties = null;
              if (selectProperties != null && selectProperties != "") {
                properties = JSON.stringify(selectProperties);
              }
              id = null;
              if (newCustomFieldOpen != -1) {
                id = newCustomFieldOpen;
              }
              _context5.next = 6;
              return (0, _authscape.apiService)().post("/UserManagement/AddOrUpdateCustomField", {
                id: id,
                name: refName.current.value,
                fieldType: fieldType,
                customFieldPlatformType: platformType,
                isRequired: isRequired,
                isColumnVisibleInDatagrid: isColumnVisibleInDatagrid,
                gridSize: gridSize,
                tabSelection: tabSelection,
                properties: properties
              });
            case 6:
              _context5.next = 8;
              return RefreshFields();
            case 8:
              setNewCustomFieldOpen(null);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      })),
      autoFocus: true
    }, "Update"))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
      open: deleteCustomTabOpen,
      onClose: function onClose() {
        return setDeleteCustomTabOpen(null);
      }
    }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
      id: "alert-dialog-title"
    }, "Delete ", deleteCustomTabOpen && deleteCustomTabOpen.name, " tab?"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
      id: "alert-dialog-description"
    }, "Are you sure you want to delete the ", deleteCustomTabOpen && deleteCustomTabOpen.name, " tab?")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
      onClick: (/*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(event) {
          var response;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _authscape.apiService)()["delete"]("/UserManagement/DeleteCustomTab?id=" + deleteCustomTabOpen.id);
              case 2:
                response = _context6.sent;
                refreshTabOptions();
                setDeleteCustomTabOpen(null);
              case 5:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        return function (_x) {
          return _ref7.apply(this, arguments);
        };
      }())
    }, "Yes"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
      onClick: function onClick() {
        setDeleteCustomTabOpen(null);
      }
    }, "No"))));
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h3",
    gutterBottom: true
  }, "Custom Fields"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    sx: {
      width: 200,
      marginTop: 2
    },
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            // let response = await apiService().post("/UserManagement/AddPermission", { name: roleNameRef.current.value });
            // if (response != null)
            // {
            //     await RefreshRoles();
            //     // should refresh the getallroles dataset
            // }

            setNewCustomFieldOpen(-1);
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))
  }, "Add Custom Field"), /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    component: _Paper["default"],
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    sx: {
      minWidth: 650
    },
    "aria-label": "simple table"
  }, /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Id"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Name"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Field Type"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Tabs"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Is Required"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Grid Size"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, "Is Available In Datagrid"))), /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, customFields.map(function (row) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: row.id,
      sx: {
        '&:last-child td, &:last-child th': {
          border: 0
        },
        cursor: "pointer"
      },
      onClick: function onClick() {
        setNewCustomFieldOpen(row.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row"
    }, row.id), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row"
    }, row.name), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row"
    }, row.fieldType == 1 && "Text Field", row.fieldType == 2 && "Rich Text Editor", row.fieldType == 3 && "Number", row.fieldType == 4 && "Date", row.fieldType == 5 && "Yes / No", row.fieldType == 6 && "Image", row.fieldType == 7 && "Select"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row"
    }, row.customFieldTab ? row.customFieldTab.name : ""), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row"
    }, row.isRequired == true ? "Required" : "Not Required"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row"
    }, row.gridSize), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row"
    }, row.isColumnOnDatagrid ? "Yes" : "No"), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row"
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      color: "error",
      onClick: function onClick(event) {
        event.stopPropagation();
        setDeleteCustomFieldOpen(row);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null))));
  })))), AddNewCustomField()), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: deleteCustomFieldOpen,
    onClose: function onClose() {
      return setDeleteCustomFieldOpen(null);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, "Delete ", deleteCustomFieldOpen && deleteCustomFieldOpen.name, " field?"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
    id: "alert-dialog-description"
  }, "Are you sure you want to delete the ", deleteCustomFieldOpen && deleteCustomFieldOpen.name, " field?")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var response;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/DeleteCustomField?id=" + deleteCustomFieldOpen.id);
          case 2:
            response = _context8.sent;
            _context8.next = 5;
            return RefreshFields();
          case 5:
            setDeleteCustomFieldOpen(null);
          case 6:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))
  }, "Yes"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      return setDeleteCustomFieldOpen(null);
    }
  }, "No"))));
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSystemField = exports.renderCustomField = exports.findTheValue = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _reactHookForm = require("react-hook-form");
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// import { DropZone } from '../../components/dropzone';

var findTheValue = exports.findTheValue = function findTheValue(fieldObject, field) {
  var result = "";
  if (fieldObject != null) {
    Object.getOwnPropertyNames(fieldObject).forEach(function (element) {
      if (field.toLowerCase() == element.toLowerCase()) {
        result = fieldObject[element];
      }
    });
  }
  return result;
};
var findCustomFieldValue = function findCustomFieldValue(fieldObject, field) {
  var result = null;
  if (fieldObject != null && fieldObject.customFields) {
    fieldObject.customFields.forEach(function (userCustomField) {
      if (field.toLowerCase() == userCustomField.name.toLowerCase()) {
        if (userCustomField.customFieldType == 5) {
          result = userCustomField.value === "true";
        } else {
          result = userCustomField.value;
        }
      }
    });
  }
  return result;
};
var renderCustomField = exports.renderCustomField = function renderCustomField(identifier, fieldObject, control, errors, register, setValue, customFields, editors, setEditors) {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, (identifier != -1 ? fieldObject != null : true) && customFields.map(function (field, index) {
    var result = findCustomFieldValue(fieldObject, field.name);
    return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      key: index,
      item: true,
      size: field.size ? field.size : 12
    }, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
      name: field.customFieldId,
      control: control,
      defaultValue: result,
      rules: {
        required: field.isRequired
      },
      render: function render(_ref) {
        var _ref$field = _ref.field,
          onChange = _ref$field.onChange,
          value = _ref$field.value;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, field.customFieldType === 1 && /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
          label: field.name,
          variant: "outlined",
          margin: "normal",
          fullWidth: true
        }, register(field.customFieldId, {
          required: field.isRequired
        }), {
          onChange: onChange,
          value: value || ''
        })), field.customFieldType === 2 && /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
          label: field.name,
          variant: "outlined",
          margin: "normal",
          fullWidth: true,
          minRows: 4,
          multiline: true
        }, register(field.customFieldId, {
          required: field.isRequired
        }), {
          onChange: onChange,
          value: value || ''
        })), field.customFieldType === 3 && /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
          variant: "outlined",
          label: field.name,
          type: "number",
          margin: "normal",
          fullWidth: true
        }, register(field.customFieldId, {
          required: field.isRequired
        }), {
          onChange: onChange,
          value: value || 0
        })), field.customFieldType === 4 && /*#__PURE__*/_react["default"].createElement(_LocalizationProvider.LocalizationProvider, {
          dateAdapter: _AdapterDayjs.AdapterDayjs
        }, /*#__PURE__*/_react["default"].createElement(_DatePicker.DatePicker, _extends({
          label: field.name,
          value: (0, _dayjs["default"])(value)
        }, register(field.customFieldId, {
          required: field.isRequired
        }), {
          onChange: onChange
        }))), field.customFieldType === 5 && /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
          sx: {
            height: "100%",
            display: "flex",
            alignItems: "center"
          },
          control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], _extends({
            checked: value || false
          }, register(field.customFieldId, {
            required: field.isRequired
          }), {
            onChange: onChange
          })),
          label: field.name
        }), field.customFieldType === 6 && /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Box, null, field.name), /*#__PURE__*/_react["default"].createElement(_authscape.DropZone, _extends({}, register(field.customFieldId, {
          required: field.isRequired
        }), {
          image: value,
          text: "Drag 'n' drop your logo here, or click to select your logo",
          onDrop: (/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(blob) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    value = blob;
                    onChange(blob);
                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }())
        }))), field.customFieldType === 7 && /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
          fullWidth: true
        }, /*#__PURE__*/_react["default"].createElement(_material.InputLabel, {
          id: "demo-simple-select-label"
        }, field.name), /*#__PURE__*/_react["default"].createElement(_material.Select, _extends({}, register(field.customFieldId, {
          required: field.isRequired
        }), {
          label: field.name,
          value: value || '',
          onChange: onChange
        }), field.properties != null && field.properties != "" && JSON.parse(field.properties).map(function (property) {
          return /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
            value: property.key
          }, property.value);
        })))));
      }
    }), errors[field.customFieldId] && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      color: "red"
    }, field.name, " is required."));
  }));
};
var renderSystemField = exports.renderSystemField = function renderSystemField(identifier, fieldObject, control, errors, register, customFields) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (identifier != -1 ? fieldObject != null : true) && customFields.map(function (field, index) {
    var result = findTheValue(fieldObject, field);
    var isRequied = true;
    if (field == "PhoneNumber") {
      isRequied = false;
    }
    if (field == "IsDeactivated")
      // we are doing this to make the naming the same (IsActive)
      {
        field = "IsActive";
        result = !result;
      }

    // Skip EmailConfirmed as it will be rendered with IsActive
    if (field == "EmailConfirmed") {
      return null;
    }
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: index
    }, field == "IsActive" && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: 6
    }, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
      name: "IsActive",
      control: control,
      rules: {
        required: false
      },
      render: function render(_ref3) {
        var renderField = _ref3.renderField;
        return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], _extends({
          control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
            defaultChecked: result
          }),
          label: "Is Active"
        }, register("IsActive", {
          required: false
        }), renderField));
      }
    }), errors["IsActive"] && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      color: "red"
    }, "Is Active is required.")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: 6
    }, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
      name: "EmailConfirmed",
      control: control,
      rules: {
        required: false
      },
      render: function render(_ref4) {
        var renderField = _ref4.renderField;
        return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], _extends({
          control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
            defaultChecked: findTheValue(fieldObject, "EmailConfirmed")
          }),
          label: "Email Confirmed"
        }, register("EmailConfirmed", {
          required: false
        }), renderField));
      }
    }), errors["EmailConfirmed"] && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      color: "red"
    }, "Email Confirmed is required."))), field != "IsActive" && field != "IsDeactivated" && field != "EmailConfirmed" && /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
      name: field,
      control: control,
      rules: {
        required: isRequied
      },
      render: function render(_ref5) {
        var renderField = _ref5.renderField;
        return /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
          label: field,
          variant: "outlined",
          defaultValue: result,
          margin: "normal",
          fullWidth: true
        }, register(field, {
          required: isRequied
        }), renderField));
      }
    }), errors[field] && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      color: "red"
    }, field, " is required.")));
  }));
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _reactHookForm = require("react-hook-form");
var _BusinessRounded = _interopRequireDefault(require("@mui/icons-material/BusinessRounded"));
var _authscape = require("authscape");
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// remove when publishing
// import {renderCustomField, renderSystemField } from './EditorFields';

var LocationEditor = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$locationId = _ref.locationId,
    locationId = _ref$locationId === void 0 ? null : _ref$locationId,
    platformType = _ref.platformType,
    _ref$onSaved = _ref.onSaved,
    onSaved = _ref$onSaved === void 0 ? null : _ref$onSaved,
    _ref$onCustomTabs = _ref.onCustomTabs,
    onCustomTabs = _ref$onCustomTabs === void 0 ? null : _ref$onCustomTabs;
  var _useForm = (0, _reactHookForm.useForm)(),
    control = _useForm.control,
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors,
    watch = _useForm.watch,
    setValue = _useForm.setValue;
  var theme = (0, _material.useTheme)();
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    editors = _useState2[0],
    setEditors = _useState2[1];
  var refShouldClose = (0, _react.useRef)(false);
  var refSubmitButton = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedRoles = _useState4[0],
    setSelectedRole = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedPermission = _useState6[0],
    setSelectedPermission = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    company = _useState8[0],
    setCompany = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    locations = _useState0[0],
    setLocations = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    location = _useState10[0],
    setLocation = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    inputCompanyValue = _useState12[0],
    setInputCompanyValue = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    customFields = _useState14[0],
    setCustomFields = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    user = _useState16[0],
    setUser = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    customTabs = _useState18[0],
    setCustomTabs = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    tabOptions = _useState20[0],
    setTabOptions = _useState20[1];
  var ITEM_HEIGHT = 48;
  var ITEM_PADDING_TOP = 8;
  var _useState21 = (0, _react.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    tabValue = _useState22[0],
    setTabValue = _useState22[1];
  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
  };
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, roleNames, index, role, permissionNames, _index, permission;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return refreshTabOptions();
            case 2:
              _context.next = 4;
              return (0, _authscape.apiService)().get("/UserManagement/GetLocation?locationId=" + locationId);
            case 4:
              response = _context.sent;
              if (response != null && response.status == 200) {
                setLocation(response.data);
                setCompany(response.data.company);
                if (response.data.customFields != null) {
                  setCustomFields(response.data.customFields);
                }
                setEditors(_objectSpread({}, editors));
              }

              // assign all selected roles
              if (response.data.roles != null) {
                roleNames = [];
                for (index = 0; index < response.data.roles.length; index++) {
                  role = response.data.roles[index];
                  roleNames.push(role);
                }
                setSelectedRole(roleNames);
              }

              // assign all selected permissions
              if (response.data.permissions != null) {
                permissionNames = [];
                for (_index = 0; _index < response.data.permissions.length; _index++) {
                  permission = response.data.permissions[_index];
                  permissionNames.push(permission);
                }
                setSelectedPermission(permissionNames);
              }
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (locationId != -1) {
      fetchData();
    }
  }, [locationId]);
  (0, _react.useEffect)(function () {
    if (locationId != null && onCustomTabs != null) {
      var fetchData = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var tabs;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return onCustomTabs(platformType, locationId);
              case 2:
                tabs = _context2.sent;
                if (tabs != null) {
                  setCustomTabs(tabs);
                }
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function fetchData() {
          return _ref3.apply(this, arguments);
        };
      }();
      fetchData();
    }
  }, [locationId]);
  var fields = ["Title", "Address", "City", "State", "ZipCode", "IsDeactivated"];
  var refreshTabOptions = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var customTabResponse, dataElement;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _authscape.apiService)().get("/UserManagement/GetCustomTabs?platformType=" + platformType);
          case 2:
            customTabResponse = _context3.sent;
            if (customTabResponse != null && customTabResponse.status == 200) {
              dataElement = customTabResponse.data;
              setTabOptions(dataElement);
              if (dataElement.length > 0) {
                setTabValue(dataElement[0].id);
              }
            }
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function refreshTabOptions() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (inputCompanyValue != null) {
      var fetchData = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var response;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _authscape.apiService)().get("/UserManagement/GetCompaniesForLocation?searchBName=" + inputCompanyValue);
              case 2:
                response = _context4.sent;
                if (response != null && response.status == 200) {
                  setLocations(response.data);
                }
              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function fetchData() {
          return _ref5.apply(this, arguments);
        };
      }();
      fetchData();
    }
  }, [inputCompanyValue]);
  var saveChanges = function saveChanges(shouldClose) {
    refShouldClose.current = shouldClose;
    refSubmitButton.current.click();
  };
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      saveChanges: saveChanges
    };
  });
  return /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      backgroundColor: theme.palette.background["default"],
      minHeight: '100vh',
      color: theme.palette.text.primary
    }
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit(/*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
        var userCustomFields, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              userCustomFields = [];
              customFields && customFields.forEach(/*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(customField) {
                  var newValue, dateObject, simpleDate, newBlob, _data, _response;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        newValue =
                        // customField.customFieldType == 2 ? 
                        // draftToHTML(editors[customField.customFieldId].getCurrentContent()) 
                        // : 
                        data[customField.customFieldId];
                        if (!(newValue != null && typeof newValue === 'string')) {
                          _context5.next = 5;
                          break;
                        }
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: newValue.toString()
                        });
                        _context5.next = 26;
                        break;
                      case 5:
                        if (!(newValue != null && typeof newValue === 'boolean')) {
                          _context5.next = 9;
                          break;
                        }
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: newValue.toString()
                        });
                        _context5.next = 26;
                        break;
                      case 9:
                        if (!(newValue != null && _typeof(newValue) === 'object')) {
                          _context5.next = 15;
                          break;
                        }
                        dateObject = new Date(newValue);
                        simpleDate = dateObject.toISOString().split('T')[0];
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: simpleDate.toString()
                        });
                        _context5.next = 26;
                        break;
                      case 15:
                        if (!(newValue instanceof Blob)) {
                          _context5.next = 26;
                          break;
                        }
                        newBlob = new Blob([newValue], {
                          type: newValue.type
                        });
                        _data = new FormData();
                        _data.append("file", newBlob);
                        _data.append("identifier", companyId);
                        _data.append("platformType", 2); // company
                        _data.append("customFieldId", customField.customFieldId);
                        _context5.next = 24;
                        return (0, _authscape.apiService)().post("/UserManagement/UploadCustomFieldImage", _data);
                      case 24:
                        _response = _context5.sent;
                        if (_response != null && _response.status == 200) {
                          userCustomFields.push({
                            customFieldId: customField.customFieldId,
                            name: customField.name,
                            isRequired: customField.isRequired,
                            customFieldType: customField.customFieldType,
                            value: _response.data
                          });
                        }
                      case 26:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x2) {
                  return _ref7.apply(this, arguments);
                };
              }());
              _context6.next = 4;
              return (0, _authscape.apiService)().post("/UserManagement/UpdateLocation", {
                id: locationId,
                companyId: company != null ? company.id : null,
                title: data.Title,
                address: data.Address,
                city: data.City,
                state: data.State,
                postalCode: data.ZipCode,
                isDeactivated: !data.IsActive,
                customFields: userCustomFields
              });
            case 4:
              response = _context6.sent;
              if (response != null && response.status == 200) {
                if (onSaved != null) {
                  onSaved(refShouldClose.current, 3, locationId, response.data);
                }
              }
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }()),
    noValidate: true,
    autoComplete: "off"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 4,
    sx: {
      backgroundColor: "#f5f8fa",
      borderRadius: 2,
      border: "1px solid lightgray",
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      fontWeight: "bold",
      paddingBottom: 1
    }
  }, "About this Location"), renderSystemField(locationId, location, control, errors, register, fields), /*#__PURE__*/_react["default"].createElement(_material.Autocomplete, {
    id: "companySelect",
    sx: {
      paddingTop: 2
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.title || option;
    },
    options: [].concat(_toConsumableArray(locations), [{
      title: "Add Company",
      isAddOption: true
    }]) // Add option appended here
    ,
    autoComplete: true,
    includeInputInList: true,
    filterSelectedOptions: true,
    value: company,
    noOptionsText: "Company Not Found",
    onChange: function onChange(event, newValue) {
      if (newValue !== null && newValue !== void 0 && newValue.isAddOption) {
        setEditAddLocationId(-1);
      } else {
        setCompany(newValue);
      }
    },
    onInputChange: function onInputChange(event, newInputValue) {
      setInputCompanyValue(newInputValue);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "Company",
        fullWidth: true
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", _extends({}, props, {
        key: "company-" + option.title
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          display: 'flex',
          width: 44
        }
      }, /*#__PURE__*/_react["default"].createElement(_BusinessRounded["default"], {
        sx: {
          color: 'text.secondary'
        }
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          width: 'calc(100% - 44px)',
          wordWrap: 'break-word'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body2",
        color: option.isAddOption ? "primary" : "text.secondary"
      }, option.title))));
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    size: 8,
    sx: {
      backgroundColor: "#f5f8fa",
      borderRadius: 2,
      border: "1px solid lightgray",
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Tabs, {
    value: tabValue,
    onChange: handleTabChange,
    variant: "fullWidth",
    "aria-label": "basic tabs example",
    centered: true
  }, tabOptions.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Tab, {
      key: tab.id,
      label: tab.name,
      value: tab.id
    });
  }), customTabs != null && customTabs.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Tab, {
      key: "custom-" + tab.id,
      label: tab.title,
      value: tab.id
    });
  }))), /*#__PURE__*/_react["default"].createElement(_system.Box, null, tabOptions.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, tabValue === tab.id && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, customFields && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderCustomField(locationId, location, control, errors, register, setValue, customFields.filter(function (s) {
      return s.tabId == tab.id;
    })))));
  }), customTabs != null && customTabs.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, tabValue === tab.id && /*#__PURE__*/_react["default"].createElement(_system.Box, null, tab.content));
  }))), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    ref: refSubmitButton,
    variant: "contained",
    type: "submit",
    sx: {
      display: "none"
    }
  }, "Save Changes")))));
});
LocationEditor.displayName = "LocationEditor";
var _default = exports["default"] = LocationEditor;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _OutlinedInput = _interopRequireDefault(require("@mui/material/OutlinedInput"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _reactHookForm = require("react-hook-form");
var _BusinessRounded = _interopRequireDefault(require("@mui/icons-material/BusinessRounded"));
var _authscape = require("authscape");
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
// remove when publishing
// import {renderCustomField, renderSystemField } from './EditorFields';
// import CompanyEditor from './CompanyEditor';
// import { UserManagement } from './UserManagement';

var UserEditor = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$userId = _ref.userId,
    userId = _ref$userId === void 0 ? null : _ref$userId,
    platformType = _ref.platformType,
    _ref$onSaved = _ref.onSaved,
    onSaved = _ref$onSaved === void 0 ? null : _ref$onSaved,
    _ref$onCustomTabs = _ref.onCustomTabs,
    onCustomTabs = _ref$onCustomTabs === void 0 ? null : _ref$onCustomTabs;
  var _useForm = (0, _reactHookForm.useForm)(),
    control = _useForm.control,
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors,
    watch = _useForm.watch,
    setValue = _useForm.setValue;
  var theme = (0, _material.useTheme)();
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    editors = _useState2[0],
    setEditors = _useState2[1];
  var refTimeoutToken = (0, _react.useRef)(null);
  var refShouldClose = (0, _react.useRef)(false);
  var refSubmitButton = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    editAddCompanyId = _useState4[0],
    setEditAddCompanyId = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editAddLocationId = _useState6[0],
    setEditAddLocationId = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedRoles = _useState8[0],
    setSelectedRole = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedPermission = _useState0[0],
    setSelectedPermission = _useState0[1];
  var _useState1 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    companies = _useState10[0],
    setCompanies = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    company = _useState12[0],
    setCompany = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    inputCompanyValue = _useState14[0],
    setInputCompanyValue = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    locations = _useState16[0],
    setLocations = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    location = _useState18[0],
    setLocation = _useState18[1];
  var _useState19 = (0, _react.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    inputLocationValue = _useState20[0],
    setInputLocationValue = _useState20[1];
  var _useState21 = (0, _react.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    roles = _useState22[0],
    setRole = _useState22[1];
  var _useState23 = (0, _react.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    permissions = _useState24[0],
    setPermissions = _useState24[1];
  var _useState25 = (0, _react.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    customFields = _useState26[0],
    setCustomFields = _useState26[1];
  var _useState27 = (0, _react.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    user = _useState28[0],
    setUser = _useState28[1];
  var _useState29 = (0, _react.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    customTabs = _useState30[0],
    setCustomTabs = _useState30[1];
  var _useState31 = (0, _react.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    tabOptions = _useState32[0],
    setTabOptions = _useState32[1];
  var ITEM_HEIGHT = 48;
  var ITEM_PADDING_TOP = 8;
  var MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  var _useState33 = (0, _react.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    newPassword = _useState34[0],
    setNewPassword = _useState34[1];
  var _useState35 = (0, _react.useState)(""),
    _useState36 = _slicedToArray(_useState35, 2),
    confirmPassword = _useState36[0],
    setConfirmPassword = _useState36[1];
  var _useState37 = (0, _react.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    tabValue = _useState38[0],
    setTabValue = _useState38[1];
  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
  };
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var responseRoles, responsePermissions;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _authscape.apiService)().get("/UserManagement/GetRoles");
            case 2:
              responseRoles = _context.sent;
              if (responseRoles != null && responseRoles.status == 200) {
                setRole(responseRoles.data);
              }
              _context.next = 6;
              return (0, _authscape.apiService)().get("/UserManagement/GetPermissions");
            case 6:
              responsePermissions = _context.sent;
              if (responsePermissions != null && responsePermissions.status == 200) {
                setPermissions(responsePermissions.data);
              }
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var fetchUserData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, roleNames, index, role, permissionNames, _index, permission;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _authscape.apiService)().get("/UserManagement/GetUser?userId=" + userId);
          case 2:
            response = _context2.sent;
            if (response != null && response.status == 200) {
              setUser(response.data);
              if (response.data.company != null) {
                setCompany(response.data.company);
              }
              if (response.data.location != null) {
                setLocation(response.data.location);
              }
              if (response.data.customFields != null) {
                setCustomFields(response.data.customFields);
              }
              setEditors(_objectSpread({}, editors));
            }

            // assign all selected roles
            if (response.data.roles != null) {
              roleNames = [];
              for (index = 0; index < response.data.roles.length; index++) {
                role = response.data.roles[index];
                roleNames.push(role);
              }
              setSelectedRole(roleNames);
            }

            // assign all selected permissions
            if (response.data.permissions != null) {
              permissionNames = [];
              for (_index = 0; _index < response.data.permissions.length; _index++) {
                permission = response.data.permissions[_index];
                permissionNames.push(permission);
              }
              setSelectedPermission(permissionNames);
            }
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function fetchUserData() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (userId != -1) {
      fetchUserData();
    }
  }, [userId]);
  (0, _react.useEffect)(function () {
    if (userId != null && onCustomTabs != null) {
      var fetchData = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var tabs;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return onCustomTabs(platformType, userId);
              case 2:
                tabs = _context3.sent;
                if (tabs != null) {
                  setCustomTabs(tabs);
                }
              case 4:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function fetchData() {
          return _ref4.apply(this, arguments);
        };
      }();
      fetchData();
    }
  }, [userId]);
  var fields = platformType === 1 ? ["FirstName", "LastName", "IsActive", "EmailConfirmed", "Email", "PhoneNumber"] : ["FirstName", "LastName", "IsActive", "Email", "PhoneNumber"];
  function a11yProps(index) {
    return {
      id: "simple-tab-".concat(index),
      'aria-controls': "simple-tabpanel-".concat(index)
    };
  }
  var refreshTabOptions = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var customTabResponse, dataElement;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _authscape.apiService)().get("/UserManagement/GetCustomTabs?platformType=" + platformType);
          case 2:
            customTabResponse = _context4.sent;
            if (customTabResponse != null && customTabResponse.status == 200) {
              dataElement = customTabResponse.data;
              setTabOptions(dataElement);
              if (dataElement.length > 0) {
                setTabValue(dataElement[0].id);
              }
            }
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function refreshTabOptions() {
      return _ref5.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response2;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _authscape.apiService)().get("/UserManagement/GetCompanies?name=" + inputCompanyValue);
            case 2:
              response2 = _context5.sent;
              if (response2 != null && response2.status == 200) {
                setCompanies(response2.data);
              }
              _context5.next = 6;
              return refreshTabOptions();
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function fetchData() {
        return _ref6.apply(this, arguments);
      };
    }();

    // sets a delay so the user can type
    clearTimeout(refTimeoutToken.current);
    refTimeoutToken.current = setTimeout(function () {
      clearTimeout(refTimeoutToken.current);
      fetchData();
    }, 1000);
  }, [inputCompanyValue]);
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var response, _response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(company != null)) {
                _context6.next = 12;
                break;
              }
              if (!(inputLocationValue == null || inputLocationValue == "")) {
                _context6.next = 8;
                break;
              }
              _context6.next = 4;
              return (0, _authscape.apiService)().get("/UserManagement/GetLocations?companyId=" + company.id);
            case 4:
              response = _context6.sent;
              if (response != null && response.status == 200) {
                setLocations(response.data);
              }
              _context6.next = 12;
              break;
            case 8:
              _context6.next = 10;
              return (0, _authscape.apiService)().get("/UserManagement/GetLocations?companyId=" + company.id + "&name=" + inputLocationValue);
            case 10:
              _response = _context6.sent;
              if (_response != null && _response.status == 200) {
                setLocations(_response.data);
              }
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function fetchData() {
        return _ref7.apply(this, arguments);
      };
    }();
    if (user != null || userId == -1) {
      fetchData();
    }
  }, [user, userId, inputLocationValue, company]);
  var saveChanges = function saveChanges(shouldClose) {
    refShouldClose.current = shouldClose;
    refSubmitButton.current.click();
  };
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      saveChanges: saveChanges
    };
  });
  return /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      backgroundColor: theme.palette.background["default"],
      minHeight: '100vh',
      color: theme.palette.text.primary
    }
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit(/*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data) {
        var userCustomFields, response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              userCustomFields = [];
              customFields && customFields.forEach(/*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(customField) {
                  var newValue, dateObject, simpleDate, newBlob, _data, _response2;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        newValue =
                        // customField.customFieldType == 2 ? 
                        // draftToHTML(editors[customField.customFieldId].getCurrentContent()) 
                        // : 
                        data[customField.customFieldId];
                        if (!(newValue != null && typeof newValue === 'string')) {
                          _context7.next = 5;
                          break;
                        }
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: newValue.toString()
                        });
                        _context7.next = 26;
                        break;
                      case 5:
                        if (!(newValue != null && typeof newValue === 'boolean')) {
                          _context7.next = 9;
                          break;
                        }
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: newValue.toString()
                        });
                        _context7.next = 26;
                        break;
                      case 9:
                        if (!(newValue != null && _typeof(newValue) === 'object')) {
                          _context7.next = 15;
                          break;
                        }
                        dateObject = new Date(newValue);
                        simpleDate = dateObject.toISOString().split('T')[0];
                        userCustomFields.push({
                          customFieldId: customField.customFieldId,
                          name: customField.name,
                          isRequired: customField.isRequired,
                          customFieldType: customField.customFieldType,
                          value: simpleDate.toString()
                        });
                        _context7.next = 26;
                        break;
                      case 15:
                        if (!(newValue instanceof Blob)) {
                          _context7.next = 26;
                          break;
                        }
                        newBlob = new Blob([newValue], {
                          type: newValue.type
                        });
                        _data = new FormData();
                        _data.append("file", newBlob);
                        _data.append("identifier", companyId);
                        _data.append("platformType", 2); // company
                        _data.append("customFieldId", customField.customFieldId);
                        _context7.next = 24;
                        return (0, _authscape.apiService)().post("/UserManagement/UploadCustomFieldImage", _data);
                      case 24:
                        _response2 = _context7.sent;
                        if (_response2 != null && _response2.status == 200) {
                          userCustomFields.push({
                            customFieldId: customField.customFieldId,
                            name: customField.name,
                            isRequired: customField.isRequired,
                            customFieldType: customField.customFieldType,
                            value: _response2.data
                          });
                        }
                      case 26:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function (_x2) {
                  return _ref9.apply(this, arguments);
                };
              }());
              console.log('Form data:', data);
              console.log('EmailConfirmed value:', data.EmailConfirmed);
              console.log('IsActive value:', data.IsActive);
              _context8.next = 7;
              return (0, _authscape.apiService)().put("/UserManagement/UpdateUser", {
                id: userId,
                firstName: data.FirstName,
                lastName: data.LastName,
                companyId: company != null ? company.id : null,
                locationId: location != null ? location.id : null,
                email: data.Email,
                phoneNumber: data.PhoneNumber,
                isActive: data.IsActive,
                emailConfirmed: data.EmailConfirmed,
                roles: selectedRoles != "" ? selectedRoles : null,
                permissions: selectedPermission != "" ? selectedPermission : null,
                customFields: userCustomFields
              });
            case 7:
              response = _context8.sent;
              console.log('Update response:', response);
              if (response != null && response.status == 200) {
                if (onSaved != null) {
                  onSaved(refShouldClose.current, 1, userId, response.data);
                }
              }
            case 10:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      return function (_x) {
        return _ref8.apply(this, arguments);
      };
    }()),
    noValidate: true,
    autoComplete: "off"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 4,
    sx: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : "#f5f8fa",
      borderRadius: 2,
      border: "1px solid ".concat(theme.palette.divider),
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    alt: "Remy Sharp",
    src: "/static/images/avatar/1.jpg",
    sx: {
      width: 100,
      height: 100
    }
  })), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      fontWeight: "bold",
      paddingBottom: 1
    }
  }, "About this contact"), renderSystemField(userId, user, control, errors, register, fields), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      fontWeight: "bold",
      paddingTop: 1,
      paddingBottom: 1
    }
  }, "Companies and Locations"), /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Autocomplete, {
    id: "companySelect",
    sx: {
      paddingTop: 2
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.title || option;
    },
    options: [].concat(_toConsumableArray(companies), [{
      title: "Add Company",
      isAddOption: true
    }]) // Add option appended here
    ,
    autoComplete: true,
    includeInputInList: true,
    filterSelectedOptions: true,
    value: company,
    noOptionsText: "No companies",
    onChange: function onChange(event, newValue) {
      if (newValue !== null && newValue !== void 0 && newValue.isAddOption) {
        setEditAddCompanyId(-1);

        // Handle "Add Company" logic
        // const newCompany = prompt("Enter the new company name:"); // Prompt the user for input
        // if (newCompany) {
        //   const updatedCompany = { title: newCompany };
        //   setCompanies([...companies, updatedCompany]); // Add the new company to the list
        //   setCompany(updatedCompany); // Select the new company
        // }
      } else {
        setCompany(newValue); // Select an existing company
      }
      setLocation(null);
    },
    onInputChange: function onInputChange(event, newInputValue) {
      setInputCompanyValue(newInputValue);
      setLocation(null);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "Company",
        fullWidth: true
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", _extends({}, props, {
        key: "company-" + option.title
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          display: 'flex',
          width: 44
        }
      }, /*#__PURE__*/_react["default"].createElement(_BusinessRounded["default"], {
        sx: {
          color: 'text.secondary'
        }
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          width: 'calc(100% - 44px)',
          wordWrap: 'break-word'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body2",
        color: option.isAddOption ? "primary" : "text.secondary"
      }, option.title))));
    }
  }), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      textAlign: "right",
      paddingTop: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    onClick: function onClick() {
      setEditAddCompanyId(company != null ? company.id : -1);
    }
  }, "Edit Company"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    onClick: function onClick() {
      setEditAddCompanyId(-1);
    }
  }, "Add Company")), /*#__PURE__*/_react["default"].createElement(_material.Autocomplete, {
    id: "LocationSelect",
    sx: {
      paddingTop: 3
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.title || option;
    },
    options: [].concat(_toConsumableArray(locations), [{
      title: "Add Location",
      isAddOption: true
    }]) // Add option appended here
    ,
    autoComplete: true,
    includeInputInList: true,
    filterSelectedOptions: true,
    value: location,
    noOptionsText: "No locations",
    onChange: function onChange(event, newValue) {
      if (newValue !== null && newValue !== void 0 && newValue.isAddOption) {
        setEditAddLocationId(-1);
      } else {
        setLocation(newValue); // Select an existing location
      }
    },
    onInputChange: function onInputChange(event, newInputValue) {
      setInputLocationValue(newInputValue);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "Location",
        fullWidth: true
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", _extends({}, props, {
        key: "location-" + option.title
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          display: 'flex',
          width: 44
        }
      }, /*#__PURE__*/_react["default"].createElement(_BusinessRounded["default"], {
        sx: {
          color: 'text.secondary'
        }
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          width: 'calc(100% - 44px)',
          wordWrap: 'break-word'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "body2",
        color: option.isAddOption ? "primary" : "text.secondary"
      }, option.title))));
    }
  })), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      textAlign: "right",
      paddingTop: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    onClick: function onClick() {
      setEditAddLocationId(location != null ? location.id : -1);
    }
  }, "Edit Location"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    onClick: function onClick() {
      setEditAddLocationId(-1);
    }
  }, "Add Location")), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      fontWeight: "bold",
      paddingTop: 2
    }
  }, "Roles and Permissions"), /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    sx: {
      marginTop: 3,
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-multiple-checkbox-label"
  }, "Roles"), /*#__PURE__*/_react["default"].createElement(_Select["default"], _extends({
    fullWidth: true,
    labelId: "demo-multiple-checkbox-label",
    id: "demo-multiple-checkbox"
  }, register("roles", {
    required: false
  }), {
    multiple: true,
    value: selectedRoles,
    onChange: function onChange(event) {
      var value = event.target.value;
      setSelectedRole(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value);
    },
    input: /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
      label: "Roles"
    }),
    renderValue: function renderValue(selected) {
      return selected.join(', ');
    },
    MenuProps: MenuProps
  }), roles.map(function (role) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: role.name,
      value: role.name
    }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: selectedRoles.indexOf(role.name) > -1
    }), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: role.name
    }));
  }))), errors.roles && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    color: "red"
  }, "roles", " is required."), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    sx: {
      marginTop: 3,
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "demo-multiple-checkbox-label"
  }, "Permissions"), /*#__PURE__*/_react["default"].createElement(_Select["default"], _extends({
    fullWidth: true,
    labelId: "demo-multiple-checkbox-label",
    id: "demo-multiple-checkbox"
  }, register("permissions", {
    required: false
  }), {
    multiple: true,
    value: selectedPermission,
    onChange: function onChange(event) {
      var value = event.target.value;
      setSelectedPermission(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value);
    },
    input: /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
      label: "Roles"
    }),
    renderValue: function renderValue(selected) {
      return selected.join(', ');
    },
    MenuProps: MenuProps
  }), permissions.map(function (permission) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: permission.name,
      value: permission.name
    }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      checked: selectedPermission.indexOf(permission.name) > -1
    }), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: permission.name
    }));
  }))), errors.permissions && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    color: "red"
  }, "permissions", " is required."))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    size: 8,
    sx: {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : "#f5f8fa",
      borderRadius: 2,
      border: "1px solid ".concat(theme.palette.divider),
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Tabs, {
    value: tabValue,
    onChange: handleTabChange,
    variant: "fullWidth",
    "aria-label": "basic tabs example",
    centered: true
  }, tabOptions.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Tab, {
      key: tab.id,
      label: tab.name,
      value: tab.id
    });
  }), customTabs != null && customTabs.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Tab, {
      key: "custom-" + tab.id,
      label: tab.title,
      value: tab.id
    });
  }))), /*#__PURE__*/_react["default"].createElement(_system.Box, null, tabOptions.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, tabValue === tab.id && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, customFields && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderCustomField(userId, user, control, errors, register, setValue, customFields.filter(function (s) {
      return s.tabId == tab.id;
    })))));
  }), customTabs != null && customTabs.map(function (tab, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, tabValue === tab.id && /*#__PURE__*/_react["default"].createElement(_system.Box, null, tab.content));
  }))), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    ref: refSubmitButton,
    variant: "contained",
    type: "submit",
    sx: {
      display: "none"
    }
  }, "Save Changes")))), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
    key: "right"
  }, /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "right",
    open: editAddCompanyId != null,
    maxWidth: "lg",
    onClose: function onClose() {
      setEditAddCompanyId(null);
    },
    sx: {
      "& .MuiDrawer-paper": {
        width: "80vw",
        // Set width to 80% of the viewport width
        maxWidth: "1000px" // Optional: Limit the maximum width
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(UserManagement, {
    platformType: 2,
    defaultIdentifier: editAddCompanyId,
    onSaved: (/*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(shouldClose, platformType, id, fields) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              setEditAddCompanyId(null);
              _context9.next = 3;
              return fetchUserData();
            case 3:
              onSaved(shouldClose, platformType, id, fields);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      return function (_x3, _x4, _x5, _x6) {
        return _ref0.apply(this, arguments);
      };
    }())
  })))), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
    key: "right"
  }, /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "right",
    open: editAddLocationId != null,
    maxWidth: "lg",
    onClose: function onClose() {
      setEditAddLocationId(null);
    },
    sx: {
      "& .MuiDrawer-paper": {
        width: "80vw",
        // Set width to 80% of the viewport width
        maxWidth: "1000px" // Optional: Limit the maximum width
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(UserManagement, {
    platformType: 3,
    companyId: company != null ? company.id : -1,
    defaultIdentifier: editAddLocationId,
    onSaved: (/*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(shouldClose, platformType, id, fields) {
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              setEditAddLocationId(null);
              _context0.next = 3;
              return fetchUserData();
            case 3:
              onSaved(shouldClose, platformType, id, fields);
            case 4:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }));
      return function (_x7, _x8, _x9, _x0) {
        return _ref1.apply(this, arguments);
      };
    }())
  })))));
});
UserEditor.displayName = "UserEditor";
var _default = exports["default"] = UserEditor;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserManagement = void 0;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _material = require("@mui/material");
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _UploadRounded = _interopRequireDefault(require("@mui/icons-material/UploadRounded"));
var _authscape = require("authscape");
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
var _KeyboardBackspaceRounded = _interopRequireDefault(require("@mui/icons-material/KeyboardBackspaceRounded"));
var _AddRounded = _interopRequireDefault(require("@mui/icons-material/AddRounded"));
var _SaveRounded = _interopRequireDefault(require("@mui/icons-material/SaveRounded"));
var _SettingsRounded = _interopRequireDefault(require("@mui/icons-material/SettingsRounded"));
var _PasswordRounded = _interopRequireDefault(require("@mui/icons-material/PasswordRounded"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _BusinessRounded = _interopRequireDefault(require("@mui/icons-material/BusinessRounded"));
var _SyncRounded = _interopRequireDefault(require("@mui/icons-material/SyncRounded"));
var _Tab = _interopRequireDefault(require("@mui/material/Tab"));
var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// comment this out when done
// import UserEditor from './UserEditor'; // remove when done
// import CompanyEditor from './CompanyEditor' // remove when done
// import { CSVUsersUpload } from './CSVUsersUpload'; // remove when done
// import { CustomFields } from './CustomFields'; // remove when done
// import LocationEditor from './LocationsEditor';
// import { CrmConnections } from './CrmConnections';
// import { CrmEntityMappings } from './CrmEntityMappings';
// import { CrmFieldMappings } from './CrmFieldMappings';
// import { CrmRelationshipMappings } from './CrmRelationshipMappings';

var UserManagement = exports.UserManagement = function UserManagement(_ref) {
  var _ref$height = _ref.height,
    height = _ref$height === void 0 ? "50vh" : _ref$height,
    _ref$platformType = _ref.platformType,
    platformType = _ref$platformType === void 0 ? 1 : _ref$platformType,
    _ref$defaultIdentifie = _ref.defaultIdentifier,
    defaultIdentifier = _ref$defaultIdentifie === void 0 ? null : _ref$defaultIdentifie,
    _ref$companyId = _ref.companyId,
    companyId = _ref$companyId === void 0 ? null : _ref$companyId,
    _ref$onUploadComplete = _ref.onUploadCompleted,
    onUploadCompleted = _ref$onUploadComplete === void 0 ? null : _ref$onUploadComplete,
    _ref$onAccountCreated = _ref.onAccountCreated,
    onAccountCreated = _ref$onAccountCreated === void 0 ? null : _ref$onAccountCreated,
    _ref$onSaved = _ref.onSaved,
    _onSaved = _ref$onSaved === void 0 ? null : _ref$onSaved,
    _ref$onCustomTabs = _ref.onCustomTabs,
    onCustomTabs = _ref$onCustomTabs === void 0 ? null : _ref$onCustomTabs;
  var theme = (0, _material.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showUserDetails = _useState2[0],
    setShowUserDetails = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showCustomSettings = _useState4[0],
    setShowCustomSettings = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    settingsTab = _useState6[0],
    setSettingsTab = _useState6[1];

  // CRM Integration state
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedCrmConnection = _useState8[0],
    setSelectedCrmConnection = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedCrmEntityMapping = _useState0[0],
    setSelectedCrmEntityMapping = _useState0[1];
  var _useState1 = (0, _react.useState)('fields'),
    _useState10 = _slicedToArray(_useState1, 2),
    crmViewMode = _useState10[0],
    setCrmViewMode = _useState10[1]; // 'fields' or 'relationships'

  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    showArchiveUserDialog = _useState12[0],
    setShowArchiveUserDialog = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showContactDialog = _useState14[0],
    setShowContactDialog = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    inputCompanyValue = _useState16[0],
    setInputCompanyValue = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    allRoles = _useState18[0],
    setAllRoles = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    allCompanies = _useState20[0],
    setAllCompanies = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showChangePasswordDialog = _useState22[0],
    setShowChangePasswordDialog = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    newPassword = _useState24[0],
    setNewPassword = _useState24[1];
  var _useState25 = (0, _react.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    confirmPassword = _useState26[0],
    setConfirmPassword = _useState26[1];
  var _useState27 = (0, _react.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    dataGridRefreshKey = _useState28[0],
    setDataGridRefreshKey = _useState28[1];
  var _useState29 = (0, _react.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    isSaving = _useState30[0],
    setIsSaving = _useState30[1];
  var _useState31 = (0, _react.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    uploadUsersShowDialog = _useState32[0],
    setUploadUsersShowDialog = _useState32[1];
  var _useState33 = (0, _react.useState)(''),
    _useState34 = _slicedToArray(_useState33, 2),
    searchByName = _useState34[0],
    setSearchByName = _useState34[1];
  var _useState35 = (0, _react.useState)(null),
    _useState36 = _slicedToArray(_useState35, 2),
    searchByCompanyId = _useState36[0],
    setSearchByCompanyId = _useState36[1];
  var _useState37 = (0, _react.useState)(null),
    _useState38 = _slicedToArray(_useState37, 2),
    searchByRoleId = _useState38[0],
    setSearchByRoleId = _useState38[1];
  var _useState39 = (0, _react.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    columns = _useState40[0],
    setColumns = _useState40[1];
  var _useState41 = (0, _react.useState)(true),
    _useState42 = _slicedToArray(_useState41, 2),
    activeState = _useState42[0],
    setActiveState = _useState42[1];
  var _useState43 = (0, _react.useState)(null),
    _useState44 = _slicedToArray(_useState43, 2),
    emailConfirmedState = _useState44[0],
    setEmailConfirmedState = _useState44[1];
  var filterLoaded = (0, _react.useRef)(false);
  var userEditorRef = (0, _react.useRef)();
  var _useState45 = (0, _react.useState)([]),
    _useState46 = _slicedToArray(_useState45, 2),
    companies = _useState46[0],
    setCompanies = _useState46[1];
  var _useState47 = (0, _react.useState)(null),
    _useState48 = _slicedToArray(_useState47, 2),
    company = _useState48[0],
    setCompany = _useState48[1];
  var _useState49 = (0, _react.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    showAddCompanyDialog = _useState50[0],
    setShowAddCompanyDialog = _useState50[1];
  var newCompanyName = (0, _react.useRef)();
  var newLocationName = (0, _react.useRef)();
  var newLocationAddress = (0, _react.useRef)();
  var newLocationCity = (0, _react.useRef)();
  var newLocationState = (0, _react.useRef)();
  var newLocationPostalCode = (0, _react.useRef)();
  var newLocationCompanyId = (0, _react.useRef)();
  var newFirstName = (0, _react.useRef)();
  var newLastName = (0, _react.useRef)();
  var newEmail = (0, _react.useRef)();
  var userColumns = [{
    field: 'fullName',
    headerName: 'Full name',
    flex: 1,
    valueGetter: function valueGetter(value, row) {
      return row.firstName + " " + row.lastName;
    }
    // renderCell: (param) => {
    //     return param.row.firstName + " " + param.row.lastName; 
    // }
  }, {
    field: 'isActive',
    headerName: 'Status',
    flex: 1,
    valueGetter: function valueGetter(_, row) {
      return row.isActive;
    },
    valueFormatter: function valueFormatter(value, row) {
      return value == true ? "Active" : "Inactive" + (row.archived ? " (archived)" : "");
    }
  }, {
    field: 'userName',
    flex: 1,
    headerName: 'Email',
    editable: false,
    headerClassName: 'invoiceHeaderColumn'
  }, {
    field: 'company',
    headerName: 'Company',
    flex: 1,
    valueGetter: function valueGetter(value, row) {
      return row.company.title;
    }
    // renderCell: (param) => {
    //     return param.row.company != null ? param.row.company.title : ""; 
    // }
  }, {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    flex: 1,
    valueGetter: function valueGetter(value, row) {
      return row.phoneNumber;
    }
    // renderCell: (param) => {
    //     return param.row.company != null ? param.row.company.title : ""; 
    // }
  }, {
    field: 'location',
    headerName: 'Location',
    flex: 1,
    valueGetter: function valueGetter(_, row) {
      return row.location.title;
    }
    // renderCell: (param) => {
    //     return param.row.location != null ? param.row.location.title : ""; 
    // }
  }, {
    field: 'roles',
    headerName: 'Roles',
    flex: 1
    // renderCell: (param) => {
    //     return param.row.roles; 
    // }
  }, {
    field: 'permissions',
    headerName: 'Permissions',
    flex: 1
    // renderCell: (param) => {
    //     return param.row.permissions; 
    // }
  }
  // {
  //     field: 'permissions',
  //     headerName: 'Permissions',
  //     flex: 1,    
  //     renderCell: (param) => {
  //         debugger;
  //         return param.row.permissions; 
  //     }
  // }
  ];
  var companiesColumns = [{
    field: 'logo',
    headerName: 'Logo',
    flex: 1,
    renderCell: function renderCell(param) {
      return /*#__PURE__*/_react["default"].createElement(_system.Box, {
        sx: {
          backgroundImage: "url(".concat(param.row.logo, ")"),
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          marginTop: 1
        },
        height: 50
      });
    }
  }, {
    field: 'title',
    headerName: 'Name',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.title;
    }
  }, {
    field: 'numberOfLocations',
    headerName: 'Number of Locations',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.numberOfLocations != null ? param.row.numberOfLocations : "";
    }
  }, {
    field: 'numberOfUsers',
    headerName: 'Number of Users',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.numberOfUsers != null ? param.row.numberOfUsers : "";
    }
  }];
  var locationColumns = [{
    field: 'title',
    headerName: 'Name',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.title;
    }
  }, {
    field: 'address',
    headerName: 'Address',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.address != null ? param.row.address : "";
    }
  }, {
    field: 'city',
    headerName: 'City',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.city != null ? param.row.city : "";
    }
  }, {
    field: 'state',
    headerName: 'State',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.state != null ? param.row.state : "";
    }
  }, {
    field: 'zipCode',
    headerName: 'ZipCode',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.zipCode != null ? param.row.zipCode : "";
    }
  }, {
    field: 'isDeactivated',
    headerName: 'Account Status',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.isDeactivated != null ? !param.row.isDeactivated ? "Active" : "Deactive" : "";
    }
  }, {
    field: 'company',
    headerName: 'Company',
    flex: 1,
    renderCell: function renderCell(param) {
      return param.row.company != null ? param.row.company.title : "";
    }
  }];
  (0, _react.useEffect)(function () {
    if (defaultIdentifier == null) {
      setDataGridRefreshKey(dataGridRefreshKey + 1);
    }
  }, [searchByName, columns, activeState, emailConfirmedState]);
  (0, _react.useEffect)(function () {
    if (!filterLoaded.current) {
      filterLoaded.current = true;
      getAllCompanies();
      getAllRoles();
      getAllCustomFields();
    }
  }, [filterLoaded.current]);
  var getDataGrid = function getDataGrid() {
    var response = "";
    if (platformType == 1) {
      response = "/UserManagement/GetUsers";
    } else if (platformType == 2) {
      response = "/UserManagement/GetCompanies";
    } else if (platformType == 3) {
      response = "/UserManagement/GetLocations";
    }
    return response;
  };
  var getColumns = function getColumns(customFields) {
    if (platformType == 1) {
      var cols = [].concat(userColumns, _toConsumableArray(customFields.map(function (field, i) {
        return {
          field: "customField".concat(i + 1),
          headerName: field.name,
          flex: 1,
          valueGetter: function valueGetter(_, row) {
            if (row.customFields) {
              var cf = row.customFields.find(function (f) {
                return f.customFieldId == field.id;
              });
              if (cf) return cf.value;
            }
            return null;
          },
          valueFormatter: function valueFormatter(value) {
            // Format Yes/No fields (customFieldType === 5)
            if (field.customFieldType === 5) {
              if (value === "true" || value === true) return "Yes";
              if (value === "false" || value === false || value === null || value === undefined || value === "") return "No";
            }
            return value;
          }
        };
      })), [{
        field: '',
        headerName: '',
        flex: 1,
        renderCell: function renderCell(param) {
          return /*#__PURE__*/_react["default"].createElement(_material.Button, {
            onClick: function onClick(e) {
              e.stopPropagation();
              setShowArchiveUserDialog(param.row);
            }
          }, param.row.isActive ? "Archive" : "Activate");
        }
      }]);
      setColumns(cols);
    } else if (platformType == 2) {
      var _cols = [].concat(companiesColumns, _toConsumableArray(customFields.map(function (field, i) {
        return {
          field: "customField".concat(i + 1),
          headerName: field.name,
          flex: 1,
          valueGetter: function valueGetter(_, row) {
            if (row.customFields) {
              var cf = row.customFields.find(function (f) {
                return f.customFieldId == field.id;
              });
              if (cf) return cf.value;
            }
            return null;
          },
          valueFormatter: function valueFormatter(value) {
            // Format Yes/No fields (customFieldType === 5)
            if (field.customFieldType === 5) {
              if (value === "true" || value === true) return "Yes";
              if (value === "false" || value === false || value === null || value === undefined || value === "") return "No";
            }
            return value;
          }
        };
      })), [{
        field: '',
        headerName: '',
        flex: 1,
        renderCell: function renderCell(param) {
          return /*#__PURE__*/_react["default"].createElement(_material.Button, {
            onClick: function onClick(e) {
              e.stopPropagation();
              setShowArchiveUserDialog(param.row);
            }
          }, param.row.isActive ? "Archive" : "Activate");
        }
      }]);
      setColumns(_cols);
    } else if (platformType == 3) {
      var _cols2 = [].concat(locationColumns, _toConsumableArray(customFields.map(function (field, i) {
        return {
          field: "customField".concat(i + 1),
          headerName: field.name,
          flex: 1,
          valueGetter: function valueGetter(_, row) {
            if (row.customFields) {
              var cf = row.customFields.find(function (f) {
                return f.customFieldId == field.id;
              });
              if (cf) return cf.value;
            }
            return null;
          },
          valueFormatter: function valueFormatter(value) {
            // Format Yes/No fields (customFieldType === 5)
            if (field.customFieldType === 5) {
              if (value === "true" || value === true) return "Yes";
              if (value === "false" || value === false || value === null || value === undefined || value === "") return "No";
            }
            return value;
          }
        };
      })), [{
        field: '',
        headerName: '',
        flex: 1,
        renderCell: function renderCell(param) {
          return /*#__PURE__*/_react["default"].createElement(_material.Button, {
            onClick: function onClick(e) {
              e.stopPropagation();
              setShowArchiveUserDialog(param.row);
            }
          }, param.row.isActive ? "Archive" : "Activate");
        }
      }]);
      setColumns(_cols2);
    }
  };
  var getAllCompanies = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var results, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            results = [];
            _context.next = 3;
            return (0, _authscape.apiService)().get("/UserManagement/GetAllCompanies");
          case 3:
            response = _context.sent;
            if (response != null && response.status == 200) {
              response.data.forEach(function (element) {
                results.push({
                  label: element.title,
                  id: element.id
                });
              });
              setAllCompanies(results);
            }
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getAllCompanies() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getAllCustomFields = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _authscape.apiService)().get("/UserManagement/GetCustomFields?platformType=".concat(platformType, "&IsDatagrid=true"));
          case 2:
            res = _context2.sent;
            if (res != null && res.status == 200) {
              getColumns(res.data);
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getAllCustomFields() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getAllRoles = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var results, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            results = [];
            _context3.next = 3;
            return (0, _authscape.apiService)().get("/UserManagement/GetRoles");
          case 3:
            response = _context3.sent;
            if (response != null && response.status == 200) {
              response.data.forEach(function (element) {
                results.push({
                  label: element.name,
                  id: element.id
                });
              });
              setAllRoles(results);
            }
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getAllRoles() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (inputCompanyValue != null) {
      var fetchData = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var response;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _authscape.apiService)().get("/UserManagement/GetCompaniesForLocation?searchBName=" + inputCompanyValue);
              case 2:
                response = _context4.sent;
                if (response != null && response.status == 200) {
                  setCompanies(response.data);
                }
              case 4:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function fetchData() {
          return _ref5.apply(this, arguments);
        };
      }();
      fetchData();
    }
  }, [inputCompanyValue]);
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.AppBar, {
    color: "invert",
    position: "static",
    sx: {
      borderRadius: 1,
      paddingLeft: 3,
      paddingRight: 3,
      minHeight: 50
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Toolbar, {
    disableGutters: true
  }, !showCustomSettings && showUserDetails && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingRight: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_KeyboardBackspaceRounded["default"], {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      },
      mr: 1,
      cursor: "pointer"
    },
    onClick: function onClick() {
      setShowUserDetails(null);
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  })), showCustomSettings && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingRight: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_KeyboardBackspaceRounded["default"], {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      },
      mr: 1,
      cursor: "pointer"
    },
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getAllCustomFields();
          case 2:
            setDataGridRefreshKey(dataGridRefreshKey + 1);
            setShowCustomSettings(false);
            setSettingsTab(0);
            setSelectedCrmConnection(null);
            setSelectedCrmEntityMapping(null);
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))
  })), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  })), !showCustomSettings && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (showUserDetails || defaultIdentifier) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingRight: 2,
      paddingLeft: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_SaveRounded["default"], null),
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            userEditorRef.current.saveChanges();
          case 1:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))
  }, "Save")), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  })), (showUserDetails || defaultIdentifier) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingRight: 2,
      paddingLeft: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_SaveRounded["default"], null),
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            setIsSaving(true);
            userEditorRef.current.saveChanges(true);
            setShowUserDetails(null);
          case 3:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))
  }, "Save & close")), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  })), showUserDetails && platformType == 1 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingRight: 2,
      paddingLeft: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_PasswordRounded["default"], null),
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            setShowChangePasswordDialog(true);
          case 1:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))
  }, "Change Password")), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  })), !showUserDetails && defaultIdentifier == null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingRight: 2,
      paddingLeft: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_AddRounded["default"], null),
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            setShowContactDialog(true);
          case 1:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))
  }, platformType == 1 ? "Add User" : platformType == 2 ? "Add Company" : "Add Location")), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  })), !showUserDetails && defaultIdentifier == null && platformType == 1 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingRight: 2,
      paddingLeft: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_UploadRounded["default"], null),
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            setUploadUsersShowDialog(true);
          case 1:
          case "end":
            return _context0.stop();
        }
      }, _callee0);
    }))
  }, "Upload Users")), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    orientation: "vertical",
    flexItem: true
  }))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flexGrow: 1,
      display: {
        xs: 'none',
        md: 'flex'
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flexGrow: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: "Settings"
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    sx: {
      p: 0
    },
    onClick: function onClick() {
      setShowCustomSettings(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_SettingsRounded["default"], {
    sx: {
      fontSize: 25
    }
  }))), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    sx: {
      mt: '45px'
    },
    id: "menu-appbar"
    // anchorEl={anchorElUser}
    ,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  })))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      marginTop: 1,
      padding: 2,
      borderRadius: 1,
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
    }
  }, showUserDetails == null && defaultIdentifier == null && platformType == 1 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingBottom: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 3
  }, /*#__PURE__*/_react["default"].createElement(_authscape.AutoSaveTextField, {
    label: "name or email ",
    fullWidth: true,
    onChanged: function onChanged(value) {
      setSearchByName(value);
      setDataGridRefreshKey(dataGridRefreshKey + 1);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 3
  }, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    options: allCompanies,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({}, params, {
        label: "Companies"
      }));
    },
    onChange: function onChange(event, newValue) {
      if (newValue != null) {
        setSearchByCompanyId(newValue.id);
        setDataGridRefreshKey(dataGridRefreshKey + 1);
      } else {
        setSearchByCompanyId(null);
        setDataGridRefreshKey(dataGridRefreshKey + 1);
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 3
  }, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    disablePortal: true,
    options: allRoles,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({}, params, {
        label: "Roles"
      }));
    },
    onChange: function onChange(event, newValue) {
      if (newValue != null) {
        setSearchByRoleId(newValue.id);
        setDataGridRefreshKey(dataGridRefreshKey + 1);
      } else {
        setSearchByRoleId(null);
        setDataGridRefreshKey(dataGridRefreshKey + 1);
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 1.5
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.InputLabel, {
    id: "demo-simple-select-label"
  }, "State"), /*#__PURE__*/_react["default"].createElement(_material.Select, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: activeState ? 1 : 0,
    label: "State",
    onChange: function onChange(evn, newVal) {
      if (evn.target.value == 0) {
        setActiveState(false);
      } else {
        setActiveState(true);
      }
      setDataGridRefreshKey(dataGridRefreshKey + 1);
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 0
  }, "Deactivated"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 1
  }, "Activated")))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 1.5
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.InputLabel, {
    id: "email-confirmed-label"
  }, "Email Confirmed"), /*#__PURE__*/_react["default"].createElement(_material.Select, {
    labelId: "email-confirmed-label",
    id: "email-confirmed-select",
    value: emailConfirmedState === null ? 2 : emailConfirmedState ? 1 : 0,
    label: "Email Confirmed",
    onChange: function onChange(evn) {
      if (evn.target.value == 0) {
        setEmailConfirmedState(false);
      } else if (evn.target.value == 1) {
        setEmailConfirmedState(true);
      } else {
        setEmailConfirmedState(null);
      }
      setDataGridRefreshKey(dataGridRefreshKey + 1);
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 2
  }, "All"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 0
  }, "Not Confirmed"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 1
  }, "Confirmed")))))), showUserDetails == null && defaultIdentifier == null && platformType == 2 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingBottom: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 6
  }, /*#__PURE__*/_react["default"].createElement(_authscape.AutoSaveTextField, {
    label: "Company Name",
    fullWidth: true,
    onChanged: function onChanged(value) {
      setSearchByName(value);
      setDataGridRefreshKey(dataGridRefreshKey + 1);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.InputLabel, {
    id: "demo-simple-select-label"
  }, "State"), /*#__PURE__*/_react["default"].createElement(_material.Select, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: activeState ? 1 : 0,
    label: "State",
    onChange: function onChange(evn, newVal) {
      if (evn.target.value == 0) {
        setActiveState(false);
      } else {
        setActiveState(true);
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 0
  }, "Deactivated"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 1
  }, "Activated")))))), showUserDetails == null && defaultIdentifier == null && platformType == 3 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingBottom: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 6
  }, /*#__PURE__*/_react["default"].createElement(_authscape.AutoSaveTextField, {
    label: "Location Name",
    fullWidth: true,
    onChanged: function onChanged(value) {
      setSearchByName(value);
      setDataGridRefreshKey(dataGridRefreshKey + 1);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.InputLabel, {
    id: "demo-simple-select-label"
  }, "State"), /*#__PURE__*/_react["default"].createElement(_material.Select, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: activeState ? 1 : 0,
    label: "State",
    onChange: function onChange(evn, newVal) {
      if (evn.target.value == 0) {
        setActiveState(false);
      } else {
        setActiveState(true);
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 0
  }, "Deactivated"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 1
  }, "Activated")))))), !showCustomSettings && /*#__PURE__*/_react["default"].createElement(_system.Box, null, showUserDetails == null && defaultIdentifier == null && !isSaving && /*#__PURE__*/_react["default"].createElement(_authscape.EditableDatagrid, {
    key: dataGridRefreshKey,
    height: height,
    pageSize: 25,
    url: getDataGrid(),
    columns: columns,
    params: {
      searchByName: searchByName,
      searchByCompanyId: searchByCompanyId,
      searchByRoleId: searchByRoleId,
      name: searchByName,
      isActive: activeState,
      emailConfirmed: emailConfirmedState
    },
    onRowClick: function onRowClick(row) {
      setShowUserDetails(row.id);
    }
  }), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      backgroundColor: theme.palette.background["default"],
      minHeight: '100vh'
    }
  }, (showUserDetails != null || defaultIdentifier != null) && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      width: '100%'
    }
  }, platformType == 1 && /*#__PURE__*/_react["default"].createElement(UserEditor, {
    platformType: platformType,
    onCustomTabs: onCustomTabs,
    ref: userEditorRef,
    userId: defaultIdentifier != null ? defaultIdentifier : showUserDetails,
    onSaved: function onSaved(shouldClose, platformType, userId, fields) {
      setIsSaving(false);
      setDataGridRefreshKey(function (prev) {
        return prev + 1;
      });
      if (_onSaved != null) {
        if (shouldClose == null) {
          shouldClose = false;
        }
        _onSaved(shouldClose, platformType, userId, fields);
      }
    }
  }), platformType == 2 && /*#__PURE__*/_react["default"].createElement(CompanyEditor, {
    companyId: defaultIdentifier != null ? defaultIdentifier : showUserDetails,
    onCustomTabs: onCustomTabs,
    platformType: platformType,
    ref: userEditorRef,
    onSaved: function onSaved(shouldClose, platformType, userId, fields) {
      setIsSaving(false);
      setDataGridRefreshKey(function (prev) {
        return prev + 1;
      });

      // need to add a way to close the company editor
      if (_onSaved != null) {
        if (shouldClose == null) {
          shouldClose = false;
        }
        _onSaved(shouldClose, platformType, userId, fields);
      }
    }
  }), platformType == 3 && /*#__PURE__*/_react["default"].createElement(LocationEditor, {
    locationId: defaultIdentifier != null ? defaultIdentifier : showUserDetails,
    onCustomTabs: onCustomTabs,
    platformType: platformType,
    ref: userEditorRef,
    onSaved: function onSaved(shouldClose, platformType, userId, fields) {
      setIsSaving(false);
      setDataGridRefreshKey(function (prev) {
        return prev + 1;
      });
      if (_onSaved != null) {
        if (shouldClose == null) {
          shouldClose = false;
        }
        _onSaved(shouldClose, platformType, userId, fields);
      }
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_material.Backdrop, {
    sx: {
      color: '#fff',
      zIndex: function zIndex(theme) {
        return theme.zIndex.drawer + 1;
      }
    },
    open: isSaving
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    color: "inherit"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    color: "inherit"
  }, "Saving..."))), /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    open: showChangePasswordDialog,
    onClose: function onClose() {
      setShowChangePasswordDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogTitle, {
    id: "alert-dialog-title"
  }, "Change Password"), /*#__PURE__*/_react["default"].createElement(_material.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_material.DialogContentText, {
    id: "alert-dialog-description"
  }, "Please provide the new password that you want to change for this users account."), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    id: "txtNewPassword",
    label: "New Password",
    variant: "outlined",
    fullWidth: true,
    onChange: function onChange(val) {
      setNewPassword(val.currentTarget.value);
    }
  })), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    id: "txtConfirmPassword",
    label: "Confirm Password",
    variant: "outlined",
    fullWidth: true,
    onChange: function onChange(val) {
      setConfirmPassword(val.currentTarget.value);
    }
  }), newPassword !== confirmPassword && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    color: "red"
  }, "New Password and Confirm Password", " does not match.")))), /*#__PURE__*/_react["default"].createElement(_material.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      setShowChangePasswordDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
      var response;
      return _regeneratorRuntime().wrap(function _callee1$(_context1) {
        while (1) switch (_context1.prev = _context1.next) {
          case 0:
            if (!(newPassword != null && confirmPassword != null && confirmPassword != "" && newPassword != "")) {
              _context1.next = 5;
              break;
            }
            _context1.next = 3;
            return (0, _authscape.apiService)().put("/UserManagement/ChangeUserPassword", {
              userId: parseInt(showUserDetails),
              password: newPassword
            });
          case 3:
            response = _context1.sent;
            if (response.data != null && response.data.error != null) {
              alert(response.data.error);
            } else {
              setShowChangePasswordDialog(false);
            }
          case 5:
          case "end":
            return _context1.stop();
        }
      }, _callee1);
    }))
  }, "Change Password"))), showArchiveUserDialog && /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    open: showArchiveUserDialog,
    onClose: function onClose() {
      setShowArchiveUserDialog(null);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogTitle, {
    id: "alert-dialog-title"
  }, showArchiveUserDialog.isActive == true && platformType == 1 && "Archive User", showArchiveUserDialog.isActive == true && platformType == 2 && "Archive Company", showArchiveUserDialog.isActive == true && platformType == 3 && "Archive Location", showArchiveUserDialog.isActive == false && platformType == 1 && "Activate User", showArchiveUserDialog.isActive == false && platformType == 2 && "Activate Company", showArchiveUserDialog.isActive == false && platformType == 3 && "Activate Location"), /*#__PURE__*/_react["default"].createElement(_material.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_material.DialogContentText, {
    id: "alert-dialog-description"
  }, showArchiveUserDialog.isActive == true && platformType == 1 && "Are you sure you want to archive " + showArchiveUserDialog.firstName + " " + showArchiveUserDialog.lastName, showArchiveUserDialog.isActive == true && platformType == 2 && "Are you sure you want to archive this company?", showArchiveUserDialog.isActive == true && platformType == 3 && "Are you sure you want to archive this location?", showArchiveUserDialog.isActive == false && platformType == 1 && "Are you sure you want to activate " + showArchiveUserDialog.firstName + " " + showArchiveUserDialog.lastName, showArchiveUserDialog.isActive == false && platformType == 2 && "Are you sure you want to activate " + showArchiveUserDialog.title, showArchiveUserDialog.isActive == false && platformType == 3 && "Are you sure you want to activate " + showArchiveUserDialog.address + " " + showArchiveUserDialog.city + " " + showArchiveUserDialog.state + " " + showArchiveUserDialog.zipCode)), /*#__PURE__*/_react["default"].createElement(_material.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      setShowArchiveUserDialog(null);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (!showArchiveUserDialog.isActive) {
              _context10.next = 16;
              break;
            }
            if (!(platformType == 1)) {
              _context10.next = 6;
              break;
            }
            _context10.next = 4;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ArchiveUser?id=".concat(showArchiveUserDialog.id));
          case 4:
            _context10.next = 14;
            break;
          case 6:
            if (!(platformType == 2)) {
              _context10.next = 11;
              break;
            }
            _context10.next = 9;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ArchiveCompany?id=".concat(showArchiveUserDialog.id));
          case 9:
            _context10.next = 14;
            break;
          case 11:
            if (!(platformType == 3)) {
              _context10.next = 14;
              break;
            }
            _context10.next = 14;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ArchiveLocation?id=".concat(showArchiveUserDialog.id));
          case 14:
            _context10.next = 29;
            break;
          case 16:
            if (!(platformType == 1)) {
              _context10.next = 21;
              break;
            }
            _context10.next = 19;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ActivateUser?id=".concat(showArchiveUserDialog.id));
          case 19:
            _context10.next = 29;
            break;
          case 21:
            if (!(platformType == 2)) {
              _context10.next = 26;
              break;
            }
            _context10.next = 24;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ActivateCompany?id=".concat(showArchiveUserDialog.id));
          case 24:
            _context10.next = 29;
            break;
          case 26:
            if (!(platformType == 3)) {
              _context10.next = 29;
              break;
            }
            _context10.next = 29;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ActivateLocation?id=".concat(showArchiveUserDialog.id));
          case 29:
            setDataGridRefreshKey(dataGridRefreshKey + 1);
            setShowArchiveUserDialog(null);
          case 31:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }))
  }, "Yes"))), /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    open: showContactDialog,
    onClose: function onClose() {
      setShowContactDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogTitle, {
    id: "alert-dialog-title"
  }, platformType == 1 ? "Setup User Account" : platformType == 2 ? "Setup Company Account" : "Setup Location Account"), /*#__PURE__*/_react["default"].createElement(_material.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_material.DialogContentText, {
    id: "alert-dialog-description"
  }, "Please provide the following information to proceed and complete the account setup."), platformType == 1 && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newFirstName,
    label: "First Name",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newLastName,
    label: "Last Name",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newEmail,
    label: "Email",
    variant: "outlined",
    fullWidth: true
  }))), platformType == 2 && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newCompanyName,
    label: "Company Name",
    variant: "outlined",
    fullWidth: true
  }))), platformType == 3 && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newLocationName,
    label: "Location Name",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newLocationAddress,
    label: "Address",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newLocationCity,
    label: "City",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newLocationState,
    label: "State",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newLocationPostalCode,
    label: "Postal Code",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], {
    id: "companySelect",
    inputRef: newLocationCompanyId,
    sx: {
      paddingTop: 2
    },
    getOptionLabel: function getOptionLabel(option) {
      return option.title || option;
    },
    options: [].concat(_toConsumableArray(companies), [{
      title: "Add Company",
      isAddOption: true
    }]) // Add option appended here
    ,
    autoComplete: true,
    includeInputInList: true,
    filterSelectedOptions: true,
    value: company,
    noOptionsText: "Company Not Found",
    onChange: function onChange(event, newValue) {
      if (newValue !== null && newValue !== void 0 && newValue.isAddOption) {
        setShowAddCompanyDialog(true);
      } else {
        setCompany(newValue);
      }
    },
    onInputChange: function onInputChange(event, newInputValue) {
      setInputCompanyValue(newInputValue);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({}, params, {
        label: "Company",
        fullWidth: true
      }));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement("li", _extends({}, props, {
        key: "company-" + option.title
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          display: 'flex',
          width: 44
        }
      }, /*#__PURE__*/_react["default"].createElement(_BusinessRounded["default"], {
        sx: {
          color: 'text.secondary'
        }
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        sx: {
          width: 'calc(100% - 44px)',
          wordWrap: 'break-word'
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "body2",
        color: option.isAddOption ? "primary" : "text.secondary"
      }, option.title))));
    }
  })))), /*#__PURE__*/_react["default"].createElement(_material.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      setShowContactDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var newId, firstName, lastName, email, response, companyName, locationName;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            newId = null;
            if (!(platformType == 1)) {
              _context11.next = 33;
              break;
            }
            firstName = newFirstName.current.value;
            lastName = newLastName.current.value;
            email = newEmail.current.value; // Validate input
            if (!(firstName.trim().length == 0 || lastName.trim().length == 0 || email.trim().length == 0 || !/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
              _context11.next = 8;
              break;
            }
            alert("Please type first name, last name, and proper email.");
            return _context11.abrupt("return");
          case 8:
            _context11.prev = 8;
            _context11.next = 11;
            return (0, _authscape.apiService)().post('/UserManagement/CreateAccount', {
              firstName: firstName,
              lastName: lastName,
              email: email
            });
          case 11:
            response = _context11.sent;
            console.log('Create user response:', response);
            console.log('Response status:', response.status);
            console.log('Response data:', response.data);
            console.log('Response data type:', _typeof(response.data));
            console.log('Response data JSON:', JSON.stringify(response.data));
            if (response.data) {
              console.log('Response data keys:', Object.keys(response.data));
              console.log('userId in data:', response.data.userId);
            }
            newId = response.data.userId;
            console.log('New user ID:', newId);

            // Close the dialog
            setShowContactDialog(false);

            // Refresh the datagrid to show the new user
            setDataGridRefreshKey(dataGridRefreshKey + 1);

            // Navigate to the newly created user
            if (newId != null) {
              console.log('Navigating to user:', newId);
              setShowUserDetails(newId);
            } else {
              console.error('User ID is null, cannot navigate');
            }

            // Notify parent component that a user was created
            if (onAccountCreated) {
              onAccountCreated({
                firstName: firstName,
                lastName: lastName,
                email: email,
                userId: newId
              });
            }
            _context11.next = 31;
            break;
          case 26:
            _context11.prev = 26;
            _context11.t0 = _context11["catch"](8);
            console.error('Error creating user:', _context11.t0);
            alert('Error creating user: ' + (_context11.t0.message || 'Unknown error'));
            return _context11.abrupt("return");
          case 31:
            _context11.next = 71;
            break;
          case 33:
            if (!(platformType == 2)) {
              _context11.next = 53;
              break;
            }
            companyName = newCompanyName.current.value;
            if (!(!companyName || companyName.trim().length === 0)) {
              _context11.next = 38;
              break;
            }
            alert("Please enter a company name.");
            return _context11.abrupt("return");
          case 38:
            _context11.prev = 38;
            _context11.next = 41;
            return (0, _authscape.apiService)().post('/UserManagement/UpdateCompany', {
              id: -1,
              title: companyName.trim(),
              isDeactivated: false,
              locations: [],
              customFields: [],
              domains: []
            });
          case 41:
            setShowContactDialog(false);
            setDataGridRefreshKey(dataGridRefreshKey + 1);
            if (onAccountCreated) {
              onAccountCreated({
                companyName: companyName.trim()
              });
            }
            _context11.next = 51;
            break;
          case 46:
            _context11.prev = 46;
            _context11.t1 = _context11["catch"](38);
            console.error('Error creating company:', _context11.t1);
            alert('Error creating company: ' + (_context11.t1.message || 'Unknown error'));
            return _context11.abrupt("return");
          case 51:
            _context11.next = 71;
            break;
          case 53:
            if (!(platformType == 3)) {
              _context11.next = 71;
              break;
            }
            locationName = newLocationName.current.value;
            if (!(!locationName || locationName.trim().length === 0)) {
              _context11.next = 58;
              break;
            }
            alert("Please enter a location name.");
            return _context11.abrupt("return");
          case 58:
            _context11.prev = 58;
            _context11.next = 61;
            return (0, _authscape.apiService)().post('/UserManagement/UpdateLocation', {
              id: -1,
              title: locationName.trim(),
              address: newLocationAddress.current.value || null,
              city: newLocationCity.current.value || null,
              state: newLocationState.current.value || null,
              postalCode: newLocationPostalCode.current.value || null,
              companyId: (company === null || company === void 0 ? void 0 : company.id) || null,
              isDeactivated: false,
              customFields: []
            });
          case 61:
            setShowContactDialog(false);
            setDataGridRefreshKey(dataGridRefreshKey + 1);
            if (onAccountCreated) {
              onAccountCreated({
                name: locationName.trim(),
                address: newLocationAddress.current.value,
                city: newLocationCity.current.value,
                state: newLocationState.current.value,
                postalCode: newLocationPostalCode.current.value,
                companyId: company === null || company === void 0 ? void 0 : company.id
              });
            }
            _context11.next = 71;
            break;
          case 66:
            _context11.prev = 66;
            _context11.t2 = _context11["catch"](58);
            console.error('Error creating location:', _context11.t2);
            alert('Error creating location: ' + (_context11.t2.message || 'Unknown error'));
            return _context11.abrupt("return");
          case 71:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[8, 26], [38, 46], [58, 66]]);
    }))
  }, "Create Account"))), showCustomSettings && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider',
      mb: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tabs["default"], {
    value: settingsTab,
    onChange: function onChange(e, newValue) {
      setSettingsTab(newValue);
      // Reset CRM navigation when switching tabs
      if (newValue !== 1) {
        setSelectedCrmConnection(null);
        setSelectedCrmEntityMapping(null);
        setCrmViewMode('fields');
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Custom Fields"
  }), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    icon: /*#__PURE__*/_react["default"].createElement(_SyncRounded["default"], null),
    iconPosition: "start",
    label: "CRM Integration"
  }))), settingsTab === 0 && /*#__PURE__*/_react["default"].createElement(CustomFields, {
    platformType: platformType
  }), settingsTab === 1 && /*#__PURE__*/_react["default"].createElement(_system.Box, null, !selectedCrmConnection && /*#__PURE__*/_react["default"].createElement(CrmConnections, {
    onSelectConnection: function onSelectConnection(connection) {
      setSelectedCrmConnection(connection);
      setSelectedCrmEntityMapping(null);
    }
  }), selectedCrmConnection && !selectedCrmEntityMapping && /*#__PURE__*/_react["default"].createElement(CrmEntityMappings, {
    connection: selectedCrmConnection,
    onBack: function onBack() {
      setSelectedCrmConnection(null);
      setSelectedCrmEntityMapping(null);
      setCrmViewMode('fields');
    },
    onSelectEntityMapping: function onSelectEntityMapping(mapping) {
      setSelectedCrmEntityMapping(mapping);
      setCrmViewMode('fields');
    }
  }), selectedCrmConnection && selectedCrmEntityMapping && crmViewMode === 'fields' && /*#__PURE__*/_react["default"].createElement(CrmFieldMappings, {
    connection: selectedCrmConnection,
    entityMapping: selectedCrmEntityMapping,
    onBack: function onBack() {
      setSelectedCrmEntityMapping(null);
      setCrmViewMode('fields');
    },
    onOpenRelationships: function onOpenRelationships() {
      setCrmViewMode('relationships');
    }
  }), selectedCrmConnection && selectedCrmEntityMapping && crmViewMode === 'relationships' && /*#__PURE__*/_react["default"].createElement(CrmRelationshipMappings, {
    connection: selectedCrmConnection,
    entityMapping: selectedCrmEntityMapping,
    onBack: function onBack() {
      setCrmViewMode('fields');
    }
  }))), /*#__PURE__*/_react["default"].createElement(CSVUsersUpload, {
    showDialog: uploadUsersShowDialog,
    platformType: platformType,
    onClose: function onClose() {
      setDataGridRefreshKey(dataGridRefreshKey + 1);
      setUploadUsersShowDialog(false);
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    open: showAddCompanyDialog,
    onClose: function onClose() {
      setShowAddCompanyDialog(false);
    },
    "aria-labelledby": "add-company-dialog-title",
    "aria-describedby": "add-company-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogTitle, {
    id: "add-company-dialog-title"
  }, "Add New Company"), /*#__PURE__*/_react["default"].createElement(_material.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_material.DialogContentText, {
    id: "add-company-dialog-description"
  }, "Please provide the company name to create a new company."), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    inputRef: newCompanyName,
    label: "Company Name",
    variant: "outlined",
    fullWidth: true
  })))), /*#__PURE__*/_react["default"].createElement(_material.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      setShowAddCompanyDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var companyName, newId, response, newCompany;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            companyName = newCompanyName.current.value;
            if (!(companyName.trim().length == 0)) {
              _context12.next = 4;
              break;
            }
            alert("Please enter a company name.");
            return _context12.abrupt("return");
          case 4:
            _context12.prev = 4;
            newId = null;
            if (!onAccountCreated) {
              _context12.next = 10;
              break;
            }
            _context12.next = 9;
            return onAccountCreated({
              companyName: companyName
            });
          case 9:
            newId = _context12.sent;
          case 10:
            setShowAddCompanyDialog(false);

            // Refresh the companies list
            _context12.next = 13;
            return (0, _authscape.apiService)().get("/UserManagement/GetCompaniesForLocation?searchBName=" + companyName);
          case 13:
            response = _context12.sent;
            if (response != null && response.status == 200) {
              setCompanies(response.data);

              // Set the newly created company as selected
              newCompany = response.data.find(function (c) {
                return c.title === companyName;
              });
              if (newCompany) {
                setCompany(newCompany);
              }
            }

            // Clear the input
            if (newCompanyName.current) {
              newCompanyName.current.value = '';
            }
            _context12.next = 22;
            break;
          case 18:
            _context12.prev = 18;
            _context12.t0 = _context12["catch"](4);
            console.error('Error creating company:', _context12.t0);
            alert('Error creating company: ' + (_context12.t0.message || 'Unknown error'));
          case 22:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[4, 18]]);
    }))
  }, "Create Company"))))));
};
