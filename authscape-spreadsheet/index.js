"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvasPreview = canvasPreview;
var _react = _interopRequireDefault(require("react"));
var _reactImageCrop = require("react-image-crop");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
var TO_RADIANS = Math.PI / 180;
function canvasPreview(_x, _x2, _x3) {
  return _canvasPreview.apply(this, arguments);
}
function _canvasPreview() {
  _canvasPreview = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(image, canvas, crop) {
    var scale,
      rotate,
      ctx,
      scaleX,
      scaleY,
      pixelRatio,
      cropX,
      cropY,
      rotateRads,
      centerX,
      centerY,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          scale = _args.length > 3 && _args[3] !== undefined ? _args[3] : 1;
          rotate = _args.length > 4 && _args[4] !== undefined ? _args[4] : 0;
          ctx = canvas.getContext('2d');
          if (ctx) {
            _context.next = 5;
            break;
          }
          throw new Error('No 2d context');
        case 5:
          scaleX = image.naturalWidth / image.width;
          scaleY = image.naturalHeight / image.height; // devicePixelRatio slightly increases sharpness on retina devices
          // at the expense of slightly slower render times and needing to
          // size the image back down if you want to download/upload and be
          // true to the images natural size.
          pixelRatio = window.devicePixelRatio; // const pixelRatio = 1
          canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
          canvas.height = Math.floor(crop.height * scaleY * pixelRatio);
          ctx.scale(pixelRatio, pixelRatio);
          ctx.imageSmoothingQuality = 'high';
          cropX = crop.x * scaleX;
          cropY = crop.y * scaleY;
          rotateRads = rotate * TO_RADIANS;
          centerX = image.naturalWidth / 2;
          centerY = image.naturalHeight / 2;
          ctx.save();

          // 5) Move the crop origin to the canvas origin (0,0)
          ctx.translate(-cropX, -cropY);
          // 4) Move the origin to the center of the original position
          ctx.translate(centerX, centerY);
          // 3) Rotate around the origin
          ctx.rotate(rotateRads);
          // 2) Scale the image
          ctx.scale(scale, scale);
          // 1) Move the center of the image to the origin (0,0)
          ctx.translate(-centerX, -centerY);
          ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.naturalWidth, image.naturalHeight);
          ctx.restore();
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _canvasPreview.apply(this, arguments);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropzone = void 0;
var _material = require("@mui/material");
var _react = _interopRequireWildcard(require("react"));
var _reactDropzone = require("react-dropzone");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  paddingTop: "50px",
  paddingBottom: "50px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};
var focusedStyle = {
  borderColor: '#2196f3'
};
var acceptStyle = {
  borderColor: '#00e676'
};
var rejectStyle = {
  borderColor: '#ff1744'
};
var Dropzone = exports.Dropzone = function Dropzone(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? "Drag 'n' drop some files here, or click to select files" : _ref$text,
    _ref$styleOverride = _ref.styleOverride,
    styleOverride = _ref$styleOverride === void 0 ? null : _ref$styleOverride,
    _ref$onDrop = _ref.onDrop,
    _onDrop = _ref$onDrop === void 0 ? null : _ref$onDrop,
    _ref$maxFiles = _ref.maxFiles,
    maxFiles = _ref$maxFiles === void 0 ? 1 : _ref$maxFiles,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    _ref$accept = _ref.accept,
    accept = _ref$accept === void 0 ? {
      'image/*': []
    } : _ref$accept;
  if (styleOverride != null) {
    var combined = _objectSpread(_objectSpread({}, baseStyle), styleOverride);
    baseStyle = combined;
  }
  var _useDropzone = (0, _reactDropzone.useDropzone)({
      accept: accept,
      maxFiles: maxFiles,
      multiple: multiple,
      onDrop: function onDrop(files) {
        if (multiple) {
          _onDrop(files);
        } else {
          _onDrop(files[0]);
        }
      }
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    isFocused = _useDropzone.isFocused,
    isDragAccept = _useDropzone.isDragAccept,
    isDragReject = _useDropzone.isDragReject;
  var style = (0, _react.useMemo)(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseStyle), isFocused ? focusedStyle : {}), isDragAccept ? acceptStyle : {}), isDragReject ? rejectStyle : {});
  }, [isFocused, isDragAccept, isDragReject]);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: "container",
    sx: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, getRootProps({
    style: style
  }), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), /*#__PURE__*/_react["default"].createElement(_material.Box, null, text)));
};
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoEditor = PhotoEditor;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _authscape = require("authscape");
var _reactImageCrop = _interopRequireDefault(require("react-image-crop"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _material = require("@mui/material");
var _DownloadRounded = _interopRequireDefault(require("@mui/icons-material/DownloadRounded"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _BrightnessHighRounded = _interopRequireDefault(require("@mui/icons-material/BrightnessHighRounded"));
var _ContrastRounded = _interopRequireDefault(require("@mui/icons-material/ContrastRounded"));
var _WaterDropRounded = _interopRequireDefault(require("@mui/icons-material/WaterDropRounded"));
var _FilterBAndWRounded = _interopRequireDefault(require("@mui/icons-material/FilterBAndWRounded"));
var _DonutSmallRounded = _interopRequireDefault(require("@mui/icons-material/DonutSmallRounded"));
var _InvertColorsRounded = _interopRequireDefault(require("@mui/icons-material/InvertColorsRounded"));
var _LensBlurRounded = _interopRequireDefault(require("@mui/icons-material/LensBlurRounded"));
var _WallpaperRounded = _interopRequireDefault(require("@mui/icons-material/WallpaperRounded"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// remove when publishing
// import {Dropzone} from './dropzone';
// import { useDebounceEffect } from './useDebounceEffect';
// import { canvasPreview } from './canvasPreview';
// import {SliderEditor} from './sliderEditor';

function PhotoEditor(_ref) {
  var isOpen = _ref.isOpen,
    _ref$photoUrls = _ref.photoUrls,
    photoUrls = _ref$photoUrls === void 0 ? [] : _ref$photoUrls,
    _ref$rowData = _ref.rowData,
    rowData = _ref$rowData === void 0 ? null : _ref$rowData,
    _ref$onCancelEditor = _ref.onCancelEditor,
    onCancelEditor = _ref$onCancelEditor === void 0 ? null : _ref$onCancelEditor,
    _ref$onPhotoUpdated = _ref.onPhotoUpdated,
    onPhotoUpdated = _ref$onPhotoUpdated === void 0 ? null : _ref$onPhotoUpdated,
    _ref$onPhotoDelete = _ref.onPhotoDelete,
    onPhotoDelete = _ref$onPhotoDelete === void 0 ? null : _ref$onPhotoDelete;
  var previewCanvasRef = (0, _react.useRef)(null);
  var imgRef = (0, _react.useRef)(null);
  var hiddenAnchorRef = (0, _react.useRef)(null);
  var blobUrlRef = (0, _react.useRef)('');
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    crop = _useState2[0],
    setCrop = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    completedCrop = _useState4[0],
    setCompletedCrop = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = _slicedToArray(_useState5, 2),
    scale = _useState6[0],
    setScale = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    rotate = _useState8[0],
    setRotate = _useState8[1];
  var _useState9 = (0, _react.useState)(undefined),
    _useState0 = _slicedToArray(_useState9, 2),
    aspect = _useState0[0],
    setAspect = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    photoDimensions = _useState10[0],
    setPhotoDimensions = _useState10[1];
  var _useState11 = (0, _react.useState)(photoUrls),
    _useState12 = _slicedToArray(_useState11, 2),
    imageUrls = _useState12[0],
    setImageUrls = _useState12[1];
  var _useState13 = (0, _react.useState)(imageUrls.length > 0 ? {
      url: imageUrls[0].url,
      id: imageUrls[0].id
    } : null),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedImageUrl = _useState14[0],
    setSelectedImageUrl = _useState14[1];
  var _useState15 = (0, _react.useState)(true),
    _useState16 = _slicedToArray(_useState15, 2),
    hasFiltersReset = _useState16[0],
    setHasFiltersReset = _useState16[1];
  var DEFAULT_OPTIONS = [{
    name: 'Brightness',
    icon: /*#__PURE__*/_react["default"].createElement(_BrightnessHighRounded["default"], null),
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  }, {
    name: 'Contrast',
    icon: /*#__PURE__*/_react["default"].createElement(_ContrastRounded["default"], null),
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  }, {
    name: 'Saturation',
    icon: /*#__PURE__*/_react["default"].createElement(_WaterDropRounded["default"], null),
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  }, {
    name: 'Grayscale',
    icon: /*#__PURE__*/_react["default"].createElement(_FilterBAndWRounded["default"], null),
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  }, {
    name: 'Sepia',
    icon: /*#__PURE__*/_react["default"].createElement(_DonutSmallRounded["default"], null),
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  }, {
    name: 'Hue Rotate',
    icon: /*#__PURE__*/_react["default"].createElement(_InvertColorsRounded["default"], null),
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  }, {
    name: 'Blur',
    icon: /*#__PURE__*/_react["default"].createElement(_LensBlurRounded["default"], null),
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }];
  var _useState17 = (0, _react.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedOptionIndex = _useState18[0],
    setSelectedOptionIndex = _useState18[1];
  var _useState19 = (0, _react.useState)(DEFAULT_OPTIONS),
    _useState20 = _slicedToArray(_useState19, 2),
    options = _useState20[0],
    setOptions = _useState20[1];
  var selectedOption = options[selectedOptionIndex];
  (0, _react.useEffect)(function () {
    if (!isOpen) {
      // reset the filters
      setOptions(DEFAULT_OPTIONS);
      setSelectedImageUrl(photoUrls.length > 0 ? {
        url: photoUrls[0].url,
        id: photoUrls[0].id
      } : null);
    } else {
      setImageUrls(photoUrls);
      setSelectedImageUrl(photoUrls.length > 0 ? {
        url: photoUrls[0].url,
        id: photoUrls[0].id
      } : null);
    }
  }, [isOpen]);
  function handleSliderChange(_ref2) {
    var target = _ref2.target;
    setOptions(function (prevOptions) {
      return prevOptions.map(function (option, index) {
        if (index !== selectedOptionIndex) return option;
        return _objectSpread(_objectSpread({}, option), {}, {
          value: target.value
        });
      });
    });
    setHasFiltersReset(false);
  }
  var getImageStyle = (0, _react.useMemo)(function getImageStyle() {
    var filters = options.map(function (option) {
      return "".concat(option.property, "(").concat(option.value).concat(option.unit, ")");
    });
    return {
      filter: filters.join(' ')
    };
  }, [options]);
  useDebounceEffect(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (completedCrop !== null && completedCrop !== void 0 && completedCrop.width && completedCrop !== null && completedCrop !== void 0 && completedCrop.height && imgRef.current && previewCanvasRef.current) {
            // We use canvasPreview as it's much faster than imgPreview.
            canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop, scale, rotate);
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), 100, [completedCrop, scale, rotate]);
  function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
    return centerCrop(makeAspectCrop({
      unit: '%',
      width: 90
    }, aspect, mediaWidth, mediaHeight), mediaWidth, mediaHeight);
  }
  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else {
      setAspect(16 / 9);
      if (imgRef.current) {
        var _imgRef$current = imgRef.current,
          width = _imgRef$current.width,
          height = _imgRef$current.height;
        var newCrop = centerAspectCrop(width, height, 16 / 9);
        setCrop(newCrop);
        // Updates the preview
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
    }
  }
  function onDownloadCropClick() {
    return _onDownloadCropClick.apply(this, arguments);
  }
  function _onDownloadCropClick() {
    _onDownloadCropClick = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var image, previewCanvas, scaleX, scaleY, offscreen, ctx, blob;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            // const canvas = document.getElementById('myCanvas'); // Get the canvas element
            previewCanvasRef.current.toBlob(function (blob) {
              var data = new FormData();
              data.append("file", blob, "updatedphoto.jpg");
              (0, _authscape.apiService)().post("/AuthScapeSpreadSheet/UploadPhoto", data);
            }, 'image/jpeg', 0.95); // Specify the image format and quality
            image = imgRef.current;
            image.crossOrigin = 'anonymous';
            previewCanvas = previewCanvasRef.current;
            if (!(!image || !previewCanvas || !completedCrop)) {
              _context5.next = 6;
              break;
            }
            throw new Error('Crop canvas does not exist');
          case 6:
            // This will size relative to the uploaded image
            // size. If you want to size according to what they
            // are looking at on screen, remove scaleX + scaleY
            scaleX = image.naturalWidth / image.width;
            scaleY = image.naturalHeight / image.height;
            offscreen = new OffscreenCanvas(completedCrop.width * scaleX, completedCrop.height * scaleY);
            ctx = offscreen.getContext('2d');
            if (ctx) {
              _context5.next = 12;
              break;
            }
            throw new Error('No 2d context');
          case 12:
            ctx.drawImage(previewCanvas, 0, 0, previewCanvas.width, previewCanvas.height, 0, 0, offscreen.width, offscreen.height);

            // You might want { type: "image/jpeg", quality: <0 to 1> } to
            // reduce image size
            _context5.next = 15;
            return offscreen.convertToBlob({
              type: 'image/png'
            });
          case 15:
            blob = _context5.sent;
            if (blobUrlRef.current) {
              URL.revokeObjectURL(blobUrlRef.current);
            }
            blobUrlRef.current = URL.createObjectURL(blob);
            if (hiddenAnchorRef.current) {
              hiddenAnchorRef.current.href = blobUrlRef.current;
              hiddenAnchorRef.current.click();
            }
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _onDownloadCropClick.apply(this, arguments);
  }
  function onImageLoad(e) {
    if (aspect) {
      var _e$currentTarget = e.currentTarget,
        width = _e$currentTarget.width,
        height = _e$currentTarget.height;
      setCrop(width, height, aspect);
    }

    // send the dimentions
    setPhotoDimensions({
      height: e.currentTarget.naturalHeight,
      width: e.currentTarget.naturalWidth
    });
  }
  function urlToBlob(_x) {
    return _urlToBlob.apply(this, arguments);
  }
  function _urlToBlob() {
    _urlToBlob = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url) {
      var response, blob;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetch(url);
          case 2:
            response = _context6.sent;
            _context6.next = 5;
            return response.blob();
          case 5:
            blob = _context6.sent;
            return _context6.abrupt("return", blob);
          case 7:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return _urlToBlob.apply(this, arguments);
  }
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: isOpen,
    maxWidth: "md",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    fullWidth: true,
    onClose: function onClose() {
      if (onCancelEditor != null) {
        onCancelEditor();
      }
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, "Upload Photo"), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    "aria-label": "close",
    onClick: function onClick() {
      if (onCancelEditor != null) {
        onCancelEditor();
      }
    },
    sx: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: function color(theme) {
        return theme.palette.grey[500];
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, selectedImageUrl != null && imageUrls != [] && imageUrls != null && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 0
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react["default"].createElement(_material.List, {
    className: "sidebar",
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    disablePadding: true,
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var canvas, ctx;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            // await apiService().DownloadFile("/AuthScapeSpreadSheet/RemoveBackground", "", (blob) => {
            //   imgRef.current.src = URL.createObjectURL(blob);;
            // }, "post", { Url: imageUrls}, "image/png", true);
            canvas = document.createElement('canvas');
            canvas.width = photoDimensions.width;
            canvas.height = photoDimensions.height;
            ctx = canvas.getContext('2d'); // Apply filters to the canvas
            ctx.filter = getImageStyle.filter;

            // Draw the image onto the canvas
            ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(function (blob) {
              var data = new FormData();
              data.append("file", blob, "updatedphoto.jpg");
              (0, _authscape.apiService)().DownloadFile("/AuthScapeSpreadSheet/RemoveBackground", "", function (blob) {
                imgRef.current.src = URL.createObjectURL(blob);
                setHasFiltersReset(false);
              }, "post", data, "image/png", true);
            }, 'image/png'); // Specify the image format and quality
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemButton, null, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, /*#__PURE__*/_react["default"].createElement(_WallpaperRounded["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: "Remove Background"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    sx: {
      marginTop: 2,
      marginBottom: 2
    }
  }), options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
      disablePadding: true,
      key: index,
      sx: {
        backgroundColor: index === selectedOptionIndex ? "lightgray" : "white"
      },
      active: index === selectedOptionIndex,
      onClick: function onClick() {
        return setSelectedOptionIndex(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.ListItemButton, null, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, null, option.icon), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
      primary: option.name
    })));
  }))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      textAlign: "center"
    }
  }, selectedImageUrl != null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactImageCrop["default"], {
    crop: crop,
    onChange: function onChange(c) {
      return setCrop(c);
    },
    disabled: false,
    circularCrop: false,
    aspect: aspect,
    minHeight: 100,
    onComplete: function onComplete(c) {
      return setCompletedCrop(c);
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    ref: imgRef,
    crossOrigin: "anonymous",
    src: selectedImageUrl.url,
    className: "main-image",
    style: _objectSpread(_objectSpread({}, getImageStyle), {}, {
      objectFit: "contain",
      width: 400,
      height: 400,
      transform: "scale(".concat(scale, ") rotate(").concat(rotate, "deg)")
    }),
    onLoad: onImageLoad
  }))), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, photoDimensions != null && /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      textAlign: "center"
    }
  }, "Photo Dimensions: ", photoDimensions.width, " X ", photoDimensions.height)))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 2,
    sx: {
      borderLeft: "1px solid lightgray;",
      paddingLeft: 1
    }
  }, imageUrls.length > 0 && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "column",
    spacing: 2,
    sx: {
      height: 500,
      overflowY: "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      width: 100,
      height: 100,
      backgroundColor: "red"
    }
  }, /*#__PURE__*/_react["default"].createElement(Dropzone, {
    text: "Upload Photo",
    multiple: false,
    styleOverride: {
      paddingTop: 30,
      paddingBottom: 0,
      height: 100
    },
    onDrop: (/*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(file) {
        var fileUrl, response, copyPaths;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              fileUrl = URL.createObjectURL(file); // send notification, return back the new URL from the developers side
              _context3.next = 3;
              return onPhotoUpdated({
                url: fileUrl,
                id: null,
                rowData: rowData,
                status: "new"
              });
            case 3:
              response = _context3.sent;
              // if (response == null)
              // {
              //   fileUrl = URL.createObjectURL(file);
              // }

              if (response != null) {
                copyPaths = _toConsumableArray(imageUrls);
                copyPaths.push({
                  id: response.id,
                  url: response.url
                });
                setImageUrls(copyPaths);
              }
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }())
  }))), imageUrls.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_system.Box, {
      key: index,
      sx: {
        position: "relative"
      },
      onClick: function onClick() {
        setSelectedImageUrl({
          url: item.url,
          id: item.id
        });

        // reset the filters
        setOptions(DEFAULT_OPTIONS);
        setHasFiltersReset(true);
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      "aria-label": "delete",
      size: "large",
      sx: {
        position: "absolute",
        right: -10,
        top: 25
      },
      onClick: function onClick(event) {
        event.stopPropagation();
        if (onPhotoDelete != null) {
          onPhotoDelete(item);
        }
        var copyPaths = _toConsumableArray(imageUrls);
        var updatedList = copyPaths.filter(function (item2) {
          return item2.id !== item.id;
        });
        setImageUrls(updatedList);

        // onCancelEditor();
      }
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], {
      fontSize: "inherit"
    })), /*#__PURE__*/_react["default"].createElement("img", {
      srcSet: "".concat(item.url),
      src: "".concat(item.url),
      loading: "lazy",
      style: {
        cursor: "pointer",
        width: 100,
        height: 100,
        objectFit: "contain"
      }
    }));
  }))))), /*#__PURE__*/_react["default"].createElement(_system.Box, null, "Adjusting your filter"), /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      paddingBottom: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(SliderEditor, {
    min: selectedOption.range.min,
    max: selectedOption.range.max,
    value: selectedOption.value,
    handleChange: handleSliderChange
  }))), selectedImageUrl == null && /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(Dropzone, {
    text: "Drag 'n' drop your photo or click to select photo",
    multiple: false,
    onDrop: (/*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(file) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              url = URL.createObjectURL(file); // send notification, return back the new URL from the developers side
              _context4.next = 3;
              return onPhotoUpdated({
                url: url,
                id: null,
                rowData: rowData,
                status: "new"
              });
            case 3:
              response = _context4.sent;
              if (onCancelEditor != null) {
                onCancelEditor();
              }
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }())
  }))), hasFiltersReset && /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, selectedImageUrl != null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react["default"].createElement(_DownloadRounded["default"], null),
    variant: "text",
    sx: {
      paddingLeft: 2
    },
    onClick: function onClick() {
      var canvas = document.createElement('canvas');

      // hard set width and height
      // canvas.width = width; // Set the width of the canvas
      // canvas.height = height; // Set the height of the canvas

      canvas.width = photoDimensions.width;
      canvas.height = photoDimensions.height;
      var ctx = canvas.getContext('2d');

      // Apply filters to the canvas
      ctx.filter = getImageStyle.filter;

      // Draw the image onto the canvas
      ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
      var dataURL = canvas.toDataURL('image/png');

      // Create a link element to trigger the download
      var link = document.createElement('a');
      link.download = "photo.png";
      link.href = dataURL;

      // Append the link to the body and trigger the download
      document.body.appendChild(link);
      link.click();

      // Remove the link from the body after download
      document.body.removeChild(link);
    }
  }, "Download Photo")), /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      if (onCancelEditor != null) {
        onCancelEditor();
      }
    }
  }, "Close")))), !hasFiltersReset && /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], {
    sx: {
      backgroundColor: "lightgray"
    }
  }, selectedImageUrl != null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_system.Box, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    startIcon: /*#__PURE__*/_react["default"].createElement(_DownloadRounded["default"], null),
    variant: "text",
    sx: {
      paddingLeft: 2
    },
    onClick: function onClick() {
      var canvas = document.createElement('canvas');

      // hard set width and height
      // canvas.width = width; // Set the width of the canvas
      // canvas.height = height; // Set the height of the canvas

      canvas.width = photoDimensions.width;
      canvas.height = photoDimensions.height;
      var ctx = canvas.getContext('2d');

      // Apply filters to the canvas
      ctx.filter = getImageStyle.filter;

      // Draw the image onto the canvas
      ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
      var dataURL = canvas.toDataURL('image/png');

      // Create a link element to trigger the download
      var link = document.createElement('a');
      link.download = "photo.png";
      link.href = dataURL;

      // Append the link to the body and trigger the download
      document.body.appendChild(link);
      link.click();

      // Remove the link from the body after download
      document.body.removeChild(link);
    }
  }, "Download Photo")), /*#__PURE__*/_react["default"].createElement(_system.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      // reset the filters
      setOptions(DEFAULT_OPTIONS);
      setHasFiltersReset(true);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      // need to know which photo position this is so we can update it....

      var canvas = document.createElement('canvas');
      // canvas.width = width; // Set the width of the canvas
      // canvas.height = height; // Set the height of the canvas

      canvas.width = photoDimensions.width;
      canvas.height = photoDimensions.height;
      var ctx = canvas.getContext('2d');

      // Apply filters to the canvas
      ctx.filter = getImageStyle.filter;

      // Draw the image onto the canvas
      ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(function (blob) {
        var newArrayList = _toConsumableArray(imageUrls);
        newArrayList.find(function (a) {
          return a.id == selectedImageUrl.id;
        }).url = URL.createObjectURL(blob);
        setImageUrls(newArrayList);
        setOptions(DEFAULT_OPTIONS);
        setHasFiltersReset(true);
        setSelectedImageUrl({
          url: newArrayList.find(function (a) {
            return a.id == selectedImageUrl.id;
          }).url,
          id: newArrayList.find(function (a) {
            return a.id == selectedImageUrl.id;
          }).id
        });

        // send to the front end
        onPhotoUpdated({
          url: newArrayList.find(function (a) {
            return a.id == selectedImageUrl.id;
          }).url,
          id: newArrayList.find(function (a) {
            return a.id == selectedImageUrl.id;
          }).id,
          status: "modified"
        });
      }, 'image/png'); // Specify the image format and quality
    },
    autoFocus: true
  }, "Accept Changes")))));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarItem = SidebarItem;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SidebarItem(_ref) {
  var name = _ref.name,
    active = _ref.active,
    handleClick = _ref.handleClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "sidebar-item ".concat(active ? 'active' : ''),
    onClick: handleClick
  }, name);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderEditor = SliderEditor;
