(function(react, react_dom) {

//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$1 = Object.defineProperty;
	var __name = (target, value) => __defProp$1(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) {
			__defProp$1(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp$1(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp$1.call(to, key) && key !== except) {
					__defProp$1(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$1(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion
react = __toESM(react);

//#region node_modules/immer/dist/immer.esm.mjs
	function n(n) {
		for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];
		var i = Y[n];
		var o = i ? "function" == typeof i ? i.apply(null, t) : i : "unknown error nr: " + n;
		throw Error("[Immer] " + o);
	}
	function r(n) {
		return !!n && !!n[Q];
	}
	function t(n) {
		var r;
		return !!n && (function(n) {
			if (!n || "object" != typeof n) return !1;
			var r = Object.getPrototypeOf(n);
			if (null === r) return !0;
			var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
			return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
		}(n) || Array.isArray(n) || !!n[L] || !!(null === (r = n.constructor) || void 0 === r ? void 0 : r[L]) || s(n) || v(n));
	}
	function e(t) {
		return r(t) || n(23, t), t[Q].t;
	}
	function i(n, r, t) {
		void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach((function(e) {
			t && "symbol" == typeof e || r(e, n[e], n);
		})) : n.forEach((function(t, e) {
			return r(e, t, n);
		}));
	}
	function o(n) {
		var r = n[Q];
		return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
	}
	function u(n, r) {
		return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
	}
	function a(n, r) {
		return 2 === o(n) ? n.get(r) : n[r];
	}
	function f(n, r, t) {
		var e = o(n);
		2 === e ? n.set(r, t) : 3 === e ? n.add(t) : n[r] = t;
	}
	function c(n, r) {
		return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
	}
	function s(n) {
		return X && n instanceof Map;
	}
	function v(n) {
		return q && n instanceof Set;
	}
	function p(n) {
		return n.o || n.t;
	}
	function l(n) {
		if (Array.isArray(n)) return Array.prototype.slice.call(n);
		var r = rn(n);
		delete r[Q];
		for (var t = nn(r), e = 0; e < t.length; e++) {
			var i = t[e];
			var o = r[i];
			!1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
				configurable: !0,
				writable: !0,
				enumerable: o.enumerable,
				value: n[i]
			});
		}
		return Object.create(Object.getPrototypeOf(n), r);
	}
	function d(n, e) {
		return void 0 === e && (e = !1), y(n) || r(n) || !t(n) || (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, (function(n, r) {
			return d(r, !0);
		}), !0)), n;
	}
	function h() {
		n(2);
	}
	function y(n) {
		return null == n || "object" != typeof n || Object.isFrozen(n);
	}
	function b(r) {
		var t = tn[r];
		return t || n(18, r), t;
	}
	function m(n, r) {
		tn[n] || (tn[n] = r);
	}
	function _() {
		return U || n(0), U;
	}
	function j(n, r) {
		r && (b("Patches"), n.u = [], n.s = [], n.v = r);
	}
	function g(n) {
		O(n), n.p.forEach(S), n.p = null;
	}
	function O(n) {
		n === U && (U = n.l);
	}
	function w(n) {
		return U = {
			p: [],
			l: U,
			h: n,
			m: !0,
			_: 0
		};
	}
	function S(n) {
		var r = n[Q];
		0 === r.i || 1 === r.i ? r.j() : r.g = !0;
	}
	function P(r, e) {
		e._ = e.p.length;
		var i = e.p[0];
		var o = void 0 !== r && r !== i;
		return e.h.O || b("ES5").S(e, r, o), o ? (i[Q].P && (g(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), g(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
	}
	function M(n, r, t) {
		if (y(r)) return r;
		var e = r[Q];
		if (!e) return i(r, (function(i, o) {
			return A(n, e, r, i, o, t);
		}), !0), r;
		if (e.A !== n) return r;
		if (!e.P) return x(n, e.t, !0), e.t;
		if (!e.I) {
			e.I = !0, e.A._--;
			var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
			var u = o;
			var a = !1;
			3 === e.i && (u = new Set(o), o.clear(), a = !0), i(u, (function(r, i) {
				return A(n, e, o, r, i, t, a);
			})), x(n, o, !1), t && n.u && b("Patches").N(e, t, n.u, n.s);
		}
		return e.o;
	}
	function A(e, i, o, a, c, s, v) {
		if (c === o && n(5), r(c)) {
			var p = M(e, c, s && i && 3 !== i.i && !u(i.R, a) ? s.concat(a) : void 0);
			if (f(o, a, p), !r(p)) return;
			e.m = !1;
		} else v && o.add(c);
		if (t(c) && !y(c)) {
			if (!e.h.D && e._ < 1) return;
			M(e, c), i && i.A.l || x(e, c);
		}
	}
	function x(n, r, t) {
		void 0 === t && (t = !1), !n.l && n.h.D && n.m && d(r, t);
	}
	function z(n, r) {
		var t = n[Q];
		return (t ? p(t) : n)[r];
	}
	function I(n, r) {
		if (r in n) for (var t = Object.getPrototypeOf(n); t;) {
			var e = Object.getOwnPropertyDescriptor(t, r);
			if (e) return e;
			t = Object.getPrototypeOf(t);
		}
	}
	function k(n) {
		n.P || (n.P = !0, n.l && k(n.l));
	}
	function E(n) {
		n.o || (n.o = l(n.t));
	}
	function N(n, r, t) {
		var e = s(r) ? b("MapSet").F(r, t) : v(r) ? b("MapSet").T(r, t) : n.O ? function(n, r) {
			var t = Array.isArray(n);
			var e = {
				i: t ? 1 : 0,
				A: r ? r.A : _(),
				P: !1,
				I: !1,
				R: {},
				l: r,
				t: n,
				k: null,
				o: null,
				j: null,
				C: !1
			};
			var i = e;
			var o = en;
			t && (i = [e], o = on);
			var u = Proxy.revocable(i, o);
			var a = u.revoke;
			var f = u.proxy;
			return e.k = f, e.j = a, f;
		}(r, t) : b("ES5").J(r, t);
		return (t ? t.A : _()).p.push(e), e;
	}
	function R(e) {
		return r(e) || n(22, e), function n(r) {
			if (!t(r)) return r;
			var e;
			var u = r[Q];
			var c = o(r);
			if (u) {
				if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
				u.I = !0, e = D(r, c), u.I = !1;
			} else e = D(r, c);
			return i(e, (function(r, t) {
				u && a(u.t, r) === t || f(e, r, n(t));
			})), 3 === c ? new Set(e) : e;
		}(e);
	}
	function D(n, r) {
		switch (r) {
			case 2: return new Map(n);
			case 3: return Array.from(n);
		}
		return l(n);
	}
	function F() {
		function t(n, r) {
			var t = s[n];
			return t ? t.enumerable = r : s[n] = t = {
				configurable: !0,
				enumerable: r,
				get: function() {
					var r = this[Q];
					return f(r), en.get(r, n);
				},
				set: function(r) {
					var t = this[Q];
					f(t), en.set(t, n, r);
				}
			}, t;
		}
		function e(n) {
			for (var r = n.length - 1; r >= 0; r--) {
				var t = n[r][Q];
				if (!t.P) switch (t.i) {
					case 5:
						a(t) && k(t);
						break;
					case 4: o(t) && k(t);
				}
			}
		}
		function o(n) {
			for (var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--) {
				var o = e[i];
				if (o !== Q) {
					var a = r[o];
					if (void 0 === a && !u(r, o)) return !0;
					var f = t[o];
					var s = f && f[Q];
					if (s ? s.t !== a : !c(f, a)) return !0;
				}
			}
			var v = !!r[Q];
			return e.length !== nn(r).length + (v ? 0 : 1);
		}
		function a(n) {
			var r = n.k;
			if (r.length !== n.t.length) return !0;
			var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
			if (t && !t.get) return !0;
			for (var e = 0; e < r.length; e++) if (!r.hasOwnProperty(e)) return !0;
			return !1;
		}
		function f(r) {
			r.g && n(3, JSON.stringify(p(r)));
		}
		var s = {};
		m("ES5", {
			J: function(n, r) {
				var e = Array.isArray(n);
				var i = function(n, r) {
					if (n) {
						for (var e = Array(r.length), i = 0; i < r.length; i++) Object.defineProperty(e, "" + i, t(i, !0));
						return e;
					}
					var o = rn(r);
					delete o[Q];
					for (var u = nn(o), a = 0; a < u.length; a++) {
						var f = u[a];
						o[f] = t(f, n || !!o[f].enumerable);
					}
					return Object.create(Object.getPrototypeOf(r), o);
				}(e, n);
				var o = {
					i: e ? 5 : 4,
					A: r ? r.A : _(),
					P: !1,
					I: !1,
					R: {},
					l: r,
					t: n,
					k: i,
					o: null,
					g: !1,
					C: !1
				};
				return Object.defineProperty(i, Q, {
					value: o,
					writable: !0
				}), i;
			},
			S: function(n, t, o) {
				o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
					if (r && "object" == typeof r) {
						var t = r[Q];
						if (t) {
							var e = t.t;
							var o = t.k;
							var f = t.R;
							var c = t.i;
							if (4 === c) i(o, (function(r) {
								r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
							})), i(e, (function(n) {
								void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
							}));
							else if (5 === c) {
								if (a(t) && (k(t), f.length = !0), o.length < e.length) for (var s = o.length; s < e.length; s++) f[s] = !1;
								else for (var v = e.length; v < o.length; v++) f[v] = !0;
								for (var p = Math.min(o.length, e.length), l = 0; l < p; l++) o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
							}
						}
					}
				}(n.p[0]), e(n.p));
			},
			K: function(n) {
				return 4 === n.i ? o(n) : a(n);
			}
		});
	}
	var G;
	var U;
	var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
	var X = "undefined" != typeof Map;
	var q = "undefined" != typeof Set;
	var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
	var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G);
	var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
	var Q = W ? Symbol.for("immer-state") : "__$immer_state";
	var Y = {
		0: "Illegal state",
		1: "Immer drafts cannot have computed properties",
		2: "This object has been frozen and should not be mutated",
		3: function(n) {
			return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
		},
		4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
		5: "Immer forbids circular references",
		6: "The first or second argument to `produce` must be a function",
		7: "The third argument to `produce` must be a function or undefined",
		8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
		9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
		10: "The given draft is already finalized",
		11: "Object.defineProperty() cannot be used on an Immer draft",
		12: "Object.setPrototypeOf() cannot be used on an Immer draft",
		13: "Immer only supports deleting array indices",
		14: "Immer only supports setting array indices and the 'length' property",
		15: function(n) {
			return "Cannot apply patch, path doesn't resolve: " + n;
		},
		16: "Sets cannot have \"replace\" patches.",
		17: function(n) {
			return "Unsupported patch operation: " + n;
		},
		18: function(n) {
			return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
		},
		20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
		21: function(n) {
			return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
		},
		22: function(n) {
			return "'current' expects a draft, got: " + n;
		},
		23: function(n) {
			return "'original' expects a draft, got: " + n;
		},
		24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
	};
	var Z = "" + Object.prototype.constructor;
	var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n) {
		return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
	} : Object.getOwnPropertyNames;
	var rn = Object.getOwnPropertyDescriptors || function(n) {
		var r = {};
		return nn(n).forEach((function(t) {
			r[t] = Object.getOwnPropertyDescriptor(n, t);
		})), r;
	};
	var tn = {};
	var en = {
		get: function(n, r) {
			if (r === Q) return n;
			var e = p(n);
			if (!u(e, r)) return function(n, r, t) {
				var e;
				var i = I(r, t);
				return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
			}(n, e, r);
			var i = e[r];
			return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = N(n.A.h, i, n)) : i;
		},
		has: function(n, r) {
			return r in p(n);
		},
		ownKeys: function(n) {
			return Reflect.ownKeys(p(n));
		},
		set: function(n, r, t) {
			var e = I(p(n), r);
			if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;
			if (!n.P) {
				var i = z(p(n), r);
				var o = null == i ? void 0 : i[Q];
				if (o && o.t === t) return n.o[r] = t, n.R[r] = !1, !0;
				if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
				E(n), k(n);
			}
			return n.o[r] === t && (void 0 !== t || r in n.o) || Number.isNaN(t) && Number.isNaN(n.o[r]) || (n.o[r] = t, n.R[r] = !0), !0;
		},
		deleteProperty: function(n, r) {
			return void 0 !== z(n.t, r) || r in n.t ? (n.R[r] = !1, E(n), k(n)) : delete n.R[r], n.o && delete n.o[r], !0;
		},
		getOwnPropertyDescriptor: function(n, r) {
			var t = p(n);
			var e = Reflect.getOwnPropertyDescriptor(t, r);
			return e ? {
				writable: !0,
				configurable: 1 !== n.i || "length" !== r,
				enumerable: e.enumerable,
				value: t[r]
			} : e;
		},
		defineProperty: function() {
			n(11);
		},
		getPrototypeOf: function(n) {
			return Object.getPrototypeOf(n.t);
		},
		setPrototypeOf: function() {
			n(12);
		}
	};
	var on = {};
	i(en, (function(n, r) {
		on[n] = function() {
			return arguments[0] = arguments[0][0], r.apply(this, arguments);
		};
	})), on.deleteProperty = function(r, t) {
		return isNaN(parseInt(t)) && n(13), on.set.call(this, r, t, void 0);
	}, on.set = function(r, t, e) {
		return "length" !== t && isNaN(parseInt(t)) && n(14), en.set.call(this, r[0], t, e, r[0]);
	};
	var un = function() {
		function e(r) {
			var e = this;
			this.O = B, this.D = !0, this.produce = function(r, i, o) {
				if ("function" == typeof r && "function" != typeof i) {
					var u = i;
					i = r;
					var a = e;
					return function(n) {
						var r = this;
						void 0 === n && (n = u);
						for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) e[o - 1] = arguments[o];
						return a.produce(n, (function(n) {
							var t;
							return (t = i).call.apply(t, [r, n].concat(e));
						}));
					};
				}
				var f;
				if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
					var c = w(e);
					var s = N(e, r, void 0);
					var v = !0;
					try {
						f = i(s), v = !1;
					} finally {
						v ? g(c) : O(c);
					}
					return "undefined" != typeof Promise && f instanceof Promise ? f.then((function(n) {
						return j(c, o), P(n, c);
					}), (function(n) {
						throw g(c), n;
					})) : (j(c, o), P(f, c));
				}
				if (!r || "object" != typeof r) {
					if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.D && d(f, !0), o) {
						var p = [];
						var l = [];
						b("Patches").M(r, f, p, l), o(p, l);
					}
					return f;
				}
				n(21, r);
			}, this.produceWithPatches = function(n, r) {
				if ("function" == typeof n) return function(r) {
					for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];
					return e.produceWithPatches(r, (function(r) {
						return n.apply(void 0, [r].concat(i));
					}));
				};
				var t;
				var i;
				var o = e.produce(n, r, (function(n, r) {
					t = n, i = r;
				}));
				return "undefined" != typeof Promise && o instanceof Promise ? o.then((function(n) {
					return [
						n,
						t,
						i
					];
				})) : [
					o,
					t,
					i
				];
			}, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
		}
		var i = e.prototype;
		return i.createDraft = function(e) {
			t(e) || n(8), r(e) && (e = R(e));
			var i = w(this);
			var o = N(this, e, void 0);
			return o[Q].C = !0, O(i), o;
		}, i.finishDraft = function(r, t) {
			var e = r && r[Q];
			e && e.C || n(9), e.I && n(10);
			var i = e.A;
			return j(i, t), P(void 0, i);
		}, i.setAutoFreeze = function(n) {
			this.D = n;
		}, i.setUseProxies = function(r) {
			r && !B && n(20), this.O = r;
		}, i.applyPatches = function(n, t) {
			var e;
			for (e = t.length - 1; e >= 0; e--) {
				var i = t[e];
				if (0 === i.path.length && "replace" === i.op) {
					n = i.value;
					break;
				}
			}
			e > -1 && (t = t.slice(e + 1));
			var o = b("Patches").$;
			return r(n) ? o(n, t) : this.produce(n, (function(n) {
				return o(n, t);
			}));
		}, e;
	}();
	var an = new un();
	var fn = an.produce;
	var cn = an.produceWithPatches.bind(an);
	var sn = an.setAutoFreeze.bind(an);
	var vn = an.setUseProxies.bind(an);
	var pn = an.applyPatches.bind(an);
	var ln = an.createDraft.bind(an);
	var dn = an.finishDraft.bind(an);

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
	function toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/defineProperty.js
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectSpread2.js
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}

