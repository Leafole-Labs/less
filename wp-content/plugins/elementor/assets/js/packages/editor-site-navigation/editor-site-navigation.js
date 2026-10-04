(function(_elementor_icons, _elementor_editor_app_bar, _elementor_editor_panels, react, _wordpress_i18n, _elementor_ui, _wordpress_api_fetch, _elementor_query, _elementor_editor_documents, _elementor_editor_v1_adapters, _elementor_events, _elementor_env) {

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
_wordpress_api_fetch = __toESM(_wordpress_api_fetch);

//#region packages/packages/core/editor-site-navigation/src/icons-map.ts
	var initialIconsMap = {
		page: _elementor_icons.PageTemplateIcon,
		section: _elementor_icons.SectionTemplateIcon,
		container: _elementor_icons.ContainerTemplateIcon,
		"wp-page": _elementor_icons.PageTypeIcon,
		"wp-post": _elementor_icons.PostTypeIcon
	};
	var iconsMap$1 = { ...initialIconsMap };
	function extendIconsMap(additionalIcons) {
		Object.assign(iconsMap$1, additionalIcons);
	}
	function getIconsMap() {
		return iconsMap$1;
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/contexts/post-list-context.tsx
	var defaultValues = {
		type: "page",
		editMode: {
			mode: "none",
			details: {}
		},
		setEditMode: () => null,
		resetEditMode: () => null,
		setError: () => null
	};
	var PostListContext = (0, react.createContext)(defaultValues);
	var PostListContextProvider = ({ type, setError, children }) => {
		const [editMode, setEditMode] = (0, react.useState)(defaultValues.editMode);
		const resetEditMode = () => {
			setEditMode(defaultValues.editMode);
		};
		return /* @__PURE__ */ react.createElement(PostListContext.Provider, { value: {
			type,
			editMode,
			setEditMode,
			resetEditMode,
			setError
		} }, children);
	};
	function usePostListContext() {
		const context = (0, react.useContext)(PostListContext);
		if (!context) throw new Error("The `usePostListContext()` hook must be used within an `<PostListContextProvider />`");
		return context;
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/error-snackbar.tsx
	var ErrorSnackbar = ({ open, onClose }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Snackbar, {
			open,
			onClose,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "left"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			onClose,
			severity: "error",
			sx: { width: "100%" }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			component: "span",
			sx: { fontWeight: "bold" }
		}, "We couldn’t complete the action."), " ", "Please try again"));
	};

//#endregion
//#region packages/packages/core/editor-site-navigation/src/api/post.ts
	var postTypesMap = { page: {
		labels: {
			singular_name: (0, _wordpress_i18n.__)("Page", "elementor"),
			plural_name: (0, _wordpress_i18n.__)("Pages", "elementor")
		},
		rest_base: "pages"
	} };
	var POST_PER_PAGE = 10;
	var getRequest$1 = /* @__PURE__ */ __name(async (postTypeSlug, page) => {
		const baseUri = `/wp/v2/${postTypesMap[postTypeSlug].rest_base}`;
		const queryParams = new URLSearchParams({
			status: "any",
			order: "asc",
			page: page.toString(),
			per_page: 10 .toString(),
			_fields: [
				"id",
				"type",
				"title",
				"link",
				"status",
				"user_can"
			].join(",")
		});
		const result = await (0, _wordpress_api_fetch.default)({
			path: baseUri + "?" + queryParams.toString(),
			parse: false
		});
		return {
			data: await result.json(),
			totalPages: Number(result.headers.get("x-wp-totalpages")),
			totalPosts: Number(result.headers.get("x-wp-total")),
			currentPage: page
		};
	}, "getRequest");
	var createRequest = (postTypeSlug, newPost) => {
		return (0, _wordpress_api_fetch.default)({
			path: `/wp/v2/${postTypesMap[postTypeSlug].rest_base}`,
			method: "POST",
			data: newPost
		});
	};
	var updateRequest = (postTypeSlug, updatedPost) => {
		const path = `/wp/v2/${postTypesMap[postTypeSlug].rest_base}`;
		const { id, ...data } = updatedPost;
		return (0, _wordpress_api_fetch.default)({
			path: `${path}/${id}`,
			method: "POST",
			data
		});
	};
	var deleteRequest = (postTypeSlug, postId) => {
		return (0, _wordpress_api_fetch.default)({
			path: `${`/wp/v2/${postTypesMap[postTypeSlug].rest_base}`}/${postId}`,
			method: "DELETE"
		});
	};
	var duplicateRequest = (originalPost) => {
		return (0, _wordpress_api_fetch.default)({
			path: `/elementor/v1/site-navigation/duplicate-post`,
			method: "POST",
			data: {
				post_id: originalPost.id,
				title: originalPost.title
			}
		});
	};

//#endregion
//#region packages/packages/core/editor-site-navigation/src/api/settings.ts
	var getSettings = () => {
		return (0, _wordpress_api_fetch.default)({ path: "/elementor/v1/site-navigation/homepage" });
	};
	var updateSettings = (settings) => {
		return (0, _wordpress_api_fetch.default)({
			path: "/wp/v2/settings",
			method: "POST",
			data: settings
		});
	};

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-homepage.ts
	var settingsQueryKey = () => ["site-navigation", "homepage"];
	function useHomepage() {
		return (0, _elementor_query.useQuery)({
			queryKey: settingsQueryKey(),
			queryFn: () => getSettings()
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-posts.ts
	var postsQueryKey = (postTypeSlug) => [
		"site-navigation",
		"posts",
		postTypeSlug
	];
	var flattenData = (data) => {
		if (!data) return data;
		const flattened = [];
		data.pages.forEach((page) => {
			flattened.push(...page.data);
		});
		return flattened;
	};
	function usePosts(postTypeSlug) {
		const query = (0, _elementor_query.useInfiniteQuery)({
			queryKey: postsQueryKey(postTypeSlug),
			queryFn: ({ pageParam = 1 }) => getRequest$1(postTypeSlug, pageParam),
			initialPageParam: 1,
			getNextPageParam: (lastPage) => {
				return lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : void 0;
			}
		});
		return {
			...query,
			data: {
				posts: flattenData(query.data),
				total: query.data?.pages[0]?.totalPosts ?? 0
			}
		};
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/api/user.ts
	var getUser = () => {
		return (0, _wordpress_api_fetch.default)({ path: "/wp/v2/users/me?" + new URLSearchParams({
			_fields: ["capabilities"].join(","),
			context: "edit"
		}).toString() });
	};

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-user.ts
	var userQueryKey = () => ["site-navigation", "user"];
	function useUser() {
		return (0, _elementor_query.useQuery)({
			queryKey: userQueryKey(),
			queryFn: getUser,
			staleTime: 1800 * 1e3
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/add-new-button.tsx
	function AddNewButton() {
		const { setEditMode } = usePostListContext();
		const { data: user } = useUser();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "small",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.PlusIcon, null),
			disabled: !user?.capabilities?.edit_pages,
			onClick: () => {
				setEditMode({
					mode: "create",
					details: {}
				});
			},
			sx: { px: 1.5 }
		}, (0, _wordpress_i18n.__)("Add New", "elementor"));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/collapsible-list.tsx
	var RotateIcon = (0, _elementor_ui.styled)(_elementor_icons.ChevronDownIcon, { shouldForwardProp: (prop) => prop !== "isOpen" })(({ theme, isOpen }) => ({
		transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
		transition: theme.transitions.create("transform", { duration: theme.transitions.duration.standard })
	}));
	var StyledListItemIcon = (0, _elementor_ui.styled)(_elementor_ui.ListItemIcon)(({ theme }) => ({ minWidth: theme.spacing(4) }));
	function CollapsibleList({ label, Icon, isOpenByDefault = false, children }) {
		const [isOpen, setIsOpen] = (0, react.useState)(isOpenByDefault);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.ListItem, null, /* @__PURE__ */ react.createElement(StyledListItemIcon, { sx: { color: "text.secondary" } }, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			onClick: () => setIsOpen((prev) => !prev),
			size: "small",
			sx: { color: "inherit" }
		}, /* @__PURE__ */ react.createElement(RotateIcon, {
			fontSize: "small",
			isOpen
		}))), /* @__PURE__ */ react.createElement(StyledListItemIcon, {
			size: "small",
			sx: { color: "inherit" }
		}, /* @__PURE__ */ react.createElement(Icon, { fontSize: "small" })), /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, {
			primaryTypographyProps: {
				variant: "subtitle2",
				component: "span"
			},
			primary: label
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Collapse, {
			in: isOpen,
			timeout: "auto",
			unmountOnExit: true
		}, /* @__PURE__ */ react.createElement(_elementor_ui.List, { dense: true }, children)), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { sx: { mt: 1 } }));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/error-state.tsx
	function ErrorState() {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			pt: "40px",
			gap: "16px"
		} }, /* @__PURE__ */ react.createElement(_elementor_icons.Error404TemplateIcon, null), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			gap: "8px"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body1",
			color: "text.primary"
		}, (0, _wordpress_i18n.__)("We couldn’t display your pages.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.primary",
			sx: { textAlign: "center" }
		}, (0, _wordpress_i18n.__)("It’s probably a temporary issue.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.primary",
			sx: { textAlign: "center" }
		}, (0, _wordpress_i18n.__)("If the problem persists,", "elementor"), " ", /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			target: "_blank",
			href: "https://go.elementor.com/wp-editor-support-open-ticket/"
		}, "Notify support")))));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/api/recent-posts.ts
	var baseUrl = "/elementor/v1/site-navigation/recent-posts";
	var NUMBER_OF_RECENT_POSTS = 6;
	var getRequest = () => {
		const queryParams = new URLSearchParams({ posts_per_page: `${6}` });
		return (0, _wordpress_api_fetch.default)({ path: `${baseUrl}?${queryParams.toString()}` });
	};

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-recent-posts.ts
	var recentPostsQueryKey = ["site-navigation", "recent-posts"];
	function useRecentPosts() {
		return (0, _elementor_query.useQuery)({
			queryKey: recentPostsQueryKey,
			queryFn: () => getRequest()
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-posts-actions.ts
	function usePostActions(postTypeSlug) {
		const invalidatePosts = useInvalidatePosts(postTypeSlug);
		const onSuccess = () => invalidatePosts({ exact: true });
		return {
			createPost: (0, _elementor_query.useMutation)({
				mutationFn: (newPost) => createRequest(postTypeSlug, newPost),
				onSuccess
			}),
			updatePost: (0, _elementor_query.useMutation)({
				mutationFn: (updatedPost) => updateRequest(postTypeSlug, updatedPost),
				onSuccess
			}),
			deletePost: (0, _elementor_query.useMutation)({
				mutationFn: (postId) => deleteRequest(postTypeSlug, postId),
				onSuccess
			}),
			duplicatePost: (0, _elementor_query.useMutation)({
				mutationFn: (originalPost) => duplicateRequest(originalPost),
				onSuccess
			})
		};
	}
	function useInvalidatePosts(postTypeSlug) {
		const queryClient = (0, _elementor_query.useQueryClient)();
		return (options = {}) => {
			const queryKey = postsQueryKey(postTypeSlug);
			queryClient.invalidateQueries({ queryKey: recentPostsQueryKey }, options);
			return queryClient.invalidateQueries({ queryKey }, options);
		};
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/list-items/edit-mode-template.tsx
	function EditModeTemplate({ postTitle, isLoading, callback }) {
		const [title, setTitle] = (0, react.useState)(postTitle);
		const [touched, setTouched] = (0, react.useState)(false);
		const [inputError, setInputError] = (0, react.useState)(null);
		const closeButton = (0, react.useRef)();
		const onBlur = (e) => {
			if (closeButton.current === e.relatedTarget) return;
			runCallback();
		};
		const onFormSubmit = (e) => {
			e.preventDefault();
			runCallback();
		};
		const validateInput = (input) => {
			return input.trim() !== "";
		};
		const runCallback = () => {
			if (!validateInput(title)) return;
			callback(title);
		};
		const onChange = (e) => {
			if (!touched) setTouched(true);
			const value = e.target.value;
			if (!validateInput(value)) setInputError((0, _wordpress_i18n.__)("Name is required", "elementor"));
			else setInputError(null);
			setTitle(value);
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.ListItem, { secondaryAction: /* @__PURE__ */ react.createElement(CloseButton, {
			isLoading,
			closeButton
		}) }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			width: "100%",
			component: "form",
			onSubmit: onFormSubmit
		}, /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			autoFocus: true,
			fullWidth: true,
			value: title,
			onChange,
			disabled: isLoading,
			error: !!inputError,
			onBlur,
			variant: "outlined",
			color: "secondary",
			size: "small"
		}))), inputError && /* @__PURE__ */ react.createElement(_elementor_ui.ListItem, null, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, { sx: { color: "error.main" } }, inputError)));
	}
	function CloseButton({ isLoading, closeButton }) {
		const { resetEditMode } = usePostListContext();
		return /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			color: "secondary",
			onClick: resetEditMode,
			ref: closeButton,
			disabled: isLoading
		}, isLoading ? /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, null) : /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, { fontSize: "small" }));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/list-items/list-item-create.tsx
	function ListItemCreate() {
		const { type, resetEditMode } = usePostListContext();
		const { createPost } = usePostActions(type);
		const navigateToDocument = (0, _elementor_editor_documents.__useNavigateToDocument)();
		const { setError } = usePostListContext();
		const createPostCallback = async (inputValue) => {
			try {
				const { id } = await createPost.mutateAsync({
					title: inputValue,
					status: "draft"
				});
				navigateToDocument(id);
			} catch {
				setError();
			} finally {
				resetEditMode();
			}
		};
		return /* @__PURE__ */ react.createElement(EditModeTemplate, {
			postTitle: (0, _wordpress_i18n.__)("New Page", "elementor"),
			isLoading: createPost.isPending,
			callback: createPostCallback
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/list-items/list-item-duplicate.tsx
	function ListItemDuplicate() {
		const { type, editMode, resetEditMode } = usePostListContext();
		const navigateToDocument = (0, _elementor_editor_documents.__useNavigateToDocument)();
		const { duplicatePost } = usePostActions(type);
		const { setError } = usePostListContext();
		if ("duplicate" !== editMode.mode) return null;
		const duplicatePostCallback = async (inputValue) => {
			try {
				const { post_id: postId } = await duplicatePost.mutateAsync({
					id: editMode.details.postId,
					title: inputValue
				});
				navigateToDocument(postId);
			} catch {
				setError();
			} finally {
				resetEditMode();
			}
		};
		return /* @__PURE__ */ react.createElement(EditModeTemplate, {
			postTitle: `${editMode.details.title} ${(0, _wordpress_i18n.__)("copy", "elementor")}`,
			isLoading: duplicatePost.isPending,
			callback: duplicatePostCallback
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-rename-active-document.ts
	function getV1DocumentsManager() {
		const documentsManager = window.elementor?.documents;
		if (!documentsManager) throw new Error("Elementor Editor V1 documents manager not found");
		return documentsManager;
	}
	function useRenameActiveDocument() {
		return async (title) => {
			const container = getV1DocumentsManager().getCurrent().container;
			await (0, _elementor_editor_v1_adapters.__privateRunCommand)("document/elements/settings", {
				container,
				settings: { post_title: title }
			});
		};
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/list-items/list-item-rename.tsx
	function ListItemRename({ post }) {
		const { type, resetEditMode } = usePostListContext();
		const { updatePost } = usePostActions(type);
		const { setError } = usePostListContext();
		const activeDocument = (0, _elementor_editor_documents.__useActiveDocument)();
		const rename = useRenameActiveDocument();
		const isActive = activeDocument?.id === post.id;
		const title = isActive ? activeDocument?.title : post.title.rendered;
		const renamePostCallback = async (inputValue) => {
			if (inputValue === title) resetEditMode();
			try {
				if (isActive) await rename(inputValue);
				else await updatePost.mutateAsync({
					id: post.id,
					title: inputValue
				});
			} catch {
				setError();
			} finally {
				resetEditMode();
			}
		};
		return /* @__PURE__ */ react.createElement(EditModeTemplate, {
			postTitle: title,
			isLoading: updatePost.isPending,
			callback: renamePostCallback
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-reverse-html-entities.ts
	function useReverseHtmlEntities(escapedHTML = "") {
		return (0, react.useMemo)(() => {
			const textarea = document.createElement("textarea");
			textarea.innerHTML = escapedHTML;
			const { value } = textarea;
			textarea.remove();
			return value;
		}, [escapedHTML]);
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/shared/page-title-and-status.tsx
	var PageStatus = ({ status }) => {
		if ("publish" === status) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			component: "span",
			variant: "body2",
			color: "text.secondary",
			sx: {
				textTransform: "capitalize",
				fontStyle: "italic",
				whiteSpace: "nowrap",
				flexBasis: "content"
			}
		}, "(", status, ")");
	};
	var PageTitle = ({ title }) => {
		const modifiedTitle = useReverseHtmlEntities(title);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			component: "span",
			variant: "body2",
			color: "text.secondary",
			noWrap: true,
			sx: { flexBasis: "auto" }
		}, modifiedTitle);
	};
	function PageTitleAndStatus({ title, status }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { display: "flex" }, /* @__PURE__ */ react.createElement(PageTitle, { title }), "\xA0", /* @__PURE__ */ react.createElement(PageStatus, { status }));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/actions-menu/action-menu-item.tsx
	function ActionMenuItem({ title, icon: Icon, MenuItemProps }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, { ...MenuItemProps }, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemIcon, { sx: { color: "inherit" } }, /* @__PURE__ */ react.createElement(Icon, null)), /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, { primary: title }));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/actions-menu/actions/delete.tsx
	function Delete({ post }) {
		const [isDialogOpen, setIsDialogOpen] = (0, react.useState)(false);
		const isPostActive = (0, _elementor_editor_documents.__useActiveDocument)()?.id === post.id;
		const isDisabled = !post.user_can.delete || post.isHome || isPostActive;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ActionMenuItem, {
			title: (0, _wordpress_i18n.__)("Delete", "elementor"),
			icon: _elementor_icons.TrashIcon,
			MenuItemProps: {
				disabled: isDisabled,
				onClick: () => setIsDialogOpen(true),
				sx: { "&:hover": { color: "error.main" } }
			}
		}), isDialogOpen && /* @__PURE__ */ react.createElement(DeleteDialog, {
			post,
			setIsDialogOpen
		}));
	}
	function DeleteDialog({ post, setIsDialogOpen }) {
		const { type } = usePostListContext();
		const { deletePost } = usePostActions(type);
		const { setError } = usePostListContext();
		const dialogTitle = (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Delete \"%s\"?", "elementor"), post.title.rendered);
		const deletePage = async () => {
			try {
				await deletePost.mutateAsync(post.id);
			} catch {
				setError();
				setIsDialogOpen(false);
			}
		};
		const handleCancel = () => {
			if (deletePost.isPending) return;
			setIsDialogOpen(false);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
			open: true,
			onClose: handleCancel,
			"aria-labelledby": "delete-dialog"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.DialogTitle, { noWrap: true }, dialogTitle), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.DialogContentText, null, (0, _wordpress_i18n.__)("The page and its content will be deleted forever and we won’t be able to recover them.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "secondary",
			onClick: handleCancel,
			disabled: deletePost.isPending
		}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "error",
			onClick: deletePage,
			disabled: deletePost.isPending
		}, !deletePost.isPending ? (0, _wordpress_i18n.__)("Delete", "elementor") : /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, null))));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/actions-menu/actions/duplicate.tsx
	function Duplicate({ post, popupState }) {
		const { setEditMode } = usePostListContext();
		const { data: user } = useUser();
		const onClick = () => {
			popupState.close();
			setEditMode({
				mode: "duplicate",
				details: {
					postId: post.id,
					title: post.title.rendered
				}
			});
		};
		const isDisabled = !user?.capabilities?.edit_pages;
		return /* @__PURE__ */ react.createElement(ActionMenuItem, {
			title: (0, _wordpress_i18n.__)("Duplicate", "elementor"),
			icon: _elementor_icons.CopyIcon,
			MenuItemProps: {
				disabled: isDisabled,
				onClick
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/actions-menu/actions/rename.tsx
	function Rename({ post }) {
		const { setEditMode } = usePostListContext();
		return /* @__PURE__ */ react.createElement(ActionMenuItem, {
			title: (0, _wordpress_i18n.__)("Rename", "elementor"),
			icon: _elementor_icons.EraseIcon,
			MenuItemProps: {
				disabled: !post.user_can.edit,
				onClick: () => {
					setEditMode({
						mode: "rename",
						details: { postId: post.id }
					});
				}
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-homepage-actions.ts
	function useHomepageActions() {
		const invalidateSettings = useInvalidateSettings();
		const onSuccess = async () => invalidateSettings({ exact: true });
		return { updateSettingsMutation: (0, _elementor_query.useMutation)({
			mutationFn: (settings) => updateSettings(settings),
			onSuccess
		}) };
	}
	function useInvalidateSettings() {
		const queryClient = (0, _elementor_query.useQueryClient)();
		return (options = {}) => {
			const queryKey = settingsQueryKey();
			return queryClient.invalidateQueries({ queryKey }, options);
		};
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/actions-menu/actions/set-home.tsx
	function SetHome({ post, closeMenu }) {
		const { updateSettingsMutation } = useHomepageActions();
		const { setError } = usePostListContext();
		const { data: user } = useUser();
		const handleClick = async () => {
			try {
				await updateSettingsMutation.mutateAsync({
					show_on_front: "page",
					page_on_front: post.id
				});
			} catch {
				setError();
			} finally {
				closeMenu();
			}
		};
		const canManageOptions = !!user?.capabilities?.manage_options;
		const isPostPublished = post.status === "publish";
		const isPostHomepage = !!post.isHome;
		const isDisabled = !canManageOptions || isPostHomepage || !isPostPublished || updateSettingsMutation.isPending;
		return /* @__PURE__ */ react.createElement(ActionMenuItem, {
			title: (0, _wordpress_i18n.__)("Set as homepage", "elementor"),
			icon: !updateSettingsMutation.isPending ? _elementor_icons.HomeIcon : _elementor_ui.CircularProgress,
			MenuItemProps: {
				disabled: isDisabled,
				onClick: handleClick
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/actions-menu/actions/view.tsx
	function View({ post }) {
		const { type } = usePostListContext();
		const title = (0, _wordpress_i18n.__)("View %s", "elementor").replace("%s", postTypesMap[type].labels.singular_name);
		return /* @__PURE__ */ react.createElement(ActionMenuItem, {
			title,
			icon: _elementor_icons.EyeIcon,
			MenuItemProps: { onClick: () => window.open(post.link, "_blank") }
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/list-items/list-item-view.tsx
	var DisabledPostTooltip = ({ children, isDisabled }) => {
		if (isDisabled) {
			const title = /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "caption" }, "You cannot edit this page.", /* @__PURE__ */ react.createElement("br", null), "To edit it directly, contact the site owner");
			return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
				title,
				placement: "bottom",
				arrow: false
			}, children);
		}
		return /* @__PURE__ */ react.createElement(react.Fragment, null, children);
	};
	function ListItemView({ post }) {
		const activeDocument = (0, _elementor_editor_documents.__useActiveDocument)();
		const navigateToDocument = (0, _elementor_editor_documents.__useNavigateToDocument)();
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: "post-actions",
			disableAutoFocus: true
		});
		const isActive = activeDocument?.id === post.id;
		const status = isActive ? activeDocument?.status.value : post.status;
		const title = isActive ? activeDocument?.title : post.title.rendered;
		const isDisabled = !post.user_can.edit;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(DisabledPostTooltip, { isDisabled }, /* @__PURE__ */ react.createElement(_elementor_ui.ListItem, {
			disablePadding: true,
			secondaryAction: /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
				value: true,
				size: "small",
				...(0, _elementor_ui.bindTrigger)(popupState)
			}, /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "small" }))
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemButton, {
			selected: isActive,
			disabled: isDisabled,
			onClick: () => {
				if (!isActive) navigateToDocument(post.id);
			},
			dense: true
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, { disableTypography: true }, /* @__PURE__ */ react.createElement(PageTitleAndStatus, {
			title,
			status
		})), post.isHome && /* @__PURE__ */ react.createElement(_elementor_icons.HomeIcon, {
			titleAccess: (0, _wordpress_i18n.__)("Homepage", "elementor"),
			color: "disabled"
		})))), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, {
			PaperProps: { sx: {
				mt: 2,
				width: 200
			} },
			MenuListProps: { dense: true },
			...(0, _elementor_ui.bindMenu)(popupState)
		}, /* @__PURE__ */ react.createElement(Rename, { post }), /* @__PURE__ */ react.createElement(Duplicate, {
			post,
			popupState
		}), /* @__PURE__ */ react.createElement(Delete, { post }), /* @__PURE__ */ react.createElement(View, { post }), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(SetHome, {
			post,
			closeMenu: () => popupState.close()
		})));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/post-list-item.tsx
	function PostListItem$1({ post }) {
		const { editMode } = usePostListContext();
		if ("rename" === editMode.mode && post?.id && post?.id === editMode.details.postId) return /* @__PURE__ */ react.createElement(ListItemRename, { post });
		if ("create" === editMode.mode && !post) return /* @__PURE__ */ react.createElement(ListItemCreate, null);
		if ("duplicate" === editMode.mode && !post) return /* @__PURE__ */ react.createElement(ListItemDuplicate, null);
		if (!post) return null;
		return /* @__PURE__ */ react.createElement(ListItemView, { post });
	}
	__name(PostListItem$1, "PostListItem");

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/posts-list/posts-collapsible-list.tsx
	function PostsCollapsibleList({ isOpenByDefault = false }) {
		const { type, editMode } = usePostListContext();
		const { data: { posts, total }, isLoading: postsLoading, isError: postsError, fetchNextPage, hasNextPage, isFetchingNextPage } = usePosts(type);
		const { data: homepageId } = useHomepage();
		if (postsError) return /* @__PURE__ */ react.createElement(ErrorState, null);
		if (!posts || postsLoading) return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { px: 5 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			justifyContent: "flex-end",
			alignItems: "center"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Skeleton, {
			sx: { my: 4 },
			animation: "wave",
			variant: "rounded",
			width: "110px",
			height: "28px"
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_ui.Skeleton, {
			sx: { my: 3 },
			animation: "wave",
			variant: "rounded",
			width: "100%",
			height: "24px"
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Skeleton, {
			sx: { my: 3 },
			animation: "wave",
			variant: "rounded",
			width: "70%",
			height: "24px"
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Skeleton, {
			sx: { my: 3 },
			animation: "wave",
			variant: "rounded",
			width: "70%",
			height: "24px"
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Skeleton, {
			sx: { my: 3 },
			animation: "wave",
			variant: "rounded",
			width: "70%",
			height: "24px"
		})));
		const label = `${postTypesMap[type].labels.plural_name} (${total.toString()})`;
		const sortedPosts = posts.map((post) => {
			if (post.id === homepageId) return {
				...post,
				isHome: true
			};
			return post;
		}).sort((a, b) => {
			if (a.id === homepageId) return -1;
			if (b.id === homepageId) return 1;
			return 0;
		});
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			justifyContent: "flex-end",
			alignItems: "center",
			sx: {
				py: 1,
				px: 2
			}
		}, /* @__PURE__ */ react.createElement(AddNewButton, null)), /* @__PURE__ */ react.createElement(_elementor_ui.List, { dense: true }, /* @__PURE__ */ react.createElement(CollapsibleList, {
			label,
			Icon: _elementor_icons.PageTypeIcon,
			isOpenByDefault: isOpenByDefault || false
		}, sortedPosts.map((post) => {
			return /* @__PURE__ */ react.createElement(PostListItem$1, {
				key: post.id,
				post
			});
		}), ["duplicate", "create"].includes(editMode.mode) && /* @__PURE__ */ react.createElement(PostListItem$1, null), hasNextPage && /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "center"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			onClick: fetchNextPage,
			color: "secondary"
		}, isFetchingNextPage ? /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, null) : "Load More")))));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/shell.tsx
	var Shell = () => {
		const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = (0, react.useState)(false);
		return /* @__PURE__ */ react.createElement(_elementor_editor_panels.Panel, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeader, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeaderTitle, null, (0, _wordpress_i18n.__)("Pages", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelBody, null, /* @__PURE__ */ react.createElement(PostListContextProvider, {
			type: "page",
			setError: () => setIsErrorSnackbarOpen(true)
		}, /* @__PURE__ */ react.createElement(PostsCollapsibleList, { isOpenByDefault: true })), /* @__PURE__ */ react.createElement(ErrorSnackbar, {
			open: isErrorSnackbarOpen,
			onClose: () => setIsErrorSnackbarOpen(false)
		})));
	};

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/panel/panel.ts
	var { panel, usePanelStatus, usePanelActions } = (0, _elementor_editor_panels.createPanel)({
		id: "site-navigation-panel",
		component: Shell
	});

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-create-page.ts
	var endpointPath = "/elementor/v1/site-navigation/add-new-post";
	function useCreatePage() {
		const [isLoading, setIsLoading] = (0, react.useState)(false);
		return {
			create: () => {
				setIsLoading(true);
				return addNewPage().then((newPost) => newPost).finally(() => setIsLoading(false));
			},
			isLoading
		};
	}
	async function addNewPage() {
		return await (0, _wordpress_api_fetch.default)({
			path: endpointPath,
			method: "POST",
			data: { post_type: "page" }
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/top-bar/create-post-list-item.tsx
	function CreatePostListItem({ closePopup, ...props }) {
		const { create, isLoading } = useCreatePage();
		const navigateToDocument = (0, _elementor_editor_documents.__useNavigateToDocument)();
		const { data: user } = useUser();
		const { dispatchEvent, config } = (0, _elementor_events.useMixpanel)();
		return /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			disabled: isLoading || !user?.capabilities?.edit_pages,
			onClick: async () => {
				const eventName = config?.names?.editorOne?.topBarPageList;
				if (eventName) dispatchEvent?.(eventName, {
					window_name: config?.appTypes?.editor,
					interaction_type: config?.triggers?.click?.toLowerCase(),
					target_type: config?.targetTypes?.dropdownItem,
					target_name: config?.targetNames?.pageList?.addNewPage,
					interaction_result: config?.interactionResults?.create,
					target_location: config?.locations?.topBar?.replace(/\s+/g, "_").toLowerCase(),
					location_l1: config?.secondaryLocations?.pageListDropdown?.replace(/\s+/g, "_").toLowerCase(),
					location_l2: config?.targetTypes?.dropdownItem
				});
				const { id } = await create();
				closePopup();
				await navigateToDocument(id);
			},
			...props
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemIcon, null, isLoading ? /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, { size: "1.25rem" }) : /* @__PURE__ */ react.createElement(_elementor_icons.PlusIcon, { fontSize: "small" })), /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, {
			primaryTypographyProps: { variant: "body2" },
			primary: (0, _wordpress_i18n.__)("Add new page", "elementor")
		}));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/top-bar/indicator.tsx
	function Indicator({ title, status }) {
		return /* @__PURE__ */ react.createElement(Tooltip, { title }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			component: "span",
			direction: "row",
			alignItems: "center",
			spacing: .5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			component: "span",
			variant: "body2",
			sx: { maxWidth: "120px" },
			noWrap: true
		}, title), status.value !== "publish" && /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			component: "span",
			variant: "body2",
			sx: { fontStyle: "italic" }
		}, "(", status.label, ")")));
	}
	function Tooltip(props) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			PopperProps: { sx: { "&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom": { mt: 2.7 } } },
			...props
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/top-bar/chip-doc-type.tsx
	var iconsMap = getIconsMap();
	function DocTypeChip({ postType, docType, label }) {
		const color = "elementor_library" === postType ? "global" : "primary";
		const Icon = iconsMap[docType] || _elementor_icons.PostTypeIcon;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			component: "span",
			size: "small",
			variant: "outlined",
			label,
			"data-value": docType,
			color,
			icon: /* @__PURE__ */ react.createElement(Icon, null),
			sx: {
				ml: 1,
				cursor: "inherit"
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/top-bar/post-list-item.tsx
	function PostListItem({ post, closePopup, ...props }) {
		const navigateToDocument = (0, _elementor_editor_documents.__useNavigateToDocument)();
		const postTitle = useReverseHtmlEntities(post.title);
		const { dispatchEvent, config } = (0, _elementor_events.useMixpanel)();
		return /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			disabled: !post.user_can.edit,
			onClick: async () => {
				const eventName = config?.names?.editorOne?.topBarPageList;
				if (eventName) dispatchEvent?.(eventName, {
					window_name: config?.appTypes?.editor,
					interaction_type: config?.triggers?.click?.toLowerCase(),
					target_type: config?.targetTypes?.dropdownItem,
					target_name: postTitle,
					interaction_result: config?.interactionResults?.navigate,
					target_location: config?.locations?.topBar?.replace(/\s+/g, "_").toLowerCase(),
					location_l1: config?.secondaryLocations?.pageListDropdown?.replace(/\s+/g, "_").toLowerCase(),
					location_l2: config?.targetTypes?.dropdownItem
				});
				closePopup();
				await navigateToDocument(post.id);
			},
			...props
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, {
			sx: { flexGrow: 0 },
			primaryTypographyProps: {
				variant: "body2",
				noWrap: true
			},
			primary: postTitle
		}), /* @__PURE__ */ react.createElement(DocTypeChip, {
			postType: post.type.post_type,
			docType: post.type.doc_type,
			label: post.type.label
		}));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/components/top-bar/recently-edited.tsx
	function RecentlyEdited() {
		const activeDocument = (0, _elementor_editor_documents.__useActiveDocument)();
		const hostDocument = (0, _elementor_editor_documents.__useHostDocument)();
		const document = activeDocument && activeDocument.type.value !== "kit" ? activeDocument : hostDocument;
		const { data } = useRecentPosts();
		const getRecentPosts = () => {
			if (!data) return [];
			return data.filter((post) => post.id !== document?.id).splice(0, 6 - 1);
		};
		const recentPosts = getRecentPosts();
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: "elementor-v2-top-bar-recently-edited"
		});
		const documentTitle = useReverseHtmlEntities(document?.title);
		if (!document) return null;
		const buttonProps = (0, _elementor_ui.bindTrigger)(popupState);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			color: "inherit",
			size: "small",
			endIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ChevronDownIcon, { fontSize: "small" }),
			...buttonProps,
			onClick: (e) => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.documentNameDropdown, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.documentNameDropdown,
					trigger: config.triggers.dropdownClick,
					element: config.elements.dropdown
				});
				buttonProps.onClick(e);
			}
		}, /* @__PURE__ */ react.createElement(Indicator, {
			title: documentTitle,
			status: document.status
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, {
			MenuListProps: { subheader: /* @__PURE__ */ react.createElement(_elementor_ui.ListSubheader, {
				color: "primary",
				sx: {
					fontStyle: "italic",
					fontWeight: "300"
				}
			}, (0, _wordpress_i18n.__)("Recent", "elementor")) },
			PaperProps: { sx: {
				mt: 2.5,
				width: 320
			} },
			...(0, _elementor_ui.bindMenu)(popupState)
		}, recentPosts.map((post) => /* @__PURE__ */ react.createElement(PostListItem, {
			key: post.id,
			post,
			closePopup: popupState.close
		})), recentPosts.length === 0 && /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, { disabled: true }, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, {
			primaryTypographyProps: {
				variant: "caption",
				fontStyle: "italic"
			},
			primary: (0, _wordpress_i18n.__)("There are no other pages or templates on this site yet.", "elementor")
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { disabled: recentPosts.length === 0 }), /* @__PURE__ */ react.createElement(CreatePostListItem, { closePopup: popupState.close })));
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/env.ts
	var { env } = (0, _elementor_env.parseEnv)("@elementor/editor-site-navigation", (envData) => {
		return envData;
	});

