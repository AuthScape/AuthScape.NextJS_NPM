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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState10 = _slicedToArray(_useState9, 2),
    editAddLocationId = _useState10[0],
    setEditAddLocationId = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    company = _useState12[0],
    setCompany = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    locations = _useState14[0],
    setLocations = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    location = _useState16[0],
    setLocation = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    inputLocationValue = _useState18[0],
    setInputLocationValue = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    customFields = _useState20[0],
    setCustomFields = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    user = _useState22[0],
    setUser = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    customTabs = _useState24[0],
    setCustomTabs = _useState24[1];
  var _useState25 = (0, _react.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    companyLogo = _useState26[0],
    setCompanyLogo = _useState26[1];
  var _useState27 = (0, _react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    tabOptions = _useState28[0],
    setTabOptions = _useState28[1];
  var ITEM_HEIGHT = 48;
  var ITEM_PADDING_TOP = 8;
  var _useState29 = (0, _react.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    tabValue = _useState30[0],
    setTabValue = _useState30[1];
  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
  };
  var fetchCompanyData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
        var userCustomFields, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              userCustomFields = [];
              customFields && customFields.forEach( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(customField) {
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
                return function (_x3) {
                  return _ref7.apply(this, arguments);
                };
              }());
              _context6.next = 4;
              return (0, _authscape.apiService)().post("/UserManagement/UpdateCompany", {
                id: companyId,
                title: data.Title,
                isDeactivated: !data.IsActive,
                customFields: userCustomFields,
                locations: location
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
      return function (_x2) {
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
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      padding: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_authscape.DropZone, {
    image: companyLogo != null ? companyLogo : "",
    text: "Drag 'n' drop your logo here, or click to select your logo",
    onDrop: /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(blob) {
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
      return function (_x4) {
        return _ref8.apply(this, arguments);
      };
    }()
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
    onSaved: /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(shouldClose, platformType, id, fields) {
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
      return function (_x5, _x6, _x7, _x8) {
        return _ref9.apply(this, arguments);
      };
    }()
  })))));
});
CompanyEditor.displayName = "CompanyEditor";
var _default = CompanyEditor;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState10 = _slicedToArray(_useState9, 2),
    deleteCustomTabOpen = _useState10[0],
    setDeleteCustomTabOpen = _useState10[1];
  var RefreshFields = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    var _useState11 = (0, _react.useState)(1),
      _useState12 = _slicedToArray(_useState11, 2),
      fieldType = _useState12[0],
      setFieldType = _useState12[1];
    var _useState13 = (0, _react.useState)(1),
      _useState14 = _slicedToArray(_useState13, 2),
      gridSize = _useState14[0],
      setGridSize = _useState14[1];
    var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isRequired = _useState16[0],
      setIsRequired = _useState16[1];
    var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isColumnVisibleInDatagrid = _useState18[0],
      setIsColumnVisibleInDatagrid = _useState18[1];
    var _useState19 = (0, _react.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      tabOptions = _useState20[0],
      setTabOptions = _useState20[1];
    var _useState21 = (0, _react.useState)([]),
      _useState22 = _slicedToArray(_useState21, 2),
      selectProperties = _useState22[0],
      setSelectProperties = _useState22[1];
    var _useState23 = (0, _react.useState)(null),
      _useState24 = _slicedToArray(_useState23, 2),
      tabSelection = _useState24[0],
      setTabSelection = _useState24[1];
    var refTabName = (0, _react.useRef)(null);
    var refreshTabOptions = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
      onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
      onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
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
      onClick: /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(event) {
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
        return function (_x2) {
          return _ref7.apply(this, arguments);
        };
      }()
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var findTheValue = function findTheValue(fieldObject, field) {
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
exports.findTheValue = findTheValue;
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
var renderCustomField = function renderCustomField(identifier, fieldObject, control, errors, register, setValue, customFields, editors, setEditors) {
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
          onDrop: /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(blob) {
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
          }()
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
exports.renderCustomField = renderCustomField;
var renderSystemField = function renderSystemField(identifier, fieldObject, control, errors, register, customFields) {
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
    return /*#__PURE__*/_react["default"].createElement(_material.Box, {
      key: index
    }, field == "IsActive" && /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
      name: field,
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
          label: field
        }, register(field, {
          required: false
        }), renderField));
      }
    }), errors[field] && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      color: "red"
    }, field, " is required.")), field != "IsActive" && field != "IsDeactivated" && /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
      name: field,
      control: control,
      rules: {
        required: isRequied
      },
      render: function render(_ref4) {
        var renderField = _ref4.renderField;
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
exports.renderSystemField = renderSystemField;
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState10 = _slicedToArray(_useState9, 2),
    locations = _useState10[0],
    setLocations = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    location = _useState12[0],
    setLocation = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    inputCompanyValue = _useState14[0],
    setInputCompanyValue = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    customFields = _useState16[0],
    setCustomFields = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    user = _useState18[0],
    setUser = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    customTabs = _useState20[0],
    setCustomTabs = _useState20[1];
  var _useState21 = (0, _react.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    tabOptions = _useState22[0],
    setTabOptions = _useState22[1];
  var ITEM_HEIGHT = 48;
  var ITEM_PADDING_TOP = 8;
  var _useState23 = (0, _react.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    tabValue = _useState24[0],
    setTabValue = _useState24[1];
  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
  };
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
        var userCustomFields, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              userCustomFields = [];
              customFields && customFields.forEach( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(customField) {
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
                return function (_x3) {
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
      return function (_x2) {
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
var _default = LocationEditor;
exports["default"] = _default;
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
var _draftJs = require("draft-js");
var _BusinessRounded = _interopRequireDefault(require("@mui/icons-material/BusinessRounded"));
var _authscape = require("authscape");
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState10 = _slicedToArray(_useState9, 2),
    selectedPermission = _useState10[0],
    setSelectedPermission = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    companies = _useState12[0],
    setCompanies = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    company = _useState14[0],
    setCompany = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    inputCompanyValue = _useState16[0],
    setInputCompanyValue = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    locations = _useState18[0],
    setLocations = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    location = _useState20[0],
    setLocation = _useState20[1];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    inputLocationValue = _useState22[0],
    setInputLocationValue = _useState22[1];
  var _useState23 = (0, _react.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    roles = _useState24[0],
    setRole = _useState24[1];
  var _useState25 = (0, _react.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    permissions = _useState26[0],
    setPermissions = _useState26[1];
  var _useState27 = (0, _react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    customFields = _useState28[0],
    setCustomFields = _useState28[1];
  var _useState29 = (0, _react.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    user = _useState30[0],
    setUser = _useState30[1];
  var _useState31 = (0, _react.useState)(null),
    _useState32 = _slicedToArray(_useState31, 2),
    customTabs = _useState32[0],
    setCustomTabs = _useState32[1];
  var _useState33 = (0, _react.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    tabOptions = _useState34[0],
    setTabOptions = _useState34[1];
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
  var _useState35 = (0, _react.useState)(""),
    _useState36 = _slicedToArray(_useState35, 2),
    newPassword = _useState36[0],
    setNewPassword = _useState36[1];
  var _useState37 = (0, _react.useState)(""),
    _useState38 = _slicedToArray(_useState37, 2),
    confirmPassword = _useState38[0],
    setConfirmPassword = _useState38[1];
  var _useState39 = (0, _react.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    tabValue = _useState40[0],
    setTabValue = _useState40[1];
  var handleTabChange = function handleTabChange(event, newValue) {
    setTabValue(newValue);
  };
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
  var fields = ["FirstName", "LastName", "IsActive", "Email", "PhoneNumber"];
  function a11yProps(index) {
    return {
      id: "simple-tab-".concat(index),
      'aria-controls': "simple-tabpanel-".concat(index)
    };
  }
  var refreshTabOptions = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
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
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
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
  return /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit( /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data) {
        var userCustomFields, response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              userCustomFields = [];
              customFields && customFields.forEach( /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(customField) {
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
                return function (_x3) {
                  return _ref9.apply(this, arguments);
                };
              }());
              _context8.next = 4;
              return (0, _authscape.apiService)().put("/UserManagement/UpdateUser", {
                id: userId,
                firstName: data.FirstName,
                lastName: data.LastName,
                companyId: company != null ? company.id : null,
                locationId: location != null ? location.id : null,
                email: data.Email,
                phoneNumber: data.PhoneNumber,
                isActive: data.IsActive,
                roles: selectedRoles != "" ? selectedRoles : null,
                permissions: selectedPermission != "" ? selectedPermission : null,
                customFields: userCustomFields
              });
            case 4:
              response = _context8.sent;
              if (response != null && response.status == 200) {
                if (onSaved != null) {
                  onSaved(refShouldClose.current, 1, userId, response.data);
                }
              }
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      return function (_x2) {
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
      backgroundColor: "#f5f8fa",
      borderRadius: 2,
      border: "1px solid lightgray",
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
    onSaved: /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(shouldClose, platformType, id, fields) {
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
      return function (_x4, _x5, _x6, _x7) {
        return _ref10.apply(this, arguments);
      };
    }()
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
    onSaved: /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(shouldClose, platformType, id, fields) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              setEditAddLocationId(null);
              _context10.next = 3;
              return fetchUserData();
            case 3:
              onSaved(shouldClose, platformType, id, fields);
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      return function (_x8, _x9, _x10, _x11) {
        return _ref11.apply(this, arguments);
      };
    }()
  })))));
});
UserEditor.displayName = "UserEditor";
var _default = UserEditor;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// comment this out when done
// import UserEditor from './UserEditor'; // remove when done
// import CompanyEditor from './CompanyEditor' // remove when done
// import { CSVUsersUpload } from './CSVUsersUpload'; // remove when done
// import { CustomFields } from './CustomFields'; // remove when done
// import LocationEditor from './LocationsEditor';

var UserManagement = function UserManagement(_ref) {
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
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showUserDetails = _useState2[0],
    setShowUserDetails = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showCustomSettings = _useState4[0],
    setShowCustomSettings = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    showArchiveUserDialog = _useState6[0],
    setShowArchiveUserDialog = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showContactDialog = _useState8[0],
    setShowContactDialog = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    inputCompanyValue = _useState10[0],
    setInputCompanyValue = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    allRoles = _useState12[0],
    setAllRoles = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    allCompanies = _useState14[0],
    setAllCompanies = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showChangePasswordDialog = _useState16[0],
    setShowChangePasswordDialog = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    newPassword = _useState18[0],
    setNewPassword = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    confirmPassword = _useState20[0],
    setConfirmPassword = _useState20[1];
  var _useState21 = (0, _react.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    dataGridRefreshKey = _useState22[0],
    setDataGridRefreshKey = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    uploadUsersShowDialog = _useState24[0],
    setUploadUsersShowDialog = _useState24[1];
  var _useState25 = (0, _react.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    searchByName = _useState26[0],
    setSearchByName = _useState26[1];
  var _useState27 = (0, _react.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    searchByCompanyId = _useState28[0],
    setSearchByCompanyId = _useState28[1];
  var _useState29 = (0, _react.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    searchByRoleId = _useState30[0],
    setSearchByRoleId = _useState30[1];
  var _useState31 = (0, _react.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    columns = _useState32[0],
    setColumns = _useState32[1];
  var _useState33 = (0, _react.useState)(true),
    _useState34 = _slicedToArray(_useState33, 2),
    activeState = _useState34[0],
    setActiveState = _useState34[1];
  var filterLoaded = (0, _react.useRef)(false);
  var userEditorRef = (0, _react.useRef)();
  var _useState35 = (0, _react.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    companies = _useState36[0],
    setCompanies = _useState36[1];
  var _useState37 = (0, _react.useState)(null),
    _useState38 = _slicedToArray(_useState37, 2),
    company = _useState38[0],
    setCompany = _useState38[1];
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
  }, [searchByName, columns, activeState]);
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var results, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            results = [];
            _context.next = 3;
            return (0, _authscape.apiService)().get("/UserManagement/GetAllCompanies");
          case 3:
            response = _context.sent;
            response.data.forEach(function (element) {
              results.push({
                label: element.title,
                id: element.id
              });
            });
            setAllCompanies(results);
          case 6:
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _authscape.apiService)().get("/UserManagement/GetCustomFields?platformType=".concat(platformType, "&IsDatagrid=true"));
          case 2:
            res = _context2.sent;
            getColumns(res.data);
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var results, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            results = [];
            _context3.next = 3;
            return (0, _authscape.apiService)().get("/UserManagement/GetRoles");
          case 3:
            response = _context3.sent;
            response.data.forEach(function (element) {
              results.push({
                label: element.name,
                id: element.id
              });
            });
            setAllRoles(results);
          case 6:
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
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getAllCustomFields();
          case 2:
            setDataGridRefreshKey(dataGridRefreshKey + 1);
            setShowCustomSettings(false);
          case 4:
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            userEditorRef.current.saveChanges(true);
            setShowUserDetails(null);
          case 2:
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            setUploadUsersShowDialog(true);
          case 1:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
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
    title: "Custom Fields"
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
    size: 3
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
  }, "Activated")))))), showUserDetails == null && defaultIdentifier == null && platformType == 2 && /*#__PURE__*/_react["default"].createElement(_system.Box, {
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
  }, "Activated")))))), !showCustomSettings && /*#__PURE__*/_react["default"].createElement(_system.Box, null, showUserDetails == null && defaultIdentifier == null && /*#__PURE__*/_react["default"].createElement(_authscape.EditableDatagrid, {
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
      isActive: activeState
    },
    onRowClick: function onRowClick(row) {
      setShowUserDetails(row.id);
    }
  }), /*#__PURE__*/_react["default"].createElement(_system.Box, null, (showUserDetails != null || defaultIdentifier != null) && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
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
      setDataGridRefreshKey(dataGridRefreshKey + 1);
      if (_onSaved != null) {
        if (shouldClose == null) {
          shouldClose = false;
        }
        _onSaved(shouldClose, platformType, userId, fields);
      }
      if (shouldClose) {
        setShowUserDetails(null);
      }
    }
  }), platformType == 2 && /*#__PURE__*/_react["default"].createElement(CompanyEditor, {
    companyId: defaultIdentifier != null ? defaultIdentifier : showUserDetails,
    onCustomTabs: onCustomTabs,
    platformType: platformType,
    ref: userEditorRef,
    onSaved: function onSaved(shouldClose, platformType, userId, fields) {
      setDataGridRefreshKey(dataGridRefreshKey + 1);

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
      setDataGridRefreshKey(dataGridRefreshKey + 1);
      if (_onSaved != null) {
        if (shouldClose == null) {
          shouldClose = false;
        }
        _onSaved(shouldClose, platformType, userId, fields);
      }
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var response;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            if (!(newPassword != null && confirmPassword != null && confirmPassword != "" && newPassword != "")) {
              _context11.next = 5;
              break;
            }
            _context11.next = 3;
            return (0, _authscape.apiService)().put("/UserManagement/ChangeUserPassword", {
              userId: parseInt(showUserDetails),
              password: newPassword
            });
          case 3:
            response = _context11.sent;
            if (response.data != null && response.data.error != null) {
              alert(response.data.error);
            } else {
              setShowChangePasswordDialog(false);
            }
          case 5:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            if (!showArchiveUserDialog.isActive) {
              _context12.next = 16;
              break;
            }
            if (!(platformType == 1)) {
              _context12.next = 6;
              break;
            }
            _context12.next = 4;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ArchiveUser?id=".concat(showArchiveUserDialog.id));
          case 4:
            _context12.next = 14;
            break;
          case 6:
            if (!(platformType == 2)) {
              _context12.next = 11;
              break;
            }
            _context12.next = 9;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ArchiveCompany?id=".concat(showArchiveUserDialog.id));
          case 9:
            _context12.next = 14;
            break;
          case 11:
            if (!(platformType == 3)) {
              _context12.next = 14;
              break;
            }
            _context12.next = 14;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ArchiveLocation?id=".concat(showArchiveUserDialog.id));
          case 14:
            _context12.next = 29;
            break;
          case 16:
            if (!(platformType == 1)) {
              _context12.next = 21;
              break;
            }
            _context12.next = 19;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ActivateUser?id=".concat(showArchiveUserDialog.id));
          case 19:
            _context12.next = 29;
            break;
          case 21:
            if (!(platformType == 2)) {
              _context12.next = 26;
              break;
            }
            _context12.next = 24;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ActivateCompany?id=".concat(showArchiveUserDialog.id));
          case 24:
            _context12.next = 29;
            break;
          case 26:
            if (!(platformType == 3)) {
              _context12.next = 29;
              break;
            }
            _context12.next = 29;
            return (0, _authscape.apiService)()["delete"]("/UserManagement/ActivateLocation?id=".concat(showArchiveUserDialog.id));
          case 29:
            setDataGridRefreshKey(dataGridRefreshKey + 1);
            setShowArchiveUserDialog(null);
          case 31:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
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
        setEditAddLocationId(-1);
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
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            if (platformType == 1) {
              onAccountCreated({
                firstName: newFirstName.current.value,
                lastName: newLastName.current.value,
                email: newEmail.current.value
              });
            }
            if (platformType == 2)
              // company
              {
                onAccountCreated({
                  companyName: newCompanyName.current.value
                });
              }
            if (platformType == 3)
              // location
              {
                onAccountCreated({
                  Name: newLocationName.current.value,
                  address: newLocationAddress.current.value,
                  city: newLocationCity.current.value,
                  state: newLocationState.current.value,
                  postalCode: newLocationPostalCode.current.value,
                  companyId: company.id
                });
              }
            setShowContactDialog(false);
          case 4:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }))
  }, "Create Account"))), showCustomSettings && /*#__PURE__*/_react["default"].createElement(CustomFields, {
    platformType: platformType
  }), /*#__PURE__*/_react["default"].createElement(CSVUsersUpload, {
    showDialog: uploadUsersShowDialog,
    platformType: platformType,
    onClose: function onClose() {
      setDataGridRefreshKey(dataGridRefreshKey + 1);
      setUploadUsersShowDialog(false);
    }
  }))));
};
exports.UserManagement = UserManagement;
