(function(_elementor_locations, _elementor_utils, react, _elementor_editor_ui, _elementor_ui) {

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

//#region packages/packages/libs/menus/src/create-register-item.tsx
	function createRegisterItem(locations, component, notify) {
		return ({ id, group = "default", priority = 10, overwrite = false, props: _props, useProps: _useProps }) => {
			if (!(group in locations)) return;
			const Component = component;
			const useProps = _useProps || (() => _props);
			const InjectedComponent = (props) => {
				const componentProps = useProps();
				return /* @__PURE__ */ react.createElement(Component, {
					...props,
					...componentProps
				});
			};
			locations[group].inject({
				id,
				component: InjectedComponent,
				options: {
					priority,
					overwrite
				}
			});
			notify();
		};
	}

//#endregion
//#region packages/packages/libs/menus/src/create-use-menu-items.ts
	function createUseMenuItems(locations, subscribe) {
		let snapshot = null;
		subscribe(() => {
			snapshot = null;
		});
		const getMenuItems = () => {
			if (snapshot) return snapshot;
			snapshot = Object.entries(locations).reduce((carry, [groupName, location]) => {
				const items = location.getInjections().map((injection) => ({
					id: injection.id,
					MenuItem: injection.component
				}));
				return {
					...carry,
					[groupName]: items
				};
			}, {});
			return snapshot;
		};
		return () => (0, react.useSyncExternalStore)(subscribe, getMenuItems);
	}

//#endregion
//#region packages/packages/libs/menus/src/create-menu.ts
	function createSubscription() {
		const listeners = /* @__PURE__ */ new Set();
		return {
			subscribe: (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			},
			notify: () => listeners.forEach((listener) => listener())
		};
	}
	function createMenu({ groups = [], components }) {
		const locations = createLocations([...groups, "default"]);
		const { subscribe, notify } = createSubscription();
		const registerFns = createRegisterFns(locations, components, notify);
		return {
			useMenuItems: createUseMenuItems(locations, subscribe),
			...registerFns
		};
	}
	function createLocations(groups) {
		return groups.reduce((acc, group) => {
			acc[group] = (0, _elementor_locations.createLocation)();
			return acc;
		}, {});
	}
	function createRegisterFns(locations, components, notify) {
		return Object.entries(components).reduce((acc, [key, component]) => {
			const name = `register${(0, _elementor_utils.capitalize)(key)}`;
			return {
				...acc,
				[name]: createRegisterItem(locations, component, notify)
			};
		}, {});
	}

//#endregion
//#region packages/packages/libs/menus/src/action.tsx
	var SIZE = "tiny";
	function Action({ title, visible = true, icon: Icon, onClick }) {
		if (!visible) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			placement: "top",
			title,
			arrow: true
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			"aria-label": title,
			size: SIZE,
			onClick
		}, /* @__PURE__ */ react.createElement(Icon, { fontSize: SIZE })));
	}

//#endregion
//#region packages/packages/libs/menus/src/controls-actions.ts
	var controlActionsMenu = createMenu({ components: {
		Action,
		PopoverAction: _elementor_editor_ui.PopoverAction
	} });

//#endregion
//#region packages/packages/libs/menus/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		controlActionsMenu: () => controlActionsMenu,
		createMenu: () => createMenu
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).menus = src_exports;

//#endregion
})(elementorV2.locations, elementorV2.utils, React, elementorV2.editorUi, elementorV2.ui);
window.elementorV2.menus?.init?.();
//# sourceMappingURL=menus.js.map