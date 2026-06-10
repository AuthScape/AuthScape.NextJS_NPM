"use strict";

var babelHelpers = {};
function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
babelHelpers.OverloadYield = _OverloadYield;
function _applyDecoratedDescriptor(i, e, r, n, l) {
  var a = {};
  return Object.keys(n).forEach(function (i) {
    a[i] = n[i];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) {
    return n(i, e, r) || r;
  }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a;
}
babelHelpers.applyDecoratedDescriptor = _applyDecoratedDescriptor;
function applyDecs2311(e, t, n, r, o, i) {
  var a,
    c,
    u,
    s,
    f,
    l,
    p,
    d = Symbol.metadata || Symbol.for("Symbol.metadata"),
    m = Object.defineProperty,
    h = Object.create,
    y = [h(null), h(null)],
    v = t.length;
  function g(t, n, r) {
    return function (o, i) {
      n && (i = o, o = e);
      for (var a = 0; a < t.length; a++) i = t[a].apply(o, r ? [i] : []);
      return r ? i : o;
    };
  }
  function b(e, t, n, r) {
    if ("function" != typeof e && (r || void 0 !== e)) throw new TypeError(t + " must " + (n || "be") + " a function" + (r ? "" : " or undefined"));
    return e;
  }
  function applyDec(e, t, n, r, o, i, u, s, f, l, p) {
    function d(e) {
      if (!p(e)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var h = [].concat(t[0]),
      v = t[3],
      w = !u,
      D = 1 === o,
      S = 3 === o,
      j = 4 === o,
      E = 2 === o;
    function I(t, n, r) {
      return function (o, i) {
        return n && (i = o, o = e), r && r(o), P[t].call(o, i);
      };
    }
    if (!w) {
      var P = {},
        k = [],
        F = S ? "get" : j || D ? "set" : "value";
      if (f ? (l || D ? P = {
        get: babelHelpers.setFunctionName(function () {
          return v(this);
        }, r, "get"),
        set: function (e) {
          t[4](this, e);
        }
      } : P[F] = v, l || babelHelpers.setFunctionName(P[F], r, E ? "" : F)) : l || (P = Object.getOwnPropertyDescriptor(e, r)), !l && !f) {
        if ((c = y[+s][r]) && 7 != (c ^ o)) throw Error("Decorating two elements with the same name (" + P[F].name + ") is not supported yet");
        y[+s][r] = o < 3 ? 1 : o;
      }
    }
    for (var N = e, O = h.length - 1; O >= 0; O -= n ? 2 : 1) {
      var T = b(h[O], "A decorator", "be", !0),
        z = n ? h[O - 1] : void 0,
        A = {},
        H = {
          kind: ["field", "accessor", "method", "getter", "setter", "class"][o],
          name: r,
          metadata: a,
          addInitializer: function (e, t) {
            if (e.v) throw new TypeError("attempted to call addInitializer after decoration was finished");
            b(t, "An initializer", "be", !0), i.push(t);
          }.bind(null, A)
        };
      if (w) c = T.call(z, N, H), A.v = 1, b(c, "class decorators", "return") && (N = c);else if (H.static = s, H.private = f, c = H.access = {
        has: f ? p.bind() : function (e) {
          return r in e;
        }
      }, j || (c.get = f ? E ? function (e) {
        return d(e), P.value;
      } : I("get", 0, d) : function (e) {
        return e[r];
      }), E || S || (c.set = f ? I("set", 0, d) : function (e, t) {
        e[r] = t;
      }), N = T.call(z, D ? {
        get: P.get,
        set: P.set
      } : P[F], H), A.v = 1, D) {
        if ("object" == typeof N && N) (c = b(N.get, "accessor.get")) && (P.get = c), (c = b(N.set, "accessor.set")) && (P.set = c), (c = b(N.init, "accessor.init")) && k.unshift(c);else if (void 0 !== N) throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined");
      } else b(N, (l ? "field" : "method") + " decorators", "return") && (l ? k.unshift(N) : P[F] = N);
    }
    return o < 2 && u.push(g(k, s, 1), g(i, s, 0)), l || w || (f ? D ? u.splice(-1, 0, I("get", s), I("set", s)) : u.push(E ? P[F] : b.call.bind(P[F])) : m(e, r, P)), N;
  }
  function w(e) {
    return m(e, d, {
      configurable: !0,
      enumerable: !0,
      value: a
    });
  }
  return void 0 !== i && (a = i[d]), a = h(null == a ? null : a), f = [], l = function (e) {
    e && f.push(g(e));
  }, p = function (t, r) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i],
        c = a[1],
        l = 7 & c;
      if ((8 & c) == t && !l == r) {
        var p = a[2],
          d = !!a[3],
          m = 16 & c;
        applyDec(t ? e : e.prototype, a, m, d ? "#" + p : babelHelpers.toPropertyKey(p), l, l < 2 ? [] : t ? s = s || [] : u = u || [], f, !!t, d, r, t && d ? function (t) {
          return babelHelpers.checkInRHS(t) === e;
        } : o);
      }
    }
  }, p(8, 0), p(0, 0), p(8, 1), p(0, 1), l(u), l(s), c = f, v || w(e), {
    e: c,
    get c() {
      var n = [];
      return v && [w(e = applyDec(e, [t], r, e.name, 5, n)), g(n, 1)];
    }
  };
}
babelHelpers.applyDecs2311 = applyDecs2311;
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
babelHelpers.arrayLikeToArray = _arrayLikeToArray;
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
babelHelpers.arrayWithHoles = _arrayWithHoles;
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return babelHelpers.arrayLikeToArray(r);
}
babelHelpers.arrayWithoutHoles = _arrayWithoutHoles;
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
babelHelpers.assertClassBrand = _assertClassBrand;
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
babelHelpers.assertThisInitialized = _assertThisInitialized;
function _asyncGeneratorDelegate(t) {
  var e = {},
    n = !1;
  function pump(e, r) {
    return n = !0, r = new Promise(function (n) {
      n(t[e](r));
    }), {
      done: !1,
      value: new babelHelpers.OverloadYield(r, 1)
    };
  }
  return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () {
    return this;
  }, e.next = function (t) {
    return n ? (n = !1, t) : pump("next", t);
  }, "function" == typeof t.throw && (e.throw = function (t) {
    if (n) throw n = !1, t;
    return pump("throw", t);
  }), "function" == typeof t.return && (e.return = function (t) {
    return n ? (n = !1, t) : pump("return", t);
  }), e;
}
babelHelpers.asyncGeneratorDelegate = _asyncGeneratorDelegate;
function _asyncIterator(r) {
  var n,
    t,
    o,
    e = 2;
  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    t = "@@asyncIterator", o = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var n = r.done;
    return Promise.resolve(r.value).then(function (r) {
      return {
        value: r,
        done: n
      };
    });
  }
  return AsyncFromSyncIterator = function (r) {
    this.s = r, this.n = r.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function () {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    return: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.resolve({
        value: r,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    },
    throw: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(r);
}
babelHelpers.asyncIterator = _asyncIterator;
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
babelHelpers.asyncToGenerator = _asyncToGenerator;
function _awaitAsyncGenerator(e) {
  return new babelHelpers.OverloadYield(e, 0);
}
babelHelpers.awaitAsyncGenerator = _awaitAsyncGenerator;
function _callSuper(t, o, e) {
  return o = babelHelpers.getPrototypeOf(o), babelHelpers.possibleConstructorReturn(t, babelHelpers.isNativeReflectConstruct() ? Reflect.construct(o, e || [], babelHelpers.getPrototypeOf(t).constructor) : o.apply(t, e));
}
babelHelpers.callSuper = _callSuper;
function _checkInRHS(e) {
  if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null"));
  return e;
}
babelHelpers.checkInRHS = _checkInRHS;
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
babelHelpers.checkPrivateRedeclaration = _checkPrivateRedeclaration;
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
babelHelpers.classCallCheck = _classCallCheck;
function _classNameTDZError(e) {
  throw new ReferenceError('Class "' + e + '" cannot be referenced in computed property keys.');
}
babelHelpers.classNameTDZError = _classNameTDZError;
function _classPrivateFieldGet2(s, a) {
  return s.get(babelHelpers.assertClassBrand(s, a));
}
babelHelpers.classPrivateFieldGet2 = _classPrivateFieldGet2;
function _classPrivateFieldInitSpec(e, t, a) {
  babelHelpers.checkPrivateRedeclaration(e, t), t.set(e, a);
}
babelHelpers.classPrivateFieldInitSpec = _classPrivateFieldInitSpec;
function _classPrivateFieldBase(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
babelHelpers.classPrivateFieldLooseBase = _classPrivateFieldBase;
var id = 0;
function _classPrivateFieldKey(e) {
  return "__private_" + id++ + "_" + e;
}
babelHelpers.classPrivateFieldLooseKey = _classPrivateFieldKey;
function _classPrivateFieldSet2(s, a, r) {
  return s.set(babelHelpers.assertClassBrand(s, a), r), r;
}
babelHelpers.classPrivateFieldSet2 = _classPrivateFieldSet2;
function _classPrivateGetter(s, r, a) {
  return a(babelHelpers.assertClassBrand(s, r));
}
babelHelpers.classPrivateGetter = _classPrivateGetter;
function _classPrivateMethodInitSpec(e, a) {
  babelHelpers.checkPrivateRedeclaration(e, a), a.add(e);
}
babelHelpers.classPrivateMethodInitSpec = _classPrivateMethodInitSpec;
function _classPrivateSetter(s, r, a, t) {
  return r(babelHelpers.assertClassBrand(s, a), t), t;
}
babelHelpers.classPrivateSetter = _classPrivateSetter;
function _classStaticPrivateMethodGet(s, a, t) {
  return babelHelpers.assertClassBrand(a, s), t;
}
babelHelpers.classStaticPrivateMethodGet = _classStaticPrivateMethodGet;
function _construct(t, e, r) {
  if (babelHelpers.isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && babelHelpers.setPrototypeOf(p, r.prototype), p;
}
babelHelpers.construct = _construct;
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, babelHelpers.toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
babelHelpers.createClass = _createClass;
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = babelHelpers.unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
babelHelpers.createForOfIteratorHelper = _createForOfIteratorHelper;
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = babelHelpers.unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
babelHelpers.createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose;
function _createSuper(t) {
  var r = babelHelpers.isNativeReflectConstruct();
  return function () {
    var e,
      o = babelHelpers.getPrototypeOf(t);
    if (r) {
      var s = babelHelpers.getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return babelHelpers.possibleConstructorReturn(this, e);
  };
}
babelHelpers.createSuper = _createSuper;
function _decorate(e, r, t, i) {
  var o = _getDecoratorsApi();
  if (i) for (var n = 0; n < i.length; n++) o = i[n](o);
  var s = r(function (e) {
      o.initializeInstanceElements(e, a.elements);
    }, t),
    a = o.decorateClass(_coalesceClassElements(s.d.map(_createElementDescriptor)), e);
  return o.initializeClassElements(s.F, a.elements), o.runClassFinishers(s.F, a.finishers);
}
function _getDecoratorsApi() {
  _getDecoratorsApi = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [["method"], ["field"]],
    initializeInstanceElements: function (e, r) {
      ["method", "field"].forEach(function (t) {
        r.forEach(function (r) {
          r.kind === t && "own" === r.placement && this.defineClassElement(e, r);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, r) {
      var t = e.prototype;
      ["method", "field"].forEach(function (i) {
        r.forEach(function (r) {
          var o = r.placement;
          if (r.kind === i && ("static" === o || "prototype" === o)) {
            var n = "static" === o ? e : t;
            this.defineClassElement(n, r);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, r) {
      var t = r.descriptor;
      if ("field" === r.kind) {
        var i = r.initializer;
        t = {
          enumerable: t.enumerable,
          writable: t.writable,
          configurable: t.configurable,
          value: void 0 === i ? void 0 : i.call(e)
        };
      }
      Object.defineProperty(e, r.key, t);
    },
    decorateClass: function (e, r) {
      var t = [],
        i = [],
        o = {
          static: [],
          prototype: [],
          own: []
        };
      if (e.forEach(function (e) {
        this.addElementPlacement(e, o);
      }, this), e.forEach(function (e) {
        if (!_hasDecorators(e)) return t.push(e);
        var r = this.decorateElement(e, o);
        t.push(r.element), t.push.apply(t, r.extras), i.push.apply(i, r.finishers);
      }, this), !r) return {
        elements: t,
        finishers: i
      };
      var n = this.decorateConstructor(t, r);
      return i.push.apply(i, n.finishers), n.finishers = i, n;
    },
    addElementPlacement: function (e, r, t) {
      var i = r[e.placement];
      if (!t && -1 !== i.indexOf(e.key)) throw new TypeError("Duplicated element (" + e.key + ")");
      i.push(e.key);
    },
    decorateElement: function (e, r) {
      for (var t = [], i = [], o = e.decorators, n = o.length - 1; n >= 0; n--) {
        var s = r[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var a = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, o[n])(a) || a);
        e = l.element, this.addElementPlacement(e, r), l.finisher && i.push(l.finisher);
        var c = l.extras;
        if (c) {
          for (var p = 0; p < c.length; p++) this.addElementPlacement(c[p], r);
          t.push.apply(t, c);
        }
      }
      return {
        element: e,
        finishers: i,
        extras: t
      };
    },
    decorateConstructor: function (e, r) {
      for (var t = [], i = r.length - 1; i >= 0; i--) {
        var o = this.fromClassDescriptor(e),
          n = this.toClassDescriptor((0, r[i])(o) || o);
        if (void 0 !== n.finisher && t.push(n.finisher), void 0 !== n.elements) {
          e = n.elements;
          for (var s = 0; s < e.length - 1; s++) for (var a = s + 1; a < e.length; a++) if (e[s].key === e[a].key && e[s].placement === e[a].placement) throw new TypeError("Duplicated element (" + e[s].key + ")");
        }
      }
      return {
        elements: e,
        finishers: t
      };
    },
    fromElementDescriptor: function (e) {
      var r = {
        kind: e.kind,
        key: e.key,
        placement: e.placement,
        descriptor: e.descriptor
      };
      return Object.defineProperty(r, Symbol.toStringTag, {
        value: "Descriptor",
        configurable: !0
      }), "field" === e.kind && (r.initializer = e.initializer), r;
    },
    toElementDescriptors: function (e) {
      if (void 0 !== e) return babelHelpers.toArray(e).map(function (e) {
        var r = this.toElementDescriptor(e);
        return this.disallowProperty(e, "finisher", "An element descriptor"), this.disallowProperty(e, "extras", "An element descriptor"), r;
      }, this);
    },
    toElementDescriptor: function (e) {
      var r = e.kind + "";
      if ("method" !== r && "field" !== r) throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + r + '"');
      var t = babelHelpers.toPropertyKey(e.key),
        i = e.placement + "";
      if ("static" !== i && "prototype" !== i && "own" !== i) throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + i + '"');
      var o = e.descriptor;
      this.disallowProperty(e, "elements", "An element descriptor");
      var n = {
        kind: r,
        key: t,
        placement: i,
        descriptor: Object.assign({}, o)
      };
      return "field" !== r ? this.disallowProperty(e, "initializer", "A method descriptor") : (this.disallowProperty(o, "get", "The property descriptor of a field descriptor"), this.disallowProperty(o, "set", "The property descriptor of a field descriptor"), this.disallowProperty(o, "value", "The property descriptor of a field descriptor"), n.initializer = e.initializer), n;
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: _optionalCallableProperty(e, "finisher"),
        extras: this.toElementDescriptors(e.extras)
      };
    },
    fromClassDescriptor: function (e) {
      var r = {
        kind: "class",
        elements: e.map(this.fromElementDescriptor, this)
      };
      return Object.defineProperty(r, Symbol.toStringTag, {
        value: "Descriptor",
        configurable: !0
      }), r;
    },
    toClassDescriptor: function (e) {
      var r = e.kind + "";
      if ("class" !== r) throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + r + '"');
      this.disallowProperty(e, "key", "A class descriptor"), this.disallowProperty(e, "placement", "A class descriptor"), this.disallowProperty(e, "descriptor", "A class descriptor"), this.disallowProperty(e, "initializer", "A class descriptor"), this.disallowProperty(e, "extras", "A class descriptor");
      var t = _optionalCallableProperty(e, "finisher");
      return {
        elements: this.toElementDescriptors(e.elements),
        finisher: t
      };
    },
    runClassFinishers: function (e, r) {
      for (var t = 0; t < r.length; t++) {
        var i = (0, r[t])(e);
        if (void 0 !== i) {
          if ("function" != typeof i) throw new TypeError("Finishers must return a constructor.");
          e = i;
        }
      }
      return e;
    },
    disallowProperty: function (e, r, t) {
      if (void 0 !== e[r]) throw new TypeError(t + " can't have a ." + r + " property.");
    }
  };
  return e;
}
function _createElementDescriptor(e) {
  var r,
    t = babelHelpers.toPropertyKey(e.key);
  "method" === e.kind ? r = {
    value: e.value,
    writable: !0,
    configurable: !0,
    enumerable: !1
  } : "get" === e.kind ? r = {
    get: e.value,
    configurable: !0,
    enumerable: !1
  } : "set" === e.kind ? r = {
    set: e.value,
    configurable: !0,
    enumerable: !1
  } : "field" === e.kind && (r = {
    configurable: !0,
    writable: !0,
    enumerable: !0
  });
  var i = {
    kind: "field" === e.kind ? "field" : "method",
    key: t,
    placement: e.static ? "static" : "field" === e.kind ? "own" : "prototype",
    descriptor: r
  };
  return e.decorators && (i.decorators = e.decorators), "field" === e.kind && (i.initializer = e.value), i;
}
function _coalesceGetterSetter(e, r) {
  void 0 !== e.descriptor.get ? r.descriptor.get = e.descriptor.get : r.descriptor.set = e.descriptor.set;
}
function _coalesceClassElements(e) {
  for (var r = [], isSameElement = function (e) {
      return "method" === e.kind && e.key === o.key && e.placement === o.placement;
    }, t = 0; t < e.length; t++) {
    var i,
      o = e[t];
    if ("method" === o.kind && (i = r.find(isSameElement))) {
      if (_isDataDescriptor(o.descriptor) || _isDataDescriptor(i.descriptor)) {
        if (_hasDecorators(o) || _hasDecorators(i)) throw new ReferenceError("Duplicated methods (" + o.key + ") can't be decorated.");
        i.descriptor = o.descriptor;
      } else {
        if (_hasDecorators(o)) {
          if (_hasDecorators(i)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + o.key + ").");
          i.decorators = o.decorators;
        }
        _coalesceGetterSetter(o, i);
      }
    } else r.push(o);
  }
  return r;
}
function _hasDecorators(e) {
  return e.decorators && e.decorators.length;
}
function _isDataDescriptor(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function _optionalCallableProperty(e, r) {
  var t = e[r];
  if (void 0 !== t && "function" != typeof t) throw new TypeError("Expected '" + r + "' to be a function");
  return t;
}
babelHelpers.decorate = _decorate;
function _defaults(e, r) {
  for (var t = Object.getOwnPropertyNames(r), o = 0; o < t.length; o++) {
    var n = t[o],
      a = Object.getOwnPropertyDescriptor(r, n);
    a && a.configurable && void 0 === e[n] && Object.defineProperty(e, n, a);
  }
  return e;
}
babelHelpers.defaults = _defaults;
function _defineAccessor(e, r, n, t) {
  var c = {
    configurable: !0,
    enumerable: !0
  };
  return c[e] = t, Object.defineProperty(r, n, c);
}
babelHelpers.defineAccessor = _defineAccessor;
function _defineProperty(e, r, t) {
  return (r = babelHelpers.toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
babelHelpers.defineProperty = _defineProperty;
function _extends() {
  return babelHelpers.extends = _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
babelHelpers.extends = _extends;
function _get() {
  return babelHelpers.get = _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = babelHelpers.superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
babelHelpers.get = _get;
function _getPrototypeOf(t) {
  return babelHelpers.getPrototypeOf = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
babelHelpers.getPrototypeOf = _getPrototypeOf;
function _identity(t) {
  return t;
}
babelHelpers.identity = _identity;
function _importDeferProxy(e) {
  var t = null,
    constValue = function (e) {
      return function () {
        return e;
      };
    },
    proxy = function (r) {
      return function (n, o, f) {
        return null === t && (t = e()), r(t, o, f);
      };
    };
  return new Proxy({}, {
    defineProperty: constValue(!1),
    deleteProperty: constValue(!1),
    get: proxy(Reflect.get),
    getOwnPropertyDescriptor: proxy(Reflect.getOwnPropertyDescriptor),
    getPrototypeOf: constValue(null),
    isExtensible: constValue(!1),
    has: proxy(Reflect.has),
    ownKeys: proxy(Reflect.ownKeys),
    preventExtensions: constValue(!0),
    set: constValue(!1),
    setPrototypeOf: constValue(!1)
  });
}
babelHelpers.importDeferProxy = _importDeferProxy;
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && babelHelpers.setPrototypeOf(t, e);
}
babelHelpers.inherits = _inherits;
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, babelHelpers.setPrototypeOf(t, o);
}
babelHelpers.inheritsLoose = _inheritsLoose;
function _initializerDefineProperty(e, i, r, l) {
  r && Object.defineProperty(e, i, {
    enumerable: r.enumerable,
    configurable: r.configurable,
    writable: r.writable,
    value: r.initializer ? r.initializer.call(l) : void 0
  });
}
babelHelpers.initializerDefineProperty = _initializerDefineProperty;
function _initializerWarningHelper(r, e) {
  throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.");
}
babelHelpers.initializerWarningHelper = _initializerWarningHelper;
function _instanceof(n, e) {
  return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](n) : n instanceof e;
}
babelHelpers.instanceof = _instanceof;
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
babelHelpers.interopRequireDefault = _interopRequireDefault;
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n.default = e, t && t.set(e, n), n;
}
babelHelpers.interopRequireWildcard = _interopRequireWildcard;
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
babelHelpers.isNativeFunction = _isNativeFunction;
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (babelHelpers.isNativeReflectConstruct = _isNativeReflectConstruct = function () {
    return !!t;
  })();
}
babelHelpers.isNativeReflectConstruct = _isNativeReflectConstruct;
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
babelHelpers.iterableToArray = _iterableToArray;
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
babelHelpers.iterableToArrayLimit = _iterableToArrayLimit;
var REACT_ELEMENT_TYPE;
function _createRawReactElement(e, r, E, l) {
  REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
  var o = e && e.defaultProps,
    n = arguments.length - 3;
  if (r || 0 === n || (r = {
    children: void 0
  }), 1 === n) r.children = l;else if (n > 1) {
    for (var t = Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3];
    r.children = t;
  }
  if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {});
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: e,
    key: void 0 === E ? null : "" + E,
    ref: null,
    props: r,
    _owner: null
  };
}
babelHelpers.jsx = _createRawReactElement;
function _maybeArrayLike(r, a, e) {
  if (a && !Array.isArray(a) && "number" == typeof a.length) {
    var y = a.length;
    return babelHelpers.arrayLikeToArray(a, void 0 !== e && e < y ? e : y);
  }
  return r(a, e);
}
babelHelpers.maybeArrayLike = _maybeArrayLike;
function _newArrowCheck(n, r) {
  if (n !== r) throw new TypeError("Cannot instantiate an arrow function");
}
babelHelpers.newArrowCheck = _newArrowCheck;
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
babelHelpers.nonIterableRest = _nonIterableRest;
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
babelHelpers.nonIterableSpread = _nonIterableSpread;
function _nullishReceiverError(r) {
  throw new TypeError("Cannot set property of null or undefined.");
}
babelHelpers.nullishReceiverError = _nullishReceiverError;
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}
babelHelpers.objectDestructuringEmpty = _objectDestructuringEmpty;
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      babelHelpers.defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
babelHelpers.objectSpread2 = _objectSpread2;
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = babelHelpers.objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
babelHelpers.objectWithoutProperties = _objectWithoutProperties;
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
babelHelpers.objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return babelHelpers.assertThisInitialized(t);
}
babelHelpers.possibleConstructorReturn = _possibleConstructorReturn;
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}
babelHelpers.readOnlyError = _readOnlyError;
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  babelHelpers.regeneratorRuntime = _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
babelHelpers.regeneratorRuntime = _regeneratorRuntime;
function set(e, r, t, o) {
  return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) {
    var f,
      i = babelHelpers.superPropBase(e, r);
    if (i) {
      if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0;
      if (!f.writable) return !1;
    }
    if (f = Object.getOwnPropertyDescriptor(o, r)) {
      if (!f.writable) return !1;
      f.value = t, Object.defineProperty(o, r, f);
    } else babelHelpers.defineProperty(o, r, t);
    return !0;
  }, set(e, r, t, o);
}
function _set(e, r, t, o, f) {
  if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property");
  return t;
}
babelHelpers.set = _set;
function setFunctionName(e, t, n) {
  "symbol" == typeof t && (t = (t = t.description) ? "[" + t + "]" : "");
  try {
    Object.defineProperty(e, "name", {
      configurable: !0,
      value: n ? n + " " + t : t
    });
  } catch (e) {}
  return e;
}
babelHelpers.setFunctionName = setFunctionName;
function _setPrototypeOf(t, e) {
  return babelHelpers.setPrototypeOf = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
babelHelpers.setPrototypeOf = _setPrototypeOf;
function _skipFirstGeneratorNext(t) {
  return function () {
    var r = t.apply(this, arguments);
    return r.next(), r;
  };
}
babelHelpers.skipFirstGeneratorNext = _skipFirstGeneratorNext;
function _slicedToArray(r, e) {
  return babelHelpers.arrayWithHoles(r) || babelHelpers.iterableToArrayLimit(r, e) || babelHelpers.unsupportedIterableToArray(r, e) || babelHelpers.nonIterableRest();
}
babelHelpers.slicedToArray = _slicedToArray;
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = babelHelpers.getPrototypeOf(t)););
  return t;
}
babelHelpers.superPropBase = _superPropBase;
function _superPropGet(t, o, e, r) {
  var p = babelHelpers.get(babelHelpers.getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
babelHelpers.superPropGet = _superPropGet;
function _superPropSet(t, e, o, r, p, f) {
  return babelHelpers.set(babelHelpers.getPrototypeOf(f ? t.prototype : t), e, o, r, p);
}
babelHelpers.superPropSet = _superPropSet;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
babelHelpers.taggedTemplateLiteral = _taggedTemplateLiteral;
function _taggedTemplateLiteralLoose(e, t) {
  return t || (t = e.slice(0)), e.raw = t, e;
}
babelHelpers.taggedTemplateLiteralLoose = _taggedTemplateLiteralLoose;
function _tdzError(e) {
  throw new ReferenceError(e + " is not defined - temporal dead zone");
}
babelHelpers.tdz = _tdzError;
function _temporalRef(r, e) {
  return r === babelHelpers.temporalUndefined ? babelHelpers.tdz(e) : r;
}
babelHelpers.temporalRef = _temporalRef;
function _temporalUndefined() {}
babelHelpers.temporalUndefined = _temporalUndefined;
function _toArray(r) {
  return babelHelpers.arrayWithHoles(r) || babelHelpers.iterableToArray(r) || babelHelpers.unsupportedIterableToArray(r) || babelHelpers.nonIterableRest();
}
babelHelpers.toArray = _toArray;
function _toConsumableArray(r) {
  return babelHelpers.arrayWithoutHoles(r) || babelHelpers.iterableToArray(r) || babelHelpers.unsupportedIterableToArray(r) || babelHelpers.nonIterableSpread();
}
babelHelpers.toConsumableArray = _toConsumableArray;
function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
babelHelpers.toPrimitive = toPrimitive;
function toPropertyKey(t) {
  var i = babelHelpers.toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
babelHelpers.toPropertyKey = toPropertyKey;
function _toSetter(t, e, n) {
  e || (e = []);
  var r = e.length++;
  return Object.defineProperty({}, "_", {
    set: function (o) {
      e[r] = o, t.apply(n, e);
    }
  });
}
babelHelpers.toSetter = _toSetter;
function tsRewriteRelativeImportExtensions(t, e) {
  return "string" == typeof t && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+)?)\.([cm]?)ts$/i, function (t, s, r, n, o) {
    return s ? e ? ".jsx" : ".js" : !r || n && o ? r + n + "." + o.toLowerCase() + "js" : t;
  }) : t;
}
babelHelpers.tsRewriteRelativeImportExtensions = tsRewriteRelativeImportExtensions;
function _typeof(o) {
  "@babel/helpers - typeof";

  return babelHelpers.typeof = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
babelHelpers.typeof = _typeof;
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return babelHelpers.arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? babelHelpers.arrayLikeToArray(r, a) : void 0;
  }
}
babelHelpers.unsupportedIterableToArray = _unsupportedIterableToArray;
function _usingCtx() {
  var r = "function" == typeof SuppressedError ? SuppressedError : function (r, e) {
      var n = Error();
      return n.name = "SuppressedError", n.error = r, n.suppressed = e, n;
    },
    e = {},
    n = [];
  function using(r, e) {
    if (null != e) {
      if (Object(e) !== e) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
      if (r) var o = e[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
      if (void 0 === o && (o = e[Symbol.dispose || Symbol.for("Symbol.dispose")], r)) var t = o;
      if ("function" != typeof o) throw new TypeError("Object is not disposable.");
      t && (o = function () {
        try {
          t.call(e);
        } catch (r) {
          return Promise.reject(r);
        }
      }), n.push({
        v: e,
        d: o,
        a: r
      });
    } else r && n.push({
      d: e,
      a: r
    });
    return e;
  }
  return {
    e: e,
    u: using.bind(null, !1),
    a: using.bind(null, !0),
    d: function () {
      var o,
        t = this.e,
        s = 0;
      function next() {
        for (; o = n.pop();) try {
          if (!o.a && 1 === s) return s = 0, n.push(o), Promise.resolve().then(next);
          if (o.d) {
            var r = o.d.call(o.v);
            if (o.a) return s |= 2, Promise.resolve(r).then(next, err);
          } else s |= 1;
        } catch (r) {
          return err(r);
        }
        if (1 === s) return t !== e ? Promise.reject(t) : Promise.resolve();
        if (t !== e) throw t;
      }
      function err(n) {
        return t = t !== e ? new r(n, t) : n, next();
      }
      return next();
    }
  };
}
babelHelpers.usingCtx = _usingCtx;
function _wrapAsyncGenerator(e) {
  return function () {
    return new AsyncGenerator(e.apply(this, arguments));
  };
}
function AsyncGenerator(e) {
  var r, t;
  function resume(r, t) {
    try {
      var n = e[r](t),
        o = n.value,
        u = o instanceof babelHelpers.OverloadYield;
      Promise.resolve(u ? o.v : o).then(function (t) {
        if (u) {
          var i = "return" === r ? "return" : "next";
          if (!o.k || t.done) return resume(i, t);
          t = e[i](t).value;
        }
        settle(n.done ? "return" : "normal", t);
      }, function (e) {
        resume("throw", e);
      });
    } catch (e) {
      settle("throw", e);
    }
  }
  function settle(e, n) {
    switch (e) {
      case "return":
        r.resolve({
          value: n,
          done: !0
        });
        break;
      case "throw":
        r.reject(n);
        break;
      default:
        r.resolve({
          value: n,
          done: !1
        });
    }
    (r = r.next) ? resume(r.key, r.arg) : t = null;
  }
  this._invoke = function (e, n) {
    return new Promise(function (o, u) {
      var i = {
        key: e,
        arg: n,
        resolve: o,
        reject: u,
        next: null
      };
      t ? t = t.next = i : (r = t = i, resume(e, n));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, AsyncGenerator.prototype.next = function (e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function (e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function (e) {
  return this._invoke("return", e);
};
babelHelpers.wrapAsyncGenerator = _wrapAsyncGenerator;
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return babelHelpers.wrapNativeSuper = _wrapNativeSuper = function (t) {
    if (null === t || !babelHelpers.isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return babelHelpers.construct(t, arguments, babelHelpers.getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), babelHelpers.setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}
babelHelpers.wrapNativeSuper = _wrapNativeSuper;
function _wrapRegExp() {
  babelHelpers.wrapRegExp = _wrapRegExp = function (e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = RegExp(e, t);
    return r.set(o, p || r.get(e)), babelHelpers.setPrototypeOf(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return babelHelpers.inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
        if ("" === t) return e;
        var p = o[r];
        return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
}
babelHelpers.wrapRegExp = _wrapRegExp;
function _writeOnlyError(r) {
  throw new TypeError('"' + r + '" is write-only');
}
babelHelpers.writeOnlyError = _writeOnlyError;
function _AwaitValue(t) {
  this.wrapped = t;
}
babelHelpers.AwaitValue = _AwaitValue;
function old_createMetadataMethodsForProperty(e, t, a, r) {
  return {
    getMetadata: function (o) {
      old_assertNotFinished(r, "getMetadata"), old_assertMetadataKey(o);
      var i = e[o];
      if (void 0 !== i) if (1 === t) {
        var n = i.public;
        if (void 0 !== n) return n[a];
      } else if (2 === t) {
        var l = i.private;
        if (void 0 !== l) return l.get(a);
      } else if (Object.hasOwnProperty.call(i, "constructor")) return i.constructor;
    },
    setMetadata: function (o, i) {
      old_assertNotFinished(r, "setMetadata"), old_assertMetadataKey(o);
      var n = e[o];
      if (void 0 === n && (n = e[o] = {}), 1 === t) {
        var l = n.public;
        void 0 === l && (l = n.public = {}), l[a] = i;
      } else if (2 === t) {
        var s = n.priv;
        void 0 === s && (s = n.private = new Map()), s.set(a, i);
      } else n.constructor = i;
    }
  };
}
function old_convertMetadataMapToFinal(e, t) {
  var a = e[Symbol.metadata || Symbol.for("Symbol.metadata")],
    r = Object.getOwnPropertySymbols(t);
  if (0 !== r.length) {
    for (var o = 0; o < r.length; o++) {
      var i = r[o],
        n = t[i],
        l = a ? a[i] : null,
        s = n.public,
        c = l ? l.public : null;
      s && c && Object.setPrototypeOf(s, c);
      var d = n.private;
      if (d) {
        var u = Array.from(d.values()),
          f = l ? l.private : null;
        f && (u = u.concat(f)), n.private = u;
      }
      l && Object.setPrototypeOf(n, l);
    }
    a && Object.setPrototypeOf(t, a), e[Symbol.metadata || Symbol.for("Symbol.metadata")] = t;
  }
}
function old_createAddInitializerMethod(e, t) {
  return function (a) {
    old_assertNotFinished(t, "addInitializer"), old_assertCallable(a, "An initializer"), e.push(a);
  };
}
function old_memberDec(e, t, a, r, o, i, n, l, s) {
  var c;
  switch (i) {
    case 1:
      c = "accessor";
      break;
    case 2:
      c = "method";
      break;
    case 3:
      c = "getter";
      break;
    case 4:
      c = "setter";
      break;
    default:
      c = "field";
  }
  var d,
    u,
    f = {
      kind: c,
      name: l ? "#" + t : babelHelpers.toPropertyKey(t),
      isStatic: n,
      isPrivate: l
    },
    p = {
      v: !1
    };
  if (0 !== i && (f.addInitializer = old_createAddInitializerMethod(o, p)), l) {
    d = 2, u = Symbol(t);
    var v = {};
    0 === i ? (v.get = a.get, v.set = a.set) : 2 === i ? v.get = function () {
      return a.value;
    } : (1 !== i && 3 !== i || (v.get = function () {
      return a.get.call(this);
    }), 1 !== i && 4 !== i || (v.set = function (e) {
      a.set.call(this, e);
    })), f.access = v;
  } else d = 1, u = t;
  try {
    return e(s, Object.assign(f, old_createMetadataMethodsForProperty(r, d, u, p)));
  } finally {
    p.v = !0;
  }
}
function old_assertNotFinished(e, t) {
  if (e.v) throw Error("attempted to call " + t + " after decoration was finished");
}
function old_assertMetadataKey(e) {
  if ("symbol" != typeof e) throw new TypeError("Metadata keys must be symbols, received: " + e);
}
function old_assertCallable(e, t) {
  if ("function" != typeof e) throw new TypeError(t + " must be a function");
}
function old_assertValidReturnValue(e, t) {
  var a = typeof t;
  if (1 === e) {
    if ("object" !== a || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
    void 0 !== t.get && old_assertCallable(t.get, "accessor.get"), void 0 !== t.set && old_assertCallable(t.set, "accessor.set"), void 0 !== t.init && old_assertCallable(t.init, "accessor.init"), void 0 !== t.initializer && old_assertCallable(t.initializer, "accessor.initializer");
  } else if ("function" !== a) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
}
function old_getInit(e) {
  var t;
  return null == (t = e.init) && (t = e.initializer) && void 0 !== console && console.warn(".initializer has been renamed to .init as of March 2022"), t;
}
function old_applyMemberDec(e, t, a, r, o, i, n, l, s) {
  var c,
    d,
    u,
    f,
    p,
    v,
    y,
    h = a[0];
  if (n ? (0 === o || 1 === o ? (c = {
    get: a[3],
    set: a[4]
  }, u = "get") : 3 === o ? (c = {
    get: a[3]
  }, u = "get") : 4 === o ? (c = {
    set: a[3]
  }, u = "set") : c = {
    value: a[3]
  }, 0 !== o && (1 === o && babelHelpers.setFunctionName(a[4], "#" + r, "set"), babelHelpers.setFunctionName(a[3], "#" + r, u))) : 0 !== o && (c = Object.getOwnPropertyDescriptor(t, r)), 1 === o ? f = {
    get: c.get,
    set: c.set
  } : 2 === o ? f = c.value : 3 === o ? f = c.get : 4 === o && (f = c.set), "function" == typeof h) void 0 !== (p = old_memberDec(h, r, c, l, s, o, i, n, f)) && (old_assertValidReturnValue(o, p), 0 === o ? d = p : 1 === o ? (d = old_getInit(p), v = p.get || f.get, y = p.set || f.set, f = {
    get: v,
    set: y
  }) : f = p);else for (var m = h.length - 1; m >= 0; m--) {
    var b;
    void 0 !== (p = old_memberDec(h[m], r, c, l, s, o, i, n, f)) && (old_assertValidReturnValue(o, p), 0 === o ? b = p : 1 === o ? (b = old_getInit(p), v = p.get || f.get, y = p.set || f.set, f = {
      get: v,
      set: y
    }) : f = p, void 0 !== b && (void 0 === d ? d = b : "function" == typeof d ? d = [d, b] : d.push(b)));
  }
  if (0 === o || 1 === o) {
    if (void 0 === d) d = function (e, t) {
      return t;
    };else if ("function" != typeof d) {
      var g = d;
      d = function (e, t) {
        for (var a = t, r = 0; r < g.length; r++) a = g[r].call(e, a);
        return a;
      };
    } else {
      var _ = d;
      d = function (e, t) {
        return _.call(e, t);
      };
    }
    e.push(d);
  }
  0 !== o && (1 === o ? (c.get = f.get, c.set = f.set) : 2 === o ? c.value = f : 3 === o ? c.get = f : 4 === o && (c.set = f), n ? 1 === o ? (e.push(function (e, t) {
    return f.get.call(e, t);
  }), e.push(function (e, t) {
    return f.set.call(e, t);
  })) : 2 === o ? e.push(f) : e.push(function (e, t) {
    return f.call(e, t);
  }) : Object.defineProperty(t, r, c));
}
function old_applyMemberDecs(e, t, a, r, o) {
  for (var i, n, l = new Map(), s = new Map(), c = 0; c < o.length; c++) {
    var d = o[c];
    if (Array.isArray(d)) {
      var u,
        f,
        p,
        v = d[1],
        y = d[2],
        h = d.length > 3,
        m = v >= 5;
      if (m ? (u = t, f = r, 0 != (v -= 5) && (p = n = n || [])) : (u = t.prototype, f = a, 0 !== v && (p = i = i || [])), 0 !== v && !h) {
        var b = m ? s : l,
          g = b.get(y) || 0;
        if (!0 === g || 3 === g && 4 !== v || 4 === g && 3 !== v) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + y);
        !g && v > 2 ? b.set(y, v) : b.set(y, !0);
      }
      old_applyMemberDec(e, u, d, y, v, m, h, f, p);
    }
  }
  old_pushInitializers(e, i), old_pushInitializers(e, n);
}
function old_pushInitializers(e, t) {
  t && e.push(function (e) {
    for (var a = 0; a < t.length; a++) t[a].call(e);
    return e;
  });
}
function old_applyClassDecs(e, t, a, r) {
  if (r.length > 0) {
    for (var o = [], i = t, n = t.name, l = r.length - 1; l >= 0; l--) {
      var s = {
        v: !1
      };
      try {
        var c = Object.assign({
            kind: "class",
            name: n,
            addInitializer: old_createAddInitializerMethod(o, s)
          }, old_createMetadataMethodsForProperty(a, 0, n, s)),
          d = r[l](i, c);
      } finally {
        s.v = !0;
      }
      void 0 !== d && (old_assertValidReturnValue(10, d), i = d);
    }
    e.push(i, function () {
      for (var e = 0; e < o.length; e++) o[e].call(i);
    });
  }
}
function applyDecs(e, t, a) {
  var r = [],
    o = {},
    i = {};
  return old_applyMemberDecs(r, e, i, o, t), old_convertMetadataMapToFinal(e.prototype, i), old_applyClassDecs(r, e, o, a), old_convertMetadataMapToFinal(e, o), r;
}
babelHelpers.applyDecs = applyDecs;
function applyDecs2203Factory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e, t) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function memberDec(e, t, r, a, n, i, s, o) {
    var c;
    switch (n) {
      case 1:
        c = "accessor";
        break;
      case 2:
        c = "method";
        break;
      case 3:
        c = "getter";
        break;
      case 4:
        c = "setter";
        break;
      default:
        c = "field";
    }
    var l,
      u,
      f = {
        kind: c,
        name: s ? "#" + t : t,
        static: i,
        private: s
      },
      p = {
        v: !1
      };
    0 !== n && (f.addInitializer = createAddInitializerMethod(a, p)), 0 === n ? s ? (l = r.get, u = r.set) : (l = function () {
      return this[t];
    }, u = function (e) {
      this[t] = e;
    }) : 2 === n ? l = function () {
      return r.value;
    } : (1 !== n && 3 !== n || (l = function () {
      return r.get.call(this);
    }), 1 !== n && 4 !== n || (u = function (e) {
      r.set.call(this, e);
    })), f.access = l && u ? {
      get: l,
      set: u
    } : l ? {
      get: l
    } : {
      set: u
    };
    try {
      return e(o, f);
    } finally {
      p.v = !0;
    }
  }
  function assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = typeof t;
    if (1 === e) {
      if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
  }
  function applyMemberDec(e, t, r, a, n, i, s, o) {
    var c,
      l,
      u,
      f,
      p,
      d,
      h = r[0];
    if (s ? c = 0 === n || 1 === n ? {
      get: r[3],
      set: r[4]
    } : 3 === n ? {
      get: r[3]
    } : 4 === n ? {
      set: r[3]
    } : {
      value: r[3]
    } : 0 !== n && (c = Object.getOwnPropertyDescriptor(t, a)), 1 === n ? u = {
      get: c.get,
      set: c.set
    } : 2 === n ? u = c.value : 3 === n ? u = c.get : 4 === n && (u = c.set), "function" == typeof h) void 0 !== (f = memberDec(h, a, c, o, n, i, s, u)) && (assertValidReturnValue(n, f), 0 === n ? l = f : 1 === n ? (l = f.init, p = f.get || u.get, d = f.set || u.set, u = {
      get: p,
      set: d
    }) : u = f);else for (var v = h.length - 1; v >= 0; v--) {
      var g;
      void 0 !== (f = memberDec(h[v], a, c, o, n, i, s, u)) && (assertValidReturnValue(n, f), 0 === n ? g = f : 1 === n ? (g = f.init, p = f.get || u.get, d = f.set || u.set, u = {
        get: p,
        set: d
      }) : u = f, void 0 !== g && (void 0 === l ? l = g : "function" == typeof l ? l = [l, g] : l.push(g)));
    }
    if (0 === n || 1 === n) {
      if (void 0 === l) l = function (e, t) {
        return t;
      };else if ("function" != typeof l) {
        var y = l;
        l = function (e, t) {
          for (var r = t, a = 0; a < y.length; a++) r = y[a].call(e, r);
          return r;
        };
      } else {
        var m = l;
        l = function (e, t) {
          return m.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== n && (1 === n ? (c.get = u.get, c.set = u.set) : 2 === n ? c.value = u : 3 === n ? c.get = u : 4 === n && (c.set = u), s ? 1 === n ? (e.push(function (e, t) {
      return u.get.call(e, t);
    }), e.push(function (e, t) {
      return u.set.call(e, t);
    })) : 2 === n ? e.push(u) : e.push(function (e, t) {
      return u.call(e, t);
    }) : Object.defineProperty(t, a, c));
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r) {
    var a = [];
    return function (e, t, r) {
      for (var a, n, i = new Map(), s = new Map(), o = 0; o < r.length; o++) {
        var c = r[o];
        if (Array.isArray(c)) {
          var l,
            u,
            f = c[1],
            p = c[2],
            d = c.length > 3,
            h = f >= 5;
          if (h ? (l = t, 0 != (f -= 5) && (u = n = n || [])) : (l = t.prototype, 0 !== f && (u = a = a || [])), 0 !== f && !d) {
            var v = h ? s : i,
              g = v.get(p) || 0;
            if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p);
            !g && f > 2 ? v.set(p, f) : v.set(p, !0);
          }
          applyMemberDec(e, l, c, p, f, h, d, u);
        }
      }
      pushInitializers(e, a), pushInitializers(e, n);
    }(a, e, t), function (e, t, r) {
      if (r.length > 0) {
        for (var a = [], n = t, i = t.name, s = r.length - 1; s >= 0; s--) {
          var o = {
            v: !1
          };
          try {
            var c = r[s](n, {
              kind: "class",
              name: i,
              addInitializer: createAddInitializerMethod(a, o)
            });
          } finally {
            o.v = !0;
          }
          void 0 !== c && (assertValidReturnValue(10, c), n = c);
        }
        e.push(n, function () {
          for (var e = 0; e < a.length; e++) a[e].call(n);
        });
      }
    }(a, e, r), a;
  };
}
var applyDecs2203Impl;
function applyDecs2203(e, t, r) {
  return (applyDecs2203Impl = applyDecs2203Impl || applyDecs2203Factory())(e, t, r);
}
babelHelpers.applyDecs2203 = applyDecs2203;
function applyDecs2203RFactory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e, t) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function memberDec(e, t, r, n, a, i, o, s) {
    var c;
    switch (a) {
      case 1:
        c = "accessor";
        break;
      case 2:
        c = "method";
        break;
      case 3:
        c = "getter";
        break;
      case 4:
        c = "setter";
        break;
      default:
        c = "field";
    }
    var l,
      u,
      f = {
        kind: c,
        name: o ? "#" + t : babelHelpers.toPropertyKey(t),
        static: i,
        private: o
      },
      p = {
        v: !1
      };
    0 !== a && (f.addInitializer = createAddInitializerMethod(n, p)), 0 === a ? o ? (l = r.get, u = r.set) : (l = function () {
      return this[t];
    }, u = function (e) {
      this[t] = e;
    }) : 2 === a ? l = function () {
      return r.value;
    } : (1 !== a && 3 !== a || (l = function () {
      return r.get.call(this);
    }), 1 !== a && 4 !== a || (u = function (e) {
      r.set.call(this, e);
    })), f.access = l && u ? {
      get: l,
      set: u
    } : l ? {
      get: l
    } : {
      set: u
    };
    try {
      return e(s, f);
    } finally {
      p.v = !0;
    }
  }
  function assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = typeof t;
    if (1 === e) {
      if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
  }
  function applyMemberDec(e, t, r, n, a, i, o, s) {
    var c,
      l,
      u,
      f,
      p,
      d,
      h,
      v = r[0];
    if (o ? (0 === a || 1 === a ? (c = {
      get: r[3],
      set: r[4]
    }, u = "get") : 3 === a ? (c = {
      get: r[3]
    }, u = "get") : 4 === a ? (c = {
      set: r[3]
    }, u = "set") : c = {
      value: r[3]
    }, 0 !== a && (1 === a && babelHelpers.setFunctionName(r[4], "#" + n, "set"), babelHelpers.setFunctionName(r[3], "#" + n, u))) : 0 !== a && (c = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? f = {
      get: c.get,
      set: c.set
    } : 2 === a ? f = c.value : 3 === a ? f = c.get : 4 === a && (f = c.set), "function" == typeof v) void 0 !== (p = memberDec(v, n, c, s, a, i, o, f)) && (assertValidReturnValue(a, p), 0 === a ? l = p : 1 === a ? (l = p.init, d = p.get || f.get, h = p.set || f.set, f = {
      get: d,
      set: h
    }) : f = p);else for (var g = v.length - 1; g >= 0; g--) {
      var y;
      void 0 !== (p = memberDec(v[g], n, c, s, a, i, o, f)) && (assertValidReturnValue(a, p), 0 === a ? y = p : 1 === a ? (y = p.init, d = p.get || f.get, h = p.set || f.set, f = {
        get: d,
        set: h
      }) : f = p, void 0 !== y && (void 0 === l ? l = y : "function" == typeof l ? l = [l, y] : l.push(y)));
    }
    if (0 === a || 1 === a) {
      if (void 0 === l) l = function (e, t) {
        return t;
      };else if ("function" != typeof l) {
        var m = l;
        l = function (e, t) {
          for (var r = t, n = 0; n < m.length; n++) r = m[n].call(e, r);
          return r;
        };
      } else {
        var b = l;
        l = function (e, t) {
          return b.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== a && (1 === a ? (c.get = f.get, c.set = f.set) : 2 === a ? c.value = f : 3 === a ? c.get = f : 4 === a && (c.set = f), o ? 1 === a ? (e.push(function (e, t) {
      return f.get.call(e, t);
    }), e.push(function (e, t) {
      return f.set.call(e, t);
    })) : 2 === a ? e.push(f) : e.push(function (e, t) {
      return f.call(e, t);
    }) : Object.defineProperty(t, n, c));
  }
  function applyMemberDecs(e, t) {
    for (var r, n, a = [], i = new Map(), o = new Map(), s = 0; s < t.length; s++) {
      var c = t[s];
      if (Array.isArray(c)) {
        var l,
          u,
          f = c[1],
          p = c[2],
          d = c.length > 3,
          h = f >= 5;
        if (h ? (l = e, 0 != (f -= 5) && (u = n = n || [])) : (l = e.prototype, 0 !== f && (u = r = r || [])), 0 !== f && !d) {
          var v = h ? o : i,
            g = v.get(p) || 0;
          if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p);
          !g && f > 2 ? v.set(p, f) : v.set(p, !0);
        }
        applyMemberDec(a, l, c, p, f, h, d, u);
      }
    }
    return pushInitializers(a, r), pushInitializers(a, n), a;
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r) {
    return {
      e: applyMemberDecs(e, t),
      get c() {
        return function (e, t) {
          if (t.length > 0) {
            for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) {
              var o = {
                v: !1
              };
              try {
                var s = t[i](n, {
                  kind: "class",
                  name: a,
                  addInitializer: createAddInitializerMethod(r, o)
                });
              } finally {
                o.v = !0;
              }
              void 0 !== s && (assertValidReturnValue(10, s), n = s);
            }
            return [n, function () {
              for (var e = 0; e < r.length; e++) r[e].call(n);
            }];
          }
        }(e, r);
      }
    };
  };
}
function applyDecs2203R(e, t, r) {
  return (babelHelpers.applyDecs2203R = applyDecs2203R = applyDecs2203RFactory())(e, t, r);
}
babelHelpers.applyDecs2203R = applyDecs2203R;
function applyDecs2301Factory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e, t) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function assertInstanceIfPrivate(e, t) {
    if (!e(t)) throw new TypeError("Attempted to access private element on non-instance");
  }
  function memberDec(e, t, r, n, a, i, s, o, c) {
    var u;
    switch (a) {
      case 1:
        u = "accessor";
        break;
      case 2:
        u = "method";
        break;
      case 3:
        u = "getter";
        break;
      case 4:
        u = "setter";
        break;
      default:
        u = "field";
    }
    var l,
      f,
      p = {
        kind: u,
        name: s ? "#" + t : babelHelpers.toPropertyKey(t),
        static: i,
        private: s
      },
      d = {
        v: !1
      };
    if (0 !== a && (p.addInitializer = createAddInitializerMethod(n, d)), s || 0 !== a && 2 !== a) {
      if (2 === a) l = function (e) {
        return assertInstanceIfPrivate(c, e), r.value;
      };else {
        var h = 0 === a || 1 === a;
        (h || 3 === a) && (l = s ? function (e) {
          return assertInstanceIfPrivate(c, e), r.get.call(e);
        } : function (e) {
          return r.get.call(e);
        }), (h || 4 === a) && (f = s ? function (e, t) {
          assertInstanceIfPrivate(c, e), r.set.call(e, t);
        } : function (e, t) {
          r.set.call(e, t);
        });
      }
    } else l = function (e) {
      return e[t];
    }, 0 === a && (f = function (e, r) {
      e[t] = r;
    });
    var v = s ? c.bind() : function (e) {
      return t in e;
    };
    p.access = l && f ? {
      get: l,
      set: f,
      has: v
    } : l ? {
      get: l,
      has: v
    } : {
      set: f,
      has: v
    };
    try {
      return e(o, p);
    } finally {
      d.v = !0;
    }
  }
  function assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = typeof t;
    if (1 === e) {
      if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
  }
  function curryThis2(e) {
    return function (t) {
      e(this, t);
    };
  }
  function applyMemberDec(e, t, r, n, a, i, s, o, c) {
    var u,
      l,
      f,
      p,
      d,
      h,
      v,
      y,
      g = r[0];
    if (s ? (0 === a || 1 === a ? (u = {
      get: (d = r[3], function () {
        return d(this);
      }),
      set: curryThis2(r[4])
    }, f = "get") : 3 === a ? (u = {
      get: r[3]
    }, f = "get") : 4 === a ? (u = {
      set: r[3]
    }, f = "set") : u = {
      value: r[3]
    }, 0 !== a && (1 === a && babelHelpers.setFunctionName(u.set, "#" + n, "set"), babelHelpers.setFunctionName(u[f || "value"], "#" + n, f))) : 0 !== a && (u = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? p = {
      get: u.get,
      set: u.set
    } : 2 === a ? p = u.value : 3 === a ? p = u.get : 4 === a && (p = u.set), "function" == typeof g) void 0 !== (h = memberDec(g, n, u, o, a, i, s, p, c)) && (assertValidReturnValue(a, h), 0 === a ? l = h : 1 === a ? (l = h.init, v = h.get || p.get, y = h.set || p.set, p = {
      get: v,
      set: y
    }) : p = h);else for (var m = g.length - 1; m >= 0; m--) {
      var b;
      void 0 !== (h = memberDec(g[m], n, u, o, a, i, s, p, c)) && (assertValidReturnValue(a, h), 0 === a ? b = h : 1 === a ? (b = h.init, v = h.get || p.get, y = h.set || p.set, p = {
        get: v,
        set: y
      }) : p = h, void 0 !== b && (void 0 === l ? l = b : "function" == typeof l ? l = [l, b] : l.push(b)));
    }
    if (0 === a || 1 === a) {
      if (void 0 === l) l = function (e, t) {
        return t;
      };else if ("function" != typeof l) {
        var I = l;
        l = function (e, t) {
          for (var r = t, n = 0; n < I.length; n++) r = I[n].call(e, r);
          return r;
        };
      } else {
        var w = l;
        l = function (e, t) {
          return w.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== a && (1 === a ? (u.get = p.get, u.set = p.set) : 2 === a ? u.value = p : 3 === a ? u.get = p : 4 === a && (u.set = p), s ? 1 === a ? (e.push(function (e, t) {
      return p.get.call(e, t);
    }), e.push(function (e, t) {
      return p.set.call(e, t);
    })) : 2 === a ? e.push(p) : e.push(function (e, t) {
      return p.call(e, t);
    }) : Object.defineProperty(t, n, u));
  }
  function applyMemberDecs(e, t, r) {
    for (var n, a, i, s = [], o = new Map(), c = new Map(), u = 0; u < t.length; u++) {
      var l = t[u];
      if (Array.isArray(l)) {
        var f,
          p,
          d = l[1],
          h = l[2],
          v = l.length > 3,
          y = d >= 5,
          g = r;
        if (y ? (f = e, 0 != (d -= 5) && (p = a = a || []), v && !i && (i = function (t) {
          return babelHelpers.checkInRHS(t) === e;
        }), g = i) : (f = e.prototype, 0 !== d && (p = n = n || [])), 0 !== d && !v) {
          var m = y ? c : o,
            b = m.get(h) || 0;
          if (!0 === b || 3 === b && 4 !== d || 4 === b && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h);
          !b && d > 2 ? m.set(h, d) : m.set(h, !0);
        }
        applyMemberDec(s, f, l, h, d, y, v, p, g);
      }
    }
    return pushInitializers(s, n), pushInitializers(s, a), s;
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r, n) {
    return {
      e: applyMemberDecs(e, t, n),
      get c() {
        return function (e, t) {
          if (t.length > 0) {
            for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) {
              var s = {
                v: !1
              };
              try {
                var o = t[i](n, {
                  kind: "class",
                  name: a,
                  addInitializer: createAddInitializerMethod(r, s)
                });
              } finally {
                s.v = !0;
              }
              void 0 !== o && (assertValidReturnValue(10, o), n = o);
            }
            return [n, function () {
              for (var e = 0; e < r.length; e++) r[e].call(n);
            }];
          }
        }(e, r);
      }
    };
  };
}
function applyDecs2301(e, t, r, n) {
  return (babelHelpers.applyDecs2301 = applyDecs2301 = applyDecs2301Factory())(e, t, r, n);
}
babelHelpers.applyDecs2301 = applyDecs2301;
function applyDecs2305(e, t, r, n, o, a) {
  function i(e, t, r) {
    return function (n, o) {
      return r && r(n), e[t].call(n, o);
    };
  }
  function c(e, t) {
    for (var r = 0; r < e.length; r++) e[r].call(t);
    return t;
  }
  function s(e, t, r, n) {
    if ("function" != typeof e && (n || void 0 !== e)) throw new TypeError(t + " must " + (r || "be") + " a function" + (n ? "" : " or undefined"));
    return e;
  }
  function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) {
    function m(e) {
      if (!h(e)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y,
      v = t[0],
      g = t[3],
      b = !u;
    if (!b) {
      r || Array.isArray(v) || (v = [v]);
      var w = {},
        S = [],
        A = 3 === o ? "get" : 4 === o || d ? "set" : "value";
      f ? (p || d ? w = {
        get: babelHelpers.setFunctionName(function () {
          return g(this);
        }, n, "get"),
        set: function (e) {
          t[4](this, e);
        }
      } : w[A] = g, p || babelHelpers.setFunctionName(w[A], n, 2 === o ? "" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n));
    }
    for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) {
      var D = v[j],
        E = r ? v[j - 1] : void 0,
        I = {},
        O = {
          kind: ["field", "accessor", "method", "getter", "setter", "class"][o],
          name: n,
          metadata: a,
          addInitializer: function (e, t) {
            if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
            s(t, "An initializer", "be", !0), c.push(t);
          }.bind(null, I)
        };
      try {
        if (b) (y = s(D.call(E, P, O), "class decorators", "return")) && (P = y);else {
          var k, F;
          O.static = l, O.private = f, f ? 2 === o ? k = function (e) {
            return m(e), w.value;
          } : (o < 4 && (k = i(w, "get", m)), 3 !== o && (F = i(w, "set", m))) : (k = function (e) {
            return e[n];
          }, (o < 2 || 4 === o) && (F = function (e, t) {
            e[n] = t;
          }));
          var N = O.access = {
            has: f ? h.bind() : function (e) {
              return n in e;
            }
          };
          if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? {
            get: w.get,
            set: w.set
          } : w[A], O), d) {
            if ("object" == typeof P && P) (y = s(P.get, "accessor.get")) && (w.get = y), (y = s(P.set, "accessor.set")) && (w.set = y), (y = s(P.init, "accessor.init")) && S.push(y);else if (void 0 !== P) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s(P, (p ? "field" : "method") + " decorators", "return") && (p ? S.push(P) : w[A] = P);
        }
      } finally {
        I.v = !0;
      }
    }
    return (p || d) && u.push(function (e, t) {
      for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t);
      return t;
    }), p || b || (f ? d ? u.push(i(w, "get"), i(w, "set")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P;
  }
  function u(e, t) {
    return Object.defineProperty(e, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: !0,
      enumerable: !0,
      value: t
    });
  }
  if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol.for("Symbol.metadata")];
  var f = Object.create(null == l ? null : l),
    p = function (e, t, r, n) {
      var o,
        a,
        i = [],
        s = function (t) {
          return babelHelpers.checkInRHS(t) === e;
        },
        u = new Map();
      function l(e) {
        e && i.push(c.bind(null, e));
      }
      for (var f = 0; f < t.length; f++) {
        var p = t[f];
        if (Array.isArray(p)) {
          var d = p[1],
            h = p[2],
            m = p.length > 3,
            y = 16 & d,
            v = !!(8 & d),
            g = 0 == (d &= 7),
            b = h + "/" + v;
          if (!g && !m) {
            var w = u.get(b);
            if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h);
            u.set(b, !(d > 2) || d);
          }
          applyDec(v ? e : e.prototype, p, y, m ? "#" + h : babelHelpers.toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r);
        }
      }
      return l(o), l(a), i;
    }(e, t, o, f);
  return r.length || u(e, f), {
    e: p,
    get c() {
      var t = [];
      return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)];
    }
  };
}
babelHelpers.applyDecs2305 = applyDecs2305;
function _classApplyDescriptorDestructureSet(e, t) {
  if (t.set) return "__destrObj" in t || (t.__destrObj = {
    set value(r) {
      t.set.call(e, r);
    }
  }), t.__destrObj;
  if (!t.writable) throw new TypeError("attempted to set read only private field");
  return t;
}
babelHelpers.classApplyDescriptorDestructureSet = _classApplyDescriptorDestructureSet;
function _classApplyDescriptorGet(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
babelHelpers.classApplyDescriptorGet = _classApplyDescriptorGet;
function _classApplyDescriptorSet(e, t, l) {
  if (t.set) t.set.call(e, l);else {
    if (!t.writable) throw new TypeError("attempted to set read only private field");
    t.value = l;
  }
}
babelHelpers.classApplyDescriptorSet = _classApplyDescriptorSet;
function _classCheckPrivateStaticAccess(s, a, r) {
  return babelHelpers.assertClassBrand(a, s, r);
}
babelHelpers.classCheckPrivateStaticAccess = _classCheckPrivateStaticAccess;
function _classCheckPrivateStaticFieldDescriptor(t, e) {
  if (void 0 === t) throw new TypeError("attempted to " + e + " private static field before its declaration");
}
babelHelpers.classCheckPrivateStaticFieldDescriptor = _classCheckPrivateStaticFieldDescriptor;
function _classExtractFieldDescriptor(e, t) {
  return babelHelpers.classPrivateFieldGet2(t, e);
}
babelHelpers.classExtractFieldDescriptor = _classExtractFieldDescriptor;
function _classPrivateFieldDestructureSet(e, t) {
  var r = babelHelpers.classPrivateFieldGet2(t, e);
  return babelHelpers.classApplyDescriptorDestructureSet(e, r);
}
babelHelpers.classPrivateFieldDestructureSet = _classPrivateFieldDestructureSet;
function _classPrivateFieldGet(e, t) {
  var r = babelHelpers.classPrivateFieldGet2(t, e);
  return babelHelpers.classApplyDescriptorGet(e, r);
}
babelHelpers.classPrivateFieldGet = _classPrivateFieldGet;
function _classPrivateFieldSet(e, t, r) {
  var s = babelHelpers.classPrivateFieldGet2(t, e);
  return babelHelpers.classApplyDescriptorSet(e, s, r), r;
}
babelHelpers.classPrivateFieldSet = _classPrivateFieldSet;
function _classPrivateMethodGet(s, a, r) {
  return babelHelpers.assertClassBrand(a, s), r;
}
babelHelpers.classPrivateMethodGet = _classPrivateMethodGet;
function _classPrivateMethodSet() {
  throw new TypeError("attempted to reassign private method");
}
babelHelpers.classPrivateMethodSet = _classPrivateMethodSet;
function _classStaticPrivateFieldDestructureSet(t, r, s) {
  return babelHelpers.assertClassBrand(r, t), babelHelpers.classCheckPrivateStaticFieldDescriptor(s, "set"), babelHelpers.classApplyDescriptorDestructureSet(t, s);
}
babelHelpers.classStaticPrivateFieldDestructureSet = _classStaticPrivateFieldDestructureSet;
function _classStaticPrivateFieldSpecGet(t, s, r) {
  return babelHelpers.assertClassBrand(s, t), babelHelpers.classCheckPrivateStaticFieldDescriptor(r, "get"), babelHelpers.classApplyDescriptorGet(t, r);
}
babelHelpers.classStaticPrivateFieldSpecGet = _classStaticPrivateFieldSpecGet;
function _classStaticPrivateFieldSpecSet(s, t, r, e) {
  return babelHelpers.assertClassBrand(t, s), babelHelpers.classCheckPrivateStaticFieldDescriptor(r, "set"), babelHelpers.classApplyDescriptorSet(s, r, e), e;
}
babelHelpers.classStaticPrivateFieldSpecSet = _classStaticPrivateFieldSpecSet;
function _classStaticPrivateMethodSet() {
  throw new TypeError("attempted to set read only static private field");
}
babelHelpers.classStaticPrivateMethodSet = _classStaticPrivateMethodSet;
function _defineEnumerableProperties(e, r) {
  for (var t in r) {
    var n = r[t];
    n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n);
  }
  if (Object.getOwnPropertySymbols) for (var a = Object.getOwnPropertySymbols(r), b = 0; b < a.length; b++) {
    var i = a[b];
    (n = r[i]).configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, i, n);
  }
  return e;
}
babelHelpers.defineEnumerableProperties = _defineEnumerableProperties;
function dispose_SuppressedError(r, e) {
  return "undefined" != typeof SuppressedError ? dispose_SuppressedError = SuppressedError : (dispose_SuppressedError = function (r, e) {
    this.suppressed = e, this.error = r, this.stack = Error().stack;
  }, dispose_SuppressedError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: dispose_SuppressedError,
      writable: !0,
      configurable: !0
    }
  })), new dispose_SuppressedError(r, e);
}
function _dispose(r, e, s) {
  function next() {
    for (; r.length > 0;) try {
      var o = r.pop(),
        p = o.d.call(o.v);
      if (o.a) return Promise.resolve(p).then(next, err);
    } catch (r) {
      return err(r);
    }
    if (s) throw e;
  }
  function err(r) {
    return e = s ? new dispose_SuppressedError(e, r) : r, s = !0, next();
  }
  return next();
}
babelHelpers.dispose = _dispose;
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? Object(arguments[r]) : {},
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t).filter(function (e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), o.forEach(function (r) {
      babelHelpers.defineProperty(e, r, t[r]);
    });
  }
  return e;
}
babelHelpers.objectSpread = _objectSpread;
function _using(o, n, e) {
  if (null == n) return n;
  if (Object(n) !== n) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
  if (e) var r = n[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
  if (null == r && (r = n[Symbol.dispose || Symbol.for("Symbol.dispose")]), "function" != typeof r) throw new TypeError("Property [Symbol.dispose] is not a function.");
  return o.push({
    v: n,
    d: r,
    a: e
  }), n;
}
babelHelpers.using = _using;
babelHelpers;
// ===== src/components/AuthScapeApp.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthScapeApp = AuthScapeApp;
exports.AuthScapeProvider = void 0;
Object.defineProperty(exports, "Bounce", {
  enumerable: true,
  get: function () {
    return _reactToastify.Bounce;
  }
});
Object.defineProperty(exports, "Flip", {
  enumerable: true,
  get: function () {
    return _reactToastify.Flip;
  }
});
Object.defineProperty(exports, "Slide", {
  enumerable: true,
  get: function () {
    return _reactToastify.Slide;
  }
});
Object.defineProperty(exports, "Zoom", {
  enumerable: true,
  get: function () {
    return _reactToastify.Zoom;
  }
});
exports.logError = logError;
exports.setErrorTrackingUserId = setErrorTrackingUserId;
Object.defineProperty(exports, "toast", {
  enumerable: true,
  get: function () {
    return _reactToastify.toast;
  }
});
exports.useAppTheme = void 0;
exports.useNotifications = useNotifications;
var _react = _interopRequireWildcard(require("react"));
var _reactToastify = require("react-toastify");
var _head = babelHelpers.interopRequireDefault(require("next/head"));
var _navigation = require("next/navigation");
var _axios = babelHelpers.interopRequireDefault(require("axios"));
var _queryString = babelHelpers.interopRequireDefault(require("query-string"));
var _router = babelHelpers.interopRequireDefault(require("next/router"));
var _ga4React = babelHelpers.interopRequireDefault(require("ga-4-react"));
var _zustand = require("zustand");
var _reactMicrosoftClarity = require("react-microsoft-clarity");
var _styles = require("@mui/material/styles");
var _CssBaseline = babelHelpers.interopRequireDefault(require("@mui/material/CssBaseline"));
var _signalr = require("@microsoft/signalr");
var _jsCookie = babelHelpers.interopRequireDefault(require("js-cookie"));
// Re-export toast and transitions so pages can import from authscape

// ============================================================================
// Auth Redirect Circuit Breaker
// ============================================================================
const AUTH_REDIRECT_KEY = 'authscape_redirect_count';
const AUTH_REDIRECT_TS_KEY = 'authscape_redirect_ts';
const AUTH_MAX_REDIRECTS = 3;
const AUTH_REDIRECT_WINDOW_MS = 30000; // 30 seconds

const checkAndIncrementRedirect = () => {
  if (typeof window === 'undefined') return false;
  const now = Date.now();
  const storedTs = parseInt(sessionStorage.getItem(AUTH_REDIRECT_TS_KEY) || '0', 10);
  let count = parseInt(sessionStorage.getItem(AUTH_REDIRECT_KEY) || '0', 10);
  if (now - storedTs > AUTH_REDIRECT_WINDOW_MS) {
    count = 0;
    sessionStorage.setItem(AUTH_REDIRECT_TS_KEY, String(now));
  }
  count += 1;
  sessionStorage.setItem(AUTH_REDIRECT_KEY, String(count));
  return count <= AUTH_MAX_REDIRECTS;
};
const resetRedirectCounter = () => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(AUTH_REDIRECT_KEY);
  sessionStorage.removeItem(AUTH_REDIRECT_TS_KEY);
};