//#endregion
//#region node_modules/redux/es/redux.js
	var $$observable = (function() {
		return typeof Symbol === "function" && Symbol.observable || "@@observable";
	})();
	/**
	* These are private action types reserved by Redux.
	* For any unknown actions, you must return the current state.
	* If the current state is undefined, you must return the initial state.
	* Do not reference these action types directly in your code.
	*/
	var randomString = function randomString() {
		return Math.random().toString(36).substring(7).split("").join(".");
	};
	var ActionTypes = {
		INIT: "@@redux/INIT" + randomString(),
		REPLACE: "@@redux/REPLACE" + randomString(),
		PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
			return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
		}
	};
	/**
	* @param {any} obj The object to inspect.
	* @returns {boolean} True if the argument appears to be a plain object.
	*/
	function isPlainObject$2(obj) {
		if (typeof obj !== "object" || obj === null) return false;
		var proto = obj;
		while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
		return Object.getPrototypeOf(obj) === proto;
	}
	__name(isPlainObject$2, "isPlainObject");
	function miniKindOf(val) {
		if (val === void 0) return "undefined";
		if (val === null) return "null";
		var type = typeof val;
		switch (type) {
			case "boolean":
			case "string":
			case "number":
			case "symbol":
			case "function": return type;
		}
		if (Array.isArray(val)) return "array";
		if (isDate(val)) return "date";
		if (isError(val)) return "error";
		var constructorName = ctorName(val);
		switch (constructorName) {
			case "Symbol":
			case "Promise":
			case "WeakMap":
			case "WeakSet":
			case "Map":
			case "Set": return constructorName;
		}
		return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
	}
	function ctorName(val) {
		return typeof val.constructor === "function" ? val.constructor.name : null;
	}
	function isError(val) {
		return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
	}
	function isDate(val) {
		if (val instanceof Date) return true;
		return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
	}
	function kindOf(val) {
		var typeOfVal = typeof val;
		typeOfVal = miniKindOf(val);
		return typeOfVal;
	}
	/**
	* @deprecated
	*
	* **We recommend using the `configureStore` method
	* of the `@reduxjs/toolkit` package**, which replaces `createStore`.
	*
	* Redux Toolkit is our recommended approach for writing Redux logic today,
	* including store setup, reducers, data fetching, and more.
	*
	* **For more details, please read this Redux docs page:**
	* **https://redux.js.org/introduction/why-rtk-is-redux-today**
	*
	* `configureStore` from Redux Toolkit is an improved version of `createStore` that
	* simplifies setup and helps avoid common bugs.
	*
	* You should not be using the `redux` core package by itself today, except for learning purposes.
	* The `createStore` method from the core `redux` package will not be removed, but we encourage
	* all users to migrate to using Redux Toolkit for all Redux code.
	*
	* If you want to use `createStore` without this visual deprecation warning, use
	* the `legacy_createStore` import instead:
	*
	* `import { legacy_createStore as createStore} from 'redux'`
	*
	*/
	function createStore(reducer, preloadedState, enhancer) {
		var _ref2;
		if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
		if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
			enhancer = preloadedState;
			preloadedState = void 0;
		}
		if (typeof enhancer !== "undefined") {
			if (typeof enhancer !== "function") throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
			return enhancer(createStore)(reducer, preloadedState);
		}
		if (typeof reducer !== "function") throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
		var currentReducer = reducer;
		var currentState = preloadedState;
		var currentListeners = [];
		var nextListeners = currentListeners;
		var isDispatching = false;
		/**
		* This makes a shallow copy of currentListeners so we can use
		* nextListeners as a temporary list while dispatching.
		*
		* This prevents any bugs around consumers calling
		* subscribe/unsubscribe in the middle of a dispatch.
		*/
		function ensureCanMutateNextListeners() {
			if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
		}
		/**
		* Reads the state tree managed by the store.
		*
		* @returns {any} The current state tree of your application.
		*/
		function getState() {
			if (isDispatching) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
			return currentState;
		}
		/**
		* Adds a change listener. It will be called any time an action is dispatched,
		* and some part of the state tree may potentially have changed. You may then
		* call `getState()` to read the current state tree inside the callback.
		*
		* You may call `dispatch()` from a change listener, with the following
		* caveats:
		*
		* 1. The subscriptions are snapshotted just before every `dispatch()` call.
		* If you subscribe or unsubscribe while the listeners are being invoked, this
		* will not have any effect on the `dispatch()` that is currently in progress.
		* However, the next `dispatch()` call, whether nested or not, will use a more
		* recent snapshot of the subscription list.
		*
		* 2. The listener should not expect to see all state changes, as the state
		* might have been updated multiple times during a nested `dispatch()` before
		* the listener is called. It is, however, guaranteed that all subscribers
		* registered before the `dispatch()` started will be called with the latest
		* state by the time it exits.
		*
		* @param {Function} listener A callback to be invoked on every dispatch.
		* @returns {Function} A function to remove this change listener.
		*/
		function subscribe(listener) {
			if (typeof listener !== "function") throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
			if (isDispatching) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
			var isSubscribed = true;
			ensureCanMutateNextListeners();
			nextListeners.push(listener);
			return function unsubscribe() {
				if (!isSubscribed) return;
				if (isDispatching) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
				isSubscribed = false;
				ensureCanMutateNextListeners();
				var index = nextListeners.indexOf(listener);
				nextListeners.splice(index, 1);
				currentListeners = null;
			};
		}
		/**
		* Dispatches an action. It is the only way to trigger a state change.
		*
		* The `reducer` function, used to create the store, will be called with the
		* current state tree and the given `action`. Its return value will
		* be considered the **next** state of the tree, and the change listeners
		* will be notified.
		*
		* The base implementation only supports plain object actions. If you want to
		* dispatch a Promise, an Observable, a thunk, or something else, you need to
		* wrap your store creating function into the corresponding middleware. For
		* example, see the documentation for the `redux-thunk` package. Even the
		* middleware will eventually dispatch plain object actions using this method.
		*
		* @param {Object} action A plain object representing “what changed”. It is
		* a good idea to keep actions serializable so you can record and replay user
		* sessions, or use the time travelling `redux-devtools`. An action must have
		* a `type` property which may not be `undefined`. It is a good idea to use
		* string constants for action types.
		*
		* @returns {Object} For convenience, the same action object you dispatched.
		*
		* Note that, if you use a custom middleware, it may wrap `dispatch()` to
		* return something else (for example, a Promise you can await).
		*/
		function dispatch(action) {
			if (!isPlainObject$2(action)) throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
			if (typeof action.type === "undefined") throw new Error("Actions may not have an undefined \"type\" property. You may have misspelled an action type string constant.");
			if (isDispatching) throw new Error("Reducers may not dispatch actions.");
			try {
				isDispatching = true;
				currentState = currentReducer(currentState, action);
			} finally {
				isDispatching = false;
			}
			var listeners = currentListeners = nextListeners;
			for (var i = 0; i < listeners.length; i++) {
				var listener = listeners[i];
				listener();
			}
			return action;
		}
		/**
		* Replaces the reducer currently used by the store to calculate the state.
		*
		* You might need this if your app implements code splitting and you want to
		* load some of the reducers dynamically. You might also need this if you
		* implement a hot reloading mechanism for Redux.
		*
		* @param {Function} nextReducer The reducer for the store to use instead.
		* @returns {void}
		*/
		function replaceReducer(nextReducer) {
			if (typeof nextReducer !== "function") throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
			currentReducer = nextReducer;
			dispatch({ type: ActionTypes.REPLACE });
		}
		/**
		* Interoperability point for observable/reactive libraries.
		* @returns {observable} A minimal observable of state changes.
		* For more information, see the observable proposal:
		* https://github.com/tc39/proposal-observable
		*/
		function observable() {
			var _ref;
			var outerSubscribe = subscribe;
			return _ref = { 
			/**
			* The minimal observable subscription method.
			* @param {Object} observer Any object that can be used as an observer.
			* The observer object should have a `next` method.
			* @returns {subscription} An object with an `unsubscribe` method that can
			* be used to unsubscribe the observable from the store, and prevent further
			* emission of values from the observable.
			*/
subscribe: function subscribe(observer) {
				if (typeof observer !== "object" || observer === null) throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
				function observeState() {
					if (observer.next) observer.next(getState());
				}
				observeState();
				return { unsubscribe: outerSubscribe(observeState) };
			} }, _ref[$$observable] = function() {
				return this;
			}, _ref;
		}
		dispatch({ type: ActionTypes.INIT });
		return _ref2 = {
			dispatch,
			subscribe,
			getState,
			replaceReducer
		}, _ref2[$$observable] = observable, _ref2;
	}
	/**
	* Creates a Redux store that holds the state tree.
	*
	* **We recommend using `configureStore` from the
	* `@reduxjs/toolkit` package**, which replaces `createStore`:
	* **https://redux.js.org/introduction/why-rtk-is-redux-today**
	*
	* The only way to change the data in the store is to call `dispatch()` on it.
	*
	* There should only be a single store in your app. To specify how different
	* parts of the state tree respond to actions, you may combine several reducers
	* into a single reducer function by using `combineReducers`.
	*
	* @param {Function} reducer A function that returns the next state tree, given
	* the current state tree and the action to handle.
	*
	* @param {any} [preloadedState] The initial state. You may optionally specify it
	* to hydrate the state from the server in universal apps, or to restore a
	* previously serialized user session.
	* If you use `combineReducers` to produce the root reducer function, this must be
	* an object with the same shape as `combineReducers` keys.
	*
	* @param {Function} [enhancer] The store enhancer. You may optionally specify it
	* to enhance the store with third-party capabilities such as middleware,
	* time travel, persistence, etc. The only store enhancer that ships with Redux
	* is `applyMiddleware()`.
	*
	* @returns {Store} A Redux store that lets you read the state, dispatch actions
	* and subscribe to changes.
	*/
	var legacy_createStore = createStore;
	/**
	* Prints a warning in the console if it exists.
	*
	* @param {String} message The warning message.
	* @returns {void}
	*/
	function warning$1(message) {
		if (typeof console !== "undefined" && typeof console.error === "function") console.error(message);
		try {
			throw new Error(message);
		} catch (e) {}
	}
	__name(warning$1, "warning");
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
		var reducerKeys = Object.keys(reducers);
		var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
		if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
		if (!isPlainObject$2(inputState)) return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join("\", \"") + "\"");
		var unexpectedKeys = Object.keys(inputState).filter(function(key) {
			return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
		});
		unexpectedKeys.forEach(function(key) {
			unexpectedKeyCache[key] = true;
		});
		if (action && action.type === ActionTypes.REPLACE) return;
		if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ("\"" + unexpectedKeys.join("\", \"") + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join("\", \"") + "\". Unexpected keys will be ignored.");
	}
	function assertReducerShape(reducers) {
		Object.keys(reducers).forEach(function(key) {
			var reducer = reducers[key];
			if (typeof reducer(void 0, { type: ActionTypes.INIT }) === "undefined") throw new Error("The slice reducer for key \"" + key + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
			if (typeof reducer(void 0, { type: ActionTypes.PROBE_UNKNOWN_ACTION() }) === "undefined") throw new Error("The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
		});
	}
	/**
	* Turns an object whose values are different reducer functions, into a single
	* reducer function. It will call every child reducer, and gather their results
	* into a single state object, whose keys correspond to the keys of the passed
	* reducer functions.
	*
	* @param {Object} reducers An object whose values correspond to different
	* reducer functions that need to be combined into one. One handy way to obtain
	* it is to use ES6 `import * as reducers` syntax. The reducers may never return
	* undefined for any action. Instead, they should return their initial state
	* if the state passed to them was undefined, and the current state for any
	* unrecognized action.
	*
	* @returns {Function} A reducer function that invokes every reducer inside the
	* passed object, and builds a state object with the same shape.
	*/
	function combineReducers(reducers) {
		var reducerKeys = Object.keys(reducers);
		var finalReducers = {};
		for (var i = 0; i < reducerKeys.length; i++) {
			var key = reducerKeys[i];
			if (typeof reducers[key] === "undefined") warning$1("No reducer provided for key \"" + key + "\"");
			if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
		}
		var finalReducerKeys = Object.keys(finalReducers);
		var unexpectedKeyCache = {};
		var shapeAssertionError;
		try {
			assertReducerShape(finalReducers);
		} catch (e) {
			shapeAssertionError = e;
		}
		return function combination(state, action) {
			if (state === void 0) state = {};
			if (shapeAssertionError) throw shapeAssertionError;
			var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
			if (warningMessage) warning$1(warningMessage);
			var hasChanged = false;
			var nextState = {};
			for (var _i = 0; _i < finalReducerKeys.length; _i++) {
				var _key = finalReducerKeys[_i];
				var reducer = finalReducers[_key];
				var previousStateForKey = state[_key];
				var nextStateForKey = reducer(previousStateForKey, action);
				if (typeof nextStateForKey === "undefined") {
					var actionType = action && action.type;
					throw new Error("When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : "(unknown type)") + ", the slice reducer for key \"" + _key + "\" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.");
				}
				nextState[_key] = nextStateForKey;
				hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
			}
			hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
			return hasChanged ? nextState : state;
		};
	}
	function bindActionCreator(actionCreator, dispatch) {
		return function() {
			return dispatch(actionCreator.apply(this, arguments));
		};
	}
	/**
	* Turns an object whose values are action creators, into an object with the
	* same keys, but with every function wrapped into a `dispatch` call so they
	* may be invoked directly. This is just a convenience method, as you can call
	* `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	*
	* For convenience, you can also pass an action creator as the first argument,
	* and get a dispatch wrapped function in return.
	*
	* @param {Function|Object} actionCreators An object whose values are action
	* creator functions. One handy way to obtain it is to use ES6 `import * as`
	* syntax. You may also pass a single function.
	*
	* @param {Function} dispatch The `dispatch` function available on your Redux
	* store.
	*
	* @returns {Function|Object} The object mimicking the original object, but with
	* every action creator wrapped into the `dispatch` call. If you passed a
	* function as `actionCreators`, the return value will also be a single
	* function.
	*/
	function bindActionCreators$1(actionCreators, dispatch) {
		if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
		if (typeof actionCreators !== "object" || actionCreators === null) throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
		var boundActionCreators = {};
		for (var key in actionCreators) {
			var actionCreator = actionCreators[key];
			if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
		}
		return boundActionCreators;
	}
	__name(bindActionCreators$1, "bindActionCreators");
	/**
	* Composes single-argument functions from right to left. The rightmost
	* function can take multiple arguments as it provides the signature for
	* the resulting composite function.
	*
	* @param {...Function} funcs The functions to compose.
	* @returns {Function} A function obtained by composing the argument functions
	* from right to left. For example, compose(f, g, h) is identical to doing
	* (...args) => f(g(h(...args))).
	*/
	function compose() {
		for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) funcs[_key] = arguments[_key];
		if (funcs.length === 0) return function(arg) {
			return arg;
		};
		if (funcs.length === 1) return funcs[0];
		return funcs.reduce(function(a, b) {
			return function() {
				return a(b.apply(void 0, arguments));
			};
		});
	}
	/**
	* Creates a store enhancer that applies middleware to the dispatch method
	* of the Redux store. This is handy for a variety of tasks, such as expressing
	* asynchronous actions in a concise manner, or logging every action payload.
	*
	* See `redux-thunk` package as an example of the Redux middleware.
	*
	* Because middleware is potentially asynchronous, this should be the first
	* store enhancer in the composition chain.
	*
	* Note that each middleware will be given the `dispatch` and `getState` functions
	* as named arguments.
	*
	* @param {...Function} middlewares The middleware chain to be applied.
	* @returns {Function} A store enhancer applying the middleware.
	*/
	function applyMiddleware() {
		for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) middlewares[_key] = arguments[_key];
		return function(createStore) {
			return function() {
				var store = createStore.apply(void 0, arguments);
				var _dispatch = function dispatch() {
					throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
				};
				var middlewareAPI = {
					getState: store.getState,
					dispatch: function dispatch() {
						return _dispatch.apply(void 0, arguments);
					}
				};
				var chain = middlewares.map(function(middleware) {
					return middleware(middlewareAPI);
				});
				_dispatch = compose.apply(void 0, chain)(store.dispatch);
				return _objectSpread2(_objectSpread2({}, store), {}, { dispatch: _dispatch });
			};
		};
	}

//#endregion
//#region node_modules/reselect/es/defaultMemoize.js
	var NOT_FOUND = "NOT_FOUND";
	function createSingletonCache(equals) {
		var entry;
		return {
			get: function get(key) {
				if (entry && equals(entry.key, key)) return entry.value;
				return NOT_FOUND;
			},
			put: function put(key, value) {
				entry = {
					key,
					value
				};
			},
			getEntries: function getEntries() {
				return entry ? [entry] : [];
			},
			clear: function clear() {
				entry = void 0;
			}
		};
	}
	function createLruCache(maxSize, equals) {
		var entries = [];
		function get(key) {
			var cacheIndex = entries.findIndex(function(entry) {
				return equals(key, entry.key);
			});
			if (cacheIndex > -1) {
				var entry = entries[cacheIndex];
				if (cacheIndex > 0) {
					entries.splice(cacheIndex, 1);
					entries.unshift(entry);
				}
				return entry.value;
			}
			return NOT_FOUND;
		}
		function put(key, value) {
			if (get(key) === NOT_FOUND) {
				entries.unshift({
					key,
					value
				});
				if (entries.length > maxSize) entries.pop();
			}
		}
		function getEntries() {
			return entries;
		}
		function clear() {
			entries = [];
		}
		return {
			get,
			put,
			getEntries,
			clear
		};
	}
	var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
		return a === b;
	};
	function createCacheKeyComparator(equalityCheck) {
		return function areArgumentsShallowlyEqual(prev, next) {
			if (prev === null || next === null || prev.length !== next.length) return false;
			var length = prev.length;
			for (var i = 0; i < length; i++) if (!equalityCheck(prev[i], next[i])) return false;
			return true;
		};
	}
	function defaultMemoize(func, equalityCheckOrOptions) {
		var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : { equalityCheck: equalityCheckOrOptions };
		var _providedOptions$equa = providedOptions.equalityCheck;
		var equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa;
		var _providedOptions$maxS = providedOptions.maxSize;
		var maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS;
		var resultEqualityCheck = providedOptions.resultEqualityCheck;
		var comparator = createCacheKeyComparator(equalityCheck);
		var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
		function memoized() {
			var value = cache.get(arguments);
			if (value === NOT_FOUND) {
				value = func.apply(null, arguments);
				if (resultEqualityCheck) {
					var matchingEntry = cache.getEntries().find(function(entry) {
						return resultEqualityCheck(entry.value, value);
					});
					if (matchingEntry) value = matchingEntry.value;
				}
				cache.put(arguments, value);
			}
			return value;
		}
		memoized.clearCache = function() {
			return cache.clear();
		};
		return memoized;
	}

