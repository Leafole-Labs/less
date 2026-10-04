(function(_elementor_query, _elementor_http_client, _elementor_editor_v1_adapters) {

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

//#region packages/packages/libs/editor-current-user/src/api.ts
	var RESOURCE_URL = "elementor/v1/user-data/current-user";
	var getUserPayload = { params: { context: "edit" } };
	var apiClient = {
		get: () => (0, _elementor_http_client.httpService)().get(RESOURCE_URL, getUserPayload).then((res) => {
			const { capabilities = [], suppressedMessages = [] } = res.data;
			return {
				capabilities,
				suppressedMessages
			};
		}),
		update: (data) => (0, _elementor_http_client.httpService)().patch(RESOURCE_URL, { suppressedMessages: data.suppressedMessages })
	};

//#endregion
//#region packages/packages/libs/editor-current-user/src/use-current-user.ts
	var EDITOR_CURRENT_USER_QUERY_KEY = "editor-current-user";
	var useCurrentUser = () => (0, _elementor_query.useQuery)({
		queryKey: [EDITOR_CURRENT_USER_QUERY_KEY],
		queryFn: apiClient.get
	});

//#endregion
//#region packages/packages/libs/editor-current-user/src/use-update-current-user.ts
	var useUpdateCurrentUser = () => {
		const queryClient = (0, _elementor_query.useQueryClient)();
		return (0, _elementor_query.useMutation)({
			mutationFn: apiClient.update,
			onSuccess: () => queryClient.invalidateQueries({ queryKey: [EDITOR_CURRENT_USER_QUERY_KEY] })
		});
	};

//#endregion
//#region packages/packages/libs/editor-current-user/src/use-suppressed-message.ts
	var useSuppressedMessage = (messageKey) => {
		const { data } = useCurrentUser();
		const { mutate } = useUpdateCurrentUser();
		const isMessageSuppressed = !!data?.suppressedMessages.includes(messageKey);
		const suppressMessage = () => {
			if (!isMessageSuppressed) mutate({ suppressedMessages: [...data?.suppressedMessages ?? [], messageKey] });
		};
		return [isMessageSuppressed, suppressMessage];
	};

//#endregion
//#region packages/packages/libs/editor-current-user/src/use-current-user-capabilities.ts
	var ADMIN_CAPABILITY = "manage_options";
	var useCurrentUserCapabilities = () => {
		const { data } = useCurrentUser();
		const canUser = (capability) => {
			return Boolean(data?.capabilities.includes(capability));
		};
		return {
			canUser,
			isAdmin: Boolean(data?.capabilities.includes(ADMIN_CAPABILITY)),
			capabilities: data?.capabilities
		};
	};

//#endregion
//#region packages/packages/libs/editor-current-user/src/get-current-user.ts
	var getCurrentUser = () => {
		return (0, _elementor_query.getQueryClient)().getQueryData([EDITOR_CURRENT_USER_QUERY_KEY]);
	};

//#endregion
//#region packages/packages/libs/editor-current-user/src/ensure-current-user.ts
	async function ensureUser() {
		return (0, _elementor_query.getQueryClient)().ensureQueryData({
			queryKey: [EDITOR_CURRENT_USER_QUERY_KEY],
			queryFn: apiClient.get,
			retry: false
		});
	}

//#endregion
//#region packages/packages/libs/editor-current-user/src/on-set-user.ts
	function onSetUser(callback) {
		let unsubscribeQuery;
		const unsubscribeListener = (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => {
			unsubscribeQuery = (0, _elementor_query.getQueryClient)().getQueryCache().subscribe((event) => {
				if (event.query.queryKey.includes("editor-current-user")) callback(event.query.state.data);
			});
		});
		return () => {
			unsubscribeQuery();
			unsubscribeListener();
		};
	}

//#endregion
//#region packages/packages/libs/editor-current-user/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		ensureUser: () => ensureUser,
		getCurrentUser: () => getCurrentUser,
		onSetUser: () => onSetUser,
		useCurrentUser: () => useCurrentUser,
		useCurrentUserCapabilities: () => useCurrentUserCapabilities,
		useSuppressedMessage: () => useSuppressedMessage,
		useUpdateCurrentUser: () => useUpdateCurrentUser
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorCurrentUser = src_exports;

//#endregion
})(elementorV2.query, elementorV2.httpClient, elementorV2.editorV1Adapters);
window.elementorV2.editorCurrentUser?.init?.();
//# sourceMappingURL=editor-current-user.js.map