var _react = _interopRequireDefault(require("react"));
var _Slider = _interopRequireDefault(require("@mui/material/Slider"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SliderEditor(_ref) {
  var min = _ref.min,
    max = _ref.max,
    value = _ref.value,
    handleChange = _ref.handleChange;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "slider-container"
  }, /*#__PURE__*/_react["default"].createElement(_Slider["default"], {
    size: "small"
    // defaultValue={70}
    ,
    "aria-label": "Small",
    valueLabelDisplay: "auto",
    className: "slider",
    min: min,
    max: max,
    value: value,
    onChange: handleChange
  }));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpreadSheetRichTextEditor = SpreadSheetRichTextEditor;
var _react = _interopRequireDefault(require("react"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _authscape = require("authscape");
var _material = require("@mui/material");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SpreadSheetRichTextEditor(_ref) {
  var isOpen = _ref.isOpen,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? null : _ref$content,
    _ref$onCancelEditor = _ref.onCancelEditor,
    onCancelEditor = _ref$onCancelEditor === void 0 ? null : _ref$onCancelEditor,
    _ref$onUpdate = _ref.onUpdate,
    onUpdate = _ref$onUpdate === void 0 ? null : _ref$onUpdate;
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: isOpen,
    maxWidth: "md",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    fullWidth: true,
    onClose: function onClose() {
      if (onCancelEditor != null) {
        onCancelEditor();
      }
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, "Edit your content"), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    "aria-label": "close",
    onClick: function onClick() {
      if (onCancelEditor != null) {
        onCancelEditor();
      }
    },
    sx: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: function color(theme) {
        return theme.palette.grey[500];
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
    id: "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_authscape.RichTextEditor, {
    html: content,
    onSave: function onSave(html) {
      onUpdate(html);
    }
  }))));
}
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _react = _interopRequireWildcard(require("react"));
var _reactgrid = require("@silevis/reactgrid");
var _reactDeviceDetect = require("react-device-detect");
var signalR = _interopRequireWildcard(require("@microsoft/signalr"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _VisibilityOffRounded = _interopRequireDefault(require("@mui/icons-material/VisibilityOffRounded"));
var _FilterListRounded = _interopRequireDefault(require("@mui/icons-material/FilterListRounded"));
var _SwapVertRounded = _interopRequireDefault(require("@mui/icons-material/SwapVertRounded"));
var _LineWeightRounded = _interopRequireDefault(require("@mui/icons-material/LineWeightRounded"));
var _PivotTableChartRounded = _interopRequireDefault(require("@mui/icons-material/PivotTableChartRounded"));
var _ViewWeekRounded = _interopRequireDefault(require("@mui/icons-material/ViewWeekRounded"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _authscape = require("authscape");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// remove when publishing
// import {PhotoEditor} from './photoEditor';
// import {SpreadSheetRichTextEditor} from './spreadsheetRichTextEditor';

var SpreadsheetViewer = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var currentUser = _ref.currentUser,
    documentId = _ref.documentId,
    url = _ref.url,
    sx = _ref.sx,
    _ref$leftColumnSticky = _ref.leftColumnSticky,
    leftColumnSticky = _ref$leftColumnSticky === void 0 ? 0 : _ref$leftColumnSticky,
    _ref$rightColumnStick = _ref.rightColumnSticky,
    rightColumnSticky = _ref$rightColumnStick === void 0 ? 0 : _ref$rightColumnStick,
    _ref$topRowSticky = _ref.topRowSticky,
    topRowSticky = _ref$topRowSticky === void 0 ? 0 : _ref$topRowSticky,
    _ref$bottomRowSticky = _ref.bottomRowSticky,
    bottomRowSticky = _ref$bottomRowSticky === void 0 ? 0 : _ref$bottomRowSticky,
    _ref$hideToolbar = _ref.hideToolbar,
    hideToolbar = _ref$hideToolbar === void 0 ? false : _ref$hideToolbar,
    _ref$onFocusLocationC = _ref.onFocusLocationChanged,
    _onFocusLocationChanged = _ref$onFocusLocationC === void 0 ? null : _ref$onFocusLocationC,
    _ref$noPhotoText = _ref.noPhotoText,
    noPhotoText = _ref$noPhotoText === void 0 ? "No Photo" : _ref$noPhotoText,
    _ref$photoWidth = _ref.photoWidth,
    photoWidth = _ref$photoWidth === void 0 ? 130 : _ref$photoWidth,
    _ref$advanceQuery = _ref.advanceQuery,
    advanceQuery = _ref$advanceQuery === void 0 ? null : _ref$advanceQuery,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? null : _ref$onChange,
    _ref$onAddPhoto = _ref.onAddPhoto,
    onAddPhoto = _ref$onAddPhoto === void 0 ? null : _ref$onAddPhoto,
    _ref$onPhotoDelete = _ref.onPhotoDelete,
    onPhotoDelete = _ref$onPhotoDelete === void 0 ? null : _ref$onPhotoDelete,
    _ref$hubUrl = _ref.hubUrl,
    hubUrl = _ref$hubUrl === void 0 ? null : _ref$hubUrl,
    _ref$onLoading = _ref.onLoading,
    onLoading = _ref$onLoading === void 0 ? null : _ref$onLoading,
    _ref$usePagination = _ref.usePagination,
    usePagination = _ref$usePagination === void 0 ? null : _ref$usePagination,
    _ref$param = _ref.param,
    param = _ref$param === void 0 ? {} : _ref$param;
  var hasLoadedSignalR = (0, _react.useRef)(false);
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    rows = _useState4[0],
    setRows = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    rawRows = _useState6[0],
    setRawRows = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    rowHeight = _useState8[0],
    setRowHeight = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    columns = _useState0[0],
    setColumns = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    showPhotoUploadDialog = _useState10[0],
    setShowPhotoUploadDialog = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    editDescriptionDialog = _useState12[0],
    setEditDescriptionDialog = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    photoEditorKey = _useState14[0],
    setPhotoEditorKey = _useState14[1];
  var _useState15 = (0, _react.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    totalCount = _useState16[0],
    setTotalCount = _useState16[1];
  var _useState17 = (0, _react.useState)(function () {
      return -1;
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    cellChangesIndex = _useState18[0],
    setCellChangesIndex = _useState18[1];
  var _useState19 = (0, _react.useState)(function () {
      return [];
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    cellChanges = _useState20[0],
    setCellChanges = _useState20[1];
  var highlightsRef = (0, _react.useRef)([]);
  var userIdRef = (0, _react.useRef)(0);
  var returnedRef = (0, _react.useRef)([]);
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showStickyDialog = _useState22[0],
    setShowStickyDialog = _useState22[1];
  var leftColumnRef = (0, _react.useRef)(null);
  var rightColumnRef = (0, _react.useRef)(null);
  var topRowRef = (0, _react.useRef)(null);
  var bottomRowRef = (0, _react.useRef)(null);

  // const [leftColumnSticky, setLeftColumnSticky] = useState(null);
  // const [rightColumnSticky, setRightColumnSticky] = useState(null);
  // const [topRowSticky, setTopRowSticky] = useState(null);
  // const [bottomRowSticky, setBottomRowSticky] = useState(null);

  var _useState23 = (0, _react.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    highlights = _useState24[0],
    setHighlights = _useState24[1];
  var _useState25 = (0, _react.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    sessions = _useState26[0],
    setSessions = _useState26[1];
  var _useState27 = (0, _react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    requestedChanges = _useState28[0],
    setRequestedChanges = _useState28[1];
  var _useState29 = (0, _react.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    hubConnection = _useState30[0],
    setHubConnection = _useState30[1];
  var _useState31 = (0, _react.useState)(_objectSpread(_objectSpread({}, usePagination), param)),
    _useState32 = _slicedToArray(_useState31, 2),
    paginationParam = _useState32[0],
    setPaginationParam = _useState32[1];
  var getRows = function getRows() {
    return returnedRef.current;
  };
  var getRowData = function getRowData(rowId) {
    var _rowId = 0;
    if (rowId == null || rowId == "" || isNaN(rowId)) {
      _rowId = 0;
    } else {
      _rowId = rowId;
    }
    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      if (_rowId == rows[rowIndex].rowId) {
        return rows[rowIndex];
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (requestedChanges != null && requestedChanges.length > 0) {
      // go into each request
      for (var index = 0; index < requestedChanges.length; index++) {
        var request = requestedChanges[index];

        // go into each row
        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
          // alert(request.rowId + "==" + rows[rowIndex].rowId)
          // found our row!
          if (request.rowId == rows[rowIndex].rowId) {
            // look into each cell of the row
            for (var cellIndex = 0; cellIndex < rows[rowIndex].cells.length; cellIndex++) {
              if (rows[rowIndex].cells[cellIndex].columnId == request.fieldName) {
                switch (rows[rowIndex].cells[cellIndex].type) {
                  case "text":
                    rows[rowIndex].cells[cellIndex].text = request.value;
                    break;
                  case "checkbox":
                    rows[rowIndex].cells[cellIndex].checked = Boolean(request.value);
                    break;
                  case "dateElement":
                    rows[rowIndex].cells[cellIndex].date = Date.parse(request.date);
                    break;
                  case "dropdown":
                    rows[rowIndex].cells[cellIndex].selectedValue = request.value;
                    break;
                  case "email":
                    rows[rowIndex].cells[cellIndex].text = request.value;
                    break;
                  case "chevron":
                    rows[rowIndex].cells[cellIndex].text = request.value;
                    break;
                  case "header":
                    rows[rowIndex].cells[cellIndex].text = request.value;
                    break;
                  case "number":
                    rows[rowIndex].cells[cellIndex].value = parseFloat(request.value);

                    // rows[rowIndex].cells[cellIndex].format = new Intl.NumberFormat('en-US', {
                    //     style: 'currency',
                    //     currency: 'USD',
                    // });

                    break;
                  case "money":
                    rows[rowIndex].cells[cellIndex].value = parseFloat(request.value);
                    break;
                  case "time":
                    rows[rowIndex].cells[cellIndex].date = Date.parse(request.date);
                    break;
                  case "image":
                    rows[rowIndex].cells[cellIndex].url = request.value;
                    break;
                  case "richtext":
                    rows[rowIndex].cells[cellIndex].hasText = request.hasText;
                    break;
                }
              }
            }
            break;
          }
        }
      }
      setRows(function (rowUpdate) {
        return rowUpdate;
      });

      // clear our selected changes
      setRequestedChanges([]);
    }
  }, [requestedChanges]);
  var validateAllCells = function validateAllCells(cells) {
    var hasData = false;
    cells.forEach(function (element) {
      if (element.readOnly) {
        element.nonEditable = element.readOnly;
      }
      if (element.text != "" && element.text != null) {
        hasData = true;
      }
    });
    return hasData;
  };
  var getSpreadSheetRows = function getSpreadSheetRows(headerCell, rows) {
    // returnedRef
    returnedRef.current = [];
    var modifiedCells = [];
    var newHeaderCells = _toConsumableArray(headerCell);
    newHeaderCells.forEach(function (element) {
      if (element.isHidden == false) {
        modifiedCells.push(element);
      }
    });
    var dataRows = [{
      rowId: "header",
      cells: modifiedCells
    }];
    var _loop = function _loop() {
      var row = rows[index];
      if (rows != null && row.cells.length > 0 && advanceQuery != null && advanceQuery.rules.length > 0) {
        row.cells.forEach(function (element) {
          advanceQuery.rules.forEach(function (rule) {
            if (rule.field == element.columnId) {
              if (rule.operator == "contains") {
                if (element.text.toLowerCase().includes(rule.value.toLowerCase())) {
                  if (validateAllCells(row.cells)) {
                    dataRows.push({
                      rowId: row.rowId,
                      cells: row.cells,
                      height: row.height,
                      reorderable: row.reorderable
                    });
                    returnedRef.current.push(row);
                  }
                }
              } else if (rule.operator == "notContains") {
                if (!element.text.toLowerCase().includes(rule.value.toLowerCase())) {
                  if (validateAllCells(row.cells)) {
                    dataRows.push({
                      rowId: row.rowId,
                      cells: row.cells,
                      height: row.height,
                      reorderable: row.reorderable
                    });
                    returnedRef.current.push(row);
                  }
                }
              }
            }
          });
        });
      } else {
        if (validateAllCells(row.cells)) {
          dataRows.push({
            rowId: row.rowId,
            cells: row.cells,
            height: row.height,
            reorderable: row.reorderable
          });
          returnedRef.current.push(row);
        }
      }
    };
    for (var index = 0; index < rows.length; index++) {
      _loop();
    }
    return dataRows;
  };
  var handleUndoChanges = function handleUndoChanges() {
    if (cellChangesIndex >= 0) {
      setRows(function (prevPeople) {
        return undoChanges(cellChanges[cellChangesIndex], prevPeople);
      });
    }
  };
  var handleRedoChanges = function handleRedoChanges() {
    if (cellChangesIndex + 1 <= cellChanges.length - 1) {
      setRows(function (prevPeople) {
        return redoChanges(cellChanges[cellChangesIndex + 1], prevPeople);
      });
    }
  };
  var setupSignalR = function setupSignalR() {
    if (hasLoadedSignalR.current) {
      return;
    }
    hasLoadedSignalR.current = true;
    userIdRef.current = currentUser.id;
    if (hubUrl == null) {
      return;
    }
    var connection = new signalR.HubConnectionBuilder().withUrl(hubUrl).build();
    connection.on("onUpdateUserSession", function () {
      getSessions();
    });
    connection.on("onClickSpreadsheet", function (userId, color, rowId, columnId) {
      if (userIdRef.current != userId) {
        onFocusClicked(userId, color, rowId, columnId);
      }
    });
    connection.on("onChangeValue", function (userId, rowId, fieldName, value) {
      if (userIdRef.current != userId) {
        setRequestedChanges(function (prevMessages) {
          return [].concat(_toConsumableArray(prevMessages), [{
            userId: userId,
            rowId: rowId,
            fieldName: fieldName,
            value: value
          }]);
        });
      }
    });
    connection.start().then(function (result) {
      var randomColor = getRandomColor();
      connection.invoke("Connect", currentUser.firstName + " " + currentUser.lastName, documentId, currentUser.id, randomColor);
      setHubConnection(connection);

      // get the init users, after that we need to hook it
      getSessions();
    });
  };
  var AdjustForHiddenColumns = function AdjustForHiddenColumns(data) {
    var hiddenFields = [];
    var newColumns = [];
    data.columns.forEach(function (column) {
      if (column.isHidden == false) {
        newColumns.push(column);
      } else {
        hiddenFields.push(column.columnId);
      }
    });
    data.columns = newColumns;

    // remove the hidden columns
    data.rows.forEach(function (row) {
      var newCells = [];
      row.cells.forEach(function (cell) {
        if (!hiddenFields.includes(cell.columnId)) {
          newCells.push(cell);
        }
      });
      row.cells = newCells;
    });
    return data;
  };
  var reloadData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, data1, modifiedData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _authscape.apiService)().post(url, paginationParam);
          case 2:
            response = _context.sent;
            if (response != null && response.status == 200) {
              data1 = structuredClone(response.data); // get the data together in case we need to reference it
              setRawRows(data1.rows);
              setData(response.data);

              // if the column is marked as hidden, the system will hide it
              modifiedData = AdjustForHiddenColumns(response.data); // set the rows
              setRows(modifiedData.rows);

              // set the columns
              setColumns(modifiedData.columns);
              setTotalCount(modifiedData.totalCount);
              if (modifiedData.rows.length > 0) {
                setRowHeight(modifiedData.rows[0].height);
              }
              setupSignalR();
              if (onLoading != null) {
                onLoading(false);
              }
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function reloadData() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      reloadData: reloadData,
      getRows: getRows
    };
  });
  (0, _react.useEffect)(function () {
    if (url && currentUser != null) {
      if (onLoading != null) {
        onLoading(true);
      }

      // setLeftColumnSticky(parseInt(localStorage.getItem("leftColumn")));
      // setRightColumnSticky(parseInt(localStorage.getItem("rightColumn")));
      // setTopRowSticky(parseInt(localStorage.getItem("topRow")));
      // setBottomRowSticky(parseInt(localStorage.getItem("bottomRow")));

      var fetchData = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return reloadData();
              case 2:
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
  }, [url, currentUser]);
  (0, _react.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return reloadData();
            case 2:
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
  }, [paginationParam]);

  // useEffect(() => {

  //     if (rows != null && advanceQuery != null)
  //     {
  //         let newRows = [...rows];

  //         let index = 0;
  //         rows.forEach(row => {

  //             row.cells.forEach(element => {

  //                 advanceQuery.rules.forEach(rule => {

  //                     if (rule.field == element.columnId)
  //                     {

  //                         if (element.text.toLowerCase().includes(rule.value))
  //                         {
  //                             newRows.push(element);
  //                             index++;
  //                         }

  //                         //alert(rule.field + " - " + rule.operator + " - " + rule.value);
  //                     }
  //                 });

  //             });
  //         });

  //         setRows(newRows);

  //         // newRows.forEach(row => {
  //         //     alert(JSON.stringify(row));
  //         // });

  //         // alert("found " + index + " empty fields")
  //     }

  // }, [advanceQuery]);

  var getSessions = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response, sessionData, _sessions;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _authscape.apiService)().get("/AuthScapeSpreadSheet/GetActiveSessions?documentId=" + documentId);
          case 2:
            response = _context4.sent;
            sessionData = response.data;
            _sessions = [];
            if (sessionData != null && sessionData.length > 0) {
              sessionData.forEach(function (element) {
                if (_sessions.find(function (s) {
                  return s.userId == element.userId;
                }) == null) {
                  if (element.userId == userIdRef.current) {
                    _sessions.push({
                      userId: element.userId,
                      name: element.name,
                      borderColor: "#3579f8"
                    });
                  } else {
                    _sessions.push({
                      userId: element.userId,
                      name: element.name,
                      borderColor: element.borderColor
                    });
                  }
                }
              });
            }
            assignHighlights(highlightsRef.current);
            setSessions(_sessions);
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function getSessions() {
      return _ref5.apply(this, arguments);
    };
  }();
  var assignHighlights = function assignHighlights(clonedAray) {
    var _sessions = [];
    clonedAray.forEach(function (element) {
      _sessions.push({
        rowId: element.rowId,
        columnId: element.columnId,
        borderColor: element.borderColor
      });
    });
    setHighlights(_sessions);
  };
  var onFocusClicked = function onFocusClicked(userId, color, rowId, columnId) {
    var isFound = false;
    var _highlights = highlightsRef.current;
    for (var index = 0; index < _highlights.length; index++) {
      var element = _highlights[index];
      if (element.userId == userId) {
        element.rowId = rowId;
        element.columnId = columnId;
        element.borderColor = color;
        isFound = true;
      }
    }
    if (isFound == false) {
      var newRecord = {
        userId: userId,
        columnId: columnId,
        rowId: rowId,
        borderColor: color
      };
      _highlights.push(newRecord);
    }
    highlightsRef.current = _highlights;
    assignHighlights(highlightsRef.current);
  };
  var getRandomColor = function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  var addEmptyRow = function addEmptyRow() {
    // Create a new empty row
    var emptyRow = Array.from({
      length: columns.length
    }, function () {
      return {
        value: ""
      };
    });
    setData(function (prevData) {
      return [].concat(_toConsumableArray(prevData), [emptyRow]);
    });
  };
  var applyNewValue = function applyNewValue(changes, prevPeople) {
    var usePrevValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    changes.forEach(function (change) {
      var personIndex = change.rowId;
      var fieldName = change.columnId;
      var cell = usePrevValue ? change.previousCell : change.newCell;
      prevPeople[personIndex][fieldName] = cell.text;
    });
    return _toConsumableArray(prevPeople);
  };
  var undoChanges = function undoChanges(changes, prevPeople) {
    var updated = applyNewValue(changes, prevPeople, true);
    setCellChangesIndex(cellChangesIndex - 1);
    return updated;
  };
  var redoChanges = function redoChanges(changes, prevPeople) {
    var updated = applyNewValue(changes, prevPeople);
    setCellChangesIndex(cellChangesIndex + 1);
    return updated;
  };
  var handleChanges = function handleChanges(changes) {
    setRows(function (prevPeople) {
      return applyChangesToPeople(changes, prevPeople);
    });
  };
  var applyChangesToPeople = function applyChangesToPeople(changes, prevDetails) {
    changes.forEach(/*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(change) {
        var dataRowId, fieldName, dataRow, cellItem, rowBuilder, JSONBuilder, response, blobFile;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              dataRowId = change.rowId;
              fieldName = change.columnId; // find the row and column
              dataRow = prevDetails.find(function (d) {
                return d.rowId === dataRowId;
              });
              cellItem = dataRow.cells.find(function (s) {
                return s.columnId.toLowerCase() == fieldName.toLowerCase();
              });
              if (!cellItem.readOnly) {
                _context5.next = 6;
                break;
              }
              return _context5.abrupt("return");
            case 6:
              rowBuilder = {};
              rawRows.forEach(function (row) {
                if (row.rowId == dataRowId) {
                  for (var index = 0; index < row.cells.length; index++) {
                    var element = row.cells[index];
                    rowBuilder[element.columnId] = element.text;
                  }
                }
              });
              JSONBuilder = {};
              if (!(cellItem.type == "text")) {
                _context5.next = 16;
                break;
              }
              JSONBuilder[cellItem.columnId] = cellItem.text;
              cellItem.text = change.newCell.text;
              if (onChange != null) {
                onChange(rowBuilder, dataRowId, fieldName, change.newCell.text);
              }
              try {
                hubConnection.invoke("CellChanged", documentId, userIdRef.current, dataRowId, fieldName, change.newCell.text.toString());
              } catch (exp) {
                console.error(exp);
              }
              _context5.next = 66;
              break;
            case 16:
              if (!(cellItem.type == "number")) {
                _context5.next = 23;
                break;
              }
              JSONBuilder[cellItem.columnId] = cellItem.value;
              cellItem.value = change.newCell.value;
              if (onChange != null) {
                onChange(rowBuilder, dataRowId, fieldName, change.newCell.value);
              }
              try {
                hubConnection.invoke("CellChanged", documentId, userIdRef.current, dataRowId, fieldName, change.newCell.value.toString());
              } catch (exp) {
                console.error(exp);
              }
              _context5.next = 66;
              break;
            case 23:
              if (!(cellItem.type == "dateElement")) {
                _context5.next = 30;
                break;
              }
              JSONBuilder[cellItem.columnId] = cellItem.value;
              cellItem.value = change.newCell.value;
              if (onChange != null) {
                onChange(rowBuilder, dataRowId, fieldName, change.newCell.value);
              }
              try {
                hubConnection.invoke("CellChanged", documentId, userIdRef.current, dataRowId, fieldName, change.newCell.value);
              } catch (exp) {
                console.error(exp);
              }
              _context5.next = 66;
              break;
            case 30:
              if (!(cellItem.type == "checkbox")) {
                _context5.next = 37;
                break;
              }
              JSONBuilder[cellItem.columnId] = cellItem.checked;
              cellItem.checked = change.newCell.checked;
              if (onChange != null) {
                onChange(rowBuilder, dataRowId, fieldName, change.newCell.checked);
              }
              try {
                hubConnection.invoke("CellChanged", documentId, userIdRef.current, dataRowId, fieldName, change.newCell.checked.toString());
              } catch (exp) {
                console.error(exp);
              }
              _context5.next = 66;
              break;
            case 37:
              if (!(cellItem.type == "button")) {
                _context5.next = 41;
                break;
              }
              // JSONBuilder[cellItem.columnId] = cellItem.checked;
              // cellItem.checked = change.newCell.checked;

              if (onChange != null) {
                onChange(rowBuilder, dataRowId, fieldName, change.newCell);
              }

              // try
              // {
              //     hubConnection.invoke("CellChanged", documentId, userIdRef.current, dataRowId, fieldName, change.newCell.checked.toString());
              // }
              // catch(exp) 
              // { 
              //     console.error(exp);
              // }
              _context5.next = 66;
              break;
            case 41:
              if (!(cellItem.type == "dropdown")) {
                _context5.next = 46;
                break;
              }
              cellItem.isOpen = change.newCell.isOpen;
              if (change.newCell.selectedValue && change.newCell.selectedValue !== change.previousCell.selectedValue) {
                JSONBuilder[cellItem.columnId] = cellItem.selectedValue;
                cellItem.selectedValue = change.newCell.selectedValue;
                if (onChange != null) {
                  onChange(rowBuilder, dataRowId, fieldName, change.newCell.selectedValue);
                }
                try {
                  hubConnection.invoke("CellChanged", documentId, userIdRef.current, dataRowId, fieldName, change.newCell.selectedValue.toString());
                } catch (exp) {
                  console.error(exp);
                }
              }
              _context5.next = 66;
              break;
            case 46:
              if (!(cellItem.type == "richtext")) {
                _context5.next = 56;
                break;
              }
              cellItem.hasText = change.newCell.hasText;
              cellItem.text = change.newCell.text;
              JSONBuilder[cellItem.columnId] = cellItem.hasText;
              JSONBuilder[cellItem.columnId] = cellItem.text;
              cellItem.hasText = change.newCell.hasText;
              cellItem.text = change.newCell.text;
              if (onChange != null) {
                onChange(rowBuilder, dataRowId, fieldName, change.newCell.text);
              }

              // try
              // {
              //     hubConnection.invoke("CellChanged", documentId, userIdRef.current, dataRowId, fieldName, change.newCell.hasText.toString());
              // }
              // catch(exp) 
              // { 
              //     console.error(exp);
              // }
              _context5.next = 66;
              break;
            case 56:
              if (!(cellItem.type == "image")) {
                _context5.next = 66;
                break;
              }
              if (!(onChange != null)) {
                _context5.next = 66;
                break;
              }
              _context5.next = 60;
              return fetch(change.newCell.photo.url);
            case 60:
              response = _context5.sent;
              _context5.next = 63;
              return response.blob();
            case 63:
              blobFile = _context5.sent;
              _context5.next = 66;
              return onChange(rowBuilder, dataRowId, fieldName, {
                blob: blobFile,
                id: change.newCell.photo.id,
                status: change.newCell.photo.status
              });
            case 66:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }());
    return _toConsumableArray(prevDetails);
  };
  var handleColumnResize = function handleColumnResize(ci, width) {
    setColumns(function (prevColumns) {
      var columnIndex = prevColumns.findIndex(function (el) {
        return el.columnId === ci;
      });
      var resizedColumn = prevColumns[columnIndex];
      var updatedColumn = _objectSpread(_objectSpread({}, resizedColumn), {}, {
        width: width
      });
      prevColumns[columnIndex] = updatedColumn;
      return _toConsumableArray(prevColumns);
    });
  };
  var stringAvatar = function stringAvatar(name, color) {
    return {
      sx: {
        bgcolor: color
      },
      children: "".concat(name.split(' ')[0][0]).concat(name.split(' ')[1][0])
    };
  };
  var getaListOfColumns = function getaListOfColumns() {
    var arrayItem = [];
    for (var index = 0; index < columns.length; index++) {
      var column = columns[index];
      arrayItem.push(column.columnId);
    }
    return arrayItem;
  };
  function ImageCell(rowId, urls, photo, status) {
    this.type = 'image';
    this.urls = urls;
    this.photo = photo;
    this.status = status;
    this.rowId = rowId;
  }
  var ImageCellTemplate = {
    // Render method for the cell
    render: function render(cell, isInEditMode, onCellChanged) {
      var urls = cell.urls; // Get the image URL from the cell properties
      // const photo = cell.photo; // Get the image URL from the cell properties

      var width = "130px";
      // get the width of the photo
      // columns.forEach(element => {
      //     if (element.columnId == cell
      // });

      return /*#__PURE__*/_react["default"].createElement(_material.Box, null, urls != null && urls.length > 0 && /*#__PURE__*/_react["default"].createElement("img", {
        src: urls[0].url,
        width: photoWidth + "px",
        style: {
          objectFit: "contain",
          cursor: "pointer"
        },
        height: rowHeight,
        onClick: function onClick() {
          setShowPhotoUploadDialog({
            urls: urls,
            cell: cell,
            rowId: cell.rowId != null ? parseInt(cell.rowId) : 0,
            onCellChanged: onCellChanged,
            status: "modified"
          });
        }
      }), (urls == null || urls.length == 0) && /*#__PURE__*/_react["default"].createElement(_material.Box, {
        width: photoWidth + "px",
        height: rowHeight,
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: "pointer"
        },
        onClick: function onClick() {
          setShowPhotoUploadDialog({
            urls: urls,
            cell: cell,
            rowId: cell.rowId != null ? parseInt(cell.rowId) : 0,
            onCellChanged: onCellChanged,
            status: "new"
          });
        }
      }, noPhotoText));
    },
    getCompatibleCell: function getCompatibleCell(uncertainCell) {
      var text = uncertainCell.text || '';
      var urls = uncertainCell.urls || '';
      var photo = uncertainCell.photo || '';
      var status = uncertainCell.status || '';
      var rowId = uncertainCell.rowId || ''; // Ensure rowId is included

      return new ImageCell(rowId, urls, photo, status);
    },
    // Handle key down events (optional)
    handleKeyDown: function handleKeyDown(cell, keyCode) {
      // if (keyCode === 13) {
      //     // Handle the Enter key event if needed
      //     return { cell, enableEditMode: true }; // Keep the cell in view mode
      // }
      // if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40)
      // {
      //     return { cell, enableEditMode: false }; // Keep the cell in view mode
      // }
      // else
      // {
      return {
        cell: cell,
        enableEditMode: false
      }; // Keep the cell in view mode
      // }
    },
    handleMouseDown: function handleMouseDown(event) {
      // Prevent the default behavior of ReactGrid's edit mode
      //event.preventDefault();
      event.stopPropagation();

      // Return the cell with edit mode enabled
      return {
        cell: cell,
        enableEditMode: false
      };
    },
    // Update the cell's value (optional)
    update: function update(cell, cellToMerge) {
      return this.getCompatibleCell(Object.assign({}, cell, cellToMerge));
    }
  };

  // function MoneyCell(value) {
  //     this.type = 'money';
  //     this.value = value;
  // }

  // const MoneyCellTemplate = {
  //     // Render method for the cell
  //     render: function(cell, isInEditMode, onCellChanged) {
  //         const value = cell.value; 
  //         return (

  //         <>
  //             {isInEditMode &&
  //                 <FormControl fullWidth sx={{ marginTop:1, height:"85%" }}>
  //                     <InputLabel>Amount</InputLabel>
  //                     <OutlinedInput
  //                         ref={input => {
  //                             input && input.focus();
  //                         }}
  //                         autoFocus={true}
  //                         sx={{height:"100%"}}
  //                         defaultValue={value}
  //                         startAdornment={<InputAdornment position="start">$</InputAdornment>}
  //                         label="Amount"
  //                         onKeyDown={(e) => {

  //                             if (e.key === 'Enter') {
  //                                 e.preventDefault(); // Prevent the default Enter key action
  //                             }
  //                             else
  //                             {
  //                                 e.stopPropagation();
  //                             }

  //                         }} // Prevent DataGrid from taking focus
  //                         onChange={(e) => {
  //                             onCellChanged(
  //                                 { ...cell, value: parseFloat(e.target.value) },
  //                                 false
  //                             );
  //                             this.update(cell, { value: parseFloat(e.target.value) });
  //                         }}
  //                     />
  //                 </FormControl>
  //             }

  //             {(!isInEditMode && value != null && value != "") &&
  //                 <Box>${value.toFixed(2)}</Box>
  //             }
  //         </>

  //     )},
  //     getCompatibleCell: function(uncertainCell) {
  //         const value = uncertainCell.value || '';
  //         // const url = uncertainCell.url || '';
  //         return new MoneyCell(value);
  //     },
  //     // Handle key down events (optional)
  //     handleKeyDown: function(cell, keyCode) {
  //         if (keyCode === 13) {
  //             // Handle the Enter key event if needed
  //             return { cell, enableEditMode: true }; // Keep the cell in view mode
  //         }
  //         if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40)
  //         {
  //             return { cell, enableEditMode: false }; // Keep the cell in view mode
  //         }
  //         else
  //         {
  //             return { cell, enableEditMode: true }; // Keep the cell in view mode
  //         }

  //     },
  //     // Update the cell's value (optional)
  //     update: function(cell, cellToMerge) {

  //         return this.getCompatibleCell(Object.assign({}, cell, cellToMerge));
  //     }
  // }

  function DateElementCell(value) {
    this.type = 'dateElement';
    this.value = value;
  }
  var DateElementCellTemplate = {
    // Render method for the cell
    render: function render(cell, isInEditMode, onCellChanged) {
      var _this = this;
      var value = cell.value;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isInEditMode && /*#__PURE__*/_react["default"].createElement("input", {
        className: "rg-input",
        ref: function ref(input) {
          if (input) input.focus();
        },
        sx: {
          height: "100%",
          width: "100%"
        },
        type: "date",
        defaultValue: value,
        onCopy: function onCopy(e) {
          return e.stopPropagation();
        },
        onCut: function onCut(e) {
          return e.stopPropagation();
        },
        onPaste: function onPaste(e) {
          return e.stopPropagation();
        },
        onPointerDown: function onPointerDown(e) {
          return e.stopPropagation();
        },
        onKeyDown: function onKeyDown(e) {
          if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default Enter key action
          } else {
            e.stopPropagation();
          }
        } // Prevent DataGrid from taking focus
        ,
        onChange: function onChange(e) {
          onCellChanged(_objectSpread(_objectSpread({}, cell), {}, {
            value: e.target.value
          }), false);
          _this.update(cell, {
            value: e.target.value
          });
        }
      }), !isInEditMode && value != null && value != "" && /*#__PURE__*/_react["default"].createElement(_material.Box, null, value));
    },
    getCompatibleCell: function getCompatibleCell(uncertainCell) {
      var value = uncertainCell.date || '';
      return new DateElementCell(value);
    },
    // Handle key down events (optional)
    handleKeyDown: function handleKeyDown(cell, keyCode) {
      if (keyCode === 13) {
        // Handle the Enter key event if needed
        return {
          cell: cell,
          enableEditMode: true
        }; // Keep the cell in view mode
      }
      if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40) {
        return {
          cell: cell,
          enableEditMode: false
        }; // Keep the cell in view mode
      } else {
        return {
          cell: cell,
          enableEditMode: true
        }; // Keep the cell in view mode
      }
    },
    // Update the cell's value (optional)
    update: function update(cell, cellToMerge) {
      return this.getCompatibleCell(Object.assign({}, cell, cellToMerge));
    }
  };
  function ButtonElementCell(text) {
    this.type = 'button';
    this.text = text;
  }
  var ButtonElementCellTemplate = {
    // Render method for the cell
    render: function render(cell, isInEditMode, onCellChanged) {
      var text = cell.text;
      return /*#__PURE__*/_react["default"].createElement(_material.Box, {
        sx: {
          textAlign: "center",
          width: "100%"
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
        variant: "contained",
        onClick: function onClick() {
          onCellChanged(_objectSpread(_objectSpread({}, cell), {}, {
            value: text
          }), true);
        }
      }, text));
    },
    getCompatibleCell: function getCompatibleCell(uncertainCell) {
      var value = uncertainCell.text || '';
      return new ButtonElementCell(value);
    },
    // Handle key down events (optional)ss
    handleKeyDown: function handleKeyDown(cell, keyCode) {
      // if (keyCode === 13) {
      //     // Handle the Enter key event if needed
      //     return { cell, enableEditMode: true }; // Keep the cell in view mode
      // }
      // if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40)
      // {
      //     return { cell, enableEditMode: false }; // Keep the cell in view mode
      // }
      // else
      // {
      //     return { cell, enableEditMode: true }; // Keep the cell in view mode
      // }

      return {
        cell: cell,
        enableEditMode: false
      }; // Keep the cell in view mode
    },
    // Update the cell's value (optional)
    update: function update(cell, cellToMerge) {
      return this.getCompatibleCell(Object.assign({}, cell, cellToMerge));
    }
  };
  function RichTextCell(hasText, text) {
    this.type = 'richtext';
    this.hasText = hasText;
    this.text = text;
  }
  var RichTextCellTemplate = {
    // Render method for the cell
    render: function render(cell, isInEditMode, onCellChanged) {
      var hasText = cell.hasText;
      var text = cell.text;
      return /*#__PURE__*/_react["default"].createElement(_material.Box, null, hasText && /*#__PURE__*/_react["default"].createElement(_material.Button, {
        variant: "text",
        onClick: function onClick() {
          setEditDescriptionDialog({
            text: text,
            hasText: hasText,
            cell: cell,
            onCellChanged: onCellChanged
          });
        }
      }, "Edit Description"), !hasText && /*#__PURE__*/_react["default"].createElement(_material.Button, {
        variant: "text",
        onClick: function onClick() {
          setEditDescriptionDialog({
            text: text,
            hasText: hasText,
            cell: cell,
            onCellChanged: onCellChanged
          });
        }
      }, "Add Description"));
    },
    getCompatibleCell: function getCompatibleCell(uncertainCell) {
      var hasText = uncertainCell.hasText || '';
      var text = uncertainCell.text || '';
      return new RichTextCell(hasText, text);
    },
    // Handle key down events (optional)
    handleKeyDown: function handleKeyDown(cell, keyCode) {
      // if (keyCode === 13) {
      //     // Handle the Enter key event if needed
      //     return { cell, enableEditMode: true }; // Keep the cell in view mode
      // }
      // if (keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40)
      // {
      //     return { cell, enableEditMode: false }; // Keep the cell in view mode
      // }
      // else
      // {
      return {
        cell: cell,
        enableEditMode: false
      }; // Keep the cell in view mode
      // }
    },
    handleMouseDown: function handleMouseDown(event) {
      // Prevent the default behavior of ReactGrid's edit mode
      //event.preventDefault();
      event.stopPropagation();

      // Return the cell with edit mode enabled
      return {
        cell: cell,
        enableEditMode: true
      };
    },
    // Update the cell's value (optional)
    update: function update(cell, cellToMerge) {
      return this.getCompatibleCell(Object.assign({}, cell, cellToMerge));
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Box, null, !hideToolbar && /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    position: "static",
    elevation: 0,
    sx: {
      backgroundColor: "white"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
    disableGutters: true,
    sx: {
      color: "black"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_VisibilityOffRounded["default"], null),
    sx: {
      color: "black"
    }
  }, "Hide Fields"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_PivotTableChartRounded["default"], null),
    sx: {
      color: "black",
      paddingLeft: 4
    },
    onClick: function onClick() {
      setShowStickyDialog(true);
    }
  }, "Sticky"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_FilterListRounded["default"], null),
    sx: {
      color: "black",
      paddingLeft: 4
    }
  }, "Filter"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_SwapVertRounded["default"], null),
    sx: {
      color: "black",
      paddingLeft: 4
    }
  }, "Sort"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_LineWeightRounded["default"], null),
    sx: {
      color: "black",
      paddingLeft: 4
    }
  }, "Row Height"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_ViewWeekRounded["default"], null),
    sx: {
      color: "black",
      paddingLeft: 4
    }
  }, "Reorder Columns")), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      flexGrow: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2
  }, sessions.map(function (user, index) {
    return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      key: index,
      title: user.name
    }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], _extends({}, stringAvatar(user.name, user.borderColor), {
      alt: user.name
    })));
  }))))), leftColumnSticky != null && rightColumnSticky != null && topRowSticky != null && bottomRowSticky != null && data != null && columns != null && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: _objectSpread({}, sx)
  }, data != null && rows != null && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: "reactgrid-gold",
    onKeyDown: function onKeyDown(e) {
      var isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      if (!_reactDeviceDetect.isMacOs && e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "z":
            handleUndoChanges();
            return;
          case "y":
            handleRedoChanges();
            return;
        }
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactgrid.ReactGrid, {
    rows: getSpreadSheetRows(data.headerCell, rows),
    highlights: highlights,
    columns: columns,
    enableFillHandle: true,
    onFocusLocationChanged: function onFocusLocationChanged(location) {
      try {
        hubConnection.invoke("FocusLocationChanged", documentId, userIdRef.current, location.rowId, location.columnId);
      } catch (exp) {
        console.error(exp);
      }
      if (_onFocusLocationChanged != null) {
        _onFocusLocationChanged(location.rowId, location.columnId);
      }
    },
    onCellsChanged: handleChanges,
    customCellTemplates: {
      image: ImageCellTemplate,
      //money: MoneyCellTemplate,
      dateElement: DateElementCellTemplate,
      richtext: RichTextCellTemplate,
      button: ButtonElementCellTemplate
    }
    // enableRowSelection={true}
    ,
    enableColumnSelection: true,
    enableRangeSelection: true
    //onContextMenu={simpleHandleContextMenu}
    ,
    onColumnResized: handleColumnResize,
    stickyTopRows: topRowSticky,
    stickyBottomRows: bottomRowSticky,
    stickyLeftColumns: leftColumnSticky,
    stickyRightColumns: rightColumnSticky
  }))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: showStickyDialog,
    onClose: function onClose() {
      setShowStickyDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, "Sticky"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
    id: "alert-dialog-description"
  }, "Stick chosen rows and columns at the top or bottom rows or left and right columns. Sticky rows or columns will remain visible at all times."), /*#__PURE__*/_react["default"].createElement(_material.TableContainer, {
    sx: {
      paddingTop: 4
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Table, {
    "aria-label": "customized table"
  }, /*#__PURE__*/_react["default"].createElement(_material.TableHead, null, /*#__PURE__*/_react["default"].createElement(_material.TableRow, null, /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    align: "left"
  }, "Left Column"), /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    align: "left"
  }, "Right Column"), /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    align: "left"
  }, "Top Row"), /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    align: "left"
  }, "Bottom Row"))), /*#__PURE__*/_react["default"].createElement(_material.TableBody, null, /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    sx: {
      paddingTop: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    inputRef: leftColumnRef,
    type: "number",
    defaultValue: "0",
    variant: "outlined"
  })), /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    sx: {
      paddingTop: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    inputRef: rightColumnRef,
    type: "number",
    defaultValue: "0",
    variant: "outlined"
  })), /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    sx: {
      paddingTop: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    inputRef: topRowRef,
    type: "number",
    defaultValue: "0",
    variant: "outlined"
  })), /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    sx: {
      paddingTop: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    inputRef: bottomRowRef,
    type: "number",
    defaultValue: "0",
    variant: "outlined"
  })))))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      setShowStickyDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      localStorage.setItem("leftColumn", leftColumnRef.current.value);
      localStorage.setItem("rightColumn", rightColumnRef.current.value);
      localStorage.setItem("topRow", topRowRef.current.value);
      localStorage.setItem("bottomRow", bottomRowRef.current.value);
      window.location.reload();
      // setLeftColumnSticky(leftColumnRef.current.value);
      // setRightColumnSticky(rightColumnRef.current.value);
      // setTopRowSticky(topRowRef.current.value);
      // setBottomRowSticky(bottomRowRef.current.value);                    

      setShowStickyDialog(false);
    },
    autoFocus: true
  }, "Apply"))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: false,
    onClose: function onClose() {
      setShowStickyDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, "Reorder Columns"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
    id: "alert-dialog-description"
  }, "Assign the column order from left to right.")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {
      setShowStickyDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: function onClick() {},
    autoFocus: true
  }, "Apply"))), /*#__PURE__*/_react["default"].createElement(PhotoEditor, {
    key: photoEditorKey,
    isOpen: showPhotoUploadDialog != null
    // imageUrl={showPhotoUploadDialog != null ? showPhotoUploadDialog.url : ""}
    ,
    photoUrls: showPhotoUploadDialog != null ? showPhotoUploadDialog.urls : [],
    rowData: showPhotoUploadDialog != null ? getRowData(showPhotoUploadDialog.rowId) : null,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onCancelEditor: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            setShowPhotoUploadDialog(null);
            _context6.next = 3;
            return reloadData();
          case 3:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    })),
    ref: function ref(input) {
      input && input.focus();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default Enter key action
      } else {
        e.stopPropagation();
      }
    } // Prevent DataGrid from taking focus
    ,
    onPhotoUpdated: (/*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(photo) {
        var response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!(photo.status == "new")) {
                _context7.next = 8;
                break;
              }
              if (!(onAddPhoto != null)) {
                _context7.next = 6;
                break;
              }
              _context7.next = 4;
              return onAddPhoto(photo);
            case 4:
              response = _context7.sent;
              return _context7.abrupt("return", response);
            case 6:
              _context7.next = 9;
              break;
            case 8:
              // this will be used for modifying a photo
              showPhotoUploadDialog.onCellChanged(_objectSpread(_objectSpread({}, showPhotoUploadDialog.cell), {}, {
                photo: photo
              }), true);
            case 9:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function (_x2) {
        return _ref8.apply(this, arguments);
      };
    }()),
    onPhotoDelete: (/*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(photo) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(onPhotoDelete != null)) {
                _context8.next = 3;
                break;
              }
              _context8.next = 3;
              return onPhotoDelete(photo);
            case 3:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      return function (_x3) {
        return _ref9.apply(this, arguments);
      };
    }())
  }), /*#__PURE__*/_react["default"].createElement(SpreadSheetRichTextEditor, {
    isOpen: editDescriptionDialog != null ? true : false,
    content: editDescriptionDialog != null ? editDescriptionDialog.cell.text : "",
    editDescriptionDialog: editDescriptionDialog,
    onCancelEditor: function onCancelEditor() {
      setEditDescriptionDialog(null);
    },
    onUpdate: function onUpdate(html) {
      var hasText = false;
      if (html != null && html != "") {
        hasText = true;
      }
      editDescriptionDialog.onCellChanged(_objectSpread(_objectSpread({}, editDescriptionDialog.cell), {}, {
        hasText: hasText,
        text: html
      }), true);
      setEditDescriptionDialog(null);
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mt: 3,
    mb: 3
  }, paginationParam != null && paginationParam.offset != null && paginationParam.length != null && /*#__PURE__*/_react["default"].createElement(_material.Pagination, {
    variant: "outlined",
    color: "primary",
    onChange: function onChange(e, v) {
      setPaginationParam(_objectSpread(_objectSpread(_objectSpread({}, paginationParam), param), {}, {
        // Spread any additional param values here
        offset: v // Always update the current page (offset)
      }));
    },
    page: paginationParam.offset,
    count: Math.ceil(totalCount / paginationParam.length)
  })

  // <Pagination  variant="outlined" color="primary" onChange={(e, v) => {setPaginationParam({...paginationParam, offset : v})}}   page={paginationParam.offset}  count={Math.ceil(totalCount / paginationParam.length)}  />
  ));
});
SpreadsheetViewer.displayName = "SpreadsheetViewer";
var _default = exports["default"] = SpreadsheetViewer;
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebounceEffect = useDebounceEffect;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function useDebounceEffect(fn, waitTime, deps) {
  (0, _react.useEffect)(function () {
    var t = setTimeout(function () {
      fn.apply(undefined, deps);
    }, waitTime);
    return function () {
      clearTimeout(t);
    };
  }, deps);
}