//#endregion
//#region node_modules/reselect/es/index.js
	function getDependencies(funcs) {
		var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
		if (!dependencies.every(function(dep) {
			return typeof dep === "function";
		})) {
			var dependencyTypes = dependencies.map(function(dep) {
				return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
			}).join(", ");
			throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
		}
		return dependencies;
	}
	function createSelectorCreator(memoize) {
		for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) memoizeOptionsFromArgs[_key - 1] = arguments[_key];
		return function createSelector() {
			for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) funcs[_key2] = arguments[_key2];
			var _recomputations = 0;
			var _lastResult;
			var directlyPassedOptions = { memoizeOptions: void 0 };
			var resultFunc = funcs.pop();
			if (typeof resultFunc === "object") {
				directlyPassedOptions = resultFunc;
				resultFunc = funcs.pop();
			}
			if (typeof resultFunc !== "function") throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
			var _directlyPassedOption2 = directlyPassedOptions.memoizeOptions;
			var memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
			var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
			var dependencies = getDependencies(funcs);
			var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
				_recomputations++;
				return resultFunc.apply(null, arguments);
			}].concat(finalMemoizeOptions));
			var selector = memoize(function dependenciesChecker() {
				var params = [];
				var length = dependencies.length;
				for (var i = 0; i < length; i++) params.push(dependencies[i].apply(null, arguments));
				_lastResult = memoizedResultFunc.apply(null, params);
				return _lastResult;
			});
			Object.assign(selector, {
				resultFunc,
				memoizedResultFunc,
				dependencies,
				lastResult: function lastResult() {
					return _lastResult;
				},
				recomputations: function recomputations() {
					return _recomputations;
				},
				resetRecomputations: function resetRecomputations() {
					return _recomputations = 0;
				}
			});
			return selector;
		};
	}
	var createSelector = /* #__PURE__ */ createSelectorCreator(defaultMemoize);

//#endregion
//#region node_modules/redux-thunk/es/index.js
/** A function that accepts a potential "extra argument" value to be injected later,
	* and returns an instance of the thunk middleware that uses that value
	*/
	function createThunkMiddleware(extraArgument) {
		return function middleware(_ref) {
			var dispatch = _ref.dispatch;
			var getState = _ref.getState;
			return function(next) {
				return function(action) {
					if (typeof action === "function") return action(dispatch, getState, extraArgument);
					return next(action);
				};
			};
		};
	}
	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