// ============================================================================
// Error Tracking Service
// ============================================================================
let errorTrackingSessionId = null;
let errorTrackingUserId = null;
let errorTrackingInitialized = false;
function generateGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
function getOrCreateSessionId() {
  if (typeof window === 'undefined') return null;
  let storedSessionId = sessionStorage.getItem('errorTrackingSessionId');
  if (!storedSessionId) {
    storedSessionId = sessionStorage.getItem('analyticsSessionId') || generateGuid();
    sessionStorage.setItem('errorTrackingSessionId', storedSessionId);
  }
  return storedSessionId;
}
function initializeErrorTracking() {
  let currentUser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (currentUser && currentUser.id) {
    errorTrackingUserId = currentUser.id;
  }
  errorTrackingSessionId = getOrCreateSessionId();
  errorTrackingInitialized = true;
}
async function logError(errorData) {
  if (!errorTrackingSessionId && typeof window !== 'undefined') {
    errorTrackingSessionId = getOrCreateSessionId();
  }
  const error = {
    message: errorData.message || 'Unknown error',
    errorType: errorData.errorType || 'JavaScriptError',
    stackTrace: errorData.stackTrace || '',
    url: errorData.url || (typeof window !== 'undefined' ? window.location.href : ''),
    componentName: errorData.componentName || null,
    userId: errorTrackingUserId || null,
    sessionId: errorTrackingSessionId || null,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
    ipAddress: '',
    metadata: errorData.metadata || null
  };
  try {
    const response = await apiService().post('/ErrorTracking/LogError', error);
    if (response && response.status !== 200) {
      console.error('Error tracking API returned:', response.status);
    }
  } catch (err) {
    console.error('Failed to send error to tracking system:', err.message);
  }
}
function setErrorTrackingUserId(newUserId) {
  errorTrackingUserId = newUserId;
}

