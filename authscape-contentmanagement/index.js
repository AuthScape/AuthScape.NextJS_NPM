"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationModal = ConfirmationModal;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ConfirmationModal(_ref) {
  var title = _ref.title,
    description = _ref.description,
    cancelClicked = _ref.cancelClicked,
    okClicked = _ref.okClicked,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    _ref$cancelTitle = _ref.cancelTitle,
    cancelTitle = _ref$cancelTitle === void 0 ? "Cancel" : _ref$cancelTitle,
    _ref$okTitle = _ref.okTitle,
    okTitle = _ref$okTitle === void 0 ? "OK" : _ref$okTitle;
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: open,
    onClose: cancelClicked,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, title), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
    id: "alert-dialog-description"
  }, description)), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: cancelClicked
  }, cancelTitle), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: okClicked
  }, okTitle)));
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _KeyboardArrowLeft = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowLeft"));
var _KeyboardArrowRight = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowRight"));
var _Edit = _interopRequireDefault(require("@mui/icons-material/Edit"));
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _xDataGrid = require("@mui/x-data-grid");
var _authscape = require("authscape");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _Link = _interopRequireDefault(require("@mui/icons-material/Link"));
var _Build = _interopRequireDefault(require("@mui/icons-material/Build"));
var _this = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
// remove after npm production
// import CreatePageModal from "./CreatePageModal";
// import PageEditor from "./PageEditor";
// import ConfirmationModal from "../confirmationModal";
var ContentManagement = function ContentManagement(_ref) {
  var config = _ref.config,
    minHeight = _ref.minHeight,
    loadedUser = _ref.loadedUser;
  var refDataGrid = (0, _react.useRef)(null);
  var initialPaginationModel = {
    offset: 1,
    length: 8,
    search: "",
    sort: 3,
    chipFilters: []
  };
  var _useState = (0, _react.useState)(initialPaginationModel),
    _useState2 = _slicedToArray(_useState, 2),
    paginationModel = _useState2[0],
    setPaginationModel = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    showConfirmDeletePage = _useState4[0],
    setShowConfirmDeletePage = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    pageList = _useState6[0],
    setPageList = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    chipState = _useState8[0],
    setChipState = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    ui = _useState10[0],
    setUI = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOpen = _useState12[0],
    setIsOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    isEditorOpen = _useState14[0],
    setIsEditorOpen = _useState14[1];
  var _useState15 = (0, _react.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    rowCount = _useState16[0],
    setRowCount = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    pageTypes = _useState18[0],
    setPageTypes = _useState18[1];
  var totalPages = Math.ceil(rowCount / initialPaginationModel.length);
  var columns = [{
    field: "title",
    headerName: "Title",
    flex: 1,
    height: 200
  }, {
    field: "typeTitle",
    headerName: "Page Type",
    flex: 1,
    height: 200
  }, {
    field: "slug",
    headerName: "Slug",
    flex: 1,
    height: 200
  }, {
    field: "description",
    headerName: "Description",
    flex: 1,
    height: 200,
    renderCell: function renderCell(params) {
      return /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
        title: params.value,
        arrow: true
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          maxWidth: "100%",
          cursor: "pointer"
        }
      }, params.value));
    }
  }, {
    field: "recursion",
    headerName: "Recursion",
    flex: 1,
    height: 200,
    valueGetter: function valueGetter(params) {
      return params ? "".concat(params == 1 ? "Everyday" : params + " Days") : "N/A";
    }
  }, {
    field: "lastUpdated",
    headerName: "Last Update",
    flex: 1,
    height: 200,
    valueGetter: function valueGetter(params) {
      return "".concat((0, _dayjs["default"])(params).format("ddd, DD MMM YYYY"));
    }
  }, {
    field: "actions",
    type: "actions",
    flex: 1,
    headerName: "Actions",
    cellClassName: "actions",
    getActions: function getActions(_ref2) {
      var id = _ref2.id,
        row = _ref2.row;
      var actions = [];
      if (row.recursion == null) {
        actions.unshift( /*#__PURE__*/_react["default"].createElement(_xDataGrid.GridActionsCellItem, {
          key: "link-".concat(id),
          icon: /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
            title: "Open Link",
            arrow: true
          }, /*#__PURE__*/_react["default"].createElement(_Link["default"], {
            color: "info"
          })),
          label: "Open Link",
          onClick: function onClick() {
            window.open("/".concat(row.slug), "_blank", "noopener,noreferrer");
          }
        }));
      }
      actions.push( /*#__PURE__*/_react["default"].createElement(_xDataGrid.GridActionsCellItem, {
        key: "edit-".concat(id),
        icon: /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
          title: "Edit",
          arrow: true
        }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], {
          color: "primary"
        })),
        label: "Edit",
        onClick: function onClick() {
          setIsOpen(row);
        }
      }), /*#__PURE__*/_react["default"].createElement(_xDataGrid.GridActionsCellItem, {
        key: "build-".concat(id),
        icon: /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
          title: "Build",
          arrow: true
        }, /*#__PURE__*/_react["default"].createElement(_Build["default"], {
          color: "secondary"
        })),
        label: "Build",
        onClick: function onClick() {
          setIsEditorOpen(id);
        }
      }), /*#__PURE__*/_react["default"].createElement(_xDataGrid.GridActionsCellItem, {
        key: "delete-".concat(id),
        icon: /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
          title: "Delete",
          arrow: true
        }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], {
          color: "error"
        })),
        label: "Delete",
        onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                setShowConfirmDeletePage(id);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))
      }));
      return actions;
    }
  }];
  var debounce = function debounce(callback, delay) {
    var timerId;
    var helperFunction = function helperFunction() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        callback.apply(_this, args);
      }, delay);
    };
    return helperFunction;
  };
  var reloadUI = function reloadUI() {
    setUI(!ui);
  };
  var fetchPageList = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _authscape.apiService)().post("/ContentManagement/GetPages", paginationModel);
          case 2:
            response = _context2.sent;
            if (response != null && response.status == 200) {
              setPageList(response.data.data);
              setRowCount(response.data.recordsTotal);
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function fetchPageList() {
      return _ref4.apply(this, arguments);
    };
  }();
  var fetchPageTypes = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, chipModel;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _authscape.apiService)().get("/ContentManagement/GetPageTypes");
          case 2:
            response = _context3.sent;
            if (response && response.status === 200) {
              setPageTypes(response.data);
              if (chipState.length == 0) {
                chipModel = response.data.reduce(function (acc, type) {
                  acc[type.title] = {
                    id: type.id,
                    variant: "outlined",
                    color: "default"
                  };
                  return acc;
                }, {});
                setChipState(chipModel);
              }
            }
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function fetchPageTypes() {
      return _ref5.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    fetchPageList();
    fetchPageTypes();
  }, [ui, paginationModel]);
  var handleChipClick = function handleChipClick(label) {
    setChipState(function (prev) {
      var newVariant = prev[label].variant === "outlined" ? "filled" : "outlined";
      var newColor = prev[label].color === "default" ? "primary" : "default";
      var updatedChipState = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, label, _objectSpread(_objectSpread({}, prev[label]), {}, {
        variant: newVariant,
        color: newColor
      })));
      var activeFilters = Object.values(updatedChipState).filter(function (value) {
        return value.variant === "filled";
      }).map(function (value) {
        return value.id;
      });
      setPaginationModel(function (prevModel) {
        return _objectSpread(_objectSpread({}, prevModel), {}, {
          chipFilters: activeFilters,
          offset: 1
        });
      });
      return updatedChipState;
    });
  };
  var handleSearchChange = debounce(function (event) {
    var searchTerm = event.target.value;
    setPaginationModel(_objectSpread(_objectSpread({}, paginationModel), {}, {
      offset: 1,
      search: searchTerm
    }));
    reloadUI();
  }, 300);
  var handleSortChange = function handleSortChange(event) {
    var newSort = event.target.value;
    setPaginationModel(_objectSpread(_objectSpread({}, paginationModel), {}, {
      offset: 1,
      sort: newSort
    }));
    reloadUI();
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !isEditorOpen ? /*#__PURE__*/_react["default"].createElement(_material.Container, {
    maxWidth: "xl",
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    my: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mb: 2,
    sx: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      flexWrap: "wrap",
      gap: 1,
      flexGrow: 1,
      order: 1
    }
  }, Object.keys(chipState).map(function (label) {
    return /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      key: label,
      label: label,
      variant: chipState[label].variant,
      color: chipState[label].color,
      sx: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return handleChipClick(label);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      gap: 2,
      order: {
        xs: 1,
        md: 2
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      setIsOpen(true);
    }
  }, "Create New Page"))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mt: 1,
    mb: 2,
    display: "flex",
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    fullWidth: true,
    size: "small",
    placeholder: "Search Pages by title...",
    onChange: handleSearchChange,
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null))
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    sx: {
      marginLeft: 1,
      maxWidth: 200
    },
    fullWidth: true,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_material.InputLabel, {
    id: "sort-by-label"
  }, "Sort By"), /*#__PURE__*/_react["default"].createElement(_material.Select, {
    id: "dealers-sort-selection",
    label: "Sort By",
    value: paginationModel.sort,
    onChange: handleSortChange
  }, /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 1
  }, "Title (Ascending)"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 2
  }, "Title (Descending)"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 3
  }, "Update Date (Ascending)"), /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
    value: 4
  }, "Update Date (Descending)")))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      width: "100%",
      overflowX: "scroll",
      minHeight: {
        minHeight: minHeight
      }
    },
    mt: 1
  }, /*#__PURE__*/_react["default"].createElement(_xDataGrid.DataGrid, {
    disableRowSelectionOnClick: true,
    disableColumnSelector: true,
    disableSelectionOnClick: true,
    columns: columns,
    rows: pageList,
    pageSize: 8,
    rowsPerPage: [8],
    ref: refDataGrid,
    disableColumnFilter: true,
    disableColumnSort: true,
    disableColumnMenu: true,
    rowCount: rowCount,
    slots: {
      pagination: function pagination(props) {
        return /*#__PURE__*/_react["default"].createElement(_material.Box, {
          display: "flex",
          alignItems: "center",
          mr: 2,
          my: 2
        }, totalPages !== 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
          "aria-label": "previousPage",
          size: "small",
          disabled: paginationModel.offset == 1,
          onClick: function onClick() {
            setPaginationModel(_objectSpread(_objectSpread({}, paginationModel), {}, {
              offset: paginationModel.offset - 1
            }));
          }
        }, /*#__PURE__*/_react["default"].createElement(_KeyboardArrowLeft["default"], {
          fontSize: "inherit"
        })), /*#__PURE__*/_react["default"].createElement(_material.Typography, null, paginationModel.offset, " of ", totalPages), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
          "aria-label": "nextPage",
          size: "small",
          disabled: paginationModel.offset == totalPages,
          onClick: function onClick() {
            setPaginationModel(_objectSpread(_objectSpread({}, paginationModel), {}, {
              offset: paginationModel.offset + 1
            }));
          }
        }, /*#__PURE__*/_react["default"].createElement(_KeyboardArrowRight["default"], {
          fontSize: "inherit"
        }))), /*#__PURE__*/_react["default"].createElement(_material.Typography, null, "Total Pages: ", rowCount));
      }
    }
  })))) : /*#__PURE__*/_react["default"].createElement(PageEditor, {
    config: config,
    isOpen: isEditorOpen,
    handleClose: function handleClose() {
      setIsEditorOpen(null);
      reloadUI();
      setPaginationModel(initialPaginationModel);
    }
  }), /*#__PURE__*/_react["default"].createElement(CreatePageModal, {
    isOpen: isOpen,
    handleClose: function handleClose() {
      setIsOpen(false);
      reloadUI();
      setPaginationModel(initialPaginationModel);
    },
    pageTypes: pageTypes
  }), /*#__PURE__*/_react["default"].createElement(ConfirmationModal, {
    title: "Are you sure you want to remove this page?",
    description: "When this page is removed it will not be able to be recovered.",
    okTitle: "Yes",
    cancelTitle: "Cancel",
    cancelClicked: function cancelClicked() {
      setShowConfirmDeletePage(null);
    },
    okClicked: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _authscape.apiService)().post("/ContentManagement/RemovePage?pageId=" + showConfirmDeletePage);
          case 2:
            response = _context4.sent;
            if (response != null && response.status === 200) {
              reloadUI();
            } else {}
            setShowConfirmDeletePage(null);
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    })),
    open: showConfirmDeletePage != null ? true : false
  }));
};
var _default = ContentManagement;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePageModal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _reactHookForm = require("react-hook-form");
var _InfoOutlined = _interopRequireDefault(require("@mui/icons-material/InfoOutlined"));
var _authscape = require("authscape");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Transition = /*#__PURE__*/_react["default"].forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_material.Slide, _extends({
    direction: "up",
    ref: ref
  }, props));
});
var CreatePageModal = function CreatePageModal(_ref) {
  var isOpen = _ref.isOpen,
    handleClose = _ref.handleClose,
    pageTypes = _ref.pageTypes;
  var isEditing = typeof isOpen !== "boolean";
  var initialData = {
    title: "",
    pageTypeId: null,
    description: "",
    recursion: null,
    slug: ""
  };
  var _useForm = (0, _reactHookForm.useForm)({
      defaultValues: initialData,
      mode: "onChange"
    }),
    reset = _useForm.reset,
    watch = _useForm.watch,
    control = _useForm.control,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors,
    setValue = _useForm.setValue;
  (0, _react.useEffect)(function () {
    if (isEditing) {
      setValue("title", isOpen.title);
      setValue("pageTypeId", isOpen.pageTypeId);
      setValue("description", isOpen.description);
      setValue("recursion", isOpen.recursion);
      setValue("slug", isOpen.slug);
    } else {
      reset();
    }
  }, [isEditing, isOpen, reset, setValue]);
  var watchedFields = watch(["title", "description"]);
  var pageTypeId = watch("pageTypeId");
  var recursion = watch("recursion");
  var slug = watch("slug");
  var selectedPageType = pageTypes.find(function (type) {
    return type.id === pageTypeId;
  });
  var isRecursive = (selectedPageType === null || selectedPageType === void 0 ? void 0 : selectedPageType.isRecursive) || false;
  var isHomepage = (selectedPageType === null || selectedPageType === void 0 ? void 0 : selectedPageType.isHomepage) || false;
  var isFormValid = watchedFields.every(function (field) {
    return (field === null || field === void 0 ? void 0 : field.trim()) !== "";
  }) && pageTypeId && (!isRecursive || recursion) && (isHomepage || slug);
  var onSave = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageParam) {
      var title, pageTypeId, description, recursion, slug, param, apiEndpoint, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            title = pageParam.title, pageTypeId = pageParam.pageTypeId, description = pageParam.description, recursion = pageParam.recursion, slug = pageParam.slug;
            param = {
              pageId: isEditing ? isOpen.id : null,
              title: title,
              pageTypeId: pageTypeId,
              description: description,
              recursion: recursion,
              slug: !isHomepage ? slug : ""
            };
            apiEndpoint = isEditing ? "/ContentManagement/UpdatePage" : "/ContentManagement/CreateNewPage";
            _context.next = 6;
            return (0, _authscape.apiService)().post(apiEndpoint, param);
          case 6:
            response = _context.sent;
            if (response != null && response.status === 200) {
              handleClose();
              reset();
            } else {}
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onSave(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement(_material.Dialog, {
    fullWidth: true,
    maxWidth: "md",
    open: isOpen,
    onClose: handleClose,
    TransitionComponent: Transition,
    PaperProps: {
      sx: {
        borderRadius: 3
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogTitle, null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    "aria-label": "close",
    onClick: handleClose,
    sx: {
      position: "absolute",
      right: 8,
      top: 6,
      color: function color(theme) {
        return theme.palette.grey[500];
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, isEditing ? "Update Page" : "Create New Page")), /*#__PURE__*/_react["default"].createElement(_material.DialogContent, {
    sx: {
      paddingBottom: 2
    }
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit(onSave)
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    name: "title",
    control: control,
    rules: {
      required: "Title is required"
    },
    render: function render(_ref3) {
      var _errors$title;
      var field = _ref3.field;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "subtitle2"
      }, "Page Title"), /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
        size: "small"
      }, field, {
        fullWidth: true,
        error: !!errors.title,
        helperText: ((_errors$title = errors.title) === null || _errors$title === void 0 ? void 0 : _errors$title.message) || ""
      })));
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    name: "pageTypeId",
    control: control,
    rules: {
      required: "Template is required"
    },
    render: function render(_ref4) {
      var field = _ref4.field;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "subtitle2"
      }, "Page Type"), /*#__PURE__*/_react["default"].createElement(_material.Select, _extends({}, field, {
        size: "small",
        value: field.value || "",
        onChange: function onChange(event) {
          var selectedType = pageTypes.find(function (type) {
            return type.id === event.target.value;
          });
          field.onChange(event.target.value);
          setValue("isRecursive", selectedType.isRecursive);
          if (!selectedType.isRecursive) {
            setValue("recursion", null);
          }
        }
      }), pageTypes.map(function (type) {
        return /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
          key: type.id,
          value: type.id
        }, type.title);
      })));
    }
  }), isRecursive && /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    name: "recursion",
    control: control,
    rules: {
      required: "Recursion is required",
      min: {
        value: 1,
        message: "Recursion must be at least one"
      }
    },
    render: function render(_ref5) {
      var _errors$recursion;
      var field = _ref5.field;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "subtitle2"
      }, "Recursion Day"), /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
        InputProps: {
          endAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
            position: "end"
          }, "Days")
        },
        size: "small",
        type: "number"
      }, field, {
        fullWidth: true,
        error: !!errors.recursion,
        helperText: ((_errors$recursion = errors.recursion) === null || _errors$recursion === void 0 ? void 0 : _errors$recursion.message) || ""
      })));
    }
  }), !isHomepage && /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    name: "slug",
    control: control,
    rules: {
      required: "Slug is required"
    },
    render: function render(_ref6) {
      var _errors$slug;
      var field = _ref6.field;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "subtitle2"
      }, "Page Slug", " ", /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
        arrow: true,
        title: "This will be part of the page URL, e.g., yourwebsite.com/your-slug"
      }, /*#__PURE__*/_react["default"].createElement(_InfoOutlined["default"], {
        sx: {
          fontSize: 15,
          cursor: "pointer"
        },
        color: "warning"
      }))), /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
        InputProps: {
          startAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
            position: "start"
          }, "/")
        },
        size: "small"
      }, field, {
        fullWidth: true,
        error: !!errors.slug,
        helperText: ((_errors$slug = errors.slug) === null || _errors$slug === void 0 ? void 0 : _errors$slug.message) || "",
        onKeyDown: function onKeyDown(e) {
          if (e.key === " ") {
            e.preventDefault();
          }
        },
        onChange: function onChange(e) {
          var newValue = e.target.value.replace(/\s/g, "");
          field.onChange(newValue);
        }
      })));
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    name: "description",
    control: control,
    render: function render(_ref7) {
      var field = _ref7.field;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "subtitle2"
      }, "Page Description"), /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({}, field, {
        multiline: true,
        rows: 5,
        fullWidth: true
      })));
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mt: 2,
    display: "flex",
    justifyContent: "flex-end"
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    sx: {
      marginRight: 1
    },
    disabled: !isFormValid
  }, isEditing ? "Update Page" : "Create New Page"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "outlined",
    onClick: handleClose
  }, "Cancel")))));
};
// export default CreatePageModal;
exports.CreatePageModal = CreatePageModal;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageEditor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _authscape = require("authscape");
var _puck = require("@measured/puck");
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
var PageEditor = function PageEditor(_ref) {
  var config = _ref.config,
    isOpen = _ref.isOpen,
    handleClose = _ref.handleClose;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var initialData = {
    root: {
      props: {}
    },
    content: [],
    zones: {}
  };
  var _useState3 = (0, _react.useState)(initialData),
    _useState4 = _slicedToArray(_useState3, 2),
    contentData = _useState4[0],
    setContentData = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var fetchPageDetail = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, parsedContent;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0, _authscape.apiService)().get("/ContentManagement/GetPage?pageId=".concat(isOpen));
          case 4:
            response = _context.sent;
            if (response && response.status === 200) {
              setPage(response.data);
              if (response.data.content) {
                try {
                  parsedContent = JSON.parse(response.data.content);
                  setContentData(parsedContent.data || initialData);
                } catch (error) {
                  setContentData(initialData);
                }
              } else {
                setContentData(initialData);
              }
            }
            _context.next = 12;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("API fetch error:", _context.t0);
            setContentData(initialData);
          case 12:
            _context.prev = 12;
            setLoading(false);
            return _context.finish(12);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8, 12, 15]]);
    }));
    return function fetchPageDetail() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (isOpen) {
      fetchPageDetail();
    } else {
      setContentData(initialData);
      setLoading(false);
    }
  }, [isOpen]);
  var save = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      var contentParam, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            contentParam = {
              pageId: page.id,
              content: JSON.stringify({
                data: data
              })
            };
            _context2.next = 4;
            return (0, _authscape.apiService)().post("/ContentManagement/UpdatePageContent", contentParam);
          case 4:
            response = _context2.sent;
            if (response && response.status === 200) {
              handleClose();
            }
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error("Error saving content:", _context2.t0);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return function save(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      position: "relative",
      zIndex: 1025
    }
  }, loading ? /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Loading content..."), /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, null)) : /*#__PURE__*/_react["default"].createElement(_puck.Puck, {
    config: config,
    data: contentData,
    onPublish: save,
    overrides: {
      headerActions: function headerActions(_ref4) {
        var children = _ref4.children;
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children, /*#__PURE__*/_react["default"].createElement(_material.Button, {
          color: "error",
          variant: "outlined",
          startIcon: /*#__PURE__*/_react["default"].createElement(_Close["default"], null),
          onClick: function onClick() {
            handleClose();
          }
        }, "Close"));
      }
    }
  }));
};

//export default PageEditor;
exports.PageEditor = PageEditor;