//#endregion
//#region node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js
	var redux_toolkit_esm_exports = /* @__PURE__ */ __exportAll({
		EnhancerArray: () => EnhancerArray,
		MiddlewareArray: () => MiddlewareArray,
		SHOULD_AUTOBATCH: () => SHOULD_AUTOBATCH,
		TaskAbortError: () => TaskAbortError,
		__DO_NOT_USE__ActionTypes: () => ActionTypes,
		addListener: () => addListener,
		applyMiddleware: () => applyMiddleware,
		autoBatchEnhancer: () => autoBatchEnhancer,
		bindActionCreators: () => bindActionCreators$1,
		clearAllListeners: () => clearAllListeners,
		combineReducers: () => combineReducers,
		compose: () => compose,
		configureStore: () => configureStore,
		createAction: () => createAction,
		createActionCreatorInvariantMiddleware: () => createActionCreatorInvariantMiddleware,
		createAsyncThunk: () => createAsyncThunk,
		createDraftSafeSelector: () => createDraftSafeSelector,
		createEntityAdapter: () => createEntityAdapter,
		createImmutableStateInvariantMiddleware: () => createImmutableStateInvariantMiddleware,
		createListenerMiddleware: () => createListenerMiddleware,
		createNextState: () => fn,
		createReducer: () => createReducer,
		createSelector: () => createSelector,
		createSerializableStateInvariantMiddleware: () => createSerializableStateInvariantMiddleware,
		createSlice: () => createSlice,
		createStore: () => createStore,
		current: () => R,
		findNonSerializableValue: () => findNonSerializableValue,
		freeze: () => d,
		getDefaultMiddleware: () => getDefaultMiddleware,
		getType: () => getType,
		isAction: () => isAction,
		isActionCreator: () => isActionCreator,
		isAllOf: () => isAllOf,
		isAnyOf: () => isAnyOf,
		isAsyncThunkAction: () => isAsyncThunkAction,
		isDraft: () => r,
		isFluxStandardAction: () => isFSA,
		isFulfilled: () => isFulfilled,
		isImmutableDefault: () => isImmutableDefault,
		isPending: () => isPending,
		isPlain: () => isPlain,
		isPlainObject: () => isPlainObject$1,
		isRejected: () => isRejected,
		isRejectedWithValue: () => isRejectedWithValue,
		legacy_createStore: () => legacy_createStore,
		miniSerializeError: () => miniSerializeError,
		nanoid: () => nanoid,
		original: () => e,
		prepareAutoBatched: () => prepareAutoBatched,
		removeListener: () => removeListener,
		unwrapResult: () => unwrapResult
	});
	var __extends = void 0 && (void 0).__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	var __generator = void 0 && (void 0).__generator || function(thisArg, body) {
		var _ = {
			label: 0,
			sent: function() {
				if (t[0] & 1) throw t[1];
				return t[1];
			},
			trys: [],
			ops: []
		};
		var f;
		var y;
		var t;
		var g;
		return g = {
			next: verb(0),
			"throw": verb(1),
			"return": verb(2)
		}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
			return this;
		}), g;
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while (_) try {
				if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
				if (y = 0, t) op = [op[0] & 2, t.value];
				switch (op[0]) {
					case 0:
					case 1:
						t = op;
						break;
					case 4:
						_.label++;
						return {
							value: op[1],
							done: false
						};
					case 5:
						_.label++;
						y = op[1];
						op = [0];
						continue;
					case 7:
						op = _.ops.pop();
						_.trys.pop();
						continue;
					default:
						if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
							_ = 0;
							continue;
						}
						if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
							_.label = op[1];
							break;
						}
						if (op[0] === 6 && _.label < t[1]) {
							_.label = t[1];
							t = op;
							break;
						}
						if (t && _.label < t[2]) {
							_.label = t[2];
							_.ops.push(op);
							break;
						}
						if (t[2]) _.ops.pop();
						_.trys.pop();
						continue;
				}
				op = body.call(thisArg, _);
			} catch (e) {
				op = [6, e];
				y = 0;
			} finally {
				f = t = 0;
			}
			if (op[0] & 5) throw op[1];
			return {
				value: op[0] ? op[1] : void 0,
				done: true
			};
		}
	};
	var __spreadArray = void 0 && (void 0).__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	var __defProp = Object.defineProperty;
	var __defProps = Object.defineProperties;
	var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = function(obj, key, value) {
		return key in obj ? __defProp(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value;
	};
	var __spreadValues = function(a, b) {
		for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		if (__getOwnPropSymbols) for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
			var prop = _c[_i];
			if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
		}
		return a;
	};
	var __spreadProps = function(a, b) {
		return __defProps(a, __getOwnPropDescs(b));
	};
	var __async = function(__this, __arguments, generator) {
		return new Promise(function(resolve, reject) {
			var fulfilled = function(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			};
			var rejected = function(value) {
				try {
					step(generator.throw(value));
				} catch (e) {
					reject(e);
				}
			};
			var step = function(x) {
				return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
			};
			step((generator = generator.apply(__this, __arguments)).next());
		});
	};
	var createDraftSafeSelector = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var selector = createSelector.apply(void 0, args);
		var wrappedSelector = function(value) {
			var rest = [];
			for (var _i = 1; _i < arguments.length; _i++) rest[_i - 1] = arguments[_i];
			return selector.apply(void 0, __spreadArray([r(value) ? R(value) : value], rest));
		};
		return wrappedSelector;
	};
	var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
		if (arguments.length === 0) return void 0;
		if (typeof arguments[0] === "object") return compose;
		return compose.apply(null, arguments);
	};
	typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
	function isPlainObject$1(value) {
		if (typeof value !== "object" || value === null) return false;
		var proto = Object.getPrototypeOf(value);
		if (proto === null) return true;
		var baseProto = proto;
		while (Object.getPrototypeOf(baseProto) !== null) baseProto = Object.getPrototypeOf(baseProto);
		return proto === baseProto;
	}
	__name(isPlainObject$1, "isPlainObject");
	var hasMatchFunction = function(v) {
		return v && typeof v.match === "function";
	};
	function createAction(type, prepareAction) {
		function actionCreator() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			if (prepareAction) {
				var prepared = prepareAction.apply(void 0, args);
				if (!prepared) throw new Error("prepareAction did not return an object");
				return __spreadValues(__spreadValues({
					type,
					payload: prepared.payload
				}, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
			}
			return {
				type,
				payload: args[0]
			};
		}
		actionCreator.toString = function() {
			return "" + type;
		};
		actionCreator.type = type;
		actionCreator.match = function(action) {
			return action.type === type;
		};
		return actionCreator;
	}
	function isAction(action) {
		return isPlainObject$1(action) && "type" in action;
	}
	function isActionCreator(action) {
		return typeof action === "function" && "type" in action && hasMatchFunction(action);
	}
	function isFSA(action) {
		return isAction(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
	}
	function isValidKey(key) {
		return [
			"type",
			"payload",
			"error",
			"meta"
		].indexOf(key) > -1;
	}
	function getType(actionCreator) {
		return "" + actionCreator;
	}
	function getMessage(type) {
		var splitType = type ? ("" + type).split("/") : [];
		var actionName = splitType[splitType.length - 1] || "actionCreator";
		return "Detected an action creator with type \"" + (type || "unknown") + "\" being dispatched. \nMake sure you're calling the action creator before dispatching, i.e. `dispatch(" + actionName + "())` instead of `dispatch(" + actionName + ")`. This is necessary even if the action has no payload.";
	}
	function createActionCreatorInvariantMiddleware(options) {
		if (options === void 0) options = {};
		var _c = options.isActionCreator;
		var isActionCreator2 = _c === void 0 ? isActionCreator : _c;
		return function() {
			return function(next) {
				return function(action) {
					if (isActionCreator2(action)) console.warn(getMessage(action.type));
					return next(action);
				};
			};
		};
	}
	function getTimeMeasureUtils(maxDelay, fnName) {
		var elapsed = 0;
		return {
			measureTime: function(fn) {
				var started = Date.now();
				try {
					return fn();
				} finally {
					elapsed += Date.now() - started;
				}
			},
			warnIfExceeded: function() {
				if (elapsed > maxDelay) console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
			}
		};
	}
	var MiddlewareArray = function(_super) {
		__extends(MiddlewareArray, _super);
		function MiddlewareArray() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var _this = _super.apply(this, args) || this;
			Object.setPrototypeOf(_this, MiddlewareArray.prototype);
			return _this;
		}
		Object.defineProperty(MiddlewareArray, Symbol.species, {
			get: function() {
				return MiddlewareArray;
			},
			enumerable: false,
			configurable: true
		});
		MiddlewareArray.prototype.concat = function() {
			var arr = [];
			for (var _i = 0; _i < arguments.length; _i++) arr[_i] = arguments[_i];
			return _super.prototype.concat.apply(this, arr);
		};
		MiddlewareArray.prototype.prepend = function() {
			var arr = [];
			for (var _i = 0; _i < arguments.length; _i++) arr[_i] = arguments[_i];
			if (arr.length === 1 && Array.isArray(arr[0])) return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
			return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
		};
		return MiddlewareArray;
	}(Array);
	var EnhancerArray = function(_super) {
		__extends(EnhancerArray, _super);
		function EnhancerArray() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var _this = _super.apply(this, args) || this;
			Object.setPrototypeOf(_this, EnhancerArray.prototype);
			return _this;
		}
		Object.defineProperty(EnhancerArray, Symbol.species, {
			get: function() {
				return EnhancerArray;
			},
			enumerable: false,
			configurable: true
		});
		EnhancerArray.prototype.concat = function() {
			var arr = [];
			for (var _i = 0; _i < arguments.length; _i++) arr[_i] = arguments[_i];
			return _super.prototype.concat.apply(this, arr);
		};
		EnhancerArray.prototype.prepend = function() {
			var arr = [];
			for (var _i = 0; _i < arguments.length; _i++) arr[_i] = arguments[_i];
			if (arr.length === 1 && Array.isArray(arr[0])) return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr[0].concat(this))))();
			return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr.concat(this))))();
		};
		return EnhancerArray;
	}(Array);
	function freezeDraftable(val) {
		return t(val) ? fn(val, function() {}) : val;
	}
	var isProduction = false;
	var prefix = "Invariant failed";
	function invariant(condition, message) {
		if (condition) return;
		if (isProduction) throw new Error(prefix);
		throw new Error(prefix + ": " + (message || ""));
	}
	function stringify(obj, serializer, indent, decycler) {
		return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
	}
	function getSerialize(serializer, decycler) {
		var stack = [];
		var keys = [];
		if (!decycler) decycler = function(_, value) {
			if (stack[0] === value) return "[Circular ~]";
			return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
		};
		return function(key, value) {
			if (stack.length > 0) {
				var thisPos = stack.indexOf(this);
				~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
				~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
				if (~stack.indexOf(value)) value = decycler.call(this, key, value);
			} else stack.push(value);
			return serializer == null ? value : serializer.call(this, key, value);
		};
	}
	function isImmutableDefault(value) {
		return typeof value !== "object" || value == null || Object.isFrozen(value);
	}
	function trackForMutations(isImmutable, ignorePaths, obj) {
		var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
		return { detectMutations: function() {
			return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
		} };
	}
	function trackProperties(isImmutable, ignorePaths, obj, path, checkedObjects) {
		if (ignorePaths === void 0) ignorePaths = [];
		if (path === void 0) path = "";
		if (checkedObjects === void 0) checkedObjects = /* @__PURE__ */ new Set();
		var tracked = { value: obj };
		if (!isImmutable(obj) && !checkedObjects.has(obj)) {
			checkedObjects.add(obj);
			tracked.children = {};
			for (var key in obj) {
				var childPath = path ? path + "." + key : key;
				if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) continue;
				tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
			}
		}
		return tracked;
	}
	function detectMutations(isImmutable, ignoredPaths, trackedProperty, obj, sameParentRef, path) {
		if (ignoredPaths === void 0) ignoredPaths = [];
		if (sameParentRef === void 0) sameParentRef = false;
		if (path === void 0) path = "";
		var prevObj = trackedProperty ? trackedProperty.value : void 0;
		var sameRef = prevObj === obj;
		if (sameParentRef && !sameRef && !Number.isNaN(obj)) return {
			wasMutated: true,
			path
		};
		if (isImmutable(prevObj) || isImmutable(obj)) return { wasMutated: false };
		var keysToDetect = {};
		for (var key in trackedProperty.children) keysToDetect[key] = true;
		for (var key in obj) keysToDetect[key] = true;
		var hasIgnoredPaths = ignoredPaths.length > 0;
		var _loop_1 = function(key) {
			var nestedPath = path ? path + "." + key : key;
			if (hasIgnoredPaths) {
				if (ignoredPaths.some(function(ignored) {
					if (ignored instanceof RegExp) return ignored.test(nestedPath);
					return nestedPath === ignored;
				})) return "continue";
			}
			var result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
			if (result.wasMutated) return { value: result };
		};
		for (var key in keysToDetect) {
			var state_1 = _loop_1(key);
			if (typeof state_1 === "object") return state_1.value;
		}
		return { wasMutated: false };
	}
	function createImmutableStateInvariantMiddleware(options) {
		if (options === void 0) options = {};
		var _c = options.isImmutable;
		var isImmutable = _c === void 0 ? isImmutableDefault : _c;
		var ignoredPaths = options.ignoredPaths;
		var _d = options.warnAfter;
		var warnAfter = _d === void 0 ? 32 : _d;
		var ignore = options.ignore;
		ignoredPaths = ignoredPaths || ignore;
		var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
		return function(_c) {
			var getState = _c.getState;
			var state = getState();
			var tracker = track(state);
			var result;
			return function(next) {
				return function(action) {
					var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
					measureUtils.measureTime(function() {
						state = getState();
						result = tracker.detectMutations();
						tracker = track(state);
						invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
					});
					var dispatchedAction = next(action);
					measureUtils.measureTime(function() {
						state = getState();
						result = tracker.detectMutations();
						tracker = track(state);
						result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
					});
					measureUtils.warnIfExceeded();
					return dispatchedAction;
				};
			};
		};
	}
	function isPlain(val) {
		var type = typeof val;
		return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject$1(val);
	}
	function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths, cache) {
		if (path === void 0) path = "";
		if (isSerializable === void 0) isSerializable = isPlain;
		if (ignoredPaths === void 0) ignoredPaths = [];
		var foundNestedSerializable;
		if (!isSerializable(value)) return {
			keyPath: path || "<root>",
			value
		};
		if (typeof value !== "object" || value === null) return false;
		if (cache == null ? void 0 : cache.has(value)) return false;
		var entries = getEntries != null ? getEntries(value) : Object.entries(value);
		var hasIgnoredPaths = ignoredPaths.length > 0;
		var _loop_2 = function(key, nestedValue) {
			var nestedPath = path ? path + "." + key : key;
			if (hasIgnoredPaths) {
				if (ignoredPaths.some(function(ignored) {
					if (ignored instanceof RegExp) return ignored.test(nestedPath);
					return nestedPath === ignored;
				})) return "continue";
			}
			if (!isSerializable(nestedValue)) return { value: {
				keyPath: nestedPath,
				value: nestedValue
			} };
			if (typeof nestedValue === "object") {
				foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
				if (foundNestedSerializable) return { value: foundNestedSerializable };
			}
		};
		for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
			var _c = entries_1[_i];
			var key = _c[0];
			var nestedValue = _c[1];
			var state_2 = _loop_2(key, nestedValue);
			if (typeof state_2 === "object") return state_2.value;
		}
		if (cache && isNestedFrozen(value)) cache.add(value);
		return false;
	}
	function isNestedFrozen(value) {
		if (!Object.isFrozen(value)) return false;
		for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
			var nestedValue = _c[_i];
			if (typeof nestedValue !== "object" || nestedValue === null) continue;
			if (!isNestedFrozen(nestedValue)) return false;
		}
		return true;
	}
	function createSerializableStateInvariantMiddleware(options) {
		if (options === void 0) options = {};
		var _c = options.isSerializable;
		var isSerializable = _c === void 0 ? isPlain : _c;
		var getEntries = options.getEntries;
		var _d = options.ignoredActions;
		var ignoredActions = _d === void 0 ? [] : _d;
		var _e = options.ignoredActionPaths;
		var ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e;
		var _f = options.ignoredPaths;
		var ignoredPaths = _f === void 0 ? [] : _f;
		var _g = options.warnAfter;
		var warnAfter = _g === void 0 ? 32 : _g;
		var _h = options.ignoreState;
		var ignoreState = _h === void 0 ? false : _h;
		var _j = options.ignoreActions;
		var ignoreActions = _j === void 0 ? false : _j;
		var _k = options.disableCache;
		var cache = !(_k === void 0 ? false : _k) && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
		return function(storeAPI) {
			return function(next) {
				return function(action) {
					var result = next(action);
					var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
					if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) measureUtils.measureTime(function() {
						var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
						if (foundActionNonSerializableValue) {
							var keyPath = foundActionNonSerializableValue.keyPath;
							var value = foundActionNonSerializableValue.value;
							console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
						}
					});
					if (!ignoreState) {
						measureUtils.measureTime(function() {
							var foundStateNonSerializableValue = findNonSerializableValue(storeAPI.getState(), "", isSerializable, getEntries, ignoredPaths, cache);
							if (foundStateNonSerializableValue) {
								var keyPath = foundStateNonSerializableValue.keyPath;
								var value = foundStateNonSerializableValue.value;
								console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
							}
						});
						measureUtils.warnIfExceeded();
					}
					return result;
				};
			};
		};
	}
	function isBoolean(x) {
		return typeof x === "boolean";
	}
	function curryGetDefaultMiddleware() {
		return function curriedGetDefaultMiddleware(options) {
			return getDefaultMiddleware(options);
		};
	}
	function getDefaultMiddleware(options) {
		if (options === void 0) options = {};
		var _c = options.thunk;
		var thunk$1 = _c === void 0 ? true : _c;
		var _d = options.immutableCheck;
		var immutableCheck = _d === void 0 ? true : _d;
		var _e = options.serializableCheck;
		var serializableCheck = _e === void 0 ? true : _e;
		var _f = options.actionCreatorCheck;
		var actionCreatorCheck = _f === void 0 ? true : _f;
		var middlewareArray = new MiddlewareArray();
		if (thunk$1) if (isBoolean(thunk$1)) middlewareArray.push(thunk);
		else middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
		if (immutableCheck) {
			var immutableOptions = {};
			if (!isBoolean(immutableCheck)) immutableOptions = immutableCheck;
			middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
		}
		if (serializableCheck) {
			var serializableOptions = {};
			if (!isBoolean(serializableCheck)) serializableOptions = serializableCheck;
			middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
		}
		if (actionCreatorCheck) {
			var actionCreatorOptions = {};
			if (!isBoolean(actionCreatorCheck)) actionCreatorOptions = actionCreatorCheck;
			middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
		}
		return middlewareArray;
	}
	var IS_PRODUCTION = false;
	function configureStore(options) {
		var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
		var _c = options || {};
		var _d = _c.reducer;
		var reducer = _d === void 0 ? void 0 : _d;
		var _e = _c.middleware;
		var middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e;
		var _f = _c.devTools;
		var devTools = _f === void 0 ? true : _f;
		var _g = _c.preloadedState;
		var preloadedState = _g === void 0 ? void 0 : _g;
		var _h = _c.enhancers;
		var enhancers = _h === void 0 ? void 0 : _h;
		var rootReducer;
		if (typeof reducer === "function") rootReducer = reducer;
		else if (isPlainObject$1(reducer)) rootReducer = combineReducers(reducer);
		else throw new Error("\"reducer\" is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
		var finalMiddleware = middleware;
		if (typeof finalMiddleware === "function") {
			finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
			if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) throw new Error("when using a middleware builder function, an array of middleware must be returned");
		}
		if (!IS_PRODUCTION && finalMiddleware.some(function(item) {
			return typeof item !== "function";
		})) throw new Error("each middleware provided to configureStore must be a function");
		var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
		var finalCompose = compose;
		if (devTools) finalCompose = composeWithDevTools(__spreadValues({ trace: !IS_PRODUCTION }, typeof devTools === "object" && devTools));
		var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
		var storeEnhancers = defaultEnhancers;
		if (Array.isArray(enhancers)) storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
		else if (typeof enhancers === "function") storeEnhancers = enhancers(defaultEnhancers);
		var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
		return createStore(rootReducer, preloadedState, composedEnhancer);
	}
	function executeReducerBuilderCallback(builderCallback) {
		var actionsMap = {};
		var actionMatchers = [];
		var defaultCaseReducer;
		var builder = {
			addCase: function(typeOrActionCreator, reducer) {
				if (actionMatchers.length > 0) throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
				if (defaultCaseReducer) throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
				var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
				if (!type) throw new Error("`builder.addCase` cannot be called with an empty action type");
				if (type in actionsMap) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
				actionsMap[type] = reducer;
				return builder;
			},
			addMatcher: function(matcher, reducer) {
				if (defaultCaseReducer) throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
				actionMatchers.push({
					matcher,
					reducer
				});
				return builder;
			},
			addDefaultCase: function(reducer) {
				if (defaultCaseReducer) throw new Error("`builder.addDefaultCase` can only be called once");
				defaultCaseReducer = reducer;
				return builder;
			}
		};
		builderCallback(builder);
		return [
			actionsMap,
			actionMatchers,
			defaultCaseReducer
		];
	}
	function isStateFunction(x) {
		return typeof x === "function";
	}
	var hasWarnedAboutObjectNotation = false;
	function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
		if (actionMatchers === void 0) actionMatchers = [];
		if (typeof mapOrBuilderCallback === "object") {
			if (!hasWarnedAboutObjectNotation) {
				hasWarnedAboutObjectNotation = true;
				console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
			}
		}
		var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [
			mapOrBuilderCallback,
			actionMatchers,
			defaultCaseReducer
		];
		var actionsMap = _c[0];
		var finalActionMatchers = _c[1];
		var finalDefaultCaseReducer = _c[2];
		var getInitialState;
		if (isStateFunction(initialState)) getInitialState = function() {
			return freezeDraftable(initialState());
		};
		else {
			var frozenInitialState_1 = freezeDraftable(initialState);
			getInitialState = function() {
				return frozenInitialState_1;
			};
		}
		function reducer(state, action) {
			if (state === void 0) state = getInitialState();
			var caseReducers = __spreadArray([actionsMap[action.type]], finalActionMatchers.filter(function(_c) {
				var matcher = _c.matcher;
				return matcher(action);
			}).map(function(_c) {
				return _c.reducer;
			}));
			if (caseReducers.filter(function(cr) {
				return !!cr;
			}).length === 0) caseReducers = [finalDefaultCaseReducer];
			return caseReducers.reduce(function(previousState, caseReducer) {
				if (caseReducer) if (r(previousState)) {
					var result = caseReducer(previousState, action);
					if (result === void 0) return previousState;
					return result;
				} else if (!t(previousState)) {
					var result = caseReducer(previousState, action);
					if (result === void 0) {
						if (previousState === null) return previousState;
						throw Error("A case reducer on a non-draftable value must not return undefined");
					}
					return result;
				} else return fn(previousState, function(draft) {
					return caseReducer(draft, action);
				});
				return previousState;
			}, state);
		}
		reducer.getInitialState = getInitialState;
		return reducer;
	}
	var hasWarnedAboutObjectNotation2 = false;
	function getType2(slice, actionKey) {
		return slice + "/" + actionKey;
	}
	function createSlice(options) {
		var name = options.name;
		if (!name) throw new Error("`name` is a required option for createSlice");
		if (typeof process !== "undefined" && true) {
			if (options.initialState === void 0) console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
		}
		var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
		var reducers = options.reducers || {};
		var reducerNames = Object.keys(reducers);
		var sliceCaseReducersByName = {};
		var sliceCaseReducersByType = {};
		var actionCreators = {};
		reducerNames.forEach(function(reducerName) {
			var maybeReducerWithPrepare = reducers[reducerName];
			var type = getType2(name, reducerName);
			var caseReducer;
			var prepareCallback;
			if ("reducer" in maybeReducerWithPrepare) {
				caseReducer = maybeReducerWithPrepare.reducer;
				prepareCallback = maybeReducerWithPrepare.prepare;
			} else caseReducer = maybeReducerWithPrepare;
			sliceCaseReducersByName[reducerName] = caseReducer;
			sliceCaseReducersByType[type] = caseReducer;
			actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
		});
		function buildReducer() {
			if (typeof options.extraReducers === "object") {
				if (!hasWarnedAboutObjectNotation2) {
					hasWarnedAboutObjectNotation2 = true;
					console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
				}
			}
			var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
			var _d = _c[0];
			var extraReducers = _d === void 0 ? {} : _d;
			var _e = _c[1];
			var actionMatchers = _e === void 0 ? [] : _e;
			var _f = _c[2];
			var defaultCaseReducer = _f === void 0 ? void 0 : _f;
			var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
			return createReducer(initialState, function(builder) {
				for (var key in finalCaseReducers) builder.addCase(key, finalCaseReducers[key]);
				for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
					var m = actionMatchers_1[_i];
					builder.addMatcher(m.matcher, m.reducer);
				}
				if (defaultCaseReducer) builder.addDefaultCase(defaultCaseReducer);
			});
		}
		var _reducer;
		return {
			name,
			reducer: function(state, action) {
				if (!_reducer) _reducer = buildReducer();
				return _reducer(state, action);
			},
			actions: actionCreators,
			caseReducers: sliceCaseReducersByName,
			getInitialState: function() {
				if (!_reducer) _reducer = buildReducer();
				return _reducer.getInitialState();
			}
		};
	}
	function getInitialEntityState() {
		return {
			ids: [],
			entities: {}
		};
	}
	function createInitialStateFactory() {
		function getInitialState(additionalState) {
			if (additionalState === void 0) additionalState = {};
			return Object.assign(getInitialEntityState(), additionalState);
		}
		return { getInitialState };
	}
	function createSelectorsFactory() {
		function getSelectors(selectState) {
			var selectIds = function(state) {
				return state.ids;
			};
			var selectEntities = function(state) {
				return state.entities;
			};
			var selectAll = createDraftSafeSelector(selectIds, selectEntities, function(ids, entities) {
				return ids.map(function(id) {
					return entities[id];
				});
			});
			var selectId = function(_, id) {
				return id;
			};
			var selectById = function(entities, id) {
				return entities[id];
			};
			var selectTotal = createDraftSafeSelector(selectIds, function(ids) {
				return ids.length;
			});
			if (!selectState) return {
				selectIds,
				selectEntities,
				selectAll,
				selectTotal,
				selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
			};
			var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
			return {
				selectIds: createDraftSafeSelector(selectState, selectIds),
				selectEntities: selectGlobalizedEntities,
				selectAll: createDraftSafeSelector(selectState, selectAll),
				selectTotal: createDraftSafeSelector(selectState, selectTotal),
				selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
			};
		}
		return { getSelectors };
	}
	function createSingleArgumentStateOperator(mutator) {
		var operator = createStateOperator(function(_, state) {
			return mutator(state);
		});
		return function operation(state) {
			return operator(state, void 0);
		};
	}
	function createStateOperator(mutator) {
		return function operation(state, arg) {
			function isPayloadActionArgument(arg2) {
				return isFSA(arg2);
			}
			var runMutator = function(draft) {
				if (isPayloadActionArgument(arg)) mutator(arg.payload, draft);
				else mutator(arg, draft);
			};
			if (r(state)) {
				runMutator(state);
				return state;
			} else return fn(state, runMutator);
		};
	}
	function selectIdValue(entity, selectId) {
		var key = selectId(entity);
		if (key === void 0) console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
		return key;
	}
	function ensureEntitiesArray(entities) {
		if (!Array.isArray(entities)) entities = Object.values(entities);
		return entities;
	}
	function splitAddedUpdatedEntities(newEntities, selectId, state) {
		newEntities = ensureEntitiesArray(newEntities);
		var added = [];
		var updated = [];
		for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
			var entity = newEntities_1[_i];
			var id = selectIdValue(entity, selectId);
			if (id in state.entities) updated.push({
				id,
				changes: entity
			});
			else added.push(entity);
		}
		return [added, updated];
	}
	function createUnsortedStateAdapter(selectId) {
		function addOneMutably(entity, state) {
			var key = selectIdValue(entity, selectId);
			if (key in state.entities) return;
			state.ids.push(key);
			state.entities[key] = entity;
		}
		function addManyMutably(newEntities, state) {
			newEntities = ensureEntitiesArray(newEntities);
			for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
				var entity = newEntities_2[_i];
				addOneMutably(entity, state);
			}
		}
		function setOneMutably(entity, state) {
			var key = selectIdValue(entity, selectId);
			if (!(key in state.entities)) state.ids.push(key);
			state.entities[key] = entity;
		}
		function setManyMutably(newEntities, state) {
			newEntities = ensureEntitiesArray(newEntities);
			for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
				var entity = newEntities_3[_i];
				setOneMutably(entity, state);
			}
		}
		function setAllMutably(newEntities, state) {
			newEntities = ensureEntitiesArray(newEntities);
			state.ids = [];
			state.entities = {};
			addManyMutably(newEntities, state);
		}
		function removeOneMutably(key, state) {
			return removeManyMutably([key], state);
		}
		function removeManyMutably(keys, state) {
			var didMutate = false;
			keys.forEach(function(key) {
				if (key in state.entities) {
					delete state.entities[key];
					didMutate = true;
				}
			});
			if (didMutate) state.ids = state.ids.filter(function(id) {
				return id in state.entities;
			});
		}
		function removeAllMutably(state) {
			Object.assign(state, {
				ids: [],
				entities: {}
			});
		}
		function takeNewKey(keys, update, state) {
			var original2 = state.entities[update.id];
			var updated = Object.assign({}, original2, update.changes);
			var newKey = selectIdValue(updated, selectId);
			var hasNewKey = newKey !== update.id;
			if (hasNewKey) {
				keys[update.id] = newKey;
				delete state.entities[update.id];
			}
			state.entities[newKey] = updated;
			return hasNewKey;
		}
		function updateOneMutably(update, state) {
			return updateManyMutably([update], state);
		}
		function updateManyMutably(updates, state) {
			var newKeys = {};
			var updatesPerEntity = {};
			updates.forEach(function(update) {
				if (update.id in state.entities) updatesPerEntity[update.id] = {
					id: update.id,
					changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
				};
			});
			updates = Object.values(updatesPerEntity);
			if (updates.length > 0) {
				if (updates.filter(function(update) {
					return takeNewKey(newKeys, update, state);
				}).length > 0) state.ids = Object.keys(state.entities);
			}
		}
		function upsertOneMutably(entity, state) {
			return upsertManyMutably([entity], state);
		}
		function upsertManyMutably(newEntities, state) {
			var _c = splitAddedUpdatedEntities(newEntities, selectId, state);
			var added = _c[0];
			var updated = _c[1];
			updateManyMutably(updated, state);
			addManyMutably(added, state);
		}
		return {
			removeAll: createSingleArgumentStateOperator(removeAllMutably),
			addOne: createStateOperator(addOneMutably),
			addMany: createStateOperator(addManyMutably),
			setOne: createStateOperator(setOneMutably),
			setMany: createStateOperator(setManyMutably),
			setAll: createStateOperator(setAllMutably),
			updateOne: createStateOperator(updateOneMutably),
			updateMany: createStateOperator(updateManyMutably),
			upsertOne: createStateOperator(upsertOneMutably),
			upsertMany: createStateOperator(upsertManyMutably),
			removeOne: createStateOperator(removeOneMutably),
			removeMany: createStateOperator(removeManyMutably)
		};
	}
	function createSortedStateAdapter(selectId, sort) {
		var _c = createUnsortedStateAdapter(selectId);
		var removeOne = _c.removeOne;
		var removeMany = _c.removeMany;
		var removeAll = _c.removeAll;
		function addOneMutably(entity, state) {
			return addManyMutably([entity], state);
		}
		function addManyMutably(newEntities, state) {
			newEntities = ensureEntitiesArray(newEntities);
			var models = newEntities.filter(function(model) {
				return !(selectIdValue(model, selectId) in state.entities);
			});
			if (models.length !== 0) merge(models, state);
		}
		function setOneMutably(entity, state) {
			return setManyMutably([entity], state);
		}
		function setManyMutably(newEntities, state) {
			newEntities = ensureEntitiesArray(newEntities);
			if (newEntities.length !== 0) merge(newEntities, state);
		}
		function setAllMutably(newEntities, state) {
			newEntities = ensureEntitiesArray(newEntities);
			state.entities = {};
			state.ids = [];
			addManyMutably(newEntities, state);
		}
		function updateOneMutably(update, state) {
			return updateManyMutably([update], state);
		}
		function updateManyMutably(updates, state) {
			var appliedUpdates = false;
			for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
				var update = updates_1[_i];
				var entity = state.entities[update.id];
				if (!entity) continue;
				appliedUpdates = true;
				Object.assign(entity, update.changes);
				var newId = selectId(entity);
				if (update.id !== newId) {
					delete state.entities[update.id];
					state.entities[newId] = entity;
				}
			}
			if (appliedUpdates) resortEntities(state);
		}
		function upsertOneMutably(entity, state) {
			return upsertManyMutably([entity], state);
		}
		function upsertManyMutably(newEntities, state) {
			var _c = splitAddedUpdatedEntities(newEntities, selectId, state);
			var added = _c[0];
			var updated = _c[1];
			updateManyMutably(updated, state);
			addManyMutably(added, state);
		}
		function areArraysEqual(a, b) {
			if (a.length !== b.length) return false;
			for (var i = 0; i < a.length && i < b.length; i++) {
				if (a[i] === b[i]) continue;
				return false;
			}
			return true;
		}
		function merge(models, state) {
			models.forEach(function(model) {
				state.entities[selectId(model)] = model;
			});
			resortEntities(state);
		}
		function resortEntities(state) {
			var allEntities = Object.values(state.entities);
			allEntities.sort(sort);
			var newSortedIds = allEntities.map(selectId);
			var ids = state.ids;
			if (!areArraysEqual(ids, newSortedIds)) state.ids = newSortedIds;
		}
		return {
			removeOne,
			removeMany,
			removeAll,
			addOne: createStateOperator(addOneMutably),
			updateOne: createStateOperator(updateOneMutably),
			upsertOne: createStateOperator(upsertOneMutably),
			setOne: createStateOperator(setOneMutably),
			setMany: createStateOperator(setManyMutably),
			setAll: createStateOperator(setAllMutably),
			addMany: createStateOperator(addManyMutably),
			updateMany: createStateOperator(updateManyMutably),
			upsertMany: createStateOperator(upsertManyMutably)
		};
	}
	function createEntityAdapter(options) {
		if (options === void 0) options = {};
		var _c = __spreadValues({
			sortComparer: false,
			selectId: function(instance) {
				return instance.id;
			}
		}, options);
		var selectId = _c.selectId;
		var sortComparer = _c.sortComparer;
		var stateFactory = createInitialStateFactory();
		var selectorsFactory = createSelectorsFactory();
		var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
		return __spreadValues(__spreadValues(__spreadValues({
			selectId,
			sortComparer
		}, stateFactory), selectorsFactory), stateAdapter);
	}
	var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
	var nanoid = function(size) {
		if (size === void 0) size = 21;
		var id = "";
		var i = size;
		while (i--) id += urlAlphabet[Math.random() * 64 | 0];
		return id;
	};
	var commonProperties = [
		"name",
		"message",
		"stack",
		"code"
	];
	var RejectWithValue = function() {
		function RejectWithValue(payload, meta) {
			this.payload = payload;
			this.meta = meta;
		}
		return RejectWithValue;
	}();
	var FulfillWithMeta = function() {
		function FulfillWithMeta(payload, meta) {
			this.payload = payload;
			this.meta = meta;
		}
		return FulfillWithMeta;
	}();
	var miniSerializeError = function(value) {
		if (typeof value === "object" && value !== null) {
			var simpleError = {};
			for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
				var property = commonProperties_1[_i];
				if (typeof value[property] === "string") simpleError[property] = value[property];
			}
			return simpleError;
		}
		return { message: String(value) };
	};
	var createAsyncThunk = (function() {
		function createAsyncThunk2(typePrefix, payloadCreator, options) {
			var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
				return {
					payload,
					meta: __spreadProps(__spreadValues({}, meta || {}), {
						arg,
						requestId,
						requestStatus: "fulfilled"
					})
				};
			});
			var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
				return {
					payload: void 0,
					meta: __spreadProps(__spreadValues({}, meta || {}), {
						arg,
						requestId,
						requestStatus: "pending"
					})
				};
			});
			var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
				return {
					payload,
					error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
					meta: __spreadProps(__spreadValues({}, meta || {}), {
						arg,
						requestId,
						rejectedWithValue: !!payload,
						requestStatus: "rejected",
						aborted: (error == null ? void 0 : error.name) === "AbortError",
						condition: (error == null ? void 0 : error.name) === "ConditionError"
					})
				};
			});
			var displayedWarning = false;
			var AC = typeof AbortController !== "undefined" ? AbortController : function() {
				function class_1() {
					this.signal = {
						aborted: false,
						addEventListener: function() {},
						dispatchEvent: function() {
							return false;
						},
						onabort: function() {},
						removeEventListener: function() {},
						reason: void 0,
						throwIfAborted: function() {}
					};
				}
				class_1.prototype.abort = function() {
					if (!displayedWarning) {
						displayedWarning = true;
						console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
					}
				};
				return class_1;
			}();
			function actionCreator(arg) {
				return function(dispatch, getState, extra) {
					var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
					var abortController = new AC();
					var abortReason;
					function abort(reason) {
						abortReason = reason;
						abortController.abort();
					}
					var promise2 = function() {
						return __async(this, null, function() {
							var _a;
							var _b;
							var finalAction;
							var conditionResult;
							var abortedPromise;
							var err_1;
							var skipDispatch;
							return __generator(this, function(_c) {
								switch (_c.label) {
									case 0:
										_c.trys.push([
											0,
											4,
											,
											5
										]);
										conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, {
											getState,
											extra
										});
										if (!isThenable(conditionResult)) return [3, 2];
										return [4, conditionResult];
									case 1:
										conditionResult = _c.sent();
										_c.label = 2;
									case 2:
										if (conditionResult === false || abortController.signal.aborted) throw {
											name: "ConditionError",
											message: "Aborted due to condition callback returning false."
										};
										abortedPromise = new Promise(function(_, reject) {
											return abortController.signal.addEventListener("abort", function() {
												return reject({
													name: "AbortError",
													message: abortReason || "Aborted"
												});
											});
										});
										dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, {
											requestId,
											arg
										}, {
											getState,
											extra
										})));
										return [4, Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
											dispatch,
											getState,
											extra,
											requestId,
											signal: abortController.signal,
											abort,
											rejectWithValue: function(value, meta) {
												return new RejectWithValue(value, meta);
											},
											fulfillWithValue: function(value, meta) {
												return new FulfillWithMeta(value, meta);
											}
										})).then(function(result) {
											if (result instanceof RejectWithValue) throw result;
											if (result instanceof FulfillWithMeta) return fulfilled(result.payload, requestId, arg, result.meta);
											return fulfilled(result, requestId, arg);
										})])];
									case 3:
										finalAction = _c.sent();
										return [3, 5];
									case 4:
										err_1 = _c.sent();
										finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
										return [3, 5];
									case 5:
										skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
										if (!skipDispatch) dispatch(finalAction);
										return [2, finalAction];
								}
							});
						});
					}();
					return Object.assign(promise2, {
						abort,
						requestId,
						arg,
						unwrap: function() {
							return promise2.then(unwrapResult);
						}
					});
				};
			}
			return Object.assign(actionCreator, {
				pending,
				rejected,
				fulfilled,
				typePrefix
			});
		}
		createAsyncThunk2.withTypes = function() {
			return createAsyncThunk2;
		};
		return createAsyncThunk2;
	})();
	function unwrapResult(action) {
		if (action.meta && action.meta.rejectedWithValue) throw action.payload;
		if (action.error) throw action.error;
		return action.payload;
	}
	function isThenable(value) {
		return value !== null && typeof value === "object" && typeof value.then === "function";
	}
	var matches = function(matcher, action) {
		if (hasMatchFunction(matcher)) return matcher.match(action);
		else return matcher(action);
	};
	function isAnyOf() {
		var matchers = [];
		for (var _i = 0; _i < arguments.length; _i++) matchers[_i] = arguments[_i];
		return function(action) {
			return matchers.some(function(matcher) {
				return matches(matcher, action);
			});
		};
	}
	function isAllOf() {
		var matchers = [];
		for (var _i = 0; _i < arguments.length; _i++) matchers[_i] = arguments[_i];
		return function(action) {
			return matchers.every(function(matcher) {
				return matches(matcher, action);
			});
		};
	}
	function hasExpectedRequestMetadata(action, validStatus) {
		if (!action || !action.meta) return false;
		var hasValidRequestId = typeof action.meta.requestId === "string";
		var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
		return hasValidRequestId && hasValidRequestStatus;
	}
	function isAsyncThunkArray(a) {
		return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
	}
	function isPending() {
		var asyncThunks = [];
		for (var _i = 0; _i < arguments.length; _i++) asyncThunks[_i] = arguments[_i];
		if (asyncThunks.length === 0) return function(action) {
			return hasExpectedRequestMetadata(action, ["pending"]);
		};
		if (!isAsyncThunkArray(asyncThunks)) return isPending()(asyncThunks[0]);
		return function(action) {
			var matchers = asyncThunks.map(function(asyncThunk) {
				return asyncThunk.pending;
			});
			return isAnyOf.apply(void 0, matchers)(action);
		};
	}
	function isRejected() {
		var asyncThunks = [];
		for (var _i = 0; _i < arguments.length; _i++) asyncThunks[_i] = arguments[_i];
		if (asyncThunks.length === 0) return function(action) {
			return hasExpectedRequestMetadata(action, ["rejected"]);
		};
		if (!isAsyncThunkArray(asyncThunks)) return isRejected()(asyncThunks[0]);
		return function(action) {
			var matchers = asyncThunks.map(function(asyncThunk) {
				return asyncThunk.rejected;
			});
			return isAnyOf.apply(void 0, matchers)(action);
		};
	}
	function isRejectedWithValue() {
		var asyncThunks = [];
		for (var _i = 0; _i < arguments.length; _i++) asyncThunks[_i] = arguments[_i];
		var hasFlag = function(action) {
			return action && action.meta && action.meta.rejectedWithValue;
		};
		if (asyncThunks.length === 0) return function(action) {
			return isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag)(action);
		};
		if (!isAsyncThunkArray(asyncThunks)) return isRejectedWithValue()(asyncThunks[0]);
		return function(action) {
			return isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag)(action);
		};
	}
	function isFulfilled() {
		var asyncThunks = [];
		for (var _i = 0; _i < arguments.length; _i++) asyncThunks[_i] = arguments[_i];
		if (asyncThunks.length === 0) return function(action) {
			return hasExpectedRequestMetadata(action, ["fulfilled"]);
		};
		if (!isAsyncThunkArray(asyncThunks)) return isFulfilled()(asyncThunks[0]);
		return function(action) {
			var matchers = asyncThunks.map(function(asyncThunk) {
				return asyncThunk.fulfilled;
			});
			return isAnyOf.apply(void 0, matchers)(action);
		};
	}
	function isAsyncThunkAction() {
		var asyncThunks = [];
		for (var _i = 0; _i < arguments.length; _i++) asyncThunks[_i] = arguments[_i];
		if (asyncThunks.length === 0) return function(action) {
			return hasExpectedRequestMetadata(action, [
				"pending",
				"fulfilled",
				"rejected"
			]);
		};
		if (!isAsyncThunkArray(asyncThunks)) return isAsyncThunkAction()(asyncThunks[0]);
		return function(action) {
			var matchers = [];
			for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
				var asyncThunk = asyncThunks_1[_i];
				matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
			}
			return isAnyOf.apply(void 0, matchers)(action);
		};
	}
	var assertFunction = function(func, expected) {
		if (typeof func !== "function") throw new TypeError(expected + " is not a function");
	};
	var noop = function() {};
	var catchRejection = function(promise2, onError) {
		if (onError === void 0) onError = noop;
		promise2.catch(onError);
		return promise2;
	};
	var addAbortSignalListener = function(abortSignal, callback) {
		abortSignal.addEventListener("abort", callback, { once: true });
		return function() {
			return abortSignal.removeEventListener("abort", callback);
		};
	};
	var abortControllerWithReason = function(abortController, reason) {
		var signal = abortController.signal;
		if (signal.aborted) return;
		if (!("reason" in signal)) Object.defineProperty(signal, "reason", {
			enumerable: true,
			value: reason,
			configurable: true,
			writable: true
		});
		abortController.abort(reason);
	};
	var task = "task";
	var listener = "listener";
	var completed = "completed";
	var cancelled = "cancelled";
	var taskCancelled = "task-" + cancelled;
	var taskCompleted = "task-" + completed;
	var listenerCancelled = listener + "-" + cancelled;
	var listenerCompleted = listener + "-" + completed;
	var TaskAbortError = function() {
		function TaskAbortError(code) {
			this.code = code;
			this.name = "TaskAbortError";
			this.message = task + " " + cancelled + " (reason: " + code + ")";
		}
		return TaskAbortError;
	}();
	var validateActive = function(signal) {
		if (signal.aborted) throw new TaskAbortError(signal.reason);
	};
	function raceWithSignal(signal, promise2) {
		var cleanup = noop;
		return new Promise(function(resolve, reject) {
			var notifyRejection = function() {
				return reject(new TaskAbortError(signal.reason));
			};
			if (signal.aborted) {
				notifyRejection();
				return;
			}
			cleanup = addAbortSignalListener(signal, notifyRejection);
			promise2.finally(function() {
				return cleanup();
			}).then(resolve, reject);
		}).finally(function() {
			cleanup = noop;
		});
	}
	var runTask = function(task2, cleanUp) {
		return __async(void 0, null, function() {
			var value;
			var error_1;
			return __generator(this, function(_c) {
				switch (_c.label) {
					case 0:
						_c.trys.push([
							0,
							3,
							4,
							5
						]);
						return [4, Promise.resolve()];
					case 1:
						_c.sent();
						return [4, task2()];
					case 2:
						value = _c.sent();
						return [2, {
							status: "ok",
							value
						}];
					case 3:
						error_1 = _c.sent();
						return [2, {
							status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
							error: error_1
						}];
					case 4:
						cleanUp == null || cleanUp();
						return [7];
					case 5: return [2];
				}
			});
		});
	};
	var createPause = function(signal) {
		return function(promise2) {
			return catchRejection(raceWithSignal(signal, promise2).then(function(output) {
				validateActive(signal);
				return output;
			}));
		};
	};
	var createDelay = function(signal) {
		var pause = createPause(signal);
		return function(timeoutMs) {
			return pause(new Promise(function(resolve) {
				return setTimeout(resolve, timeoutMs);
			}));
		};
	};
	var assign = Object.assign;
	var INTERNAL_NIL_TOKEN = {};
	var alm = "listenerMiddleware";
	var createFork = function(parentAbortSignal, parentBlockingPromises) {
		var linkControllers = function(controller) {
			return addAbortSignalListener(parentAbortSignal, function() {
				return abortControllerWithReason(controller, parentAbortSignal.reason);
			});
		};
		return function(taskExecutor, opts) {
			assertFunction(taskExecutor, "taskExecutor");
			var childAbortController = new AbortController();
			linkControllers(childAbortController);
			var result = runTask(function() {
				return __async(void 0, null, function() {
					var result2;
					return __generator(this, function(_c) {
						switch (_c.label) {
							case 0:
								validateActive(parentAbortSignal);
								validateActive(childAbortController.signal);
								return [4, taskExecutor({
									pause: createPause(childAbortController.signal),
									delay: createDelay(childAbortController.signal),
									signal: childAbortController.signal
								})];
							case 1:
								result2 = _c.sent();
								validateActive(childAbortController.signal);
								return [2, result2];
						}
					});
				});
			}, function() {
				return abortControllerWithReason(childAbortController, taskCompleted);
			});
			if (opts == null ? void 0 : opts.autoJoin) parentBlockingPromises.push(result);
			return {
				result: createPause(parentAbortSignal)(result),
				cancel: function() {
					abortControllerWithReason(childAbortController, taskCancelled);
				}
			};
		};
	};
	var createTakePattern = function(startListening, signal) {
		var take = function(predicate, timeout) {
			return __async(void 0, null, function() {
				var unsubscribe;
				var tuplePromise;
				var promises;
				var output;
				return __generator(this, function(_c) {
					switch (_c.label) {
						case 0:
							validateActive(signal);
							unsubscribe = function() {};
							tuplePromise = new Promise(function(resolve, reject) {
								var stopListening = startListening({
									predicate,
									effect: function(action, listenerApi) {
										listenerApi.unsubscribe();
										resolve([
											action,
											listenerApi.getState(),
											listenerApi.getOriginalState()
										]);
									}
								});
								unsubscribe = function() {
									stopListening();
									reject();
								};
							});
							promises = [tuplePromise];
							if (timeout != null) promises.push(new Promise(function(resolve) {
								return setTimeout(resolve, timeout, null);
							}));
							_c.label = 1;
						case 1:
							_c.trys.push([
								1,
								,
								3,
								4
							]);
							return [4, raceWithSignal(signal, Promise.race(promises))];
						case 2:
							output = _c.sent();
							validateActive(signal);
							return [2, output];
						case 3:
							unsubscribe();
							return [7];
						case 4: return [2];
					}
				});
			});
		};
		return function(predicate, timeout) {
			return catchRejection(take(predicate, timeout));
		};
	};
	var getListenerEntryPropsFrom = function(options) {
		var type = options.type;
		var actionCreator = options.actionCreator;
		var matcher = options.matcher;
		var predicate = options.predicate;
		var effect = options.effect;
		if (type) predicate = createAction(type).match;
		else if (actionCreator) {
			type = actionCreator.type;
			predicate = actionCreator.match;
		} else if (matcher) predicate = matcher;
		else if (predicate) {} else throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
		assertFunction(effect, "options.listener");
		return {
			predicate,
			type,
			effect
		};
	};
	var createListenerEntry = function(options) {
		var _c = getListenerEntryPropsFrom(options);
		var type = _c.type;
		var predicate = _c.predicate;
		var effect = _c.effect;
		return {
			id: nanoid(),
			effect,
			type,
			predicate,
			pending: /* @__PURE__ */ new Set(),
			unsubscribe: function() {
				throw new Error("Unsubscribe not initialized");
			}
		};
	};
	var cancelActiveListeners = function(entry) {
		entry.pending.forEach(function(controller) {
			abortControllerWithReason(controller, listenerCancelled);
		});
	};
	var createClearListenerMiddleware = function(listenerMap) {
		return function() {
			listenerMap.forEach(cancelActiveListeners);
			listenerMap.clear();
		};
	};
	var safelyNotifyError = function(errorHandler, errorToNotify, errorInfo) {
		try {
			errorHandler(errorToNotify, errorInfo);
		} catch (errorHandlerError) {
			setTimeout(function() {
				throw errorHandlerError;
			}, 0);
		}
	};
	var addListener = createAction(alm + "/add");
	var clearAllListeners = createAction(alm + "/removeAll");
	var removeListener = createAction(alm + "/remove");
	var defaultErrorHandler = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		console.error.apply(console, __spreadArray([alm + "/error"], args));
	};
	function createListenerMiddleware(middlewareOptions) {
		var _this = this;
		if (middlewareOptions === void 0) middlewareOptions = {};
		var listenerMap = /* @__PURE__ */ new Map();
		var extra = middlewareOptions.extra;
		var _c = middlewareOptions.onError;
		var onError = _c === void 0 ? defaultErrorHandler : _c;
		assertFunction(onError, "onError");
		var insertEntry = function(entry) {
			entry.unsubscribe = function() {
				return listenerMap.delete(entry.id);
			};
			listenerMap.set(entry.id, entry);
			return function(cancelOptions) {
				entry.unsubscribe();
				if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) cancelActiveListeners(entry);
			};
		};
		var findListenerEntry = function(comparator) {
			for (var _i = 0, _c = Array.from(listenerMap.values()); _i < _c.length; _i++) {
				var entry = _c[_i];
				if (comparator(entry)) return entry;
			}
		};
		var startListening = function(options) {
			var entry = findListenerEntry(function(existingEntry) {
				return existingEntry.effect === options.effect;
			});
			if (!entry) entry = createListenerEntry(options);
			return insertEntry(entry);
		};
		var stopListening = function(options) {
			var _c = getListenerEntryPropsFrom(options);
			var type = _c.type;
			var effect = _c.effect;
			var predicate = _c.predicate;
			var entry = findListenerEntry(function(entry2) {
				return (typeof type === "string" ? entry2.type === type : entry2.predicate === predicate) && entry2.effect === effect;
			});
			if (entry) {
				entry.unsubscribe();
				if (options.cancelActive) cancelActiveListeners(entry);
			}
			return !!entry;
		};
		var notifyListener = function(entry, action, api, getOriginalState) {
			return __async(_this, null, function() {
				var internalTaskController;
				var take;
				var autoJoinPromises;
				var listenerError_1;
				return __generator(this, function(_c) {
					switch (_c.label) {
						case 0:
							internalTaskController = new AbortController();
							take = createTakePattern(startListening, internalTaskController.signal);
							autoJoinPromises = [];
							_c.label = 1;
						case 1:
							_c.trys.push([
								1,
								3,
								4,
								6
							]);
							entry.pending.add(internalTaskController);
							return [4, Promise.resolve(entry.effect(action, assign({}, api, {
								getOriginalState,
								condition: function(predicate, timeout) {
									return take(predicate, timeout).then(Boolean);
								},
								take,
								delay: createDelay(internalTaskController.signal),
								pause: createPause(internalTaskController.signal),
								extra,
								signal: internalTaskController.signal,
								fork: createFork(internalTaskController.signal, autoJoinPromises),
								unsubscribe: entry.unsubscribe,
								subscribe: function() {
									listenerMap.set(entry.id, entry);
								},
								cancelActiveListeners: function() {
									entry.pending.forEach(function(controller, _, set) {
										if (controller !== internalTaskController) {
											abortControllerWithReason(controller, listenerCancelled);
											set.delete(controller);
										}
									});
								}
							})))];
						case 2:
							_c.sent();
							return [3, 6];
						case 3:
							listenerError_1 = _c.sent();
							if (!(listenerError_1 instanceof TaskAbortError)) safelyNotifyError(onError, listenerError_1, { raisedBy: "effect" });
							return [3, 6];
						case 4: return [4, Promise.allSettled(autoJoinPromises)];
						case 5:
							_c.sent();
							abortControllerWithReason(internalTaskController, listenerCompleted);
							entry.pending.delete(internalTaskController);
							return [7];
						case 6: return [2];
					}
				});
			});
		};
		var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
		var middleware = function(api) {
			return function(next) {
				return function(action) {
					if (!isAction(action)) return next(action);
					if (addListener.match(action)) return startListening(action.payload);
					if (clearAllListeners.match(action)) {
						clearListenerMiddleware();
						return;
					}
					if (removeListener.match(action)) return stopListening(action.payload);
					var originalState = api.getState();
					var getOriginalState = function() {
						if (originalState === INTERNAL_NIL_TOKEN) throw new Error(alm + ": getOriginalState can only be called synchronously");
						return originalState;
					};
					var result;
					try {
						result = next(action);
						if (listenerMap.size > 0) {
							var currentState = api.getState();
							var listenerEntries = Array.from(listenerMap.values());
							for (var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++) {
								var entry = listenerEntries_1[_i];
								var runListener = false;
								try {
									runListener = entry.predicate(action, currentState, originalState);
								} catch (predicateError) {
									runListener = false;
									safelyNotifyError(onError, predicateError, { raisedBy: "predicate" });
								}
								if (!runListener) continue;
								notifyListener(entry, action, api, getOriginalState);
							}
						}
					} finally {
						originalState = INTERNAL_NIL_TOKEN;
					}
					return result;
				};
			};
		};
		return {
			middleware,
			startListening,
			stopListening,
			clearListeners: clearListenerMiddleware
		};
	}
	var SHOULD_AUTOBATCH = "RTK_autoBatch";
	var prepareAutoBatched = function() {
		return function(payload) {
			var _c;
			return {
				payload,
				meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
			};
		};
	};
	var promise;
	var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb) {
		return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
			return setTimeout(function() {
				throw err;
			}, 0);
		});
	};
	var createQueueWithTimer = function(timeout) {
		return function(notify) {
			setTimeout(notify, timeout);
		};
	};
	var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
	var autoBatchEnhancer = function(options) {
		if (options === void 0) options = { type: "raf" };
		return function(next) {
			return function() {
				var args = [];
				for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
				var store = next.apply(void 0, args);
				var notifying = true;
				var shouldNotifyAtEndOfTick = false;
				var notificationQueued = false;
				var listeners = /* @__PURE__ */ new Set();
				var queueCallback = options.type === "tick" ? queueMicrotaskShim : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
				var notifyListeners = function() {
					notificationQueued = false;
					if (shouldNotifyAtEndOfTick) {
						shouldNotifyAtEndOfTick = false;
						listeners.forEach(function(l) {
							return l();
						});
					}
				};
				return Object.assign({}, store, {
					subscribe: function(listener2) {
						var wrappedListener = function() {
							return notifying && listener2();
						};
						var unsubscribe = store.subscribe(wrappedListener);
						listeners.add(listener2);
						return function() {
							unsubscribe();
							listeners.delete(listener2);
						};
					},
					dispatch: function(action) {
						var _a;
						try {
							notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
							shouldNotifyAtEndOfTick = !notifying;
							if (shouldNotifyAtEndOfTick) {
								if (!notificationQueued) {
									notificationQueued = true;
									queueCallback(notifyListeners);
								}
							}
							return store.dispatch(action);
						} finally {
							notifying = true;
						}
					}
				});
			};
		};
	};
	F();