// ============================================================================
// AppThemeProvider
// ============================================================================
const ThemeContext = /*#__PURE__*/(0, _react.createContext)();
const useAppTheme = () => {
  const context = (0, _react.useContext)(ThemeContext);
  if (!context) {
    return {
      mode: 'light',
      toggleTheme: () => {}
    };
  }
  return context;
};
exports.useAppTheme = useAppTheme;
const AppThemeProvider = _ref => {
  let {
    children,
    customTheme
  } = _ref;
  const [mode, setMode] = (0, _react.useState)('light');
  (0, _react.useEffect)(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('themeMode');
      if (savedMode) {
        setMode(savedMode);
      }
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', mode);
    }
  }, [mode]);
  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeMode', newMode);
    }
  };
  const theme = customTheme || (0, _styles.createTheme)({
    palette: {
      mode,
      ...(mode === 'light' ? {
        primary: {
          main: '#0098e5',
          light: '#4db8ff',
          dark: '#006ba6'
        },
        secondary: {
          main: '#44596e',
          light: '#6b7f94',
          dark: '#2d3d4f'
        },
        background: {
          default: '#f5f8fa',
          paper: '#ffffff'
        },
        text: {
          primary: '#1a202c',
          secondary: '#4a5568'
        },
        divider: 'rgba(0, 0, 0, 0.12)'
      } : {
        primary: {
          main: '#2196f3',
          light: '#42a5f5',
          dark: '#1976d2'
        },
        secondary: {
          main: '#90caf9',
          light: '#bbdefb',
          dark: '#42a5f5'
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e'
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0'
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        action: {
          hover: 'rgba(255, 255, 255, 0.08)',
          selected: 'rgba(255, 255, 255, 0.16)'
        }
      })
    },
    typography: {
      fontFamily: 'Poppins, sans-serif'
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            ...(mode === 'dark' && {
              backgroundColor: '#1e1e1e',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
            })
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              ...(mode === 'dark' && {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.23)'
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.4)'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2196f3'
                }
              })
            }
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            ...(mode === 'dark' && {
              borderColor: 'rgba(255, 255, 255, 0.23)'
            })
          }
        }
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            ...(mode === 'dark' && {
              borderColor: 'rgba(255, 255, 255, 0.12)'
            })
          }
        }
      }
    }
  });
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: {
      mode,
      toggleTheme
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default), children));
};

// ============================================================================
// NotificationProvider
// ============================================================================
const NotificationContext = /*#__PURE__*/(0, _react.createContext)();
let globalConnection = null;
let globalUserId = null;
let globalIsInitialized = false;
function useNotifications() {
  const context = (0, _react.useContext)(NotificationContext);
  if (!context) {
    return {
      notifications: [],
      unreadCount: 0,
      isConnected: false,
      markAsRead: () => {},
      markAllAsRead: () => {},
      deleteNotification: () => {},
      clearAll: () => {},
      refresh: () => {}
    };
  }
  return context;
}
function NotificationProvider(_ref2) {
  let {
    children,
    currentUser,
    apiService
  } = _ref2;
  const [notifications, setNotifications] = (0, _react.useState)([]);
  const [unreadCount, setUnreadCount] = (0, _react.useState)(0);
  const [isConnected, setIsConnected] = (0, _react.useState)(false);
  const markAsRead = (0, _react.useCallback)(async notificationId => {
    try {
      await apiService().post('/Notification/MarkAsRead', {
        notificationId
      });
      setNotifications(prev => prev.map(n => n.id === notificationId ? {
        ...n,
        isRead: true,
        readAt: new Date()
      } : n));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  }, [apiService]);
  const markAllAsRead = (0, _react.useCallback)(async () => {
    try {
      await apiService().post('/Notification/MarkAllAsRead');
      setNotifications(prev => prev.map(n => ({
        ...n,
        isRead: true,
        readAt: new Date()
      })));
      setUnreadCount(0);
    } catch (err) {
      console.error('Failed to mark all as read:', err);
    }
  }, [apiService]);
  const deleteNotification = (0, _react.useCallback)(async notificationId => {
    try {
      await apiService().delete(`/Notification/DeleteNotification?id=${notificationId}`);
      setNotifications(prev => {
        const notification = prev.find(n => n.id === notificationId);
        if (notification && !notification.isRead) {
          setUnreadCount(count => Math.max(0, count - 1));
        }
        return prev.filter(n => n.id !== notificationId);
      });
    } catch (err) {
      console.error('Failed to delete notification:', err);
    }
  }, [apiService]);
  const clearAll = (0, _react.useCallback)(async () => {
    try {
      await apiService().delete('/Notification/ClearAllNotifications');
      setNotifications([]);
      setUnreadCount(0);
    } catch (err) {
      console.error('Failed to clear notifications:', err);
    }
  }, [apiService]);
  const fetchNotifications = (0, _react.useCallback)(async () => {
    try {
      const [notifResponse, countResponse] = await Promise.all([apiService().get('/Notification/GetNotifications?unreadOnly=false&take=50'), apiService().get('/Notification/GetUnreadCount')]);
      if (notifResponse.status === 200) {
        setNotifications(notifResponse.data);
      }
      if (countResponse.status === 200) {
        setUnreadCount(countResponse.data.count);
      }
    } catch (err) {
      console.error('Failed to fetch notifications:', err);
    }
  }, [apiService]);
  (0, _react.useEffect)(() => {
    const userId = currentUser?.id;
    if (!userId) return;
    const fetchData = async () => {
      try {
        const [notifResponse, countResponse] = await Promise.all([apiService().get('/Notification/GetNotifications?unreadOnly=false&take=50'), apiService().get('/Notification/GetUnreadCount')]);
        if (notifResponse.status === 200) {
          setNotifications(notifResponse.data);
        }
        if (countResponse.status === 200) {
          setUnreadCount(countResponse.data.count);
        }
      } catch (err) {
        console.error('Failed to fetch notifications:', err);
      }
    };
    if (globalIsInitialized && globalUserId === userId && globalConnection) {
      setIsConnected(globalConnection.state === 'Connected');
      fetchData();
      return;
    }
    if (globalConnection && globalUserId !== userId) {
      globalConnection.stop();
      globalConnection = null;
      globalIsInitialized = false;
    }
    globalUserId = userId;
    globalIsInitialized = true;
    const apiBaseUrl = process.env.apiUri || 'http://localhost:54218';
    const hubUrl = `${apiBaseUrl}/notifications`;

    // Get access token for SignalR authentication
    const accessToken = _jsCookie.default.get('access_token') || '';
    const connection = new _signalr.HubConnectionBuilder().withUrl(hubUrl, {
      accessTokenFactory: () => accessToken,
      transport: _signalr.HttpTransportType.WebSockets | _signalr.HttpTransportType.LongPolling
    }).withAutomaticReconnect([0, 2000, 5000, 10000, 30000]).configureLogging(_signalr.LogLevel.Warning).build();
    globalConnection = connection;
    connection.on('OnNotificationReceived', notification => {
      setNotifications(prev => [notification, ...prev]);
      setUnreadCount(prev => prev + 1);
      const description = notification.message || notification.categoryName || '';
      _reactToastify.toast.info(/*#__PURE__*/_react.default.createElement('div', null, /*#__PURE__*/_react.default.createElement('strong', null, notification.title), description && /*#__PURE__*/_react.default.createElement('div', {
        style: {
          fontSize: '0.9em',
          marginTop: '4px'
        }
      }, description)), {
        onClick: () => {
          if (notification.linkUrl) {
            window.location.href = notification.linkUrl;
          }
        }
      });
    });
    connection.onreconnecting(() => setIsConnected(false));
    connection.onreconnected(() => {
      setIsConnected(true);
      fetchData();
    });
    connection.onclose(() => setIsConnected(false));
    const startConnection = async () => {
      try {
        await connection.start();
        setIsConnected(true);
        await connection.invoke('JoinUserNotifications', userId);
        if (currentUser?.companyId) {
          await connection.invoke('JoinCompanyNotifications', currentUser.companyId);
        }
        if (currentUser?.locationId) {
          await connection.invoke('JoinLocationNotifications', currentUser.locationId);
        }
        await fetchData();
      } catch (err) {
        console.error('Failed to connect to NotificationHub:', err.message);
        await fetchData();
      }
    };
    startConnection();
  }, [currentUser?.id, currentUser?.companyId, currentUser?.locationId, apiService]);
  const value = {
    notifications,
    unreadCount,
    isConnected,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAll,
    refresh: fetchNotifications
  };
  return /*#__PURE__*/_react.default.createElement(NotificationContext.Provider, {
    value
  }, children);
}

// ============================================================================
// User Helpers
// ============================================================================
function ensureUserHelpers(u) {
  if (!u || typeof u !== "object") return u;
  if (typeof u.hasRole === "function" && typeof u.hasRoleId === "function" && typeof u.hasPermission === "function") {
    return u;
  }
  const rolesArr = Array.isArray(u.roles) ? u.roles : [];
  const permsArr = Array.isArray(u.permissions) ? u.permissions : [];
  Object.defineProperty(u, "hasRole", {
    value: function hasRole(name) {
      if (!name) return false;
      return rolesArr.some(r => r?.name === name);
    },
    writable: false
  });
  Object.defineProperty(u, "hasRoleId", {
    value: function hasRoleId(id) {
      if (id === undefined || id === null) return false;
      return rolesArr.some(r => r?.id === id);
    },
    writable: false
  });
  Object.defineProperty(u, "hasPermission", {
    value: function hasPermission(name) {
      if (!name) return false;
      return permsArr.includes(name);
    },
    writable: false
  });
  return u;
}

// ============================================================================
// AuthScapeApp Component
// ============================================================================
function AuthScapeApp(_ref3) {
  let {
    Component,
    layout,
    loadingLayout,
    signInLoadingComponent,
    pageProps,
    muiTheme = null,
    store = {},
    enforceLoggedIn = false,
    enableAuth = true,
    enableNotifications = true,
    enableErrorTracking = true,
    toastConfig = {},
    onUserLoaded = null
  } = _ref3;
  const [frontEndLoadedState, setFrontEndLoadedState] = (0, _react.useState)(false);
  const [isLoadingShow, setIsLoadingShow] = (0, _react.useState)(false);
  const [signedInUserState, setSignedInUserState] = (0, _react.useState)(null);
  const [isSigningIn, setIsSigningIn] = (0, _react.useState)(false);
  const loadingAuth = (0, _react.useRef)(false);
  const signedInUser = (0, _react.useRef)(null);
  const queryCodeUsed = (0, _react.useRef)(null);
  const ga4React = (0, _react.useRef)(null);
  const errorTrackingInitializedRef = (0, _react.useRef)(false);
  const loginRedirectPending = (0, _react.useRef)(false);
  const searchParams = (0, _navigation.useSearchParams)();
  const queryCode = searchParams?.get("code") ?? null;
  const pathname = (0, _navigation.usePathname)();
  const signInValidator = async codeFromQuery => {
    if (queryCodeUsed.current === codeFromQuery) return;
    queryCodeUsed.current = codeFromQuery;
    if (typeof window === "undefined") return;
    setIsSigningIn(true);
    const codeVerifier = window.localStorage.getItem("verifier");
    if (!codeFromQuery || !codeVerifier) {
      window.localStorage.clear();
      setIsSigningIn(false);
      setFrontEndLoadedState(true);
      return;
    }
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    const tokenBody = {
      code: codeFromQuery,
      grant_type: "authorization_code",
      redirect_uri: window.location.origin + "/signin-oidc",
      client_id: process.env.client_id,
      code_verifier: codeVerifier
    };
    // Only confidential clients send a secret; public SPA clients (e.g. Keycloak) must not.
    if (process.env.client_secret) {
      tokenBody.client_secret = process.env.client_secret;
    }
    const body = _queryString.default.stringify(tokenBody);
    try {
      // Resolve the token endpoint from OIDC discovery so the code exchange works against either
      // provider (OpenIddict's /connect/token or Keycloak's /protocol/openid-connect/token).
      let oidc = typeof window !== "undefined" && window.__authscape_oidc || null;
      if (!oidc) {
        const discoveryRes = await fetch(process.env.authorityUri.replace(/\/$/, "") + "/.well-known/openid-configuration");
        oidc = await discoveryRes.json();
        if (typeof window !== "undefined") window.__authscape_oidc = oidc;
      }
      const response = await _axios.default.post(oidc.token_endpoint, body, {
        headers
      });

      // Omit Domain on localhost/IP — browsers reject Domain=localhost, so the auth cookies would
      // never persist and sign-in would loop forever. Real hosts still get the registrable domain.
      const domainHost = (h => h === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(h) || !h.includes(".") ? undefined : h.split(".").slice(-2).join("."))(window.location.hostname);
      window.localStorage.removeItem("verifier");
      _jsCookie.default.set("access_token", response.data.access_token, {
        expires: 365,
        path: "/",
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });
      _jsCookie.default.set("expires_in", String(response.data.expires_in), {
        expires: 365,
        path: "/",
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });
      _jsCookie.default.set("refresh_token", response.data.refresh_token, {
        expires: 365,
        path: "/",
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });
      resetRedirectCounter();
      const redirectUri = window.localStorage.getItem("redirectUri") || "/";
      window.localStorage.clear();

      // Pre-load user while spinner is still showing — eliminates the
      // second GetCurrentUser call (and resulting re-renders) on the destination page.
      let usr = null;
      try {
        usr = await apiService().GetCurrentUser();
      } catch (fetchErr) {
        console.warn("[AuthScape] GetCurrentUser failed after token exchange:", fetchErr);
      }
      const enrichedUser = ensureUserHelpers(usr);
      signedInUser.current = enrichedUser;
      setSignedInUserState(enrichedUser);
      setFrontEndLoadedState(true);

      // Prevent the useEffect from calling GetCurrentUser again when queryCode → null.
      loadingAuth.current = true;
      if (enableErrorTracking && enrichedUser && !errorTrackingInitializedRef.current) {
        initializeErrorTracking(enrichedUser);
        errorTrackingInitializedRef.current = true;
      }
      if (onUserLoaded && enrichedUser) {
        onUserLoaded(enrichedUser);
      }

      // Dismiss spinner before navigating so destination renders logged-in UI on first paint.
      setIsSigningIn(false);

      // Client-side navigation preserves the React component tree and all ref values,
      // eliminating the hard-reload → remount → re-render chain.
      // Fall back to hard navigation for absolute external URLs.
      if (redirectUri.startsWith("http://") || redirectUri.startsWith("https://")) {
        window.location.href = redirectUri;
      } else {
        _router.default.push(redirectUri);
      }
    } catch (exp) {
      console.error("PKCE sign-in failed", exp);
      window.localStorage.clear();
      setIsSigningIn(false);
      setFrontEndLoadedState(true);
    }
  };
  async function initGA(G) {
    if (typeof window !== "undefined" && !_ga4React.default.isInitialized() && G) {
      ga4React.current = new _ga4React.default(G, {
        debug_mode: !process.env.production
      });
      try {
        await ga4React.current.initialize();
      } catch (error) {
        console.error(error);
      }
    }
  }
  const logEvent = (category, action, label) => {
    if (ga4React.current) ga4React.current.event(action, label, category);
  };
  const databaseDrivenPageView = pathName => {
    if (process.env.enableDatabaseAnalytics !== "true") return;
    if (typeof window === "undefined") return;
    if (pathName === "/signin-oidc") return;
    const host = window.location.protocol + "//" + window.location.host;
    apiService().post("/Analytics/PageView", {
      userId: signedInUser.current?.id,
      locationId: signedInUser.current?.locationId,
      companyId: signedInUser.current?.companyId,
      uri: pathName,
      host
    });
  };
  (0, _react.useEffect)(() => {
    if (queryCode) {
      signInValidator(queryCode);
      return;
    }
    if (!loadingAuth.current) {
      loadingAuth.current = true;
      if (enableAuth) {
        apiService().GetCurrentUser().then(usr => {
          signedInUser.current = ensureUserHelpers(usr);
          setSignedInUserState(signedInUser.current);
          setFrontEndLoadedState(true);

          // Initialize error tracking with user info
          if (enableErrorTracking && usr && !errorTrackingInitializedRef.current) {
            initializeErrorTracking(usr);
            errorTrackingInitializedRef.current = true;
          }
          if (onUserLoaded && usr) {
            onUserLoaded(usr);
          }
        }).catch(err => {
          signedInUser.current = null;
          setSignedInUserState(null);
          setFrontEndLoadedState(true);
        });
      } else {
        setFrontEndLoadedState(true);
      }
    }
  }, [queryCode, enableAuth, enableErrorTracking]);
  (0, _react.useEffect)(() => {
    if (!frontEndLoadedState || typeof window === "undefined") return;
    if (pageProps.googleAnalytics4Code) {
      initGA(pageProps.googleAnalytics4Code);
    } else if (process.env.googleAnalytics4) {
      initGA(process.env.googleAnalytics4);
    }
    if (pageProps.microsoftClarityCode) {
      _reactMicrosoftClarity.clarity.init(pageProps.microsoftClarityCode);
    } else if (process.env.microsoftClarityTrackingCode) {
      _reactMicrosoftClarity.clarity.init(process.env.microsoftClarityTrackingCode);
    }
    databaseDrivenPageView(window.location.pathname);
    const handler = url => {
      ga4React.current?.pageview(url);
      databaseDrivenPageView(url);
    };
    _router.default.events.on("routeChangeComplete", handler);
    return () => _router.default.events.off("routeChangeComplete", handler);
  }, [frontEndLoadedState, pageProps.googleAnalytics4Code, pageProps.microsoftClarityCode]);
  (0, _react.useEffect)(() => {
    if (enforceLoggedIn && pathname !== "/signin-oidc" && frontEndLoadedState && !signedInUserState && !loginRedirectPending.current) {
      if (!checkAndIncrementRedirect()) {
        console.warn('[AuthScape] Auth redirect loop detected — halting redirects.');
        return;
      }
      loginRedirectPending.current = true;
      authService().login();
    }
  }, [signedInUserState, enforceLoggedIn, frontEndLoadedState, pathname]);
  const currentUser = (0, _react.useMemo)(() => ensureUserHelpers(signedInUser.current), [signedInUserState]);
  const useStore = (0, _zustand.create)(() => store);
  const defaultSignInLoading = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#f5f5f5'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      border: '4px solid #e0e0e0',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginTop: '16px',
      color: '#666'
    }
  }, "Signing in..."), /*#__PURE__*/_react.default.createElement("style", null, `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `));
  if (isSigningIn) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
    })), /*#__PURE__*/_react.default.createElement(AppThemeProvider, {
      customTheme: muiTheme
    }, signInLoadingComponent || defaultSignInLoading));
  }
  const defaultToastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "colored",
    ...toastConfig
  };
  const pageContent = layout ? layout({
    children: /*#__PURE__*/_react.default.createElement(Component, babelHelpers.extends({}, pageProps, {
      currentUser: currentUser,
      loadedUser: frontEndLoadedState,
      setIsLoading: setIsLoadingShow,
      logEvent: logEvent,
      store: useStore,
      toast: _reactToastify.toast
    })),
    currentUser,
    setIsLoading: setIsLoadingShow,
    logEvent,
    toast: _reactToastify.toast,
    store: useStore,
    pageProps
  }) : /*#__PURE__*/_react.default.createElement(Component, babelHelpers.extends({}, pageProps, {
    currentUser: currentUser,
    loadedUser: frontEndLoadedState,
    setIsLoading: setIsLoadingShow,
    logEvent: logEvent,
    store: useStore,
    toast: _reactToastify.toast
  }));
  const wrappedContent = enableNotifications && currentUser ? /*#__PURE__*/_react.default.createElement(NotificationProvider, {
    currentUser: currentUser,
    apiService: apiService
  }, pageContent) : pageContent;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
  })), /*#__PURE__*/_react.default.createElement(AppThemeProvider, {
    customTheme: muiTheme
  }, wrappedContent), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, defaultToastConfig), loadingLayout && loadingLayout(isLoadingShow));
}

// AuthScapeProvider is the umbrella component that bundles the three always-on AuthScape
// features (auth, error tracking, analytics) plus optional in-app notifications. Wrap your
// NextJS _app.js return value with it. Existing call sites can continue using AuthScapeApp.
const AuthScapeProvider = exports.AuthScapeProvider = AuthScapeApp;

// ===== src/components/AutoSaveTextField.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoSaveTextField = AutoSaveTextField;
var _react = _interopRequireWildcard(require("react"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
function AutoSaveTextField(_ref) {
  let {
    label = "",
    value = null,
    variant = "outlined",
    timeout = 2000,
    isMultiLine = false,
    rows = 1,
    fullWidth = false,
    onChanged = null
  } = _ref;
  const [text, setText] = (0, _react.useState)(value);
  const [isComponentMounted, setComponentMounted] = (0, _react.useState)(false);
  const [isFirstLoaded, setIsFirstLoaded] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    // Set the componentMounted flag to true after the initial render
    if (!isComponentMounted) {
      setComponentMounted(true);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (isComponentMounted && text != null) {
      if (isFirstLoaded) {
        // Simulate saving text to a server or any storage mechanism
        // In a real-world scenario, you would send a request to a server to save the text
        // For this example, we'll just update the savedText state after 2 seconds
        const saveTimeout = setTimeout(() => {
          if (onChanged != null) {
            onChanged(text);
          }
        }, timeout);

        // Clean up the timeout to avoid unnecessary saves if the text changes again
        return () => clearTimeout(saveTimeout);
      }
      setIsFirstLoaded(true);
    }
  }, [text, isComponentMounted]);
  const handleTextChange = event => {
    const newText = event.target.value;
    setText(newText);
  };
  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    label: label,
    fullWidth: fullWidth,
    autoComplete: "off",
    variant: variant,
    multiline: isMultiLine,
    rows: rows,
    value: text,
    onChange: handleTextChange
  });
}
;

// ===== src/components/ColorPicker.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPicker = ColorPicker;
var _react = _interopRequireWildcard(require("react"));
var _reactColor = require("react-color");
var _reactcss = babelHelpers.interopRequireDefault(require("reactcss"));
function ColorPicker(_ref) {
  let {
    name,
    defaultColor,
    onColorChanged
  } = _ref;
  const [rgbColor, setColor] = (0, _react.useState)(null);
  const [displayColorPicker, setDisplayColorPicker] = (0, _react.useState)(false);
  const [completedColor, setCompletedColor] = (0, _react.useState)(null);
  const [timeoutToken, setTimeoutToken] = (0, _react.useState)(null);
  const styles = (0, _reactcss.default)({
    'default': {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: rgbColor != null ? `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${rgbColor.a})` : defaultColor
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer'
      },
      popover: {
        position: 'absolute',
        zIndex: '2'
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    }
  });
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };
  const handleClose = () => {
    setDisplayColorPicker(false);
  };
  const handleChange = color => {
    setColor(color.rgb);
  };
  (0, _react.useEffect)(() => {
    if (!displayColorPicker && completedColor != null) {
      clearTimeout(timeoutToken);
      setTimeoutToken(setTimeout(() => {
        onColorChanged(name, completedColor);
      }, 500));
    }
    if (!displayColorPicker && completedColor == null && defaultColor != null) {
      setColor(defaultColor);
    }
  }, [displayColorPicker, completedColor, defaultColor]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: styles.swatch,
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: styles.color
  })), displayColorPicker ? /*#__PURE__*/_react.default.createElement("div", {
    style: styles.popover
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: styles.cover,
    onClick: handleClose
  }), /*#__PURE__*/_react.default.createElement(_reactColor.SketchPicker, {
    color: rgbColor != null ? rgbColor : "#fff",
    onChange: handleChange,
    onChangeComplete: () => {
      setCompletedColor(`rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${rgbColor.a})`);
    }
  })) : null);
}

// ===== src/components/Datatable.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datatable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDataTableComponent = _interopRequireWildcard(require("react-data-table-component"));
//import {apiService} from 'authscape';

class Datatable extends _react.Component {
  static defaultProps = {
    options: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      pageLength: props.pageLength ? props.pageLength : 10,
      data: [],
      loading: false,
      totalRows: 0
    };
  }
  componentDidMount = async () => {
    await this.GetDataFromUrl(this.state.pageNumber, this.state.pageLength, this.props.params);
    (0, _reactDataTableComponent.createTheme)('dataTable', {
      text: {}
    });
  };
  reload = (() => {
    var _this = this;
    return async function () {
      let reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (reset === true) {
        _this.setState({
          pageNumber: 1
        }, async () => {
          await _this.GetDataFromUrl(_this.state.pageNumber, _this.state.pageLength, _this.props.params);
        });
      } else {
        await _this.GetDataFromUrl(_this.state.pageNumber, _this.state.pageLength, _this.props.params);
      }
    };
  })();
  GetDataFromUrl = (() => {
    var _this2 = this;
    return function (page, length) {
      let postData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      _this2.setState({
        loading: true
      }, async function () {
        let data = postData;
        data.offset = page;
        data.length = length;
        let response = null;
        if (this.props.methodType == "get") {
          response = await apiService().get(this.props.url);
        } else {
          response = await apiService().post(this.props.url, postData);
        }
        if (response != null && response.status === 200) {
          if (this.props.returnResult != null) {
            this.props.returnResult(response.data.data);
          }
          this.setState({
            totalRows: response.data.recordsTotal,
            data: response.data.data,
            loading: false
          });
        } else {
          //console.error(response.status + " - " + response.data);
        }
      });
    };
  })();
  handlePageChange = async page => {
    const {
      pageLength
    } = this.state;
    this.setState({
      pageNumber: page
    });
    await this.GetDataFromUrl(page, pageLength, this.props.params);
  };
  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactDataTableComponent.default, babelHelpers.extends({
      title: this.props.title,
      columns: this.props.columns,
      data: this.state.data,
      paginationRowsPerPageOptions: this.props.pageLength ? [this.props.pageLength] : [10],
      progressPending: this.state.loading
      //customStyles={this.props.customStyles}
      ,

      paginationPerPage: this.props.pageLength ? this.props.pageLength : 10,
      paginationServer: true,
      pagination: true
    }, this.props.options, {
      //expandableRows={this.props.expandableRows}
      //expandableRowsComponent={this.props.expandableRowsComponent}
      paginationTotalRows: this.state.totalRows
      // onChangeRowsPerPage={this.handlePerRowsChange}
      ,

      onChangePage: this.handlePageChange,
      noDataComponent: this.props.noDataComponent
    })));
  }
}
exports.Datatable = Datatable;

// ===== src/components/DocumentManager.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentManager = void 0;
var _material = require("@mui/material");
var _react = _interopRequireWildcard(require("react"));
var _AddRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/AddRounded"));
var _DeleteRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/DeleteRounded"));
var _Folder = babelHelpers.interopRequireDefault(require("@mui/icons-material/Folder"));
var _InsertDriveFile = babelHelpers.interopRequireDefault(require("@mui/icons-material/InsertDriveFile"));
var _styles = require("@mui/material/styles");
var _Menu = babelHelpers.interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _Divider = babelHelpers.interopRequireDefault(require("@mui/material/Divider"));
var _KeyboardArrowDown = babelHelpers.interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));
var _InsertDriveFileOutlined = babelHelpers.interopRequireDefault(require("@mui/icons-material/InsertDriveFileOutlined"));
var _Breadcrumbs = babelHelpers.interopRequireDefault(require("@mui/material/Breadcrumbs"));
var _Link = babelHelpers.interopRequireDefault(require("@mui/material/Link"));
var _PublishRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/PublishRounded"));
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = babelHelpers.interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _LockRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/LockRounded"));
var _Tooltip = babelHelpers.interopRequireDefault(require("@mui/material/Tooltip"));
// remove before merging back
// import { FileUploader, apiService, NextImage } from 'authscape';

const DocumentManager = _ref => {
  let {
    loadedUser,
    setIsLoading,
    viewDocumentType = 1,
    disablePreview = false,
    openToFolderId = null,
    xs = 12,
    sm = 6,
    md = 4,
    lg = 2,
    overrideLockMessage = "The directory cannot be removed.",
    zeroStateView = null,
    fieldId1 = null,
    fieldId2 = null,
    fieldId3 = null
  } = _ref;
  const fileUploaderRef = (0, _react.useRef)();
  const [files, setFiles] = (0, _react.useState)(null);
  const [update, setUpdate] = (0, _react.useState)(false);
  const [folderParent, setFolderParent] = (0, _react.useState)(null);
  const [masterFolder, setMasterFolder] = (0, _react.useState)(null);
  const [breadCrumb, setBreadCrumb] = (0, _react.useState)([]);
  const [uploadParentId, setUploadParentId] = (0, _react.useState)(null);
  const [contextMenu, setContextMenu] = (0, _react.useState)(null);
  const [contextFile, setContextFile] = (0, _react.useState)(null);
  const [dialogDelete, setDialogDelete] = (0, _react.useState)(false);
  const handleContextMenu = (event, file) => {
    event.preventDefault();
    setContextFile(file);
    if (!file.isLocked) {
      setContextMenu(contextMenu === null ? {
        mouseX: event.clientX + 2,
        mouseY: event.clientY - 6
      } :
      // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
      // Other native context menus might behave different.
      // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
      null);
    }
  };
  (0, _react.useEffect)(() => {
    if (loadedUser) {
      const fetchDocuments = async () => {
        let folderId = null;
        if (folderParent == null && openToFolderId != null) {
          folderId = openToFolderId;
          // should get the current document...

          let folderResponse = await apiService().get("/Document/GetDocumentByFolderId?folderId=" + folderId);
          if (folderResponse != null && folderResponse.status == 200) {
            setFolderParent(folderResponse.data);
            setMasterFolder(folderResponse.data);
            folderId = folderResponse.id;
          }
        } else if (folderParent != null) {
          folderId = folderParent.id;
        }
        setUploadParentId(folderId);
        let params = "";
        if (fieldId1 != null) {
          params = "&fieldId1=" + fieldId1;
        }
        if (fieldId2 != null) {
          params = "&fieldId2=" + fieldId2;
        }
        if (fieldId3 != null) {
          params = "&fieldId3=" + fieldId3;
        }
        if (folderId != null) {
          let response = await apiService().get("/Document/GetDocumentsAndFiles?parentFolderId=" + folderId + "&ViewDocumentType=" + viewDocumentType + params);
          if (response != null && response.status == 200) {
            // setTimeout(() => {
            setFiles(response.data);
            // }, 500);
          }
        } else {
          let response = await apiService().get("/Document/GetDocumentsAndFiles?ViewDocumentType=" + viewDocumentType + params);
          if (response != null && response.status == 200) {
            setFiles(response.data);
          }
        }
      };
      fetchDocuments();
    }
  }, [loadedUser, folderParent, update]);
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setContextMenu(null);
  };
  const StyledMenu = (0, _styles.styled)(props => /*#__PURE__*/_react.default.createElement(_Menu.default, babelHelpers.extends({
    elevation: 0,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    }
  }, props)))(_ref2 => {
    let {
      theme
    } = _ref2;
    return {
      '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
          padding: '4px 0'
        },
        '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5)
          },
          '&:active': {
            backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
          }
        }
      }
    };
  });
  const handleFileClick = async function (file) {
    let addToBread = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (file.type == "folder") {
      setFolderParent(file);
      if (addToBread) {
        let newBC = [...breadCrumb];
        newBC.push(file);
        setBreadCrumb(newBC);
      } else {
        let newList = [];
        let hasBeenFound = false;
        for (let index = 0; index < breadCrumb.length; index++) {
          const element = breadCrumb[index];
          if (element.id == file.id) {
            hasBeenFound = true;
            newList.push(element);
            break;
          }
          if (!hasBeenFound) {
            newList.push(element);
          }
        }
        setBreadCrumb(newList);
      }
    } else {
      setIsLoading(true);
      await apiService().DownloadFile("/Document/DownloadDocument?documentId=" + file.id + "&ViewDocumentType=" + viewDocumentType, file.name, () => {
        setIsLoading(false);
      });
    }
  };
  const dialogDeleteClosed = () => {
    setContextFile(null);
    setContextMenu(null);
    setDialogDelete(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      flexGrow: 1
    }
  }, (files != null && files.documentSegments.length == 0 || folderParent != null) && /*#__PURE__*/_react.default.createElement(_material.AppBar, {
    position: "static",
    color: "inherit",
    elevation: 0
  }, /*#__PURE__*/_react.default.createElement(_material.Toolbar, null, /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    id: "demo-customized-button",
    "aria-controls": open ? 'demo-customized-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    variant: "contained",
    disableElevation: true,
    onClick: async () => {
      let newDocumentName = prompt("New folder name");
      if (newDocumentName != null && newDocumentName != "") {
        let response = await apiService().post("/Document/CreateFolder", {
          folderName: newDocumentName,
          parentFolderId: folderParent != null ? folderParent.id : null,
          viewDocumentType: viewDocumentType
        });
        if (response != null && response.status == 200) {
          // refresh
          setUpdate(!update);
        }
      }
    },
    startIcon: /*#__PURE__*/_react.default.createElement(_InsertDriveFile.default, null)
  }, "New Folder")), (files != null && files.documentSegments.length == 0 || folderParent != null) && /*#__PURE__*/_react.default.createElement(FileUploader, {
    refOveride: fileUploaderRef,
    url: "/Document/UploadFile",
    params: {
      viewType: viewDocumentType,
      parentFolderId: uploadParentId
    },
    multiple: true,
    variant: "custom",
    onUploadCompleted: () => {
      setUpdate(!update);
      handleClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    id: "FileUploader",
    "aria-controls": open ? 'demo-customized-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    variant: "text",
    disableElevation: true,
    startIcon: /*#__PURE__*/_react.default.createElement(_PublishRounded.default, null),
    sx: {
      marginLeft: 1
    }
  }, "Upload File(s)")))), /*#__PURE__*/_react.default.createElement(_Divider.default, null), /*#__PURE__*/_react.default.createElement(_Breadcrumbs.default, {
    "aria-label": "breadcrumb",
    separator: ">",
    sx: {
      marginLeft: 1,
      marginBottom: 2,
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    underline: "hover",
    color: "inherit",
    sx: {
      cursor: "pointer",
      fontWeight: "bold"
    },
    onClick: () => {
      setFolderParent(null);
      setBreadCrumb([]);
    }
  }, masterFolder == null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "My Files"), masterFolder != null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, masterFolder.name)), breadCrumb.map((bread, index) => {
    return /*#__PURE__*/_react.default.createElement(_Link.default, {
      key: index,
      underline: "hover",
      sx: {
        cursor: "pointer"
      },
      color: "inherit",
      onClick: () => {
        handleFileClick(bread, false);
      }
    }, bread.name);
  }))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      height: "85vh",
      width: '100%'
    }
  }, files != null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, masterFolder == null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, files.documentSegments.length > 0 && folderParent == null && files.documentSegments.map((segment, index) => /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      paddingTop: 3
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "h6",
    gutterBottom: true
  }, segment.name), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, files.documentAndFiles.filter(item => item.segmentId == segment.id).map((file, index) => /*#__PURE__*/_react.default.createElement(_material.Grid, {
    onContextMenu: event => {
      handleContextMenu(event, file);
    },
    item: true,
    key: index,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    onClick: () => handleFileClick(file)
  }, /*#__PURE__*/_react.default.createElement(_material.Paper, {
    sx: {
      padding: 2,
      flexDirection: 'column',
      height: "100%",
      display: "flex",
      alignItems: "center",
      cursor: 'pointer',
      maxHeight: 300,
      position: "relative",
      '&:hover': {
        backgroundColor: '#F5F5F5'
      }
    }
  }, file.type === 'folder' && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      position: "absolute",
      top: 45,
      color: "white"
    }
  }, file.count), file.isLocked && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      position: "absolute",
      top: 10,
      right: 10,
      color: "black"
    }
  }, /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: overrideLockMessage
  }, /*#__PURE__*/_react.default.createElement(_LockRounded.default, null))), file.type === 'folder' ? /*#__PURE__*/_react.default.createElement(_Folder.default, {
    sx: {
      fontSize: 80,
      color: "orange"
    }
  }) : file.documentFileExtentionType == 0 || disablePreview ? /*#__PURE__*/_react.default.createElement(_InsertDriveFileOutlined.default, {
    sx: {
      fontSize: 60
    }
  }) : /*#__PURE__*/_react.default.createElement(NextImage, {
    src: file.uri,
    alt: "Image",
    width: 80,
    height: 80
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle1",
    sx: {
      paddingTop: 1,
      fontSize: 14
    }
  }, file.name), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle2",
    sx: {
      paddingTop: 0,
      fontSize: 11
    }
  }, file.lastUpdated))))), files != null && files.documentAndFiles != null && zeroStateView != null && /*#__PURE__*/_react.default.createElement(_material.Box, null, zeroStateView(segment, files.documentAndFiles))))), (files.documentSegments.length == 0 || folderParent != null) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, files.documentAndFiles.map((file, index) => /*#__PURE__*/_react.default.createElement(_material.Grid, {
    onContextMenu: event => {
      handleContextMenu(event, file);
    },
    item: true,
    key: index,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    onClick: () => handleFileClick(file)
  }, /*#__PURE__*/_react.default.createElement(_material.Paper, {
    sx: {
      padding: 2,
      flexDirection: 'column',
      height: "100%",
      display: "flex",
      alignItems: "center",
      cursor: 'pointer',
      maxHeight: 300,
      position: "relative",
      '&:hover': {
        backgroundColor: '#F5F5F5'
      }
    }
  }, file.type === 'folder' && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      position: "absolute",
      top: 45,
      color: "white"
    }
  }, file.count), file.isLocked && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      position: "absolute",
      top: 10,
      right: 10,
      color: "black"
    }
  }, /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: overrideLockMessage
  }, /*#__PURE__*/_react.default.createElement(_LockRounded.default, null))), file.type === 'folder' ? /*#__PURE__*/_react.default.createElement(_Folder.default, {
    sx: {
      fontSize: 80,
      color: "orange"
    }
  }) : file.documentFileExtentionType == 0 || disablePreview ? /*#__PURE__*/_react.default.createElement(_InsertDriveFileOutlined.default, {
    sx: {
      fontSize: 60
    }
  }) : /*#__PURE__*/_react.default.createElement(NextImage, {
    src: file.uri,
    alt: "Image",
    width: 80,
    height: 80
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle1",
    sx: {
      paddingTop: 1,
      fontSize: 14
    }
  }, file.name), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle2",
    sx: {
      paddingTop: 0,
      fontSize: 11
    }
  }, file.lastUpdated))))), files != null && files.documentAndFiles != null && zeroStateView != null && /*#__PURE__*/_react.default.createElement(_material.Box, null, zeroStateView()))), /*#__PURE__*/_react.default.createElement(_Menu.default, {
    open: contextMenu !== null,
    onClose: handleClose,
    anchorReference: "anchorPosition",
    anchorPosition: contextMenu !== null ? {
      top: contextMenu.mouseY,
      left: contextMenu.mouseX
    } : undefined
  }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_DeleteRounded.default, null),
    onClick: () => {
      setDialogDelete(true);
      handleClose();
    }
  }, "Delete"))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: dialogDelete,
    onClose: () => {
      dialogDeleteClosed();
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Are you sure you wan to delete ", contextFile != null ? contextFile.name : "", "?"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, contextFile != null && contextFile.type != null && contextFile.type == 'folder' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "If you delete ", contextFile != null ? contextFile.name : "", ", you will delete all files and folders within  ", contextFile != null ? contextFile.name : "", "."), contextFile != null && contextFile.type != null && contextFile.type != 'folder' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "If you delete ", contextFile != null ? contextFile.name : "", " this file will be gone forever."))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => {
      dialogDeleteClosed();
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: async () => {
      dialogDeleteClosed();
      if (contextFile.type == "folder") {
        let response = await apiService().delete("/Document/DeleteFolder?documentId=" + contextFile.id);
        if (response != null && response.status == 200) {
          setUpdate(!update);
        }
      } else {
        let response = await apiService().delete("/Document/DeleteFile?documentId=" + contextFile.id);
        if (response != null && response.status == 200) {
          setUpdate(!update);
        }
      }
    },
    autoFocus: true
  }, "Delete"))));
};
exports.DocumentManager = DocumentManager;