//#endregion
//#region packages/packages/core/editor-site-navigation/src/hooks/use-toggle-button-props.ts
	function useToggleButtonProps() {
		const { isOpen: selectedState, isBlocked } = usePanelStatus();
		const { open, close } = usePanelActions();
		return {
			title: (0, _wordpress_i18n.__)("Pages", "elementor"),
			icon: _elementor_icons.PagesIcon,
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent("top_bar_pages", {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.elementorLogo,
					trigger: config.triggers.click,
					element: config.elements.buttonIcon
				});
				return selectedState ? close() : open();
			},
			selected: selectedState,
			disabled: isBlocked
		};
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/init.ts
	function init() {
		registerTopBarMenuItems();
		if (env.is_pages_panel_active) {
			(0, _elementor_editor_panels.registerPanel)(panel);
			registerButton();
		}
	}
	function registerTopBarMenuItems() {
		(0, _elementor_editor_app_bar.injectIntoPageIndication)({
			id: "document-recently-edited",
			component: RecentlyEdited
		});
	}
	function registerButton() {
		_elementor_editor_app_bar.toolsMenu.registerToggleAction({
			id: "toggle-site-navigation-panel",
			priority: 6,
			useProps: useToggleButtonProps
		});
	}

//#endregion
//#region packages/packages/core/editor-site-navigation/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		extendIconsMap: () => extendIconsMap,
		init: () => init
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorSiteNavigation = src_exports;

//#endregion
})(elementorV2.icons, elementorV2.editorAppBar, elementorV2.editorPanels, React, wp.i18n, elementorV2.ui, wp.apiFetch, elementorV2.query, elementorV2.editorDocuments, elementorV2.editorV1Adapters, elementorV2.events, elementorV2.env);
window.elementorV2.editorSiteNavigation?.init?.();
//# sourceMappingURL=editor-site-navigation.js.map