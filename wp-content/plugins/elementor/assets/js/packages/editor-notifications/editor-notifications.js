(function(_elementor_editor, _elementor_store, react, react_dom, _elementor_icons, _elementor_ui) {

//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) {
			__defProp(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) {
					__defProp(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion
react = __toESM(react);

//#region node_modules/notistack/node_modules/clsx/dist/clsx.m.js
	function r(e) {
		var t;
		var f;
		var n = "";
		if ("string" == typeof e || "number" == typeof e) n += e;
		else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
		else for (t in e) e[t] && (n && (n += " "), n += t);
		return n;
	}
	function clsx() {
		for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
		return n;
	}

//#endregion
//#region node_modules/goober/dist/goober.modern.js
	var e = { data: "" };
	var t = (t) => {
		if ("object" == typeof window) {
			let e = (t ? t.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), {
				innerHTML: " ",
				id: "_goober"
			});
			return e.nonce = window.__nonce__, e.parentNode || (t || document.head).appendChild(e), e.firstChild;
		}
		return t || e;
	};
	var l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
	var a = /\/\*[^]*?\*\/|  +/g;
	var n = /\n+/g;
	var o = (e, t) => {
		let r = "";
		let l = "";
		let a = "";
		for (let n in e) {
			let c = e[n];
			"@" == n[0] ? "i" == n[1] ? r = n + " " + c + ";" : l += "f" == n[1] ? o(c, n) : n + "{" + o(c, "k" == n[1] ? "" : t) + "}" : "object" == typeof c ? l += o(c, t ? t.replace(/([^,])+/g, (e) => n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t) => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : n) : null != c && (n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(), a += o.p ? o.p(n, c) : n + ":" + c + ";");
		}
		return r + (t && a ? t + "{" + a + "}" : a) + l;
	};
	var c = {};
	var s = (e) => {
		if ("object" == typeof e) {
			let t = "";
			for (let r in e) t += r + s(e[r]);
			return t;
		}
		return e;
	};
	var i = (e, t, r, i, p) => {
		let u = s(e);
		let d = c[u] || (c[u] = ((e) => {
			let t = 0;
			let r = 11;
			for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
			return "go" + r;
		})(u));
		if (!c[d]) {
			let t = u !== e ? e : ((e) => {
				let t;
				let r;
				let o = [{}];
				for (; t = l.exec(e.replace(a, ""));) t[4] ? o.shift() : t[3] ? (r = t[3].replace(n, " ").trim(), o.unshift(o[0][r] = o[0][r] || {})) : o[0][t[1]] = t[2].replace(n, " ").trim();
				return o[0];
			})(e);
			c[d] = o(p ? { ["@keyframes " + d]: t } : t, r ? "" : "." + d);
		}
		let f = r && c.g ? c.g : null;
		return r && (c.g = c[d]), ((e, t, r, l) => {
			l ? t.data = t.data.replace(l, e) : -1 === t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
		})(c[d], t, i, f), d;
	};
	var p = (e, t, r) => e.reduce((e, l, a) => {
		let n = t[a];
		if (n && n.call) {
			let e = n(r);
			let t = e && e.props && e.props.className || /^go/.test(e) && e;
			n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : o(e, "") : !1 === e ? "" : e;
		}
		return e + l + (null == n ? "" : n);
	}, "");
	function u(e) {
		let r = this || {};
		let l = e.call ? e(r.p) : e;
		return i(l.unshift ? l.raw ? p(l, [].slice.call(arguments, 1), r.p) : l.reduce((e, t) => Object.assign(e, t && t.call ? t(r.p) : t), {}) : l, t(r.target), r.g, r.o, r.k);
	}
	var b = u.bind({ g: 1 });
	var h = u.bind({ k: 1 });

//#endregion
//#region node_modules/notistack/notistack.esm.js
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}
	function _extends() {
		_extends = Object.assign || function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
			}
			return target;
		};
		return _extends.apply(this, arguments);
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		subClass.__proto__ = superClass;
	}
	function _objectWithoutPropertiesLoose(source, excluded) {
		if (source == null) return {};
		var target = {};
		var sourceKeys = Object.keys(source);
		var key;
		var i;
		for (i = 0; i < sourceKeys.length; i++) {
			key = sourceKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			target[key] = source[key];
		}
		return target;
	}
	function _assertThisInitialized(self) {
		if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return self;
	}
	var noOp = function noOp() {
		return "";
	};
	var SnackbarContext = /*#__PURE__*/ react.default.createContext({
		enqueueSnackbar: noOp,
		closeSnackbar: noOp
	});
	var breakpoints = {
		downXs: "@media (max-width:599.95px)",
		upSm: "@media (min-width:600px)"
	};
	var capitalise = function capitalise(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};
	var originKeyExtractor = function originKeyExtractor(anchor) {
		return "" + capitalise(anchor.vertical) + capitalise(anchor.horizontal);
	};
	var isDefined = function isDefined(value) {
		return !!value || value === 0;
	};
	var UNMOUNTED = "unmounted";
	var EXITED = "exited";
	var ENTERING = "entering";
	var ENTERED = "entered";
	var EXITING = "exiting";
	var Transition = /*#__PURE__*/ function(_React$Component) {
		_inheritsLoose(Transition, _React$Component);
		function Transition(props) {
			var _this = _React$Component.call(this, props) || this;
			var appear = props.appear;
			var initialStatus;
			_this.appearStatus = null;
			if (props["in"]) if (appear) {
				initialStatus = EXITED;
				_this.appearStatus = ENTERING;
			} else initialStatus = ENTERED;
			else if (props.unmountOnExit || props.mountOnEnter) initialStatus = UNMOUNTED;
			else initialStatus = EXITED;
			_this.state = { status: initialStatus };
			_this.nextCallback = null;
			return _this;
		}
		Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
			if (_ref["in"] && prevState.status === UNMOUNTED) return { status: EXITED };
			return null;
		};
		var _proto = Transition.prototype;
		_proto.componentDidMount = function componentDidMount() {
			this.updateStatus(true, this.appearStatus);
		};
		_proto.componentDidUpdate = function componentDidUpdate(prevProps) {
			var nextStatus = null;
			if (prevProps !== this.props) {
				var status = this.state.status;
				if (this.props["in"]) {
					if (status !== ENTERING && status !== ENTERED) nextStatus = ENTERING;
				} else if (status === ENTERING || status === ENTERED) nextStatus = EXITING;
			}
			this.updateStatus(false, nextStatus);
		};
		_proto.componentWillUnmount = function componentWillUnmount() {
			this.cancelNextCallback();
		};
		_proto.getTimeouts = function getTimeouts() {
			var timeout = this.props.timeout;
			var enter = timeout;
			var exit = timeout;
			if (timeout != null && typeof timeout !== "number" && typeof timeout !== "string") {
				exit = timeout.exit;
				enter = timeout.enter;
			}
			return {
				exit,
				enter
			};
		};
		_proto.updateStatus = function updateStatus(mounting, nextStatus) {
			if (mounting === void 0) mounting = false;
			if (nextStatus !== null) {
				this.cancelNextCallback();
				if (nextStatus === ENTERING) this.performEnter(mounting);
				else this.performExit();
			} else if (this.props.unmountOnExit && this.state.status === EXITED) this.setState({ status: UNMOUNTED });
		};
		_proto.performEnter = function performEnter(mounting) {
			var _this2 = this;
			var enter = this.props.enter;
			var isAppearing = mounting;
			var timeouts = this.getTimeouts();
			if (!mounting && !enter) {
				this.safeSetState({ status: ENTERED }, function() {
					if (_this2.props.onEntered) _this2.props.onEntered(_this2.node, isAppearing);
				});
				return;
			}
			if (this.props.onEnter) this.props.onEnter(this.node, isAppearing);
			this.safeSetState({ status: ENTERING }, function() {
				if (_this2.props.onEntering) _this2.props.onEntering(_this2.node, isAppearing);
				_this2.onTransitionEnd(timeouts.enter, function() {
					_this2.safeSetState({ status: ENTERED }, function() {
						if (_this2.props.onEntered) _this2.props.onEntered(_this2.node, isAppearing);
					});
				});
			});
		};
		_proto.performExit = function performExit() {
			var _this3 = this;
			var exit = this.props.exit;
			var timeouts = this.getTimeouts();
			if (!exit) {
				this.safeSetState({ status: EXITED }, function() {
					if (_this3.props.onExited) _this3.props.onExited(_this3.node);
				});
				return;
			}
			if (this.props.onExit) this.props.onExit(this.node);
			this.safeSetState({ status: EXITING }, function() {
				if (_this3.props.onExiting) _this3.props.onExiting(_this3.node);
				_this3.onTransitionEnd(timeouts.exit, function() {
					_this3.safeSetState({ status: EXITED }, function() {
						if (_this3.props.onExited) _this3.props.onExited(_this3.node);
					});
				});
			});
		};
		_proto.cancelNextCallback = function cancelNextCallback() {
			if (this.nextCallback !== null && this.nextCallback.cancel) {
				this.nextCallback.cancel();
				this.nextCallback = null;
			}
		};
		_proto.safeSetState = function safeSetState(nextState, callback) {
			callback = this.setNextCallback(callback);
			this.setState(nextState, callback);
		};
		_proto.setNextCallback = function setNextCallback(callback) {
			var _this4 = this;
			var active = true;
			this.nextCallback = function() {
				if (active) {
					active = false;
					_this4.nextCallback = null;
					callback();
				}
			};
			this.nextCallback.cancel = function() {
				active = false;
			};
			return this.nextCallback;
		};
		_proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
			this.setNextCallback(handler);
			var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
			if (!this.node || doesNotHaveTimeoutOrListener) {
				setTimeout(this.nextCallback, 0);
				return;
			}
			if (this.props.addEndListener) this.props.addEndListener(this.node, this.nextCallback);
			if (timeout != null) setTimeout(this.nextCallback, timeout);
		};
		_proto.render = function render() {
			var status = this.state.status;
			if (status === UNMOUNTED) return null;
			var _this$props = this.props;
			var children = _this$props.children;
			return children(status, _objectWithoutPropertiesLoose(_this$props, [
				"children",
				"in",
				"mountOnEnter",
				"unmountOnExit",
				"appear",
				"enter",
				"exit",
				"timeout",
				"addEndListener",
				"onEnter",
				"onEntering",
				"onEntered",
				"onExit",
				"onExiting",
				"onExited",
				"nodeRef"
			]));
		};
		_createClass(Transition, [{
			key: "node",
			get: function get() {
				var _this$props$nodeRef;
				var node = (_this$props$nodeRef = this.props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current;
				if (!node) throw new Error("notistack - Custom snackbar is not refForwarding");
				return node;
			}
		}]);
		return Transition;
	}(react.default.Component);
	function noop() {}
	Transition.defaultProps = {
		"in": false,
		mountOnEnter: false,
		unmountOnExit: false,
		appear: false,
		enter: true,
		exit: true,
		onEnter: noop,
		onEntering: noop,
		onEntered: noop,
		onExit: noop,
		onExiting: noop,
		onExited: noop
	};
	/**
	* Credit to MUI team @ https://mui.com
	*/
	/**
	* passes {value} to {ref}
	*
	* Useful if you want to expose the ref of an inner component to the public API
	* while still using it inside the component.
	* @param ref A ref callback or ref object. If anything falsy, this is a no-op.
	*/
	function setRef(ref, value) {
		if (typeof ref === "function") ref(value);
		else if (ref) ref.current = value;
	}
	function useForkRef(refA, refB) {
		/**
		* This will create a new function if the ref props change and are defined.
		* This means react will call the old forkRef with `null` and the new forkRef
		* with the ref. Cleanup naturally emerges from this behavior.
		*/
		return (0, react.useMemo)(function() {
			if (refA == null && refB == null) return null;
			return function(refValue) {
				setRef(refA, refValue);
				setRef(refB, refValue);
			};
		}, [refA, refB]);
	}
	function getTransitionProps(props) {
		var timeout = props.timeout;
		var _props$style = props.style;
		var style = _props$style === void 0 ? {} : _props$style;
		var mode = props.mode;
		return {
			duration: typeof timeout === "object" ? timeout[mode] || 0 : timeout,
			easing: style.transitionTimingFunction,
			delay: style.transitionDelay
		};
	}
	/**
	* Credit to MUI team @ https://mui.com
	*/
	var defaultEasing = {
		easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
		easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
		easeIn: "cubic-bezier(0.4, 0, 1, 1)",
		sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
	};
	/**
	* CSS hack to force a repaint
	*/
	var reflow = function reflow(node) {
		node.scrollTop = node.scrollTop;
	};
	var formatMs = function formatMs(milliseconds) {
		return Math.round(milliseconds) + "ms";
	};
	function createTransition(props, options) {
		if (props === void 0) props = ["all"];
		var _ref = options || {};
		var _ref$duration = _ref.duration;
		var duration = _ref$duration === void 0 ? 300 : _ref$duration;
		var _ref$easing = _ref.easing;
		var easing = _ref$easing === void 0 ? defaultEasing.easeInOut : _ref$easing;
		var _ref$delay = _ref.delay;
		var delay = _ref$delay === void 0 ? 0 : _ref$delay;
		return (Array.isArray(props) ? props : [props]).map(function(animatedProp) {
			var formattedDuration = typeof duration === "string" ? duration : formatMs(duration);
			var formattedDelay = typeof delay === "string" ? delay : formatMs(delay);
			return animatedProp + " " + formattedDuration + " " + easing + " " + formattedDelay;
		}).join(",");
	}
	function ownerDocument(node) {
		return node && node.ownerDocument || document;
	}
	function ownerWindow(node) {
		return ownerDocument(node).defaultView || window;
	}
	/**
	* Corresponds to 10 frames at 60 Hz.
	* A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
	*/
	function debounce(func, wait) {
		if (wait === void 0) wait = 166;
		var timeout;
		function debounced() {
			var _this = this;
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			var later = function later() {
				func.apply(_this, args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		}
		debounced.clear = function() {
			clearTimeout(timeout);
		};
		return debounced;
	}
	/**
	* Translate the node so it can't be seen on the screen.
	* Later, we're going to translate the node back to its original location with `none`.
	*/
	function getTranslateValue(direction, node) {
		var rect = node.getBoundingClientRect();
		var containerWindow = ownerWindow(node);
		var transform;
		if (node.fakeTransform) transform = node.fakeTransform;
		else {
			var computedStyle = containerWindow.getComputedStyle(node);
			transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
		}
		var offsetX = 0;
		var offsetY = 0;
		if (transform && transform !== "none" && typeof transform === "string") {
			var transformValues = transform.split("(")[1].split(")")[0].split(",");
			offsetX = parseInt(transformValues[4], 10);
			offsetY = parseInt(transformValues[5], 10);
		}
		switch (direction) {
			case "left": return "translateX(" + (containerWindow.innerWidth + offsetX - rect.left) + "px)";
			case "right": return "translateX(-" + (rect.left + rect.width - offsetX) + "px)";
			case "up": return "translateY(" + (containerWindow.innerHeight + offsetY - rect.top) + "px)";
			default: return "translateY(-" + (rect.top + rect.height - offsetY) + "px)";
		}
	}
	function setTranslateValue(direction, node) {
		if (!node) return;
		var transform = getTranslateValue(direction, node);
		if (transform) {
			node.style.webkitTransform = transform;
			node.style.transform = transform;
		}
	}
	var Slide = /*#__PURE__*/ (0, react.forwardRef)(function(props, ref) {
		var children = props.children;
		var _props$direction = props.direction;
		var direction = _props$direction === void 0 ? "down" : _props$direction;
		var inProp = props["in"];
		var style = props.style;
		var _props$timeout = props.timeout;
		var timeout = _props$timeout === void 0 ? 0 : _props$timeout;
		var onEnter = props.onEnter;
		var onEntered = props.onEntered;
		var onExit = props.onExit;
		var onExited = props.onExited;
		var other = _objectWithoutPropertiesLoose(props, [
			"children",
			"direction",
			"in",
			"style",
			"timeout",
			"onEnter",
			"onEntered",
			"onExit",
			"onExited"
		]);
		var nodeRef = (0, react.useRef)(null);
		var handleRef = useForkRef(useForkRef(children.ref, nodeRef), ref);
		var handleEnter = function handleEnter(node, isAppearing) {
			setTranslateValue(direction, node);
			reflow(node);
			if (onEnter) onEnter(node, isAppearing);
		};
		var handleEntering = function handleEntering(node) {
			var easing = (style === null || style === void 0 ? void 0 : style.transitionTimingFunction) || defaultEasing.easeOut;
			var transitionProps = getTransitionProps({
				timeout,
				mode: "enter",
				style: _extends({}, style, { transitionTimingFunction: easing })
			});
			node.style.webkitTransition = createTransition("-webkit-transform", transitionProps);
			node.style.transition = createTransition("transform", transitionProps);
			node.style.webkitTransform = "none";
			node.style.transform = "none";
		};
		var handleExit = function handleExit(node) {
			var easing = (style === null || style === void 0 ? void 0 : style.transitionTimingFunction) || defaultEasing.sharp;
			var transitionProps = getTransitionProps({
				timeout,
				mode: "exit",
				style: _extends({}, style, { transitionTimingFunction: easing })
			});
			node.style.webkitTransition = createTransition("-webkit-transform", transitionProps);
			node.style.transition = createTransition("transform", transitionProps);
			setTranslateValue(direction, node);
			if (onExit) onExit(node);
		};
		var handleExited = function handleExited(node) {
			node.style.webkitTransition = "";
			node.style.transition = "";
			if (onExited) onExited(node);
		};
		var updatePosition = (0, react.useCallback)(function() {
			if (nodeRef.current) setTranslateValue(direction, nodeRef.current);
		}, [direction]);
		(0, react.useEffect)(function() {
			if (inProp || direction === "down" || direction === "right") return;
			var handleResize = debounce(function() {
				if (nodeRef.current) setTranslateValue(direction, nodeRef.current);
			});
			var containerWindow = ownerWindow(nodeRef.current);
			containerWindow.addEventListener("resize", handleResize);
			return function() {
				handleResize.clear();
				containerWindow.removeEventListener("resize", handleResize);
			};
		}, [direction, inProp]);
		(0, react.useEffect)(function() {
			if (!inProp) updatePosition();
		}, [inProp, updatePosition]);
		return (0, react.createElement)(Transition, Object.assign({
			appear: true,
			nodeRef,
			onEnter: handleEnter,
			onEntered,
			onEntering: handleEntering,
			onExit: handleExit,
			onExited: handleExited,
			"in": inProp,
			timeout
		}, other), function(state, childProps) {
			return (0, react.cloneElement)(children, _extends({
				ref: handleRef,
				style: _extends({ visibility: state === "exited" && !inProp ? "hidden" : void 0 }, style, {}, children.props.style)
			}, childProps));
		});
	});
	Slide.displayName = "Slide";
	var SvgIcon = function SvgIcon(props) {
		return react.default.createElement("svg", Object.assign({
			viewBox: "0 0 24 24",
			focusable: "false",
			style: {
				fontSize: 20,
				marginInlineEnd: 8,
				userSelect: "none",
				width: "1em",
				height: "1em",
				display: "inline-block",
				fill: "currentColor",
				flexShrink: 0
			}
		}, props));
	};
	var defaults = {
		maxSnack: 3,
		persist: false,
		hideIconVariant: false,
		disableWindowBlurListener: false,
		variant: "default",
		autoHideDuration: 5e3,
		iconVariant: {
			"default": void 0,
			success: /*#__PURE__*/ react.default.createElement(function CheckIcon() {
				return react.default.createElement(SvgIcon, null, react.default.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z" }));
			}, null),
			warning: /*#__PURE__*/ react.default.createElement(function WarningIcon() {
				return react.default.createElement(SvgIcon, null, react.default.createElement("path", { d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" }));
			}, null),
			error: /*#__PURE__*/ react.default.createElement(function ErrorIcon() {
				return react.default.createElement(SvgIcon, null, react.default.createElement("path", { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }));
			}, null),
			info: /*#__PURE__*/ react.default.createElement(function InfoIcon() {
				return react.default.createElement(SvgIcon, null, react.default.createElement("path", { d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z" }));
			}, null)
		},
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "left"
		},
		TransitionComponent: Slide,
		transitionDuration: {
			enter: 225,
			exit: 195
		}
	};
	/**
	* Derives the right autoHideDuration taking into account the following
	* prority order: 1: Options, 2: Props, 3: default fallback
	*/
	var getAutoHideDuration = function getAutoHideDuration(optionsDuration, propsDuration) {
		var isNumberOrNull = function isNumberOrNull(numberish) {
			return typeof numberish === "number" || numberish === null;
		};
		if (isNumberOrNull(optionsDuration)) return optionsDuration;
		if (isNumberOrNull(propsDuration)) return propsDuration;
		return defaults.autoHideDuration;
	};
	/**
	* Derives the right transitionDuration taking into account the following
	* prority order: 1: Options, 2: Props, 3: default fallback
	*/
	var getTransitionDuration = function getTransitionDuration(optionsDuration, propsDuration) {
		var is = function is(item, types) {
			return types.some(function(t) {
				return typeof item === t;
			});
		};
		if (is(optionsDuration, ["string", "number"])) return optionsDuration;
		if (is(optionsDuration, ["object"])) return _extends({}, defaults.transitionDuration, {}, is(propsDuration, ["object"]) && propsDuration, {}, optionsDuration);
		if (is(propsDuration, ["string", "number"])) return propsDuration;
		if (is(propsDuration, ["object"])) return _extends({}, defaults.transitionDuration, {}, propsDuration);
		return defaults.transitionDuration;
	};
	var merge = function merge(options, props) {
		return function(name, shouldObjectMerge) {
			if (shouldObjectMerge === void 0) shouldObjectMerge = false;
			if (shouldObjectMerge) return _extends({}, defaults[name], {}, props[name], {}, options[name]);
			if (name === "autoHideDuration") return getAutoHideDuration(options.autoHideDuration, props.autoHideDuration);
			if (name === "transitionDuration") return getTransitionDuration(options.transitionDuration, props.transitionDuration);
			return options[name] || props[name] || defaults[name];
		};
	};
	function makeStyles(styles) {
		return Object.entries(styles).reduce(function(acc, _ref) {
			var _extends2;
			var key = _ref[0];
			var value = _ref[1];
			return _extends({}, acc, (_extends2 = {}, _extends2[key] = u(value), _extends2));
		}, {});
	}
	var ComponentClasses = {
		SnackbarContainer: "notistack-SnackbarContainer",
		Snackbar: "notistack-Snackbar",
		CollapseWrapper: "notistack-CollapseWrapper",
		MuiContent: "notistack-MuiContent",
		MuiContentVariant: function MuiContentVariant(variant) {
			return "notistack-MuiContent-" + variant;
		}
	};
	var classes = /*#__PURE__*/ makeStyles({
		root: { height: 0 },
		entered: { height: "auto" }
	});
	var collapsedSize = "0px";
	var timeout = 175;
	var Collapse = /*#__PURE__*/ (0, react.forwardRef)(function(props, ref) {
		var children = props.children;
		var inProp = props["in"];
		var onExited = props.onExited;
		var wrapperRef = (0, react.useRef)(null);
		var nodeRef = (0, react.useRef)(null);
		var handleRef = useForkRef(ref, nodeRef);
		var getWrapperSize = function getWrapperSize() {
			return wrapperRef.current ? wrapperRef.current.clientHeight : 0;
		};
		return (0, react.createElement)(Transition, {
			"in": inProp,
			unmountOnExit: true,
			onEnter: function handleEnter(node) {
				node.style.height = collapsedSize;
			},
			onEntered: function handleEntered(node) {
				node.style.height = "auto";
			},
			onEntering: function handleEntering(node) {
				var wrapperSize = getWrapperSize();
				var _getTransitionProps = getTransitionProps({
					timeout,
					mode: "enter"
				});
				var transitionDuration = _getTransitionProps.duration;
				var easing = _getTransitionProps.easing;
				node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : transitionDuration + "ms";
				node.style.height = wrapperSize + "px";
				node.style.transitionTimingFunction = easing || "";
			},
			onExit: function handleExit(node) {
				node.style.height = getWrapperSize() + "px";
			},
			onExited,
			onExiting: function handleExiting(node) {
				reflow(node);
				var _getTransitionProps2 = getTransitionProps({
					timeout,
					mode: "exit"
				});
				var transitionDuration = _getTransitionProps2.duration;
				var easing = _getTransitionProps2.easing;
				node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : transitionDuration + "ms";
				node.style.height = collapsedSize;
				node.style.transitionTimingFunction = easing || "";
			},
			nodeRef,
			timeout
		}, function(state, childProps) {
			return (0, react.createElement)("div", Object.assign({
				ref: handleRef,
				className: clsx(classes.root, state === "entered" && classes.entered),
				style: _extends({
					pointerEvents: "all",
					overflow: "hidden",
					minHeight: collapsedSize,
					transition: createTransition("height")
				}, state === "entered" && { overflow: "visible" }, {}, state === "exited" && !inProp && { visibility: "hidden" })
			}, childProps), (0, react.createElement)("div", {
				ref: wrapperRef,
				className: ComponentClasses.CollapseWrapper,
				style: {
					display: "flex",
					width: "100%"
				}
			}, children));
		});
	});
	Collapse.displayName = "Collapse";
	var direction = {
		right: "left",
		left: "right",
		bottom: "up",
		top: "down"
	};
	var getSlideDirection = function getSlideDirection(anchorOrigin) {
		if (anchorOrigin.horizontal !== "center") return direction[anchorOrigin.horizontal];
		return direction[anchorOrigin.vertical];
	};
	/** Tranforms classes name */
	var toSnackbarAnchorOrigin = function toSnackbarAnchorOrigin(anchorOrigin) {
		return "anchorOrigin" + originKeyExtractor(anchorOrigin);
	};
	/**
	* Omit SnackbarContainer class keys that are not needed for SnackbarItem
	*/
	var keepSnackbarClassKeys = function keepSnackbarClassKeys(classes) {
		if (classes === void 0) classes = {};
		var containerClasses = {
			containerRoot: true,
			containerAnchorOriginTopCenter: true,
			containerAnchorOriginBottomCenter: true,
			containerAnchorOriginTopRight: true,
			containerAnchorOriginBottomRight: true,
			containerAnchorOriginTopLeft: true,
			containerAnchorOriginBottomLeft: true
		};
		return Object.keys(classes).filter(function(key) {
			return !containerClasses[key];
		}).reduce(function(obj, key) {
			var _extends2;
			return _extends({}, obj, (_extends2 = {}, _extends2[key] = classes[key], _extends2));
		}, {});
	};
	var noOp$1 = function noOp() {};
	/**
	* Credit to MUI team @ https://mui.com
	* Safe chained function.
	*
	* Will only create a new function if needed,
	* otherwise will pass back existing functions or null.
	*/
	function createChainedFunction(funcs, snackbarId) {
		return funcs.reduce(function(acc, func) {
			if (func === null || func === void 0) return acc;
			return function chainedFunction() {
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				var argums = [].concat(args);
				if (snackbarId && argums.indexOf(snackbarId) === -1) argums.push(snackbarId);
				acc.apply(this, argums);
				func.apply(this, argums);
			};
		}, noOp$1);
	}
	/**
	* Credit to MUI team @ https://mui.com
	* https://github.com/facebook/react/issues/14099#issuecomment-440013892
	*/
	var useEnhancedEffect = typeof window !== "undefined" ? react.useLayoutEffect : react.useEffect;
	function useEventCallback(fn) {
		var ref = (0, react.useRef)(fn);
		useEnhancedEffect(function() {
			ref.current = fn;
		});
		return (0, react.useCallback)(function() {
			return ref.current.apply(void 0, arguments);
		}, []);
	}
	/**
	* Credit to MUI team @ https://mui.com
	*/
	var Snackbar = /*#__PURE__*/ (0, react.forwardRef)(function(props, ref) {
		var children = props.children;
		var className = props.className;
		var autoHideDuration = props.autoHideDuration;
		var _props$disableWindowB = props.disableWindowBlurListener;
		var disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB;
		var onClose = props.onClose;
		var id = props.id;
		var open = props.open;
		var _props$SnackbarProps = props.SnackbarProps;
		var SnackbarProps = _props$SnackbarProps === void 0 ? {} : _props$SnackbarProps;
		var timerAutoHide = (0, react.useRef)();
		var handleClose = useEventCallback(function() {
			if (onClose) onClose.apply(void 0, arguments);
		});
		var setAutoHideTimer = useEventCallback(function(autoHideDurationParam) {
			if (!onClose || autoHideDurationParam == null) return;
			if (timerAutoHide.current) clearTimeout(timerAutoHide.current);
			timerAutoHide.current = setTimeout(function() {
				handleClose(null, "timeout", id);
			}, autoHideDurationParam);
		});
		(0, react.useEffect)(function() {
			if (open) setAutoHideTimer(autoHideDuration);
			return function() {
				if (timerAutoHide.current) clearTimeout(timerAutoHide.current);
			};
		}, [
			open,
			autoHideDuration,
			setAutoHideTimer
		]);
		/**
		* Pause the timer when the user is interacting with the Snackbar
		* or when the user hide the window.
		*/
		var handlePause = function handlePause() {
			if (timerAutoHide.current) clearTimeout(timerAutoHide.current);
		};
		/**
		* Restart the timer when the user is no longer interacting with the Snackbar
		* or when the window is shown back.
		*/
		var handleResume = (0, react.useCallback)(function() {
			if (autoHideDuration != null) setAutoHideTimer(autoHideDuration * .5);
		}, [autoHideDuration, setAutoHideTimer]);
		var handleMouseEnter = function handleMouseEnter(event) {
			if (SnackbarProps.onMouseEnter) SnackbarProps.onMouseEnter(event);
			handlePause();
		};
		var handleMouseLeave = function handleMouseLeave(event) {
			if (SnackbarProps.onMouseLeave) SnackbarProps.onMouseLeave(event);
			handleResume();
		};
		(0, react.useEffect)(function() {
			if (!disableWindowBlurListener && open) {
				window.addEventListener("focus", handleResume);
				window.addEventListener("blur", handlePause);
				return function() {
					window.removeEventListener("focus", handleResume);
					window.removeEventListener("blur", handlePause);
				};
			}
		}, [
			disableWindowBlurListener,
			handleResume,
			open
		]);
		return (0, react.createElement)("div", Object.assign({ ref }, SnackbarProps, {
			className: clsx(ComponentClasses.Snackbar, className),
			onMouseEnter: handleMouseEnter,
			onMouseLeave: handleMouseLeave
		}), children);
	});
	Snackbar.displayName = "Snackbar";
	var _root;
	var classes$1 = /*#__PURE__*/ makeStyles({ root: (_root = {
		display: "flex",
		flexWrap: "wrap",
		flexGrow: 1
	}, _root[breakpoints.upSm] = {
		flexGrow: "initial",
		minWidth: "288px"
	}, _root) });
	var SnackbarContent$1 = /*#__PURE__*/ (0, react.forwardRef)(function(_ref, ref) {
		var className = _ref.className;
		var props = _objectWithoutPropertiesLoose(_ref, ["className"]);
		return react.default.createElement("div", Object.assign({
			ref,
			className: clsx(classes$1.root, className)
		}, props));
	});
	SnackbarContent$1.displayName = "SnackbarContent";
	var classes$2 = /*#__PURE__*/ makeStyles({
		root: {
			backgroundColor: "#313131",
			fontSize: "0.875rem",
			lineHeight: 1.43,
			letterSpacing: "0.01071em",
			color: "#fff",
			alignItems: "center",
			padding: "6px 16px",
			borderRadius: "4px",
			boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
		},
		lessPadding: { paddingLeft: "20px" },
		"default": { backgroundColor: "#313131" },
		success: { backgroundColor: "#43a047" },
		error: { backgroundColor: "#d32f2f" },
		warning: { backgroundColor: "#ff9800" },
		info: { backgroundColor: "#2196f3" },
		message: {
			display: "flex",
			alignItems: "center",
			padding: "8px 0"
		},
		action: {
			display: "flex",
			alignItems: "center",
			marginLeft: "auto",
			paddingLeft: "16px",
			marginRight: "-8px"
		}
	});
	var ariaDescribedby = "notistack-snackbar";
	var MaterialDesignContent = /*#__PURE__*/ (0, react.forwardRef)(function(props, forwardedRef) {
		var id = props.id;
		var message = props.message;
		var componentOrFunctionAction = props.action;
		var iconVariant = props.iconVariant;
		var variant = props.variant;
		var hideIconVariant = props.hideIconVariant;
		var style = props.style;
		var className = props.className;
		var icon = iconVariant[variant];
		var action = componentOrFunctionAction;
		if (typeof action === "function") action = action(id);
		return react.default.createElement(SnackbarContent$1, {
			ref: forwardedRef,
			role: "alert",
			"aria-describedby": ariaDescribedby,
			style,
			className: clsx(ComponentClasses.MuiContent, ComponentClasses.MuiContentVariant(variant), classes$2.root, classes$2[variant], className, !hideIconVariant && icon && classes$2.lessPadding)
		}, react.default.createElement("div", {
			id: ariaDescribedby,
			className: classes$2.message
		}, !hideIconVariant ? icon : null, message), action && react.default.createElement("div", { className: classes$2.action }, action));
	});
	MaterialDesignContent.displayName = "MaterialDesignContent";
	var MaterialDesignContent$1 = /*#__PURE__*/ (0, react.memo)(MaterialDesignContent);
	var styles = /*#__PURE__*/ makeStyles({ wrappedRoot: {
		width: "100%",
		position: "relative",
		transform: "translateX(0)",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		minWidth: "288px"
	} });
	var SnackbarItem = function SnackbarItem(props) {
		var timeout = (0, react.useRef)();
		var _useState = (0, react.useState)(true);
		var collapsed = _useState[0];
		var setCollapsed = _useState[1];
		var handleClose = createChainedFunction([props.snack.onClose, props.onClose]);
		var handleEntered = function handleEntered() {
			if (props.snack.requestClose) handleClose(null, "instructed", props.snack.id);
		};
		var handleExitedScreen = (0, react.useCallback)(function() {
			timeout.current = setTimeout(function() {
				setCollapsed(function(col) {
					return !col;
				});
			}, 125);
		}, []);
		(0, react.useEffect)(function() {
			return function() {
				if (timeout.current) clearTimeout(timeout.current);
			};
		}, []);
		var snack = props.snack;
		var allClasses = props.classes;
		var _props$Component = props.Component;
		var Component = _props$Component === void 0 ? MaterialDesignContent$1 : _props$Component;
		var classes = (0, react.useMemo)(function() {
			return keepSnackbarClassKeys(allClasses);
		}, [allClasses]);
		var open = snack.open;
		var SnackbarProps = snack.SnackbarProps;
		var TransitionComponent = snack.TransitionComponent;
		var TransitionProps = snack.TransitionProps;
		var transitionDuration = snack.transitionDuration;
		var disableWindowBlurListener = snack.disableWindowBlurListener;
		var componentOrFunctionContent = snack.content;
		var otherSnack = _objectWithoutPropertiesLoose(snack, [
			"open",
			"SnackbarProps",
			"TransitionComponent",
			"TransitionProps",
			"transitionDuration",
			"disableWindowBlurListener",
			"content",
			"entered",
			"requestClose",
			"onEnter",
			"onEntered",
			"onExit",
			"onExited"
		]);
		var transitionProps = _extends({
			direction: getSlideDirection(otherSnack.anchorOrigin),
			timeout: transitionDuration
		}, TransitionProps);
		var content = componentOrFunctionContent;
		if (typeof content === "function") content = content(otherSnack.id, otherSnack.message);
		var callbacks = [
			"onEnter",
			"onEntered",
			"onExit",
			"onExited"
		].reduce(function(acc, cbName) {
			var _extends2;
			return _extends({}, acc, (_extends2 = {}, _extends2[cbName] = createChainedFunction([props.snack[cbName], props[cbName]], otherSnack.id), _extends2));
		}, {});
		return react.default.createElement(Collapse, {
			"in": collapsed,
			onExited: callbacks.onExited
		}, react.default.createElement(Snackbar, {
			open,
			id: otherSnack.id,
			disableWindowBlurListener,
			autoHideDuration: otherSnack.autoHideDuration,
			className: clsx(styles.wrappedRoot, classes.root, classes[toSnackbarAnchorOrigin(otherSnack.anchorOrigin)]),
			SnackbarProps,
			onClose: handleClose
		}, react.default.createElement(TransitionComponent, Object.assign({}, transitionProps, {
			appear: true,
			"in": open,
			onExit: callbacks.onExit,
			onExited: handleExitedScreen,
			onEnter: callbacks.onEnter,
			onEntered: createChainedFunction([callbacks.onEntered, handleEntered], otherSnack.id)
		}), content || react.default.createElement(Component, Object.assign({}, otherSnack)))));
	};
	var _root$1;
	var _rootDense;
	var _left;
	var _right;
	var _center;
	var indents = {
		view: {
			"default": 20,
			dense: 4
		},
		snackbar: {
			"default": 6,
			dense: 2
		}
	};
	var collapseWrapper = "." + ComponentClasses.CollapseWrapper;
	var xsWidthMargin = 16;
	var styles$1 = /*#__PURE__*/ makeStyles({
		root: (_root$1 = {
			boxSizing: "border-box",
			display: "flex",
			maxHeight: "100%",
			position: "fixed",
			zIndex: 1400,
			height: "auto",
			width: "auto",
			transition: /*#__PURE__*/ createTransition([
				"top",
				"right",
				"bottom",
				"left",
				"max-width"
			], {
				duration: 300,
				easing: "ease"
			}),
			pointerEvents: "none"
		}, _root$1[collapseWrapper] = {
			padding: indents.snackbar["default"] + "px 0px",
			transition: "padding 300ms ease 0ms"
		}, _root$1.maxWidth = "calc(100% - " + indents.view["default"] * 2 + "px)", _root$1[breakpoints.downXs] = {
			width: "100%",
			maxWidth: "calc(100% - " + xsWidthMargin * 2 + "px)"
		}, _root$1),
		rootDense: (_rootDense = {}, _rootDense[collapseWrapper] = { padding: indents.snackbar.dense + "px 0px" }, _rootDense),
		top: {
			top: indents.view["default"] - indents.snackbar["default"] + "px",
			flexDirection: "column"
		},
		bottom: {
			bottom: indents.view["default"] - indents.snackbar["default"] + "px",
			flexDirection: "column-reverse"
		},
		left: (_left = { left: indents.view["default"] + "px" }, _left[breakpoints.upSm] = { alignItems: "flex-start" }, _left[breakpoints.downXs] = { left: xsWidthMargin + "px" }, _left),
		right: (_right = { right: indents.view["default"] + "px" }, _right[breakpoints.upSm] = { alignItems: "flex-end" }, _right[breakpoints.downXs] = { right: xsWidthMargin + "px" }, _right),
		center: (_center = {
			left: "50%",
			transform: "translateX(-50%)"
		}, _center[breakpoints.upSm] = { alignItems: "center" }, _center)
	});
	var SnackbarContainer$1 = /*#__PURE__*/ (0, react.memo)(function SnackbarContainer(props) {
		var _props$classes = props.classes;
		var classes = _props$classes === void 0 ? {} : _props$classes;
		var anchorOrigin = props.anchorOrigin;
		var dense = props.dense;
		var children = props.children;
		var combinedClassname = clsx(ComponentClasses.SnackbarContainer, styles$1[anchorOrigin.vertical], styles$1[anchorOrigin.horizontal], styles$1.root, classes.containerRoot, classes["containerAnchorOrigin" + originKeyExtractor(anchorOrigin)], dense && styles$1.rootDense);
		return react.default.createElement("div", { className: combinedClassname }, children);
	});
	var __DEV__ = true;
	var messages = { NO_PERSIST_ALL: "Reached maxSnack while all enqueued snackbars have 'persist' flag. Notistack will dismiss the oldest snackbar anyway to allow other ones in the queue to be presented." };
	var warning = (function(messageKey) {
		if (!__DEV__) return;
		var message = messages[messageKey];
		if (typeof console !== "undefined") console.error("WARNING - notistack: " + message);
		try {
			throw new Error(message);
		} catch (x) {}
	});
	var isOptions = function isOptions(messageOrOptions) {
		return !(typeof messageOrOptions === "string" || (0, react.isValidElement)(messageOrOptions));
	};
	var enqueueSnackbar;
	var closeSnackbar;
	var SnackbarProvider = /*#__PURE__*/ function(_Component) {
		_inheritsLoose(SnackbarProvider, _Component);
		function SnackbarProvider(props) {
			var _this = _Component.call(this, props) || this;
			/**
			* Adds a new snackbar to the queue to be presented.
			* Returns generated or user defined key referencing the new snackbar or null
			*/
			_this.enqueueSnackbar = function(messageOrOptions, optsOrUndefined) {
				if (optsOrUndefined === void 0) optsOrUndefined = {};
				if (messageOrOptions === void 0 || messageOrOptions === null) throw new Error("enqueueSnackbar called with invalid argument");
				var opts = isOptions(messageOrOptions) ? messageOrOptions : optsOrUndefined;
				var message = isOptions(messageOrOptions) ? messageOrOptions.message : messageOrOptions;
				var key = opts.key;
				var preventDuplicate = opts.preventDuplicate;
				var options = _objectWithoutPropertiesLoose(opts, ["key", "preventDuplicate"]);
				var hasSpecifiedKey = isDefined(key);
				var id = hasSpecifiedKey ? key : (/* @__PURE__ */ new Date()).getTime() + Math.random();
				var merger = merge(options, _this.props);
				var snack = _extends({ id }, options, {
					message,
					open: true,
					entered: false,
					requestClose: false,
					persist: merger("persist"),
					action: merger("action"),
					content: merger("content"),
					variant: merger("variant"),
					anchorOrigin: merger("anchorOrigin"),
					disableWindowBlurListener: merger("disableWindowBlurListener"),
					autoHideDuration: merger("autoHideDuration"),
					hideIconVariant: merger("hideIconVariant"),
					TransitionComponent: merger("TransitionComponent"),
					transitionDuration: merger("transitionDuration"),
					TransitionProps: merger("TransitionProps", true),
					iconVariant: merger("iconVariant", true),
					style: merger("style", true),
					SnackbarProps: merger("SnackbarProps", true),
					className: clsx(_this.props.className, options.className)
				});
				if (snack.persist) snack.autoHideDuration = void 0;
				_this.setState(function(state) {
					if (preventDuplicate === void 0 && _this.props.preventDuplicate || preventDuplicate) {
						var compareFunction = function compareFunction(item) {
							return hasSpecifiedKey ? item.id === id : item.message === message;
						};
						var inQueue = state.queue.findIndex(compareFunction) > -1;
						var inView = state.snacks.findIndex(compareFunction) > -1;
						if (inQueue || inView) return state;
					}
					return _this.handleDisplaySnack(_extends({}, state, { queue: [].concat(state.queue, [snack]) }));
				});
				return id;
			};
			/**
			* Reducer: Display snack if there's space for it. Otherwise, immediately
			* begin dismissing the oldest message to start showing the new one.
			*/
			_this.handleDisplaySnack = function(state) {
				if (state.snacks.length >= _this.maxSnack) return _this.handleDismissOldest(state);
				return _this.processQueue(state);
			};
			/**
			* Reducer: Display items (notifications) in the queue if there's space for them.
			*/
			_this.processQueue = function(state) {
				var queue = state.queue;
				var snacks = state.snacks;
				if (queue.length > 0) return _extends({}, state, {
					snacks: [].concat(snacks, [queue[0]]),
					queue: queue.slice(1, queue.length)
				});
				return state;
			};
			/**
			* Reducer: Hide oldest snackbar on the screen because there exists a new one which we have to display.
			* (ignoring the one with 'persist' flag. i.e. explicitly told by user not to get dismissed).
			*
			* Note 1: If there is already a message leaving the screen, no new messages are dismissed.
			* Note 2: If the oldest message has not yet entered the screen, only a request to close the
			*         snackbar is made. Once it entered the screen, it will be immediately dismissed.
			*/
			_this.handleDismissOldest = function(state) {
				if (state.snacks.some(function(item) {
					return !item.open || item.requestClose;
				})) return state;
				var popped = false;
				var ignore = false;
				if (state.snacks.reduce(function(acc, current) {
					return acc + (current.open && current.persist ? 1 : 0);
				}, 0) === _this.maxSnack) {
					warning("NO_PERSIST_ALL");
					ignore = true;
				}
				var snacks = state.snacks.map(function(item) {
					if (!popped && (!item.persist || ignore)) {
						popped = true;
						if (!item.entered) return _extends({}, item, { requestClose: true });
						if (item.onClose) item.onClose(null, "maxsnack", item.id);
						if (_this.props.onClose) _this.props.onClose(null, "maxsnack", item.id);
						return _extends({}, item, { open: false });
					}
					return _extends({}, item);
				});
				return _extends({}, state, { snacks });
			};
			/**
			* Set the entered state of the snackbar with the given key.
			*/
			_this.handleEnteredSnack = function(node, isAppearing, key) {
				if (!isDefined(key)) throw new Error("handleEnteredSnack Cannot be called with undefined key");
				_this.setState(function(_ref) {
					return { snacks: _ref.snacks.map(function(item) {
						return item.id === key ? _extends({}, item, { entered: true }) : _extends({}, item);
					}) };
				});
			};
			/**
			* Hide a snackbar after its timeout.
			*/
			_this.handleCloseSnack = function(event, reason, key) {
				if (_this.props.onClose) _this.props.onClose(event, reason, key);
				var shouldCloseAll = key === void 0;
				_this.setState(function(_ref2) {
					var snacks = _ref2.snacks;
					var queue = _ref2.queue;
					return {
						snacks: snacks.map(function(item) {
							if (!shouldCloseAll && item.id !== key) return _extends({}, item);
							return item.entered ? _extends({}, item, { open: false }) : _extends({}, item, { requestClose: true });
						}),
						queue: queue.filter(function(item) {
							return item.id !== key;
						})
					};
				});
			};
			/**
			* Close snackbar with the given key
			*/
			_this.closeSnackbar = function(key) {
				var toBeClosed = _this.state.snacks.find(function(item) {
					return item.id === key;
				});
				if (isDefined(key) && toBeClosed && toBeClosed.onClose) toBeClosed.onClose(null, "instructed", key);
				_this.handleCloseSnack(null, "instructed", key);
			};
			/**
			* When we set open attribute of a snackbar to false (i.e. after we hide a snackbar),
			* it leaves the screen and immediately after leaving animation is done, this method
			* gets called. We remove the hidden snackbar from state and then display notifications
			* waiting in the queue (if any). If after this process the queue is not empty, the
			* oldest message is dismissed.
			*/
			_this.handleExitedSnack = function(node, key) {
				if (!isDefined(key)) throw new Error("handleExitedSnack Cannot be called with undefined key");
				_this.setState(function(state) {
					var newState = _this.processQueue(_extends({}, state, { snacks: state.snacks.filter(function(item) {
						return item.id !== key;
					}) }));
					if (newState.queue.length === 0) return newState;
					return _this.handleDismissOldest(newState);
				});
			};
			enqueueSnackbar = _this.enqueueSnackbar;
			closeSnackbar = _this.closeSnackbar;
			_this.state = {
				snacks: [],
				queue: [],
				contextValue: {
					enqueueSnackbar: _this.enqueueSnackbar.bind(_assertThisInitialized(_this)),
					closeSnackbar: _this.closeSnackbar.bind(_assertThisInitialized(_this))
				}
			};
			return _this;
		}
		var _proto = SnackbarProvider.prototype;
		_proto.render = function render() {
			var _this2 = this;
			var contextValue = this.state.contextValue;
			var _this$props = this.props;
			var domRoot = _this$props.domRoot;
			var children = _this$props.children;
			var _this$props$dense = _this$props.dense;
			var dense = _this$props$dense === void 0 ? false : _this$props$dense;
			var _this$props$Component = _this$props.Components;
			var Components = _this$props$Component === void 0 ? {} : _this$props$Component;
			var classes = _this$props.classes;
			var categ = this.state.snacks.reduce(function(acc, current) {
				var _extends2;
				var category = originKeyExtractor(current.anchorOrigin);
				var existingOfCategory = acc[category] || [];
				return _extends({}, acc, (_extends2 = {}, _extends2[category] = [].concat(existingOfCategory, [current]), _extends2));
			}, {});
			var snackbars = Object.keys(categ).map(function(origin) {
				var snacks = categ[origin];
				var nomineeSnack = snacks[0];
				return react.default.createElement(SnackbarContainer$1, {
					key: origin,
					dense,
					anchorOrigin: nomineeSnack.anchorOrigin,
					classes
				}, snacks.map(function(snack) {
					return react.default.createElement(SnackbarItem, {
						key: snack.id,
						snack,
						classes,
						Component: Components[snack.variant],
						onClose: _this2.handleCloseSnack,
						onEnter: _this2.props.onEnter,
						onExit: _this2.props.onExit,
						onExited: createChainedFunction([_this2.handleExitedSnack, _this2.props.onExited], snack.id),
						onEntered: createChainedFunction([_this2.handleEnteredSnack, _this2.props.onEntered], snack.id)
					});
				}));
			});
			return react.default.createElement(SnackbarContext.Provider, { value: contextValue }, children, domRoot ? (0, react_dom.createPortal)(snackbars, domRoot) : snackbars);
		};
		_createClass(SnackbarProvider, [{
			key: "maxSnack",
			get: function get() {
				return this.props.maxSnack || defaults.maxSnack;
			}
		}]);
		return SnackbarProvider;
	}(react.Component);
	var useSnackbar = (function() {
		return (0, react.useContext)(SnackbarContext);
	});

//#endregion
//#region packages/packages/core/editor-notifications/src/slice.ts
	var notificationsSlice = (0, _elementor_store.__createSlice)({
		name: "notifications",
		initialState: {},
		reducers: {
			notifyAction: (state, action) => {
				const newState = { ...state };
				if (!newState[action.payload.id]) newState[action.payload.id] = action.payload;
				return newState;
			},
			clearAction: (state, action) => {
				const newState = { ...state };
				if (newState[action.payload.id]) delete newState[action.payload.id];
				return newState;
			}
		}
	});
	var { notifyAction, clearAction } = notificationsSlice.actions;

//#endregion
//#region packages/packages/core/editor-notifications/src/hooks/use-enqueue-notifications.tsx
	var AUTO_HIDE_DURATION$1 = 8e3;
	function createDefaultAction(notification, onDismiss) {
		return /* @__PURE__ */ react.createElement(react.Fragment, { key: notification.id }, notification.additionalActionProps?.map((additionalAction, index) => /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			key: `${index}`,
			...additionalAction
		})), /* @__PURE__ */ react.createElement(_elementor_ui.CloseButton, {
			"aria-label": "close",
			color: "inherit",
			onClick: onDismiss
		}));
	}
	function createPromotionAction(notification) {
		return /* @__PURE__ */ react.createElement(react.Fragment, { key: notification.id }, notification.additionalActionProps?.map((additionalAction, index) => /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			key: `${index}`,
			...additionalAction
		})));
	}
	var useEnqueueNotification = (notifications) => {
		const { enqueueSnackbar } = useSnackbar();
		const dispatch = (0, _elementor_store.__useDispatch)();
		(0, react.useEffect)(() => {
			Object.values(notifications).forEach((notification) => {
				const dismiss = () => {
					closeSnackbar(notification.id);
					dispatch(clearAction({ id: notification.id }));
				};
				const action = [
					"promotion",
					"info",
					"success",
					"error"
				].includes(notification.type) ? createPromotionAction(notification) : createDefaultAction(notification, dismiss);
				enqueueSnackbar(notification.message, {
					variant: notification.type,
					key: notification.id,
					onClose: () => dispatch(clearAction({ id: notification.id })),
					preventDuplicate: true,
					action,
					autoHideDuration: notification.autoHideDuration ?? AUTO_HIDE_DURATION$1
				});
			});
		}, [
			notifications,
			enqueueSnackbar,
			dispatch
		]);
	};

//#endregion
//#region packages/packages/core/editor-notifications/src/sync/get-app-bar-height.ts
	var EDITOR_APP_BAR_WRAPPER_ID = "elementor-editor-wrapper-v2";
	function getAppBarHeight() {
		return document.getElementById(EDITOR_APP_BAR_WRAPPER_ID)?.getBoundingClientRect().height ?? 0;
	}

//#endregion
//#region packages/packages/core/editor-notifications/src/sync/get-editing-panel-width.ts
	function getEditingPanelWidth() {
		return document.querySelector(".elementor-panel")?.clientWidth || 0;
	}

//#endregion
//#region packages/packages/core/editor-notifications/src/components/notifications.tsx
	var AUTO_HIDE_DURATION = 8e3;
	var DefaultCustomSnackbar = (0, react.forwardRef)((props, ref) => {
		const filteredProps = getFilteredSnackbarProps(props);
		const panelWidth = getEditingPanelWidth();
		const appBarHeight = getAppBarHeight();
		return /* @__PURE__ */ react.createElement(_elementor_ui.ThemeProvider, { palette: "unstable" }, /* @__PURE__ */ react.createElement(_elementor_ui.SnackbarContent, {
			ref,
			...filteredProps,
			sx: {
				"&.MuiPaper-root": { minWidth: "max-content" },
				ml: panelWidth + "px",
				mt: `-${appBarHeight}px`
			}
		}));
	});
	var AlertSnackbar = (0, react.forwardRef)(({ color, icon, ...props }, ref) => {
		const panelWidth = getEditingPanelWidth();
		const appBarHeight = getAppBarHeight();
		return /* @__PURE__ */ react.createElement(_elementor_ui.ThemeProvider, {
			colorScheme: "light",
			palette: "unstable"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			ref,
			variant: "standard",
			color,
			icon,
			role: "alert",
			action: props.action,
			onClose: () => closeSnackbar(props.id),
			sx: {
				ml: panelWidth + "px",
				mt: `-${appBarHeight}px`,
				"& .MuiAlert-message": {
					display: "flex",
					flexWrap: "nowrap",
					alignItems: "center"
				},
				"& .MuiAlert-content": { whiteSpace: "nowrap" }
			}
		}, props.message));
	});
	var muiToEuiMapper = {
		default: DefaultCustomSnackbar,
		promotion: (0, react.forwardRef)((props, ref) => /* @__PURE__ */ react.createElement(AlertSnackbar, {
			ref,
			color: "promotion",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, null),
			...props
		})),
		info: (0, react.forwardRef)((props, ref) => /* @__PURE__ */ react.createElement(AlertSnackbar, {
			ref,
			color: "info",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, null),
			...props
		})),
		success: (0, react.forwardRef)((props, ref) => /* @__PURE__ */ react.createElement(AlertSnackbar, {
			ref,
			color: "success",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.CircleCheckFilledIcon, null),
			...props
		})),
		error: (0, react.forwardRef)((props, ref) => /* @__PURE__ */ react.createElement(AlertSnackbar, {
			ref,
			color: "error",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.AlertCircleFilled, null),
			...props
		}))
	};
	var Handler = () => {
		useEnqueueNotification((0, _elementor_store.__useSelector)((state) => state.notifications));
		return null;
	};
	var Wrapper = () => {
		return /* @__PURE__ */ react.createElement(SnackbarProvider, {
			maxSnack: 3,
			autoHideDuration: AUTO_HIDE_DURATION,
			disableWindowBlurListener: true,
			anchorOrigin: {
				horizontal: "center",
				vertical: "bottom"
			},
			Components: muiToEuiMapper,
			domRoot: document.body
		}, /* @__PURE__ */ react.createElement(Handler, null));
	};
	function notify(notification) {
		(0, _elementor_store.__getStore)()?.dispatch(notifyAction(notification));
	}
	function dismissNotification(id) {
		const store = (0, _elementor_store.__getStore)();
		closeSnackbar(id);
		store?.dispatch(clearAction({ id }));
	}
	function NotifyReact(notification) {
		(0, _elementor_store.__useDispatch)()(notifyAction(notification));
	}
	function getFilteredSnackbarProps(props) {
		const forbiddenProps = [
			"autoHideDuration",
			"persist",
			"hideIconVariant",
			"iconVariant",
			"anchorOrigin"
		];
		return Object.entries(props).reduce((filteredProps, [key, value]) => {
			if (!forbiddenProps.includes(key)) filteredProps[key] = value;
			return filteredProps;
		}, {});
	}

//#endregion
//#region packages/packages/core/editor-notifications/src/init.ts
	function init() {
		(0, _elementor_store.__registerSlice)(notificationsSlice);
		(0, _elementor_editor.injectIntoTop)({
			id: "notifications",
			component: Wrapper
		});
	}

//#endregion
//#region packages/packages/core/editor-notifications/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		NotifyReact: () => NotifyReact,
		dismissNotification: () => dismissNotification,
		init: () => init,
		notify: () => notify
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorNotifications = src_exports;

//#endregion
})(elementorV2.editor, elementorV2.store, React, ReactDOM, elementorV2.icons, elementorV2.ui);
window.elementorV2.editorNotifications?.init?.();
//# sourceMappingURL=editor-notifications.js.map