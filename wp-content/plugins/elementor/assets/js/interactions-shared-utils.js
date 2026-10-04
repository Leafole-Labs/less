'use strict';

(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

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
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
	function _arrayWithHoles(r) {
		if (Array.isArray(r)) return r;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
	function _iterableToArrayLimit(r, l) {
		var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (null != t) {
			var e;
			var n;
			var i;
			var u;
			var a = [];
			var f = !0;
			var o = !1;
			try {
				if (i = (t = t.call(r)).next, 0 === l) {
					if (Object(t) !== t) return;
					f = !1;
				} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
			} catch (r) {
				o = !0, n = r;
			} finally {
				try {
					if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
				} finally {
					if (o) throw n;
				}
			}
			return a;
		}
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray$1(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	__name(_arrayLikeToArray$1, "_arrayLikeToArray");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
	function _unsupportedIterableToArray$1(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
		}
	}
	__name(_unsupportedIterableToArray$1, "_unsupportedIterableToArray");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
	}

//#endregion
//#region modules/interactions/assets/js/interactions-breakpoints.js
	var breakpoints = {
		list: {},
		active: {},
		onChange: function onChange() {}
	};
	function getActiveBreakpoint() {
		return breakpoints.active;
	}

//#endregion
//#region modules/interactions/assets/js/interactions-shared-utils.js
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
	function _objectSpread(e) {
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
	function _createForOfIteratorHelper(r, e) {
		var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (!t) {
			if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
				t && (r = t);
				var _n = 0;
				var F = function F() {};
				return {
					s: F,
					n: function n() {
						return _n >= r.length ? { done: !0 } : {
							done: !1,
							value: r[_n++]
						};
					},
					e: function e(r) {
						throw r;
					},
					f: F
				};
			}
			throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		var o;
		var a = !0;
		var u = !1;
		return {
			s: function s() {
				t = t.call(r);
			},
			n: function n() {
				var r = t.next();
				return a = r.done, r;
			},
			e: function e(r) {
				u = !0, o = r;
			},
			f: function f() {
				try {
					a || null == t.return || t.return();
				} finally {
					if (u) throw o;
				}
			}
		};
	}
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	function config() {
		var _window$ElementorInte;
		var _window$ElementorInte2;
		return (_window$ElementorInte = (_window$ElementorInte2 = window.ElementorInteractionsConfig) === null || _window$ElementorInte2 === void 0 ? void 0 : _window$ElementorInte2.constants) !== null && _window$ElementorInte !== void 0 ? _window$ElementorInte : {};
	}
	function skipInteraction(interaction) {
		var _interaction$breakpoi;
		var breakpoint = getActiveBreakpoint();
		return interaction === null || interaction === void 0 || (_interaction$breakpoi = interaction.breakpoints) === null || _interaction$breakpoi === void 0 || (_interaction$breakpoi = _interaction$breakpoi.excluded) === null || _interaction$breakpoi === void 0 ? void 0 : _interaction$breakpoi.includes(breakpoint);
	}
	function extractInteractionId(interaction) {
		if ("interaction-item" === (interaction === null || interaction === void 0 ? void 0 : interaction.$$type) && interaction !== null && interaction !== void 0 && interaction.value) {
			var _interaction$value$in;
			return ((_interaction$value$in = interaction.value.interaction_id) === null || _interaction$value$in === void 0 ? void 0 : _interaction$value$in.value) || null;
		}
		return null;
	}
	function motionFunc(name) {
		var _window;
		var _window2;
		if ("function" !== typeof ((_window = window) === null || _window === void 0 || (_window = _window.Motion) === null || _window === void 0 ? void 0 : _window[name])) return;
		return (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.Motion) === null || _window2 === void 0 ? void 0 : _window2[name];
	}
	function getAnimateFunction() {
		return motionFunc("animate");
	}
	function getInViewFunction() {
		return motionFunc("inView");
	}
	function waitForAnimateFunction(callback) {
		var maxAttempts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
		if (getAnimateFunction()) {
			callback();
			return;
		}
		if (maxAttempts > 0) setTimeout(function() {
			return waitForAnimateFunction(callback, maxAttempts - 1);
		}, 100);
	}
	function parseInteractionsData(data) {
		if ("string" === typeof data) try {
			return JSON.parse(data);
		} catch (_unused) {
			return null;
		}
		return data;
	}
	function unwrapInteractionValue(propValue) {
		var fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
		if (propValue && "object" === _typeof(propValue) && "$$type" in propValue) return propValue.value;
		return propValue !== null && propValue !== void 0 ? propValue : fallback;
	}
	function timingValueToMs(timingValue, fallbackMs) {
		if (null === timingValue || void 0 === timingValue) return fallbackMs;
		var unwrapped = unwrapInteractionValue(timingValue);
		if ("number" === typeof unwrapped) return unwrapped;
		var sizeObj = unwrapInteractionValue(unwrapped);
		var size = sizeObj === null || sizeObj === void 0 ? void 0 : sizeObj.size;
		var unit = (sizeObj === null || sizeObj === void 0 ? void 0 : sizeObj.unit) || "ms";
		if ("number" !== typeof size) return fallbackMs;
		if ("s" === unit) return size * 1e3;
		return size;
	}
	function resetElementStyles(element) {
		if (!element) return;
		element.style.transition = "";
		element.style.transform = "";
		element.style.opacity = "";
	}
	var TRANSFORM_EPSILON = .001;
	var radiansToDegrees = function radiansToDegrees(radians) {
		return radians * (180 / Math.PI);
	};
	var isNear = function isNear(value, expected) {
		return Math.abs(value - expected) <= TRANSFORM_EPSILON;
	};
	var isNearZero = function isNearZero(value) {
		return isNear(value, 0);
	};
	var isNearOne = function isNearOne(value) {
		return isNear(value, 1);
	};
	function parseMatrixValues(transformValue) {
		var match = transformValue.match(/^matrix(3d)?\((.+)\)$/);
		if (!match) return null;
		return match[2].split(",").map(function(token) {
			return Number.parseFloat(token.trim());
		}).filter(function(value) {
			return Number.isFinite(value);
		});
	}
	function createMatrixFromTransform(transformValue) {
		if (!transformValue || "none" === transformValue) return null;
		var _iterator = _createForOfIteratorHelper([window.DOMMatrixReadOnly, window.DOMMatrix].filter(function(Factory) {
			return "function" === typeof Factory;
		}));
		var _step;
		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var MatrixFactory = _step.value;
				try {
					var _ref;
					var _matrix$a;
					var _ref2;
					var _matrix$b;
					var _ref3;
					var _matrix$c;
					var _ref4;
					var _matrix$d;
					var _ref5;
					var _matrix$e;
					var _ref6;
					var _matrix$f;
					var matrix = new MatrixFactory(transformValue);
					var compactMatrix = {
						matrixXfromX: (_ref = (_matrix$a = matrix.a) !== null && _matrix$a !== void 0 ? _matrix$a : matrix.m11) !== null && _ref !== void 0 ? _ref : 1,
						matrixYfromX: (_ref2 = (_matrix$b = matrix.b) !== null && _matrix$b !== void 0 ? _matrix$b : matrix.m12) !== null && _ref2 !== void 0 ? _ref2 : 0,
						matrixXfromY: (_ref3 = (_matrix$c = matrix.c) !== null && _matrix$c !== void 0 ? _matrix$c : matrix.m21) !== null && _ref3 !== void 0 ? _ref3 : 0,
						matrixYfromY: (_ref4 = (_matrix$d = matrix.d) !== null && _matrix$d !== void 0 ? _matrix$d : matrix.m22) !== null && _ref4 !== void 0 ? _ref4 : 1,
						matrixTranslateX: (_ref5 = (_matrix$e = matrix.e) !== null && _matrix$e !== void 0 ? _matrix$e : matrix.m41) !== null && _ref5 !== void 0 ? _ref5 : 0,
						matrixTranslateY: (_ref6 = (_matrix$f = matrix.f) !== null && _matrix$f !== void 0 ? _matrix$f : matrix.m42) !== null && _ref6 !== void 0 ? _ref6 : 0
					};
					if (Object.values(compactMatrix).every(Number.isFinite)) return compactMatrix;
				} catch (_unused2) {}
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
		var parsedValues = parseMatrixValues(transformValue);
		if (!parsedValues) return null;
		if (6 === parsedValues.length) {
			var _parsedValues = _slicedToArray(parsedValues, 6);
			return {
				matrixXfromX: _parsedValues[0],
				matrixYfromX: _parsedValues[1],
				matrixXfromY: _parsedValues[2],
				matrixYfromY: _parsedValues[3],
				matrixTranslateX: _parsedValues[4],
				matrixTranslateY: _parsedValues[5]
			};
		}
		if (16 === parsedValues.length) {
			var _parsedValues2 = _slicedToArray(parsedValues, 14);
			return {
				matrixXfromX: _parsedValues2[0],
				matrixYfromX: _parsedValues2[1],
				matrixXfromY: _parsedValues2[4],
				matrixYfromY: _parsedValues2[5],
				matrixTranslateX: _parsedValues2[12],
				matrixTranslateY: _parsedValues2[13]
			};
		}
		return null;
	}
	function getTransformBaselineFromComputedStyle(element) {
		if (!element) return null;
		var computedStyle = window.getComputedStyle(element);
		var matrix = createMatrixFromTransform((computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.transform) || "");
		if (!matrix) return null;
		var matrixXfromX = matrix.matrixXfromX;
		var matrixYfromX = matrix.matrixYfromX;
		var matrixXfromY = matrix.matrixXfromY;
		var matrixYfromY = matrix.matrixYfromY;
		var matrixTranslateX = matrix.matrixTranslateX;
		var matrixTranslateY = matrix.matrixTranslateY;
		var scaleX = Math.hypot(matrixXfromX, matrixYfromX);
		var determinant = matrixXfromX * matrixYfromY - matrixYfromX * matrixXfromY;
		var scaleY = scaleX ? determinant / scaleX : Math.hypot(matrixXfromY, matrixYfromY);
		var rotate = radiansToDegrees(Math.atan2(matrixYfromX, matrixXfromX));
		var shear = scaleX ? (matrixXfromX * matrixXfromY + matrixYfromX * matrixYfromY) / (scaleX * scaleX) : 0;
		var skewX = radiansToDegrees(Math.atan(shear));
		return {
			x: matrixTranslateX,
			y: matrixTranslateY,
			scaleX: Number.isFinite(scaleX) ? scaleX : 1,
			scaleY: Number.isFinite(scaleY) ? scaleY : 1,
			rotate: Number.isFinite(rotate) ? rotate : 0,
			skewX: Number.isFinite(skewX) ? skewX : 0
		};
	}
	function preserveTransformKeyframes(keyframes, baseline) {
		if (!baseline) return keyframes;
		var mergedKeyframes = _objectSpread({}, keyframes);
		var hasScaleShorthand = mergedKeyframes.scale !== void 0;
		var canSetScaleX = mergedKeyframes.scaleX === void 0 && !isNearOne(baseline.scaleX);
		var canSetScaleY = mergedKeyframes.scaleY === void 0 && !isNearOne(baseline.scaleY);
		if (mergedKeyframes.x === void 0 && !isNearZero(baseline.x)) mergedKeyframes.x = [baseline.x, baseline.x];
		if (mergedKeyframes.y === void 0 && !isNearZero(baseline.y)) mergedKeyframes.y = [baseline.y, baseline.y];
		if (!hasScaleShorthand) if (canSetScaleX && canSetScaleY && isNear(baseline.scaleX, baseline.scaleY)) mergedKeyframes.scale = [baseline.scaleX, baseline.scaleX];
		else {
			if (canSetScaleX) mergedKeyframes.scaleX = [baseline.scaleX, baseline.scaleX];
			if (canSetScaleY) mergedKeyframes.scaleY = [baseline.scaleY, baseline.scaleY];
		}
		if (mergedKeyframes.rotate === void 0 && mergedKeyframes.rotateZ === void 0 && !isNearZero(baseline.rotate)) mergedKeyframes.rotate = [baseline.rotate, baseline.rotate];
		if (mergedKeyframes.skew === void 0 && mergedKeyframes.skewX === void 0 && !isNearZero(baseline.skewX)) mergedKeyframes.skewX = [baseline.skewX, baseline.skewX];
		return mergedKeyframes;
	}
	window.elementorModules = window.elementorModules || {};
	window.elementorModules.interactions = {
		config,
		skipInteraction,
		extractInteractionId,
		getAnimateFunction,
		getInViewFunction,
		waitForAnimateFunction,
		parseInteractionsData,
		unwrapInteractionValue,
		timingValueToMs,
		resetElementStyles,
		getTransformBaselineFromComputedStyle,
		preserveTransformKeyframes
	};

//#endregion
})();
//# sourceMappingURL=interactions-shared-utils.js.map