// ===== src/components/EditableDatagrid.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableDatagrid = void 0;
var _react = _interopRequireWildcard(require("react"));
var _xDataGrid = require("@mui/x-data-grid");
var _Box = babelHelpers.interopRequireDefault(require("@mui/material/Box"));
const EditableDatagrid = _ref => {
  let {
    url = null,
    eRows = null,
    columns,
    isCellEditable = null,
    onCellClick = null,
    onCellEdited = null,
    params = null,
    sx = {},
    height = "50vh",
    pageSize = 50,
    rowsPerPage = [25, 50, 100],
    rowHeight = 70,
    key = null,
    onRowClick = null
  } = _ref;
  const [rows, setRows] = (0, _react.useState)([]);
  const [totalRows, setTotalRows] = (0, _react.useState)(0);
  // const [offset, setOffset] = useState(0);

  const [paginationModel, setPaginationModel] = _react.default.useState({
    page: 0,
    pageSize: pageSize
  });
  (0, _react.useEffect)(() => {
    reloadDataGrid();
  }, [paginationModel]);
  const reloadDataGrid = async () => {
    if (url != null) {
      let response = null;
      if (params == null) {
        response = await apiService().post(url, {
          offset: paginationModel.page,
          length: paginationModel.pageSize
        });
      } else {
        params.offset = paginationModel.page;
        params.length = paginationModel.pageSize;
        response = await apiService().post(url, params);
      }
      if (response != null && response.status == 200) {
        setTotalRows(response.data.recordsTotal);
        setRows(response.data.data);
      }
    } else if (rows != null) {
      setTotalRows(eRows.length);
      setRows(eRows);
    }
  };
  const handleCellEditCommit = _react.default.useCallback(() => async params => {
    const {
      id,
      field,
      value
    } = params;
    const editedRow = {
      id,
      field,
      value
    };
    onCellEdited(editedRow);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      height
    }
  }, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, {
    rows: rows,
    sx: sx,
    key: key,
    columns: columns,
    rowCount: totalRows,
    onRowClick: onRowClick,
    paginationMode: "server",
    pageSizeOptions: rowsPerPage,
    rowHeight: rowHeight,
    paginationModel: paginationModel,
    onPaginationModelChange: setPaginationModel,
    disableSelectionOnClick: true,
    onCellClick: onCellClick,
    onCellEditCommit: handleCellEditCommit(),
    isCellEditable: params => {
      if (isCellEditable != null) {
        isCellEditable(params);
      }
      return true;
    }
  }));
};
exports.EditableDatagrid = EditableDatagrid;

// ===== src/components/FileUploader.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUploader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _LinearProgress = babelHelpers.interopRequireDefault(require("@mui/material/LinearProgress"));
var _Box = babelHelpers.interopRequireDefault(require("@mui/system/Box"));
var _Grid = babelHelpers.interopRequireDefault(require("@mui/material/Grid"));
var _FileCopyRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/FileCopyRounded"));
var _UploadRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/UploadRounded"));
var _Typography = babelHelpers.interopRequireDefault(require("@mui/material/Typography"));
var _Stack = babelHelpers.interopRequireDefault(require("@mui/material/Stack"));
var _FileDownloadOutlined = babelHelpers.interopRequireDefault(require("@mui/icons-material/FileDownloadOutlined"));
var _IconButton = babelHelpers.interopRequireDefault(require("@mui/material/IconButton"));
var _Delete = babelHelpers.interopRequireDefault(require("@mui/icons-material/Delete"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = babelHelpers.interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _Tooltip = babelHelpers.interopRequireDefault(require("@mui/material/Tooltip"));
var _Backdrop = babelHelpers.interopRequireDefault(require("@mui/material/Backdrop"));
var _CircularProgress = babelHelpers.interopRequireDefault(require("@mui/material/CircularProgress"));
const FileUploader = _ref => {
  let {
    url,
    params,
    multiple = false,
    fileLoaderUri = null,
    children,
    isHidden = false,
    refOveride = null,
    primaryColor = "#000",
    onConfirmDelete = null,
    accept = "",
    variant = "filemanager",
    // custom vs filemanager
    onUploadCompleted = null
  } = _ref;
  // Declare a new state variable, which we'll call "count"
  const [message, setMessage] = (0, _react.useState)("");
  const [loaded, setLoaded] = (0, _react.useState)(0);
  // const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = (0, _react.useState)(false);
  const [viewDeleteDialog, setViewDeleteDialog] = (0, _react.useState)(false);
  const [filesUploaded, setFilesUploaded] = (0, _react.useState)([]);
  const [orderFileId, setOrderFileId] = (0, _react.useState)(null);
  const [filesDownloadable, setFilesDownloadable] = (0, _react.useState)(null);
  const [parameters, setParameters] = (0, _react.useState)([]);
  const fileUploader = (0, _react.useRef)();
  const handleUpload = async event => {
    let selectedFiles = event.target.files;
    setLoaded(0);
    setMessage(event.target.files[0] ? event.target.files[0].name : "");
    if (uploading) return;
    if (!selectedFiles) {
      setMessage("Select a file first");
      return;
    }
    setUploading(true);
    let fileCount = selectedFiles.length;
    let fileIndex = 1;
    let responses = [];
    for (let selectedIndex = 0; selectedIndex < selectedFiles.length; selectedIndex++) {
      const selectedFile = selectedFiles[selectedIndex];
      const data = new FormData();
      data.append("file", selectedFile, selectedFile.name);
      for (let index = 0; index < parameters.length; index++) {
        const element = parameters[index];
        data.append(element.key, element.value);
      }
      let response = null;
      try {
        response = await apiService().post(url, data, {
          onUploadProgress: ProgressEvent => {
            let loadedTotal = Math.round(ProgressEvent.loaded / ProgressEvent.total * 100);
            let percent = fileIndex / fileCount * 100;
            setLoaded(percent);
            if (percent == 100) {
              setTimeout(() => {
                setLoaded(0);
                setMessage("");
                reloadFiles();
              }, 2000);
            }
          }
        });
      } catch (err) {
        setUploading(false);
        setMessage("Failed to upload");
      }
      responses.push(response);
      fileIndex++;
    }
    if (onUploadCompleted != null) {
      onUploadCompleted(responses);
    }
    setUploading(false);
    setMessage("Uploaded successfully");
  };
  const handleUploadFileInput = () => {
    fileUploader.current.click();
  };
  (0, _react.useEffect)(() => {
    if (params != null) {
      const propertyNames = Object.keys(params);
      const propertyValues = Object.values(params);
      let array = [];
      for (let index = 0; index < propertyNames.length; index++) {
        if (propertyNames[index] != null && propertyValues[index] != null) {
          array.push({
            key: propertyNames[index],
            value: propertyValues[index]
          });
        }
      }
      setParameters(array);
    }
  }, [params]);
  const reloadFiles = async () => {
    let response = await apiService().get(fileLoaderUri);
    if (response != null && response.status == 200) {
      setFilesDownloadable(response.data);
    }
  };
  (0, _react.useEffect)(() => {
    if (fileLoaderUri != null) {
      const fetchAsync = async () => {
        await reloadFiles();
      };
      fetchAsync();
    }
  }, [fileLoaderUri]);
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      display: isHidden ? "none" : "block"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "inputfile",
    id: "file",
    type: "file",
    name: "file",
    multiple: multiple,
    accept: accept,
    ref: fileUploader,
    onChange: handleUpload,
    style: {
      display: "none"
    }
  }), variant == "custom" && /*#__PURE__*/_react.default.createElement(_Box.default, {
    ref: refOveride,
    onClick: () => {
      handleUploadFileInput();
    }
  }, children), variant == "filemanager" && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    ref: refOveride,
    item: true,
    xs: 12,
    onClick: handleUploadFileInput
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    sx: {
      padding: 2,
      backgroundColor: "#ECEDED",
      fontSize: "14px",
      cursor: "pointer",
      borderRadius: "8px",
      border: "1px dashed #C8D4D5"
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 2
  }, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_FileCopyRounded.default, {
    sx: {
      fill: "#C8D4D5",
      width: 50,
      height: 50
    }
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 10
  }, /*#__PURE__*/_react.default.createElement(_Box.default, null, "Drag and drop files here or"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_UploadRounded.default, {
    sx: {
      fill: primaryColor,
      width: 30,
      height: 30
    }
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h3",
    component: "span",
    sx: {
      color: primaryColor,
      paddingTop: 0.6
    }
  }, "Upload")))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12
  }, loaded > 0 && /*#__PURE__*/_react.default.createElement(_LinearProgress.default, {
    variant: "buffer",
    value: loaded,
    sx: {
      marginTop: 2
    }
  }), loaded == 100 && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h3",
    component: "span",
    sx: {
      color: primaryColor,
      paddingTop: 0.6
    }
  }, "Completed")))), children, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    sx: {
      paddingTop: 1
    }
  }, filesDownloadable != null && filesDownloadable.map((fileUpload, idx) => {
    return /*#__PURE__*/_react.default.createElement(_Grid.default, {
      key: "fileDownloadable-" + idx,
      item: true,
      xs: 8,
      sm: 8,
      md: 5,
      lg: 3,
      sx: {
        marginLeft: 2,
        padding: 1,
        marginTop: 1,
        backgroundColor: "#ECEDED",
        position: "relative",
        fontSize: "14px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "1px solid #54C7DD"
      },
      onClick: async () => {
        window.open(fileUpload.uri);
      }
    }, /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      placement: "left",
      arrow: true,
      title: fileUpload.name
    }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
      direction: "row",
      spacing: 1,
      display: "flex",
      justifyContent: "space-between"
    }, /*#__PURE__*/_react.default.createElement(_Box.default, {
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_FileDownloadOutlined.default, {
      sx: {
        fill: "#92D6E3"
      }
    }), /*#__PURE__*/_react.default.createElement(_Box.default, {
      sx: {
        paddingTop: 0.6,
        marginLeft: "5px"
      }
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      sx: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        width: "350px"
      }
    }, fileUpload.name)), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      "aria-label": "delete",
      sx: {
        position: "absolute",
        right: "0"
      },
      onClick: evt => {
        evt.stopPropagation();
        setOrderFileId(fileUpload.id);
        setViewDeleteDialog(true);
      }
    }, /*#__PURE__*/_react.default.createElement(_Delete.default, null))))));
  }))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: viewDeleteDialog,
    fullWidth: true,
    maxWidth: "xs",
    onClose: () => {
      setViewDeleteDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, null, "Remove File"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, null, "Are you sure you want to remove this file?")), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setViewDeleteDialog(false);
    }
  }, "No"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: async () => {
      if (onConfirmDelete != null) {
        onConfirmDelete();
      }
    },
    autoFocus: true
  }, "Yes"))), /*#__PURE__*/_react.default.createElement(_Backdrop.default, {
    sx: {
      color: '#fff',
      zIndex: 99999
    },
    open: uploading
  }, /*#__PURE__*/_react.default.createElement(_CircularProgress.default, {
    color: "inherit"
  })));
};
exports.FileUploader = FileUploader;

// ===== src/components/GoogleMapsAutoComplete.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMapsAutoComplete = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Box = babelHelpers.interopRequireDefault(require("@mui/system/Box"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
var _Grid = babelHelpers.interopRequireDefault(require("@mui/material/Grid"));
var _MenuList = babelHelpers.interopRequireDefault(require("@mui/material/MenuList"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _ListItemIcon = babelHelpers.interopRequireDefault(require("@mui/material/ListItemIcon"));
var _LocationOnRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/LocationOnRounded"));
var _ListItemText = babelHelpers.interopRequireDefault(require("@mui/material/ListItemText"));
var _reactCoolOnclickoutside = babelHelpers.interopRequireDefault(require("react-cool-onclickoutside"));
var _Stack = babelHelpers.interopRequireDefault(require("@mui/material/Stack"));
var _usePlacesAutocomplete = _interopRequireWildcard(require("use-places-autocomplete"));
const AutoCompleteDialog = _ref => {
  let {
    placeholder,
    onSelected,
    defaultValue,
    onChange
  } = _ref;
  const txtAddressField = (0, _react.useRef)(null);
  const dismissSuggestions = () => {
    clearSuggestions();
  };
  const ref = (0, _reactCoolOnclickoutside.default)(dismissSuggestions);
  const {
    ready,
    value,
    suggestions: {
      status,
      data
    },
    setValue,
    clearSuggestions
  } = (0, _usePlacesAutocomplete.default)({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 1000
  });
  const handleInput = e => {
    e.stopPropagation();

    // Update the keyword of the input element
    setValue(e.target.value);
    onChange(e.target.value);
  };

  // useEffect(() => {

  //   setValue(defaultValue) // test this!!!!

  // }, [defaultValue])

  const determineComponentType = component => {
    let returnVal = {};
    for (let index = 0; index < component.types.length; index++) {
      const componentType = component.types[index];
      switch (componentType) {
        case "street_number":
          returnVal = {
            componentType: "Street_number",
            long_name: component.long_name,
            short_name: component.short_name
          };
          break;
        case "route":
          returnVal = {
            componentType: "Route",
            long_name: component.long_name,
            short_name: component.short_name
          };
          break;
        case "locality":
          returnVal = {
            componentType: "City",
            long_name: component.long_name,
            short_name: component.short_name
          };
          break;
        case "administrative_area_level_2":
          returnVal = {
            componentType: "County",
            long_name: component.long_name,
            short_name: component.short_name
          };
          break;
        case "administrative_area_level_1":
          returnVal = {
            componentType: "State",
            long_name: component.long_name,
            short_name: component.short_name
          };
          break;
        case "country":
          returnVal = {
            componentType: "country",
            long_name: component.long_name,
            short_name: component.short_name
          };
          break;
        case "postal_code":
          returnVal = {
            componentType: "postal_code",
            long_name: component.long_name,
            short_name: component.short_name
          };
          break;
        case "postal_code_suffix":
          returnVal = {
            componentType: "postal_code_suffix",
            long_name: component.long_name,
            short_name: component.short_name
          };
          break;
      }
    }
    return returnVal;
  };
  const getSimplifyResult = result => {
    let street_number = "";
    let route = "";
    let city = "";
    let county = "";
    let state = "";
    let country = "";
    let postal_code = "";
    let postal_code_suffix = "";
    let lat = null;
    let long = null;
    let mapUrl = "";
    let placeId = null;
    for (let index = 0; index < result.address_components.length; index++) {
      const component = result.address_components[index];
      let response = determineComponentType(component);
      if (response.componentType == "Street_number") {
        street_number = response.long_name;
      } else if (response.componentType == "Route") {
        route = response.long_name;
      } else if (response.componentType == "City") {
        city = response.long_name;
      } else if (response.componentType == "County") {
        county = response.long_name;
      } else if (response.componentType == "State") {
        state = response.short_name;
      } else if (response.componentType == "country") {
        country = response.long_name;
      } else if (response.componentType == "postal_code") {
        postal_code = response.long_name;
      } else if (response.componentType == "postal_code_suffix") {
        postal_code_suffix = response.long_name;
      }
    }
    if (result.geometry != null && result.geometry.location != null) {
      lat = result.geometry.location.lat;
      long = result.geometry.location.lng;
    }
    mapUrl = result.url;
    placeId = result.place_id;
    return {
      address: street_number + " " + route,
      city: city,
      state: state,
      county: county,
      postalCode: postal_code,
      country: country,
      lat: lat,
      long: long,
      mapUrl: mapUrl,
      placeId: placeId
    };
  };
  const handleSelect = _ref2 => {
    let {
      description,
      place_id
    } = _ref2;
    return () => {
      const parameter = {
        // Use the "place_id" of suggestion from the dropdown (object), here just taking first suggestion for brevity
        placeId: place_id
        // Specify the return data that you want (optional)
        //fields: ["name", "rating"],
      };
      clearSuggestions();
      (0, _usePlacesAutocomplete.getDetails)(parameter).then(result => {
        let response = getSimplifyResult(result);
        if (response != null) {
          onSelected(response);
          setValue(response.address, false);
        }
      }).catch(error => {
        alert(error);
      });
    };
  };
  const renderSuggestions = () => data.map(suggestion => {
    const {
      place_id,
      structured_formatting: {
        main_text,
        secondary_text
      }
    } = suggestion;
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: place_id,
      onClick: handleSelect(suggestion, place_id),
      sx: {
        paddingRight: 2
      }
    }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, /*#__PURE__*/_react.default.createElement(_LocationOnRounded.default, {
      fontSize: "small"
    })), /*#__PURE__*/_react.default.createElement(_ListItemText.default, null, /*#__PURE__*/_react.default.createElement("strong", null, main_text), " ", /*#__PURE__*/_react.default.createElement("small", null, secondary_text)));
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Stack.default, null, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    ref: txtAddressField,
    defaultValue: defaultValue,
    name: "address",
    autoComplete: "new-password",
    label: placeholder,
    variant: "outlined",
    fullWidth: true,
    value: value,
    onChange: handleInput
  })), status == "OK" && /*#__PURE__*/_react.default.createElement(_MenuList.default, {
    ref: ref,
    sx: {
      position: "absolute",
      zIndex: 9999,
      backgroundColor: "white",
      border: "1px solid black"
    }
  }, renderSuggestions()));
};
const GoogleMapsAutoComplete = _ref3 => {
  let {
    onAddressSelected,
    _address = "",
    _city = "",
    _state = "",
    _postalCode = ""
  } = _ref3;
  const [address, setAddress] = (0, _react.useState)(_address);
  const [city, setCity] = (0, _react.useState)(_city);
  const [state, setState] = (0, _react.useState)(_state);
  const [zip, setPostalcode] = (0, _react.useState)(_postalCode);
  const [lat, setLat] = (0, _react.useState)(null);
  const [lng, setLng] = (0, _react.useState)(null);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(AutoCompleteDialog, {
    placeholder: "Address",
    defaultValue: address,
    onSelected: data => {
      setAddress(data.address);
      setCity(data.city);
      setState(data.state);
      setPostalcode(data.postalCode);
      setLat(data.lat);
      setLng(data.long);
      onAddressSelected(data.address, data.city, data.state, data.postalCode, data.lat, data.long);
    },
    onChange: address => {
      setAddress(address);
    }
  }), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 1,
    sx: {
      marginTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    id: "outlined-basic",
    label: "City",
    name: "city",
    variant: "outlined",
    fullWidth: true,
    value: city,
    onChange: val => {
      setCity(val.currentTarget.value);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    id: "outlined-basic",
    label: "State",
    name: "state",
    variant: "outlined",
    fullWidth: true,
    value: state,
    onChange: val => {
      setState(val.currentTarget.value);
    }
  })))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    id: "outlined-basic",
    label: "Postal code",
    name: "postalCode",
    variant: "outlined",
    fullWidth: true,
    value: zip,
    onChange: val => {
      setPostalcode(val.currentTarget.value);
    }
  }))));
};
exports.GoogleMapsAutoComplete = GoogleMapsAutoComplete;

// ===== src/components/NextImage.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextImage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _image = babelHelpers.interopRequireDefault(require("next/image"));
const NextImage = _ref => {
  let {
    src,
    alt,
    width = 200,
    height = 200,
    objectFit = "contain",
    enableAuth = false
  } = _ref;
  const [imageError, setImageError] = (0, _react.useState)(false);
  const [imageSrc, setImageSrc] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (enableAuth) {
      const fetchData = async () => {
        await apiService().DownloadFile(src, "", data => {
          setImageSrc(data);
        }, true);
      };
      fetchData();
    }
  }, [enableAuth]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, enableAuth && imageSrc != null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_image.default, {
    src: imageError ? process.env.fallbackImageSrc : imageSrc,
    alt: alt,
    width: width,
    height: height,
    style: {
      objectFit: objectFit
    },
    onError: () => setImageError(true)
  })), !enableAuth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_image.default, {
    src: imageError ? process.env.fallbackImageSrc : src,
    alt: alt,
    width: width,
    height: height,
    style: {
      objectFit: objectFit
    },
    onError: () => setImageError(true)
  })));
};
exports.NextImage = NextImage;

// ===== src/components/PlansAndPricing.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pricing = Pricing;
var _react = babelHelpers.interopRequireDefault(require("react"));
var _system = require("@mui/system");
var _Grid = babelHelpers.interopRequireDefault(require("@mui/material/Grid"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _Typography = babelHelpers.interopRequireDefault(require("@mui/material/Typography"));
var _ChevronRightRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/ChevronRightRounded"));
var _InputLabel = babelHelpers.interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = babelHelpers.interopRequireDefault(require("@mui/material/FormControl"));
var _Select = babelHelpers.interopRequireDefault(require("@mui/material/Select"));
var _reactHookForm = require("react-hook-form");
function Pricing(_ref) {
  let {
    title = null,
    tiers = [],
    features = null,
    onButtonClicked = null
  } = _ref;
  const {
    control,
    register,
    handleSubmit,
    formState: {
      errors
    },
    watch,
    setValue
  } = (0, _reactHookForm.useForm)();
  const calculateQty = qty => {
    let newMax = qty.minQty + qty.maxQty;
    let menuItemArray = [];
    let newIndex = 1;
    for (let index = qty.minQty; index < newMax; index++) {
      menuItemArray[newIndex] = newIndex;
      newIndex++;
    }
    return menuItemArray;
  };
  return /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 0,
    justifyContent: "center",
    alignItems: "stretch",
    direction: "row"
  }, title != null && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    key: "plans"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h4",
    gutterBottom: true
  }, title)), tiers.map(tier => /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    key: tier.title
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingBottom: 2,
      padding: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      textAlign: "center",
      paddingTop: 2
    }
  }, tier.image != null && /*#__PURE__*/_react.default.createElement("img", {
    src: tier.image,
    width: 200,
    height: 200
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h3",
    component: "h2",
    sx: {
      paddingTop: 3
    }
  }, tier.title), tier.subTitle && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h6",
    component: "h2",
    sx: {
      paddingTop: 2
    }
  }, tier.subTitle), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 0
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: tier.qty != null ? 6 : 12,
    sx: {
      padding: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    component: "span",
    sx: {
      fontSize: 30,
      fontWeight: "bold"
    }
  }, "$", tier.price), tier.duration != null && /*#__PURE__*/_react.default.createElement(_system.Box, {
    component: "span"
  }, "/ ", tier.duration)), tier.qty != null && /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 6,
    sx: {
      padding: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "qty-" + tier.id,
    control: control,
    rules: {
      required: false
    },
    render: _ref2 => {
      let {
        renderField
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
        fullWidth: true
      }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
        id: "demo-simple-select-label"
      }, "Quantity"), /*#__PURE__*/_react.default.createElement(_Select.default, babelHelpers.extends({}, register("qty-" + tier.id, {
        required: false
      }), renderField, {
        labelId: "demo-simple-select-label",
        id: "demo-simple-select",
        defaultValue: 1,
        label: "Quantity"
      }), calculateQty(tier.qty).map((menuItem, index) => {
        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          key: index,
          value: menuItem
        }, menuItem);
      })));
    }
  }))), tier.modifiers != null && /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingBottom: 2
    }
  }, tier.modifiers.map((modifier, index) => {
    return /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
      name: "modifier-" + tier.id + modifier.name,
      control: control,
      rules: {
        required: false
      },
      render: _ref3 => {
        let {
          renderField
        } = _ref3;
        return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
          fullWidth: true,
          key: index,
          sx: {
            marginTop: 2
          }
        }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
          id: "demo-simple-select-label"
        }, modifier.name), /*#__PURE__*/_react.default.createElement(_Select.default, babelHelpers.extends({}, register("modifier-" + tier.id + "-" + modifier.name, {
          required: false
        }), renderField, {
          labelId: "demo-simple-select-label",
          id: "demo-simple-select",
          defaultValue: 0,
          label: modifier.name
        }), modifier.options.map((mod, index) => {
          return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
            key: index,
            value: index
          }, mod);
        })));
      }
    });
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    fullWidth: true,
    variant: tier.buttonVariant,
    endIcon: /*#__PURE__*/_react.default.createElement(_ChevronRightRounded.default, null),
    sx: {
      height: 50
    },
    onClick: handleSubmit(async data => {
      let modifiers = {};
      let qty = null;
      if (tier.modifiers != null) {
        for (let index = 0; index < tier.modifiers.length; index++) {
          const modifier = tier.modifiers[index];

          // assign the modifier as a property
          modifiers[modifier.name] = data["modifier-" + tier.id + "-" + modifier.name];
        }
      }
      if (tier.qty != null) {
        qty = parseInt(data["qty-" + tier.id]);
      }
      if (onButtonClicked != null) {
        onButtonClicked({
          id: tier.id,
          modifiers: modifiers,
          qty: qty
        });
      }
    })
  }, tier.buttonText), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    sx: {
      paddingTop: 2,
      fontSize: 16,
      textAlign: "left",
      lineHeight: "1.5rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: tier.description
    }
  }))))))), features != null && /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 1
    }
  }, features.map(feature => {
    return /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_system.Box, {
      sx: {
        backgroundColor: "lightgray",
        padding: 1,
        borderRadius: 2
      }
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "h5",
      gutterBottom: true
    }, feature.name)), /*#__PURE__*/_react.default.createElement(_Grid.default, {
      container: true,
      spacing: 0,
      justifyContent: "center"
    }, feature.subfeatures.map((subfeature, subFeatureIndex) => {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, subfeature.map((item, index) => {
        return /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          xs: 3,
          key: subfeature
        }, /*#__PURE__*/_react.default.createElement(_system.Box, {
          sx: {
            padding: 2,
            height: 60,
            paddingTop: subFeatureIndex == 0 ? 3 : 2,
            textAlign: index == 0 ? "left" : "center"
          }
        }, item), feature.subfeatures.length - 1 != subFeatureIndex ? /*#__PURE__*/_react.default.createElement("hr", null) : "");
      }));
    })));
  }))));
}

