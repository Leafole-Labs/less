(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

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
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}

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
//#region node_modules/@babel/runtime/helpers/esm/createClass.js
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}

//#endregion
//#region modules/dev-tools/assets/js/deprecation.js
/**
	* @typedef {Object} Version
	* @property {number} major1 The first number
	* @property {number} major2 The second number
	* @property {number} minor  The third number
	* @property {string} build  The fourth number
	*/
	/**
	* @param {string} name
	* @param {string} version
	* @param {string} replacement
	*/
	var softDeprecated = function softDeprecated(name, version, replacement) {
		if (elementorDevToolsConfig.isDebug) deprecatedMessage("soft", name, version, replacement);
	};
	var hardDeprecated = function hardDeprecated(name, version, replacement) {
		deprecatedMessage("hard", name, version, replacement);
	};
	var deprecatedMessage = function deprecatedMessage(type, name, version, replacement) {
		var message = "`".concat(name, "` is ").concat(type, " deprecated since ").concat(version);
		if (replacement) message += " - Use `".concat(replacement, "` instead");
		elementorDevTools.consoleWarn(message);
	};
	var Deprecation = /*#__PURE__*/ function() {
		function Deprecation() {
			_classCallCheck(this, Deprecation);
		}
		return _createClass(Deprecation, [
			{
				key: "deprecated",
				value: function deprecated(name, version, replacement) {
					if (this.isHardDeprecated(version)) hardDeprecated(name, version, replacement);
					else softDeprecated(name, version, replacement);
				}
			},
			{
				key: "parseVersion",
				value: function parseVersion(version) {
					var versionParts = version.split(".");
					if (versionParts.length < 3 || versionParts.length > 4) throw new RangeError("Invalid Semantic Version string provided");
					var _versionParts = _slicedToArray(versionParts, 4);
					var major1 = _versionParts[0];
					var major2 = _versionParts[1];
					var minor = _versionParts[2];
					var _versionParts$ = _versionParts[3];
					return {
						major1: parseInt(major1),
						major2: parseInt(major2),
						minor: parseInt(minor),
						build: _versionParts$ === void 0 ? "" : _versionParts$
					};
				}
			},
			{
				key: "getTotalMajor",
				value: function getTotalMajor(versionObj) {
					var total = parseInt("".concat(versionObj.major1).concat(versionObj.major2, "0"));
					total = Number((total / 10).toFixed(0));
					if (versionObj.major2 > 9) total = versionObj.major2 - 9;
					return total;
				}
			},
			{
				key: "compareVersion",
				value: function compareVersion(version1, version2) {
					var _this = this;
					return [this.parseVersion(version1), this.parseVersion(version2)].map(function(versionObj) {
						return _this.getTotalMajor(versionObj);
					}).reduce(function(acc, major) {
						return acc - major;
					});
				}
			},
			{
				key: "isSoftDeprecated",
				value: function isSoftDeprecated(version) {
					return this.compareVersion(version, elementorDevToolsConfig.deprecation.current_version) <= elementorDevToolsConfig.deprecation.soft_version_count;
				}
			},
			{
				key: "isHardDeprecated",
				value: function isHardDeprecated(version) {
					var total = this.compareVersion(version, elementorDevToolsConfig.deprecation.current_version);
					return total < 0 || total >= elementorDevToolsConfig.deprecation.hard_version_count;
				}
			}
		]);
	}();

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
	function _arrayWithoutHoles(r) {
		if (Array.isArray(r)) return _arrayLikeToArray(r);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArray.js
	function _iterableToArray(r) {
		if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
	function _nonIterableSpread() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
	function _toConsumableArray(r) {
		return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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
//#region modules/dev-tools/assets/js/module.js
/**
	* @typedef {import('./deprecation').default} Deprecation
	*/
	var Module = /*#__PURE__*/ function() {
		function Module(deprecation) {
			_classCallCheck(this, Module);
			/**
			* @type {Deprecation}
			*/
			_defineProperty(this, "deprecation", void 0);
			this.deprecation = deprecation;
		}
		return _createClass(Module, [{
			key: "notifyBackendDeprecations",
			value: function notifyBackendDeprecations() {
				var _this = this;
				var notices = elementorDevToolsConfig.deprecation.soft_notices;
				Object.entries(notices).forEach(function(_ref) {
					var _this$deprecation;
					var _ref2 = _slicedToArray(_ref, 2);
					var key = _ref2[0];
					var notice = _ref2[1];
					(_this$deprecation = _this.deprecation).deprecated.apply(_this$deprecation, [key].concat(_toConsumableArray(notice)));
				});
			}
		}, {
			key: "consoleWarn",
			value: function consoleWarn() {
				var _console;
				var style = "font-size: 12px; background-image: url(\"".concat(elementorDevToolsConfig.urls.assets, "images/logo-icon.png\"); background-repeat: no-repeat; background-size: contain;");
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				args.unshift("%c  %c", style, "");
				(_console = console).warn.apply(_console, args);
			}
		}]);
	}();

//#endregion
//#region modules/dev-tools/assets/js/index.js
	if (!window.elementorDevTools) {
		window.elementorDevTools = new Module(new Deprecation());
		window.elementorDevTools.notifyBackendDeprecations();
	}

//#endregion
})();
//# sourceMappingURL=dev-tools.js.map