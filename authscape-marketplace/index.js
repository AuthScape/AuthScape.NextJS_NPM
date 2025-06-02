"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _authscape = require("authscape");
var _material = require("@mui/material");
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
var _AccordionSummary = _interopRequireDefault(require("@mui/material/AccordionSummary"));
var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Pagination = _interopRequireDefault(require("@mui/material/Pagination"));
var _styles = require("@mui/material/styles");
var _router = require("next/router");
var _Clear = _interopRequireDefault(require("@mui/icons-material/Clear"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Marketplace = function Marketplace(_ref) {
  var setIsLoading = _ref.setIsLoading,
    _ref$oemCompanyId = _ref.oemCompanyId,
    oemCompanyId = _ref$oemCompanyId === void 0 ? null : _ref$oemCompanyId,
    _ref$platformId = _ref.platformId,
    platformId = _ref$platformId === void 0 ? 1 : _ref$platformId,
    _ref$companyId = _ref.companyId,
    companyId = _ref$companyId === void 0 ? null : _ref$companyId,
    _ref$maxHeightScrolli = _ref.maxHeightScrolling,
    maxHeightScrolling = _ref$maxHeightScrolli === void 0 ? 300 : _ref$maxHeightScrolli,
    _ref$cardGridSize = _ref.cardGridSize,
    cardGridSize = _ref$cardGridSize === void 0 ? 3 : _ref$cardGridSize,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 12 : _ref$pageSize,
    _ref$smoothScrollEnab = _ref.smoothScrollEnable,
    smoothScrollEnable = _ref$smoothScrollEnab === void 0 ? true : _ref$smoothScrollEnab,
    _ref$cardView = _ref.cardView,
    cardView = _ref$cardView === void 0 ? null : _ref$cardView;
  var router = (0, _router.useRouter)();
  var theme = (0, _material.useTheme)();
  var isDesktop = (0, _material.useMediaQuery)(theme.breakpoints.up("sm"));

  // Derive state from URL parameters
  var page = (0, _react.useMemo)(function () {
    var pageParam = router.query.page;
    return pageParam ? parseInt(pageParam, 10) : 1;
  }, [router.query.page]);
  var filters = (0, _react.useMemo)(function () {
    return Object.entries(router.query).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        key = _ref3[0];
      return key !== "page";
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        category = _ref5[0],
        value = _ref5[1];
      if (typeof value !== "string") return null;

      // Handle multiple values per category
      var values = value.split(',');
      return values.map(function (val) {
        var _ref6 = val.includes("--") ? val.split("--") : ["", val],
          _ref7 = _slicedToArray(_ref6, 2),
          subcategory = _ref7[0],
          option = _ref7[1];
        return {
          category: category,
          subcategory: subcategory,
          option: option
        };
      });
    }).filter(Boolean).flat();
  }, [router.query]);

  // Local UI states
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    products = _useState4[0],
    setProducts = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    expandedCategories = _useState8[0],
    setExpandedCategories = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    expandedSubcategories = _useState10[0],
    setExpandedSubcategories = _useState10[1];
  var Accordion = (0, _styles.styled)(function (props) {
    return /*#__PURE__*/_react["default"].createElement(_Accordion["default"], _extends({
      disableGutters: true,
      elevation: 0,
      square: true
    }, props));
  })(function (_ref8) {
    var theme = _ref8.theme;
    return {
      "&:not(:last-child)": {
        borderBottom: 0
      },
      "&::before": {
        display: "none"
      }
    };
  });

  // Update URL when filters change
  var updateQueryParams = function updateQueryParams(newParams) {
    router.replace({
      pathname: router.pathname,
      query: _objectSpread(_objectSpread(_objectSpread({}, router.query), newParams), {}, {
        page: 1 // Reset to page 1 when filters change
      })
    }, undefined, {
      shallow: true
    });
  };

  // Add a filter to the URL
  var addFilter = function addFilter(filter) {
    var value = filter.subcategory ? "".concat(filter.subcategory, "--").concat(filter.option) : filter.option;
    var currentValue = router.query[filter.category];

    // Handle multiple values per category
    var newValue;
    if (currentValue) {
      var values = currentValue.split(',');
      if (!values.includes(value)) {
        newValue = [].concat(_toConsumableArray(values), [value]).join(',');
      } else {
        return; // Filter already exists
      }
    } else {
      newValue = value;
    }
    updateQueryParams(_defineProperty({}, filter.category, newValue));
  };

  // Remove a filter from the URL
  var removeFilter = function removeFilter(filter) {
    var value = filter.subcategory ? "".concat(filter.subcategory, "--").concat(filter.option) : filter.option;
    var currentValue = router.query[filter.category];
    if (currentValue) {
      var values = currentValue.split(',');
      var newValues = values.filter(function (v) {
        return v !== value;
      });
      if (newValues.length > 0) {
        updateQueryParams(_defineProperty({}, filter.category, newValues.join(',')));
      } else {
        var newQuery = _objectSpread({}, router.query);
        delete newQuery[filter.category];
        delete newQuery.page; // Reset page when filters change
        router.replace({
          pathname: router.pathname,
          query: newQuery
        }, undefined, {
          shallow: true
        });
      }
    }
  };

  // Remove all filters
  var clearAllFilters = function clearAllFilters() {
    var newQuery = _objectSpread({}, router.query);
    Object.keys(newQuery).forEach(function (key) {
      if (key !== "page") {
        delete newQuery[key];
      }
    });
    router.replace({
      pathname: router.pathname,
      query: newQuery
    }, undefined, {
      shallow: true
    });
  };
  var fetchData = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (router.isReady) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setIsLoading(true);
            _context.prev = 3;
            _context.next = 6;
            return (0, _authscape.apiService)().post("/Marketplace/Search", {
              platformId: platformId,
              oemCompanyId: oemCompanyId,
              pageNumber: page,
              pageSize: pageSize,
              searchParamFilters: filters,
              categoryFilters: categories
            });
          case 6:
            response = _context.sent;
            if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
              setCategories(response.data.filters);
              setProducts(response.data.products);
              setTotal(response.data.total);
              if (smoothScrollEnable) {
                window.scroll({
                  top: 0,
                  behavior: "smooth"
                });
              }
            }
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.error("Error fetching data:", _context.t0);
          case 13:
            _context.prev = 13;
            setIsLoading(false);
            return _context.finish(13);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 10, 13, 16]]);
    }));
    return function fetchData() {
      return _ref9.apply(this, arguments);
    };
  }();

  // Initialize expanded categories from URL
  (0, _react.useEffect)(function () {
    if (router.isReady) {
      var filterKeys = Object.keys(router.query).filter(function (key) {
        return key !== "page";
      });
      setExpandedCategories(filterKeys);
    }
  }, [router.isReady]);

  // Fetch data when URL changes
  (0, _react.useEffect)(function () {
    if (router.isReady) {
      fetchData();
    }
  }, [router.isReady, router.query]);
  function getGlobalArrayKeys(products) {
    var globalArrayKeys = new Set();
    products.forEach(function (product) {
      var groups = {};
      product.forEach(function (_ref10) {
        var name = _ref10.name,
          value = _ref10.value;
        if (!groups[name]) groups[name] = [];
        groups[name].push(value);
      });
      Object.keys(groups).forEach(function (key) {
        var distinctValues = groups[key].filter(function (v, idx, arr) {
          return arr.findIndex(function (x) {
            return JSON.stringify(x) === JSON.stringify(v);
          }) === idx;
        });
        if (groups[key].length > 1 && distinctValues.length > 1) {
          globalArrayKeys.add(key);
        }
        if (groups[key].some(function (v) {
          return Array.isArray(v);
        })) {
          globalArrayKeys.add(key);
        }
      });
    });
    return globalArrayKeys;
  }
  return /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      paddingLeft: 2,
      fontSize: 16,
      paddingBottom: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      textAlign: "right",
      paddingTop: 2
    }
  }, page, " - ", products != null && products.length * page, " of ", total, " Results")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 12
  }, filters.length > 0 && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      flexWrap: "wrap",
      gap: 1,
      alignItems: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    sx: {
      marginRight: 1
    }
  }, "Filters:"), filters.map(function (filter, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Chip, {
      key: "".concat(filter.category, "-").concat(filter.subcategory, "-").concat(filter.option, "-").concat(index),
      label: filter.subcategory ? "".concat(filter.category, ": ").concat(filter.subcategory, " - ").concat(filter.option) : "".concat(filter.category, ": ").concat(filter.option),
      onDelete: function onDelete() {
        return removeFilter(filter);
      },
      deleteIcon: /*#__PURE__*/_react["default"].createElement(_Clear["default"], null),
      sx: {
        marginRight: 1,
        marginBottom: 1
      }
    });
  }), /*#__PURE__*/_react["default"].createElement(_material.Chip, {
    label: "Clear All",
    onClick: clearAllFilters,
    variant: "outlined",
    sx: {
      marginBottom: 1
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: isDesktop,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 2
  }, categories != null && categories.map(function (category) {
    return /*#__PURE__*/_react["default"].createElement(Accordion, {
      key: category.category,
      expanded: expandedCategories.includes(category.category),
      onChange: function onChange(event, isExpanded) {
        setExpandedCategories(function (prev) {
          return isExpanded ? [].concat(_toConsumableArray(prev), [category.category]) : prev.filter(function (cat) {
            return cat !== category.category;
          });
        });
      },
      sx: {
        boxShadow: "none",
        fontSize: 14,
        margin: 0
      }
    }, /*#__PURE__*/_react["default"].createElement(_AccordionSummary["default"], {
      expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null),
      "aria-controls": "panel1-content",
      id: "panel1-header",
      sx: {
        fontSize: 16,
        marginTop: 2,
        marginBottom: 0,
        borderTop: "1px solid #e0e0e0",
        marginLeft: -1
      }
    }, category.category == "Manufacturer" ? "Brand" : category.category), /*#__PURE__*/_react["default"].createElement(_material.Box, {
      sx: {
        marginTop: 0,
        paddingLeft: 1,
        marginBottom: 2,
        paddingTop: 1,
        position: "relative",
        maxHeight: maxHeightScrolling,
        overflow: "auto"
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Stack, null, category.options.map(function (filterOption) {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, {
        key: filterOption.name
      }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
        direction: "row",
        spacing: 0,
        sx: {
          display: "block"
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Box, null, filterOption.subcategories == null || filterOption.subcategories.length === 0 ? /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
        control: /*#__PURE__*/_react["default"].createElement(_material.Checkbox, {
          size: "small",
          sx: {
            paddingLeft: 0.8,
            paddingTop: 0,
            color: "lightgray"
          },
          checked: filters.some(function (f) {
            return f.category === category.category && f.subcategory === "" && f.option === filterOption.name;
          }),
          onChange: function onChange(event) {
            var filter = {
              category: category.category,
              subcategory: "",
              option: filterOption.name
            };
            event.target.checked ? addFilter(filter) : removeFilter(filter);
          }
        }),
        label: /*#__PURE__*/_react["default"].createElement(_material.Typography, {
          sx: {
            fontSize: 14,
            marginTop: -1
          }
        }, filterOption.name)
      }) : /*#__PURE__*/_react["default"].createElement(Accordion, {
        expanded: expandedSubcategories.includes(filterOption.name),
        onChange: function onChange(event, isExpanded) {
          event.stopPropagation();
          setExpandedSubcategories(function (prev) {
            return isExpanded ? [].concat(_toConsumableArray(prev), [filterOption.name]) : prev.filter(function (name) {
              return name !== filterOption.name;
            });
          });
        },
        sx: {
          marginTop: -2
        }
      }, /*#__PURE__*/_react["default"].createElement(_AccordionSummary["default"], {
        expandIcon: /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null),
        "aria-controls": "panel1-content",
        id: "panel1-header",
        sx: {
          paddingTop: 0,
          marginTop: -1
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        component: "span"
      }, filterOption.name)), /*#__PURE__*/_react["default"].createElement(_material.AccordionDetails, {
        sx: {
          marginTop: -1
        }
      }, filterOption.subcategories.map(function (subcat) {
        return /*#__PURE__*/_react["default"].createElement(_material.Box, {
          key: subcat.name
        }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
          control: /*#__PURE__*/_react["default"].createElement(_material.Checkbox, {
            size: "small",
            sx: {
              paddingLeft: 0.8,
              paddingTop: 0,
              color: "lightgray"
            },
            checked: filters.some(function (f) {
              return f.category === category.category && f.subcategory === filterOption.name && f.option === subcat.name;
            }),
            onClick: function onClick(event) {
              return event.stopPropagation();
            },
            onChange: function onChange(event) {
              var filter = {
                category: category.category,
                subcategory: filterOption.name,
                option: subcat.name
              };
              event.target.checked ? addFilter(filter) : removeFilter(filter);
            }
          }),
          label: /*#__PURE__*/_react["default"].createElement(_material.Typography, {
            sx: {
              fontSize: 14,
              marginTop: -1
            }
          }, subcat.name),
          onClick: function onClick(event) {
            return event.stopPropagation();
          }
        }));
      }))))));
    }))));
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    size: 10
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      paddingBottom: 2,
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, products && products.map(function (product, index) {
    var globalArrayKeys = getGlobalArrayKeys(products);

    // Group fields by key for the individual product.
    var groups = {};
    product.forEach(function (_ref11) {
      var name = _ref11.name,
        value = _ref11.value;
      if (!groups[name]) groups[name] = [];
      groups[name].push(value);
    });
    var productData = {};
    Object.keys(groups).forEach(function (key) {
      // Deduplicate values locally.
      var distinctValues = groups[key].filter(function (v, idx, arr) {
        return arr.findIndex(function (x) {
          return JSON.stringify(x) === JSON.stringify(v);
        }) === idx;
      });
      if (globalArrayKeys.has(key)) {
        // For keys meant to be arrays globally—even if there's only one distinct value—
        // keep the result as an array.
        productData[key] = distinctValues;
      } else {
        // For keys not flagged as multi‑valued, unwrap if there's only one unique item.
        productData[key] = distinctValues.length === 1 ? distinctValues[0] : distinctValues;
      }
    });
    return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      size: {
        sm: 12,
        md: cardGridSize
      },
      sx: {
        width: "100%"
      },
      key: index
    }, cardView && cardView(productData));
  }))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      paddingTop: 2,
      paddingBottom: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_Pagination["default"], {
    size: "large",
    count: Math.ceil(total / pageSize),
    page: page,
    onChange: function onChange(event, value) {
      router.replace({
        query: _objectSpread(_objectSpread({}, router.query), {}, {
          page: value
        })
      }, undefined, {
        shallow: true
      });
    },
    showFirstButton: true,
    showLastButton: true
  })))));
};
Marketplace.displayName = "Marketplace";
var _default = Marketplace;
exports["default"] = _default;
