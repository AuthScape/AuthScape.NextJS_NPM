"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
    _useState0 = _slicedToArray(_useState9, 2),
    expandedSubcategories = _useState0[0],
    setExpandedSubcategories = _useState0[1];
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
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
      product.forEach(function (_ref0) {
        var name = _ref0.name,
          value = _ref0.value;
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
    }, category.category), /*#__PURE__*/_react["default"].createElement(_material.Box, {
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
    product.forEach(function (_ref1) {
      var name = _ref1.name,
        value = _ref1.value;
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
        md: Number(productData.CardSize)
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
var _default = exports["default"] = Marketplace;