// ===== src/components/RichTextEditor.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextEditor = exports.LexicalEditor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _LexicalComposer = require("@lexical/react/LexicalComposer");
var _LexicalRichTextPlugin = require("@lexical/react/LexicalRichTextPlugin");
var _LexicalContentEditable = require("@lexical/react/LexicalContentEditable");
var _LexicalHistoryPlugin = require("@lexical/react/LexicalHistoryPlugin");
var _LexicalOnChangePlugin = require("@lexical/react/LexicalOnChangePlugin");
var _LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
var _LexicalErrorBoundary = require("@lexical/react/LexicalErrorBoundary");
var _LexicalListPlugin = require("@lexical/react/LexicalListPlugin");
var _LexicalLinkPlugin = require("@lexical/react/LexicalLinkPlugin");
var _html = require("@lexical/html");
var _lexical = require("lexical");
var _selection = require("@lexical/selection");
var _richText = require("@lexical/rich-text");
var _list = require("@lexical/list");
var _link = require("@lexical/link");
var _code = require("@lexical/code");
var _Box = babelHelpers.interopRequireDefault(require("@mui/material/Box"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _IconButton = babelHelpers.interopRequireDefault(require("@mui/material/IconButton"));
var _Divider = babelHelpers.interopRequireDefault(require("@mui/material/Divider"));
var _Select = babelHelpers.interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _Tooltip = babelHelpers.interopRequireDefault(require("@mui/material/Tooltip"));
var _FormatBold = babelHelpers.interopRequireDefault(require("@mui/icons-material/FormatBold"));
var _FormatItalic = babelHelpers.interopRequireDefault(require("@mui/icons-material/FormatItalic"));
var _FormatUnderlined = babelHelpers.interopRequireDefault(require("@mui/icons-material/FormatUnderlined"));
var _StrikethroughS = babelHelpers.interopRequireDefault(require("@mui/icons-material/StrikethroughS"));
var _FormatListBulleted = babelHelpers.interopRequireDefault(require("@mui/icons-material/FormatListBulleted"));
var _FormatListNumbered = babelHelpers.interopRequireDefault(require("@mui/icons-material/FormatListNumbered"));
var _Code = babelHelpers.interopRequireDefault(require("@mui/icons-material/Code"));
var _Link = babelHelpers.interopRequireDefault(require("@mui/icons-material/Link"));
var _LinkOff = babelHelpers.interopRequireDefault(require("@mui/icons-material/LinkOff"));
var _Undo = babelHelpers.interopRequireDefault(require("@mui/icons-material/Undo"));
var _Redo = babelHelpers.interopRequireDefault(require("@mui/icons-material/Redo"));
const theme = {
  paragraph: 'lexical-paragraph',
  quote: 'lexical-quote',
  heading: {
    h1: 'lexical-h1',
    h2: 'lexical-h2',
    h3: 'lexical-h3',
    h4: 'lexical-h4',
    h5: 'lexical-h5',
    h6: 'lexical-h6'
  },
  list: {
    nested: {
      listitem: 'lexical-nested-listitem'
    },
    ol: 'lexical-ol',
    ul: 'lexical-ul',
    listitem: 'lexical-listitem'
  },
  text: {
    bold: 'lexical-bold',
    italic: 'lexical-italic',
    underline: 'lexical-underline',
    strikethrough: 'lexical-strikethrough',
    code: 'lexical-code'
  },
  link: 'lexical-link',
  code: 'lexical-code-block'
};
const editorStyles = `
  .lexical-editor-container { border: 1px solid #ccc; border-radius: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; }
  .lexical-editor-inner { position: relative; }
  .lexical-editor-input { padding: 12px; outline: none; overflow-y: auto; }
  .lexical-editor-input:focus { outline: none; }
  .lexical-placeholder { position: absolute; top: 12px; left: 12px; color: #999; pointer-events: none; user-select: none; }
  .lexical-paragraph { margin: 0 0 8px 0; }
  .lexical-h1 { font-size: 2em; font-weight: bold; margin: 16px 0 8px 0; }
  .lexical-h2 { font-size: 1.5em; font-weight: bold; margin: 14px 0 8px 0; }
  .lexical-h3 { font-size: 1.17em; font-weight: bold; margin: 12px 0 8px 0; }
  .lexical-h4 { font-size: 1em; font-weight: bold; margin: 10px 0 8px 0; }
  .lexical-h5 { font-size: 0.83em; font-weight: bold; margin: 8px 0 8px 0; }
  .lexical-h6 { font-size: 0.67em; font-weight: bold; margin: 6px 0 8px 0; }
  .lexical-quote { margin: 8px 0; padding: 8px 16px; border-left: 4px solid #ccc; background: #f9f9f9; font-style: italic; }
  .lexical-ul, .lexical-ol { margin: 8px 0; padding-left: 24px; }
  .lexical-listitem { margin: 4px 0; }
  .lexical-bold { font-weight: bold; }
  .lexical-italic { font-style: italic; }
  .lexical-underline { text-decoration: underline; }
  .lexical-strikethrough { text-decoration: line-through; }
  .lexical-code { background: #f0f0f0; padding: 2px 4px; border-radius: 3px; font-family: monospace; }
  .lexical-link { color: #0066cc; text-decoration: underline; }
  .lexical-code-block { background: #f5f5f5; padding: 12px; border-radius: 4px; font-family: monospace; overflow-x: auto; }
`;
const toolbarButtonStyle = {
  minWidth: 32,
  width: 32,
  height: 32,
  padding: '4px',
  margin: '2px',
  borderRadius: '2px',
  border: '1px solid transparent',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc'
  }
};
const activeButtonStyle = {
  ...toolbarButtonStyle,
  backgroundColor: '#e0e0e0',
  border: '1px solid #ccc'
};
function HtmlImportPlugin(_ref) {
  let {
    initialHtml
  } = _ref;
  const [editor] = (0, _LexicalComposerContext.useLexicalComposerContext)();
  const [initialized, setInitialized] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (initialHtml && !initialized) {
      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(initialHtml, 'text/html');
        const nodes = (0, _html.$generateNodesFromDOM)(editor, dom);
        const root = (0, _lexical.$getRoot)();
        root.clear();
        nodes.forEach(node => root.append(node));
      });
      setInitialized(true);
    }
  }, [editor, initialHtml, initialized]);
  return null;
}
function HtmlExportPlugin(_ref2) {
  let {
    onChange
  } = _ref2;
  const [editor] = (0, _LexicalComposerContext.useLexicalComposerContext)();
  const handleChange = (0, _react.useCallback)(() => {
    editor.update(() => {
      const html = (0, _html.$generateHtmlFromNodes)(editor, null);
      onChange(html);
    });
  }, [editor, onChange]);
  return /*#__PURE__*/_react.default.createElement(_LexicalOnChangePlugin.OnChangePlugin, {
    onChange: handleChange
  });
}
function Toolbar(_ref3) {
  let {
    isDisabled
  } = _ref3;
  const [editor] = (0, _LexicalComposerContext.useLexicalComposerContext)();
  const [isBold, setIsBold] = (0, _react.useState)(false);
  const [isItalic, setIsItalic] = (0, _react.useState)(false);
  const [isUnderline, setIsUnderline] = (0, _react.useState)(false);
  const [isStrikethrough, setIsStrikethrough] = (0, _react.useState)(false);
  const [isCode, setIsCode] = (0, _react.useState)(false);
  const [blockType, setBlockType] = (0, _react.useState)('paragraph');
  const updateToolbar = (0, _react.useCallback)(() => {
    const selection = (0, _lexical.$getSelection)();
    if ((0, _lexical.$isRangeSelection)(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));
    }
  }, []);
  (0, _react.useEffect)(() => {
    return editor.registerUpdateListener(_ref4 => {
      let {
        editorState
      } = _ref4;
      editorState.read(() => {
        updateToolbar();
      });
    });
  }, [editor, updateToolbar]);
  const formatText = format => {
    editor.dispatchCommand(_lexical.FORMAT_TEXT_COMMAND, format);
  };
  const formatBlock = type => {
    editor.update(() => {
      const selection = (0, _lexical.$getSelection)();
      if ((0, _lexical.$isRangeSelection)(selection)) {
        if (type === 'paragraph') (0, _selection.$setBlocksType)(selection, () => (0, _lexical.$createParagraphNode)());else if (type === 'quote') (0, _selection.$setBlocksType)(selection, () => (0, _richText.$createQuoteNode)());else if (type.startsWith('h')) (0, _selection.$setBlocksType)(selection, () => (0, _richText.$createHeadingNode)(type));
        setBlockType(type);
      }
    });
  };
  const formatList = listType => {
    if (listType === 'bullet') editor.dispatchCommand(_list.INSERT_UNORDERED_LIST_COMMAND, undefined);else if (listType === 'number') editor.dispatchCommand(_list.INSERT_ORDERED_LIST_COMMAND, undefined);
  };
  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) editor.dispatchCommand(_link.TOGGLE_LINK_COMMAND, url);
  };
  const removeLink = () => {
    editor.dispatchCommand(_link.TOGGLE_LINK_COMMAND, null);
  };
  const undo = () => {
    editor.dispatchCommand('UNDO', undefined);
  };
  const redo = () => {
    editor.dispatchCommand('REDO', undefined);
  };
  if (isDisabled) return null;
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      padding: '8px',
      borderBottom: '1px solid #ccc',
      backgroundColor: '#f9f9f9',
      gap: '4px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    size: "small",
    value: blockType,
    onChange: e => formatBlock(e.target.value),
    sx: {
      minWidth: 120,
      height: 32,
      mr: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "paragraph"
  }, "Normal"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "h1"
  }, "Heading 1"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "h2"
  }, "Heading 2"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "h3"
  }, "Heading 3"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "h4"
  }, "Heading 4"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "h5"
  }, "Heading 5"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "h6"
  }, "Heading 6"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: "quote"
  }, "Blockquote")), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    orientation: "vertical",
    flexItem: true,
    sx: {
      mx: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Bold (Ctrl+B)"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: () => formatText('bold'),
    sx: isBold ? activeButtonStyle : toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_FormatBold.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Italic (Ctrl+I)"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: () => formatText('italic'),
    sx: isItalic ? activeButtonStyle : toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_FormatItalic.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Underline (Ctrl+U)"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: () => formatText('underline'),
    sx: isUnderline ? activeButtonStyle : toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_FormatUnderlined.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Strikethrough"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: () => formatText('strikethrough'),
    sx: isStrikethrough ? activeButtonStyle : toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_StrikethroughS.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Code"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: () => formatText('code'),
    sx: isCode ? activeButtonStyle : toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_Code.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    orientation: "vertical",
    flexItem: true,
    sx: {
      mx: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Bullet List"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: () => formatList('bullet'),
    sx: toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_FormatListBulleted.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Numbered List"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: () => formatList('number'),
    sx: toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_FormatListNumbered.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    orientation: "vertical",
    flexItem: true,
    sx: {
      mx: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Insert Link"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: insertLink,
    sx: toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_Link.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Remove Link"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: removeLink,
    sx: toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_LinkOff.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Divider.default, {
    orientation: "vertical",
    flexItem: true,
    sx: {
      mx: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Undo (Ctrl+Z)"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: undo,
    sx: toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_Undo.default, {
    fontSize: "small"
  }))), /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Redo (Ctrl+Y)"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    size: "small",
    onClick: redo,
    sx: toolbarButtonStyle
  }, /*#__PURE__*/_react.default.createElement(_Redo.default, {
    fontSize: "small"
  }))));
}
function onError(error) {
  console.error('Lexical error:', error);
}
const RichTextEditor = _ref5 => {
  let {
    html,
    onSave,
    height = 400,
    isDisabled = false
  } = _ref5;
  const [editorHtml, setEditorHtml] = (0, _react.useState)(html || '');
  const [isMounted, setIsMounted] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setIsMounted(true);
  }, []);
  (0, _react.useEffect)(() => {
    if (html != null) setEditorHtml(html);
  }, [html]);
  const handleChange = (0, _react.useCallback)(newHtml => {
    setEditorHtml(newHtml);
  }, []);
  if (!isMounted) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        minHeight: height,
        border: '1px solid #ccc',
        borderRadius: 4
      }
    });
  }
  const initialConfig = {
    namespace: 'RichTextEditor',
    theme,
    onError,
    nodes: [_richText.HeadingNode, _richText.QuoteNode, _list.ListNode, _list.ListItemNode, _link.LinkNode, _code.CodeNode],
    editable: !isDisabled
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", null, editorStyles), /*#__PURE__*/_react.default.createElement(_LexicalComposer.LexicalComposer, {
    initialConfig: initialConfig
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lexical-editor-container"
  }, /*#__PURE__*/_react.default.createElement(Toolbar, {
    isDisabled: isDisabled
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "lexical-editor-inner"
  }, /*#__PURE__*/_react.default.createElement(_LexicalRichTextPlugin.RichTextPlugin, {
    contentEditable: /*#__PURE__*/_react.default.createElement(_LexicalContentEditable.ContentEditable, {
      className: "lexical-editor-input",
      style: {
        minHeight: height,
        maxHeight: height
      }
    }),
    placeholder: /*#__PURE__*/_react.default.createElement("div", {
      className: "lexical-placeholder"
    }, "Enter text..."),
    ErrorBoundary: _LexicalErrorBoundary.LexicalErrorBoundary
  }), /*#__PURE__*/_react.default.createElement(_LexicalHistoryPlugin.HistoryPlugin, null), /*#__PURE__*/_react.default.createElement(_LexicalListPlugin.ListPlugin, null), /*#__PURE__*/_react.default.createElement(_LexicalLinkPlugin.LinkPlugin, null), /*#__PURE__*/_react.default.createElement(HtmlImportPlugin, {
    initialHtml: html
  }), /*#__PURE__*/_react.default.createElement(HtmlExportPlugin, {
    onChange: handleChange
  })))), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      textAlign: "right"
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    disabled: isDisabled,
    onClick: async () => {
      await onSave(editorHtml);
    }
  }, "Save")));
};

// Also export as LexicalEditor for backwards compatibility
exports.RichTextEditor = RichTextEditor;
const LexicalEditor = exports.LexicalEditor = RichTextEditor;

// ===== src/components/YesNoDialog.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YesNoDialog = YesNoDialog;
var _react = _interopRequireWildcard(require("react"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = babelHelpers.interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
function YesNoDialog(_ref) {
  let {
    open,
    title,
    message,
    yesText = "Yes",
    noText = "No",
    YesAction,
    NoAction
  } = _ref;
  // Declare a new state variable, which we'll call "count"
  //const [count, setCount] = useState(0);

  return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: open,
    onClose: NoAction,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, title), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, message)), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: NoAction
  }, noText), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: YesAction,
    autoFocus: true
  }, yesText)));
}

// ===== src/components/dropzone.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropZone = void 0;
var _Box = babelHelpers.interopRequireDefault(require("@mui/material/Box"));
var _react = _interopRequireWildcard(require("react"));
var _reactDropzone = require("react-dropzone");
let baseStyle = {
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
const focusedStyle = {
  borderColor: '#2196f3'
};
const acceptStyle = {
  borderColor: '#00e676'
};
const rejectStyle = {
  borderColor: '#ff1744'
};
const handleOneDriveFilePick = () => {
  const odOptions = {
    clientId: 'clientId',
    action: 'share',
    multiSelect: false,
    advanced: {
      redirectUri: 'http://localhost:3000/fileUploading'
    },
    success: files => {
      console.log('Files picked:', files);
    },
    cancel: () => {
      console.log('File picking cancelled');
    },
    error: error => {
      console.error('Error picking file:', error);
    }
  };
  OneDrive.open(odOptions);
};
const DropZone = _ref => {
  let {
    text = "Drag 'n' drop some files here, or click to select files",
    image = null,
    styleOverride = null,
    onDrop = null,
    maxFiles = 1,
    multiple = false,
    accept = null
  } = _ref;
  const [loading, setLoading] = (0, _react.useState)(false);
  const [tempUrl, setTempUrl] = (0, _react.useState)(null);
  const imageUrl = (0, _react.useRef)(image);

  // in the event the image hasn't loaded yet from the caller
  (0, _react.useEffect)(() => {
    imageUrl.current = image;
  }, [image]);
  if (styleOverride != null) {
    let combined = {
      ...baseStyle,
      ...styleOverride
    };
    baseStyle = combined;
  }
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = (0, _reactDropzone.useDropzone)({
    accept: accept != null ? accept : "*",
    maxFiles: maxFiles,
    multiple: multiple,
    onDrop: async files => {
      if (multiple) {
        await onDrop(files);
      } else {
        const newUrl = URL.createObjectURL(files[0]);
        imageUrl.current = newUrl;
        await onDrop(files[0]);
      }
    }
  });
  const style = (0, _react.useMemo)(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [isFocused, isDragAccept, isDragReject]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: "container",
    sx: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, getRootProps({
    style
  }), /*#__PURE__*/_react.default.createElement("input", getInputProps()), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      paddingBottom: 1
    }
  }, imageUrl.current != null && imageUrl.current != "" && /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl.current,
    width: 200,
    height: 200,
    style: {
      objectFit: "contain"
    }
  })), /*#__PURE__*/_react.default.createElement(_Box.default, null, text))));
};
exports.DropZone = DropZone;

// ===== src/components/googleMaps.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overview = exports.GoogleMapsHeatmap = exports.GoogleMaps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _api = require("@react-google-maps/api");
const containerStyle = {
  width: '100%',
  height: '100%'
};
const center = {
  lat: 38,
  lng: -98
};
const GoogleMaps = _ref => {
  let {
    apiKey,
    hasLoaded,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_api.LoadScript, {
    googleMapsApiKey: apiKey,
    libraries: ['visualization']
  }, /*#__PURE__*/_react.default.createElement(_api.GoogleMap, {
    mapContainerStyle: containerStyle,
    center: center,
    zoom: 5
  }, hasLoaded && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children)));
};
exports.GoogleMaps = GoogleMaps;
const GoogleMapsHeatmap = _ref2 => {
  let {
    apiKey,
    data = [],
    gradient = null,
    radius = 50,
    opacity = 0.6,
    overlay
  } = _ref2;
  const [heatmapData, setHeatmapData] = (0, _react.useState)(null);
  const [hasLoaded, setHasLoaded] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (window.google) {
      let mappingData = [];
      data.forEach(element => {
        mappingData.push({
          location: new google.maps.LatLng(element.lat, element.lng),
          weight: element.weight,
          data: element
        });
      });
      setHeatmapData(mappingData);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (heatmapData != null) {
      setHasLoaded(true);
    }
  }, [heatmapData]);
  return /*#__PURE__*/_react.default.createElement(GoogleMaps, {
    apiKey: apiKey,
    hasLoaded: hasLoaded
  }, /*#__PURE__*/_react.default.createElement(_api.HeatmapLayerF, {
    data: heatmapData,
    options: {
      radius: radius,
      opacity: opacity,
      gradient: gradient != null ? gradient : ['rgba(0, 255, 255, 0)', 'rgba(0, 255, 255, 1)', 'rgba(0, 191, 255, 1)', 'rgba(0, 127, 255, 1)', 'rgba(0, 63, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 0, 223, 1)', 'rgba(0, 0, 191, 1)', 'rgba(0, 0, 159, 1)', 'rgba(0, 0, 127, 1)', 'rgba(63, 0, 91, 1)', 'rgba(127, 0, 63, 1)', 'rgba(191, 0, 31, 1)', 'rgba(255, 0, 0, 1)']
    }
  }), heatmapData != null && heatmapData.map(point => {
    return /*#__PURE__*/_react.default.createElement(_api.OverlayViewF, {
      position: {
        lat: point.location.lat(),
        lng: point.location.lng()
      },
      mapPaneName: _api.OverlayView.OVERLAY_MOUSE_TARGET
    }, overlay(point));
  }));
};

// components
exports.GoogleMapsHeatmap = GoogleMapsHeatmap;
const Overview = _ref3 => {
  let {
    lat,
    lng,
    children
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_api.OverlayViewF, {
    position: {
      lat: lat,
      lng: lng
    },
    mapPaneName: _api.OverlayView.OVERLAY_MOUSE_TARGET
  }, children);
};
exports.Overview = Overview;

// ===== src/components/mapping/assignMapping.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssignMapping = AssignMapping;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Container = babelHelpers.interopRequireDefault(require("@mui/material/Container"));
var _Typography = babelHelpers.interopRequireDefault(require("@mui/material/Typography"));
var _material = require("@mui/material");
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _Close = babelHelpers.interopRequireDefault(require("@mui/icons-material/Close"));
var _IconButton = babelHelpers.interopRequireDefault(require("@mui/material/IconButton"));
var _ArrowRightAltRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/ArrowRightAltRounded"));
// import { apiService } from 'authscape';
// import MappedColumn from './MappedColumn';

// import ConditionBasedTool from './conditionBasedTool';

// import SpreadsheetViewer from '../spreadsheetViewer';

function AssignMapping(_ref) {
  let {
    currentUser,
    documentComponentId,
    setIsLoading = null,
    onCancel = null,
    onPublished = null
  } = _ref;
  const [documentId, setDocumentId] = (0, _react.useState)(documentComponentId);
  const [fromColumnOptions, setFromColumnOptions] = (0, _react.useState)(null);
  const [toColumnOptions, setToColumnOptions] = (0, _react.useState)(null);
  const [documentType, setDocumentType] = (0, _react.useState)(null);
  const [documentName, setDocumentName] = (0, _react.useState)(null);
  const [urlTick, setURLTick] = (0, _react.useState)(1);
  const [spreadSheetAddress, setSpreadSheetAddress] = (0, _react.useState)(null);
  const [showPreviewDialog, setShowPreviewDialog] = (0, _react.useState)(false);
  const [advanceQuery, setAdvanceQuery] = (0, _react.useState)(null);
  const spreadSheetRef = (0, _react.useRef)(null);
  const fetchMappingTo = async () => {
    let response = await apiService().get("/DocumentMapping/GetMappedDynamicFieldsForCompany?companyId=" + currentUser.companyId + "&documentId=" + documentComponentId);
    if (response != null) {
      setToColumnOptions(response.data);
    }
  };
  const fetchMappingFrom = async () => {
    let response = await apiService().post("/DocumentMapping/GetMapping", {
      documentComponentId: documentComponentId,
      companyId: currentUser.companyId
    });
    if (response != null) {
      setFromColumnOptions(response.data.documentMappings);
      setDocumentName(response.data.name);
      setDocumentType(response.data.documentType);
    }
  };
  (0, _react.useEffect)(() => {
    if (documentComponentId != null) {
      if (setIsLoading != null) {
        setIsLoading(true);
      }
      setSpreadSheetAddress("/DocumentMappingPreview/PreviewMappedData?companyId=" + currentUser.companyId + "&documentComponentId=" + documentComponentId);
      const fetchData = async () => {
        await fetchMappingFrom();
        await fetchMappingTo();
        if (setIsLoading != null) {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [documentComponentId]);
  return /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_Container.default, {
    maxWidth: "xl",
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      position: "sticky",
      top: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "h4",
    gutterBottom: true,
    sx: {
      paddingBottom: 2
    }
  }, "File Uploaded: ", /*#__PURE__*/_react.default.createElement("br", null), " ", documentName), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "subtitle1",
    gutterBottom: true,
    sx: {
      paddingBottom: 2
    }
  }, "You have ", fromColumnOptions != null && fromColumnOptions.length, " columns that can be created or mapped"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "outlined",
    sx: {
      marginRight: 2
    },
    onClick: async () => {
      if (onCancel != null) {
        onCancel();
      }
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    endIcon: /*#__PURE__*/_react.default.createElement(_ArrowRightAltRounded.default, null),
    sx: {
      marginRight: 2
    },
    onClick: () => {
      setShowPreviewDialog(true);
    }
  }, "Next, Preview your mapping"))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 5
  }, fromColumnOptions != null && fromColumnOptions.map(column => {
    return /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(MappedColumn, {
      companyId: currentUser.companyId,
      documentId: documentId,
      documentType: documentType,
      documentMappingId: column.id,
      name: column.name,
      toName: column.toName,
      isMapped: column.toName == null || column.toName == "" ? true : false,
      toOptions: toColumnOptions,
      onResponse: () => {
        fetchMappingFrom();
        fetchMappingTo();
      }
    }));
  })))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: showPreviewDialog,
    onClose: () => {
      setShowPreviewDialog(false);
    },
    fullWidth: true,
    maxWidth: "xl",
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title",
    sx: {
      fontSize: "25px",
      paddingTop: 4
    }
  }, "Preview your mapping"), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingLeft: 3
    }
  }, "Ensure that the data uploaded is accurately mapped and all (Required) fields are completed."), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "close",
    onClick: () => {
      setShowPreviewDialog(false);
    },
    sx: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: theme => theme.palette.grey[500]
    }
  }, /*#__PURE__*/_react.default.createElement(_Close.default, null)), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingBottom: 1
    }
  }, /*#__PURE__*/_react.default.createElement(ConditionBasedTool, {
    toColumnOptions: toColumnOptions,
    documentId: documentId,
    onConditionApplied: currentQuery => {
      let incrementNum = urlTick + 1;
      setURLTick(incrementNum);
      setAdvanceQuery(currentQuery);

      // setSpreadSheetAddress("/DocumentMappingPreview/PreviewMappedData?companyId=" + currentUser.companyId + "&documentComponentId=" + documentComponentId + "&tick=" + incrementNum);
    }
  })), spreadSheetAddress != null && /*#__PURE__*/_react.default.createElement(SpreadsheetViewer, {
    ref: spreadSheetRef,
    url: spreadSheetAddress,
    advanceQuery: advanceQuery,
    currentUser: currentUser,
    hideToolbar: true,
    loadedUser: true
  })), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => {
      setShowPreviewDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: async () => {
      if (setIsLoading != null) {
        setIsLoading(true);
      }
      let publishedRows = spreadSheetRef.current.getRows();
      let response = await apiService().post("/DocumentMapping/Publish", {
        companyId: currentUser.companyId,
        documentId: documentId,
        publishedRows: publishedRows
      });
      if (response != null && response.status == 200) {
        setShowPreviewDialog(false);
        if (onPublished != null) {
          onPublished();
        }
      } else {
        alert(JSON.stringify(response.data));
      }
      if (setIsLoading != null) {
        setIsLoading(false);
      }
    }
  }, "Publish"))));
}

// ===== src/components/mapping/conditionBasedTool.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionBasedTool = ConditionBasedTool;
var _react = _interopRequireWildcard(require("react"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _system = require("@mui/system");
var _Accordion = babelHelpers.interopRequireDefault(require("@mui/material/Accordion"));
var _AccordionSummary = babelHelpers.interopRequireDefault(require("@mui/material/AccordionSummary"));
var _AccordionDetails = babelHelpers.interopRequireDefault(require("@mui/material/AccordionDetails"));
var _ExpandMore = babelHelpers.interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _reactQuerybuilder = require("react-querybuilder");
// import { apiService, FileUploader} from 'authscape';

function ConditionBasedTool(_ref) {
  let {
    toColumnOptions,
    documentId,
    onConditionApplied
  } = _ref;
  const [currentQuery, setCurrentQuery] = (0, _react.useState)(null);

  // const fields = [
  //     { name: 'firstName', label: 'First Name' },
  //     { name: 'lastName', label: 'Last Name' }
  // ];

  (0, _react.useEffect)(() => {
    if (documentId != null) {
      const fetchData = async () => {
        let response = await apiService().get("/DocumentMapping/GetRules?documentComponentId=" + documentId);
        if (response != null && response.status == 200) {
          if (response.data != null && response.data != "") {
            setCurrentQuery(response.data);
          } else {
            setCurrentQuery(null);
          }
        }
      };
      fetchData();
    }
  }, [documentId]);
  const getFields = () => {
    let fields = [];
    for (let index = 0; index < toColumnOptions.length; index++) {
      const toColumn = toColumnOptions[index];
      if (toColumn.isMapped)
        // only show filters that are mapped
        {
          fields.push({
            name: toColumn.name,
            label: toColumn.visibleName
          });
        }
    }
    return fields;
  };
  const customOperators = [{
    name: 'contains',
    label: 'Contains'
  }, {
    name: 'notContains',
    label: 'Does not contain'
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_Accordion.default, null, /*#__PURE__*/_react.default.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1-content",
    id: "panel1-header"
  }, "Advance filtering"), /*#__PURE__*/_react.default.createElement(_AccordionDetails.default, null, /*#__PURE__*/_react.default.createElement(_reactQuerybuilder.QueryBuilder, {
    fields: getFields(),
    operators: customOperators,
    query: currentQuery,
    onQueryChange: setCurrentQuery
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    sx: {
      marginTop: 1
    },
    onClick: async () => {
      let response = await apiService().put("/DocumentMapping/ApplyFilterForViewer", {
        documentComponentId: documentId,
        rules: JSON.stringify(currentQuery)
      });
      if (response != null && response.status == 200) {
        onConditionApplied(currentQuery);
      }
    }
  }, "Apply Filter")))));
}

// ===== src/components/mapping/datasources.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datasources = Datasources;
var _react = _interopRequireWildcard(require("react"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _system = require("@mui/system");
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = babelHelpers.interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
var _InputLabel = babelHelpers.interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = babelHelpers.interopRequireDefault(require("@mui/material/FormControl"));
var _Select = babelHelpers.interopRequireDefault(require("@mui/material/Select"));
var _Radio = babelHelpers.interopRequireDefault(require("@mui/material/Radio"));
var _RadioGroup = babelHelpers.interopRequireDefault(require("@mui/material/RadioGroup"));
var _FormControlLabel = babelHelpers.interopRequireDefault(require("@mui/material/FormControlLabel"));
var _FormLabel = babelHelpers.interopRequireDefault(require("@mui/material/FormLabel"));
// import {apiService, authService, StripeConnect, ReactDraft, EditableDatagrid, FileUploader} from 'authscape';

function Datasources(_ref) {
  let {
    disableTraining = false
  } = _ref;
  const documentColumns = [{
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false
  }, {
    field: "type",
    type: "actions",
    width: 200,
    flex: 1,
    headerName: "Data Source",
    getActions: _ref2 => {
      let {
        id,
        row
      } = _ref2;
      return [/*#__PURE__*/_react.default.createElement(_system.Box, {
        sx: {
          textAlign: "left"
        }
      }, row.type == 0 ? "Database" : "", row.type == 1 ? "Dynamic Mapping" : "", row.type == 2 ? "Custom Model" : "")];
    }
  }, {
    field: "Detail",
    type: "actions",
    width: 200,
    flex: 1,
    headerName: "Mapping To",
    getActions: _ref3 => {
      let {
        id,
        row
      } = _ref3;
      return [/*#__PURE__*/_react.default.createElement(_system.Box, {
        sx: {
          textAlign: "left"
        }
      }, row.type == 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Table: ", row.tableName) : "", row.type == 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Database driven mapping") : "", row.type == 2 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Type Name: ", row.typeName, /*#__PURE__*/_react.default.createElement("br", null), " Assembly Fullname: ", row.assemblyFullName) : "")];
    }
  }
  // {
  //     field: "actions",
  //     type: "actions",
  //     width: 200,
  //     headerName: "Archive",
  //     cellClassName: "actions",
  //     getActions: ({ id, row }) => {
  //       return [
  //         <GridActionsCellItem key={id}
  //           icon={<DeleteRoundedIcon />}
  //           label="Archive"
  //           className="textPrimary"
  //           onClick={async () => {

  //             let documentMappingId = "";
  //             let documentComponentId = "";

  //             // archive the column
  //             await apiService().delete("/DocumentMapping/RemoveColumnFromDocumentComponent?documentMappingId=" + documentMappingId + "&documentComponentId=" + documentComponentId)

  //           }}
  //         />,
  //       ];
  //     },
  // }
  ];
  const refDatabaseTableSelect = (0, _react.useRef)(null);
  const refNewDocTypeName = (0, _react.useRef)(null);
  const [dataGridRefreshKey, setDataGridRefreshKey] = (0, _react.useState)(0);
  const [document, setDocument] = (0, _react.useState)(null);
  const [showDatasource, setShowDatasource] = (0, _react.useState)(false);
  const [databaseTables, setDatabaseTables] = (0, _react.useState)(null);
  const [mappingType, setMappingType] = (0, _react.useState)("database");
  const refTypeName = (0, _react.useRef)(null);
  const refAssemblyFullName = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    let fetchData = async () => {
      let response = await apiService().get("/DocumentMapping/GetTablesFromDatabase");
      if (response != null && response.status == 200) {
        setDatabaseTables(response.data);
      }
    };
    fetchData();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 6
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, null, !disableTraining && /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      textAlign: "right",
      marginBottom: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => {
      setShowDatasource(true);
    }
  }, "Add Data Source")), /*#__PURE__*/_react.default.createElement(EditableDatagrid, {
    key: dataGridRefreshKey,
    loadedUser: true,
    url: "/DocumentMapping/GetDocumentTypes",
    columns: documentColumns
  })), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: showDatasource,
    onClose: () => {
      setShowDatasource(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Data Source"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, "A data source is a place or system where data is stored and collected. It can be a database, file, web service, or sensor. Data is extracted, transformed, and used for analysis and other purposes. Managing data sources is crucial for data-driven decision-making."), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 3
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: refNewDocTypeName,
    label: "Name for data source",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, null, /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
    id: "demo-row-radio-buttons-group-label"
  }, "How the data will connect:"), /*#__PURE__*/_react.default.createElement(_RadioGroup.default, {
    value: mappingType,
    row: true,
    "aria-labelledby": "demo-row-radio-buttons-group-label",
    name: "row-radio-buttons-group",
    onChange: env => {
      setMappingType(env.currentTarget.value);
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    value: "database",
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, null),
    label: "Database"
  }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    value: "mappingTable",
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, null),
    label: "Dynamic Mapping Table"
  }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    value: "customModelMapping",
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, null),
    label: "Custom Model"
  })))), mappingType == "database" && /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "demo-simple-select-label"
  }, "Database Tables"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    inputRef: refDatabaseTableSelect,
    labelId: "demo-simple-select-label",
    label: "Age"
  }, databaseTables != null && databaseTables.map((table, index) => {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      value: table.tableName
    }, table.tableName);
  }))))), mappingType == "customModelMapping" && /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: refTypeName,
    label: "Type Name (Example: API.Controllers.InvoiceUpload)",
    variant: "outlined",
    fullWidth: true,
    sx: {
      marginTop: 1
    }
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: refAssemblyFullName,
    label: "Assembly Full Name (Example: API)",
    variant: "outlined",
    fullWidth: true,
    sx: {
      marginTop: 1
    }
  })))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setShowDatasource(false);
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: async () => {
      if (mappingType == "customModelMapping") {
        let response = await apiService().post("/DocumentMapping/AddDataSource", {
          name: refNewDocTypeName.current.value,
          dataTable: refNewDocTypeName.current.value,
          documentType: 2,
          typeName: refTypeName.current.value,
          assemblyFullName: refAssemblyFullName.current.value
        });
        if (response != null && response.data.error != null) {
          alert(response.data.error);
        } else {
          if (response != null && (response.status == 204 || response.status == 200)) {
            setDataGridRefreshKey(dataGridRefreshKey + 1);
            setShowDatasource(false);
          }
        }
      } else {
        let response = await apiService().post("/DocumentMapping/AddDataSource", {
          name: refNewDocTypeName.current.value,
          dataTable: refDatabaseTableSelect.current != null ? refDatabaseTableSelect.current.value : "",
          documentType: mappingType == "database" ? 0 : 1
        });
        if (response != null && (response.status == 204 || response.status == 200)) {
          setDataGridRefreshKey(dataGridRefreshKey + 1);
          setShowDatasource(false);
        }
      }
    }
  }, "Add Data Source"))));
}

// ===== src/components/mapping/fileMapping.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileMapping = FileMapping;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
// import ManageMappingDocuments from './manageMappingDocuments';
// import AssignMapping from './AssignMapping';

function FileMapping(_ref) {
  let {
    currentUser,
    fileUploadName = "Upload Document",
    hideDocumentManager = false,
    setIsLoading = null,
    documentTypeId = null,
    onOpened = null,
    onPublished = null,
    onCanceled = null,
    onArchived = null
  } = _ref;
  const [documentComponentId, setDocumentComponentId] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (documentComponentId != null) {
      if (onOpened != null) {
        onOpened(documentComponentId);
      }
    }
  }, [documentComponentId]);
  return /*#__PURE__*/_react.default.createElement(_system.Box, null, documentComponentId == null && /*#__PURE__*/_react.default.createElement(ManageMappingDocuments, {
    fileUploadName: fileUploadName,
    documentTypeId: documentTypeId,
    hideDocumentManager: hideDocumentManager,
    companyId: currentUser != null ? currentUser.companyId : null,
    onManageField: documentComponentId => {
      setDocumentComponentId(documentComponentId);
    },
    onArchive: documentComponentId => {
      //alert(documentComponentId);
      if (onArchived != null) {
        onArchived(documentComponentId);
      }
    }
  }), documentComponentId != null && /*#__PURE__*/_react.default.createElement(AssignMapping, {
    currentUser: currentUser,
    setIsLoading: setIsLoading,
    documentComponentId: documentComponentId,
    onCancel: () => {
      setDocumentComponentId(null);
      if (onCanceled != null) {
        onCanceled(documentComponentId);
      }
    },
    onPublished: () => {
      setDocumentComponentId(null);
      if (onPublished != null) {
        onPublished(documentComponentId);
      }
    }
  }));
}