//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
/**
	* @license React
	* use-sync-external-store-shim.development.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_use_sync_external_store_shim_development = /* @__PURE__ */ __commonJSMin(((exports) => {
		(function() {
			function is(x, y) {
				return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
			}
			function useSyncExternalStore$2(subscribe, getSnapshot) {
				didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
				var value = getSnapshot();
				if (!didWarnUncachedGetSnapshot) {
					var cachedValue = getSnapshot();
					objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
				}
				cachedValue = useState({ inst: {
					value,
					getSnapshot
				} });
				var inst = cachedValue[0].inst;
				var forceUpdate = cachedValue[1];
				useLayoutEffect(function() {
					inst.value = value;
					inst.getSnapshot = getSnapshot;
					checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				}, [
					subscribe,
					value,
					getSnapshot
				]);
				useEffect(function() {
					checkIfSnapshotChanged(inst) && forceUpdate({ inst });
					return subscribe(function() {
						checkIfSnapshotChanged(inst) && forceUpdate({ inst });
					});
				}, [subscribe]);
				useDebugValue(value);
				return value;
			}
			function checkIfSnapshotChanged(inst) {
				var latestGetSnapshot = inst.getSnapshot;
				inst = inst.value;
				try {
					var nextValue = latestGetSnapshot();
					return !objectIs(inst, nextValue);
				} catch (error) {
					return !0;
				}
			}
			function useSyncExternalStore$1(subscribe, getSnapshot) {
				return getSnapshot();
			}
			"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
			var React = (globalThis.React);
			var objectIs = "function" === typeof Object.is ? Object.is : is;
			var useState = React.useState;
			var useEffect = React.useEffect;
			var useLayoutEffect = React.useLayoutEffect;
			var useDebugValue = React.useDebugValue;
			var didWarnOld18Alpha = !1;
			var didWarnUncachedGetSnapshot = !1;
			var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
			exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
			"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
		})();
	}));

