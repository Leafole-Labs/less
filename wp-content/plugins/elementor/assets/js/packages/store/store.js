(function(_reduxjs_toolkit, react_redux) {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
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

//#endregion

//#region packages/packages/libs/store/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		__StoreProvider: () => react_redux.Provider,
		__addMiddleware: () => addMiddleware,
		__createAction: () => _reduxjs_toolkit.createAction,
		__createAsyncThunk: () => _reduxjs_toolkit.createAsyncThunk,
		__createSelector: () => _reduxjs_toolkit.createSelector,
		__createSlice: () => _reduxjs_toolkit.createSlice,
		__createStore: () => createStore,
		__deleteStore: () => deleteStore,
		__dispatch: () => dispatch,
		__getState: () => getState,
		__getStore: () => getStore,
		__registerSlice: () => registerSlice,
		__subscribe: () => subscribe,
		__subscribeWithSelector: () => subscribeWithSelector,
		__useDispatch: () => react_redux.useDispatch,
		__useSelector: () => react_redux.useSelector
	});
	var instance = null;
	var slices = {};
	var pendingActions = [];
	var middlewares = /* @__PURE__ */ new Set();
	var getReducers = () => {
		return (0, _reduxjs_toolkit.combineReducers)(Object.entries(slices).reduce((reducersData, [name, slice]) => {
			reducersData[name] = slice.reducer;
			return reducersData;
		}, {}));
	};
	function registerSlice(slice) {
		if (slices[slice.name]) throw new Error(`Slice with name "${slice.name}" already exists.`);
		slices[slice.name] = slice;
	}
	var addMiddleware = (middleware) => {
		middlewares.add(middleware);
	};
	var dispatch = (action) => {
		if (!instance) {
			pendingActions.push(action);
			return;
		}
		return instance.dispatch(action);
	};
	var getState = () => {
		if (!instance) throw new Error("The store instance does not exist.");
		return instance.getState();
	};
	var subscribe = (listener) => {
		if (!instance) throw new Error("The store instance does not exist.");
		return instance.subscribe(listener);
	};
	var subscribeWithSelector = (selector, listener) => {
		let prevState = selector(getState());
		return subscribe(() => {
			const nextState = selector(getState());
			if (prevState === nextState) return;
			prevState = nextState;
			listener(nextState);
		});
	};
	var createStore = () => {
		if (instance) throw new Error("The store instance already exists.");
		instance = (0, _reduxjs_toolkit.configureStore)({
			reducer: getReducers(),
			middleware: (getDefaultMiddleware) => {
				return [...getDefaultMiddleware(), ...Array.from(middlewares)];
			}
		});
		if (pendingActions.length) {
			pendingActions.forEach((action) => dispatch(action));
			pendingActions.length = 0;
		}
		return instance;
	};
	var getStore = () => {
		return instance;
	};
	var deleteStore = () => {
		instance = null;
		slices = {};
		pendingActions.length = 0;
		middlewares.clear();
	};

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).store = src_exports;

//#endregion
})(elementorVendors.reduxToolkit, elementorVendors.reactRedux);
window.elementorV2.store?.init?.();
//# sourceMappingURL=store.js.map