// ===== src/components/mapping/manageMappingDocuments.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManageMappingDocuments = ManageMappingDocuments;
var _react = _interopRequireWildcard(require("react"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _system = require("@mui/system");
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = babelHelpers.interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
var _InputLabel = babelHelpers.interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = babelHelpers.interopRequireDefault(require("@mui/material/FormControl"));
var _Select = babelHelpers.interopRequireDefault(require("@mui/material/Select"));
var _xDataGrid = require("@mui/x-data-grid");
var _DeleteRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/DeleteRounded"));
var _ListRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/ListRounded"));
var _PublishRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/PublishRounded"));
var _Grid = babelHelpers.interopRequireDefault(require("@mui/material/Grid"));
var _DownloadRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/DownloadRounded"));
// import {apiService, authService, StripeConnect, ReactDraft, EditableDatagrid, FileUploader} from 'authscape';

function ManageMappingDocuments(_ref) {
  let {
    fileUploadName,
    hideDocumentManager = false,
    documentTypeId = null,
    companyId = null,
    locationId = null,
    userId = null,
    onManageField = null,
    onArchive = null
  } = _ref;
  const [document, setDocument] = (0, _react.useState)(null);
  const [addColumnDialog, setAddColumnDialog] = (0, _react.useState)(false);
  const [showAddNewDocument, setShowAddNewDocument] = (0, _react.useState)(false);
  const [showTrainingDocument, setShowTrainingDocument] = (0, _react.useState)(false);
  const [columnName, setColumnName] = (0, _react.useState)('');
  const [selectedAddedColumn, setSelectedAddedColumn] = (0, _react.useState)(null);
  const [documentMappingColumns, setDocumentMappingColumns] = (0, _react.useState)(null);
  const [toColumnOptions, setToColumnOptions] = (0, _react.useState)(null);
  const [removeDocument, setRemoveDocument] = (0, _react.useState)(null);
  const [selectedDocumentComponentId, setSelectedDocumentComponentId] = (0, _react.useState)(null);
  const [dataGridRefreshKey, setDataGridRefreshKey] = (0, _react.useState)(0);
  const [dataGridMappingRefreshKey, setDataGridMappingRefreshKey] = (0, _react.useState)(0);
  const [selectedDocument, setSelectedDocument] = (0, _react.useState)(null);
  const [status, setStatus] = (0, _react.useState)(0);
  const [componentTypes, setComponentTypes] = (0, _react.useState)([]);
  const refHeaderRowInput = (0, _react.useRef)(null);
  const fileUploaderRef = (0, _react.useRef)(null);
  const refNewDocumentName = (0, _react.useRef)(null);
  const refSelectDocumentType = (0, _react.useRef)(null);
  const refNewColumnFileColumn = (0, _react.useRef)(null);
  const documentColumns = [{
    field: 'name',
    flex: 1,
    headerName: 'Document Name',
    width: 150,
    editable: false
  }, {
    field: 'documentTypeName',
    flex: 1,
    headerName: 'Document Type',
    width: 150,
    editable: false
  }, {
    field: "actions",
    type: "actions",
    width: 200,
    flex: 1,
    headerName: "",
    cellClassName: "actions",
    getActions: _ref2 => {
      let {
        id,
        row
      } = _ref2;
      return [/*#__PURE__*/_react.default.createElement(_Button.default, {
        variant: "text",
        startIcon: /*#__PURE__*/_react.default.createElement(_ListRounded.default, null),
        onClick: () => {
          if (onManageField != null) {
            onManageField(row.id);
          }
        }
      }, "Manage Fields"), /*#__PURE__*/_react.default.createElement(_Button.default, {
        variant: "text",
        startIcon: /*#__PURE__*/_react.default.createElement(_DownloadRounded.default, null),
        onClick: () => {
          window.open("https://view.officeapps.live.com/op/view.aspx?src=" + row.fileUri + "&wdOrigin=BROWSELINK");
        }
      }, "Download File"), /*#__PURE__*/_react.default.createElement(_Button.default, {
        variant: "text",
        startIcon: /*#__PURE__*/_react.default.createElement(_DeleteRounded.default, null),
        onClick: async () => {
          let documentMappingId = row.id;
          setRemoveDocument({
            companyId: companyId,
            documentMappingId: documentMappingId
          });
        }
      }, "Remove")];
    }
  }];
  (0, _react.useEffect)(() => {
    if (document != null) {
      const fetchData = async () => {
        let response = await apiService().get("/DocumentMapping/GetMappingFieldsForDocument?documentId=" + document.id);
        if (response != null) {
          setToColumnOptions(response.data);
          setDocumentMappingColumns([{
            field: 'name',
            flex: 1,
            headerName: 'File Column',
            width: 150,
            editable: true
          }, {
            field: 'toName',
            headerName: 'Upload To',
            flex: 1,
            width: 150,
            editable: true,
            type: 'singleSelect',
            valueOptions: response.data
          }, {
            field: "actions",
            type: "actions",
            width: 200,
            headerName: "Archive Fields",
            cellClassName: "actions",
            getActions: _ref3 => {
              let {
                id,
                row
              } = _ref3;
              return [/*#__PURE__*/_react.default.createElement(_xDataGrid.GridActionsCellItem, {
                key: id,
                icon: /*#__PURE__*/_react.default.createElement(_DeleteRounded.default, null),
                label: "Archive",
                className: "textPrimary",
                onClick: async () => {
                  let documentMappingId = row.id;
                  let documentComponentId = row.documentComponentId;

                  // archive the column
                  let response = await apiService().delete("/DocumentMapping/RemoveColumnFromDocumentComponent?documentMappingId=" + documentMappingId + "&documentComponentId=" + documentComponentId);
                  if (response != null && response.status == 200) {
                    setDataGridMappingRefreshKey(dataGridMappingRefreshKey + 1);
                  }
                }
              })];
            }
          }]);
        }
      };
      fetchData();
    }
  }, [document]);
  (0, _react.useEffect)(() => {
    if (showAddNewDocument && documentTypeId == null) {
      // get all document types
      const fetchData = async () => {
        let response = await apiService().post("/DocumentMapping/GetDocumentTypes");
        if (response != null && response.status == 200) {
          setComponentTypes(response.data.data);
        }
      };
      fetchData();
    }
  }, [showAddNewDocument, documentTypeId]);
  const GetHeaderRowData = async documentComponentId => {
    let response = await apiService().get("/DocumentMapping/GetHeaderRow?documentComponentId=" + documentComponentId);
    if (response != null && response.status == 200) {
      refHeaderRowInput.current.value = response.data;
    }
  };
  (0, _react.useEffect)(() => {
    if (status != null) {
      setDataGridRefreshKey(dataGridRefreshKey + 1);
    }
  }, [status]);
  return /*#__PURE__*/_react.default.createElement(_system.Box, null, !hideDocumentManager && /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 2,
    sx: {
      paddingBottom: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 3
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "demo-simple-select-label"
  }, "Status"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: status,
    label: "Status",
    onChange: event => {
      setStatus(event.target.value);
    }
  }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: 0
  }, "Open"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: 2
  }, "Published"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: 1
  }, "Archived"))))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 9
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      textAlign: "right",
      marginBottom: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => {
      setShowAddNewDocument(true);
    }
  }, fileUploadName)))), /*#__PURE__*/_react.default.createElement(EditableDatagrid, {
    key: dataGridRefreshKey,
    loadedUser: true,
    params: {
      companyId: companyId,
      userId: userId,
      locationId: locationId,
      status: status
    },
    url: "/DocumentMapping/GetDocumentComponents",
    columns: documentColumns
  })), hideDocumentManager && /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => {
      setShowAddNewDocument(true);
    }
  }, fileUploadName), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: showAddNewDocument,
    onClose: () => {
      setShowAddNewDocument(false);
    },
    fullWidth: true,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Upload Document"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, documentTypeId == null && /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description",
    sx: {
      paddingBottom: 2
    }
  }, "Please select the type of document, then click \"Choose a file\""), documentTypeId == null && /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      minWidth: 120
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "demo-simple-select-label"
  }, "Document Type"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    inputRef: refSelectDocumentType,
    onChange: val => {
      var _selectedDocument = componentTypes.find(s => s.id == val.target.value);
      setSelectedDocument(_selectedDocument);
    },
    label: "DocumentType"
  }, componentTypes != null && componentTypes.map(componentType => {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      value: componentType.id
    }, componentType.name);
  }))))), (selectedDocument != null || selectedDocument == null && documentTypeId != null) && /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      textAlign: "center",
      width: "100%",
      display: "flex",
      alignItems: "center",
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(FileUploader, {
    refOveride: fileUploaderRef,
    params: {
      documentTypeId: documentTypeId == null ? selectedDocument.id : documentTypeId,
      companyId: companyId
    },
    url: "/DocumentMapping/SyncDocument",
    multiple: true,
    variant: "custom",
    onUploadCompleted: responses => {
      if (responses.length > 0) {
        let row = responses[0].data;
        if (onManageField != null) {
          onManageField(row.id);
        }
      }
      setShowAddNewDocument(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    htmlFor: "file-upload",
    sx: {
      border: "2px dashed #aaa",
      padding: 20,
      textAlign: "center",
      cursor: "pointer"
    }
  }, 'Choose a file'))))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setShowAddNewDocument(false);
    }
  }, "Cancel"))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: showTrainingDocument,
    onClose: () => {
      setShowTrainingDocument(false);
    },
    fullWidth: true,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Setup Mapping"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, "If you'd like to submit a file, we can assist in configuring the fields to match the formatting of your document."), document != null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(FileUploader, {
    refOveride: fileUploaderRef,
    url: "/DocumentMapping/TrainDocument",
    params: {
      documentComponentId: document.id,
      companyId: companyId,
      locationId: locationId,
      userId: userId
    },
    multiple: false,
    variant: "custom",
    onUploadCompleted: () => {
      setDataGridMappingRefreshKey(dataGridMappingRefreshKey + 1);

      // setUpdate(!update);
      // handleClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 2,
      borderRadius: 2,
      backgroundColor: "#f5f5f5",
      border: "1px solid lightgray",
      cursor: "pointer",
      padding: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    id: "FileUploader",
    "aria-controls": open ? 'demo-customized-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    variant: "text",
    disableElevation: true,
    startIcon: /*#__PURE__*/_react.default.createElement(_PublishRounded.default, null),
    sx: {
      marginLeft: 1
    }
  }, "Upload Sample File"))))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setShowTrainingDocument(false);
    }
  }, "No, thank you"))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: addColumnDialog,
    onClose: () => {
      setAddColumnDialog(false);
    },
    fullWidth: true,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Add Column"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, "Include a column for document mapping"), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: refNewColumnFileColumn,
    id: "outlined-basic",
    label: "File Column",
    fullWidth: true,
    variant: "outlined"
  })), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "demo-simple-select-label"
  }, "Column Name"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: selectedAddedColumn,
    label: "Column Name",
    onChange: data => {
      setSelectedAddedColumn(data.target.value);
    }
  })))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setAddColumnDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: async () => {
      let response = await apiService().post("/DocumentMapping/AddNewField", {
        tableName: document.name,
        fieldName: refNewColumnFileColumn.current.value,
        fileColumn: selectedAddedColumn,
        companyId: companyId,
        locationId: locationId,
        userId: userId
      });
      if (response != null && response.status == 200) {
        setDataGridMappingRefreshKey(dataGridMappingRefreshKey + 1);
        setAddColumnDialog(false);
      }
    },
    autoFocus: true
  }, "Add Column"))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: removeDocument != null ? true : false,
    onClose: () => {
      setRemoveDocument(null);
    },
    fullWidth: true,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Remove the document"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, "Are you sure you want to remove this document?")), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setRemoveDocument(null);
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: async () => {
      let response = null;
      if (companyId != null) {
        response = await apiService().delete("/DocumentMapping/RemoveDocument?companyId=" + removeDocument.companyId + "&documentId=" + removeDocument.documentMappingId);
      } else {
        response = await apiService().delete("/DocumentMapping/RemoveDocument?documentId=" + removeDocument.documentMappingId);
      }
      if (response != null && response.status == 200) {
        setDataGridRefreshKey(dataGridRefreshKey + 1);
        setRemoveDocument(null);
        if (onArchive != null) {
          onArchive(removeDocument.documentMappingId);
        }
      }
    }
  }, "Remove Document"))));
}

// ===== src/components/mapping/mappedColumn.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MappedColumn = MappedColumn;
var _react = _interopRequireWildcard(require("react"));
var _Card = babelHelpers.interopRequireDefault(require("@mui/material/Card"));
var _CardActions = babelHelpers.interopRequireDefault(require("@mui/material/CardActions"));
var _CardContent = babelHelpers.interopRequireDefault(require("@mui/material/CardContent"));
var _system = require("@mui/system");
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _Typography = babelHelpers.interopRequireDefault(require("@mui/material/Typography"));
var _Link = babelHelpers.interopRequireDefault(require("@mui/icons-material/Link"));
var _LinkOff = babelHelpers.interopRequireDefault(require("@mui/icons-material/LinkOff"));
var _Stack = babelHelpers.interopRequireDefault(require("@mui/material/Stack"));
// import NewMappingColumn from './newMappingColumn';

// import MatchExistingMappedColumn from './matchExisting';
// import { apiService } from 'authscape';

function MappedColumn(_ref) {
  let {
    companyId,
    documentId,
    documentType,
    documentMappingId,
    name,
    toName,
    isMapped,
    toOptions,
    onResponse
  } = _ref;
  const notMatchedColor = "#ffe5e5";
  const matchedColor = "#fff";
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    sx: {
      marginTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_CardContent.default, {
    sx: {
      position: "relative",
      backgroundColor: isMapped ? notMatchedColor : matchedColor
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, name), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      position: "absolute",
      top: "10px",
      right: "10px"
    }
  }, isMapped ? /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_LinkOff.default, null), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    sx: {
      paddingTop: 0.5
    }
  }, "Not Matched")) : /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_Link.default, null), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    sx: {
      paddingTop: 0.5
    }
  }, "Matched"))), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "text.secondary"
  }, !isMapped && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "This column is matched with ", toName), isMapped && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "This column is not matched. If not matched it will not import"))), /*#__PURE__*/_react.default.createElement(_CardActions.default, {
    sx: {
      backgroundColor: isMapped ? notMatchedColor : matchedColor
    }
  }, !isMapped ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_LinkOff.default, null),
    size: "small",
    sx: {
      paddingLeft: 3
    },
    onClick: async () => {
      let response = await apiService().delete("/DocumentMapping/RemoveMatch?companyId=" + companyId + "&documentId=" + documentId + "&documentMappingId=" + documentMappingId);
      if (response != null && response.status == 200) {
        onResponse();
      }
    }
  }, "Remove Match")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(MatchExistingMappedColumn, {
    companyId: companyId,
    documentId: documentId,
    documentMappingId: documentMappingId,
    fromName: name,
    toOptions: toOptions,
    onResponse: onResponse
  }), /*#__PURE__*/_react.default.createElement(NewMappingColumn, {
    name: name,
    companyId: companyId,
    documentType: documentType,
    documentId: documentId,
    documentMappingId: documentMappingId,
    onResponse: onResponse
  }))));
}

// ===== src/components/mapping/matchExisting.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatchExistingMappedColumn = MatchExistingMappedColumn;
var _react = _interopRequireWildcard(require("react"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _system = require("@mui/system");
var _LinkRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/LinkRounded"));
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = babelHelpers.interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
var _InputLabel = babelHelpers.interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = babelHelpers.interopRequireDefault(require("@mui/material/FormControl"));
var _Select = babelHelpers.interopRequireDefault(require("@mui/material/Select"));
var _Checkbox = babelHelpers.interopRequireDefault(require("@mui/material/Checkbox"));
var _FormControlLabel = babelHelpers.interopRequireDefault(require("@mui/material/FormControlLabel"));
// import {apiService, authService, StripeConnect, ReactDraft, EditableDatagrid, FileUploader} from 'authscape';

function MatchExistingMappedColumn(_ref) {
  let {
    companyId,
    documentId,
    documentMappingId,
    fromName,
    toOptions,
    onResponse
  } = _ref;
  const [createNewOpen, setCreateNewOpen] = (0, _react.useState)(false);
  const [onlyAddRowIfFound, setOnlyAddRowIfFound] = (0, _react.useState)(false);
  const [rememberForNextTime, setRememberForNextTime] = (0, _react.useState)(true);
  const [selectedToColumn, setSelectedToColumn] = (0, _react.useState)(null);
  const handleClose = () => {
    setCreateNewOpen(false);
  };
  const checkboxRememberLabel = {
    inputProps: {
      'aria-label': 'Checkbox Remember'
    }
  };
  const SelectedExistingColumns = _ref2 => {
    let {
      toOptions
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_system.Box, {
      sx: {
        minWidth: 120
      }
    }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
      fullWidth: true
    }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
      id: "demo-simple-select-label"
    }, "Match to column"), /*#__PURE__*/_react.default.createElement(_Select.default, {
      labelId: "demo-simple-select-label",
      id: "demo-simple-select",
      value: selectedToColumn,
      label: "Age",
      onChange: event => {
        setSelectedToColumn(event.target.value);
      }
    }, toOptions != null && toOptions.map(toOption => {
      let isRequiredMessage = "";
      if (toOption.isRequired) {
        isRequiredMessage = " (Required)";
      }
      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        value: toOption.name
      }, toOption.visibleName, " ", isRequiredMessage);
    }))));
  };
  return /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: createNewOpen,
    onClose: handleClose,
    fullWidth: true,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Match existing column"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, "***Inform the user about what it means to match existing columns***"), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    id: "outlined-basic",
    label: "File Column Name",
    defaultValue: fromName,
    variant: "outlined",
    disabled: true,
    fullWidth: true
  })), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(SelectedExistingColumns, {
    toOptions: toOptions
  })), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    value: "end",
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, babelHelpers.extends({}, checkboxRememberLabel, {
      defaultChecked: true,
      onChange: event => {
        setRememberForNextTime(event.target.checked);
      }
    })),
    label: "Remember match for next time",
    labelPlacement: "end"
  }))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: async () => {
      let response = await apiService().put("/DocumentMapping/AssignMapping", {
        companyId: companyId,
        documentId: documentId,
        fileColumnName: fromName,
        documentMappingId: documentMappingId,
        matchedColumn: selectedToColumn,
        onlyAddRowIfColumnFound: onlyAddRowIfFound,
        rememberForNextTime: rememberForNextTime
      });
      if (response != null && response.status == 200) {
        onResponse();
        handleClose();
      }
    },
    autoFocus: true
  }, "Match Existing"))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_LinkRounded.default, null),
    size: "small",
    sx: {
      paddingLeft: 3
    },
    onClick: () => {
      setCreateNewOpen(true);
    }
  }, "Match Existing"));
}

// ===== src/components/mapping/newMappingColumn.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewMappingColumn = NewMappingColumn;
var _react = _interopRequireWildcard(require("react"));
var _Card = babelHelpers.interopRequireDefault(require("@mui/material/Card"));
var _CardContent = babelHelpers.interopRequireDefault(require("@mui/material/CardContent"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _system = require("@mui/system");
var _Typography = babelHelpers.interopRequireDefault(require("@mui/material/Typography"));
var _AddRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/AddRounded"));
var _LinkRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/LinkRounded"));
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = babelHelpers.interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
var _Grid = babelHelpers.interopRequireDefault(require("@mui/material/Grid"));
var _LocalParkingRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/LocalParkingRounded"));
var _TextFieldsRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/TextFieldsRounded"));
var _IntegrationInstructionsRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/IntegrationInstructionsRounded"));
var _ListAltRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/ListAltRounded"));
var _CalendarMonthRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/CalendarMonthRounded"));
var _CheckBoxRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/CheckBoxRounded"));
var _InsertPhotoRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/InsertPhotoRounded"));
// import { apiService } from 'authscape';

function NewMappingColumn(_ref) {
  let {
    name,
    companyId,
    documentType,
    documentId,
    documentMappingId,
    onResponse
  } = _ref;
  const newColumnNameRef = (0, _react.useRef)(null);
  const newColumnDescriptionRef = (0, _react.useRef)(null);
  const [createNewOpen, setCreateNewOpen] = (0, _react.useState)(false);
  const [selectedAttributeId, setSelectedAttributeId] = (0, _react.useState)(null);
  const handleClose = () => {
    setCreateNewOpen(false);
  };
  const AttributeTypeComponent = _ref2 => {
    let {
      id,
      icon,
      text
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 3
    }, /*#__PURE__*/_react.default.createElement(_Card.default, {
      sx: {
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: selectedAttributeId == id ? "#e5e5e5" : "none"
      },
      onClick: () => {
        setSelectedAttributeId(id);
      }
    }, /*#__PURE__*/_react.default.createElement(_CardContent.default, null, icon, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "body2",
      color: "text.secondary",
      sx: {
        paddingTop: 1
      }
    }, text))));
  };
  return /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: createNewOpen,
    onClose: handleClose,
    fullWidth: true,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Match to new column"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, "inform the user about adding a new columna and what that means here..."), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: newColumnNameRef,
    defaultValue: name,
    id: "outlined-basic",
    label: "Name",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: newColumnDescriptionRef,
    id: "outlined-basic",
    label: "Description (optional)",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body1",
    gutterBottom: true
  }, "Select how this column will be formatted")), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 2,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 0,
    icon: /*#__PURE__*/_react.default.createElement(_TextFieldsRounded.default, null),
    text: "text"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 1,
    icon: /*#__PURE__*/_react.default.createElement(_LocalParkingRounded.default, null),
    text: "Paragraph"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 2,
    icon: /*#__PURE__*/_react.default.createElement(_IntegrationInstructionsRounded.default, null),
    text: "HTML"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 3,
    icon: /*#__PURE__*/_react.default.createElement(_system.Box, null, 123),
    text: "Integer"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 4,
    icon: /*#__PURE__*/_react.default.createElement(_system.Box, null, 10.23),
    text: "Decimal"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 5,
    icon: /*#__PURE__*/_react.default.createElement(_ListAltRounded.default, null),
    text: "Dropdown"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 6,
    icon: /*#__PURE__*/_react.default.createElement(_CalendarMonthRounded.default, null),
    text: "Date"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 7,
    icon: /*#__PURE__*/_react.default.createElement(_LinkRounded.default, null),
    text: "URL"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 8,
    icon: /*#__PURE__*/_react.default.createElement(_CheckBoxRounded.default, null),
    text: "Boolean"
  }), /*#__PURE__*/_react.default.createElement(AttributeTypeComponent, {
    id: 9,
    icon: /*#__PURE__*/_react.default.createElement(_InsertPhotoRounded.default, null),
    text: "Photo"
  })))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: async () => {
      let response = await apiService().post("/DocumentMapping/AddNewColumnAndMapping", {
        companyId: companyId,
        documentId: documentId,
        documentMappingId: documentMappingId,
        newColumn: newColumnNameRef.current.value,
        description: newColumnDescriptionRef.current.value,
        attributeFieldType: selectedAttributeId
      });
      if (response != null && response.status == 200) {
        handleClose();
        onResponse();
      }
    },
    autoFocus: true
  }, "Create"))), documentType != null && documentType == 1 && /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_AddRounded.default, null),
    size: "small",
    sx: {
      paddingLeft: 3
    },
    onClick: () => {
      setCreateNewOpen(true);
    }
  }, "Create New Column"));
}

// ===== src/components/mapping/sortableColumn.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortableColumn = SortableColumn;
var _react = babelHelpers.interopRequireDefault(require("react"));
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _material = require("@mui/material");
var _Menu = babelHelpers.interopRequireDefault(require("@mui/icons-material/Menu"));
function SortableColumn(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = (0, _sortable.useSortable)({
    id: props.id
  });
  const style = {
    transform: _utilities.CSS.Transform.toString(transform),
    transition
  };
  return /*#__PURE__*/_react.default.createElement("div", babelHelpers.extends({
    ref: setNodeRef,
    style: style
  }, attributes, listeners), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton, null, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_Menu.default, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: props.id
  }))));
}

// ===== src/components/mapping/uploadMappedFile.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadMappedFile = UploadMappedFile;
var _react = _interopRequireWildcard(require("react"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _system = require("@mui/system");
var _PublishRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/PublishRounded"));
var _Menu = babelHelpers.interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
// import { apiService, FileUploader} from 'authscape';

function UploadMappedFile(_ref) {
  let {
    loadedUser,
    url = null,
    companyId = null,
    locationId = null,
    userId = null
  } = _ref;
  const [documentComponentOptions, setDocumentComponentOptions] = (0, _react.useState)(null);
  const [selectedDocumentComponentId, setSelectedDocumentComponentId] = (0, _react.useState)(null);
  const [anchorEl, setAnchorEl] = (0, _react.useState)(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const fileUploaderRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (selectedDocumentComponentId != null) {
      // trigger the file uploader, make sure param is filled in
      fileUploaderRef.current.click();
    }
  }, [selectedDocumentComponentId]);
  (0, _react.useEffect)(() => {
    if (loadedUser) {
      const fetchData = async () => {
        let _params = {};
        if (companyId != null) {
          _params.companyId = companyId;
        }
        if (userId != null) {
          _params.userId = userId;
        }
        if (locationId != null) {
          _params.locationId = locationId;
        }
        let response = await apiService().post("/DocumentMapping/GetDocumentComponents", _params);
        if (response != null && response.status == 200) {
          setDocumentComponentOptions(response.data.data);
        }
      };
      fetchData();
    }
  }, [loadedUser]);
  return /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(FileUploader, {
    refOveride: fileUploaderRef,
    params: {
      documentComponentId: selectedDocumentComponentId,
      companyId: companyId,
      locationId: locationId,
      userId: userId
    },
    url: url,
    multiple: false,
    variant: "custom",
    onUploadCompleted: () => {
      setSelectedDocumentComponentId(null); // we need an onUploadCancelled
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    id: "demo-positioned-button",
    "aria-controls": open ? 'demo-positioned-menu' : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? 'true' : undefined,
    startIcon: /*#__PURE__*/_react.default.createElement(_PublishRounded.default, null),
    sx: {
      marginLeft: 1
    },
    onClick: event => {
      setAnchorEl(event.currentTarget);
    }
  }, "Upload File(s)"), /*#__PURE__*/_react.default.createElement(_Menu.default, {
    id: "basic-menu",
    anchorEl: anchorEl,
    open: open,
    onClose: handleClose,
    MenuListProps: {
      'aria-labelledby': 'basic-button'
    }
  }, documentComponentOptions != null && documentComponentOptions.map(documentComponent => {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      onClick: () => {
        // assigns the param document component id
        setSelectedDocumentComponentId(documentComponent.id);

        // close the menu
        handleClose();
      }
    }, documentComponent.name + " (" + documentComponent.documentTypeName + ")");
  })));
}

// ===== src/components/pageToPDF.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageToPDF = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Box = babelHelpers.interopRequireDefault(require("@mui/material/Box"));
var _html2canvas = babelHelpers.interopRequireDefault(require("html2canvas"));
var _jspdf = require("jspdf");
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _DownloadRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/DownloadRounded"));
const PageToPDF = _ref => {
  let {
    buttonText = "Download",
    startIcon = /*#__PURE__*/_react.default.createElement(_DownloadRounded.default, null),
    variant = "contained",
    elementById,
    scale = 2,
    showHideClassElements = [],
    fileName = "download"
  } = _ref;
  const onHideElements = () => {
    for (let index = 0; index < showHideClassElements.length; index++) {
      const element = showHideClassElements[index];
      let elements = document.getElementsByClassName(element);
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    }
  };
  const onShowElements = () => {
    for (let index = 0; index < showHideClassElements.length; index++) {
      const element = showHideClassElements[index];
      let elements = document.getElementsByClassName(element);
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
    }
  };
  const printElement = () => {
    onHideElements();
    const input = document.getElementById(elementById);
    (0, _html2canvas.default)(input, {
      backgroundColor: null,
      scale: scale
    }).then(canvas => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new _jspdf.jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const scaledWidth = imgWidth * scaleFactor;
      const scaledHeight = imgHeight * scaleFactor;
      const x = (pdfWidth - scaledWidth) / 2;
      const y = 0; // Set y coordinate to 0 to align to the top
      pdf.addImage(imgData, "PNG", x, y, scaledWidth, scaledHeight);
      pdf.save(fileName + ".pdf");
    });
    onShowElements();
  };
  return /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: startIcon,
    variant: variant,
    onClick: () => {
      printElement();
    }
  }, buttonText));
};
exports.PageToPDF = PageToPDF;

// ===== src/components/privateLabel/AddDomainModal.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddDomain = AddDomain;
var _react = _interopRequireWildcard(require("react"));
var _system = require("@mui/system");
var _Grid = babelHelpers.interopRequireDefault(require("@mui/material/Grid"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _styles = require("@mui/material/styles");
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _IconButton = babelHelpers.interopRequireDefault(require("@mui/material/IconButton"));
var _Close = babelHelpers.interopRequireDefault(require("@mui/icons-material/Close"));
var _Typography = babelHelpers.interopRequireDefault(require("@mui/material/Typography"));
var _Stepper = babelHelpers.interopRequireDefault(require("@mui/material/Stepper"));
var _Step = babelHelpers.interopRequireDefault(require("@mui/material/Step"));
var _StepLabel = babelHelpers.interopRequireDefault(require("@mui/material/StepLabel"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
var _FmdBadRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/FmdBadRounded"));
var _FormControl = babelHelpers.interopRequireDefault(require("@mui/material/FormControl"));
var _Select = babelHelpers.interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _ContentCopyRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/ContentCopyRounded"));
var _CircularProgress = babelHelpers.interopRequireDefault(require("@mui/material/CircularProgress"));
var _material = require("@mui/material");
// import { apiService } from 'authscape';

function AddDomain(_ref) {
  let {
    open,
    azureWebsite,
    azureTxtValue,
    handleClose
  } = _ref;
  const steps = ['Enter a domain', 'Setup DNS Record', 'Go Live'];
  const [activeStep, setActiveStep] = (0, _react.useState)(0);
  const [completed, setCompleted] = (0, _react.useState)({});

  // const [domain, setDomain] = useState(null);
  const [subDomains, setSubDomains] = (0, _react.useState)(null);
  // const [topLevelDomains , setTopLevelDomains ] = useState(null);

  const [fullDomain, setFullDomain] = (0, _react.useState)(null);
  const [errorMessage, setErrorMessage] = (0, _react.useState)(null);
  const refDomain = (0, _react.useRef)(null);
  const refCNameTarget = (0, _react.useRef)(null);
  const reftxtTarget = (0, _react.useRef)(null);
  const refCNameName = (0, _react.useRef)(null);
  const reftxtName = (0, _react.useRef)(null);
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep = isLastStep() && !allStepsCompleted() ?
    // It's the last step, but not all steps have been completed,
    // find the first step that has been completed
    steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const getSubdomain = hostName => {
    const host = hostName; // e.g., subdomain.example.com
    const parts = host.split('.');
    if (parts.length > 2) {
      return parts[0]; // This will be 'subdomain'
    }
    return null; // No subdomain found
  };
  const handleStep = step => () => {
    setActiveStep(step);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const BootstrapDialog = (0, _styles.styled)(_Dialog.default)(_ref2 => {
    let {
      theme
    } = _ref2;
    return {
      '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
      },
      '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
      }
    };
  });
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const createTheDomainRequest = async () => {
    if (fullDomain == null || fullDomain == "") {
      return;
    }
    let response = await apiService().post("/PrivateLabel/GenerateDomain", {
      hostName: fullDomain
    });
    if (response != null && response.status == 200) {
      if (handleClose != null) {
        handleClose();
      }
    } else {
      let aStep = activeStep - 1;
      setActiveStep(aStep);
      setErrorMessage(response.data);
    }
  };
  (0, _react.useEffect)(() => {
    if (activeStep == 2) {
      createTheDomainRequest();
    }
  }, [activeStep]);
  const copyToClipboard = async text => {
    try {
      const permissions = await navigator.permissions.query({
        name: "clipboard-write"
      });
      if (permissions.state === "granted" || permissions.state === "prompt") {
        await navigator.clipboard.writeText(text);
        //alert('Copied to clipboard!');
      } else {
        throw new Error("Can't access the clipboard. Check your browser permissions.");
      }
    } catch (error) {
      alert('Error copying to clipboard:', error);
    }
  };
  function BootstrapDialogTitle(props) {
    const {
      children,
      onClose,
      ...other
    } = props;
    return /*#__PURE__*/_react.default.createElement(_DialogTitle.default, babelHelpers.extends({
      sx: {
        m: 0,
        p: 2
      }
    }, other), children, onClose ? /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      "aria-label": "close",
      onClick: onClose,
      sx: {
        position: 'absolute',
        right: 8,
        top: 8,
        color: theme => theme.palette.grey[500]
      }
    }, /*#__PURE__*/_react.default.createElement(_Close.default, null)) : null);
  }
  return /*#__PURE__*/_react.default.createElement(BootstrapDialog, {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    sx: {
      backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    fullWidth: true,
    maxWidth: "md",
    open: open
  }, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      padding: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_Stepper.default, {
    activeStep: activeStep,
    alternativeLabel: true
  }, steps.map(label => /*#__PURE__*/_react.default.createElement(_Step.default, {
    key: label
  }, /*#__PURE__*/_react.default.createElement(_StepLabel.default, {
    sx: {
      color: "#fff"
    }
  }, label)))), activeStep == 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(BootstrapDialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    sx: {
      textAlign: "center",
      fontSize: 30,
      marginTop: 2,
      lineHeight: 1
    }
  }, "What domain would you like to connect to ", process.env.companyName, "?"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: refDomain,
    id: "domainTxt",
    label: "Enter subdomain URL e.g catalog.mydomain.com",
    fullWidth: true,
    variant: "outlined",
    sx: {
      color: "white",
      marginTop: 2
    }
  })), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    sx: {
      textAlign: "center",
      fontSize: 14
    }
  }, /*#__PURE__*/_react.default.createElement(_FmdBadRounded.default, {
    sx: {
      color: "#1976d2",
      position: "relative",
      top: 8
    }
  }), " You must own the domain and have the ability to add records"))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => {
      if (refDomain.current.value == "") {
        return;
      }
      setFullDomain(refDomain.current.value);
      let _subDomain = getSubdomain(refDomain.current.value);
      setSubDomains(_subDomain);

      // var domainLand = parseDomain(refDomain.current.value);
      // setDomain(domainLand.domain);
      // setSubDomains(domainLand.subDomains);
      // setTopLevelDomains(domainLand.topLevelDomains);

      handleNext();
    }
  }, "Next: Setup DNS"))), activeStep == 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(BootstrapDialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    sx: {
      textAlign: "center",
      fontSize: 30,
      marginTop: 2
    }
  }, "Configure your DNS"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    sx: {
      textAlign: "center",
      fontSize: 14
    }
  }, "Add a CNAME and TXT Record to your domain by visiting your DNS provider.")), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      backgroundColor: "#f7f7f7",
      marginTop: 5,
      paddingLeft: 4,
      paddingRight: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 2,
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 2
  }, "Type", /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    value: 1,
    readOnly: true
  }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: 1
  }, "CNAME")))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 5
  }, "Name", /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: refCNameName,
    id: "NameDomainTxt",
    label: "",
    fullWidth: true,
    value: subDomains,
    variant: "outlined",
    sx: {
      color: "white",
      paddingTop: 2
    }
  }), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      textAlign: "center",
      paddingTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_ContentCopyRounded.default, null),
    sx: {
      width: "100%"
    },
    variant: "contained",
    onClick: () => {
      copyToClipboard(refCNameName.current.value);
    }
  }, "Copy"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 5
  }, "Target", /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: refCNameTarget,
    id: "targetDomainTxt",
    label: "",
    fullWidth: true,
    value: azureWebsite,
    variant: "outlined",
    sx: {
      color: "white",
      paddingTop: 2
    }
  }), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      textAlign: "center",
      paddingTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_ContentCopyRounded.default, null),
    sx: {
      width: "100%"
    },
    variant: "contained",
    onClick: () => {
      copyToClipboard(refCNameTarget.current.value);
    }
  }, "Copy"))))), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      backgroundColor: "#f7f7f7",
      paddingLeft: 4,
      paddingRight: 4,
      marginTop: 2,
      paddingBottom: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 2,
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 2
  }, "Type", /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true,
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    value: 1,
    readOnly: true
  }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    value: 1
  }, "TXT")))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 5
  }, "Name", /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: reftxtName,
    id: "NameDomain2Txt",
    label: "",
    fullWidth: true,
    value: "asuid." + subDomains,
    variant: "outlined",
    sx: {
      color: "white",
      marginTop: 2
    }
  }), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      textAlign: "center",
      paddingTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_ContentCopyRounded.default, null),
    sx: {
      width: "100%"
    },
    variant: "contained",
    onClick: () => {
      copyToClipboard(reftxtName.current.value);
    }
  }, "Copy"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 5
  }, "Target", /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: reftxtTarget,
    id: "targetDomain2Txt",
    label: "",
    fullWidth: true,
    value: azureTxtValue,
    variant: "outlined",
    sx: {
      color: "white",
      marginTop: 2
    }
  }), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      textAlign: "center",
      paddingTop: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_ContentCopyRounded.default, null),
    sx: {
      width: "100%"
    },
    variant: "contained",
    onClick: () => {
      copyToClipboard(reftxtTarget.current.value);
    }
  }, "Copy")))))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    onClick: () => {
      handleNext();
    }
  }, "Go Live"))), activeStep == 2 && /*#__PURE__*/_react.default.createElement(_system.Box, null, /*#__PURE__*/_react.default.createElement(BootstrapDialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose,
    sx: {
      textAlign: "center",
      fontSize: 30,
      marginTop: 4
    }
  }, "Creating your private label experience"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2,
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    sx: {
      textAlign: "center",
      fontSize: 18
    }
  }, "Please wait while we complete a few things on our side."), /*#__PURE__*/_react.default.createElement(_system.Box, {
    sx: {
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_CircularProgress.default, {
    color: "inherit"
  })))))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: errorMessage != null ? true : false,
    onClose: () => {
      setErrorMessage(null);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Issue Detected"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, {
    id: "alert-dialog-description"
  }, errorMessage)), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setErrorMessage(null);
    },
    autoFocus: true
  }, "OK"))));
}