//#endregion
//#region node_modules/use-sync-external-store/shim/index.js
	var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_use_sync_external_store_shim_development();
	}));

//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
/**
	* @license React
	* use-sync-external-store-shim/with-selector.development.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_with_selector_development = /* @__PURE__ */ __commonJSMin(((exports) => {
		(function() {
			function is(x, y) {
				return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
			}
			"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
			var React = (globalThis.React);
			var shim = require_shim();
			var objectIs = "function" === typeof Object.is ? Object.is : is;
			var useSyncExternalStore = shim.useSyncExternalStore;
			var useRef = React.useRef;
			var useEffect = React.useEffect;
			var useMemo = React.useMemo;
			var useDebugValue = React.useDebugValue;
			exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
				var instRef = useRef(null);
				if (null === instRef.current) {
					var inst = {
						hasValue: !1,
						value: null
					};
					instRef.current = inst;
				} else inst = instRef.current;
				instRef = useMemo(function() {
					function memoizedSelector(nextSnapshot) {
						if (!hasMemo) {
							hasMemo = !0;
							memoizedSnapshot = nextSnapshot;
							nextSnapshot = selector(nextSnapshot);
							if (void 0 !== isEqual && inst.hasValue) {
								var currentSelection = inst.value;
								if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
							}
							return memoizedSelection = nextSnapshot;
						}
						currentSelection = memoizedSelection;
						if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
						var nextSelection = selector(nextSnapshot);
						if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
						memoizedSnapshot = nextSnapshot;
						return memoizedSelection = nextSelection;
					}
					var hasMemo = !1;
					var memoizedSnapshot;
					var memoizedSelection;
					var maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
					return [function() {
						return memoizedSelector(getSnapshot());
					}, null === maybeGetServerSnapshot ? void 0 : function() {
						return memoizedSelector(maybeGetServerSnapshot());
					}];
				}, [
					getSnapshot,
					getServerSnapshot,
					selector,
					isEqual
				]);
				var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
				useEffect(function() {
					inst.hasValue = !0;
					inst.value = value;
				}, [value]);
				useDebugValue(value);
				return value;
			};
			"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
		})();
	}));

//#endregion
//#region node_modules/use-sync-external-store/shim/with-selector.js
	var require_with_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_with_selector_development();
	}));

//#endregion
//#region node_modules/react-redux/es/utils/reactBatchedUpdates.js
var import_shim = require_shim();
var import_with_selector = require_with_selector();

//#endregion
//#region node_modules/react-redux/es/utils/batch.js
	function defaultNoopBatch(callback) {
		callback();
	}
	var batch = defaultNoopBatch;
	var setBatch = (newBatch) => batch = newBatch;
	var getBatch = () => batch;

//#endregion
//#region node_modules/react-redux/es/components/Context.js
	var ContextKey = Symbol.for(`react-redux-context`);
	var gT = typeof globalThis !== "undefined" ? globalThis : {};
	function getContext() {
		var _gT$ContextKey;
		if (!react.createContext) return {};
		const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = /* @__PURE__ */ new Map();
		let realContext = contextMap.get(react.createContext);
		if (!realContext) {
			realContext = react.createContext(null);
			realContext.displayName = "ReactRedux";
			contextMap.set(react.createContext, realContext);
		}
		return realContext;
	}
	var ReactReduxContext = /*#__PURE__*/ getContext();

//#endregion
//#region node_modules/react-redux/es/hooks/useReduxContext.js
/**
	* Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
	* hook that you should usually not need to call directly.
	*
	* @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	* @returns {Function} A `useReduxContext` hook bound to the specified context.
	*/
	function createReduxContextHook(context = ReactReduxContext) {
		return function useReduxContext() {
			const contextValue = (0, react.useContext)(context);
			if (!contextValue) throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
			return contextValue;
		};
	}
	/**
	* A hook to access the value of the `ReactReduxContext`. This is a low-level
	* hook that you should usually not need to call directly.
	*
	* @returns {any} the value of the `ReactReduxContext`
	*
	* @example
	*
	* import React from 'react'
	* import { useReduxContext } from 'react-redux'
	*
	* export const CounterComponent = () => {
	*   const { store } = useReduxContext()
	*   return <div>{store.getState()}</div>
	* }
	*/
	var useReduxContext = /*#__PURE__*/ createReduxContextHook();

//#endregion
//#region node_modules/react-redux/es/utils/useSyncExternalStore.js
	var notInitialized = () => {
		throw new Error("uSES not initialized!");
	};

//#endregion
//#region node_modules/react-redux/es/hooks/useSelector.js
	var useSyncExternalStoreWithSelector$1 = notInitialized;
	var initializeUseSelector = (fn) => {
		useSyncExternalStoreWithSelector$1 = fn;
	};
	var refEquality = (a, b) => a === b;
	/**
	* Hook factory, which creates a `useSelector` hook bound to a given context.
	*
	* @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	* @returns {Function} A `useSelector` hook bound to the specified context.
	*/
	function createSelectorHook(context = ReactReduxContext) {
		const useReduxContext$2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
		return function useSelector(selector, equalityFnOrOptions = {}) {
			const { equalityFn = refEquality, stabilityCheck = void 0, noopCheck = void 0 } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
			if (!selector) throw new Error(`You must pass a selector to useSelector`);
			if (typeof selector !== "function") throw new Error(`You must pass a function as a selector to useSelector`);
			if (typeof equalityFn !== "function") throw new Error(`You must pass a function as an equality function to useSelector`);
			const { store, subscription, getServerState, stabilityCheck: globalStabilityCheck, noopCheck: globalNoopCheck } = useReduxContext$2();
			const firstRun = (0, react.useRef)(true);
			const wrappedSelector = (0, react.useCallback)({ [selector.name](state) {
				const selected = selector(state);
				{
					const finalStabilityCheck = typeof stabilityCheck === "undefined" ? globalStabilityCheck : stabilityCheck;
					if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
						const toCompare = selector(state);
						if (!equalityFn(selected, toCompare)) {
							let stack = void 0;
							try {
								throw new Error();
							} catch (e) {
								({stack} = e);
							}
							console.warn("Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization", {
								state,
								selected,
								selected2: toCompare,
								stack
							});
						}
					}
					const finalNoopCheck = typeof noopCheck === "undefined" ? globalNoopCheck : noopCheck;
					if (finalNoopCheck === "always" || finalNoopCheck === "once" && firstRun.current) {
						if (selected === state) {
							let stack = void 0;
							try {
								throw new Error();
							} catch (e) {
								({stack} = e);
							}
							console.warn("Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.", { stack });
						}
					}
					if (firstRun.current) firstRun.current = false;
				}
				return selected;
			} }[selector.name], [
				selector,
				globalStabilityCheck,
				stabilityCheck
			]);
			const selectedState = useSyncExternalStoreWithSelector$1(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
			(0, react.useDebugValue)(selectedState);
			return selectedState;
		};
	}
	/**
	* A hook to access the redux store's state. This hook takes a selector function
	* as an argument. The selector is called with the store state.
	*
	* This hook takes an optional equality comparison function as the second parameter
	* that allows you to customize the way the selected state is compared to determine
	* whether the component needs to be re-rendered.
	*
	* @param {Function} selector the selector function
	* @param {Function=} equalityFn the function that will be used to determine equality
	*
	* @returns {any} the selected state
	*
	* @example
	*
	* import React from 'react'
	* import { useSelector } from 'react-redux'
	*
	* export const CounterComponent = () => {
	*   const counter = useSelector(state => state.counter)
	*   return <div>{counter}</div>
	* }
	*/
	var useSelector = /*#__PURE__*/ createSelectorHook();

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}