// ===== src/components/privateLabel/privateLabelEditor.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivateLabelEditor = PrivateLabelEditor;
var _react = _interopRequireWildcard(require("react"));
var _react2 = _interopRequireWildcard(require("@monaco-editor/react"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _Check = babelHelpers.interopRequireDefault(require("@mui/icons-material/Check"));
var _Tabs = babelHelpers.interopRequireDefault(require("@mui/material/Tabs"));
var _Tab = babelHelpers.interopRequireDefault(require("@mui/material/Tab"));
var _Box = babelHelpers.interopRequireDefault(require("@mui/material/Box"));
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
var _PublishRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/PublishRounded"));
var _InputLabel = babelHelpers.interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = babelHelpers.interopRequireDefault(require("@mui/material/FormControl"));
var _Select = babelHelpers.interopRequireDefault(require("@mui/material/Select"));
// remove after NPM
// import {FileUploader, apiService, ColorPicker, Dropzone} from 'authscape';
// import AddDomain from "./AddDomainModal";

function PrivateLabelEditor(_ref) {
  let {
    loadedUser,
    notification,
    showAllDomains = false,
    companyId = null,
    azureWebsite = "",
    azureTxtValue = ""
  } = _ref;
  const monaco = (0, _react2.useMonaco)();
  const cssEditorRef = (0, _react.useRef)(null);
  const htmlEditorRef = (0, _react.useRef)(null);
  const [data, setData] = (0, _react.useState)(null);
  const [value, setValue] = (0, _react.useState)(0);
  const [fonts, setFonts] = (0, _react.useState)([]);
  const [oEMDomainList, setOEMDomainList] = (0, _react.useState)([]);
  const [dnsFields, setDnsFields] = (0, _react.useState)([]);
  const [selectedFont, setSelectedFont] = (0, _react.useState)(null);
  const [fontUri, setFontUri] = (0, _react.useState)(null);
  const [oEMDomain, setOEMDomain] = (0, _react.useState)(null);
  const [stateBaseUri, setBaseUri] = (0, _react.useState)('');
  const [isNewAccount, setIsNewAccount] = (0, _react.useState)(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const GetBaseUrl = () => {
    return window.location.protocol + "//" + window.location.host;
  };
  const loadDNSFields = async function () {
    let _domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var domain = null;
    if (_domain != null) {
      domain = _domain;
    } else {
      domain = GetBaseUrl();
    }
    let responseFields = await apiService().get("/PrivateLabel/GetFields?domain=" + domain + (companyId != null ? "&companyId=" + companyId : ""));
    if (responseFields != null && responseFields.status == 200) {
      setDnsFields(responseFields.data);
    }
  };
  (0, _react.useEffect)(() => {
    if (oEMDomain != null) {
      loadDNSFields(oEMDomain);
    }
  }, [oEMDomain]);
  const FetchOEMData = async () => {
    let response = await apiService().get("/PrivateLabel/GetFonts");
    if (response != null && response.status == 200) {
      setFonts(response.data);
    }
    if (showAllDomains) {
      let response = await apiService().get("/PrivateLabel/GetAllDomains");
      if (response != null && response.status == 200) {
        setOEMDomainList(response.data);
        if (response.data.length > 0) {
          setOEMDomain(response.data[0].name);
        } else {
          setIsNewAccount(true);
        }
      }
    } else {
      let response = await apiService().get("/PrivateLabel/GetAllDomainsUser");
      if (response != null && response.status == 200) {
        setOEMDomainList(response.data);
        if (response.data.length > 0) {
          setOEMDomain(response.data[0].name);
        } else {
          setIsNewAccount(true);
        }
      }
    }
  };
  (0, _react.useEffect)(() => {
    if (loadedUser) {
      FetchOEMData();
    }
  }, [loadedUser]);
  const [paginationModel, setPaginationModel] = _react.default.useState({
    page: 0,
    pageSize: 12
  });
  function handleCSSEditorDidMount(editor, monaco) {
    cssEditorRef.current = editor;
  }
  function handleHtmlEditorDidMount(editor, monaco) {
    htmlEditorRef.current = editor;
  }
  const columns = [{
    field: "label",
    headerName: "Fonts",
    editable: false,
    width: 300,
    renderCell: params => {
      const RenderData = row => {
        // const { id, value, field } = params;
        // const apiRef = useGridApiContext();
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
          sx: {
            fontFamily: row.value,
            fontSize: 20,
            cursor: "pointer"
          }
        }, row.value), /*#__PURE__*/_react.default.createElement("link", {
          href: "https://fonts.googleapis.com/css2?family=" + row.value,
          rel: "stylesheet"
        }));
      };
      return RenderData(params);
    }
  }];
  (0, _react.useEffect)(() => {
    const fetchData = async () => {
      // if (monaco) {
      //     //console.log("here is the monaco instance:", monaco);
      // }

      setData(null);
      let response = await apiService().get("/PrivateLabel/GetEditorData?domain=" + oEMDomain + (companyId != null ? "&companyId=" + companyId : ""));
      if (response.status == 200) {
        setData(response.data);
        setSelectedFont(response.data.fontFamily);
        setFontUri(response.data.fontUrl);
      }
    };
    fetchData();
  }, [monaco, oEMDomain]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      width: '100%'
    }
  }, selectedFont != null && fontUri == null && /*#__PURE__*/_react.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=" + selectedFont,
    rel: "stylesheet"
  }), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      paddingTop: 6
    }
  }, oEMDomain != null && /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "demo-simple-select-label"
  }, "Website Domain"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    defaultValue: oEMDomain,
    label: "Website Domain",
    onChange: val => {
      setOEMDomain(val.target.value);
    }
  }, oEMDomainList.map(dns => {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      value: dns.name
    }, dns.name);
  })))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider',
      paddingTop: 2
    }
  }, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
    value: value,
    onChange: handleChange,
    "aria-label": "basic tabs example"
  }, /*#__PURE__*/_react.default.createElement(_Tab.default, {
    label: "App Icon / Colors"
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, {
    label: "Fonts"
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, {
    label: "Style Sheet Editor"
  }), /*#__PURE__*/_react.default.createElement(_Tab.default, {
    label: "HTML Import Editor"
  }))), /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      padding: 2
    }
  }, value == 0 && /*#__PURE__*/_react.default.createElement(_Box.default, null, data != null && /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 4
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      paddingBottom: 4
    }
  }, /*#__PURE__*/_react.default.createElement(Dropzone, {
    image: "/DefaultNoImage.svg",
    text: "Drag 'n' drop your app icon here",
    onDrop: async file => {
      const data = new FormData();
      data.append("file", file);
      data.append("domain", stateBaseUri);
      let response = await apiService().post("/PrivateLabel/UploadAppIcon", data);
      if (response != null && response.status == 200) {
        window.location.reload();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 8
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      paddingBottom: 2,
      fontWeight: "bold",
      fontSize: 16
    }
  }, "Adjust the colors for your site"), /*#__PURE__*/_react.default.createElement(_Box.default, null, dnsFields != null && dnsFields.map((dnsField, index) => {
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      key: index
    }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
      item: true,
      xs: 3
    }, dnsField.name), /*#__PURE__*/_react.default.createElement(_material.Grid, {
      item: true,
      xs: 9
    }, /*#__PURE__*/_react.default.createElement(ColorPicker, {
      name: dnsField.name,
      defaultColor: dnsField.value,
      onColorChanged: async (name, hex) => {
        await apiService().post("/PrivateLabel/SetFieldValue", {
          id: dnsField.id,
          fieldId: dnsField.fieldId,
          value: hex
        });
        notification(dnsField.name + " Saved");
      }
    }))));
  })))))), value == 1 && /*#__PURE__*/_react.default.createElement(_Box.default, {
    value: value,
    index: 1
  }, data != null && /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 6
  }, loadedUser == true && /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, {
    rows: fonts,
    columns: columns,
    sx: {
      height: "80vh",
      width: "100%"
    },
    pagination: true,
    disableSelectionOnClick: true,
    onPaginationModelChange: setPaginationModel,
    paginationModel: paginationModel
    //pageSizeOptions={[5]}
    // rowCount={100}
    // rowSelectionModel={selectedFont}
    ,

    onRowClick: async params => {
      let response = await apiService().post("/PrivateLabel/SetFont", {
        companyId: companyId,
        domain: oEMDomain,
        value: params.row.label
      });
      if (response != null && response.status == 200) {
        setSelectedFont(params.row.label);
        setFontUri(null);
        notification("Font saved!");
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react.default.createElement(FileUploader, {
    url: "/PrivateLabel/UploadCustomFont",
    accept: ".otf,.ttf,.woff",
    params: {
      domain: stateBaseUri
    },
    multiple: true,
    variant: "custom",
    onUploadCompleted: () => {
      window.location.reload();
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "primary",
    variant: "contained",
    fullWidth: true,
    sx: {
      height: 50
    },
    startIcon: /*#__PURE__*/_react.default.createElement(_PublishRounded.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Box.default, null, "Upload Font"), "\xA0", /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("small", null, "(.OTF, .TTF, OR .WOFF)")))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: 4
    }
  }, "Font Selected:"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginBottom: 2,
      fontWeight: "bold",
      fontSize: 20
    }
  }, " ", selectedFont), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      fontFamily: selectedFont
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies odio. Nunc ut quam turpis. In hac habitasse platea dictumst. Suspendisse potenti. Nullam malesuada, purus id sagittis vestibulum, massa tellus gravida elit, vitae ultrices tortor nulla ac nunc. Aenean tempus semper est vel convallis. Sed feugiat, risus eu tincidunt eleifend, purus metus vulputate nulla, et condimentum sapien erat in nisi. Nunc non malesuada libero. Donec tempus tincidunt mi at vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Etiam nec eleifend orci. Suspendisse in est vel nunc rhoncus bibendum vitae id felis. Integer bibendum dolor elit, at tincidunt lacus tempor ac. Maecenas lobortis, mauris at condimentum feugiat, nulla orci condimentum massa, sed facilisis tellus ligula vitae metus. Aliquam erat volutpat. Quisque dignissim felis augue, at semper nisl posuere ut. Proin fringilla diam vitae faucibus finibus.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Aenean tempus semper est vel convallis. Sed feugiat, risus eu tincidunt eleifend, purus metus vulputate nulla, et condimentum sapien erat in nisi. Nunc non malesuada libero. Donec tempus tincidunt mi at vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti"))))), value == 2 && /*#__PURE__*/_react.default.createElement(_Box.default, {
    value: value,
    index: 3
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react.default.createElement("h4", {
    style: {
      marginBottom: "0px"
    }
  }, "Global CSS edits"), /*#__PURE__*/_react.default.createElement("small", null, "You can make edits to your stylesheet")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 6,
    sx: {
      textAlign: "right"
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_Check.default, null),
    sx: {
      marginTop: 4
    },
    variant: "contained",
    onClick: async () => {
      let response = await apiService().post("/PrivateLabel/SetGlobalCSS", {
        companyId: companyId,
        domain: oEMDomain,
        value: cssEditorRef.current.getValue()
      });
      if (response != null && response.status == 200) {
        notification("CSS Saved!");
      }
    }
  }, "Save Changes"))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      paddingTop: 1
    }
  }, data != null && /*#__PURE__*/_react.default.createElement(_react2.default, {
    height: "70vh",
    onMount: handleCSSEditorDidMount,
    defaultLanguage: "css",
    theme: "vs-dark",
    defaultValue: data == null || data.prettyCSS == null ? "" : data.prettyCSS
  }))), value == 3 && /*#__PURE__*/_react.default.createElement(_Box.default, {
    value: value,
    index: 4
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react.default.createElement("h4", {
    style: {
      marginBottom: "0px"
    }
  }, "HTML import Edits"), /*#__PURE__*/_react.default.createElement("small", null, "You can add imports such as google analytics or clarity")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 6,
    sx: {
      textAlign: "right"
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_Check.default, null),
    sx: {
      marginTop: 4
    },
    variant: "contained",
    onClick: async () => {
      let response = await apiService().post("/PrivateLabel/SetGlobalHTML", {
        companyId: companyId,
        domain: oEMDomain,
        value: htmlEditorRef.current.getValue()
      });
      if (response != null && response.status == 200) {
        notification("HTML saved!");
      }
    }
  }, "Save Changes"))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      paddingTop: 1
    }
  }, data != null && /*#__PURE__*/_react.default.createElement(_react2.default, {
    height: "70vh",
    onMount: handleHtmlEditorDidMount,
    defaultLanguage: "html",
    theme: "vs-dark",
    defaultValue: data == null || data.prettyHTML == null ? "" : data.prettyHTML
  }))))), /*#__PURE__*/_react.default.createElement(AddDomain, {
    open: isNewAccount,
    azureWebsite: azureWebsite,
    azureTxtValue: azureTxtValue,
    handleClose: async () => {
      setIsNewAccount(false);
      await FetchOEMData();
    }
  })));
}

// ===== src/components/spreadsheet/spreadsheetViewer.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpreadsheetViewer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Box = babelHelpers.interopRequireDefault(require("@mui/material/Box"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _List = babelHelpers.interopRequireDefault(require("@mui/material/List"));
var _Table = babelHelpers.interopRequireDefault(require("@mui/material/Table"));
var _TableBody = babelHelpers.interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = babelHelpers.interopRequireDefault(require("@mui/material/TableCell"));
var _TableContainer = babelHelpers.interopRequireDefault(require("@mui/material/TableContainer"));
var _TableHead = babelHelpers.interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = babelHelpers.interopRequireDefault(require("@mui/material/TableRow"));
var _reactgrid = require("@silevis/reactgrid");
var _reactDeviceDetect = require("react-device-detect");
var signalR = _interopRequireWildcard(require("@microsoft/signalr"));
var _Avatar = babelHelpers.interopRequireDefault(require("@mui/material/Avatar"));
var _Stack = babelHelpers.interopRequireDefault(require("@mui/material/Stack"));
var _Tooltip = babelHelpers.interopRequireDefault(require("@mui/material/Tooltip"));
var _AppBar = babelHelpers.interopRequireDefault(require("@mui/material/AppBar"));
var _Toolbar = babelHelpers.interopRequireDefault(require("@mui/material/Toolbar"));
var _VisibilityOffRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/VisibilityOffRounded"));
var _FilterListRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/FilterListRounded"));
var _SwapVertRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/SwapVertRounded"));
var _LineWeightRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/LineWeightRounded"));
var _PivotTableChartRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/PivotTableChartRounded"));
var _ViewWeekRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/ViewWeekRounded"));
var _Dialog = babelHelpers.interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = babelHelpers.interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = babelHelpers.interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = babelHelpers.interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = babelHelpers.interopRequireDefault(require("@mui/material/DialogTitle"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
var _core = require("@dnd-kit/core");
var _sortable = require("@dnd-kit/sortable");
// import { SortableColumn } from './Mapping/sortableColumn';

const SpreadsheetViewer = exports.SpreadsheetViewer = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    loadedUser,
    currentUser,
    documentId,
    url,
    sx,
    hideToolbar = false,
    onFocusLocationChanged = null,
    advanceQuery = null,
    onChange = null,
    hubUrl = null
  } = _ref;
  const [data, setData] = (0, _react.useState)(null);
  const [rows, setRows] = (0, _react.useState)(null);
  const [columns, setColumns] = (0, _react.useState)(null);
  const [cellChangesIndex, setCellChangesIndex] = (0, _react.useState)(() => -1);
  const [cellChanges, setCellChanges] = (0, _react.useState)(() => []);
  const highlightsRef = (0, _react.useRef)([]);
  const userIdRef = (0, _react.useRef)(0);
  const returnedRef = (0, _react.useRef)([]);
  const [showStickyDialog, setShowStickyDialog] = (0, _react.useState)(false);
  const leftColumnRef = (0, _react.useRef)(null);
  const rightColumnRef = (0, _react.useRef)(null);
  const topRowRef = (0, _react.useRef)(null);
  const bottomRowRef = (0, _react.useRef)(null);
  const [leftColumnSticky, setLeftColumnSticky] = (0, _react.useState)(null);
  const [rightColumnSticky, setRightColumnSticky] = (0, _react.useState)(null);
  const [topRowSticky, setTopRowSticky] = (0, _react.useState)(null);
  const [bottomRowSticky, setBottomRowSticky] = (0, _react.useState)(null);
  const [highlights, setHighlights] = (0, _react.useState)([]);
  const [sessions, setSessions] = (0, _react.useState)([]);
  const [requestedChanges, setRequestedChanges] = (0, _react.useState)([]);
  const [hubConnection, setHubConnection] = (0, _react.useState)(null);
  const getRows = () => {
    return returnedRef.current;
  };
  (0, _react.useImperativeHandle)(ref, () => ({
    getRows
  }));
  (0, _react.useEffect)(() => {
    if (requestedChanges != null && requestedChanges.length > 0) {
      // go into each request
      for (let index = 0; index < requestedChanges.length; index++) {
        const request = requestedChanges[index];

        // go into each row
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
          // alert(request.rowId + "==" + rows[rowIndex].rowId)
          // found our row!
          if (request.rowId == rows[rowIndex].rowId) {
            // look into each cell of the row
            for (let cellIndex = 0; cellIndex < rows[rowIndex].cells.length; cellIndex++) {
              if (rows[rowIndex].cells[cellIndex].columnId == request.fieldName) {
                switch (rows[rowIndex].cells[cellIndex].type) {
                  case "text":
                    rows[rowIndex].cells[cellIndex].text = request.value;
                    break;
                  case "checkbox":
                    rows[rowIndex].cells[cellIndex].checked = Boolean(request.value);
                    break;
                  case "date":
                    rows[rowIndex].cells[cellIndex].date = Date.parse(request.value);
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
                    rows[rowIndex].cells[cellIndex].text = parseFloat(request.value);
                    break;
                  case "time":
                    rows[rowIndex].cells[cellIndex].text = Date.parse(request.value);
                    break;
                  case "image":
                    rows[rowIndex].cells[cellIndex].url = request.value;
                    break;
                }
              }
            }
            break;
          }
        }
      }
      setRows(rowUpdate => rowUpdate);

      // clear our selected changes
      setRequestedChanges([]);
    }
  }, [requestedChanges]);
  const validateAllCells = cells => {
    let hasData = false;
    cells.forEach(element => {
      if (element.text != "" && element.text != null) {
        hasData = true;
      }
    });
    return hasData;
  };
  const getSpreadSheetRows = (headerCell, rows) => {
    // returnedRef
    returnedRef.current = [];
    let dataRows = [{
      rowId: "header",
      cells: headerCell
    }];
    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];
      if (rows != null && row.cells.length > 0 && advanceQuery != null && advanceQuery.rules.length > 0) {
        row.cells.forEach(element => {
          advanceQuery.rules.forEach(rule => {
            if (rule.field == element.columnId) {
              if (rule.operator == "contains") {
                if (element.text.toLowerCase().includes(rule.value.toLowerCase())) {
                  if (validateAllCells(row.cells)) {
                    dataRows.push({
                      rowId: row.rowId,
                      cells: row.cells
                    });
                    returnedRef.current.push(row);
                  }
                }
              } else if (rule.operator == "notContains") {
                if (!element.text.toLowerCase().includes(rule.value.toLowerCase())) {
                  if (validateAllCells(row.cells)) {
                    dataRows.push({
                      rowId: row.rowId,
                      cells: row.cells
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
            cells: row.cells
          });
          returnedRef.current.push(row);
        }
      }
    }
    return dataRows;
  };
  const handleUndoChanges = () => {
    if (cellChangesIndex >= 0) {
      setRows(prevPeople => undoChanges(cellChanges[cellChangesIndex], prevPeople));
    }
  };
  const handleRedoChanges = () => {
    if (cellChangesIndex + 1 <= cellChanges.length - 1) {
      setRows(prevPeople => redoChanges(cellChanges[cellChangesIndex + 1], prevPeople));
    }
  };
  (0, _react.useEffect)(() => {
    if (url) {
      setLeftColumnSticky(parseInt(localStorage.getItem("leftColumn")));
      setRightColumnSticky(parseInt(localStorage.getItem("rightColumn")));
      setTopRowSticky(parseInt(localStorage.getItem("topRow")));
      setBottomRowSticky(parseInt(localStorage.getItem("bottomRow")));
      const fetchData = async () => {
        let response = await apiService().get(url);
        if (response != null && response.status == 200) {
          setData(response.data);
          setRows(response.data.rows);
          setColumns(response.data.columns);
        }
      };
      fetchData();
    }
  }, [url]);

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

  const getSessions = async () => {
    let response = await apiService().get("/AuthScapeSpreadSheet/GetActiveSessions?documentId=" + documentId);
    var sessionData = response.data;
    let _sessions = [];
    if (sessionData != null && sessionData.length > 0) {
      sessionData.forEach(element => {
        if (_sessions.find(s => s.userId == element.userId) == null) {
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
  };
  const assignHighlights = clonedAray => {
    let _sessions = [];
    clonedAray.forEach(element => {
      _sessions.push({
        rowId: element.rowId,
        columnId: element.columnId,
        borderColor: element.borderColor
      });
    });
    setHighlights(_sessions);
  };
  const onFocusClicked = (userId, color, rowId, columnId) => {
    let isFound = false;
    let _highlights = highlightsRef.current;
    for (let index = 0; index < _highlights.length; index++) {
      const element = _highlights[index];
      if (element.userId == userId) {
        element.rowId = rowId;
        element.columnId = columnId;
        element.borderColor = color;
        isFound = true;
      }
    }
    if (isFound == false) {
      let newRecord = {
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
  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  (0, _react.useEffect)(() => {
    if (loadedUser) {
      userIdRef.current = currentUser.id;
      if (hubUrl == null) {
        return;
      }
      const connection = new signalR.HubConnectionBuilder().withUrl(hubUrl).build();
      connection.on("onUpdateUserSession", () => {
        getSessions();
      });
      connection.on("onClickSpreadsheet", (userId, color, rowId, columnId) => {
        if (userIdRef.current != userId) {
          onFocusClicked(userId, color, rowId, columnId);
        }
      });
      connection.on("onChangeValue", (userId, rowId, fieldName, value) => {
        if (userIdRef.current != userId) {
          setRequestedChanges(prevMessages => [...prevMessages, {
            userId,
            rowId,
            fieldName,
            value
          }]);
        }
      });
      connection.start().then(result => {
        var randomColor = getRandomColor();
        connection.invoke("Connect", currentUser.firstName + " " + currentUser.lastName, documentId, currentUser.id, randomColor);
        setHubConnection(connection);

        // get the init users, after that we need to hook it
        getSessions();
      });
    }
  }, [loadedUser]);
  const addEmptyRow = () => {
    // Create a new empty row
    const emptyRow = Array.from({
      length: columns.length
    }, () => ({
      value: ""
    }));
    setData(prevData => [...prevData, emptyRow]);
  };
  const applyNewValue = function (changes, prevPeople) {
    let usePrevValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    changes.forEach(change => {
      const personIndex = change.rowId;
      const fieldName = change.columnId;
      const cell = usePrevValue ? change.previousCell : change.newCell;
      prevPeople[personIndex][fieldName] = cell.text;
    });
    return [...prevPeople];
  };
  const undoChanges = (changes, prevPeople) => {
    const updated = applyNewValue(changes, prevPeople, true);
    setCellChangesIndex(cellChangesIndex - 1);
    return updated;
  };
  const redoChanges = (changes, prevPeople) => {
    const updated = applyNewValue(changes, prevPeople);
    setCellChangesIndex(cellChangesIndex + 1);
    return updated;
  };
  const handleChanges = changes => {
    setRows(prevPeople => applyChangesToPeople(changes, prevPeople));
  };
  const applyChangesToPeople = (changes, prevDetails) => {
    changes.forEach(change => {
      const dataRowId = change.rowId;
      const fieldName = change.columnId;

      // find the row and column
      let dataRow = prevDetails.find(d => d.rowId === dataRowId);
      let cellItem = dataRow.cells.find(s => s.columnId.toLowerCase() == fieldName.toLowerCase());
      if (cellItem.readOnly) {
        return;
      }
      let rowBuilder = {};
      for (let index = 0; index < dataRow.cells.length; index++) {
        const element = dataRow.cells[index];
        rowBuilder[element.columnId] = element.text;
      }
      let JSONBuilder = {};
      if (cellItem.type == "text") {
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
      } else if (cellItem.type == "number") {
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
      } else if (cellItem.type == "checkbox") {
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
      } else if (cellItem.type == "dropdown") {
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
      } else if (cellItem.type == "image") {
        JSONBuilder[cellItem.columnId] = cellItem.url;
        cellItem.url = change.newCell.url;
        if (onChange != null) {
          onChange(rowBuilder, dataRowId, fieldName, change.newCell.url);
        }
        try {
          hubConnection.invoke("CellChanged", documentId, userIdRef.current, dataRowId, fieldName, change.newCell.url.toString());
        } catch (exp) {
          console.error(exp);
        }
      }
    });
    return [...prevDetails];
  };
  const handleColumnResize = (ci, width) => {
    setColumns(prevColumns => {
      const columnIndex = prevColumns.findIndex(el => el.columnId === ci);
      const resizedColumn = prevColumns[columnIndex];
      const updatedColumn = {
        ...resizedColumn,
        width
      };
      prevColumns[columnIndex] = updatedColumn;
      return [...prevColumns];
    });
  };
  const stringAvatar = (name, color) => {
    return {
      sx: {
        bgcolor: color
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  };
  const getaListOfColumns = () => {
    let arrayItem = [];
    for (let index = 0; index < columns.length; index++) {
      const column = columns[index];
      arrayItem.push(column.columnId);
    }
    return arrayItem;
  };
  return /*#__PURE__*/_react.default.createElement(_Box.default, null, !hideToolbar && /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    position: "static",
    elevation: 0,
    sx: {
      backgroundColor: "white"
    }
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    disableGutters: true,
    sx: {
      color: "black"
    }
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "text",
    startIcon: /*#__PURE__*/_react.default.createElement(_VisibilityOffRounded.default, null),
    sx: {
      color: "black"
    }
  }, "Hide Fields"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "text",
    startIcon: /*#__PURE__*/_react.default.createElement(_PivotTableChartRounded.default, null),
    sx: {
      color: "black",
      paddingLeft: 4
    },
    onClick: () => {
      setShowStickyDialog(true);
    }
  }, "Sticky"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "text",
    startIcon: /*#__PURE__*/_react.default.createElement(_FilterListRounded.default, null),
    sx: {
      color: "black",
      paddingLeft: 4
    }
  }, "Filter"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "text",
    startIcon: /*#__PURE__*/_react.default.createElement(_SwapVertRounded.default, null),
    sx: {
      color: "black",
      paddingLeft: 4
    }
  }, "Sort"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "text",
    startIcon: /*#__PURE__*/_react.default.createElement(_LineWeightRounded.default, null),
    sx: {
      color: "black",
      paddingLeft: 4
    }
  }, "Row Height"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "text",
    startIcon: /*#__PURE__*/_react.default.createElement(_ViewWeekRounded.default, null),
    sx: {
      color: "black",
      paddingLeft: 4
    }
  }, "Reorder Columns")), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      flexGrow: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    spacing: 2
  }, sessions.map(user => {
    return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      title: user.name
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, babelHelpers.extends({}, stringAvatar(user.name, user.borderColor), {
      alt: user.name
    })));
  }))))), leftColumnSticky != null && rightColumnSticky != null && topRowSticky != null && bottomRowSticky != null && data != null && columns != null && /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      ...sx
    }
  }, data != null && rows != null && /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: "reactgrid-gold",
    onKeyDown: e => {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
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
  }, /*#__PURE__*/_react.default.createElement(_reactgrid.ReactGrid, {
    rows: getSpreadSheetRows(data.headerCell, rows),
    highlights: highlights,
    columns: columns,
    enableFillHandle: true,
    onFocusLocationChanged: location => {
      try {
        hubConnection.invoke("FocusLocationChanged", documentId, userIdRef.current, location.rowId, location.columnId);
      } catch (exp) {
        console.error(exp);
      }
      if (onFocusLocationChanged != null) {
        onFocusLocationChanged(location.rowId, location.columnId);
      }
    },
    onCellsChanged: handleChanges,
    enableRowSelection: true,
    enableColumnSelection: true,
    enableRangeSelection: true
    //onContextMenu={simpleHandleContextMenu}
    ,

    onColumnResized: handleColumnResize,
    stickyTopRows: topRowSticky,
    stickyBottomRows: bottomRowSticky,
    stickyLeftColumns: leftColumnSticky,
    stickyRightColumns: rightColumnSticky
  }))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: showStickyDialog,
    onClose: () => {
      setShowStickyDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Sticky"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, "Stick chosen rows and columns at the top or bottom rows or left and right columns. Sticky rows or columns will remain visible at all times."), /*#__PURE__*/_react.default.createElement(_TableContainer.default, {
    sx: {
      paddingTop: 4
    }
  }, /*#__PURE__*/_react.default.createElement(_Table.default, {
    "aria-label": "customized table"
  }, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, "Left Column"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, "Right Column"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, "Top Row"), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    align: "left"
  }, "Bottom Row"))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    sx: {
      paddingTop: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: leftColumnRef,
    type: "number",
    defaultValue: "0",
    variant: "outlined"
  })), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    sx: {
      paddingTop: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: rightColumnRef,
    type: "number",
    defaultValue: "0",
    variant: "outlined"
  })), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    sx: {
      paddingTop: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: topRowRef,
    type: "number",
    defaultValue: "0",
    variant: "outlined"
  })), /*#__PURE__*/_react.default.createElement(_TableCell.default, {
    sx: {
      paddingTop: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    inputRef: bottomRowRef,
    type: "number",
    defaultValue: "0",
    variant: "outlined"
  })))))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setShowStickyDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
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
  }, "Apply"))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    open: false,
    onClose: () => {
      setShowStickyDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "alert-dialog-title"
  }, "Reorder Columns"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, {
    id: "alert-dialog-description"
  }, "Assign the column order from left to right."), columns != null && /*#__PURE__*/_react.default.createElement(_List.default, null, /*#__PURE__*/_react.default.createElement(_core.DndContext, {
    onDragEnd: event => {
      const {
        over
      } = event;
      alert(over.id);
      // If the item is dropped over a container, set it as the parent
      // otherwise reset the parent to `null`
      //setParent(over ? over.id : null);
    }
  }, /*#__PURE__*/_react.default.createElement(_sortable.SortableContext, {
    items: getaListOfColumns()
  }, columns.map(item => {
    return /*#__PURE__*/_react.default.createElement(SortableColumn, {
      key: item.columnId,
      id: item.columnId
    });
  }))))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {
      setShowStickyDialog(false);
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: () => {},
    autoFocus: true
  }, "Apply"))));
});

// ===== src/components/stripe/StripeConnect.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeConnect = void 0;
var _react = _interopRequireWildcard(require("react"));
const StripeConnect = async () => {
  let baseUrl = GetBaseUrl();
  let response = await apiService().get("/Payment/SetupStripeConnect?returnBaseUrl=" + baseUrl);
  return response;
};
exports.StripeConnect = StripeConnect;