//#endregion
//#region node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js
/** @license React v16.13.1
	* react-is.development.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_is_development$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
		(function() {
			"use strict";
			var hasSymbol = typeof Symbol === "function" && Symbol.for;
			var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
			var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
			var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
			var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
			var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
			var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
			var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
			var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
			var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
			var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
			var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
			var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
			var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
			var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
			var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
			var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
			var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
			var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
			function isValidElementType(type) {
				return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
			}
			function typeOf(object) {
				if (typeof object === "object" && object !== null) {
					var $$typeof = object.$$typeof;
					switch ($$typeof) {
						case REACT_ELEMENT_TYPE:
							var type = object.type;
							switch (type) {
								case REACT_ASYNC_MODE_TYPE:
								case REACT_CONCURRENT_MODE_TYPE:
								case REACT_FRAGMENT_TYPE:
								case REACT_PROFILER_TYPE:
								case REACT_STRICT_MODE_TYPE:
								case REACT_SUSPENSE_TYPE: return type;
								default:
									var $$typeofType = type && type.$$typeof;
									switch ($$typeofType) {
										case REACT_CONTEXT_TYPE:
										case REACT_FORWARD_REF_TYPE:
										case REACT_LAZY_TYPE:
										case REACT_MEMO_TYPE:
										case REACT_PROVIDER_TYPE: return $$typeofType;
										default: return $$typeof;
									}
							}
						case REACT_PORTAL_TYPE: return $$typeof;
					}
				}
			}
			var AsyncMode = REACT_ASYNC_MODE_TYPE;
			var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
			var ContextConsumer = REACT_CONTEXT_TYPE;
			var ContextProvider = REACT_PROVIDER_TYPE;
			var Element = REACT_ELEMENT_TYPE;
			var ForwardRef = REACT_FORWARD_REF_TYPE;
			var Fragment = REACT_FRAGMENT_TYPE;
			var Lazy = REACT_LAZY_TYPE;
			var Memo = REACT_MEMO_TYPE;
			var Portal = REACT_PORTAL_TYPE;
			var Profiler = REACT_PROFILER_TYPE;
			var StrictMode = REACT_STRICT_MODE_TYPE;
			var Suspense = REACT_SUSPENSE_TYPE;
			var hasWarnedAboutDeprecatedIsAsyncMode = false;
			function isAsyncMode(object) {
				if (!hasWarnedAboutDeprecatedIsAsyncMode) {
					hasWarnedAboutDeprecatedIsAsyncMode = true;
					console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
				}
				return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
			}
			function isConcurrentMode(object) {
				return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
			}
			function isContextConsumer(object) {
				return typeOf(object) === REACT_CONTEXT_TYPE;
			}
			function isContextProvider(object) {
				return typeOf(object) === REACT_PROVIDER_TYPE;
			}
			function isElement(object) {
				return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			}
			function isForwardRef(object) {
				return typeOf(object) === REACT_FORWARD_REF_TYPE;
			}
			function isFragment(object) {
				return typeOf(object) === REACT_FRAGMENT_TYPE;
			}
			function isLazy(object) {
				return typeOf(object) === REACT_LAZY_TYPE;
			}
			function isMemo(object) {
				return typeOf(object) === REACT_MEMO_TYPE;
			}
			function isPortal(object) {
				return typeOf(object) === REACT_PORTAL_TYPE;
			}
			function isProfiler(object) {
				return typeOf(object) === REACT_PROFILER_TYPE;
			}
			function isStrictMode(object) {
				return typeOf(object) === REACT_STRICT_MODE_TYPE;
			}
			function isSuspense(object) {
				return typeOf(object) === REACT_SUSPENSE_TYPE;
			}
			exports.AsyncMode = AsyncMode;
			exports.ConcurrentMode = ConcurrentMode;
			exports.ContextConsumer = ContextConsumer;
			exports.ContextProvider = ContextProvider;
			exports.Element = Element;
			exports.ForwardRef = ForwardRef;
			exports.Fragment = Fragment;
			exports.Lazy = Lazy;
			exports.Memo = Memo;
			exports.Portal = Portal;
			exports.Profiler = Profiler;
			exports.StrictMode = StrictMode;
			exports.Suspense = Suspense;
			exports.isAsyncMode = isAsyncMode;
			exports.isConcurrentMode = isConcurrentMode;
			exports.isContextConsumer = isContextConsumer;
			exports.isContextProvider = isContextProvider;
			exports.isElement = isElement;
			exports.isForwardRef = isForwardRef;
			exports.isFragment = isFragment;
			exports.isLazy = isLazy;
			exports.isMemo = isMemo;
			exports.isPortal = isPortal;
			exports.isProfiler = isProfiler;
			exports.isStrictMode = isStrictMode;
			exports.isSuspense = isSuspense;
			exports.isValidElementType = isValidElementType;
			exports.typeOf = typeOf;
		})();
	}));

//#endregion
//#region node_modules/hoist-non-react-statics/node_modules/react-is/index.js
	var require_react_is$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_is_development$1();
	}));

//#endregion
//#region node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
	var require_hoist_non_react_statics_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var reactIs = require_react_is$1();
		/**
		* Copyright 2015, Yahoo! Inc.
		* Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
		*/
		var REACT_STATICS = {
			childContextTypes: true,
			contextType: true,
			contextTypes: true,
			defaultProps: true,
			displayName: true,
			getDefaultProps: true,
			getDerivedStateFromError: true,
			getDerivedStateFromProps: true,
			mixins: true,
			propTypes: true,
			type: true
		};
		var KNOWN_STATICS = {
			name: true,
			length: true,
			prototype: true,
			caller: true,
			callee: true,
			arguments: true,
			arity: true
		};
		var FORWARD_REF_STATICS = {
			"$$typeof": true,
			render: true,
			defaultProps: true,
			displayName: true,
			propTypes: true
		};
		var MEMO_STATICS = {
			"$$typeof": true,
			compare: true,
			defaultProps: true,
			displayName: true,
			propTypes: true,
			type: true
		};
		var TYPE_STATICS = {};
		TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
		TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
		function getStatics(component) {
			if (reactIs.isMemo(component)) return MEMO_STATICS;
			return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
		}
		var defineProperty = Object.defineProperty;
		var getOwnPropertyNames = Object.getOwnPropertyNames;
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var getPrototypeOf = Object.getPrototypeOf;
		var objectPrototype = Object.prototype;
		function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
			if (typeof sourceComponent !== "string") {
				if (objectPrototype) {
					var inheritedComponent = getPrototypeOf(sourceComponent);
					if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
				}
				var keys = getOwnPropertyNames(sourceComponent);
				if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
				var targetStatics = getStatics(targetComponent);
				var sourceStatics = getStatics(sourceComponent);
				for (var i = 0; i < keys.length; ++i) {
					var key = keys[i];
					if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
						var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
						try {
							defineProperty(targetComponent, key, descriptor);
						} catch (e) {}
					}
				}
			}
			return targetComponent;
		}
		module.exports = hoistNonReactStatics;
	}));

//#endregion
//#region node_modules/react-is/cjs/react-is.development.js
/**
	* @license React
	* react-is.development.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
		(function() {
			"use strict";
			var REACT_ELEMENT_TYPE = Symbol.for("react.element");
			var REACT_PORTAL_TYPE = Symbol.for("react.portal");
			var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
			var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
			var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
			var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
			var REACT_CONTEXT_TYPE = Symbol.for("react.context");
			var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
			var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
			var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
			var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
			var REACT_MEMO_TYPE = Symbol.for("react.memo");
			var REACT_LAZY_TYPE = Symbol.for("react.lazy");
			var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
			var enableScopeAPI = false;
			var enableCacheElement = false;
			var enableTransitionTracing = false;
			var enableLegacyHidden = false;
			var enableDebugTracing = false;
			var REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
			function isValidElementType(type) {
				if (typeof type === "string" || typeof type === "function") return true;
				if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
				if (typeof type === "object" && type !== null) {
					if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) return true;
				}
				return false;
			}
			function typeOf(object) {
				if (typeof object === "object" && object !== null) {
					var $$typeof = object.$$typeof;
					switch ($$typeof) {
						case REACT_ELEMENT_TYPE:
							var type = object.type;
							switch (type) {
								case REACT_FRAGMENT_TYPE:
								case REACT_PROFILER_TYPE:
								case REACT_STRICT_MODE_TYPE:
								case REACT_SUSPENSE_TYPE:
								case REACT_SUSPENSE_LIST_TYPE: return type;
								default:
									var $$typeofType = type && type.$$typeof;
									switch ($$typeofType) {
										case REACT_SERVER_CONTEXT_TYPE:
										case REACT_CONTEXT_TYPE:
										case REACT_FORWARD_REF_TYPE:
										case REACT_LAZY_TYPE:
										case REACT_MEMO_TYPE:
										case REACT_PROVIDER_TYPE: return $$typeofType;
										default: return $$typeof;
									}
							}
						case REACT_PORTAL_TYPE: return $$typeof;
					}
				}
			}
			var ContextConsumer = REACT_CONTEXT_TYPE;
			var ContextProvider = REACT_PROVIDER_TYPE;
			var Element = REACT_ELEMENT_TYPE;
			var ForwardRef = REACT_FORWARD_REF_TYPE;
			var Fragment = REACT_FRAGMENT_TYPE;
			var Lazy = REACT_LAZY_TYPE;
			var Memo = REACT_MEMO_TYPE;
			var Portal = REACT_PORTAL_TYPE;
			var Profiler = REACT_PROFILER_TYPE;
			var StrictMode = REACT_STRICT_MODE_TYPE;
			var Suspense = REACT_SUSPENSE_TYPE;
			var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
			var hasWarnedAboutDeprecatedIsAsyncMode = false;
			var hasWarnedAboutDeprecatedIsConcurrentMode = false;
			function isAsyncMode(object) {
				if (!hasWarnedAboutDeprecatedIsAsyncMode) {
					hasWarnedAboutDeprecatedIsAsyncMode = true;
					console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
				}
				return false;
			}
			function isConcurrentMode(object) {
				if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
					hasWarnedAboutDeprecatedIsConcurrentMode = true;
					console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
				}
				return false;
			}
			function isContextConsumer(object) {
				return typeOf(object) === REACT_CONTEXT_TYPE;
			}
			function isContextProvider(object) {
				return typeOf(object) === REACT_PROVIDER_TYPE;
			}
			function isElement(object) {
				return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			}
			function isForwardRef(object) {
				return typeOf(object) === REACT_FORWARD_REF_TYPE;
			}
			function isFragment(object) {
				return typeOf(object) === REACT_FRAGMENT_TYPE;
			}
			function isLazy(object) {
				return typeOf(object) === REACT_LAZY_TYPE;
			}
			function isMemo(object) {
				return typeOf(object) === REACT_MEMO_TYPE;
			}
			function isPortal(object) {
				return typeOf(object) === REACT_PORTAL_TYPE;
			}
			function isProfiler(object) {
				return typeOf(object) === REACT_PROFILER_TYPE;
			}
			function isStrictMode(object) {
				return typeOf(object) === REACT_STRICT_MODE_TYPE;
			}
			function isSuspense(object) {
				return typeOf(object) === REACT_SUSPENSE_TYPE;
			}
			function isSuspenseList(object) {
				return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
			}
			exports.ContextConsumer = ContextConsumer;
			exports.ContextProvider = ContextProvider;
			exports.Element = Element;
			exports.ForwardRef = ForwardRef;
			exports.Fragment = Fragment;
			exports.Lazy = Lazy;
			exports.Memo = Memo;
			exports.Portal = Portal;
			exports.Profiler = Profiler;
			exports.StrictMode = StrictMode;
			exports.Suspense = Suspense;
			exports.SuspenseList = SuspenseList;
			exports.isAsyncMode = isAsyncMode;
			exports.isConcurrentMode = isConcurrentMode;
			exports.isContextConsumer = isContextConsumer;
			exports.isContextProvider = isContextProvider;
			exports.isElement = isElement;
			exports.isForwardRef = isForwardRef;
			exports.isFragment = isFragment;
			exports.isLazy = isLazy;
			exports.isMemo = isMemo;
			exports.isPortal = isPortal;
			exports.isProfiler = isProfiler;
			exports.isStrictMode = isStrictMode;
			exports.isSuspense = isSuspense;
			exports.isSuspenseList = isSuspenseList;
			exports.isValidElementType = isValidElementType;
			exports.typeOf = typeOf;
		})();
	}));

//#endregion
//#region node_modules/react-is/index.js
	var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_is_development();
	}));

//#endregion
//#region node_modules/react-redux/es/utils/warning.js
var import_hoist_non_react_statics_cjs = /* @__PURE__ */ __toESM(require_hoist_non_react_statics_cjs());
var import_react_is = require_react_is();
/**
	* Prints a warning in the console if it exists.
	*
	* @param {String} message The warning message.
	* @returns {void}
	*/
	function warning(message) {
		if (typeof console !== "undefined" && typeof console.error === "function") console.error(message);
		try {
			throw new Error(message);
		} catch (e) {}
	}

//#endregion
//#region node_modules/react-redux/es/connect/verifySubselectors.js
	function verify(selector, methodName) {
		if (!selector) throw new Error(`Unexpected value for ${methodName} in connect.`);
		else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
			if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) warning(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
		}
	}
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
		verify(mapStateToProps, "mapStateToProps");
		verify(mapDispatchToProps, "mapDispatchToProps");
		verify(mergeProps, "mergeProps");
	}

//#endregion
//#region node_modules/react-redux/es/connect/selectorFactory.js
	var _excluded$1 = [
		"initMapStateToProps",
		"initMapDispatchToProps",
		"initMergeProps"
	];
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, { areStatesEqual, areOwnPropsEqual, areStatePropsEqual }) {
		let hasRunAtLeastOnce = false;
		let state;
		let ownProps;
		let stateProps;
		let dispatchProps;
		let mergedProps;
		function handleFirstCall(firstState, firstOwnProps) {
			state = firstState;
			ownProps = firstOwnProps;
			stateProps = mapStateToProps(state, ownProps);
			dispatchProps = mapDispatchToProps(dispatch, ownProps);
			mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
			hasRunAtLeastOnce = true;
			return mergedProps;
		}
		function handleNewPropsAndNewState() {
			stateProps = mapStateToProps(state, ownProps);
			if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
			mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
			return mergedProps;
		}
		function handleNewProps() {
			if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
			if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
			mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
			return mergedProps;
		}
		function handleNewState() {
			const nextStateProps = mapStateToProps(state, ownProps);
			const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
			stateProps = nextStateProps;
			if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
			return mergedProps;
		}
		function handleSubsequentCalls(nextState, nextOwnProps) {
			const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
			const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
			state = nextState;
			ownProps = nextOwnProps;
			if (propsChanged && stateChanged) return handleNewPropsAndNewState();
			if (propsChanged) return handleNewProps();
			if (stateChanged) return handleNewState();
			return mergedProps;
		}
		return function pureFinalPropsSelector(nextState, nextOwnProps) {
			return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
		};
	}
	function finalPropsSelectorFactory(dispatch, _ref) {
		let { initMapStateToProps, initMapDispatchToProps, initMergeProps } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded$1);
		const mapStateToProps = initMapStateToProps(dispatch, options);
		const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
		const mergeProps = initMergeProps(dispatch, options);
		verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
		return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

//#endregion
//#region node_modules/react-redux/es/utils/bindActionCreators.js
	function bindActionCreators(actionCreators, dispatch) {
		const boundActionCreators = {};
		for (const key in actionCreators) {
			const actionCreator = actionCreators[key];
			if (typeof actionCreator === "function") boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
		}
		return boundActionCreators;
	}

//#endregion
//#region node_modules/react-redux/es/utils/isPlainObject.js
/**
	* @param {any} obj The object to inspect.
	* @returns {boolean} True if the argument appears to be a plain object.
	*/
	function isPlainObject(obj) {
		if (typeof obj !== "object" || obj === null) return false;
		let proto = Object.getPrototypeOf(obj);
		if (proto === null) return true;
		let baseProto = proto;
		while (Object.getPrototypeOf(baseProto) !== null) baseProto = Object.getPrototypeOf(baseProto);
		return proto === baseProto;
	}

//#endregion
//#region node_modules/react-redux/es/utils/verifyPlainObject.js
	function verifyPlainObject(value, displayName, methodName) {
		if (!isPlainObject(value)) warning(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
	}

//#endregion
//#region node_modules/react-redux/es/connect/wrapMapToProps.js
	function wrapMapToPropsConstant(getConstant) {
		return function initConstantSelector(dispatch) {
			const constant = getConstant(dispatch);
			function constantSelector() {
				return constant;
			}
			constantSelector.dependsOnOwnProps = false;
			return constantSelector;
		};
	}
	function getDependsOnOwnProps(mapToProps) {
		return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}
	function wrapMapToPropsFunc(mapToProps, methodName) {
		return function initProxySelector(dispatch, { displayName }) {
			const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
				return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
			};
			proxy.dependsOnOwnProps = true;
			proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
				proxy.mapToProps = mapToProps;
				proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
				let props = proxy(stateOrDispatch, ownProps);
				if (typeof props === "function") {
					proxy.mapToProps = props;
					proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
					props = proxy(stateOrDispatch, ownProps);
				}
				verifyPlainObject(props, displayName, methodName);
				return props;
			};
			return proxy;
		};
	}

//#endregion
//#region node_modules/react-redux/es/connect/invalidArgFactory.js
	function createInvalidArgFactory(arg, name) {
		return (dispatch, options) => {
			throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
		};
	}

//#endregion
//#region node_modules/react-redux/es/connect/mapDispatchToProps.js
	function mapDispatchToPropsFactory(mapDispatchToProps) {
		return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant((dispatch) => bindActionCreators(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({ dispatch })) : typeof mapDispatchToProps === "function" ? wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps") : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
	}

//#endregion
//#region node_modules/react-redux/es/connect/mapStateToProps.js
	function mapStateToPropsFactory(mapStateToProps) {
		return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps, "mapStateToProps") : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
	}

//#endregion
//#region node_modules/react-redux/es/connect/mergeProps.js
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
		return _extends({}, ownProps, stateProps, dispatchProps);
	}
	function wrapMergePropsFunc(mergeProps) {
		return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
			let hasRunOnce = false;
			let mergedProps;
			return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
				const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
				if (hasRunOnce) {
					if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
				} else {
					hasRunOnce = true;
					mergedProps = nextMergedProps;
					verifyPlainObject(mergedProps, displayName, "mergeProps");
				}
				return mergedProps;
			};
		};
	}
	function mergePropsFactory(mergeProps) {
		return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
	}

//#endregion
//#region node_modules/react-redux/es/utils/Subscription.js
	function createListenerCollection() {
		const batch = getBatch();
		let first = null;
		let last = null;
		return {
			clear() {
				first = null;
				last = null;
			},
			notify() {
				batch(() => {
					let listener = first;
					while (listener) {
						listener.callback();
						listener = listener.next;
					}
				});
			},
			get() {
				let listeners = [];
				let listener = first;
				while (listener) {
					listeners.push(listener);
					listener = listener.next;
				}
				return listeners;
			},
			subscribe(callback) {
				let isSubscribed = true;
				let listener = last = {
					callback,
					next: null,
					prev: last
				};
				if (listener.prev) listener.prev.next = listener;
				else first = listener;
				return function unsubscribe() {
					if (!isSubscribed || first === null) return;
					isSubscribed = false;
					if (listener.next) listener.next.prev = listener.prev;
					else last = listener.prev;
					if (listener.prev) listener.prev.next = listener.next;
					else first = listener.next;
				};
			}
		};
	}
	var nullListeners = {
		notify() {},
		get: () => []
	};
	function createSubscription(store, parentSub) {
		let unsubscribe;
		let listeners = nullListeners;
		let subscriptionsAmount = 0;
		let selfSubscribed = false;
		function addNestedSub(listener) {
			trySubscribe();
			const cleanupListener = listeners.subscribe(listener);
			let removed = false;
			return () => {
				if (!removed) {
					removed = true;
					cleanupListener();
					tryUnsubscribe();
				}
			};
		}
		function notifyNestedSubs() {
			listeners.notify();
		}
		function handleChangeWrapper() {
			if (subscription.onStateChange) subscription.onStateChange();
		}
		function isSubscribed() {
			return selfSubscribed;
		}
		function trySubscribe() {
			subscriptionsAmount++;
			if (!unsubscribe) {
				unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
				listeners = createListenerCollection();
			}
		}
		function tryUnsubscribe() {
			subscriptionsAmount--;
			if (unsubscribe && subscriptionsAmount === 0) {
				unsubscribe();
				unsubscribe = void 0;
				listeners.clear();
				listeners = nullListeners;
			}
		}
		function trySubscribeSelf() {
			if (!selfSubscribed) {
				selfSubscribed = true;
				trySubscribe();
			}
		}
		function tryUnsubscribeSelf() {
			if (selfSubscribed) {
				selfSubscribed = false;
				tryUnsubscribe();
			}
		}
		const subscription = {
			addNestedSub,
			notifyNestedSubs,
			handleChangeWrapper,
			isSubscribed,
			trySubscribe: trySubscribeSelf,
			tryUnsubscribe: tryUnsubscribeSelf,
			getListeners: () => listeners
		};
		return subscription;
	}

//#endregion
//#region node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
	var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
	var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

//#endregion
//#region node_modules/react-redux/es/utils/shallowEqual.js
	function is(x, y) {
		if (x === y) return x !== 0 || y !== 0 || 1 / x === 1 / y;
		else return x !== x && y !== y;
	}
	function shallowEqual(objA, objB) {
		if (is(objA, objB)) return true;
		if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
		const keysA = Object.keys(objA);
		const keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return false;
		for (let i = 0; i < keysA.length; i++) if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) return false;
		return true;
	}

//#endregion
//#region node_modules/react-redux/es/components/connect.js
	var _excluded = ["reactReduxForwardedRef"];
	var useSyncExternalStore$1 = notInitialized;
	var initializeConnect = (fn) => {
		useSyncExternalStore$1 = fn;
	};
	var NO_SUBSCRIPTION_ARRAY = [null, null];
	var stringifyComponent = (Comp) => {
		try {
			return JSON.stringify(Comp);
		} catch (err) {
			return String(Comp);
		}
	};
	function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
		useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
	}
	function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
		lastWrapperProps.current = wrapperProps;
		renderIsScheduled.current = false;
		if (childPropsFromStoreUpdate.current) {
			childPropsFromStoreUpdate.current = null;
			notifyNestedSubs();
		}
	}
	function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
		if (!shouldHandleStateChanges) return () => {};
		let didUnsubscribe = false;
		let lastThrownError = null;
		const checkForUpdates = () => {
			if (didUnsubscribe || !isMounted.current) return;
			const latestStoreState = store.getState();
			let newChildProps;
			let error;
			try {
				newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
			} catch (e) {
				error = e;
				lastThrownError = e;
			}
			if (!error) lastThrownError = null;
			if (newChildProps === lastChildProps.current) {
				if (!renderIsScheduled.current) notifyNestedSubs();
			} else {
				lastChildProps.current = newChildProps;
				childPropsFromStoreUpdate.current = newChildProps;
				renderIsScheduled.current = true;
				additionalSubscribeListener();
			}
		};
		subscription.onStateChange = checkForUpdates;
		subscription.trySubscribe();
		checkForUpdates();
		const unsubscribeWrapper = () => {
			didUnsubscribe = true;
			subscription.tryUnsubscribe();
			subscription.onStateChange = null;
			if (lastThrownError) throw lastThrownError;
		};
		return unsubscribeWrapper;
	}
	function strictEqual(a, b) {
		return a === b;
	}
	/**
	* Infers the type of props that a connector will inject into a component.
	*/
	var hasWarnedAboutDeprecatedPureOption = false;
	/**
	* Connects a React component to a Redux store.
	*
	* - Without arguments, just wraps the component, without changing the behavior / props
	*
	* - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
	* is to override ownProps (as stated in the docs), so what remains is everything that's
	* not a state or dispatch prop
	*
	* - When 3rd param is passed, we don't know if ownProps propagate and whether they
	* should be valid component props, because it depends on mergeProps implementation.
	* As such, it is the user's responsibility to extend ownProps interface from state or
	* dispatch props or both when applicable
	*
	* @param mapStateToProps A function that extracts values from state
	* @param mapDispatchToProps Setup for dispatching actions
	* @param mergeProps Optional callback to merge state and dispatch props together
	* @param options Options for configuring the connection
	*
	*/
	function connect(mapStateToProps, mapDispatchToProps, mergeProps, { pure, areStatesEqual = strictEqual, areOwnPropsEqual = shallowEqual, areStatePropsEqual = shallowEqual, areMergedPropsEqual = shallowEqual, forwardRef = false, context = ReactReduxContext } = {}) {
		if (pure !== void 0 && !hasWarnedAboutDeprecatedPureOption) {
			hasWarnedAboutDeprecatedPureOption = true;
			warning("The `pure` option has been removed. `connect` is now always a \"pure/memoized\" component");
		}
		const Context = context;
		const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
		const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
		const initMergeProps = mergePropsFactory(mergeProps);
		const shouldHandleStateChanges = Boolean(mapStateToProps);
		const wrapWithConnect = (WrappedComponent) => {
			if (!(0, import_react_is.isValidElementType)(WrappedComponent)) throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
			const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
			const displayName = `Connect(${wrappedComponentName})`;
			const selectorFactoryOptions = {
				shouldHandleStateChanges,
				displayName,
				wrappedComponentName,
				WrappedComponent,
				initMapStateToProps,
				initMapDispatchToProps,
				initMergeProps,
				areStatesEqual,
				areStatePropsEqual,
				areOwnPropsEqual,
				areMergedPropsEqual
			};
			function ConnectFunction(props) {
				const [propsContext, reactReduxForwardedRef, wrapperProps] = react.useMemo(() => {
					const { reactReduxForwardedRef } = props, wrapperProps = _objectWithoutPropertiesLoose(props, _excluded);
					return [
						props.context,
						reactReduxForwardedRef,
						wrapperProps
					];
				}, [props]);
				const ContextToUse = react.useMemo(() => {
					return propsContext && propsContext.Consumer && (0, import_react_is.isContextConsumer)(/*#__PURE__*/ react.createElement(propsContext.Consumer, null)) ? propsContext : Context;
				}, [propsContext, Context]);
				const contextValue = react.useContext(ContextToUse);
				const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
				const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
				if (!didStoreComeFromProps && !didStoreComeFromContext) throw new Error(`Could not find "store" in the context of "${displayName}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${displayName} in connect options.`);
				const store = didStoreComeFromProps ? props.store : contextValue.store;
				const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
				const childPropsSelector = react.useMemo(() => {
					return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
				}, [store]);
				const [subscription, notifyNestedSubs] = react.useMemo(() => {
					if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
					const subscription = createSubscription(store, didStoreComeFromProps ? void 0 : contextValue.subscription);
					return [subscription, subscription.notifyNestedSubs.bind(subscription)];
				}, [
					store,
					didStoreComeFromProps,
					contextValue
				]);
				const overriddenContextValue = react.useMemo(() => {
					if (didStoreComeFromProps) return contextValue;
					return _extends({}, contextValue, { subscription });
				}, [
					didStoreComeFromProps,
					contextValue,
					subscription
				]);
				const lastChildProps = react.useRef();
				const lastWrapperProps = react.useRef(wrapperProps);
				const childPropsFromStoreUpdate = react.useRef();
				const renderIsScheduled = react.useRef(false);
				react.useRef(false);
				const isMounted = react.useRef(false);
				const latestSubscriptionCallbackError = react.useRef();
				useIsomorphicLayoutEffect(() => {
					isMounted.current = true;
					return () => {
						isMounted.current = false;
					};
				}, []);
				const actualChildPropsSelector = react.useMemo(() => {
					const selector = () => {
						if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) return childPropsFromStoreUpdate.current;
						return childPropsSelector(store.getState(), wrapperProps);
					};
					return selector;
				}, [store, wrapperProps]);
				const subscribeForReact = react.useMemo(() => {
					const subscribe = (reactListener) => {
						if (!subscription) return () => {};
						return subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
					};
					return subscribe;
				}, [subscription]);
				useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
					lastWrapperProps,
					lastChildProps,
					renderIsScheduled,
					wrapperProps,
					childPropsFromStoreUpdate,
					notifyNestedSubs
				]);
				let actualChildProps;
				try {
					actualChildProps = useSyncExternalStore$1(subscribeForReact, actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
				} catch (err) {
					if (latestSubscriptionCallbackError.current) err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
					throw err;
				}
				useIsomorphicLayoutEffect(() => {
					latestSubscriptionCallbackError.current = void 0;
					childPropsFromStoreUpdate.current = void 0;
					lastChildProps.current = actualChildProps;
				});
				const renderedWrappedComponent = react.useMemo(() => {
					return /*#__PURE__*/ react.createElement(WrappedComponent, _extends({}, actualChildProps, { ref: reactReduxForwardedRef }));
				}, [
					reactReduxForwardedRef,
					WrappedComponent,
					actualChildProps
				]);
				return react.useMemo(() => {
					if (shouldHandleStateChanges) return /*#__PURE__*/ react.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
					return renderedWrappedComponent;
				}, [
					ContextToUse,
					renderedWrappedComponent,
					overriddenContextValue
				]);
			}
			const Connect = react.memo(ConnectFunction);
			Connect.WrappedComponent = WrappedComponent;
			Connect.displayName = ConnectFunction.displayName = displayName;
			if (forwardRef) {
				const forwarded = react.forwardRef(function forwardConnectRef(props, ref) {
					return /*#__PURE__*/ react.createElement(Connect, _extends({}, props, { reactReduxForwardedRef: ref }));
				});
				forwarded.displayName = displayName;
				forwarded.WrappedComponent = WrappedComponent;
				return (0, import_hoist_non_react_statics_cjs.default)(forwarded, WrappedComponent);
			}
			return (0, import_hoist_non_react_statics_cjs.default)(Connect, WrappedComponent);
		};
		return wrapWithConnect;
	}

//#endregion
//#region node_modules/react-redux/es/components/Provider.js
	function Provider({ store, context, children, serverState, stabilityCheck = "once", noopCheck = "once" }) {
		const contextValue = react.useMemo(() => {
			return {
				store,
				subscription: createSubscription(store),
				getServerState: serverState ? () => serverState : void 0,
				stabilityCheck,
				noopCheck
			};
		}, [
			store,
			serverState,
			stabilityCheck,
			noopCheck
		]);
		const previousState = react.useMemo(() => store.getState(), [store]);
		useIsomorphicLayoutEffect(() => {
			const { subscription } = contextValue;
			subscription.onStateChange = subscription.notifyNestedSubs;
			subscription.trySubscribe();
			if (previousState !== store.getState()) subscription.notifyNestedSubs();
			return () => {
				subscription.tryUnsubscribe();
				subscription.onStateChange = void 0;
			};
		}, [contextValue, previousState]);
		const Context = context || ReactReduxContext;
		return /*#__PURE__*/ react.createElement(Context.Provider, { value: contextValue }, children);
	}

//#endregion
//#region node_modules/react-redux/es/hooks/useStore.js
/**
	* Hook factory, which creates a `useStore` hook bound to a given context.
	*
	* @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	* @returns {Function} A `useStore` hook bound to the specified context.
	*/
	function createStoreHook(context = ReactReduxContext) {
		const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
		return function useStore() {
			const { store } = useReduxContext$1();
			return store;
		};
	}
	/**
	* A hook to access the redux store.
	*
	* @returns {any} the redux store
	*
	* @example
	*
	* import React from 'react'
	* import { useStore } from 'react-redux'
	*
	* export const ExampleComponent = () => {
	*   const store = useStore()
	*   return <div>{store.getState()}</div>
	* }
	*/
	var useStore = /*#__PURE__*/ createStoreHook();

//#endregion
//#region node_modules/react-redux/es/hooks/useDispatch.js
/**
	* Hook factory, which creates a `useDispatch` hook bound to a given context.
	*
	* @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	* @returns {Function} A `useDispatch` hook bound to the specified context.
	*/
	function createDispatchHook(context = ReactReduxContext) {
		const useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
		return function useDispatch() {
			return useStore$1().dispatch;
		};
	}
	/**
	* A hook to access the redux `dispatch` function.
	*
	* @returns {any|function} redux store's `dispatch` function
	*
	* @example
	*
	* import React, { useCallback } from 'react'
	* import { useDispatch } from 'react-redux'
	*
	* export const CounterComponent = ({ value }) => {
	*   const dispatch = useDispatch()
	*   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
	*   return (
	*     <div>
	*       <span>{value}</span>
	*       <button onClick={increaseCounter}>Increase counter</button>
	*     </div>
	*   )
	* }
	*/
	var useDispatch = /*#__PURE__*/ createDispatchHook();

//#endregion
//#region node_modules/react-redux/es/index.js
	var es_exports = /* @__PURE__ */ __exportAll({
		Provider: () => Provider,
		ReactReduxContext: () => ReactReduxContext,
		batch: () => react_dom.unstable_batchedUpdates,
		connect: () => connect,
		createDispatchHook: () => createDispatchHook,
		createSelectorHook: () => createSelectorHook,
		createStoreHook: () => createStoreHook,
		shallowEqual: () => shallowEqual,
		useDispatch: () => useDispatch,
		useSelector: () => useSelector,
		useStore: () => useStore
	});
	initializeUseSelector(import_with_selector.useSyncExternalStoreWithSelector);
	initializeConnect(import_shim.useSyncExternalStore);
	setBatch(react_dom.unstable_batchedUpdates);

//#endregion
//#region core/common/assets/js/vendors-redux.js
	window.elementorVendors = window.elementorVendors || {};
	window.elementorVendors.reduxToolkit = redux_toolkit_esm_exports;
	window.elementorVendors.reactRedux = es_exports;

//#endregion
})(React, ReactDOM);
//# sourceMappingURL=vendors-redux.js.map