// ===== src/components/stripe/StripePayment.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StripePayment;
var _react = _interopRequireWildcard(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _stripeJs = require("@stripe/stripe-js");
var _PaymentRounded = babelHelpers.interopRequireDefault(require("@mui/icons-material/PaymentRounded"));
var _Typography = babelHelpers.interopRequireDefault(require("@mui/material/Typography"));
var _Select = babelHelpers.interopRequireDefault(require("@mui/material/Select"));
var _Grid = babelHelpers.interopRequireDefault(require("@mui/material/Grid"));
var _MenuItem = babelHelpers.interopRequireDefault(require("@mui/material/MenuItem"));
var _Box = babelHelpers.interopRequireDefault(require("@mui/material/Box"));
var _Button = babelHelpers.interopRequireDefault(require("@mui/material/Button"));
var _Tab = babelHelpers.interopRequireDefault(require("@mui/material/Tab"));
var _Tabs = babelHelpers.interopRequireDefault(require("@mui/material/Tabs"));
var _TextField = babelHelpers.interopRequireDefault(require("@mui/material/TextField"));
const CheckoutForm = _ref => {
  let {
    payButtonText,
    invoiceId,
    clientSecret,
    currentUser,
    paymentMethodType,
    walletId,
    onResponse,
    amount
  } = _ref;
  const [isPaymentProcessing, setIsPaymentProcessing] = (0, _react.useState)(false);
  const stripe = (0, _reactStripeJs.useStripe)();
  const elements = (0, _reactStripeJs.useElements)();
  const [errorMessage, setErrorMessage] = (0, _react.useState)(null);
  const handleSubmit = async event => {
    setIsPaymentProcessing(true);

    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.

      //setIsPaymentProcessing(false);
      return;
    }
    if (amount == null || currentUser != null) {
      const {
        error
      } = await stripe.confirmSetup({
        //`Elements` instance that was used to create the Payment Element
        elements,
        redirect: "if_required"
        // confirmParams: {
        //   return_url: process.env.websiteBaseUri + '/confirmSetup?redirectUrl=' + encodeURIComponent(window.location.search),
        // },
      });
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setIsPaymentProcessing(false);
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.

        //setIsPaymentProcessing(false);

        let response = null;
        response = await stripe.retrieveSetupIntent(clientSecret);
        let setupIntent = response.setupIntent;
        switch (setupIntent.status) {
          case 'succeeded':
            // need to store the payment intent with the customer if they are logged in... currentUser

            let addPaymentMethodResponse = await apiService().post("/Payment/AddPaymentMethod", {
              walletId: walletId,
              paymentMethodType: paymentMethodType,
              stripePaymentMethod: setupIntent.payment_method
            });
            if (addPaymentMethodResponse != null && addPaymentMethodResponse.status == 200) {
              onResponse("succeeded", setupIntent.id, setupIntent.payment_method);
              if (amount != null) {
                if (invoiceId != null) {
                  let response = await apiService().post("/Invoices/PayInvoice", {
                    invoiceId: invoiceId,
                    walletPaymentMethodId: addPaymentMethodResponse.data
                  });
                  if (response != null && response.status == 200) {
                    onResponse("paid", null);
                  } else {
                    onResponse("failed", null);
                  }
                } else {
                  // charge the customer
                  let response = await apiService().post("/Payment/Charge", {
                    paymentMethodType: paymentMethodType,
                    walletPaymentMethodId: addPaymentMethodResponse.data,
                    amount: amount
                  });
                  if (response != null && response.status == 200) {
                    onResponse("paid", response.data.stripePaymentIntentId);
                  } else {
                    onResponse("failed", null);
                  }
                }
              }
            } else {
              onResponse("failed", null);
            }
            break;
          case 'processing':
            onResponse("processing", setupIntent.id, setupIntent.payment_method);
            setIsPaymentProcessing(false);
            break;
          case 'requires_payment_method':
            onResponse("requires_payment_method", null);
            setIsPaymentProcessing(false);
            break;
          default:
            onResponse("failed", null);
            setIsPaymentProcessing(false);
            break;
        }
      }
    } else {
      const {
        error
      } = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        redirect: "if_required",
        confirmParams: {
          return_url: process.env.websiteBaseUri + '/confirmPayment?redirectUrl=' + encodeURIComponent(window.location.search)
        }
      });
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setIsPaymentProcessing(false);
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.

        let response = null;
        if (amount == null) {
          response = await stripe.retrieveSetupIntent(clientSecret);
        } else {
          response = await stripe.retrievePaymentIntent(clientSecret);
        }
        let paymentIntent = response.paymentIntent;
        switch (paymentIntent.status) {
          case 'succeeded':
            // need to store the payment intent with the customer if they are logged in... currentUser
            onResponse("succeeded", paymentIntent.id);
            break;
          case 'processing':
            onResponse("processing", paymentIntent.id);
            setIsPaymentProcessing(false);
            break;
          case 'requires_payment_method':
            onResponse("requires_payment_method", null);
            setIsPaymentProcessing(false);
            break;
          default:
            onResponse("failed", null);
            setIsPaymentProcessing(false);
            break;
        }
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_reactStripeJs.PaymentElement, null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    startIcon: /*#__PURE__*/_react.default.createElement(_PaymentRounded.default, null),
    type: "submit",
    fullWidth: true,
    variant: "contained",
    disabled: !stripe || isPaymentProcessing,
    sx: {
      marginTop: 2,
      padding: 2
    }
  }, payButtonText != null ? payButtonText : amount != null ? "Pay Now" : "Add Payment Method"), errorMessage && /*#__PURE__*/_react.default.createElement("div", null, errorMessage));
};
function StripePayment(_ref2) {
  let {
    amount = null,
    priceId = null,
    stripeCustomerId = null,
    logOffUserName,
    invoiceId = null,
    logOffEmail,
    paymentMethodType = 3,
    currentUser,
    onResponse,
    payButtonText = null
  } = _ref2;
  const stripePromise = (0, _stripeJs.loadStripe)(process.env.stripePublicKey);
  const [options, setOptions] = (0, _react.useState)(null);
  const [walletId, setWalletId] = (0, _react.useState)(null);
  const [value, setValue] = (0, _react.useState)(0);
  const [paymentMethods, setPaymentMethods] = (0, _react.useState)([]);
  const [paymentMethod, setPaymentMethod] = (0, _react.useState)(null);
  const paymentMethodOpened = async () => {
    let response = null;
    if (currentUser == null) {
      response = await apiService().post("/Payment/ConnectCustomerNoAuth", {
        paymentMethodType: paymentMethodType,
        amount: amount,
        priceId: priceId,
        name: logOffUserName,
        email: logOffEmail,
        stripeCustomerId: stripeCustomerId
      });
    } else {
      response = await apiService().post("/Payment/ConnectCustomer", {
        paymentMethodType: paymentMethodType,
        amount: amount,
        priceId: priceId,
        stripeCustomerId: stripeCustomerId
      });
    }
    if (response != null && response.status == 200) {
      setOptions({
        clientSecret: response.data.clientSecret
      });
      setWalletId(response.data.walletId);
      let responsePayments = await apiService().get("/Payment/GetPaymentMethods?paymentMethodType=" + paymentMethodType);
      if (responsePayments != null && responsePayments.status == 200) {
        if (responsePayments.data.length > 0) {
          setValue(1);
        }
        setPaymentMethods(responsePayments.data);
      }
    }
  };
  (0, _react.useEffect)(() => {
    paymentMethodOpened();
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }
  const PaymentMethod = _ref3 => {
    let {
      paymentMethod,
      clicked
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      fullWidth: true,
      sx: {
        height: 160,
        width: "100%",
        marginTop: 2,
        backgroundColor: "#2196F3",
        position: "relative",
        border: "1px solid #2196F3",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer"
      },
      onClick: () => {
        clicked(paymentMethod.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      gutterBottom: true,
      variant: "body",
      component: "div",
      sx: {
        fontSize: 14,
        position: "absolute",
        left: 15,
        top: 10,
        color: "white"
      }
    }, paymentMethod.brand), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      gutterBottom: true,
      variant: "body",
      component: "div",
      sx: {
        verticalAlign: "middle",
        fontSize: 18,
        color: "white"
      }
    }, "* * * * \xA0 * * * * \xA0 * * * * \xA0 ", paymentMethod.last4), /*#__PURE__*/_react.default.createElement(_Grid.default, {
      container: true,
      spacing: 1,
      sx: {
        position: "absolute",
        bottom: 8,
        marginLeft: 0,
        width: "100%"
      }
    }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 12,
      sx: {
        textAlign: "right",
        paddingRight: 2
      }
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      gutterBottom: true,
      variant: "body",
      component: "div",
      sx: {
        fontSize: 12,
        marginLeft: 2,
        marginTop: 1,
        color: "#e9e9e9"
      }
    }, "EXPIRES"), /*#__PURE__*/_react.default.createElement(_Typography.default, {
      gutterBottom: true,
      variant: "body",
      component: "div",
      sx: {
        fontSize: 12,
        marginLeft: 2,
        marginTop: "-9px",
        color: "white"
      }
    }, paymentMethod.expMonth, "/", paymentMethod.expYear))));
  };
  function TabPanel(props) {
    const {
      children,
      value,
      index,
      ...other
    } = props;
    return /*#__PURE__*/_react.default.createElement("div", babelHelpers.extends({
      role: "tabpanel",
      hidden: value !== index,
      id: `simple-tabpanel-${index}`,
      "aria-labelledby": `simple-tab-${index}`
    }, other), value === index && /*#__PURE__*/_react.default.createElement(_Box.default, {
      sx: {
        p: 3
      }
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, children)));
  }
  const PaymentContent = () => {
    return /*#__PURE__*/_react.default.createElement(_Box.default, {
      sx: {
        width: '100%'
      }
    }, currentUser == null && /*#__PURE__*/_react.default.createElement(_Box.default, {
      mt: 4
    }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 6
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      id: "outlined-basic",
      label: "First Name",
      variant: "outlined",
      fullWidth: true
    })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 6
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      id: "outlined-basic",
      label: "Last Name",
      variant: "outlined",
      fullWidth: true
    })), /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      id: "outlined-basic",
      label: "Email",
      variant: "outlined",
      fullWidth: true
    }))), options != null && process.env.stripePublicKey != null && /*#__PURE__*/_react.default.createElement(_reactStripeJs.Elements, {
      stripe: stripePromise,
      options: options
    }, /*#__PURE__*/_react.default.createElement(CheckoutForm, {
      payButtonText: payButtonText,
      invoiceId: invoiceId,
      clientSecret: options != null ? options.clientSecret : null,
      onResponse: onResponse,
      paymentMethodType: paymentMethodType,
      currentUser: currentUser,
      walletId: walletId,
      amount: amount
    }))), currentUser != null && /*#__PURE__*/_react.default.createElement(_Box.default, null, /*#__PURE__*/_react.default.createElement(_Box.default, {
      sx: {
        borderBottom: 1,
        borderColor: 'divider'
      }
    }, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
      value: value,
      onChange: handleChange,
      "aria-label": "basic tabs example"
    }, /*#__PURE__*/_react.default.createElement(_Tab.default, babelHelpers.extends({
      label: "Add Payment Method"
    }, a11yProps(0))), paymentMethods.length > 0 && /*#__PURE__*/_react.default.createElement(_Tab.default, babelHelpers.extends({
      label: "Existing Payment Method"
    }, a11yProps(1))))), paymentMethods.length > 0 && /*#__PURE__*/_react.default.createElement(TabPanel, {
      value: value,
      index: 1
    }, /*#__PURE__*/_react.default.createElement(_Select.default, {
      sx: {
        marginTop: 4
      },
      fullWidth: true,
      id: "demo-simple-select",
      value: paymentMethod,
      onChange: val => {
        setPaymentMethod(val.target.value);
      }
    }, paymentMethods != null && paymentMethods.map((paymentMethod, index) => {
      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: index,
        value: paymentMethod.id,
        fullWidth: true,
        sx: {
          width: "100%"
        }
      }, /*#__PURE__*/_react.default.createElement(PaymentMethod, {
        paymentMethod: paymentMethod,
        clicked: () => {}
      }));
    })), amount != null && /*#__PURE__*/_react.default.createElement(_Button.default, {
      startIcon: /*#__PURE__*/_react.default.createElement(_PaymentRounded.default, null),
      type: "submit",
      variant: "contained",
      disabled: paymentMethod == null,
      sx: {
        marginTop: 2
      },
      onClick: async () => {
        if (invoiceId != null) {
          let response = await apiService().post("/Invoices/PayInvoice", {
            invoiceId: invoiceId,
            walletPaymentMethodId: paymentMethod
          });
          if (response != null && response.status == 200) {
            onResponse("paid", null);
          }
        } else {
          let response = await apiService().post("/Payment/Charge", {
            paymentMethodType: paymentMethodType,
            walletPaymentMethodId: paymentMethod,
            amount: amount
          });
          if (response != null && response.status == 200) {
            onResponse("paid", response.data.stripePaymentIntentId);
          }
        }
      }
    }, payButtonText != null ? payButtonText : "Pay Now")), /*#__PURE__*/_react.default.createElement(TabPanel, {
      value: value,
      index: 0
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Box.default, {
      mt: 4
    }, options != null && process.env.stripePublicKey != null && /*#__PURE__*/_react.default.createElement(_reactStripeJs.Elements, {
      stripe: stripePromise,
      options: options
    }, /*#__PURE__*/_react.default.createElement(CheckoutForm, {
      payButtonText: payButtonText,
      invoiceId: invoiceId,
      clientSecret: options != null ? options.clientSecret : null,
      onResponse: onResponse,
      paymentMethodType: paymentMethodType,
      walletId: walletId,
      currentUser: currentUser,
      amount: amount
    })))))));
  };
  return /*#__PURE__*/_react.default.createElement(PaymentContent, null);
}

// ===== src/lib/sitemap-route.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSitemapRoute = createSitemapRoute;
/**
 * AuthScape Sitemap - App Router Implementation
 * This file contains the complete sitemap logic for Next.js App Router (Route Handlers)
 * Users will import and call createSitemapRoute from their app/sitemap.xml/route.js file
 */

/**
 * Creates a sitemap route handler with the provided API URI
 * @param {string} apiUri - The AuthScape API base URI (from process.env.apiUri)
 * @returns {Function} GET route handler function
 */
function createSitemapRoute(apiUri) {
  return async function GET(request) {
    try {
      // Get the domain from the request
      const url = new URL(request.url);
      const protocol = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
      const host = request.headers.get('host') || url.host;

      // Determine protocol based on host
      let domain;
      if (host.includes("localhost")) {
        domain = "http://" + host;
      } else {
        domain = "https://" + host;
      }
      if (!apiUri) {
        console.error('AuthScape Sitemap Error: apiUri is not configured in environment variables');
        return new Response('Sitemap configuration error: API URI not set. Please ensure apiUri is defined in your next.config.js env object or .env.local file.', {
          status: 500,
          headers: {
            'Content-Type': 'text/plain'
          }
        });
      }

      // URL encode the domain for the API request
      const encodedDomain = encodeURIComponent(domain);
      const apiUrl = `${apiUri}/api/Sitemap?domain=${encodedDomain}`;
      console.log('Fetching sitemap from:', apiUrl);
      console.log('Domain being sent:', domain);
      console.log('Encoded domain:', encodedDomain);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.error('API Response Status:', response.status);
        console.error('API Response StatusText:', response.statusText);
        const errorBody = await response.text();
        console.error('API Response Body:', errorBody);
        throw new Error(`API request failed with status ${response.status}: ${errorBody}`);
      }

      // Get the sitemap XML
      const sitemap = await response.text();
      console.log('Sitemap fetched successfully, length:', sitemap.length);

      // Return the XML response with appropriate headers
      return new Response(sitemap, {
        status: 200,
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate'
        }
      });
    } catch (error) {
      console.error('AuthScape Sitemap Error:', error);
      return new Response(`Error generating sitemap: ${error.message || error}`, {
        status: 500,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }
  };
}

// ===== src/lib/sitemap.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sitemap = Sitemap;
exports.createSitemapHandler = createSitemapHandler;
/**
 * AuthScape Sitemap - Pages Router Implementation
 * This file contains the complete sitemap logic for Next.js Pages Router
 * Users will import and call createSitemapHandler from their pages/sitemap.xml.js file
 */

// Empty component - sitemap is generated server-side only
function Sitemap() {
  return null;
}

/**
 * Creates a sitemap handler with the provided API URI
 * @param {string} apiUri - The AuthScape API base URI (from process.env.apiUri)
 * @returns {Function} getServerSideProps function
 */
function createSitemapHandler(apiUri) {
  return async function getServerSideProps(_ref) {
    let {
      req,
      res
    } = _ref;
    try {
      // Get the domain from the request
      const protocol = req.headers['x-forwarded-proto'] || 'http';
      const host = req.headers.host;
      const domain = `${protocol}://${host}`;

      // URL encode the domain for the API request
      const encodedDomain = encodeURIComponent(domain);
      if (!apiUri) {
        console.error('AuthScape Sitemap Error: apiUri is not configured in environment variables');
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Sitemap configuration error: API URI not set. Please ensure apiUri is defined in your next.config.js env object or .env.local file.');
        res.end();
        return {
          props: {}
        };
      }
      let response = await fetch(`${apiUri}/api/Sitemap?domain=${encodedDomain}`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      // Generate the sitemap XML
      const sitemap = await response.text();

      // Set the appropriate headers for XML
      res.setHeader('Content-Type', 'text/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');

      // Send the XML response
      res.write(sitemap);
      res.end();
      return {
        props: {}
      };
    } catch (error) {
      console.error('AuthScape Sitemap Error:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Error generating sitemap');
      res.end();
      return {
        props: {}
      };
    }
  };
}

// ===== src/services/PrivateLabelPageModule.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderRecords = HeaderRecords;
exports.PrivateLabelPageModule = PrivateLabelPageModule;
var _react = _interopRequireWildcard(require("react"));
async function PrivateLabelPageModule(apiUri, host, resolvedUrl) {
  var data = {};
  if (host.includes("localhost")) {
    host = "http://" + host;
  } else {
    host = "https://" + host;
  }
  const response = await fetch(apiUri + "/api/PrivateLabel/GetCompanyIdFromDomain?domain=" + host);
  if (response.status == 200) {
    var dataResponse = await response.json();
    if (dataResponse != null) {
      if (dataResponse.companyId != null) {
        data.oemCompanyId = dataResponse.companyId;
      }
      if (dataResponse.demoCompanyId != null) {
        data.demoId = dataResponse.demoCompanyId;
      }
      if (dataResponse.favIcon != null) {
        data.favIcon = dataResponse.favIcon;
      }
      if (dataResponse.companyName != null) {
        data.companyName = dataResponse.companyName;
      }
      if (dataResponse.googleAnalytics4Code != null) {
        data.googleAnalytics4Code = dataResponse.googleAnalytics4Code;
      }
      if (dataResponse.microsoftClarityCode != null) {
        data.microsoftClarityCode = dataResponse.microsoftClarityCode;
      }

      // check for redirect
      if (dataResponse.redirectTrafficToCanonical) {
        data.redirect = {
          redirect: {
            destination: dataResponse.canonicalBaseUrl,
            permanent: false
          }
        };
      }
    }
  }
  return data;
}
function HeaderRecords(_ref) {
  let {
    pageProps
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, pageProps != null && pageProps.oemCompanyId != null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("link", {
    href: process.env.apiUri + "/api/PrivateLabel/GetDataFromRecord?oemCompanyId=" + pageProps.oemCompanyId,
    rel: "stylesheet"
  })));
}

// ===== src/services/analytics.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversionEvents = ConversionEvents;
exports.init = init;
exports.logConvertion = logConvertion;
exports.logEvent = logEvent;
exports.logPageView = logPageView;
exports.logPageViews = logPageViews;
exports.logPurchase = logPurchase;
var _router = babelHelpers.interopRequireDefault(require("next/router"));
var _ga4React = babelHelpers.interopRequireDefault(require("ga-4-react"));
let ga4react;
async function init(G) {
  if (!_ga4React.default.isInitialized() && G && process.browser) {
    ga4react = new _ga4React.default(G, {
      debug_mode: !process.env.production
    });
    try {
      await ga4react.initialize();
      logPageViews();
    } catch (error) {
      console.error(error);
    }
  }
}
function logPageView() {
  if (ga4react != null) {
    ga4react.pageview(window.location.pathname);
  }
  if (process.env.databaseAnalytics) {
    const executePageView = async () => {
      try {
        await apiService().post("/PageContent/PageView", {
          Uri: window.location.pathname + window.location.search,
          Referral: document.referrer,
          host: window.location.host
        });
      } catch (e) {}
    };
    executePageView();
  }
}
function logPageViews() {
  if (ga4react != null) {
    logPageView();
    _router.default.events.on('routeChangeComplete', () => {
      logPageView();
    });
  }
}
function logEvent(category, action, label) {
  //if (ga4react != null)
  //{
  ga4react.event(action, label, category);
  //}

  if (process.env.databaseAnalytics) {
    const executePageEvent = async () => {
      try {
        await apiService().post("/PageContent/PageEvent", {
          Category: category,
          Action: action,
          label: label,
          host: window.location.host,
          Uri: window.location.pathname + window.location.search
        });
      } catch (e) {}
    };
    executePageEvent();
  }
}
function logPurchase(transactionId, amount, tax, items) {
  if (ga4react != null) {
    ga4react.gtag("event", "purchase", {
      transaction_id: transactionId,
      value: amount,
      tax: tax,
      currency: "USD",
      items: items
    });
  }
}
function logConvertion(transactionId, amount, tax, items) {
  if (ga4react != null) {
    ga4react.gtag("event", "purchase", {
      transaction_id: transactionId,
      value: amount,
      tax: tax,
      currency: "USD",
      items: items
    });
  }
}
function ConversionEvents(conversionName, payload) {
  if (ga4react != null) {
    ga4react.gtag("event", conversionName, payload);
  }
}

// ===== src/services/apiService.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidateCurrentUser = exports.apiService = void 0;
var _axios = babelHelpers.interopRequireDefault(require("axios"));
var _queryString = babelHelpers.interopRequireDefault(require("query-string"));
var _jsFileDownload = babelHelpers.interopRequireDefault(require("js-file-download"));
var _jsCookie = babelHelpers.interopRequireDefault(require("js-cookie"));
// ---------------------------------------------------------------------------
// Signed-in user cache (client-side only)
// ---------------------------------------------------------------------------
// Caches the result of GetCurrentUser in sessionStorage to avoid re-calling
// /UserManagement on every hard page reload. The entry is KEYED BY THE ACCESS
// TOKEN: company/location/impersonation context lives in the token claims, so
// switching context issues a new token -> new key -> the stale entry is never
// read. Cleared on logout, and bounded by a short TTL as a backstop. This is
// purely per-browser; it has no effect on the server handling many users.
const CURRENT_USER_CACHE_KEY = 'authscape_current_user';
const CURRENT_USER_TTL_MS = 60 * 1000; // 60s backstop

const readCurrentUserCache = token => {
  if (typeof window === 'undefined' || !token) return null;
  try {
    const raw = window.sessionStorage.getItem(CURRENT_USER_CACHE_KEY);
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (entry.t !== token) return null; // different token => different context
    if (!entry.exp || entry.exp < Date.now()) return null; // TTL backstop
    return entry.u;
  } catch (e) {
    return null;
  }
};
const writeCurrentUserCache = (token, user) => {
  if (typeof window === 'undefined' || !token) return;
  try {
    window.sessionStorage.setItem(CURRENT_USER_CACHE_KEY, JSON.stringify({
      t: token,
      u: user,
      exp: Date.now() + CURRENT_USER_TTL_MS
    }));
  } catch (e) {/* sessionStorage unavailable (private mode / quota) — skip caching */}
};

// Clear the cached signed-in user. Call after impersonation / company / location
// switches, and it is also called automatically on logout and when no token exists.
const invalidateCurrentUser = () => {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.removeItem(CURRENT_USER_CACHE_KEY);
  } catch (e) {/* ignore */}
};
exports.invalidateCurrentUser = invalidateCurrentUser;
const setupDefaultOptions = async function () {
  let ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let defaultOptions = {};
  if (ctx == null) {
    let accessToken = _jsCookie.default.get('access_token') || '';
    if (accessToken !== null && accessToken !== undefined && accessToken != "") {
      defaultOptions = {
        headers: {
          Authorization: "Bearer " + accessToken
        }
      };
    } else {
      defaultOptions = {
        headers: {}
      };
    }
  } else {
    defaultOptions = {
      headers: {}
    };
  }
  return defaultOptions;
};
const RefreshToken = async (originalRequest, instance) => {
  try {
    let accessToken = _jsCookie.default.get('access_token') || '';
    let refreshToken = _jsCookie.default.get('refresh_token') || '';
    if (!refreshToken) {
      return false;
    }

    // Resolve the token endpoint from OIDC discovery so refresh works against either provider
    // (OpenIddict's /connect/token or Keycloak's /protocol/openid-connect/token). Cached on window.
    let oidc = typeof window !== "undefined" && window.__authscape_oidc || null;
    if (!oidc) {
      const discoveryRes = await fetch(process.env.authorityUri.replace(/\/$/, "") + "/.well-known/openid-configuration");
      oidc = await discoveryRes.json();
      if (typeof window !== "undefined") window.__authscape_oidc = oidc;
    }
    const refreshBody = {
      grant_type: 'refresh_token',
      client_id: process.env.client_id,
      refresh_token: refreshToken
    };
    // Only send a client secret for confidential clients; public SPA clients (e.g. Keycloak) must not.
    if (process.env.client_secret) {
      refreshBody.client_secret = process.env.client_secret;
    }
    let response = await instance.post(oidc.token_endpoint, _queryString.default.stringify(refreshBody), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + accessToken
      }
    });
    if (response != null && response.status == 200) {
      let domainHost = (h => h === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(h) || !h.includes(".") ? undefined : h.split(".").slice(-2).join("."))(window.location.hostname);
      originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access_token;
      _jsCookie.default.set('access_token', response.data.access_token, {
        expires: 365,
        path: '/',
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });
      _jsCookie.default.set('expires_in', String(response.data.expires_in), {
        expires: 365,
        path: '/',
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });
      _jsCookie.default.set('refresh_token', response.data.refresh_token, {
        expires: 365,
        path: '/',
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};
const apiService = function () {
  let ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let env = process.env.stage;
  if (env == "development") {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }
  let baseUri = process.env.apiUri + "/api";
  const instance = _axios.default.create({
    baseURL: baseUri,
    params: {}
  });
  instance.interceptors.response.use(response => {
    return response;
  }, async error => {
    const originalConfig = error.config;
    if (error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        const refreshed = await RefreshToken(originalConfig, instance);
        if (refreshed) {
          return instance.request(originalConfig);
        }
        return Promise.reject(error);
      }
      if (error.response.status === 400) {
        const reqUrl = error.response.config.url || "";
        const isTokenEndpoint = reqUrl.includes("/connect/token") || reqUrl.includes("/protocol/openid-connect/token");
        if (isTokenEndpoint) {
          let domainHost = (h => h === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(h) || !h.includes(".") ? undefined : h.split(".").slice(-2).join("."))(window.location.hostname);
          _jsCookie.default.remove('access_token', {
            path: '/',
            domain: domainHost,
            secure: typeof window !== "undefined" && window.location.protocol === "https:"
          });
          _jsCookie.default.remove('refresh_token', {
            path: '/',
            domain: domainHost,
            secure: typeof window !== "undefined" && window.location.protocol === "https:"
          });
          _jsCookie.default.remove('expires_in', {
            path: '/',
            domain: domainHost,
            secure: typeof window !== "undefined" && window.location.protocol === "https:"
          });
        }
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  });
  return {
    get: async function (url) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      try {
        let defaultOptions = await setupDefaultOptions(ctx);
        return await instance.get(url, {
          ...defaultOptions,
          ...options
        });
      } catch (error) {
        return error.response;
      }
    },
    post: async function (url, data) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      try {
        let defaultOptions = await setupDefaultOptions(ctx);
        return await instance.post(url, data, {
          ...defaultOptions,
          ...options
        });
      } catch (error) {
        return error.response;
      }
    },
    put: async function (url, data) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      try {
        let defaultOptions = await setupDefaultOptions(ctx);
        return await instance.put(url, data, {
          ...defaultOptions,
          ...options
        });
      } catch (error) {
        return error.response;
      }
    },
    delete: async function (url) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      try {
        let defaultOptions = await setupDefaultOptions(ctx);
        return await instance.delete(url, {
          ...defaultOptions,
          ...options
        });
      } catch (error) {
        return error.response;
      }
    },
    GetCurrentUser: async function () {
      let forceRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      try {
        let accessToken = _jsCookie.default.get('access_token') || null;
        if (!accessToken) {
          invalidateCurrentUser();
          return null;
        }
        if (!forceRefresh) {
          const cached = readCurrentUserCache(accessToken);
          if (cached) return cached;
        }
        let defaultOptions = await setupDefaultOptions(null);
        const response = await instance.get('/UserManagement', defaultOptions);
        if (response != null && response.status == 200) {
          writeCurrentUserCache(accessToken, response.data);
          return response.data;
        }
      } catch (exp) {
        // Token invalid or expired
      }
      return null;
    },
    DownloadFile: async function (url, fileName, completed) {
      let method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "get";
      let data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      let mimeType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "application/octet-stream";
      let passData = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      try {
        let defaultOptions = {};
        let options = {
          responseType: "blob"
        };
        let response = null;
        if (method == "get") {
          response = await instance.get(url, {
            ...defaultOptions,
            ...options
          });
        } else if (method == "post") {
          response = await instance.post(url, data, {
            ...defaultOptions,
            ...options
          });
        }
        if (response != null && response.status === 200) {
          if (!passData) {
            (0, _jsFileDownload.default)(response.data, fileName, mimeType);
            if (completed !== undefined) {
              completed();
            }
          } else {
            completed(response.data);
          }
        }
      } catch (error) {
        console.error(error);
        if (completed !== undefined) {
          completed();
        }
      }
    }
  };
};
exports.apiService = apiService;

// ===== src/services/authService.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authService = void 0;
var _jsCookie = babelHelpers.interopRequireDefault(require("js-cookie"));
const authService = () => {
  return {
    dec2hex: dec => {
      return ('0' + dec.toString(16)).slice(-2);
    },
    generateRandomString: () => {
      var array = new Uint32Array(56 / 2);
      window.crypto.getRandomValues(array);
      return Array.from(array, authService().dec2hex).join('');
    },
    sha256: plain => {
      const encoder = new TextEncoder();
      const data = encoder.encode(plain);
      return window.crypto.subtle.digest('SHA-256', data);
    },
    base64urlencode: a => {
      var str = "";
      var bytes = new Uint8Array(a);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        str += String.fromCharCode(bytes[i]);
      }
      return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    },
    challenge_from_verifier: async v => {
      let hashed = await authService().sha256(v);
      let base64encoded = authService().base64urlencode(hashed);
      return base64encoded;
    },
    inviteUsers: async inviteRequests => {
      var host = window.location.protocol + "//" + window.location.host;
      let response = await apiService().post(process.env.authorityUri + "/Invite/InviteUsers", {
        requests: inviteRequests,
        host: host
      });
      return response;
    },
    inviteUser: async inviteRequest => {
      let inviteRequests = [];
      inviteRequests.push(inviteRequest);
      var host = window.location.protocol + "//" + window.location.host;
      let response = await apiService().post(process.env.authorityUri + "/Invite/InviteUsers", {
        requests: inviteRequests,
        host: host
      });
      return response;
    },
    // Resolves the provider's OIDC endpoints from its discovery document so the SPA works against
    // any standards-compliant issuer (AuthScape's OpenIddict IDP *or* Keycloak) instead of
    // hardcoding OpenIddict's /connect/* paths. Cached on window for the session.
    resolveOidcConfig: async () => {
      if (typeof window !== "undefined" && window.__authscape_oidc) {
        return window.__authscape_oidc;
      }
      const res = await fetch(process.env.authorityUri.replace(/\/$/, "") + "/.well-known/openid-configuration");
      if (!res.ok) {
        throw new Error("OIDC discovery failed (" + res.status + ") at " + process.env.authorityUri);
      }
      const cfg = await res.json();
      if (typeof window !== "undefined") {
        window.__authscape_oidc = cfg;
      }
      return cfg;
    },
    login: async function () {
      let redirectUserUri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      let deviceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let state = authService().generateRandomString();
      if (redirectUserUri != null) {
        localStorage.setItem("redirectUri", redirectUserUri);
      }
      let verifier = authService().generateRandomString();
      var challenge = await authService().challenge_from_verifier(verifier);
      window.localStorage.setItem("verifier", verifier);
      let redirectUri = window.location.origin + "/signin-oidc";
      const oidc = await authService().resolveOidcConfig();
      // Scope is configurable so each provider gets the scopes its clients expose
      // (OpenIddict adds "api1"; Keycloak typically just the standard set).
      const scope = process.env.oauthScope || "openid profile email offline_access";
      let loginUri = oidc.authorization_endpoint + "?response_type=code" + "&state=" + state + "&client_id=" + encodeURIComponent(process.env.client_id) + "&scope=" + encodeURIComponent(scope) + "&redirect_uri=" + encodeURIComponent(redirectUri) + "&code_challenge=" + challenge + "&code_challenge_method=S256";
      if (deviceId) {
        loginUri += "&deviceId=" + deviceId; // will be for chrome extention and mobile apps later
      }
      window.location.href = loginUri;
    },
    signUp: async function () {
      let redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      const returnUrl = redirectUrl == null ? window.location.href : redirectUrl;
      localStorage.setItem("redirectUri", returnUrl);

      // Keycloak hosts registration at its own endpoint (authorization endpoint with
      // "/auth" → "/registrations"); the AuthScape OpenIddict IDP uses a Razor page.
      try {
        const oidc = await authService().resolveOidcConfig();
        if (oidc.issuer && oidc.issuer.indexOf("/realms/") !== -1 && oidc.authorization_endpoint) {
          const scope = process.env.oauthScope || "openid profile email offline_access";
          const redirectUri = window.location.origin + "/signin-oidc";
          const regUri = oidc.authorization_endpoint.replace("/protocol/openid-connect/auth", "/protocol/openid-connect/registrations");
          window.location.href = regUri + "?response_type=code" + "&client_id=" + encodeURIComponent(process.env.client_id) + "&scope=" + encodeURIComponent(scope) + "&redirect_uri=" + encodeURIComponent(redirectUri);
          return;
        }
      } catch (e) {/* fall through to the legacy AuthScape IDP path */}
      window.location.href = process.env.authorityUri + "/Identity/Account/Register?returnUrl=" + returnUrl;
    },
    manageAccount: async () => {
      // Keycloak exposes a self-service account console at {issuer}/account; the AuthScape
      // OpenIddict IDP uses its own Razor management page.
      try {
        const oidc = await authService().resolveOidcConfig();
        if (oidc.issuer && oidc.issuer.indexOf("/realms/") !== -1) {
          window.location.href = oidc.issuer.replace(/\/$/, "") + "/account";
          return;
        }
      } catch (e) {/* fall through to the legacy AuthScape IDP path */}
      window.location.href = process.env.authorityUri + "/Identity/Account/Manage";
    },
    logout: async function () {
      let redirectUri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      let domainHost = (h => h === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(h) || !h.includes(".") ? undefined : h.split(".").slice(-2).join("."))(window.location.hostname);
      _jsCookie.default.remove('access_token', {
        path: '/',
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });
      _jsCookie.default.remove('refresh_token', {
        path: '/',
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });
      _jsCookie.default.remove('expires_in', {
        path: '/',
        domain: domainHost,
        secure: typeof window !== "undefined" && window.location.protocol === "https:"
      });

      // Drop the cached signed-in user so the next sign-in never reads a stale identity.
      try {
        if (typeof window !== "undefined") window.sessionStorage.removeItem("authscape_current_user");
      } catch (e) {/* ignore */}
      const target = redirectUri == null ? window.location.href : redirectUri;
      let endSession = process.env.authorityUri + "/connect/logout";
      try {
        const oidc = await authService().resolveOidcConfig();
        if (oidc.end_session_endpoint) endSession = oidc.end_session_endpoint;
      } catch (e) {/* use legacy default */}

      // Standards-compliant RP-initiated logout (Keycloak) uses post_logout_redirect_uri +
      // client_id; the legacy AuthScape OpenIddict IDP uses ?redirect=.
      if (endSession.indexOf("/connect/logout") === -1) {
        window.location.href = endSession + "?post_logout_redirect_uri=" + encodeURIComponent(target) + "&client_id=" + encodeURIComponent(process.env.client_id);
      } else {
        window.location.href = endSession + "?redirect=" + target;
      }
    }
  };
};
exports.authService = authService;

// ===== src/services/authorizationComponent.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorizationComponent = AuthorizationComponent;
var _react = _interopRequireWildcard(require("react"));
//import apiService from './apiService';

function AuthorizationComponent(_ref) {
  let {
    children,
    isEnabled,
    setCurrentUser,
    userLoaded,
    isLoading
  } = _ref;
  const [loaded, setLoaded] = (0, _react.useState)(false);
  const validateUserSignedIn = async () => {
    setLoaded(true);
    let signedInUser = null;
    if (isEnabled) {
      let usr = await apiService().GetCurrentUser();
      if (usr != null) {
        setCurrentUser(usr);
        signedInUser = usr;
      } else {
        setCurrentUser(null);
      }
    } else {
      setCurrentUser(null);
    }
    userLoaded(signedInUser);
  };
  (0, _react.useEffect)(() => {
    if (!loaded) {
      validateUserSignedIn();
    }
  }, [loaded]);
  return children;
}

// ===== src/services/sitemapService.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.generateSitemap = generateSitemap;
/**
 * AuthScape Sitemap Service
 * Provides automatic sitemap.xml generation by fetching from AuthScape API
 */

/**
 * Generates a sitemap XML response by fetching from the AuthScape API
 * @param {Object} req - Next.js request object
 * @param {Object} res - Next.js response object
 * @param {string} apiUri - The AuthScape API base URI (from process.env.apiUri)
 * @returns {Promise<void>}
 */
async function generateSitemap(req, res, apiUri) {
  try {
    const host = req.headers.host;
    let domain;
    if (host.includes("localhost")) {
      domain = "http://" + host;
    } else {
      domain = "https://" + host;
    }
    const encodedDomain = encodeURIComponent(domain);
    const apiUrl = `${apiUri}/api/Sitemap?domain=${encodedDomain}`;
    console.log('Fetching sitemap from:', apiUrl);
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const sitemap = await response.text();
    console.log('Sitemap fetched successfully, length:', sitemap.length);

    // Set headers BEFORE writing
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');

    // Write and end the response
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error('AuthScape Sitemap Error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`Error generating sitemap: ${error.message || error}`);
    res.end();
  }
}
var _default = exports.default = {
  generateSitemap
};

// ===== src/services/slug.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slug = void 0;
const Slug = slug => {
  let index = slug.lastIndexOf("-") + 1;
  if (slug.length > index) {
    slug = slug.substr(index);
    return slug;
  }
  return null;
};
exports.Slug = Slug;

// ===== src/services/storeWithExpiry.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeWithExpiry = void 0;
const storeWithExpiry = () => {
  return {
    set: (key, value, ttl) => {
      const now = new Date();
      const item = {
        value: value,
        expiry: now.getTime() + ttl
      };
      localStorage.setItem(key, JSON.stringify(item));
    },
    get: key => {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) {
        return null;
      }
      const item = JSON.parse(itemStr);
      const now = new Date();
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value;
    }
  };
};
exports.storeWithExpiry = storeWithExpiry;

// ===== src/services/util.js =====
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = exports.GetBaseUrl = void 0;
var _react = _interopRequireWildcard(require("react"));
const GetBaseUrl = () => {
  return window.location.protocol + "//" + window.location.host;
};
exports.GetBaseUrl = GetBaseUrl;
const setCookie = function (name, value) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(resolve => {
    let cookieString = `${name}=${value};`;
    if (options.maxAge) {
      cookieString += `max-age=${options.maxAge};`;
    }
    if (options.path) {
      cookieString += `path=${options.path};`;
    }
    if (options.domain) {
      cookieString += `domain=${options.domain};`;
    }
    if (options.secure) {
      cookieString += `secure;`;
    }
    document.cookie = cookieString;
    resolve();
  });
};
exports.setCookie = setCookie;