(function() {

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

//#region node_modules/zod/v3/helpers/util.js
	var util;
	(function(util) {
		util.assertEqual = (_) => {};
		function assertIs(_arg) {}
		util.assertIs = assertIs;
		function assertNever(_x) {
			throw new Error();
		}
		util.assertNever = assertNever;
		util.arrayToEnum = (items) => {
			const obj = {};
			for (const item of items) obj[item] = item;
			return obj;
		};
		util.getValidEnumValues = (obj) => {
			const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
			const filtered = {};
			for (const k of validKeys) filtered[k] = obj[k];
			return util.objectValues(filtered);
		};
		util.objectValues = (obj) => {
			return util.objectKeys(obj).map(function(e) {
				return obj[e];
			});
		};
		util.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
			const keys = [];
			for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
			return keys;
		};
		util.find = (arr, checker) => {
			for (const item of arr) if (checker(item)) return item;
		};
		util.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
		function joinValues(array, separator = " | ") {
			return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
		}
		util.joinValues = joinValues;
		util.jsonStringifyReplacer = (_, value) => {
			if (typeof value === "bigint") return value.toString();
			return value;
		};
	})(util || (util = {}));
	var objectUtil;
	(function(objectUtil) {
		objectUtil.mergeShapes = (first, second) => {
			return {
				...first,
				...second
			};
		};
	})(objectUtil || (objectUtil = {}));
	var ZodParsedType = util.arrayToEnum([
		"string",
		"nan",
		"number",
		"integer",
		"float",
		"boolean",
		"date",
		"bigint",
		"symbol",
		"function",
		"undefined",
		"null",
		"array",
		"object",
		"unknown",
		"promise",
		"void",
		"never",
		"map",
		"set"
	]);
	var getParsedType$1 = /* @__PURE__ */ __name((data) => {
		switch (typeof data) {
			case "undefined": return ZodParsedType.undefined;
			case "string": return ZodParsedType.string;
			case "number": return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
			case "boolean": return ZodParsedType.boolean;
			case "function": return ZodParsedType.function;
			case "bigint": return ZodParsedType.bigint;
			case "symbol": return ZodParsedType.symbol;
			case "object":
				if (Array.isArray(data)) return ZodParsedType.array;
				if (data === null) return ZodParsedType.null;
				if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
				if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
				if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
				if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
				return ZodParsedType.object;
			default: return ZodParsedType.unknown;
		}
	}, "getParsedType");

//#endregion
//#region node_modules/zod/v3/ZodError.js
	var ZodIssueCode$1 = util.arrayToEnum([
		"invalid_type",
		"invalid_literal",
		"custom",
		"invalid_union",
		"invalid_union_discriminator",
		"invalid_enum_value",
		"unrecognized_keys",
		"invalid_arguments",
		"invalid_return_type",
		"invalid_date",
		"invalid_string",
		"too_small",
		"too_big",
		"invalid_intersection_types",
		"not_multiple_of",
		"not_finite"
	]);
	var quotelessJson = (obj) => {
		return JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, "$1:");
	};
	var ZodError$1 = class ZodError$1 extends Error {
		static {
			__name(this, "ZodError");
		}
		get errors() {
			return this.issues;
		}
		constructor(issues) {
			super();
			this.issues = [];
			this.addIssue = (sub) => {
				this.issues = [...this.issues, sub];
			};
			this.addIssues = (subs = []) => {
				this.issues = [...this.issues, ...subs];
			};
			const actualProto = new.target.prototype;
			if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
			else this.__proto__ = actualProto;
			this.name = "ZodError";
			this.issues = issues;
		}
		format(_mapper) {
			const mapper = _mapper || function(issue) {
				return issue.message;
			};
			const fieldErrors = { _errors: [] };
			const processError = (error) => {
				for (const issue of error.issues) if (issue.code === "invalid_union") issue.unionErrors.map(processError);
				else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
				else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
				else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
				else {
					let curr = fieldErrors;
					let i = 0;
					while (i < issue.path.length) {
						const el = issue.path[i];
						if (!(i === issue.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
						else {
							curr[el] = curr[el] || { _errors: [] };
							curr[el]._errors.push(mapper(issue));
						}
						curr = curr[el];
						i++;
					}
				}
			};
			processError(this);
			return fieldErrors;
		}
		static assert(value) {
			if (!(value instanceof ZodError$1)) throw new Error(`Not a ZodError: ${value}`);
		}
		toString() {
			return this.message;
		}
		get message() {
			return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
		}
		get isEmpty() {
			return this.issues.length === 0;
		}
		flatten(mapper = (issue) => issue.message) {
			const fieldErrors = {};
			const formErrors = [];
			for (const sub of this.issues) if (sub.path.length > 0) {
				const firstEl = sub.path[0];
				fieldErrors[firstEl] = fieldErrors[firstEl] || [];
				fieldErrors[firstEl].push(mapper(sub));
			} else formErrors.push(mapper(sub));
			return {
				formErrors,
				fieldErrors
			};
		}
		get formErrors() {
			return this.flatten();
		}
	};
	ZodError$1.create = (issues) => {
		return new ZodError$1(issues);
	};

//#endregion
//#region node_modules/zod/v3/locales/en.js
	var errorMap = (issue, _ctx) => {
		let message;
		switch (issue.code) {
			case ZodIssueCode$1.invalid_type:
				if (issue.received === ZodParsedType.undefined) message = "Required";
				else message = `Expected ${issue.expected}, received ${issue.received}`;
				break;
			case ZodIssueCode$1.invalid_literal:
				message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
				break;
			case ZodIssueCode$1.unrecognized_keys:
				message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
				break;
			case ZodIssueCode$1.invalid_union:
				message = `Invalid input`;
				break;
			case ZodIssueCode$1.invalid_union_discriminator:
				message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
				break;
			case ZodIssueCode$1.invalid_enum_value:
				message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
				break;
			case ZodIssueCode$1.invalid_arguments:
				message = `Invalid function arguments`;
				break;
			case ZodIssueCode$1.invalid_return_type:
				message = `Invalid function return type`;
				break;
			case ZodIssueCode$1.invalid_date:
				message = `Invalid date`;
				break;
			case ZodIssueCode$1.invalid_string:
				if (typeof issue.validation === "object") if ("includes" in issue.validation) {
					message = `Invalid input: must include "${issue.validation.includes}"`;
					if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
				} else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
				else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
				else util.assertNever(issue.validation);
				else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
				else message = "Invalid";
				break;
			case ZodIssueCode$1.too_small:
				if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
				else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
				else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
				else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
				else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
				else message = "Invalid input";
				break;
			case ZodIssueCode$1.too_big:
				if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
				else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
				else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
				else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
				else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
				else message = "Invalid input";
				break;
			case ZodIssueCode$1.custom:
				message = `Invalid input`;
				break;
			case ZodIssueCode$1.invalid_intersection_types:
				message = `Intersection results could not be merged`;
				break;
			case ZodIssueCode$1.not_multiple_of:
				message = `Number must be a multiple of ${issue.multipleOf}`;
				break;
			case ZodIssueCode$1.not_finite:
				message = "Number must be finite";
				break;
			default:
				message = _ctx.defaultError;
				util.assertNever(issue);
		}
		return { message };
	};

//#endregion
//#region node_modules/zod/v3/errors.js
	var overrideErrorMap = errorMap;
	function setErrorMap$1(map) {
		overrideErrorMap = map;
	}
	__name(setErrorMap$1, "setErrorMap");
	function getErrorMap$1() {
		return overrideErrorMap;
	}
	__name(getErrorMap$1, "getErrorMap");

//#endregion
//#region node_modules/zod/v3/helpers/parseUtil.js
	var makeIssue = (params) => {
		const { data, path, errorMaps, issueData } = params;
		const fullPath = [...path, ...issueData.path || []];
		const fullIssue = {
			...issueData,
			path: fullPath
		};
		if (issueData.message !== void 0) return {
			...issueData,
			path: fullPath,
			message: issueData.message
		};
		let errorMessage = "";
		const maps = errorMaps.filter((m) => !!m).slice().reverse();
		for (const map of maps) errorMessage = map(fullIssue, {
			data,
			defaultError: errorMessage
		}).message;
		return {
			...issueData,
			path: fullPath,
			message: errorMessage
		};
	};
	var EMPTY_PATH = [];
	function addIssueToContext(ctx, issueData) {
		const overrideMap = getErrorMap$1();
		const issue = makeIssue({
			issueData,
			data: ctx.data,
			path: ctx.path,
			errorMaps: [
				ctx.common.contextualErrorMap,
				ctx.schemaErrorMap,
				overrideMap,
				overrideMap === errorMap ? void 0 : errorMap
			].filter((x) => !!x)
		});
		ctx.common.issues.push(issue);
	}
	var ParseStatus = class ParseStatus {
		constructor() {
			this.value = "valid";
		}
		dirty() {
			if (this.value === "valid") this.value = "dirty";
		}
		abort() {
			if (this.value !== "aborted") this.value = "aborted";
		}
		static mergeArray(status, results) {
			const arrayValue = [];
			for (const s of results) {
				if (s.status === "aborted") return INVALID;
				if (s.status === "dirty") status.dirty();
				arrayValue.push(s.value);
			}
			return {
				status: status.value,
				value: arrayValue
			};
		}
		static async mergeObjectAsync(status, pairs) {
			const syncPairs = [];
			for (const pair of pairs) {
				const key = await pair.key;
				const value = await pair.value;
				syncPairs.push({
					key,
					value
				});
			}
			return ParseStatus.mergeObjectSync(status, syncPairs);
		}
		static mergeObjectSync(status, pairs) {
			const finalObject = {};
			for (const pair of pairs) {
				const { key, value } = pair;
				if (key.status === "aborted") return INVALID;
				if (value.status === "aborted") return INVALID;
				if (key.status === "dirty") status.dirty();
				if (value.status === "dirty") status.dirty();
				if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
			}
			return {
				status: status.value,
				value: finalObject
			};
		}
	};
	var INVALID = Object.freeze({ status: "aborted" });
	var DIRTY = (value) => ({
		status: "dirty",
		value
	});
	var OK = (value) => ({
		status: "valid",
		value
	});
	var isAborted = (x) => x.status === "aborted";
	var isDirty = (x) => x.status === "dirty";
	var isValid = (x) => x.status === "valid";
	var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

//#endregion
//#region node_modules/zod/v3/helpers/errorUtil.js
	var errorUtil;
	(function(errorUtil) {
		errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
		errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
	})(errorUtil || (errorUtil = {}));

//#endregion
//#region node_modules/zod/v3/types.js
	var ParseInputLazyPath = class {
		constructor(parent, value, path, key) {
			this._cachedPath = [];
			this.parent = parent;
			this.data = value;
			this._path = path;
			this._key = key;
		}
		get path() {
			if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
			else this._cachedPath.push(...this._path, this._key);
			return this._cachedPath;
		}
	};
	var handleResult = (ctx, result) => {
		if (isValid(result)) return {
			success: true,
			data: result.value
		};
		else {
			if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
			return {
				success: false,
				get error() {
					if (this._error) return this._error;
					const error = new ZodError$1(ctx.common.issues);
					this._error = error;
					return this._error;
				}
			};
		}
	};
	function processCreateParams(params) {
		if (!params) return {};
		const { errorMap, invalid_type_error, required_error, description } = params;
		if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
		if (errorMap) return {
			errorMap,
			description
		};
		const customMap = (iss, ctx) => {
			const { message } = params;
			if (iss.code === "invalid_enum_value") return { message: message ?? ctx.defaultError };
			if (typeof ctx.data === "undefined") return { message: message ?? required_error ?? ctx.defaultError };
			if (iss.code !== "invalid_type") return { message: ctx.defaultError };
			return { message: message ?? invalid_type_error ?? ctx.defaultError };
		};
		return {
			errorMap: customMap,
			description
		};
	}
	var ZodType$1 = class {
		static {
			__name(this, "ZodType");
		}
		get description() {
			return this._def.description;
		}
		_getType(input) {
			return getParsedType$1(input.data);
		}
		_getOrReturnCtx(input, ctx) {
			return ctx || {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType$1(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent
			};
		}
		_processInputParams(input) {
			return {
				status: new ParseStatus(),
				ctx: {
					common: input.parent.common,
					data: input.data,
					parsedType: getParsedType$1(input.data),
					schemaErrorMap: this._def.errorMap,
					path: input.path,
					parent: input.parent
				}
			};
		}
		_parseSync(input) {
			const result = this._parse(input);
			if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
			return result;
		}
		_parseAsync(input) {
			const result = this._parse(input);
			return Promise.resolve(result);
		}
		parse(data, params) {
			const result = this.safeParse(data, params);
			if (result.success) return result.data;
			throw result.error;
		}
		safeParse(data, params) {
			const ctx = {
				common: {
					issues: [],
					async: params?.async ?? false,
					contextualErrorMap: params?.errorMap
				},
				path: params?.path || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data,
				parsedType: getParsedType$1(data)
			};
			const result = this._parseSync({
				data,
				path: ctx.path,
				parent: ctx
			});
			return handleResult(ctx, result);
		}
		"~validate"(data) {
			const ctx = {
				common: {
					issues: [],
					async: !!this["~standard"].async
				},
				path: [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data,
				parsedType: getParsedType$1(data)
			};
			if (!this["~standard"].async) try {
				const result = this._parseSync({
					data,
					path: [],
					parent: ctx
				});
				return isValid(result) ? { value: result.value } : { issues: ctx.common.issues };
			} catch (err) {
				if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
				ctx.common = {
					issues: [],
					async: true
				};
			}
			return this._parseAsync({
				data,
				path: [],
				parent: ctx
			}).then((result) => isValid(result) ? { value: result.value } : { issues: ctx.common.issues });
		}
		async parseAsync(data, params) {
			const result = await this.safeParseAsync(data, params);
			if (result.success) return result.data;
			throw result.error;
		}
		async safeParseAsync(data, params) {
			const ctx = {
				common: {
					issues: [],
					contextualErrorMap: params?.errorMap,
					async: true
				},
				path: params?.path || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data,
				parsedType: getParsedType$1(data)
			};
			const maybeAsyncResult = this._parse({
				data,
				path: ctx.path,
				parent: ctx
			});
			const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
			return handleResult(ctx, result);
		}
		refine(check, message) {
			const getIssueProperties = (val) => {
				if (typeof message === "string" || typeof message === "undefined") return { message };
				else if (typeof message === "function") return message(val);
				else return message;
			};
			return this._refinement((val, ctx) => {
				const result = check(val);
				const setError = () => ctx.addIssue({
					code: ZodIssueCode$1.custom,
					...getIssueProperties(val)
				});
				if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data) => {
					if (!data) {
						setError();
						return false;
					} else return true;
				});
				if (!result) {
					setError();
					return false;
				} else return true;
			});
		}
		refinement(check, refinementData) {
			return this._refinement((val, ctx) => {
				if (!check(val)) {
					ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
					return false;
				} else return true;
			});
		}
		_refinement(refinement) {
			return new ZodEffects({
				schema: this,
				typeName: ZodFirstPartyTypeKind.ZodEffects,
				effect: {
					type: "refinement",
					refinement
				}
			});
		}
		superRefine(refinement) {
			return this._refinement(refinement);
		}
		constructor(def) {
			/** Alias of safeParseAsync */
			this.spa = this.safeParseAsync;
			this._def = def;
			this.parse = this.parse.bind(this);
			this.safeParse = this.safeParse.bind(this);
			this.parseAsync = this.parseAsync.bind(this);
			this.safeParseAsync = this.safeParseAsync.bind(this);
			this.spa = this.spa.bind(this);
			this.refine = this.refine.bind(this);
			this.refinement = this.refinement.bind(this);
			this.superRefine = this.superRefine.bind(this);
			this.optional = this.optional.bind(this);
			this.nullable = this.nullable.bind(this);
			this.nullish = this.nullish.bind(this);
			this.array = this.array.bind(this);
			this.promise = this.promise.bind(this);
			this.or = this.or.bind(this);
			this.and = this.and.bind(this);
			this.transform = this.transform.bind(this);
			this.brand = this.brand.bind(this);
			this.default = this.default.bind(this);
			this.catch = this.catch.bind(this);
			this.describe = this.describe.bind(this);
			this.pipe = this.pipe.bind(this);
			this.readonly = this.readonly.bind(this);
			this.isNullable = this.isNullable.bind(this);
			this.isOptional = this.isOptional.bind(this);
			this["~standard"] = {
				version: 1,
				vendor: "zod",
				validate: (data) => this["~validate"](data)
			};
		}
		optional() {
			return ZodOptional$1.create(this, this._def);
		}
		nullable() {
			return ZodNullable$1.create(this, this._def);
		}
		nullish() {
			return this.nullable().optional();
		}
		array() {
			return ZodArray$1.create(this);
		}
		promise() {
			return ZodPromise$1.create(this, this._def);
		}
		or(option) {
			return ZodUnion$1.create([this, option], this._def);
		}
		and(incoming) {
			return ZodIntersection$1.create(this, incoming, this._def);
		}
		transform(transform) {
			return new ZodEffects({
				...processCreateParams(this._def),
				schema: this,
				typeName: ZodFirstPartyTypeKind.ZodEffects,
				effect: {
					type: "transform",
					transform
				}
			});
		}
		default(def) {
			const defaultValueFunc = typeof def === "function" ? def : () => def;
			return new ZodDefault$1({
				...processCreateParams(this._def),
				innerType: this,
				defaultValue: defaultValueFunc,
				typeName: ZodFirstPartyTypeKind.ZodDefault
			});
		}
		brand() {
			return new ZodBranded({
				typeName: ZodFirstPartyTypeKind.ZodBranded,
				type: this,
				...processCreateParams(this._def)
			});
		}
		catch(def) {
			const catchValueFunc = typeof def === "function" ? def : () => def;
			return new ZodCatch$1({
				...processCreateParams(this._def),
				innerType: this,
				catchValue: catchValueFunc,
				typeName: ZodFirstPartyTypeKind.ZodCatch
			});
		}
		describe(description) {
			const This = this.constructor;
			return new This({
				...this._def,
				description
			});
		}
		pipe(target) {
			return ZodPipeline.create(this, target);
		}
		readonly() {
			return ZodReadonly$1.create(this);
		}
		isOptional() {
			return this.safeParse(void 0).success;
		}
		isNullable() {
			return this.safeParse(null).success;
		}
	};
	var cuidRegex = /^c[^\s-]{8,}$/i;
	var cuid2Regex = /^[0-9a-z]+$/;
	var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
	var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
	var nanoidRegex = /^[a-z0-9_-]{21}$/i;
	var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
	var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
	var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
	var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
	var emojiRegex;
	var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
	var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
	var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
	var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
	var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
	var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
	var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
	var dateRegex = new RegExp(`^${dateRegexSource}$`);
	function timeRegexSource(args) {
		let secondsRegexSource = `[0-5]\\d`;
		if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
		else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
		const secondsQuantifier = args.precision ? "+" : "?";
		return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
	}
	function timeRegex(args) {
		return new RegExp(`^${timeRegexSource(args)}$`);
	}
	function datetimeRegex(args) {
		let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
		const opts = [];
		opts.push(args.local ? `Z?` : `Z`);
		if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
		regex = `${regex}(${opts.join("|")})`;
		return new RegExp(`^${regex}$`);
	}
	function isValidIP(ip, version) {
		if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
		if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
		return false;
	}
	function isValidJWT$1(jwt, alg) {
		if (!jwtRegex.test(jwt)) return false;
		try {
			const [header] = jwt.split(".");
			if (!header) return false;
			const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
			const decoded = JSON.parse(atob(base64));
			if (typeof decoded !== "object" || decoded === null) return false;
			if ("typ" in decoded && decoded?.typ !== "JWT") return false;
			if (!decoded.alg) return false;
			if (alg && decoded.alg !== alg) return false;
			return true;
		} catch {
			return false;
		}
	}
	__name(isValidJWT$1, "isValidJWT");
	function isValidCidr(ip, version) {
		if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
		if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
		return false;
	}
	var ZodString$1 = class ZodString$1 extends ZodType$1 {
		static {
			__name(this, "ZodString");
		}
		_parse(input) {
			if (this._def.coerce) input.data = String(input.data);
			if (this._getType(input) !== ZodParsedType.string) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.string,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const status = new ParseStatus();
			let ctx = void 0;
			for (const check of this._def.checks) if (check.kind === "min") {
				if (input.data.length < check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_small,
						minimum: check.value,
						type: "string",
						inclusive: true,
						exact: false,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "max") {
				if (input.data.length > check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_big,
						maximum: check.value,
						type: "string",
						inclusive: true,
						exact: false,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "length") {
				const tooBig = input.data.length > check.value;
				const tooSmall = input.data.length < check.value;
				if (tooBig || tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx);
					if (tooBig) addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_big,
						maximum: check.value,
						type: "string",
						inclusive: true,
						exact: true,
						message: check.message
					});
					else if (tooSmall) addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_small,
						minimum: check.value,
						type: "string",
						inclusive: true,
						exact: true,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "email") {
				if (!emailRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "email",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "emoji") {
				if (!emojiRegex) emojiRegex = new RegExp(_emojiRegex, "u");
				if (!emojiRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "emoji",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "uuid") {
				if (!uuidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "uuid",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "nanoid") {
				if (!nanoidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "nanoid",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "cuid") {
				if (!cuidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "cuid",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "cuid2") {
				if (!cuid2Regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "cuid2",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "ulid") {
				if (!ulidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "ulid",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "url") try {
				new URL(input.data);
			} catch {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "url",
					code: ZodIssueCode$1.invalid_string,
					message: check.message
				});
				status.dirty();
			}
			else if (check.kind === "regex") {
				check.regex.lastIndex = 0;
				if (!check.regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "regex",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "trim") input.data = input.data.trim();
			else if (check.kind === "includes") {
				if (!input.data.includes(check.value, check.position)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.invalid_string,
						validation: {
							includes: check.value,
							position: check.position
						},
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
			else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
			else if (check.kind === "startsWith") {
				if (!input.data.startsWith(check.value)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.invalid_string,
						validation: { startsWith: check.value },
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "endsWith") {
				if (!input.data.endsWith(check.value)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.invalid_string,
						validation: { endsWith: check.value },
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "datetime") {
				if (!datetimeRegex(check).test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.invalid_string,
						validation: "datetime",
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "date") {
				if (!dateRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.invalid_string,
						validation: "date",
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "time") {
				if (!timeRegex(check).test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.invalid_string,
						validation: "time",
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "duration") {
				if (!durationRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "duration",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "ip") {
				if (!isValidIP(input.data, check.version)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "ip",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "jwt") {
				if (!isValidJWT$1(input.data, check.alg)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "jwt",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "cidr") {
				if (!isValidCidr(input.data, check.version)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "cidr",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "base64") {
				if (!base64Regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "base64",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "base64url") {
				if (!base64urlRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "base64url",
						code: ZodIssueCode$1.invalid_string,
						message: check.message
					});
					status.dirty();
				}
			} else util.assertNever(check);
			return {
				status: status.value,
				value: input.data
			};
		}
		_regex(regex, validation, message) {
			return this.refinement((data) => regex.test(data), {
				validation,
				code: ZodIssueCode$1.invalid_string,
				...errorUtil.errToObj(message)
			});
		}
		_addCheck(check) {
			return new ZodString$1({
				...this._def,
				checks: [...this._def.checks, check]
			});
		}
		email(message) {
			return this._addCheck({
				kind: "email",
				...errorUtil.errToObj(message)
			});
		}
		url(message) {
			return this._addCheck({
				kind: "url",
				...errorUtil.errToObj(message)
			});
		}
		emoji(message) {
			return this._addCheck({
				kind: "emoji",
				...errorUtil.errToObj(message)
			});
		}
		uuid(message) {
			return this._addCheck({
				kind: "uuid",
				...errorUtil.errToObj(message)
			});
		}
		nanoid(message) {
			return this._addCheck({
				kind: "nanoid",
				...errorUtil.errToObj(message)
			});
		}
		cuid(message) {
			return this._addCheck({
				kind: "cuid",
				...errorUtil.errToObj(message)
			});
		}
		cuid2(message) {
			return this._addCheck({
				kind: "cuid2",
				...errorUtil.errToObj(message)
			});
		}
		ulid(message) {
			return this._addCheck({
				kind: "ulid",
				...errorUtil.errToObj(message)
			});
		}
		base64(message) {
			return this._addCheck({
				kind: "base64",
				...errorUtil.errToObj(message)
			});
		}
		base64url(message) {
			return this._addCheck({
				kind: "base64url",
				...errorUtil.errToObj(message)
			});
		}
		jwt(options) {
			return this._addCheck({
				kind: "jwt",
				...errorUtil.errToObj(options)
			});
		}
		ip(options) {
			return this._addCheck({
				kind: "ip",
				...errorUtil.errToObj(options)
			});
		}
		cidr(options) {
			return this._addCheck({
				kind: "cidr",
				...errorUtil.errToObj(options)
			});
		}
		datetime(options) {
			if (typeof options === "string") return this._addCheck({
				kind: "datetime",
				precision: null,
				offset: false,
				local: false,
				message: options
			});
			return this._addCheck({
				kind: "datetime",
				precision: typeof options?.precision === "undefined" ? null : options?.precision,
				offset: options?.offset ?? false,
				local: options?.local ?? false,
				...errorUtil.errToObj(options?.message)
			});
		}
		date(message) {
			return this._addCheck({
				kind: "date",
				message
			});
		}
		time(options) {
			if (typeof options === "string") return this._addCheck({
				kind: "time",
				precision: null,
				message: options
			});
			return this._addCheck({
				kind: "time",
				precision: typeof options?.precision === "undefined" ? null : options?.precision,
				...errorUtil.errToObj(options?.message)
			});
		}
		duration(message) {
			return this._addCheck({
				kind: "duration",
				...errorUtil.errToObj(message)
			});
		}
		regex(regex, message) {
			return this._addCheck({
				kind: "regex",
				regex,
				...errorUtil.errToObj(message)
			});
		}
		includes(value, options) {
			return this._addCheck({
				kind: "includes",
				value,
				position: options?.position,
				...errorUtil.errToObj(options?.message)
			});
		}
		startsWith(value, message) {
			return this._addCheck({
				kind: "startsWith",
				value,
				...errorUtil.errToObj(message)
			});
		}
		endsWith(value, message) {
			return this._addCheck({
				kind: "endsWith",
				value,
				...errorUtil.errToObj(message)
			});
		}
		min(minLength, message) {
			return this._addCheck({
				kind: "min",
				value: minLength,
				...errorUtil.errToObj(message)
			});
		}
		max(maxLength, message) {
			return this._addCheck({
				kind: "max",
				value: maxLength,
				...errorUtil.errToObj(message)
			});
		}
		length(len, message) {
			return this._addCheck({
				kind: "length",
				value: len,
				...errorUtil.errToObj(message)
			});
		}
		/**
		* Equivalent to `.min(1)`
		*/
		nonempty(message) {
			return this.min(1, errorUtil.errToObj(message));
		}
		trim() {
			return new ZodString$1({
				...this._def,
				checks: [...this._def.checks, { kind: "trim" }]
			});
		}
		toLowerCase() {
			return new ZodString$1({
				...this._def,
				checks: [...this._def.checks, { kind: "toLowerCase" }]
			});
		}
		toUpperCase() {
			return new ZodString$1({
				...this._def,
				checks: [...this._def.checks, { kind: "toUpperCase" }]
			});
		}
		get isDatetime() {
			return !!this._def.checks.find((ch) => ch.kind === "datetime");
		}
		get isDate() {
			return !!this._def.checks.find((ch) => ch.kind === "date");
		}
		get isTime() {
			return !!this._def.checks.find((ch) => ch.kind === "time");
		}
		get isDuration() {
			return !!this._def.checks.find((ch) => ch.kind === "duration");
		}
		get isEmail() {
			return !!this._def.checks.find((ch) => ch.kind === "email");
		}
		get isURL() {
			return !!this._def.checks.find((ch) => ch.kind === "url");
		}
		get isEmoji() {
			return !!this._def.checks.find((ch) => ch.kind === "emoji");
		}
		get isUUID() {
			return !!this._def.checks.find((ch) => ch.kind === "uuid");
		}
		get isNANOID() {
			return !!this._def.checks.find((ch) => ch.kind === "nanoid");
		}
		get isCUID() {
			return !!this._def.checks.find((ch) => ch.kind === "cuid");
		}
		get isCUID2() {
			return !!this._def.checks.find((ch) => ch.kind === "cuid2");
		}
		get isULID() {
			return !!this._def.checks.find((ch) => ch.kind === "ulid");
		}
		get isIP() {
			return !!this._def.checks.find((ch) => ch.kind === "ip");
		}
		get isCIDR() {
			return !!this._def.checks.find((ch) => ch.kind === "cidr");
		}
		get isBase64() {
			return !!this._def.checks.find((ch) => ch.kind === "base64");
		}
		get isBase64url() {
			return !!this._def.checks.find((ch) => ch.kind === "base64url");
		}
		get minLength() {
			let min = null;
			for (const ch of this._def.checks) if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
			return min;
		}
		get maxLength() {
			let max = null;
			for (const ch of this._def.checks) if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return max;
		}
	};
	ZodString$1.create = (params) => {
		return new ZodString$1({
			checks: [],
			typeName: ZodFirstPartyTypeKind.ZodString,
			coerce: params?.coerce ?? false,
			...processCreateParams(params)
		});
	};
	function floatSafeRemainder$1(val, step) {
		const valDecCount = (val.toString().split(".")[1] || "").length;
		const stepDecCount = (step.toString().split(".")[1] || "").length;
		const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
		return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
	}
	__name(floatSafeRemainder$1, "floatSafeRemainder");
	var ZodNumber$1 = class ZodNumber$1 extends ZodType$1 {
		static {
			__name(this, "ZodNumber");
		}
		constructor() {
			super(...arguments);
			this.min = this.gte;
			this.max = this.lte;
			this.step = this.multipleOf;
		}
		_parse(input) {
			if (this._def.coerce) input.data = Number(input.data);
			if (this._getType(input) !== ZodParsedType.number) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.number,
					received: ctx.parsedType
				});
				return INVALID;
			}
			let ctx = void 0;
			const status = new ParseStatus();
			for (const check of this._def.checks) if (check.kind === "int") {
				if (!util.isInteger(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.invalid_type,
						expected: "integer",
						received: "float",
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "min") {
				if (check.inclusive ? input.data < check.value : input.data <= check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_small,
						minimum: check.value,
						type: "number",
						inclusive: check.inclusive,
						exact: false,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "max") {
				if (check.inclusive ? input.data > check.value : input.data >= check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_big,
						maximum: check.value,
						type: "number",
						inclusive: check.inclusive,
						exact: false,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "multipleOf") {
				if (floatSafeRemainder$1(input.data, check.value) !== 0) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.not_multiple_of,
						multipleOf: check.value,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "finite") {
				if (!Number.isFinite(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.not_finite,
						message: check.message
					});
					status.dirty();
				}
			} else util.assertNever(check);
			return {
				status: status.value,
				value: input.data
			};
		}
		gte(value, message) {
			return this.setLimit("min", value, true, errorUtil.toString(message));
		}
		gt(value, message) {
			return this.setLimit("min", value, false, errorUtil.toString(message));
		}
		lte(value, message) {
			return this.setLimit("max", value, true, errorUtil.toString(message));
		}
		lt(value, message) {
			return this.setLimit("max", value, false, errorUtil.toString(message));
		}
		setLimit(kind, value, inclusive, message) {
			return new ZodNumber$1({
				...this._def,
				checks: [...this._def.checks, {
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message)
				}]
			});
		}
		_addCheck(check) {
			return new ZodNumber$1({
				...this._def,
				checks: [...this._def.checks, check]
			});
		}
		int(message) {
			return this._addCheck({
				kind: "int",
				message: errorUtil.toString(message)
			});
		}
		positive(message) {
			return this._addCheck({
				kind: "min",
				value: 0,
				inclusive: false,
				message: errorUtil.toString(message)
			});
		}
		negative(message) {
			return this._addCheck({
				kind: "max",
				value: 0,
				inclusive: false,
				message: errorUtil.toString(message)
			});
		}
		nonpositive(message) {
			return this._addCheck({
				kind: "max",
				value: 0,
				inclusive: true,
				message: errorUtil.toString(message)
			});
		}
		nonnegative(message) {
			return this._addCheck({
				kind: "min",
				value: 0,
				inclusive: true,
				message: errorUtil.toString(message)
			});
		}
		multipleOf(value, message) {
			return this._addCheck({
				kind: "multipleOf",
				value,
				message: errorUtil.toString(message)
			});
		}
		finite(message) {
			return this._addCheck({
				kind: "finite",
				message: errorUtil.toString(message)
			});
		}
		safe(message) {
			return this._addCheck({
				kind: "min",
				inclusive: true,
				value: Number.MIN_SAFE_INTEGER,
				message: errorUtil.toString(message)
			})._addCheck({
				kind: "max",
				inclusive: true,
				value: Number.MAX_SAFE_INTEGER,
				message: errorUtil.toString(message)
			});
		}
		get minValue() {
			let min = null;
			for (const ch of this._def.checks) if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
			return min;
		}
		get maxValue() {
			let max = null;
			for (const ch of this._def.checks) if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return max;
		}
		get isInt() {
			return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
		}
		get isFinite() {
			let max = null;
			let min = null;
			for (const ch of this._def.checks) if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
			else if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			} else if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return Number.isFinite(min) && Number.isFinite(max);
		}
	};
	ZodNumber$1.create = (params) => {
		return new ZodNumber$1({
			checks: [],
			typeName: ZodFirstPartyTypeKind.ZodNumber,
			coerce: params?.coerce || false,
			...processCreateParams(params)
		});
	};
	var ZodBigInt$1 = class ZodBigInt$1 extends ZodType$1 {
		static {
			__name(this, "ZodBigInt");
		}
		constructor() {
			super(...arguments);
			this.min = this.gte;
			this.max = this.lte;
		}
		_parse(input) {
			if (this._def.coerce) try {
				input.data = BigInt(input.data);
			} catch {
				return this._getInvalidInput(input);
			}
			if (this._getType(input) !== ZodParsedType.bigint) return this._getInvalidInput(input);
			let ctx = void 0;
			const status = new ParseStatus();
			for (const check of this._def.checks) if (check.kind === "min") {
				if (check.inclusive ? input.data < check.value : input.data <= check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_small,
						type: "bigint",
						minimum: check.value,
						inclusive: check.inclusive,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "max") {
				if (check.inclusive ? input.data > check.value : input.data >= check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_big,
						type: "bigint",
						maximum: check.value,
						inclusive: check.inclusive,
						message: check.message
					});
					status.dirty();
				}
			} else if (check.kind === "multipleOf") {
				if (input.data % check.value !== BigInt(0)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.not_multiple_of,
						multipleOf: check.value,
						message: check.message
					});
					status.dirty();
				}
			} else util.assertNever(check);
			return {
				status: status.value,
				value: input.data
			};
		}
		_getInvalidInput(input) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode$1.invalid_type,
				expected: ZodParsedType.bigint,
				received: ctx.parsedType
			});
			return INVALID;
		}
		gte(value, message) {
			return this.setLimit("min", value, true, errorUtil.toString(message));
		}
		gt(value, message) {
			return this.setLimit("min", value, false, errorUtil.toString(message));
		}
		lte(value, message) {
			return this.setLimit("max", value, true, errorUtil.toString(message));
		}
		lt(value, message) {
			return this.setLimit("max", value, false, errorUtil.toString(message));
		}
		setLimit(kind, value, inclusive, message) {
			return new ZodBigInt$1({
				...this._def,
				checks: [...this._def.checks, {
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message)
				}]
			});
		}
		_addCheck(check) {
			return new ZodBigInt$1({
				...this._def,
				checks: [...this._def.checks, check]
			});
		}
		positive(message) {
			return this._addCheck({
				kind: "min",
				value: BigInt(0),
				inclusive: false,
				message: errorUtil.toString(message)
			});
		}
		negative(message) {
			return this._addCheck({
				kind: "max",
				value: BigInt(0),
				inclusive: false,
				message: errorUtil.toString(message)
			});
		}
		nonpositive(message) {
			return this._addCheck({
				kind: "max",
				value: BigInt(0),
				inclusive: true,
				message: errorUtil.toString(message)
			});
		}
		nonnegative(message) {
			return this._addCheck({
				kind: "min",
				value: BigInt(0),
				inclusive: true,
				message: errorUtil.toString(message)
			});
		}
		multipleOf(value, message) {
			return this._addCheck({
				kind: "multipleOf",
				value,
				message: errorUtil.toString(message)
			});
		}
		get minValue() {
			let min = null;
			for (const ch of this._def.checks) if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
			return min;
		}
		get maxValue() {
			let max = null;
			for (const ch of this._def.checks) if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return max;
		}
	};
	ZodBigInt$1.create = (params) => {
		return new ZodBigInt$1({
			checks: [],
			typeName: ZodFirstPartyTypeKind.ZodBigInt,
			coerce: params?.coerce ?? false,
			...processCreateParams(params)
		});
	};
	var ZodBoolean$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodBoolean");
		}
		_parse(input) {
			if (this._def.coerce) input.data = Boolean(input.data);
			if (this._getType(input) !== ZodParsedType.boolean) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.boolean,
					received: ctx.parsedType
				});
				return INVALID;
			}
			return OK(input.data);
		}
	};
	ZodBoolean$1.create = (params) => {
		return new ZodBoolean$1({
			typeName: ZodFirstPartyTypeKind.ZodBoolean,
			coerce: params?.coerce || false,
			...processCreateParams(params)
		});
	};
	var ZodDate$1 = class ZodDate$1 extends ZodType$1 {
		static {
			__name(this, "ZodDate");
		}
		_parse(input) {
			if (this._def.coerce) input.data = new Date(input.data);
			if (this._getType(input) !== ZodParsedType.date) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.date,
					received: ctx.parsedType
				});
				return INVALID;
			}
			if (Number.isNaN(input.data.getTime())) {
				addIssueToContext(this._getOrReturnCtx(input), { code: ZodIssueCode$1.invalid_date });
				return INVALID;
			}
			const status = new ParseStatus();
			let ctx = void 0;
			for (const check of this._def.checks) if (check.kind === "min") {
				if (input.data.getTime() < check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_small,
						message: check.message,
						inclusive: true,
						exact: false,
						minimum: check.value,
						type: "date"
					});
					status.dirty();
				}
			} else if (check.kind === "max") {
				if (input.data.getTime() > check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_big,
						message: check.message,
						inclusive: true,
						exact: false,
						maximum: check.value,
						type: "date"
					});
					status.dirty();
				}
			} else util.assertNever(check);
			return {
				status: status.value,
				value: new Date(input.data.getTime())
			};
		}
		_addCheck(check) {
			return new ZodDate$1({
				...this._def,
				checks: [...this._def.checks, check]
			});
		}
		min(minDate, message) {
			return this._addCheck({
				kind: "min",
				value: minDate.getTime(),
				message: errorUtil.toString(message)
			});
		}
		max(maxDate, message) {
			return this._addCheck({
				kind: "max",
				value: maxDate.getTime(),
				message: errorUtil.toString(message)
			});
		}
		get minDate() {
			let min = null;
			for (const ch of this._def.checks) if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
			return min != null ? new Date(min) : null;
		}
		get maxDate() {
			let max = null;
			for (const ch of this._def.checks) if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
			return max != null ? new Date(max) : null;
		}
	};
	ZodDate$1.create = (params) => {
		return new ZodDate$1({
			checks: [],
			coerce: params?.coerce || false,
			typeName: ZodFirstPartyTypeKind.ZodDate,
			...processCreateParams(params)
		});
	};
	var ZodSymbol$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodSymbol");
		}
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.symbol) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.symbol,
					received: ctx.parsedType
				});
				return INVALID;
			}
			return OK(input.data);
		}
	};
	ZodSymbol$1.create = (params) => {
		return new ZodSymbol$1({
			typeName: ZodFirstPartyTypeKind.ZodSymbol,
			...processCreateParams(params)
		});
	};
	var ZodUndefined$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodUndefined");
		}
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.undefined) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.undefined,
					received: ctx.parsedType
				});
				return INVALID;
			}
			return OK(input.data);
		}
	};
	ZodUndefined$1.create = (params) => {
		return new ZodUndefined$1({
			typeName: ZodFirstPartyTypeKind.ZodUndefined,
			...processCreateParams(params)
		});
	};
	var ZodNull$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodNull");
		}
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.null) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.null,
					received: ctx.parsedType
				});
				return INVALID;
			}
			return OK(input.data);
		}
	};
	ZodNull$1.create = (params) => {
		return new ZodNull$1({
			typeName: ZodFirstPartyTypeKind.ZodNull,
			...processCreateParams(params)
		});
	};
	var ZodAny$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodAny");
		}
		constructor() {
			super(...arguments);
			this._any = true;
		}
		_parse(input) {
			return OK(input.data);
		}
	};
	ZodAny$1.create = (params) => {
		return new ZodAny$1({
			typeName: ZodFirstPartyTypeKind.ZodAny,
			...processCreateParams(params)
		});
	};
	var ZodUnknown$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodUnknown");
		}
		constructor() {
			super(...arguments);
			this._unknown = true;
		}
		_parse(input) {
			return OK(input.data);
		}
	};
	ZodUnknown$1.create = (params) => {
		return new ZodUnknown$1({
			typeName: ZodFirstPartyTypeKind.ZodUnknown,
			...processCreateParams(params)
		});
	};
	var ZodNever$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodNever");
		}
		_parse(input) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode$1.invalid_type,
				expected: ZodParsedType.never,
				received: ctx.parsedType
			});
			return INVALID;
		}
	};
	ZodNever$1.create = (params) => {
		return new ZodNever$1({
			typeName: ZodFirstPartyTypeKind.ZodNever,
			...processCreateParams(params)
		});
	};
	var ZodVoid$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodVoid");
		}
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.undefined) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.void,
					received: ctx.parsedType
				});
				return INVALID;
			}
			return OK(input.data);
		}
	};
	ZodVoid$1.create = (params) => {
		return new ZodVoid$1({
			typeName: ZodFirstPartyTypeKind.ZodVoid,
			...processCreateParams(params)
		});
	};
	var ZodArray$1 = class ZodArray$1 extends ZodType$1 {
		static {
			__name(this, "ZodArray");
		}
		_parse(input) {
			const { ctx, status } = this._processInputParams(input);
			const def = this._def;
			if (ctx.parsedType !== ZodParsedType.array) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.array,
					received: ctx.parsedType
				});
				return INVALID;
			}
			if (def.exactLength !== null) {
				const tooBig = ctx.data.length > def.exactLength.value;
				const tooSmall = ctx.data.length < def.exactLength.value;
				if (tooBig || tooSmall) {
					addIssueToContext(ctx, {
						code: tooBig ? ZodIssueCode$1.too_big : ZodIssueCode$1.too_small,
						minimum: tooSmall ? def.exactLength.value : void 0,
						maximum: tooBig ? def.exactLength.value : void 0,
						type: "array",
						inclusive: true,
						exact: true,
						message: def.exactLength.message
					});
					status.dirty();
				}
			}
			if (def.minLength !== null) {
				if (ctx.data.length < def.minLength.value) {
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_small,
						minimum: def.minLength.value,
						type: "array",
						inclusive: true,
						exact: false,
						message: def.minLength.message
					});
					status.dirty();
				}
			}
			if (def.maxLength !== null) {
				if (ctx.data.length > def.maxLength.value) {
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_big,
						maximum: def.maxLength.value,
						type: "array",
						inclusive: true,
						exact: false,
						message: def.maxLength.message
					});
					status.dirty();
				}
			}
			if (ctx.common.async) return Promise.all([...ctx.data].map((item, i) => {
				return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
			})).then((result) => {
				return ParseStatus.mergeArray(status, result);
			});
			const result = [...ctx.data].map((item, i) => {
				return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
			});
			return ParseStatus.mergeArray(status, result);
		}
		get element() {
			return this._def.type;
		}
		min(minLength, message) {
			return new ZodArray$1({
				...this._def,
				minLength: {
					value: minLength,
					message: errorUtil.toString(message)
				}
			});
		}
		max(maxLength, message) {
			return new ZodArray$1({
				...this._def,
				maxLength: {
					value: maxLength,
					message: errorUtil.toString(message)
				}
			});
		}
		length(len, message) {
			return new ZodArray$1({
				...this._def,
				exactLength: {
					value: len,
					message: errorUtil.toString(message)
				}
			});
		}
		nonempty(message) {
			return this.min(1, message);
		}
	};
	ZodArray$1.create = (schema, params) => {
		return new ZodArray$1({
			type: schema,
			minLength: null,
			maxLength: null,
			exactLength: null,
			typeName: ZodFirstPartyTypeKind.ZodArray,
			...processCreateParams(params)
		});
	};
	function deepPartialify(schema) {
		if (schema instanceof ZodObject$1) {
			const newShape = {};
			for (const key in schema.shape) {
				const fieldSchema = schema.shape[key];
				newShape[key] = ZodOptional$1.create(deepPartialify(fieldSchema));
			}
			return new ZodObject$1({
				...schema._def,
				shape: () => newShape
			});
		} else if (schema instanceof ZodArray$1) return new ZodArray$1({
			...schema._def,
			type: deepPartialify(schema.element)
		});
		else if (schema instanceof ZodOptional$1) return ZodOptional$1.create(deepPartialify(schema.unwrap()));
		else if (schema instanceof ZodNullable$1) return ZodNullable$1.create(deepPartialify(schema.unwrap()));
		else if (schema instanceof ZodTuple$1) return ZodTuple$1.create(schema.items.map((item) => deepPartialify(item)));
		else return schema;
	}
	var ZodObject$1 = class ZodObject$1 extends ZodType$1 {
		static {
			__name(this, "ZodObject");
		}
		constructor() {
			super(...arguments);
			this._cached = null;
			/**
			* @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
			* If you want to pass through unknown properties, use `.passthrough()` instead.
			*/
			this.nonstrict = this.passthrough;
			/**
			* @deprecated Use `.extend` instead
			*  */
			this.augment = this.extend;
		}
		_getCached() {
			if (this._cached !== null) return this._cached;
			const shape = this._def.shape();
			const keys = util.objectKeys(shape);
			this._cached = {
				shape,
				keys
			};
			return this._cached;
		}
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.object) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.object,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const { status, ctx } = this._processInputParams(input);
			const { shape, keys: shapeKeys } = this._getCached();
			const extraKeys = [];
			if (!(this._def.catchall instanceof ZodNever$1 && this._def.unknownKeys === "strip")) {
				for (const key in ctx.data) if (!shapeKeys.includes(key)) extraKeys.push(key);
			}
			const pairs = [];
			for (const key of shapeKeys) {
				const keyValidator = shape[key];
				const value = ctx.data[key];
				pairs.push({
					key: {
						status: "valid",
						value: key
					},
					value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
					alwaysSet: key in ctx.data
				});
			}
			if (this._def.catchall instanceof ZodNever$1) {
				const unknownKeys = this._def.unknownKeys;
				if (unknownKeys === "passthrough") for (const key of extraKeys) pairs.push({
					key: {
						status: "valid",
						value: key
					},
					value: {
						status: "valid",
						value: ctx.data[key]
					}
				});
				else if (unknownKeys === "strict") {
					if (extraKeys.length > 0) {
						addIssueToContext(ctx, {
							code: ZodIssueCode$1.unrecognized_keys,
							keys: extraKeys
						});
						status.dirty();
					}
				} else if (unknownKeys === "strip") {} else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
			} else {
				const catchall = this._def.catchall;
				for (const key of extraKeys) {
					const value = ctx.data[key];
					pairs.push({
						key: {
							status: "valid",
							value: key
						},
						value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
						alwaysSet: key in ctx.data
					});
				}
			}
			if (ctx.common.async) return Promise.resolve().then(async () => {
				const syncPairs = [];
				for (const pair of pairs) {
					const key = await pair.key;
					const value = await pair.value;
					syncPairs.push({
						key,
						value,
						alwaysSet: pair.alwaysSet
					});
				}
				return syncPairs;
			}).then((syncPairs) => {
				return ParseStatus.mergeObjectSync(status, syncPairs);
			});
			else return ParseStatus.mergeObjectSync(status, pairs);
		}
		get shape() {
			return this._def.shape();
		}
		strict(message) {
			errorUtil.errToObj;
			return new ZodObject$1({
				...this._def,
				unknownKeys: "strict",
				...message !== void 0 ? { errorMap: (issue, ctx) => {
					const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
					if (issue.code === "unrecognized_keys") return { message: errorUtil.errToObj(message).message ?? defaultError };
					return { message: defaultError };
				} } : {}
			});
		}
		strip() {
			return new ZodObject$1({
				...this._def,
				unknownKeys: "strip"
			});
		}
		passthrough() {
			return new ZodObject$1({
				...this._def,
				unknownKeys: "passthrough"
			});
		}
		extend(augmentation) {
			return new ZodObject$1({
				...this._def,
				shape: () => ({
					...this._def.shape(),
					...augmentation
				})
			});
		}
		/**
		* Prior to zod@1.0.12 there was a bug in the
		* inferred type of merged objects. Please
		* upgrade if you are experiencing issues.
		*/
		merge(merging) {
			return new ZodObject$1({
				unknownKeys: merging._def.unknownKeys,
				catchall: merging._def.catchall,
				shape: () => ({
					...this._def.shape(),
					...merging._def.shape()
				}),
				typeName: ZodFirstPartyTypeKind.ZodObject
			});
		}
		setKey(key, schema) {
			return this.augment({ [key]: schema });
		}
		catchall(index) {
			return new ZodObject$1({
				...this._def,
				catchall: index
			});
		}
		pick(mask) {
			const shape = {};
			for (const key of util.objectKeys(mask)) if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
			return new ZodObject$1({
				...this._def,
				shape: () => shape
			});
		}
		omit(mask) {
			const shape = {};
			for (const key of util.objectKeys(this.shape)) if (!mask[key]) shape[key] = this.shape[key];
			return new ZodObject$1({
				...this._def,
				shape: () => shape
			});
		}
		/**
		* @deprecated
		*/
		deepPartial() {
			return deepPartialify(this);
		}
		partial(mask) {
			const newShape = {};
			for (const key of util.objectKeys(this.shape)) {
				const fieldSchema = this.shape[key];
				if (mask && !mask[key]) newShape[key] = fieldSchema;
				else newShape[key] = fieldSchema.optional();
			}
			return new ZodObject$1({
				...this._def,
				shape: () => newShape
			});
		}
		required(mask) {
			const newShape = {};
			for (const key of util.objectKeys(this.shape)) if (mask && !mask[key]) newShape[key] = this.shape[key];
			else {
				let newField = this.shape[key];
				while (newField instanceof ZodOptional$1) newField = newField._def.innerType;
				newShape[key] = newField;
			}
			return new ZodObject$1({
				...this._def,
				shape: () => newShape
			});
		}
		keyof() {
			return createZodEnum(util.objectKeys(this.shape));
		}
	};
	ZodObject$1.create = (shape, params) => {
		return new ZodObject$1({
			shape: () => shape,
			unknownKeys: "strip",
			catchall: ZodNever$1.create(),
			typeName: ZodFirstPartyTypeKind.ZodObject,
			...processCreateParams(params)
		});
	};
	ZodObject$1.strictCreate = (shape, params) => {
		return new ZodObject$1({
			shape: () => shape,
			unknownKeys: "strict",
			catchall: ZodNever$1.create(),
			typeName: ZodFirstPartyTypeKind.ZodObject,
			...processCreateParams(params)
		});
	};
	ZodObject$1.lazycreate = (shape, params) => {
		return new ZodObject$1({
			shape,
			unknownKeys: "strip",
			catchall: ZodNever$1.create(),
			typeName: ZodFirstPartyTypeKind.ZodObject,
			...processCreateParams(params)
		});
	};
	var ZodUnion$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodUnion");
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			const options = this._def.options;
			function handleResults(results) {
				for (const result of results) if (result.result.status === "valid") return result.result;
				for (const result of results) if (result.result.status === "dirty") {
					ctx.common.issues.push(...result.ctx.common.issues);
					return result.result;
				}
				const unionErrors = results.map((result) => new ZodError$1(result.ctx.common.issues));
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_union,
					unionErrors
				});
				return INVALID;
			}
			if (ctx.common.async) return Promise.all(options.map(async (option) => {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: []
					},
					parent: null
				};
				return {
					result: await option._parseAsync({
						data: ctx.data,
						path: ctx.path,
						parent: childCtx
					}),
					ctx: childCtx
				};
			})).then(handleResults);
			else {
				let dirty = void 0;
				const issues = [];
				for (const option of options) {
					const childCtx = {
						...ctx,
						common: {
							...ctx.common,
							issues: []
						},
						parent: null
					};
					const result = option._parseSync({
						data: ctx.data,
						path: ctx.path,
						parent: childCtx
					});
					if (result.status === "valid") return result;
					else if (result.status === "dirty" && !dirty) dirty = {
						result,
						ctx: childCtx
					};
					if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
				}
				if (dirty) {
					ctx.common.issues.push(...dirty.ctx.common.issues);
					return dirty.result;
				}
				const unionErrors = issues.map((issues) => new ZodError$1(issues));
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_union,
					unionErrors
				});
				return INVALID;
			}
		}
		get options() {
			return this._def.options;
		}
	};
	ZodUnion$1.create = (types, params) => {
		return new ZodUnion$1({
			options: types,
			typeName: ZodFirstPartyTypeKind.ZodUnion,
			...processCreateParams(params)
		});
	};
	var getDiscriminator = (type) => {
		if (type instanceof ZodLazy$1) return getDiscriminator(type.schema);
		else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
		else if (type instanceof ZodLiteral$1) return [type.value];
		else if (type instanceof ZodEnum$1) return type.options;
		else if (type instanceof ZodNativeEnum) return util.objectValues(type.enum);
		else if (type instanceof ZodDefault$1) return getDiscriminator(type._def.innerType);
		else if (type instanceof ZodUndefined$1) return [void 0];
		else if (type instanceof ZodNull$1) return [null];
		else if (type instanceof ZodOptional$1) return [void 0, ...getDiscriminator(type.unwrap())];
		else if (type instanceof ZodNullable$1) return [null, ...getDiscriminator(type.unwrap())];
		else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
		else if (type instanceof ZodReadonly$1) return getDiscriminator(type.unwrap());
		else if (type instanceof ZodCatch$1) return getDiscriminator(type._def.innerType);
		else return [];
	};
	var ZodDiscriminatedUnion$1 = class ZodDiscriminatedUnion$1 extends ZodType$1 {
		static {
			__name(this, "ZodDiscriminatedUnion");
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.object) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.object,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const discriminator = this.discriminator;
			const discriminatorValue = ctx.data[discriminator];
			const option = this.optionsMap.get(discriminatorValue);
			if (!option) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_union_discriminator,
					options: Array.from(this.optionsMap.keys()),
					path: [discriminator]
				});
				return INVALID;
			}
			if (ctx.common.async) return option._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			else return option._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
		}
		get discriminator() {
			return this._def.discriminator;
		}
		get options() {
			return this._def.options;
		}
		get optionsMap() {
			return this._def.optionsMap;
		}
		/**
		* The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
		* However, it only allows a union of objects, all of which need to share a discriminator property. This property must
		* have a different value for each object in the union.
		* @param discriminator the name of the discriminator property
		* @param types an array of object schemas
		* @param params
		*/
		static create(discriminator, options, params) {
			const optionsMap = /* @__PURE__ */ new Map();
			for (const type of options) {
				const discriminatorValues = getDiscriminator(type.shape[discriminator]);
				if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
				for (const value of discriminatorValues) {
					if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
					optionsMap.set(value, type);
				}
			}
			return new ZodDiscriminatedUnion$1({
				typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
				discriminator,
				options,
				optionsMap,
				...processCreateParams(params)
			});
		}
	};
	function mergeValues$1(a, b) {
		const aType = getParsedType$1(a);
		const bType = getParsedType$1(b);
		if (a === b) return {
			valid: true,
			data: a
		};
		else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
			const bKeys = util.objectKeys(b);
			const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
			const newObj = {
				...a,
				...b
			};
			for (const key of sharedKeys) {
				const sharedValue = mergeValues$1(a[key], b[key]);
				if (!sharedValue.valid) return { valid: false };
				newObj[key] = sharedValue.data;
			}
			return {
				valid: true,
				data: newObj
			};
		} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
			if (a.length !== b.length) return { valid: false };
			const newArray = [];
			for (let index = 0; index < a.length; index++) {
				const itemA = a[index];
				const itemB = b[index];
				const sharedValue = mergeValues$1(itemA, itemB);
				if (!sharedValue.valid) return { valid: false };
				newArray.push(sharedValue.data);
			}
			return {
				valid: true,
				data: newArray
			};
		} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
			valid: true,
			data: a
		};
		else return { valid: false };
	}
	__name(mergeValues$1, "mergeValues");
	var ZodIntersection$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodIntersection");
		}
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			const handleParsed = (parsedLeft, parsedRight) => {
				if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
				const merged = mergeValues$1(parsedLeft.value, parsedRight.value);
				if (!merged.valid) {
					addIssueToContext(ctx, { code: ZodIssueCode$1.invalid_intersection_types });
					return INVALID;
				}
				if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
				return {
					status: status.value,
					value: merged.data
				};
			};
			if (ctx.common.async) return Promise.all([this._def.left._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}), this._def.right._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			})]).then(([left, right]) => handleParsed(left, right));
			else return handleParsed(this._def.left._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}), this._def.right._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}));
		}
	};
	ZodIntersection$1.create = (left, right, params) => {
		return new ZodIntersection$1({
			left,
			right,
			typeName: ZodFirstPartyTypeKind.ZodIntersection,
			...processCreateParams(params)
		});
	};
	var ZodTuple$1 = class ZodTuple$1 extends ZodType$1 {
		static {
			__name(this, "ZodTuple");
		}
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.array) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.array,
					received: ctx.parsedType
				});
				return INVALID;
			}
			if (ctx.data.length < this._def.items.length) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.too_small,
					minimum: this._def.items.length,
					inclusive: true,
					exact: false,
					type: "array"
				});
				return INVALID;
			}
			if (!this._def.rest && ctx.data.length > this._def.items.length) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.too_big,
					maximum: this._def.items.length,
					inclusive: true,
					exact: false,
					type: "array"
				});
				status.dirty();
			}
			const items = [...ctx.data].map((item, itemIndex) => {
				const schema = this._def.items[itemIndex] || this._def.rest;
				if (!schema) return null;
				return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
			}).filter((x) => !!x);
			if (ctx.common.async) return Promise.all(items).then((results) => {
				return ParseStatus.mergeArray(status, results);
			});
			else return ParseStatus.mergeArray(status, items);
		}
		get items() {
			return this._def.items;
		}
		rest(rest) {
			return new ZodTuple$1({
				...this._def,
				rest
			});
		}
	};
	ZodTuple$1.create = (schemas, params) => {
		if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
		return new ZodTuple$1({
			items: schemas,
			typeName: ZodFirstPartyTypeKind.ZodTuple,
			rest: null,
			...processCreateParams(params)
		});
	};
	var ZodRecord$1 = class ZodRecord$1 extends ZodType$1 {
		static {
			__name(this, "ZodRecord");
		}
		get keySchema() {
			return this._def.keyType;
		}
		get valueSchema() {
			return this._def.valueType;
		}
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.object) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.object,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const pairs = [];
			const keyType = this._def.keyType;
			const valueType = this._def.valueType;
			for (const key in ctx.data) pairs.push({
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
				value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
				alwaysSet: key in ctx.data
			});
			if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs);
			else return ParseStatus.mergeObjectSync(status, pairs);
		}
		get element() {
			return this._def.valueType;
		}
		static create(first, second, third) {
			if (second instanceof ZodType$1) return new ZodRecord$1({
				keyType: first,
				valueType: second,
				typeName: ZodFirstPartyTypeKind.ZodRecord,
				...processCreateParams(third)
			});
			return new ZodRecord$1({
				keyType: ZodString$1.create(),
				valueType: first,
				typeName: ZodFirstPartyTypeKind.ZodRecord,
				...processCreateParams(second)
			});
		}
	};
	var ZodMap$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodMap");
		}
		get keySchema() {
			return this._def.keyType;
		}
		get valueSchema() {
			return this._def.valueType;
		}
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.map) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.map,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const keyType = this._def.keyType;
			const valueType = this._def.valueType;
			const pairs = [...ctx.data.entries()].map(([key, value], index) => {
				return {
					key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
					value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
				};
			});
			if (ctx.common.async) {
				const finalMap = /* @__PURE__ */ new Map();
				return Promise.resolve().then(async () => {
					for (const pair of pairs) {
						const key = await pair.key;
						const value = await pair.value;
						if (key.status === "aborted" || value.status === "aborted") return INVALID;
						if (key.status === "dirty" || value.status === "dirty") status.dirty();
						finalMap.set(key.value, value.value);
					}
					return {
						status: status.value,
						value: finalMap
					};
				});
			} else {
				const finalMap = /* @__PURE__ */ new Map();
				for (const pair of pairs) {
					const key = pair.key;
					const value = pair.value;
					if (key.status === "aborted" || value.status === "aborted") return INVALID;
					if (key.status === "dirty" || value.status === "dirty") status.dirty();
					finalMap.set(key.value, value.value);
				}
				return {
					status: status.value,
					value: finalMap
				};
			}
		}
	};
	ZodMap$1.create = (keyType, valueType, params) => {
		return new ZodMap$1({
			valueType,
			keyType,
			typeName: ZodFirstPartyTypeKind.ZodMap,
			...processCreateParams(params)
		});
	};
	var ZodSet$1 = class ZodSet$1 extends ZodType$1 {
		static {
			__name(this, "ZodSet");
		}
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.set) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.set,
					received: ctx.parsedType
				});
				return INVALID;
			}
			const def = this._def;
			if (def.minSize !== null) {
				if (ctx.data.size < def.minSize.value) {
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_small,
						minimum: def.minSize.value,
						type: "set",
						inclusive: true,
						exact: false,
						message: def.minSize.message
					});
					status.dirty();
				}
			}
			if (def.maxSize !== null) {
				if (ctx.data.size > def.maxSize.value) {
					addIssueToContext(ctx, {
						code: ZodIssueCode$1.too_big,
						maximum: def.maxSize.value,
						type: "set",
						inclusive: true,
						exact: false,
						message: def.maxSize.message
					});
					status.dirty();
				}
			}
			const valueType = this._def.valueType;
			function finalizeSet(elements) {
				const parsedSet = /* @__PURE__ */ new Set();
				for (const element of elements) {
					if (element.status === "aborted") return INVALID;
					if (element.status === "dirty") status.dirty();
					parsedSet.add(element.value);
				}
				return {
					status: status.value,
					value: parsedSet
				};
			}
			const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
			if (ctx.common.async) return Promise.all(elements).then((elements) => finalizeSet(elements));
			else return finalizeSet(elements);
		}
		min(minSize, message) {
			return new ZodSet$1({
				...this._def,
				minSize: {
					value: minSize,
					message: errorUtil.toString(message)
				}
			});
		}
		max(maxSize, message) {
			return new ZodSet$1({
				...this._def,
				maxSize: {
					value: maxSize,
					message: errorUtil.toString(message)
				}
			});
		}
		size(size, message) {
			return this.min(size, message).max(size, message);
		}
		nonempty(message) {
			return this.min(1, message);
		}
	};
	ZodSet$1.create = (valueType, params) => {
		return new ZodSet$1({
			valueType,
			minSize: null,
			maxSize: null,
			typeName: ZodFirstPartyTypeKind.ZodSet,
			...processCreateParams(params)
		});
	};
	var ZodFunction = class ZodFunction extends ZodType$1 {
		constructor() {
			super(...arguments);
			this.validate = this.implement;
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.function) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.function,
					received: ctx.parsedType
				});
				return INVALID;
			}
			function makeArgsIssue(args, error) {
				return makeIssue({
					data: args,
					path: ctx.path,
					errorMaps: [
						ctx.common.contextualErrorMap,
						ctx.schemaErrorMap,
						getErrorMap$1(),
						errorMap
					].filter((x) => !!x),
					issueData: {
						code: ZodIssueCode$1.invalid_arguments,
						argumentsError: error
					}
				});
			}
			function makeReturnsIssue(returns, error) {
				return makeIssue({
					data: returns,
					path: ctx.path,
					errorMaps: [
						ctx.common.contextualErrorMap,
						ctx.schemaErrorMap,
						getErrorMap$1(),
						errorMap
					].filter((x) => !!x),
					issueData: {
						code: ZodIssueCode$1.invalid_return_type,
						returnTypeError: error
					}
				});
			}
			const params = { errorMap: ctx.common.contextualErrorMap };
			const fn = ctx.data;
			if (this._def.returns instanceof ZodPromise$1) {
				const me = this;
				return OK(async function(...args) {
					const error = new ZodError$1([]);
					const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
						error.addIssue(makeArgsIssue(args, e));
						throw error;
					});
					const result = await Reflect.apply(fn, this, parsedArgs);
					return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
						error.addIssue(makeReturnsIssue(result, e));
						throw error;
					});
				});
			} else {
				const me = this;
				return OK(function(...args) {
					const parsedArgs = me._def.args.safeParse(args, params);
					if (!parsedArgs.success) throw new ZodError$1([makeArgsIssue(args, parsedArgs.error)]);
					const result = Reflect.apply(fn, this, parsedArgs.data);
					const parsedReturns = me._def.returns.safeParse(result, params);
					if (!parsedReturns.success) throw new ZodError$1([makeReturnsIssue(result, parsedReturns.error)]);
					return parsedReturns.data;
				});
			}
		}
		parameters() {
			return this._def.args;
		}
		returnType() {
			return this._def.returns;
		}
		args(...items) {
			return new ZodFunction({
				...this._def,
				args: ZodTuple$1.create(items).rest(ZodUnknown$1.create())
			});
		}
		returns(returnType) {
			return new ZodFunction({
				...this._def,
				returns: returnType
			});
		}
		implement(func) {
			return this.parse(func);
		}
		strictImplement(func) {
			return this.parse(func);
		}
		static create(args, returns, params) {
			return new ZodFunction({
				args: args ? args : ZodTuple$1.create([]).rest(ZodUnknown$1.create()),
				returns: returns || ZodUnknown$1.create(),
				typeName: ZodFirstPartyTypeKind.ZodFunction,
				...processCreateParams(params)
			});
		}
	};
	var ZodLazy$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodLazy");
		}
		get schema() {
			return this._def.getter();
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			return this._def.getter()._parse({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
		}
	};
	ZodLazy$1.create = (getter, params) => {
		return new ZodLazy$1({
			getter,
			typeName: ZodFirstPartyTypeKind.ZodLazy,
			...processCreateParams(params)
		});
	};
	var ZodLiteral$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodLiteral");
		}
		_parse(input) {
			if (input.data !== this._def.value) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					received: ctx.data,
					code: ZodIssueCode$1.invalid_literal,
					expected: this._def.value
				});
				return INVALID;
			}
			return {
				status: "valid",
				value: input.data
			};
		}
		get value() {
			return this._def.value;
		}
	};
	ZodLiteral$1.create = (value, params) => {
		return new ZodLiteral$1({
			value,
			typeName: ZodFirstPartyTypeKind.ZodLiteral,
			...processCreateParams(params)
		});
	};
	function createZodEnum(values, params) {
		return new ZodEnum$1({
			values,
			typeName: ZodFirstPartyTypeKind.ZodEnum,
			...processCreateParams(params)
		});
	}
	var ZodEnum$1 = class ZodEnum$1 extends ZodType$1 {
		static {
			__name(this, "ZodEnum");
		}
		_parse(input) {
			if (typeof input.data !== "string") {
				const ctx = this._getOrReturnCtx(input);
				const expectedValues = this._def.values;
				addIssueToContext(ctx, {
					expected: util.joinValues(expectedValues),
					received: ctx.parsedType,
					code: ZodIssueCode$1.invalid_type
				});
				return INVALID;
			}
			if (!this._cache) this._cache = new Set(this._def.values);
			if (!this._cache.has(input.data)) {
				const ctx = this._getOrReturnCtx(input);
				const expectedValues = this._def.values;
				addIssueToContext(ctx, {
					received: ctx.data,
					code: ZodIssueCode$1.invalid_enum_value,
					options: expectedValues
				});
				return INVALID;
			}
			return OK(input.data);
		}
		get options() {
			return this._def.values;
		}
		get enum() {
			const enumValues = {};
			for (const val of this._def.values) enumValues[val] = val;
			return enumValues;
		}
		get Values() {
			const enumValues = {};
			for (const val of this._def.values) enumValues[val] = val;
			return enumValues;
		}
		get Enum() {
			const enumValues = {};
			for (const val of this._def.values) enumValues[val] = val;
			return enumValues;
		}
		extract(values, newDef = this._def) {
			return ZodEnum$1.create(values, {
				...this._def,
				...newDef
			});
		}
		exclude(values, newDef = this._def) {
			return ZodEnum$1.create(this.options.filter((opt) => !values.includes(opt)), {
				...this._def,
				...newDef
			});
		}
	};
	ZodEnum$1.create = createZodEnum;
	var ZodNativeEnum = class extends ZodType$1 {
		_parse(input) {
			const nativeEnumValues = util.getValidEnumValues(this._def.values);
			const ctx = this._getOrReturnCtx(input);
			if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
				const expectedValues = util.objectValues(nativeEnumValues);
				addIssueToContext(ctx, {
					expected: util.joinValues(expectedValues),
					received: ctx.parsedType,
					code: ZodIssueCode$1.invalid_type
				});
				return INVALID;
			}
			if (!this._cache) this._cache = new Set(util.getValidEnumValues(this._def.values));
			if (!this._cache.has(input.data)) {
				const expectedValues = util.objectValues(nativeEnumValues);
				addIssueToContext(ctx, {
					received: ctx.data,
					code: ZodIssueCode$1.invalid_enum_value,
					options: expectedValues
				});
				return INVALID;
			}
			return OK(input.data);
		}
		get enum() {
			return this._def.values;
		}
	};
	ZodNativeEnum.create = (values, params) => {
		return new ZodNativeEnum({
			values,
			typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
			...processCreateParams(params)
		});
	};
	var ZodPromise$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodPromise");
		}
		unwrap() {
			return this._def.type;
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.promise,
					received: ctx.parsedType
				});
				return INVALID;
			}
			return OK((ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data)).then((data) => {
				return this._def.type.parseAsync(data, {
					path: ctx.path,
					errorMap: ctx.common.contextualErrorMap
				});
			}));
		}
	};
	ZodPromise$1.create = (schema, params) => {
		return new ZodPromise$1({
			type: schema,
			typeName: ZodFirstPartyTypeKind.ZodPromise,
			...processCreateParams(params)
		});
	};
	var ZodEffects = class extends ZodType$1 {
		innerType() {
			return this._def.schema;
		}
		sourceType() {
			return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
		}
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			const effect = this._def.effect || null;
			const checkCtx = {
				addIssue: (arg) => {
					addIssueToContext(ctx, arg);
					if (arg.fatal) status.abort();
					else status.dirty();
				},
				get path() {
					return ctx.path;
				}
			};
			checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
			if (effect.type === "preprocess") {
				const processed = effect.transform(ctx.data, checkCtx);
				if (ctx.common.async) return Promise.resolve(processed).then(async (processed) => {
					if (status.value === "aborted") return INVALID;
					const result = await this._def.schema._parseAsync({
						data: processed,
						path: ctx.path,
						parent: ctx
					});
					if (result.status === "aborted") return INVALID;
					if (result.status === "dirty") return DIRTY(result.value);
					if (status.value === "dirty") return DIRTY(result.value);
					return result;
				});
				else {
					if (status.value === "aborted") return INVALID;
					const result = this._def.schema._parseSync({
						data: processed,
						path: ctx.path,
						parent: ctx
					});
					if (result.status === "aborted") return INVALID;
					if (result.status === "dirty") return DIRTY(result.value);
					if (status.value === "dirty") return DIRTY(result.value);
					return result;
				}
			}
			if (effect.type === "refinement") {
				const executeRefinement = (acc) => {
					const result = effect.refinement(acc, checkCtx);
					if (ctx.common.async) return Promise.resolve(result);
					if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
					return acc;
				};
				if (ctx.common.async === false) {
					const inner = this._def.schema._parseSync({
						data: ctx.data,
						path: ctx.path,
						parent: ctx
					});
					if (inner.status === "aborted") return INVALID;
					if (inner.status === "dirty") status.dirty();
					executeRefinement(inner.value);
					return {
						status: status.value,
						value: inner.value
					};
				} else return this._def.schema._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				}).then((inner) => {
					if (inner.status === "aborted") return INVALID;
					if (inner.status === "dirty") status.dirty();
					return executeRefinement(inner.value).then(() => {
						return {
							status: status.value,
							value: inner.value
						};
					});
				});
			}
			if (effect.type === "transform") if (ctx.common.async === false) {
				const base = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (!isValid(base)) return INVALID;
				const result = effect.transform(base.value, checkCtx);
				if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
				return {
					status: status.value,
					value: result
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((base) => {
				if (!isValid(base)) return INVALID;
				return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
					status: status.value,
					value: result
				}));
			});
			util.assertNever(effect);
		}
	};
	ZodEffects.create = (schema, effect, params) => {
		return new ZodEffects({
			schema,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect,
			...processCreateParams(params)
		});
	};
	ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
		return new ZodEffects({
			schema,
			effect: {
				type: "preprocess",
				transform: preprocess
			},
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			...processCreateParams(params)
		});
	};
	var ZodOptional$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodOptional");
		}
		_parse(input) {
			if (this._getType(input) === ZodParsedType.undefined) return OK(void 0);
			return this._def.innerType._parse(input);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	ZodOptional$1.create = (type, params) => {
		return new ZodOptional$1({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodOptional,
			...processCreateParams(params)
		});
	};
	var ZodNullable$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodNullable");
		}
		_parse(input) {
			if (this._getType(input) === ZodParsedType.null) return OK(null);
			return this._def.innerType._parse(input);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	ZodNullable$1.create = (type, params) => {
		return new ZodNullable$1({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodNullable,
			...processCreateParams(params)
		});
	};
	var ZodDefault$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodDefault");
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			let data = ctx.data;
			if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
			return this._def.innerType._parse({
				data,
				path: ctx.path,
				parent: ctx
			});
		}
		removeDefault() {
			return this._def.innerType;
		}
	};
	ZodDefault$1.create = (type, params) => {
		return new ZodDefault$1({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodDefault,
			defaultValue: typeof params.default === "function" ? params.default : () => params.default,
			...processCreateParams(params)
		});
	};
	var ZodCatch$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodCatch");
		}
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			const newCtx = {
				...ctx,
				common: {
					...ctx.common,
					issues: []
				}
			};
			const result = this._def.innerType._parse({
				data: newCtx.data,
				path: newCtx.path,
				parent: { ...newCtx }
			});
			if (isAsync(result)) return result.then((result) => {
				return {
					status: "valid",
					value: result.status === "valid" ? result.value : this._def.catchValue({
						get error() {
							return new ZodError$1(newCtx.common.issues);
						},
						input: newCtx.data
					})
				};
			});
			else return {
				status: "valid",
				value: result.status === "valid" ? result.value : this._def.catchValue({
					get error() {
						return new ZodError$1(newCtx.common.issues);
					},
					input: newCtx.data
				})
			};
		}
		removeCatch() {
			return this._def.innerType;
		}
	};
	ZodCatch$1.create = (type, params) => {
		return new ZodCatch$1({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodCatch,
			catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
			...processCreateParams(params)
		});
	};
	var ZodNaN$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodNaN");
		}
		_parse(input) {
			if (this._getType(input) !== ZodParsedType.nan) {
				const ctx = this._getOrReturnCtx(input);
				addIssueToContext(ctx, {
					code: ZodIssueCode$1.invalid_type,
					expected: ZodParsedType.nan,
					received: ctx.parsedType
				});
				return INVALID;
			}
			return {
				status: "valid",
				value: input.data
			};
		}
	};
	ZodNaN$1.create = (params) => {
		return new ZodNaN$1({
			typeName: ZodFirstPartyTypeKind.ZodNaN,
			...processCreateParams(params)
		});
	};
	var BRAND = Symbol("zod_brand");
	var ZodBranded = class extends ZodType$1 {
		_parse(input) {
			const { ctx } = this._processInputParams(input);
			const data = ctx.data;
			return this._def.type._parse({
				data,
				path: ctx.path,
				parent: ctx
			});
		}
		unwrap() {
			return this._def.type;
		}
	};
	var ZodPipeline = class ZodPipeline extends ZodType$1 {
		_parse(input) {
			const { status, ctx } = this._processInputParams(input);
			if (ctx.common.async) {
				const handleAsync = async () => {
					const inResult = await this._def.in._parseAsync({
						data: ctx.data,
						path: ctx.path,
						parent: ctx
					});
					if (inResult.status === "aborted") return INVALID;
					if (inResult.status === "dirty") {
						status.dirty();
						return DIRTY(inResult.value);
					} else return this._def.out._parseAsync({
						data: inResult.value,
						path: ctx.path,
						parent: ctx
					});
				};
				return handleAsync();
			} else {
				const inResult = this._def.in._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inResult.status === "aborted") return INVALID;
				if (inResult.status === "dirty") {
					status.dirty();
					return {
						status: "dirty",
						value: inResult.value
					};
				} else return this._def.out._parseSync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx
				});
			}
		}
		static create(a, b) {
			return new ZodPipeline({
				in: a,
				out: b,
				typeName: ZodFirstPartyTypeKind.ZodPipeline
			});
		}
	};
	var ZodReadonly$1 = class extends ZodType$1 {
		static {
			__name(this, "ZodReadonly");
		}
		_parse(input) {
			const result = this._def.innerType._parse(input);
			const freeze = (data) => {
				if (isValid(data)) data.value = Object.freeze(data.value);
				return data;
			};
			return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
		}
		unwrap() {
			return this._def.innerType;
		}
	};
	ZodReadonly$1.create = (type, params) => {
		return new ZodReadonly$1({
			innerType: type,
			typeName: ZodFirstPartyTypeKind.ZodReadonly,
			...processCreateParams(params)
		});
	};
	function cleanParams(params, data) {
		const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
		return typeof p === "string" ? { message: p } : p;
	}
	function custom$1(check, _params = {}, fatal) {
		if (check) return ZodAny$1.create().superRefine((data, ctx) => {
			const r = check(data);
			if (r instanceof Promise) return r.then((r) => {
				if (!r) {
					const params = cleanParams(_params, data);
					const _fatal = params.fatal ?? fatal ?? true;
					ctx.addIssue({
						code: "custom",
						...params,
						fatal: _fatal
					});
				}
			});
			if (!r) {
				const params = cleanParams(_params, data);
				const _fatal = params.fatal ?? fatal ?? true;
				ctx.addIssue({
					code: "custom",
					...params,
					fatal: _fatal
				});
			}
		});
		return ZodAny$1.create();
	}
	__name(custom$1, "custom");
	var late = { object: ZodObject$1.lazycreate };
	var ZodFirstPartyTypeKind;
	(function(ZodFirstPartyTypeKind) {
		ZodFirstPartyTypeKind["ZodString"] = "ZodString";
		ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
		ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
		ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
		ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
		ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
		ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
		ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
		ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
		ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
		ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
		ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
		ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
		ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
		ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
		ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
		ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
		ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
		ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
		ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
		ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
		ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
		ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
		ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
		ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
		ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
		ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
		ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
		ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
		ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
		ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
		ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
		ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
		ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
		ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
		ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
	})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
	var instanceOfType = (cls, params = { message: `Input not instance of ${cls.name}` }) => custom$1((data) => data instanceof cls, params);
	var stringType = ZodString$1.create;
	var numberType = ZodNumber$1.create;
	var nanType = ZodNaN$1.create;
	var bigIntType = ZodBigInt$1.create;
	var booleanType = ZodBoolean$1.create;
	var dateType = ZodDate$1.create;
	var symbolType = ZodSymbol$1.create;
	var undefinedType = ZodUndefined$1.create;
	var nullType = ZodNull$1.create;
	var anyType = ZodAny$1.create;
	var unknownType = ZodUnknown$1.create;
	var neverType = ZodNever$1.create;
	var voidType = ZodVoid$1.create;
	var arrayType = ZodArray$1.create;
	var objectType = ZodObject$1.create;
	var strictObjectType = ZodObject$1.strictCreate;
	var unionType = ZodUnion$1.create;
	var discriminatedUnionType = ZodDiscriminatedUnion$1.create;
	var intersectionType = ZodIntersection$1.create;
	var tupleType = ZodTuple$1.create;
	var recordType = ZodRecord$1.create;
	var mapType = ZodMap$1.create;
	var setType = ZodSet$1.create;
	var functionType = ZodFunction.create;
	var lazyType = ZodLazy$1.create;
	var literalType = ZodLiteral$1.create;
	var enumType = ZodEnum$1.create;
	var nativeEnumType = ZodNativeEnum.create;
	var promiseType = ZodPromise$1.create;
	var effectsType = ZodEffects.create;
	var optionalType = ZodOptional$1.create;
	var nullableType = ZodNullable$1.create;
	var preprocessType = ZodEffects.createWithPreprocess;
	var pipelineType = ZodPipeline.create;
	var ostring = () => stringType().optional();
	var onumber = () => numberType().optional();
	var oboolean = () => booleanType().optional();
	var coerce = {
		string: ((arg) => ZodString$1.create({
			...arg,
			coerce: true
		})),
		number: ((arg) => ZodNumber$1.create({
			...arg,
			coerce: true
		})),
		boolean: ((arg) => ZodBoolean$1.create({
			...arg,
			coerce: true
		})),
		bigint: ((arg) => ZodBigInt$1.create({
			...arg,
			coerce: true
		})),
		date: ((arg) => ZodDate$1.create({
			...arg,
			coerce: true
		}))
	};
	var NEVER$1 = INVALID;

//#endregion
//#region node_modules/zod/v3/external.js
	var external_exports$1 = /* @__PURE__ */ __exportAll({
		BRAND: () => BRAND,
		DIRTY: () => DIRTY,
		EMPTY_PATH: () => EMPTY_PATH,
		INVALID: () => INVALID,
		NEVER: () => NEVER$1,
		OK: () => OK,
		ParseStatus: () => ParseStatus,
		Schema: () => ZodType$1,
		ZodAny: () => ZodAny$1,
		ZodArray: () => ZodArray$1,
		ZodBigInt: () => ZodBigInt$1,
		ZodBoolean: () => ZodBoolean$1,
		ZodBranded: () => ZodBranded,
		ZodCatch: () => ZodCatch$1,
		ZodDate: () => ZodDate$1,
		ZodDefault: () => ZodDefault$1,
		ZodDiscriminatedUnion: () => ZodDiscriminatedUnion$1,
		ZodEffects: () => ZodEffects,
		ZodEnum: () => ZodEnum$1,
		ZodError: () => ZodError$1,
		ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
		ZodFunction: () => ZodFunction,
		ZodIntersection: () => ZodIntersection$1,
		ZodIssueCode: () => ZodIssueCode$1,
		ZodLazy: () => ZodLazy$1,
		ZodLiteral: () => ZodLiteral$1,
		ZodMap: () => ZodMap$1,
		ZodNaN: () => ZodNaN$1,
		ZodNativeEnum: () => ZodNativeEnum,
		ZodNever: () => ZodNever$1,
		ZodNull: () => ZodNull$1,
		ZodNullable: () => ZodNullable$1,
		ZodNumber: () => ZodNumber$1,
		ZodObject: () => ZodObject$1,
		ZodOptional: () => ZodOptional$1,
		ZodParsedType: () => ZodParsedType,
		ZodPipeline: () => ZodPipeline,
		ZodPromise: () => ZodPromise$1,
		ZodReadonly: () => ZodReadonly$1,
		ZodRecord: () => ZodRecord$1,
		ZodSchema: () => ZodType$1,
		ZodSet: () => ZodSet$1,
		ZodString: () => ZodString$1,
		ZodSymbol: () => ZodSymbol$1,
		ZodTransformer: () => ZodEffects,
		ZodTuple: () => ZodTuple$1,
		ZodType: () => ZodType$1,
		ZodUndefined: () => ZodUndefined$1,
		ZodUnion: () => ZodUnion$1,
		ZodUnknown: () => ZodUnknown$1,
		ZodVoid: () => ZodVoid$1,
		addIssueToContext: () => addIssueToContext,
		any: () => anyType,
		array: () => arrayType,
		bigint: () => bigIntType,
		boolean: () => booleanType,
		coerce: () => coerce,
		custom: () => custom$1,
		date: () => dateType,
		datetimeRegex: () => datetimeRegex,
		defaultErrorMap: () => errorMap,
		discriminatedUnion: () => discriminatedUnionType,
		effect: () => effectsType,
		enum: () => enumType,
		function: () => functionType,
		getErrorMap: () => getErrorMap$1,
		getParsedType: () => getParsedType$1,
		instanceof: () => instanceOfType,
		intersection: () => intersectionType,
		isAborted: () => isAborted,
		isAsync: () => isAsync,
		isDirty: () => isDirty,
		isValid: () => isValid,
		late: () => late,
		lazy: () => lazyType,
		literal: () => literalType,
		makeIssue: () => makeIssue,
		map: () => mapType,
		nan: () => nanType,
		nativeEnum: () => nativeEnumType,
		never: () => neverType,
		null: () => nullType,
		nullable: () => nullableType,
		number: () => numberType,
		object: () => objectType,
		objectUtil: () => objectUtil,
		oboolean: () => oboolean,
		onumber: () => onumber,
		optional: () => optionalType,
		ostring: () => ostring,
		pipeline: () => pipelineType,
		preprocess: () => preprocessType,
		promise: () => promiseType,
		quotelessJson: () => quotelessJson,
		record: () => recordType,
		set: () => setType,
		setErrorMap: () => setErrorMap$1,
		strictObject: () => strictObjectType,
		string: () => stringType,
		symbol: () => symbolType,
		transformer: () => effectsType,
		tuple: () => tupleType,
		undefined: () => undefinedType,
		union: () => unionType,
		unknown: () => unknownType,
		util: () => util,
		void: () => voidType
	});

//#endregion
//#region node_modules/zod/v4/core/core.js
/** A special constant with type `never` */
	var NEVER = Object.freeze({ status: "aborted" });
	function $constructor(name, initializer, params) {
		function init(inst, def) {
			var _a;
			Object.defineProperty(inst, "_zod", {
				value: inst._zod ?? {},
				enumerable: false
			});
			(_a = inst._zod).traits ?? (_a.traits = /* @__PURE__ */ new Set());
			inst._zod.traits.add(name);
			initializer(inst, def);
			for (const k in _.prototype) if (!(k in inst)) Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
			inst._zod.constr = _;
			inst._zod.def = def;
		}
		const Parent = params?.Parent ?? Object;
		class Definition extends Parent {}
		Object.defineProperty(Definition, "name", { value: name });
		function _(def) {
			var _a;
			const inst = params?.Parent ? new Definition() : this;
			init(inst, def);
			(_a = inst._zod).deferred ?? (_a.deferred = []);
			for (const fn of inst._zod.deferred) fn();
			return inst;
		}
		Object.defineProperty(_, "init", { value: init });
		Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
			if (params?.Parent && inst instanceof params.Parent) return true;
			return inst?._zod?.traits?.has(name);
		} });
		Object.defineProperty(_, "name", { value: name });
		return _;
	}
	var $brand = Symbol("zod_brand");
	var $ZodAsyncError = class extends Error {
		constructor() {
			super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
		}
	};
	var globalConfig = {};
	function config(newConfig) {
		if (newConfig) Object.assign(globalConfig, newConfig);
		return globalConfig;
	}

//#endregion
//#region node_modules/zod/v4/core/util.js
	var util_exports = /* @__PURE__ */ __exportAll({
		BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
		Class: () => Class,
		NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
		aborted: () => aborted,
		allowsEval: () => allowsEval,
		assert: () => assert,
		assertEqual: () => assertEqual,
		assertIs: () => assertIs,
		assertNever: () => assertNever,
		assertNotEqual: () => assertNotEqual,
		assignProp: () => assignProp,
		cached: () => cached,
		captureStackTrace: () => captureStackTrace,
		cleanEnum: () => cleanEnum,
		cleanRegex: () => cleanRegex,
		clone: () => clone,
		createTransparentProxy: () => createTransparentProxy,
		defineLazy: () => defineLazy,
		esc: () => esc,
		escapeRegex: () => escapeRegex,
		extend: () => extend,
		finalizeIssue: () => finalizeIssue,
		floatSafeRemainder: () => floatSafeRemainder,
		getElementAtPath: () => getElementAtPath,
		getEnumValues: () => getEnumValues,
		getLengthableOrigin: () => getLengthableOrigin,
		getParsedType: () => getParsedType,
		getSizableOrigin: () => getSizableOrigin,
		isObject: () => isObject,
		isPlainObject: () => isPlainObject,
		issue: () => issue,
		joinValues: () => joinValues,
		jsonStringifyReplacer: () => jsonStringifyReplacer,
		merge: () => merge,
		normalizeParams: () => normalizeParams,
		nullish: () => nullish$1,
		numKeys: () => numKeys,
		omit: () => omit,
		optionalKeys: () => optionalKeys,
		partial: () => partial,
		pick: () => pick,
		prefixIssues: () => prefixIssues,
		primitiveTypes: () => primitiveTypes,
		promiseAllObject: () => promiseAllObject,
		propertyKeyTypes: () => propertyKeyTypes,
		randomString: () => randomString,
		required: () => required,
		stringifyPrimitive: () => stringifyPrimitive,
		unwrapMessage: () => unwrapMessage
	});
	function assertEqual(val) {
		return val;
	}
	function assertNotEqual(val) {
		return val;
	}
	function assertIs(_arg) {}
	function assertNever(_x) {
		throw new Error();
	}
	function assert(_) {}
	function getEnumValues(entries) {
		const numericValues = Object.values(entries).filter((v) => typeof v === "number");
		return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
	}
	function joinValues(array, separator = "|") {
		return array.map((val) => stringifyPrimitive(val)).join(separator);
	}
	function jsonStringifyReplacer(_, value) {
		if (typeof value === "bigint") return value.toString();
		return value;
	}
	function cached(getter) {
		return { get value() {
			{
				const value = getter();
				Object.defineProperty(this, "value", { value });
				return value;
			}
		} };
	}
	function nullish$1(input) {
		return input === null || input === void 0;
	}
	__name(nullish$1, "nullish");
	function cleanRegex(source) {
		const start = source.startsWith("^") ? 1 : 0;
		const end = source.endsWith("$") ? source.length - 1 : source.length;
		return source.slice(start, end);
	}
	function floatSafeRemainder(val, step) {
		const valDecCount = (val.toString().split(".")[1] || "").length;
		const stepDecCount = (step.toString().split(".")[1] || "").length;
		const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
		return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
	}
	function defineLazy(object, key, getter) {
		Object.defineProperty(object, key, {
			get() {
				{
					const value = getter();
					object[key] = value;
					return value;
				}
			},
			set(v) {
				Object.defineProperty(object, key, { value: v });
			},
			configurable: true
		});
	}
	function assignProp(target, prop, value) {
		Object.defineProperty(target, prop, {
			value,
			writable: true,
			enumerable: true,
			configurable: true
		});
	}
	function getElementAtPath(obj, path) {
		if (!path) return obj;
		return path.reduce((acc, key) => acc?.[key], obj);
	}
	function promiseAllObject(promisesObj) {
		const keys = Object.keys(promisesObj);
		const promises = keys.map((key) => promisesObj[key]);
		return Promise.all(promises).then((results) => {
			const resolvedObj = {};
			for (let i = 0; i < keys.length; i++) resolvedObj[keys[i]] = results[i];
			return resolvedObj;
		});
	}
	function randomString(length = 10) {
		const chars = "abcdefghijklmnopqrstuvwxyz";
		let str = "";
		for (let i = 0; i < length; i++) str += chars[Math.floor(Math.random() * 26)];
		return str;
	}
	function esc(str) {
		return JSON.stringify(str);
	}
	var captureStackTrace = Error.captureStackTrace ? Error.captureStackTrace : (..._args) => {};
	function isObject(data) {
		return typeof data === "object" && data !== null && !Array.isArray(data);
	}
	var allowsEval = cached(() => {
		if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
		try {
			new Function("");
			return true;
		} catch (_) {
			return false;
		}
	});
	function isPlainObject(o) {
		if (isObject(o) === false) return false;
		const ctor = o.constructor;
		if (ctor === void 0) return true;
		const prot = ctor.prototype;
		if (isObject(prot) === false) return false;
		if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
		return true;
	}
	function numKeys(data) {
		let keyCount = 0;
		for (const key in data) if (Object.prototype.hasOwnProperty.call(data, key)) keyCount++;
		return keyCount;
	}
	var getParsedType = (data) => {
		const t = typeof data;
		switch (t) {
			case "undefined": return "undefined";
			case "string": return "string";
			case "number": return Number.isNaN(data) ? "nan" : "number";
			case "boolean": return "boolean";
			case "function": return "function";
			case "bigint": return "bigint";
			case "symbol": return "symbol";
			case "object":
				if (Array.isArray(data)) return "array";
				if (data === null) return "null";
				if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return "promise";
				if (typeof Map !== "undefined" && data instanceof Map) return "map";
				if (typeof Set !== "undefined" && data instanceof Set) return "set";
				if (typeof Date !== "undefined" && data instanceof Date) return "date";
				if (typeof File !== "undefined" && data instanceof File) return "file";
				return "object";
			default: throw new Error(`Unknown data type: ${t}`);
		}
	};
	var propertyKeyTypes = /* @__PURE__ */ new Set([
		"string",
		"number",
		"symbol"
	]);
	var primitiveTypes = /* @__PURE__ */ new Set([
		"string",
		"number",
		"bigint",
		"boolean",
		"symbol",
		"undefined"
	]);
	function escapeRegex(str) {
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function clone(inst, def, params) {
		const cl = new inst._zod.constr(def ?? inst._zod.def);
		if (!def || params?.parent) cl._zod.parent = inst;
		return cl;
	}
	function normalizeParams(_params) {
		const params = _params;
		if (!params) return {};
		if (typeof params === "string") return { error: () => params };
		if (params?.message !== void 0) {
			if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
			params.error = params.message;
		}
		delete params.message;
		if (typeof params.error === "string") return {
			...params,
			error: () => params.error
		};
		return params;
	}
	function createTransparentProxy(getter) {
		let target;
		return new Proxy({}, {
			get(_, prop, receiver) {
				target ?? (target = getter());
				return Reflect.get(target, prop, receiver);
			},
			set(_, prop, value, receiver) {
				target ?? (target = getter());
				return Reflect.set(target, prop, value, receiver);
			},
			has(_, prop) {
				target ?? (target = getter());
				return Reflect.has(target, prop);
			},
			deleteProperty(_, prop) {
				target ?? (target = getter());
				return Reflect.deleteProperty(target, prop);
			},
			ownKeys(_) {
				target ?? (target = getter());
				return Reflect.ownKeys(target);
			},
			getOwnPropertyDescriptor(_, prop) {
				target ?? (target = getter());
				return Reflect.getOwnPropertyDescriptor(target, prop);
			},
			defineProperty(_, prop, descriptor) {
				target ?? (target = getter());
				return Reflect.defineProperty(target, prop, descriptor);
			}
		});
	}
	function stringifyPrimitive(value) {
		if (typeof value === "bigint") return value.toString() + "n";
		if (typeof value === "string") return `"${value}"`;
		return `${value}`;
	}
	function optionalKeys(shape) {
		return Object.keys(shape).filter((k) => {
			return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
		});
	}
	var NUMBER_FORMAT_RANGES = {
		safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
	};
	var BIGINT_FORMAT_RANGES = {
		int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
		uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
	};
	function pick(schema, mask) {
		const newShape = {};
		const currDef = schema._zod.def;
		for (const key in mask) {
			if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			newShape[key] = currDef.shape[key];
		}
		return clone(schema, {
			...schema._zod.def,
			shape: newShape,
			checks: []
		});
	}
	function omit(schema, mask) {
		const newShape = { ...schema._zod.def.shape };
		const currDef = schema._zod.def;
		for (const key in mask) {
			if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			delete newShape[key];
		}
		return clone(schema, {
			...schema._zod.def,
			shape: newShape,
			checks: []
		});
	}
	function extend(schema, shape) {
		if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
		return clone(schema, {
			...schema._zod.def,
			get shape() {
				const _shape = {
					...schema._zod.def.shape,
					...shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			},
			checks: []
		});
	}
	function merge(a, b) {
		return clone(a, {
			...a._zod.def,
			get shape() {
				const _shape = {
					...a._zod.def.shape,
					...b._zod.def.shape
				};
				assignProp(this, "shape", _shape);
				return _shape;
			},
			catchall: b._zod.def.catchall,
			checks: []
		});
	}
	function partial(Class, schema, mask) {
		const oldShape = schema._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key in mask) {
			if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			shape[key] = Class ? new Class({
				type: "optional",
				innerType: oldShape[key]
			}) : oldShape[key];
		}
		else for (const key in oldShape) shape[key] = Class ? new Class({
			type: "optional",
			innerType: oldShape[key]
		}) : oldShape[key];
		return clone(schema, {
			...schema._zod.def,
			shape,
			checks: []
		});
	}
	function required(Class, schema, mask) {
		const oldShape = schema._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key in mask) {
			if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			shape[key] = new Class({
				type: "nonoptional",
				innerType: oldShape[key]
			});
		}
		else for (const key in oldShape) shape[key] = new Class({
			type: "nonoptional",
			innerType: oldShape[key]
		});
		return clone(schema, {
			...schema._zod.def,
			shape,
			checks: []
		});
	}
	function aborted(x, startIndex = 0) {
		for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
		return false;
	}
	function prefixIssues(path, issues) {
		return issues.map((iss) => {
			var _a;
			(_a = iss).path ?? (_a.path = []);
			iss.path.unshift(path);
			return iss;
		});
	}
	function unwrapMessage(message) {
		return typeof message === "string" ? message : message?.message;
	}
	function finalizeIssue(iss, ctx, config) {
		const full = {
			...iss,
			path: iss.path ?? []
		};
		if (!iss.message) full.message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
		delete full.inst;
		delete full.continue;
		if (!ctx?.reportInput) delete full.input;
		return full;
	}
	function getSizableOrigin(input) {
		if (input instanceof Set) return "set";
		if (input instanceof Map) return "map";
		if (input instanceof File) return "file";
		return "unknown";
	}
	function getLengthableOrigin(input) {
		if (Array.isArray(input)) return "array";
		if (typeof input === "string") return "string";
		return "unknown";
	}
	function issue(...args) {
		const [iss, input, inst] = args;
		if (typeof iss === "string") return {
			message: iss,
			code: "custom",
			input,
			inst
		};
		return { ...iss };
	}
	function cleanEnum(obj) {
		return Object.entries(obj).filter(([k, _]) => {
			return Number.isNaN(Number.parseInt(k, 10));
		}).map((el) => el[1]);
	}
	var Class = class {
		constructor(..._args) {}
	};

//#endregion
//#region node_modules/zod/v4/core/errors.js
	var initializer$1 = /* @__PURE__ */ __name((inst, def) => {
		inst.name = "$ZodError";
		Object.defineProperty(inst, "_zod", {
			value: inst._zod,
			enumerable: false
		});
		Object.defineProperty(inst, "issues", {
			value: def,
			enumerable: false
		});
		Object.defineProperty(inst, "message", {
			get() {
				return JSON.stringify(def, jsonStringifyReplacer, 2);
			},
			enumerable: true
		});
		Object.defineProperty(inst, "toString", {
			value: () => inst.message,
			enumerable: false
		});
	}, "initializer");
	var $ZodError = $constructor("$ZodError", initializer$1);
	var $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
	function flattenError(error, mapper = (issue) => issue.message) {
		const fieldErrors = {};
		const formErrors = [];
		for (const sub of error.issues) if (sub.path.length > 0) {
			fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
			fieldErrors[sub.path[0]].push(mapper(sub));
		} else formErrors.push(mapper(sub));
		return {
			formErrors,
			fieldErrors
		};
	}
	function formatError(error, _mapper) {
		const mapper = _mapper || function(issue) {
			return issue.message;
		};
		const fieldErrors = { _errors: [] };
		const processError = (error) => {
			for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }));
			else if (issue.code === "invalid_key") processError({ issues: issue.issues });
			else if (issue.code === "invalid_element") processError({ issues: issue.issues });
			else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < issue.path.length) {
					const el = issue.path[i];
					if (!(i === issue.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue));
					}
					curr = curr[el];
					i++;
				}
			}
		};
		processError(error);
		return fieldErrors;
	}
	function treeifyError(error, _mapper) {
		const mapper = _mapper || function(issue) {
			return issue.message;
		};
		const result = { errors: [] };
		const processError = (error, path = []) => {
			var _a;
			var _b;
			for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, issue.path));
			else if (issue.code === "invalid_key") processError({ issues: issue.issues }, issue.path);
			else if (issue.code === "invalid_element") processError({ issues: issue.issues }, issue.path);
			else {
				const fullpath = [...path, ...issue.path];
				if (fullpath.length === 0) {
					result.errors.push(mapper(issue));
					continue;
				}
				let curr = result;
				let i = 0;
				while (i < fullpath.length) {
					const el = fullpath[i];
					const terminal = i === fullpath.length - 1;
					if (typeof el === "string") {
						curr.properties ?? (curr.properties = {});
						(_a = curr.properties)[el] ?? (_a[el] = { errors: [] });
						curr = curr.properties[el];
					} else {
						curr.items ?? (curr.items = []);
						(_b = curr.items)[el] ?? (_b[el] = { errors: [] });
						curr = curr.items[el];
					}
					if (terminal) curr.errors.push(mapper(issue));
					i++;
				}
			}
		};
		processError(error);
		return result;
	}
	/** Format a ZodError as a human-readable string in the following form.
	*
	* From
	*
	* ```ts
	* ZodError {
	*   issues: [
	*     {
	*       expected: 'string',
	*       code: 'invalid_type',
	*       path: [ 'username' ],
	*       message: 'Invalid input: expected string'
	*     },
	*     {
	*       expected: 'number',
	*       code: 'invalid_type',
	*       path: [ 'favoriteNumbers', 1 ],
	*       message: 'Invalid input: expected number'
	*     }
	*   ];
	* }
	* ```
	*
	* to
	*
	* ```
	* username
	*   ✖ Expected number, received string at "username
	* favoriteNumbers[0]
	*   ✖ Invalid input: expected number
	* ```
	*/
	function toDotPath(path) {
		const segs = [];
		for (const seg of path) if (typeof seg === "number") segs.push(`[${seg}]`);
		else if (typeof seg === "symbol") segs.push(`[${JSON.stringify(String(seg))}]`);
		else if (/[^\w$]/.test(seg)) segs.push(`[${JSON.stringify(seg)}]`);
		else {
			if (segs.length) segs.push(".");
			segs.push(seg);
		}
		return segs.join("");
	}
	function prettifyError(error) {
		const lines = [];
		const issues = [...error.issues].sort((a, b) => a.path.length - b.path.length);
		for (const issue of issues) {
			lines.push(`✖ ${issue.message}`);
			if (issue.path?.length) lines.push(`  → at ${toDotPath(issue.path)}`);
		}
		return lines.join("\n");
	}

//#endregion
//#region node_modules/zod/v4/core/parse.js
	var _parse = (_Err) => (schema, value, _ctx, _params) => {
		const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
		const result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) throw new $ZodAsyncError();
		if (result.issues.length) {
			const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
			captureStackTrace(e, _params?.callee);
			throw e;
		}
		return result.value;
	};
	var parse$1 = /* @__PURE__*/ _parse($ZodRealError);
	var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
		const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
		let result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) result = await result;
		if (result.issues.length) {
			const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
			captureStackTrace(e, params?.callee);
			throw e;
		}
		return result.value;
	};
	var parseAsync$1 = /* @__PURE__*/ _parseAsync($ZodRealError);
	var _safeParse = (_Err) => (schema, value, _ctx) => {
		const ctx = _ctx ? {
			..._ctx,
			async: false
		} : { async: false };
		const result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) throw new $ZodAsyncError();
		return result.issues.length ? {
			success: false,
			error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
		} : {
			success: true,
			data: result.value
		};
	};
	var safeParse$1 = /* @__PURE__*/ _safeParse($ZodRealError);
	var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
		const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
		let result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) result = await result;
		return result.issues.length ? {
			success: false,
			error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
		} : {
			success: true,
			data: result.value
		};
	};
	var safeParseAsync$1 = /* @__PURE__*/ _safeParseAsync($ZodRealError);

//#endregion
//#region node_modules/zod/v4/core/regexes.js
	var regexes_exports = /* @__PURE__ */ __exportAll({
		_emoji: () => _emoji$1,
		base64: () => base64$1,
		base64url: () => base64url$1,
		bigint: () => bigint$2,
		boolean: () => boolean$2,
		browserEmail: () => browserEmail,
		cidrv4: () => cidrv4$1,
		cidrv6: () => cidrv6$1,
		cuid: () => cuid$1,
		cuid2: () => cuid2$1,
		date: () => date$3,
		datetime: () => datetime$1,
		domain: () => domain,
		duration: () => duration$1,
		e164: () => e164$1,
		email: () => email$1,
		emoji: () => emoji$1,
		extendedDuration: () => extendedDuration,
		guid: () => guid$1,
		hostname: () => hostname,
		html5Email: () => html5Email,
		integer: () => integer,
		ipv4: () => ipv4$1,
		ipv6: () => ipv6$1,
		ksuid: () => ksuid$1,
		lowercase: () => lowercase,
		nanoid: () => nanoid$1,
		null: () => _null$2,
		number: () => number$2,
		rfc5322Email: () => rfc5322Email,
		string: () => string$2,
		time: () => time$1,
		ulid: () => ulid$1,
		undefined: () => _undefined$2,
		unicodeEmail: () => unicodeEmail,
		uppercase: () => uppercase,
		uuid: () => uuid$1,
		uuid4: () => uuid4,
		uuid6: () => uuid6,
		uuid7: () => uuid7,
		xid: () => xid$1
	});
	var cuid$1 = /^[cC][^\s-]{8,}$/;
	var cuid2$1 = /^[0-9a-z]+$/;
	var ulid$1 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
	var xid$1 = /^[0-9a-vA-V]{20}$/;
	var ksuid$1 = /^[A-Za-z0-9]{27}$/;
	var nanoid$1 = /^[a-zA-Z0-9_-]{21}$/;
	/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
	var duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
	/** Implements ISO 8601-2 extensions like explicit +- prefixes, mixing weeks with other units, and fractional/negative components. */
	var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
	/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
	var guid$1 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
	/** Returns a regex for validating an RFC 4122 UUID.
	*
	* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
	var uuid$1 = /* @__PURE__ */ __name((version) => {
		if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
		return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
	}, "uuid");
	var uuid4 = /*@__PURE__*/ uuid$1(4);
	var uuid6 = /*@__PURE__*/ uuid$1(6);
	var uuid7 = /*@__PURE__*/ uuid$1(7);
	/** Practical email validation */
	var email$1 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
	/** Equivalent to the HTML5 input[type=email] validation implemented by browsers. Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email */
	var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	/** The classic emailregex.com regex for RFC 5322-compliant emails */
	var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	/** A loose regex that allows Unicode characters, enforces length limits, and that's about it. */
	var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
	var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	var _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
	function emoji$1() {
		return new RegExp(_emoji$1, "u");
	}
	__name(emoji$1, "emoji");
	var ipv4$1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
	var ipv6$1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
	var cidrv4$1 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
	var cidrv6$1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
	var base64$1 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
	var base64url$1 = /^[A-Za-z0-9_-]*$/;
	var hostname = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
	var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
	var e164$1 = /^\+(?:[0-9]){6,14}[0-9]$/;
	var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
	var date$3 = /*@__PURE__*/ new RegExp(`^${dateSource}$`);
	function timeSource(args) {
		const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
		return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
	}
	function time$1(args) {
		return new RegExp(`^${timeSource(args)}$`);
	}
	__name(time$1, "time");
	function datetime$1(args) {
		const time = timeSource({ precision: args.precision });
		const opts = ["Z"];
		if (args.local) opts.push("");
		if (args.offset) opts.push(`([+-]\\d{2}:\\d{2})`);
		const timeRegex = `${time}(?:${opts.join("|")})`;
		return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
	}
	__name(datetime$1, "datetime");
	var string$2 = /* @__PURE__ */ __name((params) => {
		const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
		return new RegExp(`^${regex}$`);
	}, "string");
	var bigint$2 = /^\d+n?$/;
	var integer = /^\d+$/;
	var number$2 = /^-?\d+(?:\.\d+)?/i;
	var boolean$2 = /true|false/i;
	var _null$2 = /null/i;
	var _undefined$2 = /undefined/i;
	var lowercase = /^[^A-Z]*$/;
	var uppercase = /^[^a-z]*$/;

//#endregion
//#region node_modules/zod/v4/core/checks.js
	var $ZodCheck = /*@__PURE__*/ $constructor("$ZodCheck", (inst, def) => {
		var _a;
		inst._zod ?? (inst._zod = {});
		inst._zod.def = def;
		(_a = inst._zod).onattach ?? (_a.onattach = []);
	});
	var numericOriginMap = {
		number: "number",
		bigint: "bigint",
		object: "date"
	};
	var $ZodCheckLessThan = /*@__PURE__*/ $constructor("$ZodCheckLessThan", (inst, def) => {
		$ZodCheck.init(inst, def);
		const origin = numericOriginMap[typeof def.value];
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
			if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
			else bag.exclusiveMaximum = def.value;
		});
		inst._zod.check = (payload) => {
			if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
			payload.issues.push({
				origin,
				code: "too_big",
				maximum: def.value,
				input: payload.value,
				inclusive: def.inclusive,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckGreaterThan = /*@__PURE__*/ $constructor("$ZodCheckGreaterThan", (inst, def) => {
		$ZodCheck.init(inst, def);
		const origin = numericOriginMap[typeof def.value];
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
			if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
			else bag.exclusiveMinimum = def.value;
		});
		inst._zod.check = (payload) => {
			if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
			payload.issues.push({
				origin,
				code: "too_small",
				minimum: def.value,
				input: payload.value,
				inclusive: def.inclusive,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckMultipleOf = /*@__PURE__*/ $constructor("$ZodCheckMultipleOf", (inst, def) => {
		$ZodCheck.init(inst, def);
		inst._zod.onattach.push((inst) => {
			var _a;
			(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
		});
		inst._zod.check = (payload) => {
			if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
			if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
			payload.issues.push({
				origin: typeof payload.value,
				code: "not_multiple_of",
				divisor: def.value,
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckNumberFormat = /*@__PURE__*/ $constructor("$ZodCheckNumberFormat", (inst, def) => {
		$ZodCheck.init(inst, def);
		def.format = def.format || "float64";
		const isInt = def.format?.includes("int");
		const origin = isInt ? "int" : "number";
		const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.format = def.format;
			bag.minimum = minimum;
			bag.maximum = maximum;
			if (isInt) bag.pattern = integer;
		});
		inst._zod.check = (payload) => {
			const input = payload.value;
			if (isInt) {
				if (!Number.isInteger(input)) {
					payload.issues.push({
						expected: origin,
						format: def.format,
						code: "invalid_type",
						input,
						inst
					});
					return;
				}
				if (!Number.isSafeInteger(input)) {
					if (input > 0) payload.issues.push({
						input,
						code: "too_big",
						maximum: Number.MAX_SAFE_INTEGER,
						note: "Integers must be within the safe integer range.",
						inst,
						origin,
						continue: !def.abort
					});
					else payload.issues.push({
						input,
						code: "too_small",
						minimum: Number.MIN_SAFE_INTEGER,
						note: "Integers must be within the safe integer range.",
						inst,
						origin,
						continue: !def.abort
					});
					return;
				}
			}
			if (input < minimum) payload.issues.push({
				origin: "number",
				input,
				code: "too_small",
				minimum,
				inclusive: true,
				inst,
				continue: !def.abort
			});
			if (input > maximum) payload.issues.push({
				origin: "number",
				input,
				code: "too_big",
				maximum,
				inst
			});
		};
	});
	var $ZodCheckBigIntFormat = /*@__PURE__*/ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
		$ZodCheck.init(inst, def);
		const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.format = def.format;
			bag.minimum = minimum;
			bag.maximum = maximum;
		});
		inst._zod.check = (payload) => {
			const input = payload.value;
			if (input < minimum) payload.issues.push({
				origin: "bigint",
				input,
				code: "too_small",
				minimum,
				inclusive: true,
				inst,
				continue: !def.abort
			});
			if (input > maximum) payload.issues.push({
				origin: "bigint",
				input,
				code: "too_big",
				maximum,
				inst
			});
		};
	});
	var $ZodCheckMaxSize = /*@__PURE__*/ $constructor("$ZodCheckMaxSize", (inst, def) => {
		var _a;
		$ZodCheck.init(inst, def);
		(_a = inst._zod.def).when ?? (_a.when = (payload) => {
			const val = payload.value;
			return !nullish$1(val) && val.size !== void 0;
		});
		inst._zod.onattach.push((inst) => {
			const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
			if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
		});
		inst._zod.check = (payload) => {
			const input = payload.value;
			if (input.size <= def.maximum) return;
			payload.issues.push({
				origin: getSizableOrigin(input),
				code: "too_big",
				maximum: def.maximum,
				input,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckMinSize = /*@__PURE__*/ $constructor("$ZodCheckMinSize", (inst, def) => {
		var _a;
		$ZodCheck.init(inst, def);
		(_a = inst._zod.def).when ?? (_a.when = (payload) => {
			const val = payload.value;
			return !nullish$1(val) && val.size !== void 0;
		});
		inst._zod.onattach.push((inst) => {
			const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
			if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
		});
		inst._zod.check = (payload) => {
			const input = payload.value;
			if (input.size >= def.minimum) return;
			payload.issues.push({
				origin: getSizableOrigin(input),
				code: "too_small",
				minimum: def.minimum,
				input,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckSizeEquals = /*@__PURE__*/ $constructor("$ZodCheckSizeEquals", (inst, def) => {
		var _a;
		$ZodCheck.init(inst, def);
		(_a = inst._zod.def).when ?? (_a.when = (payload) => {
			const val = payload.value;
			return !nullish$1(val) && val.size !== void 0;
		});
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.minimum = def.size;
			bag.maximum = def.size;
			bag.size = def.size;
		});
		inst._zod.check = (payload) => {
			const input = payload.value;
			const size = input.size;
			if (size === def.size) return;
			const tooBig = size > def.size;
			payload.issues.push({
				origin: getSizableOrigin(input),
				...tooBig ? {
					code: "too_big",
					maximum: def.size
				} : {
					code: "too_small",
					minimum: def.size
				},
				inclusive: true,
				exact: true,
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckMaxLength = /*@__PURE__*/ $constructor("$ZodCheckMaxLength", (inst, def) => {
		var _a;
		$ZodCheck.init(inst, def);
		(_a = inst._zod.def).when ?? (_a.when = (payload) => {
			const val = payload.value;
			return !nullish$1(val) && val.length !== void 0;
		});
		inst._zod.onattach.push((inst) => {
			const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
			if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
		});
		inst._zod.check = (payload) => {
			const input = payload.value;
			if (input.length <= def.maximum) return;
			const origin = getLengthableOrigin(input);
			payload.issues.push({
				origin,
				code: "too_big",
				maximum: def.maximum,
				inclusive: true,
				input,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckMinLength = /*@__PURE__*/ $constructor("$ZodCheckMinLength", (inst, def) => {
		var _a;
		$ZodCheck.init(inst, def);
		(_a = inst._zod.def).when ?? (_a.when = (payload) => {
			const val = payload.value;
			return !nullish$1(val) && val.length !== void 0;
		});
		inst._zod.onattach.push((inst) => {
			const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
			if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
		});
		inst._zod.check = (payload) => {
			const input = payload.value;
			if (input.length >= def.minimum) return;
			const origin = getLengthableOrigin(input);
			payload.issues.push({
				origin,
				code: "too_small",
				minimum: def.minimum,
				inclusive: true,
				input,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckLengthEquals = /*@__PURE__*/ $constructor("$ZodCheckLengthEquals", (inst, def) => {
		var _a;
		$ZodCheck.init(inst, def);
		(_a = inst._zod.def).when ?? (_a.when = (payload) => {
			const val = payload.value;
			return !nullish$1(val) && val.length !== void 0;
		});
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.minimum = def.length;
			bag.maximum = def.length;
			bag.length = def.length;
		});
		inst._zod.check = (payload) => {
			const input = payload.value;
			const length = input.length;
			if (length === def.length) return;
			const origin = getLengthableOrigin(input);
			const tooBig = length > def.length;
			payload.issues.push({
				origin,
				...tooBig ? {
					code: "too_big",
					maximum: def.length
				} : {
					code: "too_small",
					minimum: def.length
				},
				inclusive: true,
				exact: true,
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckStringFormat = /*@__PURE__*/ $constructor("$ZodCheckStringFormat", (inst, def) => {
		var _a;
		var _b;
		$ZodCheck.init(inst, def);
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.format = def.format;
			if (def.pattern) {
				bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
				bag.patterns.add(def.pattern);
			}
		});
		if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
			def.pattern.lastIndex = 0;
			if (def.pattern.test(payload.value)) return;
			payload.issues.push({
				origin: "string",
				code: "invalid_format",
				format: def.format,
				input: payload.value,
				...def.pattern ? { pattern: def.pattern.toString() } : {},
				inst,
				continue: !def.abort
			});
		});
		else (_b = inst._zod).check ?? (_b.check = () => {});
	});
	var $ZodCheckRegex = /*@__PURE__*/ $constructor("$ZodCheckRegex", (inst, def) => {
		$ZodCheckStringFormat.init(inst, def);
		inst._zod.check = (payload) => {
			def.pattern.lastIndex = 0;
			if (def.pattern.test(payload.value)) return;
			payload.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "regex",
				input: payload.value,
				pattern: def.pattern.toString(),
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckLowerCase = /*@__PURE__*/ $constructor("$ZodCheckLowerCase", (inst, def) => {
		def.pattern ?? (def.pattern = lowercase);
		$ZodCheckStringFormat.init(inst, def);
	});
	var $ZodCheckUpperCase = /*@__PURE__*/ $constructor("$ZodCheckUpperCase", (inst, def) => {
		def.pattern ?? (def.pattern = uppercase);
		$ZodCheckStringFormat.init(inst, def);
	});
	var $ZodCheckIncludes = /*@__PURE__*/ $constructor("$ZodCheckIncludes", (inst, def) => {
		$ZodCheck.init(inst, def);
		const escapedRegex = escapeRegex(def.includes);
		const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
		def.pattern = pattern;
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(pattern);
		});
		inst._zod.check = (payload) => {
			if (payload.value.includes(def.includes, def.position)) return;
			payload.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "includes",
				includes: def.includes,
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckStartsWith = /*@__PURE__*/ $constructor("$ZodCheckStartsWith", (inst, def) => {
		$ZodCheck.init(inst, def);
		const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
		def.pattern ?? (def.pattern = pattern);
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(pattern);
		});
		inst._zod.check = (payload) => {
			if (payload.value.startsWith(def.prefix)) return;
			payload.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "starts_with",
				prefix: def.prefix,
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCheckEndsWith = /*@__PURE__*/ $constructor("$ZodCheckEndsWith", (inst, def) => {
		$ZodCheck.init(inst, def);
		const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
		def.pattern ?? (def.pattern = pattern);
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(pattern);
		});
		inst._zod.check = (payload) => {
			if (payload.value.endsWith(def.suffix)) return;
			payload.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "ends_with",
				suffix: def.suffix,
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	function handleCheckPropertyResult(result, payload, property) {
		if (result.issues.length) payload.issues.push(...prefixIssues(property, result.issues));
	}
	var $ZodCheckProperty = /*@__PURE__*/ $constructor("$ZodCheckProperty", (inst, def) => {
		$ZodCheck.init(inst, def);
		inst._zod.check = (payload) => {
			const result = def.schema._zod.run({
				value: payload.value[def.property],
				issues: []
			}, {});
			if (result instanceof Promise) return result.then((result) => handleCheckPropertyResult(result, payload, def.property));
			handleCheckPropertyResult(result, payload, def.property);
		};
	});
	var $ZodCheckMimeType = /*@__PURE__*/ $constructor("$ZodCheckMimeType", (inst, def) => {
		$ZodCheck.init(inst, def);
		const mimeSet = new Set(def.mime);
		inst._zod.onattach.push((inst) => {
			inst._zod.bag.mime = def.mime;
		});
		inst._zod.check = (payload) => {
			if (mimeSet.has(payload.value.type)) return;
			payload.issues.push({
				code: "invalid_value",
				values: def.mime,
				input: payload.value.type,
				inst
			});
		};
	});
	var $ZodCheckOverwrite = /*@__PURE__*/ $constructor("$ZodCheckOverwrite", (inst, def) => {
		$ZodCheck.init(inst, def);
		inst._zod.check = (payload) => {
			payload.value = def.tx(payload.value);
		};
	});

//#endregion
//#region node_modules/zod/v4/core/doc.js
	var Doc = class {
		constructor(args = []) {
			this.content = [];
			this.indent = 0;
			if (this) this.args = args;
		}
		indented(fn) {
			this.indent += 1;
			fn(this);
			this.indent -= 1;
		}
		write(arg) {
			if (typeof arg === "function") {
				arg(this, { execution: "sync" });
				arg(this, { execution: "async" });
				return;
			}
			const lines = arg.split("\n").filter((x) => x);
			const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
			const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
			for (const line of dedented) this.content.push(line);
		}
		compile() {
			const F = Function;
			const args = this?.args;
			const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
			return new F(...args, lines.join("\n"));
		}
	};

//#endregion
//#region node_modules/zod/v4/core/versions.js
	var version = {
		major: 4,
		minor: 0,
		patch: 0
	};

//#endregion
//#region node_modules/zod/v4/core/schemas.js
	var $ZodType = /*@__PURE__*/ $constructor("$ZodType", (inst, def) => {
		var _a;
		inst ?? (inst = {});
		inst._zod.def = def;
		inst._zod.bag = inst._zod.bag || {};
		inst._zod.version = version;
		const checks = [...inst._zod.def.checks ?? []];
		if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
		for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
		if (checks.length === 0) {
			(_a = inst._zod).deferred ?? (_a.deferred = []);
			inst._zod.deferred?.push(() => {
				inst._zod.run = inst._zod.parse;
			});
		} else {
			const runChecks = (payload, checks, ctx) => {
				let isAborted = aborted(payload);
				let asyncResult;
				for (const ch of checks) {
					if (ch._zod.def.when) {
						if (!ch._zod.def.when(payload)) continue;
					} else if (isAborted) continue;
					const currLen = payload.issues.length;
					const _ = ch._zod.check(payload);
					if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
					if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
						await _;
						if (payload.issues.length === currLen) return;
						if (!isAborted) isAborted = aborted(payload, currLen);
					});
					else {
						if (payload.issues.length === currLen) continue;
						if (!isAborted) isAborted = aborted(payload, currLen);
					}
				}
				if (asyncResult) return asyncResult.then(() => {
					return payload;
				});
				return payload;
			};
			inst._zod.run = (payload, ctx) => {
				const result = inst._zod.parse(payload, ctx);
				if (result instanceof Promise) {
					if (ctx.async === false) throw new $ZodAsyncError();
					return result.then((result) => runChecks(result, checks, ctx));
				}
				return runChecks(result, checks, ctx);
			};
		}
		inst["~standard"] = {
			validate: (value) => {
				try {
					const r = safeParse$1(inst, value);
					return r.success ? { value: r.data } : { issues: r.error?.issues };
				} catch (_) {
					return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
				}
			},
			vendor: "zod",
			version: 1
		};
	});
	var $ZodString = /*@__PURE__*/ $constructor("$ZodString", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$2(inst._zod.bag);
		inst._zod.parse = (payload, _) => {
			if (def.coerce) try {
				payload.value = String(payload.value);
			} catch (_) {}
			if (typeof payload.value === "string") return payload;
			payload.issues.push({
				expected: "string",
				code: "invalid_type",
				input: payload.value,
				inst
			});
			return payload;
		};
	});
	var $ZodStringFormat = /*@__PURE__*/ $constructor("$ZodStringFormat", (inst, def) => {
		$ZodCheckStringFormat.init(inst, def);
		$ZodString.init(inst, def);
	});
	var $ZodGUID = /*@__PURE__*/ $constructor("$ZodGUID", (inst, def) => {
		def.pattern ?? (def.pattern = guid$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodUUID = /*@__PURE__*/ $constructor("$ZodUUID", (inst, def) => {
		if (def.version) {
			const v = {
				v1: 1,
				v2: 2,
				v3: 3,
				v4: 4,
				v5: 5,
				v6: 6,
				v7: 7,
				v8: 8
			}[def.version];
			if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
			def.pattern ?? (def.pattern = uuid$1(v));
		} else def.pattern ?? (def.pattern = uuid$1());
		$ZodStringFormat.init(inst, def);
	});
	var $ZodEmail = /*@__PURE__*/ $constructor("$ZodEmail", (inst, def) => {
		def.pattern ?? (def.pattern = email$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodURL = /*@__PURE__*/ $constructor("$ZodURL", (inst, def) => {
		$ZodStringFormat.init(inst, def);
		inst._zod.check = (payload) => {
			try {
				const orig = payload.value;
				const url = new URL(orig);
				const href = url.href;
				if (def.hostname) {
					def.hostname.lastIndex = 0;
					if (!def.hostname.test(url.hostname)) payload.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid hostname",
						pattern: hostname.source,
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
				if (def.protocol) {
					def.protocol.lastIndex = 0;
					if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid protocol",
						pattern: def.protocol.source,
						input: payload.value,
						inst,
						continue: !def.abort
					});
				}
				if (!orig.endsWith("/") && href.endsWith("/")) payload.value = href.slice(0, -1);
				else payload.value = href;
				return;
			} catch (_) {
				payload.issues.push({
					code: "invalid_format",
					format: "url",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
		};
	});
	var $ZodEmoji = /*@__PURE__*/ $constructor("$ZodEmoji", (inst, def) => {
		def.pattern ?? (def.pattern = emoji$1());
		$ZodStringFormat.init(inst, def);
	});
	var $ZodNanoID = /*@__PURE__*/ $constructor("$ZodNanoID", (inst, def) => {
		def.pattern ?? (def.pattern = nanoid$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodCUID = /*@__PURE__*/ $constructor("$ZodCUID", (inst, def) => {
		def.pattern ?? (def.pattern = cuid$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodCUID2 = /*@__PURE__*/ $constructor("$ZodCUID2", (inst, def) => {
		def.pattern ?? (def.pattern = cuid2$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodULID = /*@__PURE__*/ $constructor("$ZodULID", (inst, def) => {
		def.pattern ?? (def.pattern = ulid$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodXID = /*@__PURE__*/ $constructor("$ZodXID", (inst, def) => {
		def.pattern ?? (def.pattern = xid$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodKSUID = /*@__PURE__*/ $constructor("$ZodKSUID", (inst, def) => {
		def.pattern ?? (def.pattern = ksuid$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodISODateTime = /*@__PURE__*/ $constructor("$ZodISODateTime", (inst, def) => {
		def.pattern ?? (def.pattern = datetime$1(def));
		$ZodStringFormat.init(inst, def);
	});
	var $ZodISODate = /*@__PURE__*/ $constructor("$ZodISODate", (inst, def) => {
		def.pattern ?? (def.pattern = date$3);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodISOTime = /*@__PURE__*/ $constructor("$ZodISOTime", (inst, def) => {
		def.pattern ?? (def.pattern = time$1(def));
		$ZodStringFormat.init(inst, def);
	});
	var $ZodISODuration = /*@__PURE__*/ $constructor("$ZodISODuration", (inst, def) => {
		def.pattern ?? (def.pattern = duration$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodIPv4 = /*@__PURE__*/ $constructor("$ZodIPv4", (inst, def) => {
		def.pattern ?? (def.pattern = ipv4$1);
		$ZodStringFormat.init(inst, def);
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.format = `ipv4`;
		});
	});
	var $ZodIPv6 = /*@__PURE__*/ $constructor("$ZodIPv6", (inst, def) => {
		def.pattern ?? (def.pattern = ipv6$1);
		$ZodStringFormat.init(inst, def);
		inst._zod.onattach.push((inst) => {
			const bag = inst._zod.bag;
			bag.format = `ipv6`;
		});
		inst._zod.check = (payload) => {
			try {
				new URL(`http://[${payload.value}]`);
			} catch {
				payload.issues.push({
					code: "invalid_format",
					format: "ipv6",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
		};
	});
	var $ZodCIDRv4 = /*@__PURE__*/ $constructor("$ZodCIDRv4", (inst, def) => {
		def.pattern ?? (def.pattern = cidrv4$1);
		$ZodStringFormat.init(inst, def);
	});
	var $ZodCIDRv6 = /*@__PURE__*/ $constructor("$ZodCIDRv6", (inst, def) => {
		def.pattern ?? (def.pattern = cidrv6$1);
		$ZodStringFormat.init(inst, def);
		inst._zod.check = (payload) => {
			const [address, prefix] = payload.value.split("/");
			try {
				if (!prefix) throw new Error();
				const prefixNum = Number(prefix);
				if (`${prefixNum}` !== prefix) throw new Error();
				if (prefixNum < 0 || prefixNum > 128) throw new Error();
				new URL(`http://[${address}]`);
			} catch {
				payload.issues.push({
					code: "invalid_format",
					format: "cidrv6",
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
		};
	});
	function isValidBase64(data) {
		if (data === "") return true;
		if (data.length % 4 !== 0) return false;
		try {
			atob(data);
			return true;
		} catch {
			return false;
		}
	}
	var $ZodBase64 = /*@__PURE__*/ $constructor("$ZodBase64", (inst, def) => {
		def.pattern ?? (def.pattern = base64$1);
		$ZodStringFormat.init(inst, def);
		inst._zod.onattach.push((inst) => {
			inst._zod.bag.contentEncoding = "base64";
		});
		inst._zod.check = (payload) => {
			if (isValidBase64(payload.value)) return;
			payload.issues.push({
				code: "invalid_format",
				format: "base64",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	function isValidBase64URL(data) {
		if (!base64url$1.test(data)) return false;
		const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
		return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
	}
	var $ZodBase64URL = /*@__PURE__*/ $constructor("$ZodBase64URL", (inst, def) => {
		def.pattern ?? (def.pattern = base64url$1);
		$ZodStringFormat.init(inst, def);
		inst._zod.onattach.push((inst) => {
			inst._zod.bag.contentEncoding = "base64url";
		});
		inst._zod.check = (payload) => {
			if (isValidBase64URL(payload.value)) return;
			payload.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodE164 = /*@__PURE__*/ $constructor("$ZodE164", (inst, def) => {
		def.pattern ?? (def.pattern = e164$1);
		$ZodStringFormat.init(inst, def);
	});
	function isValidJWT(token, algorithm = null) {
		try {
			const tokensParts = token.split(".");
			if (tokensParts.length !== 3) return false;
			const [header] = tokensParts;
			if (!header) return false;
			const parsedHeader = JSON.parse(atob(header));
			if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
			if (!parsedHeader.alg) return false;
			if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
			return true;
		} catch {
			return false;
		}
	}
	var $ZodJWT = /*@__PURE__*/ $constructor("$ZodJWT", (inst, def) => {
		$ZodStringFormat.init(inst, def);
		inst._zod.check = (payload) => {
			if (isValidJWT(payload.value, def.alg)) return;
			payload.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodCustomStringFormat = /*@__PURE__*/ $constructor("$ZodCustomStringFormat", (inst, def) => {
		$ZodStringFormat.init(inst, def);
		inst._zod.check = (payload) => {
			if (def.fn(payload.value)) return;
			payload.issues.push({
				code: "invalid_format",
				format: def.format,
				input: payload.value,
				inst,
				continue: !def.abort
			});
		};
	});
	var $ZodNumber = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.pattern = inst._zod.bag.pattern ?? number$2;
		inst._zod.parse = (payload, _ctx) => {
			if (def.coerce) try {
				payload.value = Number(payload.value);
			} catch (_) {}
			const input = payload.value;
			if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
			const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
			payload.issues.push({
				expected: "number",
				code: "invalid_type",
				input,
				inst,
				...received ? { received } : {}
			});
			return payload;
		};
	});
	var $ZodNumberFormat = /*@__PURE__*/ $constructor("$ZodNumber", (inst, def) => {
		$ZodCheckNumberFormat.init(inst, def);
		$ZodNumber.init(inst, def);
	});
	var $ZodBoolean = /*@__PURE__*/ $constructor("$ZodBoolean", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.pattern = boolean$2;
		inst._zod.parse = (payload, _ctx) => {
			if (def.coerce) try {
				payload.value = Boolean(payload.value);
			} catch (_) {}
			const input = payload.value;
			if (typeof input === "boolean") return payload;
			payload.issues.push({
				expected: "boolean",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		};
	});
	var $ZodBigInt = /*@__PURE__*/ $constructor("$ZodBigInt", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.pattern = bigint$2;
		inst._zod.parse = (payload, _ctx) => {
			if (def.coerce) try {
				payload.value = BigInt(payload.value);
			} catch (_) {}
			if (typeof payload.value === "bigint") return payload;
			payload.issues.push({
				expected: "bigint",
				code: "invalid_type",
				input: payload.value,
				inst
			});
			return payload;
		};
	});
	var $ZodBigIntFormat = /*@__PURE__*/ $constructor("$ZodBigInt", (inst, def) => {
		$ZodCheckBigIntFormat.init(inst, def);
		$ZodBigInt.init(inst, def);
	});
	var $ZodSymbol = /*@__PURE__*/ $constructor("$ZodSymbol", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, _ctx) => {
			const input = payload.value;
			if (typeof input === "symbol") return payload;
			payload.issues.push({
				expected: "symbol",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		};
	});
	var $ZodUndefined = /*@__PURE__*/ $constructor("$ZodUndefined", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.pattern = _undefined$2;
		inst._zod.values = /* @__PURE__ */ new Set([void 0]);
		inst._zod.optin = "optional";
		inst._zod.optout = "optional";
		inst._zod.parse = (payload, _ctx) => {
			const input = payload.value;
			if (typeof input === "undefined") return payload;
			payload.issues.push({
				expected: "undefined",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		};
	});
	var $ZodNull = /*@__PURE__*/ $constructor("$ZodNull", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.pattern = _null$2;
		inst._zod.values = /* @__PURE__ */ new Set([null]);
		inst._zod.parse = (payload, _ctx) => {
			const input = payload.value;
			if (input === null) return payload;
			payload.issues.push({
				expected: "null",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		};
	});
	var $ZodAny = /*@__PURE__*/ $constructor("$ZodAny", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload) => payload;
	});
	var $ZodUnknown = /*@__PURE__*/ $constructor("$ZodUnknown", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload) => payload;
	});
	var $ZodNever = /*@__PURE__*/ $constructor("$ZodNever", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, _ctx) => {
			payload.issues.push({
				expected: "never",
				code: "invalid_type",
				input: payload.value,
				inst
			});
			return payload;
		};
	});
	var $ZodVoid = /*@__PURE__*/ $constructor("$ZodVoid", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, _ctx) => {
			const input = payload.value;
			if (typeof input === "undefined") return payload;
			payload.issues.push({
				expected: "void",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		};
	});
	var $ZodDate = /*@__PURE__*/ $constructor("$ZodDate", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, _ctx) => {
			if (def.coerce) try {
				payload.value = new Date(payload.value);
			} catch (_err) {}
			const input = payload.value;
			const isDate = input instanceof Date;
			if (isDate && !Number.isNaN(input.getTime())) return payload;
			payload.issues.push({
				expected: "date",
				code: "invalid_type",
				input,
				...isDate ? { received: "Invalid Date" } : {},
				inst
			});
			return payload;
		};
	});
	function handleArrayResult(result, final, index) {
		if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
		final.value[index] = result.value;
	}
	var $ZodArray = /*@__PURE__*/ $constructor("$ZodArray", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, ctx) => {
			const input = payload.value;
			if (!Array.isArray(input)) {
				payload.issues.push({
					expected: "array",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			}
			payload.value = Array(input.length);
			const proms = [];
			for (let i = 0; i < input.length; i++) {
				const item = input[i];
				const result = def.element._zod.run({
					value: item,
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
				else handleArrayResult(result, payload, i);
			}
			if (proms.length) return Promise.all(proms).then(() => payload);
			return payload;
		};
	});
	function handleObjectResult(result, final, key) {
		if (result.issues.length) final.issues.push(...prefixIssues(key, result.issues));
		final.value[key] = result.value;
	}
	function handleOptionalObjectResult(result, final, key, input) {
		if (result.issues.length) if (input[key] === void 0) if (key in input) final.value[key] = void 0;
		else final.value[key] = result.value;
		else final.issues.push(...prefixIssues(key, result.issues));
		else if (result.value === void 0) {
			if (key in input) final.value[key] = void 0;
		} else final.value[key] = result.value;
	}
	var $ZodObject = /*@__PURE__*/ $constructor("$ZodObject", (inst, def) => {
		$ZodType.init(inst, def);
		const _normalized = cached(() => {
			const keys = Object.keys(def.shape);
			for (const k of keys) if (!(def.shape[k] instanceof $ZodType)) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
			const okeys = optionalKeys(def.shape);
			return {
				shape: def.shape,
				keys,
				keySet: new Set(keys),
				numKeys: keys.length,
				optionalKeys: new Set(okeys)
			};
		});
		defineLazy(inst._zod, "propValues", () => {
			const shape = def.shape;
			const propValues = {};
			for (const key in shape) {
				const field = shape[key]._zod;
				if (field.values) {
					propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
					for (const v of field.values) propValues[key].add(v);
				}
			}
			return propValues;
		});
		const generateFastpass = (shape) => {
			const doc = new Doc([
				"shape",
				"payload",
				"ctx"
			]);
			const normalized = _normalized.value;
			const parseStr = (key) => {
				const k = esc(key);
				return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
			};
			doc.write(`const input = payload.value;`);
			const ids = Object.create(null);
			let counter = 0;
			for (const key of normalized.keys) ids[key] = `key_${counter++}`;
			doc.write(`const newResult = {}`);
			for (const key of normalized.keys) if (normalized.optionalKeys.has(key)) {
				const id = ids[key];
				doc.write(`const ${id} = ${parseStr(key)};`);
				const k = esc(key);
				doc.write(`
        if (${id}.issues.length) {
          if (input[${k}] === undefined) {
            if (${k} in input) {
              newResult[${k}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${id}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${k}, ...iss.path] : [${k}],
              }))
            );
          }
        } else if (${id}.value === undefined) {
          if (${k} in input) newResult[${k}] = undefined;
        } else {
          newResult[${k}] = ${id}.value;
        }
        `);
			} else {
				const id = ids[key];
				doc.write(`const ${id} = ${parseStr(key)};`);
				doc.write(`
          if (${id}.issues.length) payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${esc(key)}, ...iss.path] : [${esc(key)}]
          })));`);
				doc.write(`newResult[${esc(key)}] = ${id}.value`);
			}
			doc.write(`payload.value = newResult;`);
			doc.write(`return payload;`);
			const fn = doc.compile();
			return (payload, ctx) => fn(shape, payload, ctx);
		};
		let fastpass;
		const isObject$1 = isObject;
		const jit = !globalConfig.jitless;
		const allowsEval$1 = allowsEval;
		const fastEnabled = jit && allowsEval$1.value;
		const catchall = def.catchall;
		let value;
		inst._zod.parse = (payload, ctx) => {
			value ?? (value = _normalized.value);
			const input = payload.value;
			if (!isObject$1(input)) {
				payload.issues.push({
					expected: "object",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			}
			const proms = [];
			if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
				if (!fastpass) fastpass = generateFastpass(def.shape);
				payload = fastpass(payload, ctx);
			} else {
				payload.value = {};
				const shape = value.shape;
				for (const key of value.keys) {
					const el = shape[key];
					const r = el._zod.run({
						value: input[key],
						issues: []
					}, ctx);
					const isOptional = el._zod.optin === "optional" && el._zod.optout === "optional";
					if (r instanceof Promise) proms.push(r.then((r) => isOptional ? handleOptionalObjectResult(r, payload, key, input) : handleObjectResult(r, payload, key)));
					else if (isOptional) handleOptionalObjectResult(r, payload, key, input);
					else handleObjectResult(r, payload, key);
				}
			}
			if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
			const unrecognized = [];
			const keySet = value.keySet;
			const _catchall = catchall._zod;
			const t = _catchall.def.type;
			for (const key of Object.keys(input)) {
				if (keySet.has(key)) continue;
				if (t === "never") {
					unrecognized.push(key);
					continue;
				}
				const r = _catchall.run({
					value: input[key],
					issues: []
				}, ctx);
				if (r instanceof Promise) proms.push(r.then((r) => handleObjectResult(r, payload, key)));
				else handleObjectResult(r, payload, key);
			}
			if (unrecognized.length) payload.issues.push({
				code: "unrecognized_keys",
				keys: unrecognized,
				input,
				inst
			});
			if (!proms.length) return payload;
			return Promise.all(proms).then(() => {
				return payload;
			});
		};
	});
	function handleUnionResults(results, final, inst, ctx) {
		for (const result of results) if (result.issues.length === 0) {
			final.value = result.value;
			return final;
		}
		final.issues.push({
			code: "invalid_union",
			input: final.value,
			inst,
			errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
		});
		return final;
	}
	var $ZodUnion = /*@__PURE__*/ $constructor("$ZodUnion", (inst, def) => {
		$ZodType.init(inst, def);
		defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
		defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
		defineLazy(inst._zod, "values", () => {
			if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
		});
		defineLazy(inst._zod, "pattern", () => {
			if (def.options.every((o) => o._zod.pattern)) {
				const patterns = def.options.map((o) => o._zod.pattern);
				return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
			}
		});
		inst._zod.parse = (payload, ctx) => {
			let async = false;
			const results = [];
			for (const option of def.options) {
				const result = option._zod.run({
					value: payload.value,
					issues: []
				}, ctx);
				if (result instanceof Promise) {
					results.push(result);
					async = true;
				} else {
					if (result.issues.length === 0) return result;
					results.push(result);
				}
			}
			if (!async) return handleUnionResults(results, payload, inst, ctx);
			return Promise.all(results).then((results) => {
				return handleUnionResults(results, payload, inst, ctx);
			});
		};
	});
	var $ZodDiscriminatedUnion = /*@__PURE__*/ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
		$ZodUnion.init(inst, def);
		const _super = inst._zod.parse;
		defineLazy(inst._zod, "propValues", () => {
			const propValues = {};
			for (const option of def.options) {
				const pv = option._zod.propValues;
				if (!pv || Object.keys(pv).length === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
				for (const [k, v] of Object.entries(pv)) {
					if (!propValues[k]) propValues[k] = /* @__PURE__ */ new Set();
					for (const val of v) propValues[k].add(val);
				}
			}
			return propValues;
		});
		const disc = cached(() => {
			const opts = def.options;
			const map = /* @__PURE__ */ new Map();
			for (const o of opts) {
				const values = o._zod.propValues[def.discriminator];
				if (!values || values.size === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
				for (const v of values) {
					if (map.has(v)) throw new Error(`Duplicate discriminator value "${String(v)}"`);
					map.set(v, o);
				}
			}
			return map;
		});
		inst._zod.parse = (payload, ctx) => {
			const input = payload.value;
			if (!isObject(input)) {
				payload.issues.push({
					code: "invalid_type",
					expected: "object",
					input,
					inst
				});
				return payload;
			}
			const opt = disc.value.get(input?.[def.discriminator]);
			if (opt) return opt._zod.run(payload, ctx);
			if (def.unionFallback) return _super(payload, ctx);
			payload.issues.push({
				code: "invalid_union",
				errors: [],
				note: "No matching discriminator",
				input,
				path: [def.discriminator],
				inst
			});
			return payload;
		};
	});
	var $ZodIntersection = /*@__PURE__*/ $constructor("$ZodIntersection", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, ctx) => {
			const input = payload.value;
			const left = def.left._zod.run({
				value: input,
				issues: []
			}, ctx);
			const right = def.right._zod.run({
				value: input,
				issues: []
			}, ctx);
			if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
				return handleIntersectionResults(payload, left, right);
			});
			return handleIntersectionResults(payload, left, right);
		};
	});
	function mergeValues(a, b) {
		if (a === b) return {
			valid: true,
			data: a
		};
		if (a instanceof Date && b instanceof Date && +a === +b) return {
			valid: true,
			data: a
		};
		if (isPlainObject(a) && isPlainObject(b)) {
			const bKeys = Object.keys(b);
			const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
			const newObj = {
				...a,
				...b
			};
			for (const key of sharedKeys) {
				const sharedValue = mergeValues(a[key], b[key]);
				if (!sharedValue.valid) return {
					valid: false,
					mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
				};
				newObj[key] = sharedValue.data;
			}
			return {
				valid: true,
				data: newObj
			};
		}
		if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return {
				valid: false,
				mergeErrorPath: []
			};
			const newArray = [];
			for (let index = 0; index < a.length; index++) {
				const itemA = a[index];
				const itemB = b[index];
				const sharedValue = mergeValues(itemA, itemB);
				if (!sharedValue.valid) return {
					valid: false,
					mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
				};
				newArray.push(sharedValue.data);
			}
			return {
				valid: true,
				data: newArray
			};
		}
		return {
			valid: false,
			mergeErrorPath: []
		};
	}
	function handleIntersectionResults(result, left, right) {
		if (left.issues.length) result.issues.push(...left.issues);
		if (right.issues.length) result.issues.push(...right.issues);
		if (aborted(result)) return result;
		const merged = mergeValues(left.value, right.value);
		if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
		result.value = merged.data;
		return result;
	}
	var $ZodTuple = /*@__PURE__*/ $constructor("$ZodTuple", (inst, def) => {
		$ZodType.init(inst, def);
		const items = def.items;
		const optStart = items.length - [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
		inst._zod.parse = (payload, ctx) => {
			const input = payload.value;
			if (!Array.isArray(input)) {
				payload.issues.push({
					input,
					inst,
					expected: "tuple",
					code: "invalid_type"
				});
				return payload;
			}
			payload.value = [];
			const proms = [];
			if (!def.rest) {
				const tooBig = input.length > items.length;
				const tooSmall = input.length < optStart - 1;
				if (tooBig || tooSmall) {
					payload.issues.push({
						input,
						inst,
						origin: "array",
						...tooBig ? {
							code: "too_big",
							maximum: items.length
						} : {
							code: "too_small",
							minimum: items.length
						}
					});
					return payload;
				}
			}
			let i = -1;
			for (const item of items) {
				i++;
				if (i >= input.length) {
					if (i >= optStart) continue;
				}
				const result = item._zod.run({
					value: input[i],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => handleTupleResult(result, payload, i)));
				else handleTupleResult(result, payload, i);
			}
			if (def.rest) {
				const rest = input.slice(items.length);
				for (const el of rest) {
					i++;
					const result = def.rest._zod.run({
						value: el,
						issues: []
					}, ctx);
					if (result instanceof Promise) proms.push(result.then((result) => handleTupleResult(result, payload, i)));
					else handleTupleResult(result, payload, i);
				}
			}
			if (proms.length) return Promise.all(proms).then(() => payload);
			return payload;
		};
	});
	function handleTupleResult(result, final, index) {
		if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
		final.value[index] = result.value;
	}
	var $ZodRecord = /*@__PURE__*/ $constructor("$ZodRecord", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, ctx) => {
			const input = payload.value;
			if (!isPlainObject(input)) {
				payload.issues.push({
					expected: "record",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			}
			const proms = [];
			if (def.keyType._zod.values) {
				const values = def.keyType._zod.values;
				payload.value = {};
				for (const key of values) if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
					const result = def.valueType._zod.run({
						value: input[key],
						issues: []
					}, ctx);
					if (result instanceof Promise) proms.push(result.then((result) => {
						if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
						payload.value[key] = result.value;
					}));
					else {
						if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
						payload.value[key] = result.value;
					}
				}
				let unrecognized;
				for (const key in input) if (!values.has(key)) {
					unrecognized = unrecognized ?? [];
					unrecognized.push(key);
				}
				if (unrecognized && unrecognized.length > 0) payload.issues.push({
					code: "unrecognized_keys",
					input,
					inst,
					keys: unrecognized
				});
			} else {
				payload.value = {};
				for (const key of Reflect.ownKeys(input)) {
					if (key === "__proto__") continue;
					const keyResult = def.keyType._zod.run({
						value: key,
						issues: []
					}, ctx);
					if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					if (keyResult.issues.length) {
						payload.issues.push({
							origin: "record",
							code: "invalid_key",
							issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
							input: key,
							path: [key],
							inst
						});
						payload.value[keyResult.value] = keyResult.value;
						continue;
					}
					const result = def.valueType._zod.run({
						value: input[key],
						issues: []
					}, ctx);
					if (result instanceof Promise) proms.push(result.then((result) => {
						if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
						payload.value[keyResult.value] = result.value;
					}));
					else {
						if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
						payload.value[keyResult.value] = result.value;
					}
				}
			}
			if (proms.length) return Promise.all(proms).then(() => payload);
			return payload;
		};
	});
	var $ZodMap = /*@__PURE__*/ $constructor("$ZodMap", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, ctx) => {
			const input = payload.value;
			if (!(input instanceof Map)) {
				payload.issues.push({
					expected: "map",
					code: "invalid_type",
					input,
					inst
				});
				return payload;
			}
			const proms = [];
			payload.value = /* @__PURE__ */ new Map();
			for (const [key, value] of input) {
				const keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				const valueResult = def.valueType._zod.run({
					value,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise || valueResult instanceof Promise) proms.push(Promise.all([keyResult, valueResult]).then(([keyResult, valueResult]) => {
					handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
				}));
				else handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
			}
			if (proms.length) return Promise.all(proms).then(() => payload);
			return payload;
		};
	});
	function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
		if (keyResult.issues.length) if (propertyKeyTypes.has(typeof key)) final.issues.push(...prefixIssues(key, keyResult.issues));
		else final.issues.push({
			origin: "map",
			code: "invalid_key",
			input,
			inst,
			issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
		});
		if (valueResult.issues.length) if (propertyKeyTypes.has(typeof key)) final.issues.push(...prefixIssues(key, valueResult.issues));
		else final.issues.push({
			origin: "map",
			code: "invalid_element",
			input,
			inst,
			key,
			issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
		});
		final.value.set(keyResult.value, valueResult.value);
	}
	var $ZodSet = /*@__PURE__*/ $constructor("$ZodSet", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, ctx) => {
			const input = payload.value;
			if (!(input instanceof Set)) {
				payload.issues.push({
					input,
					inst,
					expected: "set",
					code: "invalid_type"
				});
				return payload;
			}
			const proms = [];
			payload.value = /* @__PURE__ */ new Set();
			for (const item of input) {
				const result = def.valueType._zod.run({
					value: item,
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => handleSetResult(result, payload)));
				else handleSetResult(result, payload);
			}
			if (proms.length) return Promise.all(proms).then(() => payload);
			return payload;
		};
	});
	function handleSetResult(result, final) {
		if (result.issues.length) final.issues.push(...result.issues);
		final.value.add(result.value);
	}
	var $ZodEnum = /*@__PURE__*/ $constructor("$ZodEnum", (inst, def) => {
		$ZodType.init(inst, def);
		const values = getEnumValues(def.entries);
		inst._zod.values = new Set(values);
		inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
		inst._zod.parse = (payload, _ctx) => {
			const input = payload.value;
			if (inst._zod.values.has(input)) return payload;
			payload.issues.push({
				code: "invalid_value",
				values,
				input,
				inst
			});
			return payload;
		};
	});
	var $ZodLiteral = /*@__PURE__*/ $constructor("$ZodLiteral", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.values = new Set(def.values);
		inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? o.toString() : String(o)).join("|")})$`);
		inst._zod.parse = (payload, _ctx) => {
			const input = payload.value;
			if (inst._zod.values.has(input)) return payload;
			payload.issues.push({
				code: "invalid_value",
				values: def.values,
				input,
				inst
			});
			return payload;
		};
	});
	var $ZodFile = /*@__PURE__*/ $constructor("$ZodFile", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, _ctx) => {
			const input = payload.value;
			if (input instanceof File) return payload;
			payload.issues.push({
				expected: "file",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		};
	});
	var $ZodTransform = /*@__PURE__*/ $constructor("$ZodTransform", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, _ctx) => {
			const _out = def.transform(payload.value, payload);
			if (_ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
				payload.value = output;
				return payload;
			});
			if (_out instanceof Promise) throw new $ZodAsyncError();
			payload.value = _out;
			return payload;
		};
	});
	var $ZodOptional = /*@__PURE__*/ $constructor("$ZodOptional", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.optin = "optional";
		inst._zod.optout = "optional";
		defineLazy(inst._zod, "values", () => {
			return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
		});
		defineLazy(inst._zod, "pattern", () => {
			const pattern = def.innerType._zod.pattern;
			return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
		});
		inst._zod.parse = (payload, ctx) => {
			if (def.innerType._zod.optin === "optional") return def.innerType._zod.run(payload, ctx);
			if (payload.value === void 0) return payload;
			return def.innerType._zod.run(payload, ctx);
		};
	});
	var $ZodNullable = /*@__PURE__*/ $constructor("$ZodNullable", (inst, def) => {
		$ZodType.init(inst, def);
		defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
		defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
		defineLazy(inst._zod, "pattern", () => {
			const pattern = def.innerType._zod.pattern;
			return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
		});
		defineLazy(inst._zod, "values", () => {
			return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
		});
		inst._zod.parse = (payload, ctx) => {
			if (payload.value === null) return payload;
			return def.innerType._zod.run(payload, ctx);
		};
	});
	var $ZodDefault = /*@__PURE__*/ $constructor("$ZodDefault", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.optin = "optional";
		defineLazy(inst._zod, "values", () => def.innerType._zod.values);
		inst._zod.parse = (payload, ctx) => {
			if (payload.value === void 0) {
				payload.value = def.defaultValue;
				/**
				* $ZodDefault always returns the default value immediately.
				* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
				return payload;
			}
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
			return handleDefaultResult(result, def);
		};
	});
	function handleDefaultResult(payload, def) {
		if (payload.value === void 0) payload.value = def.defaultValue;
		return payload;
	}
	var $ZodPrefault = /*@__PURE__*/ $constructor("$ZodPrefault", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.optin = "optional";
		defineLazy(inst._zod, "values", () => def.innerType._zod.values);
		inst._zod.parse = (payload, ctx) => {
			if (payload.value === void 0) payload.value = def.defaultValue;
			return def.innerType._zod.run(payload, ctx);
		};
	});
	var $ZodNonOptional = /*@__PURE__*/ $constructor("$ZodNonOptional", (inst, def) => {
		$ZodType.init(inst, def);
		defineLazy(inst._zod, "values", () => {
			const v = def.innerType._zod.values;
			return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
		});
		inst._zod.parse = (payload, ctx) => {
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
			return handleNonOptionalResult(result, inst);
		};
	});
	function handleNonOptionalResult(payload, inst) {
		if (!payload.issues.length && payload.value === void 0) payload.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: payload.value,
			inst
		});
		return payload;
	}
	var $ZodSuccess = /*@__PURE__*/ $constructor("$ZodSuccess", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, ctx) => {
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((result) => {
				payload.value = result.issues.length === 0;
				return payload;
			});
			payload.value = result.issues.length === 0;
			return payload;
		};
	});
	var $ZodCatch = /*@__PURE__*/ $constructor("$ZodCatch", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.optin = "optional";
		defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
		defineLazy(inst._zod, "values", () => def.innerType._zod.values);
		inst._zod.parse = (payload, ctx) => {
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((result) => {
				payload.value = result.value;
				if (result.issues.length) {
					payload.value = def.catchValue({
						...payload,
						error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
						input: payload.value
					});
					payload.issues = [];
				}
				return payload;
			});
			payload.value = result.value;
			if (result.issues.length) {
				payload.value = def.catchValue({
					...payload,
					error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
					input: payload.value
				});
				payload.issues = [];
			}
			return payload;
		};
	});
	var $ZodNaN = /*@__PURE__*/ $constructor("$ZodNaN", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, _ctx) => {
			if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
				payload.issues.push({
					input: payload.value,
					inst,
					expected: "nan",
					code: "invalid_type"
				});
				return payload;
			}
			return payload;
		};
	});
	var $ZodPipe = /*@__PURE__*/ $constructor("$ZodPipe", (inst, def) => {
		$ZodType.init(inst, def);
		defineLazy(inst._zod, "values", () => def.in._zod.values);
		defineLazy(inst._zod, "optin", () => def.in._zod.optin);
		defineLazy(inst._zod, "optout", () => def.out._zod.optout);
		inst._zod.parse = (payload, ctx) => {
			const left = def.in._zod.run(payload, ctx);
			if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def, ctx));
			return handlePipeResult(left, def, ctx);
		};
	});
	function handlePipeResult(left, def, ctx) {
		if (aborted(left)) return left;
		return def.out._zod.run({
			value: left.value,
			issues: left.issues
		}, ctx);
	}
	var $ZodReadonly = /*@__PURE__*/ $constructor("$ZodReadonly", (inst, def) => {
		$ZodType.init(inst, def);
		defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
		defineLazy(inst._zod, "values", () => def.innerType._zod.values);
		defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
		defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
		inst._zod.parse = (payload, ctx) => {
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then(handleReadonlyResult);
			return handleReadonlyResult(result);
		};
	});
	function handleReadonlyResult(payload) {
		payload.value = Object.freeze(payload.value);
		return payload;
	}
	var $ZodTemplateLiteral = /*@__PURE__*/ $constructor("$ZodTemplateLiteral", (inst, def) => {
		$ZodType.init(inst, def);
		const regexParts = [];
		for (const part of def.parts) if (part instanceof $ZodType) {
			if (!part._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
			const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
			if (!source) throw new Error(`Invalid template literal part: ${part._zod.traits}`);
			const start = source.startsWith("^") ? 1 : 0;
			const end = source.endsWith("$") ? source.length - 1 : source.length;
			regexParts.push(source.slice(start, end));
		} else if (part === null || primitiveTypes.has(typeof part)) regexParts.push(escapeRegex(`${part}`));
		else throw new Error(`Invalid template literal part: ${part}`);
		inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
		inst._zod.parse = (payload, _ctx) => {
			if (typeof payload.value !== "string") {
				payload.issues.push({
					input: payload.value,
					inst,
					expected: "template_literal",
					code: "invalid_type"
				});
				return payload;
			}
			inst._zod.pattern.lastIndex = 0;
			if (!inst._zod.pattern.test(payload.value)) {
				payload.issues.push({
					input: payload.value,
					inst,
					code: "invalid_format",
					format: "template_literal",
					pattern: inst._zod.pattern.source
				});
				return payload;
			}
			return payload;
		};
	});
	var $ZodPromise = /*@__PURE__*/ $constructor("$ZodPromise", (inst, def) => {
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, ctx) => {
			return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({
				value: inner,
				issues: []
			}, ctx));
		};
	});
	var $ZodLazy = /*@__PURE__*/ $constructor("$ZodLazy", (inst, def) => {
		$ZodType.init(inst, def);
		defineLazy(inst._zod, "innerType", () => def.getter());
		defineLazy(inst._zod, "pattern", () => inst._zod.innerType._zod.pattern);
		defineLazy(inst._zod, "propValues", () => inst._zod.innerType._zod.propValues);
		defineLazy(inst._zod, "optin", () => inst._zod.innerType._zod.optin);
		defineLazy(inst._zod, "optout", () => inst._zod.innerType._zod.optout);
		inst._zod.parse = (payload, ctx) => {
			return inst._zod.innerType._zod.run(payload, ctx);
		};
	});
	var $ZodCustom = /*@__PURE__*/ $constructor("$ZodCustom", (inst, def) => {
		$ZodCheck.init(inst, def);
		$ZodType.init(inst, def);
		inst._zod.parse = (payload, _) => {
			return payload;
		};
		inst._zod.check = (payload) => {
			const input = payload.value;
			const r = def.fn(input);
			if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
			handleRefineResult(r, payload, input, inst);
		};
	});
	function handleRefineResult(result, payload, input, inst) {
		if (!result) {
			const _iss = {
				code: "custom",
				input,
				inst,
				path: [...inst._zod.def.path ?? []],
				continue: !inst._zod.def.abort
			};
			if (inst._zod.def.params) _iss.params = inst._zod.def.params;
			payload.issues.push(issue(_iss));
		}
	}

//#endregion
//#region node_modules/zod/v4/locales/ar.js
	var error$38 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "حرف",
				verb: "أن يحوي"
			},
			file: {
				unit: "بايت",
				verb: "أن يحوي"
			},
			array: {
				unit: "عنصر",
				verb: "أن يحوي"
			},
			set: {
				unit: "عنصر",
				verb: "أن يحوي"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "مدخل",
			email: "بريد إلكتروني",
			url: "رابط",
			emoji: "إيموجي",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "تاريخ ووقت بمعيار ISO",
			date: "تاريخ بمعيار ISO",
			time: "وقت بمعيار ISO",
			duration: "مدة بمعيار ISO",
			ipv4: "عنوان IPv4",
			ipv6: "عنوان IPv6",
			cidrv4: "مدى عناوين بصيغة IPv4",
			cidrv6: "مدى عناوين بصيغة IPv6",
			base64: "نَص بترميز base64-encoded",
			base64url: "نَص بترميز base64url-encoded",
			json_string: "نَص على هيئة JSON",
			e164: "رقم هاتف بمعيار E.164",
			jwt: "JWT",
			template_literal: "مدخل"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `مدخلات غير مقبولة: يفترض إدخال ${issue.expected}، ولكن تم إدخال ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `مدخلات غير مقبولة: يفترض إدخال ${stringifyPrimitive(issue.values[0])}`;
					return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return ` أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "عنصر"}`;
					return `أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
					return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `نَص غير مقبول: يجب أن يبدأ بـ "${issue.prefix}"`;
					if (_issue.format === "ends_with") return `نَص غير مقبول: يجب أن ينتهي بـ "${_issue.suffix}"`;
					if (_issue.format === "includes") return `نَص غير مقبول: يجب أن يتضمَّن "${_issue.includes}"`;
					if (_issue.format === "regex") return `نَص غير مقبول: يجب أن يطابق النمط ${_issue.pattern}`;
					return `${Nouns[_issue.format] ?? issue.format} غير مقبول`;
				}
				case "not_multiple_of": return `رقم غير مقبول: يجب أن يكون من مضاعفات ${issue.divisor}`;
				case "unrecognized_keys": return `معرف${issue.keys.length > 1 ? "ات" : ""} غريب${issue.keys.length > 1 ? "ة" : ""}: ${joinValues(issue.keys, "، ")}`;
				case "invalid_key": return `معرف غير مقبول في ${issue.origin}`;
				case "invalid_union": return "مدخل غير مقبول";
				case "invalid_element": return `مدخل غير مقبول في ${issue.origin}`;
				default: return "مدخل غير مقبول";
			}
		};
	}, "error");
	function ar_default() {
		return { localeError: error$38() };
	}
	__name(ar_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/az.js
	var error$37 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "simvol",
				verb: "olmalıdır"
			},
			file: {
				unit: "bayt",
				verb: "olmalıdır"
			},
			array: {
				unit: "element",
				verb: "olmalıdır"
			},
			set: {
				unit: "element",
				verb: "olmalıdır"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "input",
			email: "email address",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO datetime",
			date: "ISO date",
			time: "ISO time",
			duration: "ISO duration",
			ipv4: "IPv4 address",
			ipv6: "IPv6 address",
			cidrv4: "IPv4 range",
			cidrv6: "IPv6 range",
			base64: "base64-encoded string",
			base64url: "base64url-encoded string",
			json_string: "JSON string",
			e164: "E.164 number",
			jwt: "JWT",
			template_literal: "input"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Yanlış dəyər: gözlənilən ${issue.expected}, daxil olan ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Yanlış dəyər: gözlənilən ${stringifyPrimitive(issue.values[0])}`;
					return `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Çox böyük: gözlənilən ${issue.origin ?? "dəyər"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
					return `Çox böyük: gözlənilən ${issue.origin ?? "dəyər"} ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Çox kiçik: gözlənilən ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Çox kiçik: gözlənilən ${issue.origin} ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Yanlış mətn: "${_issue.prefix}" ilə başlamalıdır`;
					if (_issue.format === "ends_with") return `Yanlış mətn: "${_issue.suffix}" ilə bitməlidir`;
					if (_issue.format === "includes") return `Yanlış mətn: "${_issue.includes}" daxil olmalıdır`;
					if (_issue.format === "regex") return `Yanlış mətn: ${_issue.pattern} şablonuna uyğun olmalıdır`;
					return `Yanlış ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Yanlış ədəd: ${issue.divisor} ilə bölünə bilən olmalıdır`;
				case "unrecognized_keys": return `Tanınmayan açar${issue.keys.length > 1 ? "lar" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `${issue.origin} daxilində yanlış açar`;
				case "invalid_union": return "Yanlış dəyər";
				case "invalid_element": return `${issue.origin} daxilində yanlış dəyər`;
				default: return `Yanlış dəyər`;
			}
		};
	}, "error");
	function az_default() {
		return { localeError: error$37() };
	}
	__name(az_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/be.js
	function getBelarusianPlural(count, one, few, many) {
		const absCount = Math.abs(count);
		const lastDigit = absCount % 10;
		const lastTwoDigits = absCount % 100;
		if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return many;
		if (lastDigit === 1) return one;
		if (lastDigit >= 2 && lastDigit <= 4) return few;
		return many;
	}
	var error$36 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: {
					one: "сімвал",
					few: "сімвалы",
					many: "сімвалаў"
				},
				verb: "мець"
			},
			array: {
				unit: {
					one: "элемент",
					few: "элементы",
					many: "элементаў"
				},
				verb: "мець"
			},
			set: {
				unit: {
					one: "элемент",
					few: "элементы",
					many: "элементаў"
				},
				verb: "мець"
			},
			file: {
				unit: {
					one: "байт",
					few: "байты",
					many: "байтаў"
				},
				verb: "мець"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "лік";
				case "object":
					if (Array.isArray(data)) return "масіў";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "увод",
			email: "email адрас",
			url: "URL",
			emoji: "эмодзі",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO дата і час",
			date: "ISO дата",
			time: "ISO час",
			duration: "ISO працягласць",
			ipv4: "IPv4 адрас",
			ipv6: "IPv6 адрас",
			cidrv4: "IPv4 дыяпазон",
			cidrv6: "IPv6 дыяпазон",
			base64: "радок у фармаце base64",
			base64url: "радок у фармаце base64url",
			json_string: "JSON радок",
			e164: "нумар E.164",
			jwt: "JWT",
			template_literal: "увод"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Няправільны ўвод: чакаўся ${issue.expected}, атрымана ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Няправільны ўвод: чакалася ${stringifyPrimitive(issue.values[0])}`;
					return `Няправільны варыянт: чакаўся адзін з ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) {
						const unit = getBelarusianPlural(Number(issue.maximum), sizing.unit.one, sizing.unit.few, sizing.unit.many);
						return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна ${sizing.verb} ${adj}${issue.maximum.toString()} ${unit}`;
					}
					return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна быць ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) {
						const unit = getBelarusianPlural(Number(issue.minimum), sizing.unit.one, sizing.unit.few, sizing.unit.many);
						return `Занадта малы: чакалася, што ${issue.origin} павінна ${sizing.verb} ${adj}${issue.minimum.toString()} ${unit}`;
					}
					return `Занадта малы: чакалася, што ${issue.origin} павінна быць ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Няправільны радок: павінен пачынацца з "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Няправільны радок: павінен заканчвацца на "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Няправільны радок: павінен змяшчаць "${_issue.includes}"`;
					if (_issue.format === "regex") return `Няправільны радок: павінен адпавядаць шаблону ${_issue.pattern}`;
					return `Няправільны ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Няправільны лік: павінен быць кратным ${issue.divisor}`;
				case "unrecognized_keys": return `Нераспазнаны ${issue.keys.length > 1 ? "ключы" : "ключ"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Няправільны ключ у ${issue.origin}`;
				case "invalid_union": return "Няправільны ўвод";
				case "invalid_element": return `Няправільнае значэнне ў ${issue.origin}`;
				default: return `Няправільны ўвод`;
			}
		};
	}, "error");
	function be_default() {
		return { localeError: error$36() };
	}
	__name(be_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ca.js
	var error$35 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "caràcters",
				verb: "contenir"
			},
			file: {
				unit: "bytes",
				verb: "contenir"
			},
			array: {
				unit: "elements",
				verb: "contenir"
			},
			set: {
				unit: "elements",
				verb: "contenir"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "entrada",
			email: "adreça electrònica",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "data i hora ISO",
			date: "data ISO",
			time: "hora ISO",
			duration: "durada ISO",
			ipv4: "adreça IPv4",
			ipv6: "adreça IPv6",
			cidrv4: "rang IPv4",
			cidrv6: "rang IPv6",
			base64: "cadena codificada en base64",
			base64url: "cadena codificada en base64url",
			json_string: "cadena JSON",
			e164: "número E.164",
			jwt: "JWT",
			template_literal: "entrada"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Valor invàlid: s'esperava ${stringifyPrimitive(issue.values[0])}`;
					return `Opció invàlida: s'esperava una de ${joinValues(issue.values, " o ")}`;
				case "too_big": {
					const adj = issue.inclusive ? "com a màxim" : "menys de";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Massa gran: s'esperava que ${issue.origin ?? "el valor"} contingués ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
					return `Massa gran: s'esperava que ${issue.origin ?? "el valor"} fos ${adj} ${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? "com a mínim" : "més de";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Massa petit: s'esperava que ${issue.origin} contingués ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
					return `Massa petit: s'esperava que ${issue.origin} fos ${adj} ${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Format invàlid: ha de començar amb "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Format invàlid: ha d'acabar amb "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Format invàlid: ha d'incloure "${_issue.includes}"`;
					if (_issue.format === "regex") return `Format invàlid: ha de coincidir amb el patró ${_issue.pattern}`;
					return `Format invàlid per a ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Número invàlid: ha de ser múltiple de ${issue.divisor}`;
				case "unrecognized_keys": return `Clau${issue.keys.length > 1 ? "s" : ""} no reconeguda${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Clau invàlida a ${issue.origin}`;
				case "invalid_union": return "Entrada invàlida";
				case "invalid_element": return `Element invàlid a ${issue.origin}`;
				default: return `Entrada invàlida`;
			}
		};
	}, "error");
	function ca_default() {
		return { localeError: error$35() };
	}
	__name(ca_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/cs.js
	var error$34 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "znaků",
				verb: "mít"
			},
			file: {
				unit: "bajtů",
				verb: "mít"
			},
			array: {
				unit: "prvků",
				verb: "mít"
			},
			set: {
				unit: "prvků",
				verb: "mít"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "číslo";
				case "string": return "řetězec";
				case "boolean": return "boolean";
				case "bigint": return "bigint";
				case "function": return "funkce";
				case "symbol": return "symbol";
				case "undefined": return "undefined";
				case "object":
					if (Array.isArray(data)) return "pole";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "regulární výraz",
			email: "e-mailová adresa",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "datum a čas ve formátu ISO",
			date: "datum ve formátu ISO",
			time: "čas ve formátu ISO",
			duration: "doba trvání ISO",
			ipv4: "IPv4 adresa",
			ipv6: "IPv6 adresa",
			cidrv4: "rozsah IPv4",
			cidrv6: "rozsah IPv6",
			base64: "řetězec zakódovaný ve formátu base64",
			base64url: "řetězec zakódovaný ve formátu base64url",
			json_string: "řetězec ve formátu JSON",
			e164: "číslo E.164",
			jwt: "JWT",
			template_literal: "vstup"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Neplatný vstup: očekáváno ${issue.expected}, obdrženo ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Neplatný vstup: očekáváno ${stringifyPrimitive(issue.values[0])}`;
					return `Neplatná možnost: očekávána jedna z hodnot ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.maximum.toString()} ${sizing.unit ?? "prvků"}`;
					return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.minimum.toString()} ${sizing.unit ?? "prvků"}`;
					return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Neplatný řetězec: musí začínat na "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Neplatný řetězec: musí končit na "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Neplatný řetězec: musí obsahovat "${_issue.includes}"`;
					if (_issue.format === "regex") return `Neplatný řetězec: musí odpovídat vzoru ${_issue.pattern}`;
					return `Neplatný formát ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Neplatné číslo: musí být násobkem ${issue.divisor}`;
				case "unrecognized_keys": return `Neznámé klíče: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Neplatný klíč v ${issue.origin}`;
				case "invalid_union": return "Neplatný vstup";
				case "invalid_element": return `Neplatná hodnota v ${issue.origin}`;
				default: return `Neplatný vstup`;
			}
		};
	}, "error");
	function cs_default() {
		return { localeError: error$34() };
	}
	__name(cs_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/de.js
	var error$33 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "Zeichen",
				verb: "zu haben"
			},
			file: {
				unit: "Bytes",
				verb: "zu haben"
			},
			array: {
				unit: "Elemente",
				verb: "zu haben"
			},
			set: {
				unit: "Elemente",
				verb: "zu haben"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "Zahl";
				case "object":
					if (Array.isArray(data)) return "Array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "Eingabe",
			email: "E-Mail-Adresse",
			url: "URL",
			emoji: "Emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO-Datum und -Uhrzeit",
			date: "ISO-Datum",
			time: "ISO-Uhrzeit",
			duration: "ISO-Dauer",
			ipv4: "IPv4-Adresse",
			ipv6: "IPv6-Adresse",
			cidrv4: "IPv4-Bereich",
			cidrv6: "IPv6-Bereich",
			base64: "Base64-codierter String",
			base64url: "Base64-URL-codierter String",
			json_string: "JSON-String",
			e164: "E.164-Nummer",
			jwt: "JWT",
			template_literal: "Eingabe"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Ungültige Eingabe: erwartet ${issue.expected}, erhalten ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Ungültige Eingabe: erwartet ${stringifyPrimitive(issue.values[0])}`;
					return `Ungültige Option: erwartet eine von ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Zu groß: erwartet, dass ${issue.origin ?? "Wert"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
					return `Zu groß: erwartet, dass ${issue.origin ?? "Wert"} ${adj}${issue.maximum.toString()} ist`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Zu klein: erwartet, dass ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} hat`;
					return `Zu klein: erwartet, dass ${issue.origin} ${adj}${issue.minimum.toString()} ist`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Ungültiger String: muss mit "${_issue.prefix}" beginnen`;
					if (_issue.format === "ends_with") return `Ungültiger String: muss mit "${_issue.suffix}" enden`;
					if (_issue.format === "includes") return `Ungültiger String: muss "${_issue.includes}" enthalten`;
					if (_issue.format === "regex") return `Ungültiger String: muss dem Muster ${_issue.pattern} entsprechen`;
					return `Ungültig: ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Ungültige Zahl: muss ein Vielfaches von ${issue.divisor} sein`;
				case "unrecognized_keys": return `${issue.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Ungültiger Schlüssel in ${issue.origin}`;
				case "invalid_union": return "Ungültige Eingabe";
				case "invalid_element": return `Ungültiger Wert in ${issue.origin}`;
				default: return `Ungültige Eingabe`;
			}
		};
	}, "error");
	function de_default() {
		return { localeError: error$33() };
	}
	__name(de_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/en.js
	var parsedType$2 = /* @__PURE__ */ __name((data) => {
		const t = typeof data;
		switch (t) {
			case "number": return Number.isNaN(data) ? "NaN" : "number";
			case "object":
				if (Array.isArray(data)) return "array";
				if (data === null) return "null";
				if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
		}
		return t;
	}, "parsedType");
	var error$32 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "characters",
				verb: "to have"
			},
			file: {
				unit: "bytes",
				verb: "to have"
			},
			array: {
				unit: "items",
				verb: "to have"
			},
			set: {
				unit: "items",
				verb: "to have"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const Nouns = {
			regex: "input",
			email: "email address",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO datetime",
			date: "ISO date",
			time: "ISO time",
			duration: "ISO duration",
			ipv4: "IPv4 address",
			ipv6: "IPv6 address",
			cidrv4: "IPv4 range",
			cidrv6: "IPv6 range",
			base64: "base64-encoded string",
			base64url: "base64url-encoded string",
			json_string: "JSON string",
			e164: "E.164 number",
			jwt: "JWT",
			template_literal: "input"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Invalid input: expected ${issue.expected}, received ${parsedType$2(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
					return `Invalid option: expected one of ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
					return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Invalid string: must start with "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Invalid string: must end with "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Invalid string: must include "${_issue.includes}"`;
					if (_issue.format === "regex") return `Invalid string: must match pattern ${_issue.pattern}`;
					return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Invalid number: must be a multiple of ${issue.divisor}`;
				case "unrecognized_keys": return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Invalid key in ${issue.origin}`;
				case "invalid_union": return "Invalid input";
				case "invalid_element": return `Invalid value in ${issue.origin}`;
				default: return `Invalid input`;
			}
		};
	}, "error");
	function en_default() {
		return { localeError: error$32() };
	}
	__name(en_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/eo.js
	var parsedType$1 = /* @__PURE__ */ __name((data) => {
		const t = typeof data;
		switch (t) {
			case "number": return Number.isNaN(data) ? "NaN" : "nombro";
			case "object":
				if (Array.isArray(data)) return "tabelo";
				if (data === null) return "senvalora";
				if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
		}
		return t;
	}, "parsedType");
	var error$31 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "karaktrojn",
				verb: "havi"
			},
			file: {
				unit: "bajtojn",
				verb: "havi"
			},
			array: {
				unit: "elementojn",
				verb: "havi"
			},
			set: {
				unit: "elementojn",
				verb: "havi"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const Nouns = {
			regex: "enigo",
			email: "retadreso",
			url: "URL",
			emoji: "emoĝio",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO-datotempo",
			date: "ISO-dato",
			time: "ISO-tempo",
			duration: "ISO-daŭro",
			ipv4: "IPv4-adreso",
			ipv6: "IPv6-adreso",
			cidrv4: "IPv4-rango",
			cidrv6: "IPv6-rango",
			base64: "64-ume kodita karaktraro",
			base64url: "URL-64-ume kodita karaktraro",
			json_string: "JSON-karaktraro",
			e164: "E.164-nombro",
			jwt: "JWT",
			template_literal: "enigo"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Nevalida enigo: atendiĝis ${issue.expected}, riceviĝis ${parsedType$1(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Nevalida enigo: atendiĝis ${stringifyPrimitive(issue.values[0])}`;
					return `Nevalida opcio: atendiĝis unu el ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
					return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Tro malgranda: atendiĝis ke ${issue.origin} havu ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Tro malgranda: atendiĝis ke ${issue.origin} estu ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Nevalida karaktraro: devas komenciĝi per "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Nevalida karaktraro: devas finiĝi per "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
					if (_issue.format === "regex") return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
					return `Nevalida ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Nevalida nombro: devas esti oblo de ${issue.divisor}`;
				case "unrecognized_keys": return `Nekonata${issue.keys.length > 1 ? "j" : ""} ŝlosilo${issue.keys.length > 1 ? "j" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Nevalida ŝlosilo en ${issue.origin}`;
				case "invalid_union": return "Nevalida enigo";
				case "invalid_element": return `Nevalida valoro en ${issue.origin}`;
				default: return `Nevalida enigo`;
			}
		};
	}, "error");
	function eo_default() {
		return { localeError: error$31() };
	}
	__name(eo_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/es.js
	var error$30 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "caracteres",
				verb: "tener"
			},
			file: {
				unit: "bytes",
				verb: "tener"
			},
			array: {
				unit: "elementos",
				verb: "tener"
			},
			set: {
				unit: "elementos",
				verb: "tener"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "número";
				case "object":
					if (Array.isArray(data)) return "arreglo";
					if (data === null) return "nulo";
					if (Object.getPrototypeOf(data) !== Object.prototype) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "entrada",
			email: "dirección de correo electrónico",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "fecha y hora ISO",
			date: "fecha ISO",
			time: "hora ISO",
			duration: "duración ISO",
			ipv4: "dirección IPv4",
			ipv6: "dirección IPv6",
			cidrv4: "rango IPv4",
			cidrv6: "rango IPv6",
			base64: "cadena codificada en base64",
			base64url: "URL codificada en base64",
			json_string: "cadena JSON",
			e164: "número E.164",
			jwt: "JWT",
			template_literal: "entrada"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Entrada inválida: se esperaba ${issue.expected}, recibido ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Entrada inválida: se esperaba ${stringifyPrimitive(issue.values[0])}`;
					return `Opción inválida: se esperaba una de ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Demasiado grande: se esperaba que ${issue.origin ?? "valor"} tuviera ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
					return `Demasiado grande: se esperaba que ${issue.origin ?? "valor"} fuera ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Demasiado pequeño: se esperaba que ${issue.origin} tuviera ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Demasiado pequeño: se esperaba que ${issue.origin} fuera ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Cadena inválida: debe incluir "${_issue.includes}"`;
					if (_issue.format === "regex") return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
					return `Inválido ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Número inválido: debe ser múltiplo de ${issue.divisor}`;
				case "unrecognized_keys": return `Llave${issue.keys.length > 1 ? "s" : ""} desconocida${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Llave inválida en ${issue.origin}`;
				case "invalid_union": return "Entrada inválida";
				case "invalid_element": return `Valor inválido en ${issue.origin}`;
				default: return `Entrada inválida`;
			}
		};
	}, "error");
	function es_default() {
		return { localeError: error$30() };
	}
	__name(es_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/fa.js
	var error$29 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "کاراکتر",
				verb: "داشته باشد"
			},
			file: {
				unit: "بایت",
				verb: "داشته باشد"
			},
			array: {
				unit: "آیتم",
				verb: "داشته باشد"
			},
			set: {
				unit: "آیتم",
				verb: "داشته باشد"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "عدد";
				case "object":
					if (Array.isArray(data)) return "آرایه";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "ورودی",
			email: "آدرس ایمیل",
			url: "URL",
			emoji: "ایموجی",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "تاریخ و زمان ایزو",
			date: "تاریخ ایزو",
			time: "زمان ایزو",
			duration: "مدت زمان ایزو",
			ipv4: "IPv4 آدرس",
			ipv6: "IPv6 آدرس",
			cidrv4: "IPv4 دامنه",
			cidrv6: "IPv6 دامنه",
			base64: "base64-encoded رشته",
			base64url: "base64url-encoded رشته",
			json_string: "JSON رشته",
			e164: "E.164 عدد",
			jwt: "JWT",
			template_literal: "ورودی"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `ورودی نامعتبر: می‌بایست ${issue.expected} می‌بود، ${parsedType(issue.input)} دریافت شد`;
				case "invalid_value":
					if (issue.values.length === 1) return `ورودی نامعتبر: می‌بایست ${stringifyPrimitive(issue.values[0])} می‌بود`;
					return `گزینه نامعتبر: می‌بایست یکی از ${joinValues(issue.values, "|")} می‌بود`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصر"} باشد`;
					return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} باشد`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} باشد`;
					return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} باشد`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `رشته نامعتبر: باید با "${_issue.prefix}" شروع شود`;
					if (_issue.format === "ends_with") return `رشته نامعتبر: باید با "${_issue.suffix}" تمام شود`;
					if (_issue.format === "includes") return `رشته نامعتبر: باید شامل "${_issue.includes}" باشد`;
					if (_issue.format === "regex") return `رشته نامعتبر: باید با الگوی ${_issue.pattern} مطابقت داشته باشد`;
					return `${Nouns[_issue.format] ?? issue.format} نامعتبر`;
				}
				case "not_multiple_of": return `عدد نامعتبر: باید مضرب ${issue.divisor} باشد`;
				case "unrecognized_keys": return `کلید${issue.keys.length > 1 ? "های" : ""} ناشناس: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `کلید ناشناس در ${issue.origin}`;
				case "invalid_union": return `ورودی نامعتبر`;
				case "invalid_element": return `مقدار نامعتبر در ${issue.origin}`;
				default: return `ورودی نامعتبر`;
			}
		};
	}, "error");
	function fa_default() {
		return { localeError: error$29() };
	}
	__name(fa_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/fi.js
	var error$28 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "merkkiä",
				subject: "merkkijonon"
			},
			file: {
				unit: "tavua",
				subject: "tiedoston"
			},
			array: {
				unit: "alkiota",
				subject: "listan"
			},
			set: {
				unit: "alkiota",
				subject: "joukon"
			},
			number: {
				unit: "",
				subject: "luvun"
			},
			bigint: {
				unit: "",
				subject: "suuren kokonaisluvun"
			},
			int: {
				unit: "",
				subject: "kokonaisluvun"
			},
			date: {
				unit: "",
				subject: "päivämäärän"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "säännöllinen lauseke",
			email: "sähköpostiosoite",
			url: "URL-osoite",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO-aikaleima",
			date: "ISO-päivämäärä",
			time: "ISO-aika",
			duration: "ISO-kesto",
			ipv4: "IPv4-osoite",
			ipv6: "IPv6-osoite",
			cidrv4: "IPv4-alue",
			cidrv6: "IPv6-alue",
			base64: "base64-koodattu merkkijono",
			base64url: "base64url-koodattu merkkijono",
			json_string: "JSON-merkkijono",
			e164: "E.164-luku",
			jwt: "JWT",
			template_literal: "templaattimerkkijono"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Virheellinen tyyppi: odotettiin ${issue.expected}, oli ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Virheellinen syöte: täytyy olla ${stringifyPrimitive(issue.values[0])}`;
					return `Virheellinen valinta: täytyy olla yksi seuraavista: ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Liian suuri: ${sizing.subject} täytyy olla ${adj}${issue.maximum.toString()} ${sizing.unit}`.trim();
					return `Liian suuri: arvon täytyy olla ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Liian pieni: ${sizing.subject} täytyy olla ${adj}${issue.minimum.toString()} ${sizing.unit}`.trim();
					return `Liian pieni: arvon täytyy olla ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Virheellinen syöte: täytyy alkaa "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Virheellinen syöte: täytyy loppua "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Virheellinen syöte: täytyy sisältää "${_issue.includes}"`;
					if (_issue.format === "regex") return `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_issue.pattern}`;
					return `Virheellinen ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Virheellinen luku: täytyy olla luvun ${issue.divisor} monikerta`;
				case "unrecognized_keys": return `${issue.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return "Virheellinen avain tietueessa";
				case "invalid_union": return "Virheellinen unioni";
				case "invalid_element": return "Virheellinen arvo joukossa";
				default: return `Virheellinen syöte`;
			}
		};
	}, "error");
	function fi_default() {
		return { localeError: error$28() };
	}
	__name(fi_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/fr.js
	var error$27 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "caractères",
				verb: "avoir"
			},
			file: {
				unit: "octets",
				verb: "avoir"
			},
			array: {
				unit: "éléments",
				verb: "avoir"
			},
			set: {
				unit: "éléments",
				verb: "avoir"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "nombre";
				case "object":
					if (Array.isArray(data)) return "tableau";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "entrée",
			email: "adresse e-mail",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "date et heure ISO",
			date: "date ISO",
			time: "heure ISO",
			duration: "durée ISO",
			ipv4: "adresse IPv4",
			ipv6: "adresse IPv6",
			cidrv4: "plage IPv4",
			cidrv6: "plage IPv6",
			base64: "chaîne encodée en base64",
			base64url: "chaîne encodée en base64url",
			json_string: "chaîne JSON",
			e164: "numéro E.164",
			jwt: "JWT",
			template_literal: "entrée"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Entrée invalide : ${issue.expected} attendu, ${parsedType(issue.input)} reçu`;
				case "invalid_value":
					if (issue.values.length === 1) return `Entrée invalide : ${stringifyPrimitive(issue.values[0])} attendu`;
					return `Option invalide : une valeur parmi ${joinValues(issue.values, "|")} attendue`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Trop grand : ${issue.origin ?? "valeur"} doit ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "élément(s)"}`;
					return `Trop grand : ${issue.origin ?? "valeur"} doit être ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Trop petit : ${issue.origin} doit ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Trop petit : ${issue.origin} doit être ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Chaîne invalide : doit inclure "${_issue.includes}"`;
					if (_issue.format === "regex") return `Chaîne invalide : doit correspondre au modèle ${_issue.pattern}`;
					return `${Nouns[_issue.format] ?? issue.format} invalide`;
				}
				case "not_multiple_of": return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
				case "unrecognized_keys": return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Clé invalide dans ${issue.origin}`;
				case "invalid_union": return "Entrée invalide";
				case "invalid_element": return `Valeur invalide dans ${issue.origin}`;
				default: return `Entrée invalide`;
			}
		};
	}, "error");
	function fr_default() {
		return { localeError: error$27() };
	}
	__name(fr_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/fr-CA.js
	var error$26 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "caractères",
				verb: "avoir"
			},
			file: {
				unit: "octets",
				verb: "avoir"
			},
			array: {
				unit: "éléments",
				verb: "avoir"
			},
			set: {
				unit: "éléments",
				verb: "avoir"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "entrée",
			email: "adresse courriel",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "date-heure ISO",
			date: "date ISO",
			time: "heure ISO",
			duration: "durée ISO",
			ipv4: "adresse IPv4",
			ipv6: "adresse IPv6",
			cidrv4: "plage IPv4",
			cidrv6: "plage IPv6",
			base64: "chaîne encodée en base64",
			base64url: "chaîne encodée en base64url",
			json_string: "chaîne JSON",
			e164: "numéro E.164",
			jwt: "JWT",
			template_literal: "entrée"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Entrée invalide : attendu ${issue.expected}, reçu ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Entrée invalide : attendu ${stringifyPrimitive(issue.values[0])}`;
					return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "≤" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Trop grand : attendu que ${issue.origin ?? "la valeur"} ait ${adj}${issue.maximum.toString()} ${sizing.unit}`;
					return `Trop grand : attendu que ${issue.origin ?? "la valeur"} soit ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? "≥" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Trop petit : attendu que ${issue.origin} ait ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Trop petit : attendu que ${issue.origin} soit ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Chaîne invalide : doit inclure "${_issue.includes}"`;
					if (_issue.format === "regex") return `Chaîne invalide : doit correspondre au motif ${_issue.pattern}`;
					return `${Nouns[_issue.format] ?? issue.format} invalide`;
				}
				case "not_multiple_of": return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
				case "unrecognized_keys": return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Clé invalide dans ${issue.origin}`;
				case "invalid_union": return "Entrée invalide";
				case "invalid_element": return `Valeur invalide dans ${issue.origin}`;
				default: return `Entrée invalide`;
			}
		};
	}, "error");
	function fr_CA_default() {
		return { localeError: error$26() };
	}
	__name(fr_CA_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/he.js
	var error$25 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "אותיות",
				verb: "לכלול"
			},
			file: {
				unit: "בייטים",
				verb: "לכלול"
			},
			array: {
				unit: "פריטים",
				verb: "לכלול"
			},
			set: {
				unit: "פריטים",
				verb: "לכלול"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "קלט",
			email: "כתובת אימייל",
			url: "כתובת רשת",
			emoji: "אימוג'י",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "תאריך וזמן ISO",
			date: "תאריך ISO",
			time: "זמן ISO",
			duration: "משך זמן ISO",
			ipv4: "כתובת IPv4",
			ipv6: "כתובת IPv6",
			cidrv4: "טווח IPv4",
			cidrv6: "טווח IPv6",
			base64: "מחרוזת בבסיס 64",
			base64url: "מחרוזת בבסיס 64 לכתובות רשת",
			json_string: "מחרוזת JSON",
			e164: "מספר E.164",
			jwt: "JWT",
			template_literal: "קלט"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `קלט לא תקין: צריך ${issue.expected}, התקבל ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `קלט לא תקין: צריך ${stringifyPrimitive(issue.values[0])}`;
					return `קלט לא תקין: צריך אחת מהאפשרויות  ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `גדול מדי: ${issue.origin ?? "value"} צריך להיות ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
					return `גדול מדי: ${issue.origin ?? "value"} צריך להיות ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `קטן מדי: ${issue.origin} צריך להיות ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `קטן מדי: ${issue.origin} צריך להיות ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `מחרוזת לא תקינה: חייבת להתחיל ב"${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `מחרוזת לא תקינה: חייבת להסתיים ב "${_issue.suffix}"`;
					if (_issue.format === "includes") return `מחרוזת לא תקינה: חייבת לכלול "${_issue.includes}"`;
					if (_issue.format === "regex") return `מחרוזת לא תקינה: חייבת להתאים לתבנית ${_issue.pattern}`;
					return `${Nouns[_issue.format] ?? issue.format} לא תקין`;
				}
				case "not_multiple_of": return `מספר לא תקין: חייב להיות מכפלה של ${issue.divisor}`;
				case "unrecognized_keys": return `מפתח${issue.keys.length > 1 ? "ות" : ""} לא מזוה${issue.keys.length > 1 ? "ים" : "ה"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `מפתח לא תקין ב${issue.origin}`;
				case "invalid_union": return "קלט לא תקין";
				case "invalid_element": return `ערך לא תקין ב${issue.origin}`;
				default: return `קלט לא תקין`;
			}
		};
	}, "error");
	function he_default() {
		return { localeError: error$25() };
	}
	__name(he_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/hu.js
	var error$24 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "karakter",
				verb: "legyen"
			},
			file: {
				unit: "byte",
				verb: "legyen"
			},
			array: {
				unit: "elem",
				verb: "legyen"
			},
			set: {
				unit: "elem",
				verb: "legyen"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "szám";
				case "object":
					if (Array.isArray(data)) return "tömb";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "bemenet",
			email: "email cím",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO időbélyeg",
			date: "ISO dátum",
			time: "ISO idő",
			duration: "ISO időintervallum",
			ipv4: "IPv4 cím",
			ipv6: "IPv6 cím",
			cidrv4: "IPv4 tartomány",
			cidrv6: "IPv6 tartomány",
			base64: "base64-kódolt string",
			base64url: "base64url-kódolt string",
			json_string: "JSON string",
			e164: "E.164 szám",
			jwt: "JWT",
			template_literal: "bemenet"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Érvénytelen bemenet: a várt érték ${issue.expected}, a kapott érték ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Érvénytelen bemenet: a várt érték ${stringifyPrimitive(issue.values[0])}`;
					return `Érvénytelen opció: valamelyik érték várt ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Túl nagy: ${issue.origin ?? "érték"} mérete túl nagy ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elem"}`;
					return `Túl nagy: a bemeneti érték ${issue.origin ?? "érték"} túl nagy: ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Túl kicsi: a bemeneti érték ${issue.origin} mérete túl kicsi ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Túl kicsi: a bemeneti érték ${issue.origin} túl kicsi ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Érvénytelen string: "${_issue.prefix}" értékkel kell kezdődnie`;
					if (_issue.format === "ends_with") return `Érvénytelen string: "${_issue.suffix}" értékkel kell végződnie`;
					if (_issue.format === "includes") return `Érvénytelen string: "${_issue.includes}" értéket kell tartalmaznia`;
					if (_issue.format === "regex") return `Érvénytelen string: ${_issue.pattern} mintának kell megfelelnie`;
					return `Érvénytelen ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Érvénytelen szám: ${issue.divisor} többszörösének kell lennie`;
				case "unrecognized_keys": return `Ismeretlen kulcs${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Érvénytelen kulcs ${issue.origin}`;
				case "invalid_union": return "Érvénytelen bemenet";
				case "invalid_element": return `Érvénytelen érték: ${issue.origin}`;
				default: return `Érvénytelen bemenet`;
			}
		};
	}, "error");
	function hu_default() {
		return { localeError: error$24() };
	}
	__name(hu_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/id.js
	var error$23 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "karakter",
				verb: "memiliki"
			},
			file: {
				unit: "byte",
				verb: "memiliki"
			},
			array: {
				unit: "item",
				verb: "memiliki"
			},
			set: {
				unit: "item",
				verb: "memiliki"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "input",
			email: "alamat email",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "tanggal dan waktu format ISO",
			date: "tanggal format ISO",
			time: "jam format ISO",
			duration: "durasi format ISO",
			ipv4: "alamat IPv4",
			ipv6: "alamat IPv6",
			cidrv4: "rentang alamat IPv4",
			cidrv6: "rentang alamat IPv6",
			base64: "string dengan enkode base64",
			base64url: "string dengan enkode base64url",
			json_string: "string JSON",
			e164: "angka E.164",
			jwt: "JWT",
			template_literal: "input"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Input tidak valid: diharapkan ${issue.expected}, diterima ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Input tidak valid: diharapkan ${stringifyPrimitive(issue.values[0])}`;
					return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Terlalu besar: diharapkan ${issue.origin ?? "value"} memiliki ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elemen"}`;
					return `Terlalu besar: diharapkan ${issue.origin ?? "value"} menjadi ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Terlalu kecil: diharapkan ${issue.origin} memiliki ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Terlalu kecil: diharapkan ${issue.origin} menjadi ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
					if (_issue.format === "includes") return `String tidak valid: harus menyertakan "${_issue.includes}"`;
					if (_issue.format === "regex") return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
					return `${Nouns[_issue.format] ?? issue.format} tidak valid`;
				}
				case "not_multiple_of": return `Angka tidak valid: harus kelipatan dari ${issue.divisor}`;
				case "unrecognized_keys": return `Kunci tidak dikenali ${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Kunci tidak valid di ${issue.origin}`;
				case "invalid_union": return "Input tidak valid";
				case "invalid_element": return `Nilai tidak valid di ${issue.origin}`;
				default: return `Input tidak valid`;
			}
		};
	}, "error");
	function id_default() {
		return { localeError: error$23() };
	}
	__name(id_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/it.js
	var error$22 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "caratteri",
				verb: "avere"
			},
			file: {
				unit: "byte",
				verb: "avere"
			},
			array: {
				unit: "elementi",
				verb: "avere"
			},
			set: {
				unit: "elementi",
				verb: "avere"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "numero";
				case "object":
					if (Array.isArray(data)) return "vettore";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "input",
			email: "indirizzo email",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "data e ora ISO",
			date: "data ISO",
			time: "ora ISO",
			duration: "durata ISO",
			ipv4: "indirizzo IPv4",
			ipv6: "indirizzo IPv6",
			cidrv4: "intervallo IPv4",
			cidrv6: "intervallo IPv6",
			base64: "stringa codificata in base64",
			base64url: "URL codificata in base64",
			json_string: "stringa JSON",
			e164: "numero E.164",
			jwt: "JWT",
			template_literal: "input"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Input non valido: atteso ${issue.expected}, ricevuto ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Input non valido: atteso ${stringifyPrimitive(issue.values[0])}`;
					return `Opzione non valida: atteso uno tra ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Troppo grande: ${issue.origin ?? "valore"} deve avere ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementi"}`;
					return `Troppo grande: ${issue.origin ?? "valore"} deve essere ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Troppo piccolo: ${issue.origin} deve avere ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Troppo piccolo: ${issue.origin} deve essere ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Stringa non valida: deve includere "${_issue.includes}"`;
					if (_issue.format === "regex") return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
					return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Numero non valido: deve essere un multiplo di ${issue.divisor}`;
				case "unrecognized_keys": return `Chiav${issue.keys.length > 1 ? "i" : "e"} non riconosciut${issue.keys.length > 1 ? "e" : "a"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Chiave non valida in ${issue.origin}`;
				case "invalid_union": return "Input non valido";
				case "invalid_element": return `Valore non valido in ${issue.origin}`;
				default: return `Input non valido`;
			}
		};
	}, "error");
	function it_default() {
		return { localeError: error$22() };
	}
	__name(it_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ja.js
	var error$21 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "文字",
				verb: "である"
			},
			file: {
				unit: "バイト",
				verb: "である"
			},
			array: {
				unit: "要素",
				verb: "である"
			},
			set: {
				unit: "要素",
				verb: "である"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "数値";
				case "object":
					if (Array.isArray(data)) return "配列";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "入力値",
			email: "メールアドレス",
			url: "URL",
			emoji: "絵文字",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO日時",
			date: "ISO日付",
			time: "ISO時刻",
			duration: "ISO期間",
			ipv4: "IPv4アドレス",
			ipv6: "IPv6アドレス",
			cidrv4: "IPv4範囲",
			cidrv6: "IPv6範囲",
			base64: "base64エンコード文字列",
			base64url: "base64urlエンコード文字列",
			json_string: "JSON文字列",
			e164: "E.164番号",
			jwt: "JWT",
			template_literal: "入力値"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `無効な入力: ${issue.expected}が期待されましたが、${parsedType(issue.input)}が入力されました`;
				case "invalid_value":
					if (issue.values.length === 1) return `無効な入力: ${stringifyPrimitive(issue.values[0])}が期待されました`;
					return `無効な選択: ${joinValues(issue.values, "、")}のいずれかである必要があります`;
				case "too_big": {
					const adj = issue.inclusive ? "以下である" : "より小さい";
					const sizing = getSizing(issue.origin);
					if (sizing) return `大きすぎる値: ${issue.origin ?? "値"}は${issue.maximum.toString()}${sizing.unit ?? "要素"}${adj}必要があります`;
					return `大きすぎる値: ${issue.origin ?? "値"}は${issue.maximum.toString()}${adj}必要があります`;
				}
				case "too_small": {
					const adj = issue.inclusive ? "以上である" : "より大きい";
					const sizing = getSizing(issue.origin);
					if (sizing) return `小さすぎる値: ${issue.origin}は${issue.minimum.toString()}${sizing.unit}${adj}必要があります`;
					return `小さすぎる値: ${issue.origin}は${issue.minimum.toString()}${adj}必要があります`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `無効な文字列: "${_issue.prefix}"で始まる必要があります`;
					if (_issue.format === "ends_with") return `無効な文字列: "${_issue.suffix}"で終わる必要があります`;
					if (_issue.format === "includes") return `無効な文字列: "${_issue.includes}"を含む必要があります`;
					if (_issue.format === "regex") return `無効な文字列: パターン${_issue.pattern}に一致する必要があります`;
					return `無効な${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `無効な数値: ${issue.divisor}の倍数である必要があります`;
				case "unrecognized_keys": return `認識されていないキー${issue.keys.length > 1 ? "群" : ""}: ${joinValues(issue.keys, "、")}`;
				case "invalid_key": return `${issue.origin}内の無効なキー`;
				case "invalid_union": return "無効な入力";
				case "invalid_element": return `${issue.origin}内の無効な値`;
				default: return `無効な入力`;
			}
		};
	}, "error");
	function ja_default() {
		return { localeError: error$21() };
	}
	__name(ja_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/kh.js
	var error$20 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "តួអក្សរ",
				verb: "គួរមាន"
			},
			file: {
				unit: "បៃ",
				verb: "គួរមាន"
			},
			array: {
				unit: "ធាតុ",
				verb: "គួរមាន"
			},
			set: {
				unit: "ធាតុ",
				verb: "គួរមាន"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
				case "object":
					if (Array.isArray(data)) return "អារេ (Array)";
					if (data === null) return "គ្មានតម្លៃ (null)";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "ទិន្នន័យបញ្ចូល",
			email: "អាសយដ្ឋានអ៊ីមែល",
			url: "URL",
			emoji: "សញ្ញាអារម្មណ៍",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
			date: "កាលបរិច្ឆេទ ISO",
			time: "ម៉ោង ISO",
			duration: "រយៈពេល ISO",
			ipv4: "អាសយដ្ឋាន IPv4",
			ipv6: "អាសយដ្ឋាន IPv6",
			cidrv4: "ដែនអាសយដ្ឋាន IPv4",
			cidrv6: "ដែនអាសយដ្ឋាន IPv6",
			base64: "ខ្សែអក្សរអ៊ិកូដ base64",
			base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
			json_string: "ខ្សែអក្សរ JSON",
			e164: "លេខ E.164",
			jwt: "JWT",
			template_literal: "ទិន្នន័យបញ្ចូល"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${issue.expected} ប៉ុន្តែទទួលបាន ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${stringifyPrimitive(issue.values[0])}`;
					return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `ធំពេក៖ ត្រូវការ ${issue.origin ?? "តម្លៃ"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "ធាតុ"}`;
					return `ធំពេក៖ ត្រូវការ ${issue.origin ?? "តម្លៃ"} ${adj} ${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `តូចពេក៖ ត្រូវការ ${issue.origin} ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
					return `តូចពេក៖ ត្រូវការ ${issue.origin} ${adj} ${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_issue.suffix}"`;
					if (_issue.format === "includes") return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_issue.includes}"`;
					if (_issue.format === "regex") return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_issue.pattern}`;
					return `មិនត្រឹមត្រូវ៖ ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${issue.divisor}`;
				case "unrecognized_keys": return `រកឃើញសោមិនស្គាល់៖ ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `សោមិនត្រឹមត្រូវនៅក្នុង ${issue.origin}`;
				case "invalid_union": return `ទិន្នន័យមិនត្រឹមត្រូវ`;
				case "invalid_element": return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${issue.origin}`;
				default: return `ទិន្នន័យមិនត្រឹមត្រូវ`;
			}
		};
	}, "error");
	function kh_default() {
		return { localeError: error$20() };
	}
	__name(kh_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ko.js
	var error$19 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "문자",
				verb: "to have"
			},
			file: {
				unit: "바이트",
				verb: "to have"
			},
			array: {
				unit: "개",
				verb: "to have"
			},
			set: {
				unit: "개",
				verb: "to have"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "입력",
			email: "이메일 주소",
			url: "URL",
			emoji: "이모지",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO 날짜시간",
			date: "ISO 날짜",
			time: "ISO 시간",
			duration: "ISO 기간",
			ipv4: "IPv4 주소",
			ipv6: "IPv6 주소",
			cidrv4: "IPv4 범위",
			cidrv6: "IPv6 범위",
			base64: "base64 인코딩 문자열",
			base64url: "base64url 인코딩 문자열",
			json_string: "JSON 문자열",
			e164: "E.164 번호",
			jwt: "JWT",
			template_literal: "입력"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `잘못된 입력: 예상 타입은 ${issue.expected}, 받은 타입은 ${parsedType(issue.input)}입니다`;
				case "invalid_value":
					if (issue.values.length === 1) return `잘못된 입력: 값은 ${stringifyPrimitive(issue.values[0])} 이어야 합니다`;
					return `잘못된 옵션: ${joinValues(issue.values, "또는 ")} 중 하나여야 합니다`;
				case "too_big": {
					const adj = issue.inclusive ? "이하" : "미만";
					const suffix = adj === "미만" ? "이어야 합니다" : "여야 합니다";
					const sizing = getSizing(issue.origin);
					const unit = sizing?.unit ?? "요소";
					if (sizing) return `${issue.origin ?? "값"}이 너무 큽니다: ${issue.maximum.toString()}${unit} ${adj}${suffix}`;
					return `${issue.origin ?? "값"}이 너무 큽니다: ${issue.maximum.toString()} ${adj}${suffix}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? "이상" : "초과";
					const suffix = adj === "이상" ? "이어야 합니다" : "여야 합니다";
					const sizing = getSizing(issue.origin);
					const unit = sizing?.unit ?? "요소";
					if (sizing) return `${issue.origin ?? "값"}이 너무 작습니다: ${issue.minimum.toString()}${unit} ${adj}${suffix}`;
					return `${issue.origin ?? "값"}이 너무 작습니다: ${issue.minimum.toString()} ${adj}${suffix}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `잘못된 문자열: "${_issue.prefix}"(으)로 시작해야 합니다`;
					if (_issue.format === "ends_with") return `잘못된 문자열: "${_issue.suffix}"(으)로 끝나야 합니다`;
					if (_issue.format === "includes") return `잘못된 문자열: "${_issue.includes}"을(를) 포함해야 합니다`;
					if (_issue.format === "regex") return `잘못된 문자열: 정규식 ${_issue.pattern} 패턴과 일치해야 합니다`;
					return `잘못된 ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `잘못된 숫자: ${issue.divisor}의 배수여야 합니다`;
				case "unrecognized_keys": return `인식할 수 없는 키: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `잘못된 키: ${issue.origin}`;
				case "invalid_union": return `잘못된 입력`;
				case "invalid_element": return `잘못된 값: ${issue.origin}`;
				default: return `잘못된 입력`;
			}
		};
	}, "error");
	function ko_default() {
		return { localeError: error$19() };
	}
	__name(ko_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/mk.js
	var error$18 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "знаци",
				verb: "да имаат"
			},
			file: {
				unit: "бајти",
				verb: "да имаат"
			},
			array: {
				unit: "ставки",
				verb: "да имаат"
			},
			set: {
				unit: "ставки",
				verb: "да имаат"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "број";
				case "object":
					if (Array.isArray(data)) return "низа";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "внес",
			email: "адреса на е-пошта",
			url: "URL",
			emoji: "емоџи",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO датум и време",
			date: "ISO датум",
			time: "ISO време",
			duration: "ISO времетраење",
			ipv4: "IPv4 адреса",
			ipv6: "IPv6 адреса",
			cidrv4: "IPv4 опсег",
			cidrv6: "IPv6 опсег",
			base64: "base64-енкодирана низа",
			base64url: "base64url-енкодирана низа",
			json_string: "JSON низа",
			e164: "E.164 број",
			jwt: "JWT",
			template_literal: "внес"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Грешен внес: се очекува ${issue.expected}, примено ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
					return `Грешана опција: се очекува една ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Премногу голем: се очекува ${issue.origin ?? "вредноста"} да има ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елементи"}`;
					return `Премногу голем: се очекува ${issue.origin ?? "вредноста"} да биде ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Премногу мал: се очекува ${issue.origin} да има ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Премногу мал: се очекува ${issue.origin} да биде ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Неважечка низа: мора да започнува со "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Неважечка низа: мора да завршува со "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Неважечка низа: мора да вклучува "${_issue.includes}"`;
					if (_issue.format === "regex") return `Неважечка низа: мора да одгоара на патернот ${_issue.pattern}`;
					return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Грешен број: мора да биде делив со ${issue.divisor}`;
				case "unrecognized_keys": return `${issue.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Грешен клуч во ${issue.origin}`;
				case "invalid_union": return "Грешен внес";
				case "invalid_element": return `Грешна вредност во ${issue.origin}`;
				default: return `Грешен внес`;
			}
		};
	}, "error");
	function mk_default() {
		return { localeError: error$18() };
	}
	__name(mk_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ms.js
	var error$17 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "aksara",
				verb: "mempunyai"
			},
			file: {
				unit: "bait",
				verb: "mempunyai"
			},
			array: {
				unit: "elemen",
				verb: "mempunyai"
			},
			set: {
				unit: "elemen",
				verb: "mempunyai"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "nombor";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "input",
			email: "alamat e-mel",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "tarikh masa ISO",
			date: "tarikh ISO",
			time: "masa ISO",
			duration: "tempoh ISO",
			ipv4: "alamat IPv4",
			ipv6: "alamat IPv6",
			cidrv4: "julat IPv4",
			cidrv6: "julat IPv6",
			base64: "string dikodkan base64",
			base64url: "string dikodkan base64url",
			json_string: "string JSON",
			e164: "nombor E.164",
			jwt: "JWT",
			template_literal: "input"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Input tidak sah: dijangka ${issue.expected}, diterima ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Input tidak sah: dijangka ${stringifyPrimitive(issue.values[0])}`;
					return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Terlalu besar: dijangka ${issue.origin ?? "nilai"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elemen"}`;
					return `Terlalu besar: dijangka ${issue.origin ?? "nilai"} adalah ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Terlalu kecil: dijangka ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Terlalu kecil: dijangka ${issue.origin} adalah ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
					if (_issue.format === "includes") return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
					if (_issue.format === "regex") return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
					return `${Nouns[_issue.format] ?? issue.format} tidak sah`;
				}
				case "not_multiple_of": return `Nombor tidak sah: perlu gandaan ${issue.divisor}`;
				case "unrecognized_keys": return `Kunci tidak dikenali: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Kunci tidak sah dalam ${issue.origin}`;
				case "invalid_union": return "Input tidak sah";
				case "invalid_element": return `Nilai tidak sah dalam ${issue.origin}`;
				default: return `Input tidak sah`;
			}
		};
	}, "error");
	function ms_default() {
		return { localeError: error$17() };
	}
	__name(ms_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/nl.js
	var error$16 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: { unit: "tekens" },
			file: { unit: "bytes" },
			array: { unit: "elementen" },
			set: { unit: "elementen" }
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "getal";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "invoer",
			email: "emailadres",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO datum en tijd",
			date: "ISO datum",
			time: "ISO tijd",
			duration: "ISO duur",
			ipv4: "IPv4-adres",
			ipv6: "IPv6-adres",
			cidrv4: "IPv4-bereik",
			cidrv6: "IPv6-bereik",
			base64: "base64-gecodeerde tekst",
			base64url: "base64 URL-gecodeerde tekst",
			json_string: "JSON string",
			e164: "E.164-nummer",
			jwt: "JWT",
			template_literal: "invoer"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Ongeldige invoer: verwacht ${issue.expected}, ontving ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue.values[0])}`;
					return `Ongeldige optie: verwacht één van ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Te lang: verwacht dat ${issue.origin ?? "waarde"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementen"} bevat`;
					return `Te lang: verwacht dat ${issue.origin ?? "waarde"} ${adj}${issue.maximum.toString()} is`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Te kort: verwacht dat ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} bevat`;
					return `Te kort: verwacht dat ${issue.origin} ${adj}${issue.minimum.toString()} is`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
					if (_issue.format === "ends_with") return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
					if (_issue.format === "includes") return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
					if (_issue.format === "regex") return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
					return `Ongeldig: ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Ongeldig getal: moet een veelvoud van ${issue.divisor} zijn`;
				case "unrecognized_keys": return `Onbekende key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Ongeldige key in ${issue.origin}`;
				case "invalid_union": return "Ongeldige invoer";
				case "invalid_element": return `Ongeldige waarde in ${issue.origin}`;
				default: return `Ongeldige invoer`;
			}
		};
	}, "error");
	function nl_default() {
		return { localeError: error$16() };
	}
	__name(nl_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/no.js
	var error$15 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "tegn",
				verb: "å ha"
			},
			file: {
				unit: "bytes",
				verb: "å ha"
			},
			array: {
				unit: "elementer",
				verb: "å inneholde"
			},
			set: {
				unit: "elementer",
				verb: "å inneholde"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "tall";
				case "object":
					if (Array.isArray(data)) return "liste";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "input",
			email: "e-postadresse",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO dato- og klokkeslett",
			date: "ISO-dato",
			time: "ISO-klokkeslett",
			duration: "ISO-varighet",
			ipv4: "IPv4-område",
			ipv6: "IPv6-område",
			cidrv4: "IPv4-spekter",
			cidrv6: "IPv6-spekter",
			base64: "base64-enkodet streng",
			base64url: "base64url-enkodet streng",
			json_string: "JSON-streng",
			e164: "E.164-nummer",
			jwt: "JWT",
			template_literal: "input"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Ugyldig input: forventet ${issue.expected}, fikk ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Ugyldig verdi: forventet ${stringifyPrimitive(issue.values[0])}`;
					return `Ugyldig valg: forventet en av ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementer"}`;
					return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Ugyldig streng: må starte med "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Ugyldig streng: må ende med "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Ugyldig streng: må inneholde "${_issue.includes}"`;
					if (_issue.format === "regex") return `Ugyldig streng: må matche mønsteret ${_issue.pattern}`;
					return `Ugyldig ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Ugyldig tall: må være et multiplum av ${issue.divisor}`;
				case "unrecognized_keys": return `${issue.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Ugyldig nøkkel i ${issue.origin}`;
				case "invalid_union": return "Ugyldig input";
				case "invalid_element": return `Ugyldig verdi i ${issue.origin}`;
				default: return `Ugyldig input`;
			}
		};
	}, "error");
	function no_default() {
		return { localeError: error$15() };
	}
	__name(no_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ota.js
	var error$14 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "harf",
				verb: "olmalıdır"
			},
			file: {
				unit: "bayt",
				verb: "olmalıdır"
			},
			array: {
				unit: "unsur",
				verb: "olmalıdır"
			},
			set: {
				unit: "unsur",
				verb: "olmalıdır"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "numara";
				case "object":
					if (Array.isArray(data)) return "saf";
					if (data === null) return "gayb";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "giren",
			email: "epostagâh",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO hengâmı",
			date: "ISO tarihi",
			time: "ISO zamanı",
			duration: "ISO müddeti",
			ipv4: "IPv4 nişânı",
			ipv6: "IPv6 nişânı",
			cidrv4: "IPv4 menzili",
			cidrv6: "IPv6 menzili",
			base64: "base64-şifreli metin",
			base64url: "base64url-şifreli metin",
			json_string: "JSON metin",
			e164: "E.164 sayısı",
			jwt: "JWT",
			template_literal: "giren"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Fâsit giren: umulan ${issue.expected}, alınan ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Fâsit giren: umulan ${stringifyPrimitive(issue.values[0])}`;
					return `Fâsit tercih: mûteberler ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Fazla büyük: ${issue.origin ?? "value"}, ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmalıydı.`;
					return `Fazla büyük: ${issue.origin ?? "value"}, ${adj}${issue.maximum.toString()} olmalıydı.`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Fazla küçük: ${issue.origin}, ${adj}${issue.minimum.toString()} ${sizing.unit} sahip olmalıydı.`;
					return `Fazla küçük: ${issue.origin}, ${adj}${issue.minimum.toString()} olmalıydı.`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Fâsit metin: "${_issue.prefix}" ile başlamalı.`;
					if (_issue.format === "ends_with") return `Fâsit metin: "${_issue.suffix}" ile bitmeli.`;
					if (_issue.format === "includes") return `Fâsit metin: "${_issue.includes}" ihtivâ etmeli.`;
					if (_issue.format === "regex") return `Fâsit metin: ${_issue.pattern} nakşına uymalı.`;
					return `Fâsit ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Fâsit sayı: ${issue.divisor} katı olmalıydı.`;
				case "unrecognized_keys": return `Tanınmayan anahtar ${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `${issue.origin} için tanınmayan anahtar var.`;
				case "invalid_union": return "Giren tanınamadı.";
				case "invalid_element": return `${issue.origin} için tanınmayan kıymet var.`;
				default: return `Kıymet tanınamadı.`;
			}
		};
	}, "error");
	function ota_default() {
		return { localeError: error$14() };
	}
	__name(ota_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ps.js
	var error$13 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "توکي",
				verb: "ولري"
			},
			file: {
				unit: "بایټس",
				verb: "ولري"
			},
			array: {
				unit: "توکي",
				verb: "ولري"
			},
			set: {
				unit: "توکي",
				verb: "ولري"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "عدد";
				case "object":
					if (Array.isArray(data)) return "ارې";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "ورودي",
			email: "بریښنالیک",
			url: "یو آر ال",
			emoji: "ایموجي",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "نیټه او وخت",
			date: "نېټه",
			time: "وخت",
			duration: "موده",
			ipv4: "د IPv4 پته",
			ipv6: "د IPv6 پته",
			cidrv4: "د IPv4 ساحه",
			cidrv6: "د IPv6 ساحه",
			base64: "base64-encoded متن",
			base64url: "base64url-encoded متن",
			json_string: "JSON متن",
			e164: "د E.164 شمېره",
			jwt: "JWT",
			template_literal: "ورودي"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `ناسم ورودي: باید ${issue.expected} وای, مګر ${parsedType(issue.input)} ترلاسه شو`;
				case "invalid_value":
					if (issue.values.length === 1) return `ناسم ورودي: باید ${stringifyPrimitive(issue.values[0])} وای`;
					return `ناسم انتخاب: باید یو له ${joinValues(issue.values, "|")} څخه وای`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `ډیر لوی: ${issue.origin ?? "ارزښت"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصرونه"} ولري`;
					return `ډیر لوی: ${issue.origin ?? "ارزښت"} باید ${adj}${issue.maximum.toString()} وي`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `ډیر کوچنی: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} ولري`;
					return `ډیر کوچنی: ${issue.origin} باید ${adj}${issue.minimum.toString()} وي`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `ناسم متن: باید د "${_issue.prefix}" سره پیل شي`;
					if (_issue.format === "ends_with") return `ناسم متن: باید د "${_issue.suffix}" سره پای ته ورسيږي`;
					if (_issue.format === "includes") return `ناسم متن: باید "${_issue.includes}" ولري`;
					if (_issue.format === "regex") return `ناسم متن: باید د ${_issue.pattern} سره مطابقت ولري`;
					return `${Nouns[_issue.format] ?? issue.format} ناسم دی`;
				}
				case "not_multiple_of": return `ناسم عدد: باید د ${issue.divisor} مضرب وي`;
				case "unrecognized_keys": return `ناسم ${issue.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `ناسم کلیډ په ${issue.origin} کې`;
				case "invalid_union": return `ناسمه ورودي`;
				case "invalid_element": return `ناسم عنصر په ${issue.origin} کې`;
				default: return `ناسمه ورودي`;
			}
		};
	}, "error");
	function ps_default() {
		return { localeError: error$13() };
	}
	__name(ps_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/pl.js
	var error$12 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "znaków",
				verb: "mieć"
			},
			file: {
				unit: "bajtów",
				verb: "mieć"
			},
			array: {
				unit: "elementów",
				verb: "mieć"
			},
			set: {
				unit: "elementów",
				verb: "mieć"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "liczba";
				case "object":
					if (Array.isArray(data)) return "tablica";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "wyrażenie",
			email: "adres email",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "data i godzina w formacie ISO",
			date: "data w formacie ISO",
			time: "godzina w formacie ISO",
			duration: "czas trwania ISO",
			ipv4: "adres IPv4",
			ipv6: "adres IPv6",
			cidrv4: "zakres IPv4",
			cidrv6: "zakres IPv6",
			base64: "ciąg znaków zakodowany w formacie base64",
			base64url: "ciąg znaków zakodowany w formacie base64url",
			json_string: "ciąg znaków w formacie JSON",
			e164: "liczba E.164",
			jwt: "JWT",
			template_literal: "wejście"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Nieprawidłowe dane wejściowe: oczekiwano ${issue.expected}, otrzymano ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Nieprawidłowe dane wejściowe: oczekiwano ${stringifyPrimitive(issue.values[0])}`;
					return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Za duża wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementów"}`;
					return `Zbyt duż(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Za mała wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.minimum.toString()} ${sizing.unit ?? "elementów"}`;
					return `Zbyt mał(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Nieprawidłowy ciąg znaków: musi kończyć się na "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Nieprawidłowy ciąg znaków: musi zawierać "${_issue.includes}"`;
					if (_issue.format === "regex") return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_issue.pattern}`;
					return `Nieprawidłow(y/a/e) ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Nieprawidłowa liczba: musi być wielokrotnością ${issue.divisor}`;
				case "unrecognized_keys": return `Nierozpoznane klucze${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Nieprawidłowy klucz w ${issue.origin}`;
				case "invalid_union": return "Nieprawidłowe dane wejściowe";
				case "invalid_element": return `Nieprawidłowa wartość w ${issue.origin}`;
				default: return `Nieprawidłowe dane wejściowe`;
			}
		};
	}, "error");
	function pl_default() {
		return { localeError: error$12() };
	}
	__name(pl_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/pt.js
	var error$11 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "caracteres",
				verb: "ter"
			},
			file: {
				unit: "bytes",
				verb: "ter"
			},
			array: {
				unit: "itens",
				verb: "ter"
			},
			set: {
				unit: "itens",
				verb: "ter"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "número";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "nulo";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "padrão",
			email: "endereço de e-mail",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "data e hora ISO",
			date: "data ISO",
			time: "hora ISO",
			duration: "duração ISO",
			ipv4: "endereço IPv4",
			ipv6: "endereço IPv6",
			cidrv4: "faixa de IPv4",
			cidrv6: "faixa de IPv6",
			base64: "texto codificado em base64",
			base64url: "URL codificada em base64",
			json_string: "texto JSON",
			e164: "número E.164",
			jwt: "JWT",
			template_literal: "entrada"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Tipo inválido: esperado ${issue.expected}, recebido ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Entrada inválida: esperado ${stringifyPrimitive(issue.values[0])}`;
					return `Opção inválida: esperada uma das ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Muito grande: esperado que ${issue.origin ?? "valor"} tivesse ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
					return `Muito grande: esperado que ${issue.origin ?? "valor"} fosse ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Muito pequeno: esperado que ${issue.origin} tivesse ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Muito pequeno: esperado que ${issue.origin} fosse ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Texto inválido: deve começar com "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Texto inválido: deve terminar com "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Texto inválido: deve incluir "${_issue.includes}"`;
					if (_issue.format === "regex") return `Texto inválido: deve corresponder ao padrão ${_issue.pattern}`;
					return `${Nouns[_issue.format] ?? issue.format} inválido`;
				}
				case "not_multiple_of": return `Número inválido: deve ser múltiplo de ${issue.divisor}`;
				case "unrecognized_keys": return `Chave${issue.keys.length > 1 ? "s" : ""} desconhecida${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Chave inválida em ${issue.origin}`;
				case "invalid_union": return "Entrada inválida";
				case "invalid_element": return `Valor inválido em ${issue.origin}`;
				default: return `Campo inválido`;
			}
		};
	}, "error");
	function pt_default() {
		return { localeError: error$11() };
	}
	__name(pt_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ru.js
	function getRussianPlural(count, one, few, many) {
		const absCount = Math.abs(count);
		const lastDigit = absCount % 10;
		const lastTwoDigits = absCount % 100;
		if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return many;
		if (lastDigit === 1) return one;
		if (lastDigit >= 2 && lastDigit <= 4) return few;
		return many;
	}
	var error$10 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: {
					one: "символ",
					few: "символа",
					many: "символов"
				},
				verb: "иметь"
			},
			file: {
				unit: {
					one: "байт",
					few: "байта",
					many: "байт"
				},
				verb: "иметь"
			},
			array: {
				unit: {
					one: "элемент",
					few: "элемента",
					many: "элементов"
				},
				verb: "иметь"
			},
			set: {
				unit: {
					one: "элемент",
					few: "элемента",
					many: "элементов"
				},
				verb: "иметь"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "число";
				case "object":
					if (Array.isArray(data)) return "массив";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "ввод",
			email: "email адрес",
			url: "URL",
			emoji: "эмодзи",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO дата и время",
			date: "ISO дата",
			time: "ISO время",
			duration: "ISO длительность",
			ipv4: "IPv4 адрес",
			ipv6: "IPv6 адрес",
			cidrv4: "IPv4 диапазон",
			cidrv6: "IPv6 диапазон",
			base64: "строка в формате base64",
			base64url: "строка в формате base64url",
			json_string: "JSON строка",
			e164: "номер E.164",
			jwt: "JWT",
			template_literal: "ввод"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Неверный ввод: ожидалось ${issue.expected}, получено ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Неверный ввод: ожидалось ${stringifyPrimitive(issue.values[0])}`;
					return `Неверный вариант: ожидалось одно из ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) {
						const unit = getRussianPlural(Number(issue.maximum), sizing.unit.one, sizing.unit.few, sizing.unit.many);
						return `Слишком большое значение: ожидалось, что ${issue.origin ?? "значение"} будет иметь ${adj}${issue.maximum.toString()} ${unit}`;
					}
					return `Слишком большое значение: ожидалось, что ${issue.origin ?? "значение"} будет ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) {
						const unit = getRussianPlural(Number(issue.minimum), sizing.unit.one, sizing.unit.few, sizing.unit.many);
						return `Слишком маленькое значение: ожидалось, что ${issue.origin} будет иметь ${adj}${issue.minimum.toString()} ${unit}`;
					}
					return `Слишком маленькое значение: ожидалось, что ${issue.origin} будет ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Неверная строка: должна начинаться с "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Неверная строка: должна заканчиваться на "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Неверная строка: должна содержать "${_issue.includes}"`;
					if (_issue.format === "regex") return `Неверная строка: должна соответствовать шаблону ${_issue.pattern}`;
					return `Неверный ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Неверное число: должно быть кратным ${issue.divisor}`;
				case "unrecognized_keys": return `Нераспознанн${issue.keys.length > 1 ? "ые" : "ый"} ключ${issue.keys.length > 1 ? "и" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Неверный ключ в ${issue.origin}`;
				case "invalid_union": return "Неверные входные данные";
				case "invalid_element": return `Неверное значение в ${issue.origin}`;
				default: return `Неверные входные данные`;
			}
		};
	}, "error");
	function ru_default() {
		return { localeError: error$10() };
	}
	__name(ru_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/sl.js
	var error$9 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "znakov",
				verb: "imeti"
			},
			file: {
				unit: "bajtov",
				verb: "imeti"
			},
			array: {
				unit: "elementov",
				verb: "imeti"
			},
			set: {
				unit: "elementov",
				verb: "imeti"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "število";
				case "object":
					if (Array.isArray(data)) return "tabela";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "vnos",
			email: "e-poštni naslov",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO datum in čas",
			date: "ISO datum",
			time: "ISO čas",
			duration: "ISO trajanje",
			ipv4: "IPv4 naslov",
			ipv6: "IPv6 naslov",
			cidrv4: "obseg IPv4",
			cidrv6: "obseg IPv6",
			base64: "base64 kodiran niz",
			base64url: "base64url kodiran niz",
			json_string: "JSON niz",
			e164: "E.164 številka",
			jwt: "JWT",
			template_literal: "vnos"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Neveljaven vnos: pričakovano ${issue.expected}, prejeto ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Neveljaven vnos: pričakovano ${stringifyPrimitive(issue.values[0])}`;
					return `Neveljavna možnost: pričakovano eno izmed ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Preveliko: pričakovano, da bo ${issue.origin ?? "vrednost"} imelo ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementov"}`;
					return `Preveliko: pričakovano, da bo ${issue.origin ?? "vrednost"} ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Premajhno: pričakovano, da bo ${issue.origin} imelo ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Premajhno: pričakovano, da bo ${issue.origin} ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Neveljaven niz: mora se začeti z "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Neveljaven niz: mora se končati z "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
					if (_issue.format === "regex") return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
					return `Neveljaven ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Neveljavno število: mora biti večkratnik ${issue.divisor}`;
				case "unrecognized_keys": return `Neprepoznan${issue.keys.length > 1 ? "i ključi" : " ključ"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Neveljaven ključ v ${issue.origin}`;
				case "invalid_union": return "Neveljaven vnos";
				case "invalid_element": return `Neveljavna vrednost v ${issue.origin}`;
				default: return "Neveljaven vnos";
			}
		};
	}, "error");
	function sl_default() {
		return { localeError: error$9() };
	}
	__name(sl_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/sv.js
	var error$8 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "tecken",
				verb: "att ha"
			},
			file: {
				unit: "bytes",
				verb: "att ha"
			},
			array: {
				unit: "objekt",
				verb: "att innehålla"
			},
			set: {
				unit: "objekt",
				verb: "att innehålla"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "antal";
				case "object":
					if (Array.isArray(data)) return "lista";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "reguljärt uttryck",
			email: "e-postadress",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO-datum och tid",
			date: "ISO-datum",
			time: "ISO-tid",
			duration: "ISO-varaktighet",
			ipv4: "IPv4-intervall",
			ipv6: "IPv6-intervall",
			cidrv4: "IPv4-spektrum",
			cidrv6: "IPv6-spektrum",
			base64: "base64-kodad sträng",
			base64url: "base64url-kodad sträng",
			json_string: "JSON-sträng",
			e164: "E.164-nummer",
			jwt: "JWT",
			template_literal: "mall-literal"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Ogiltig inmatning: förväntat ${issue.expected}, fick ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Ogiltig inmatning: förväntat ${stringifyPrimitive(issue.values[0])}`;
					return `Ogiltigt val: förväntade en av ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `För stor(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
					return `För stor(t): förväntat ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Ogiltig sträng: måste börja med "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Ogiltig sträng: måste sluta med "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Ogiltig sträng: måste innehålla "${_issue.includes}"`;
					if (_issue.format === "regex") return `Ogiltig sträng: måste matcha mönstret "${_issue.pattern}"`;
					return `Ogiltig(t) ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Ogiltigt tal: måste vara en multipel av ${issue.divisor}`;
				case "unrecognized_keys": return `${issue.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Ogiltig nyckel i ${issue.origin ?? "värdet"}`;
				case "invalid_union": return "Ogiltig input";
				case "invalid_element": return `Ogiltigt värde i ${issue.origin ?? "värdet"}`;
				default: return `Ogiltig input`;
			}
		};
	}, "error");
	function sv_default() {
		return { localeError: error$8() };
	}
	__name(sv_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ta.js
	var error$7 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "எழுத்துக்கள்",
				verb: "கொண்டிருக்க வேண்டும்"
			},
			file: {
				unit: "பைட்டுகள்",
				verb: "கொண்டிருக்க வேண்டும்"
			},
			array: {
				unit: "உறுப்புகள்",
				verb: "கொண்டிருக்க வேண்டும்"
			},
			set: {
				unit: "உறுப்புகள்",
				verb: "கொண்டிருக்க வேண்டும்"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "எண் அல்லாதது" : "எண்";
				case "object":
					if (Array.isArray(data)) return "அணி";
					if (data === null) return "வெறுமை";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "உள்ளீடு",
			email: "மின்னஞ்சல் முகவரி",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO தேதி நேரம்",
			date: "ISO தேதி",
			time: "ISO நேரம்",
			duration: "ISO கால அளவு",
			ipv4: "IPv4 முகவரி",
			ipv6: "IPv6 முகவரி",
			cidrv4: "IPv4 வரம்பு",
			cidrv6: "IPv6 வரம்பு",
			base64: "base64-encoded சரம்",
			base64url: "base64url-encoded சரம்",
			json_string: "JSON சரம்",
			e164: "E.164 எண்",
			jwt: "JWT",
			template_literal: "input"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${issue.expected}, பெறப்பட்டது ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${stringifyPrimitive(issue.values[0])}`;
					return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${joinValues(issue.values, "|")} இல் ஒன்று`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
					return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ஆக இருக்க வேண்டும்`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} ஆக இருக்க வேண்டும்`;
					return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ஆக இருக்க வேண்டும்`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `தவறான சரம்: "${_issue.prefix}" இல் தொடங்க வேண்டும்`;
					if (_issue.format === "ends_with") return `தவறான சரம்: "${_issue.suffix}" இல் முடிவடைய வேண்டும்`;
					if (_issue.format === "includes") return `தவறான சரம்: "${_issue.includes}" ஐ உள்ளடக்க வேண்டும்`;
					if (_issue.format === "regex") return `தவறான சரம்: ${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
					return `தவறான ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `தவறான எண்: ${issue.divisor} இன் பலமாக இருக்க வேண்டும்`;
				case "unrecognized_keys": return `அடையாளம் தெரியாத விசை${issue.keys.length > 1 ? "கள்" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `${issue.origin} இல் தவறான விசை`;
				case "invalid_union": return "தவறான உள்ளீடு";
				case "invalid_element": return `${issue.origin} இல் தவறான மதிப்பு`;
				default: return `தவறான உள்ளீடு`;
			}
		};
	}, "error");
	function ta_default() {
		return { localeError: error$7() };
	}
	__name(ta_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/th.js
	var error$6 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "ตัวอักษร",
				verb: "ควรมี"
			},
			file: {
				unit: "ไบต์",
				verb: "ควรมี"
			},
			array: {
				unit: "รายการ",
				verb: "ควรมี"
			},
			set: {
				unit: "รายการ",
				verb: "ควรมี"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
				case "object":
					if (Array.isArray(data)) return "อาร์เรย์ (Array)";
					if (data === null) return "ไม่มีค่า (null)";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "ข้อมูลที่ป้อน",
			email: "ที่อยู่อีเมล",
			url: "URL",
			emoji: "อิโมจิ",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "วันที่เวลาแบบ ISO",
			date: "วันที่แบบ ISO",
			time: "เวลาแบบ ISO",
			duration: "ช่วงเวลาแบบ ISO",
			ipv4: "ที่อยู่ IPv4",
			ipv6: "ที่อยู่ IPv6",
			cidrv4: "ช่วง IP แบบ IPv4",
			cidrv6: "ช่วง IP แบบ IPv6",
			base64: "ข้อความแบบ Base64",
			base64url: "ข้อความแบบ Base64 สำหรับ URL",
			json_string: "ข้อความแบบ JSON",
			e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
			jwt: "โทเคน JWT",
			template_literal: "ข้อมูลที่ป้อน"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${issue.expected} แต่ได้รับ ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `ค่าไม่ถูกต้อง: ควรเป็น ${stringifyPrimitive(issue.values[0])}`;
					return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "ไม่เกิน" : "น้อยกว่า";
					const sizing = getSizing(issue.origin);
					if (sizing) return `เกินกำหนด: ${issue.origin ?? "ค่า"} ควรมี${adj} ${issue.maximum.toString()} ${sizing.unit ?? "รายการ"}`;
					return `เกินกำหนด: ${issue.origin ?? "ค่า"} ควรมี${adj} ${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? "อย่างน้อย" : "มากกว่า";
					const sizing = getSizing(issue.origin);
					if (sizing) return `น้อยกว่ากำหนด: ${issue.origin} ควรมี${adj} ${issue.minimum.toString()} ${sizing.unit}`;
					return `น้อยกว่ากำหนด: ${issue.origin} ควรมี${adj} ${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_issue.suffix}"`;
					if (_issue.format === "includes") return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_issue.includes}" อยู่ในข้อความ`;
					if (_issue.format === "regex") return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_issue.pattern}`;
					return `รูปแบบไม่ถูกต้อง: ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${issue.divisor} ได้ลงตัว`;
				case "unrecognized_keys": return `พบคีย์ที่ไม่รู้จัก: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `คีย์ไม่ถูกต้องใน ${issue.origin}`;
				case "invalid_union": return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
				case "invalid_element": return `ข้อมูลไม่ถูกต้องใน ${issue.origin}`;
				default: return `ข้อมูลไม่ถูกต้อง`;
			}
		};
	}, "error");
	function th_default() {
		return { localeError: error$6() };
	}
	__name(th_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/tr.js
	var parsedType = (data) => {
		const t = typeof data;
		switch (t) {
			case "number": return Number.isNaN(data) ? "NaN" : "number";
			case "object":
				if (Array.isArray(data)) return "array";
				if (data === null) return "null";
				if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
		}
		return t;
	};
	var error$5 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "karakter",
				verb: "olmalı"
			},
			file: {
				unit: "bayt",
				verb: "olmalı"
			},
			array: {
				unit: "öğe",
				verb: "olmalı"
			},
			set: {
				unit: "öğe",
				verb: "olmalı"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const Nouns = {
			regex: "girdi",
			email: "e-posta adresi",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO tarih ve saat",
			date: "ISO tarih",
			time: "ISO saat",
			duration: "ISO süre",
			ipv4: "IPv4 adresi",
			ipv6: "IPv6 adresi",
			cidrv4: "IPv4 aralığı",
			cidrv6: "IPv6 aralığı",
			base64: "base64 ile şifrelenmiş metin",
			base64url: "base64url ile şifrelenmiş metin",
			json_string: "JSON dizesi",
			e164: "E.164 sayısı",
			jwt: "JWT",
			template_literal: "Şablon dizesi"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Geçersiz değer: beklenen ${issue.expected}, alınan ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Geçersiz değer: beklenen ${stringifyPrimitive(issue.values[0])}`;
					return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "öğe"}`;
					return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Geçersiz metin: "${_issue.prefix}" ile başlamalı`;
					if (_issue.format === "ends_with") return `Geçersiz metin: "${_issue.suffix}" ile bitmeli`;
					if (_issue.format === "includes") return `Geçersiz metin: "${_issue.includes}" içermeli`;
					if (_issue.format === "regex") return `Geçersiz metin: ${_issue.pattern} desenine uymalı`;
					return `Geçersiz ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Geçersiz sayı: ${issue.divisor} ile tam bölünebilmeli`;
				case "unrecognized_keys": return `Tanınmayan anahtar${issue.keys.length > 1 ? "lar" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `${issue.origin} içinde geçersiz anahtar`;
				case "invalid_union": return "Geçersiz değer";
				case "invalid_element": return `${issue.origin} içinde geçersiz değer`;
				default: return `Geçersiz değer`;
			}
		};
	}, "error");
	function tr_default() {
		return { localeError: error$5() };
	}
	__name(tr_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ua.js
	var error$4 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "символів",
				verb: "матиме"
			},
			file: {
				unit: "байтів",
				verb: "матиме"
			},
			array: {
				unit: "елементів",
				verb: "матиме"
			},
			set: {
				unit: "елементів",
				verb: "матиме"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "число";
				case "object":
					if (Array.isArray(data)) return "масив";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "вхідні дані",
			email: "адреса електронної пошти",
			url: "URL",
			emoji: "емодзі",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "дата та час ISO",
			date: "дата ISO",
			time: "час ISO",
			duration: "тривалість ISO",
			ipv4: "адреса IPv4",
			ipv6: "адреса IPv6",
			cidrv4: "діапазон IPv4",
			cidrv6: "діапазон IPv6",
			base64: "рядок у кодуванні base64",
			base64url: "рядок у кодуванні base64url",
			json_string: "рядок JSON",
			e164: "номер E.164",
			jwt: "JWT",
			template_literal: "вхідні дані"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Неправильні вхідні дані: очікується ${stringifyPrimitive(issue.values[0])}`;
					return `Неправильна опція: очікується одне з ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Занадто велике: очікується, що ${issue.origin ?? "значення"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "елементів"}`;
					return `Занадто велике: очікується, що ${issue.origin ?? "значення"} буде ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Занадто мале: очікується, що ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Занадто мале: очікується, що ${issue.origin} буде ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Неправильний рядок: повинен починатися з "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Неправильний рядок: повинен закінчуватися на "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Неправильний рядок: повинен містити "${_issue.includes}"`;
					if (_issue.format === "regex") return `Неправильний рядок: повинен відповідати шаблону ${_issue.pattern}`;
					return `Неправильний ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `Неправильне число: повинно бути кратним ${issue.divisor}`;
				case "unrecognized_keys": return `Нерозпізнаний ключ${issue.keys.length > 1 ? "і" : ""}: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Неправильний ключ у ${issue.origin}`;
				case "invalid_union": return "Неправильні вхідні дані";
				case "invalid_element": return `Неправильне значення у ${issue.origin}`;
				default: return `Неправильні вхідні дані`;
			}
		};
	}, "error");
	function ua_default() {
		return { localeError: error$4() };
	}
	__name(ua_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/ur.js
	var error$3 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "حروف",
				verb: "ہونا"
			},
			file: {
				unit: "بائٹس",
				verb: "ہونا"
			},
			array: {
				unit: "آئٹمز",
				verb: "ہونا"
			},
			set: {
				unit: "آئٹمز",
				verb: "ہونا"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "نمبر";
				case "object":
					if (Array.isArray(data)) return "آرے";
					if (data === null) return "نل";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "ان پٹ",
			email: "ای میل ایڈریس",
			url: "یو آر ایل",
			emoji: "ایموجی",
			uuid: "یو یو آئی ڈی",
			uuidv4: "یو یو آئی ڈی وی 4",
			uuidv6: "یو یو آئی ڈی وی 6",
			nanoid: "نینو آئی ڈی",
			guid: "جی یو آئی ڈی",
			cuid: "سی یو آئی ڈی",
			cuid2: "سی یو آئی ڈی 2",
			ulid: "یو ایل آئی ڈی",
			xid: "ایکس آئی ڈی",
			ksuid: "کے ایس یو آئی ڈی",
			datetime: "آئی ایس او ڈیٹ ٹائم",
			date: "آئی ایس او تاریخ",
			time: "آئی ایس او وقت",
			duration: "آئی ایس او مدت",
			ipv4: "آئی پی وی 4 ایڈریس",
			ipv6: "آئی پی وی 6 ایڈریس",
			cidrv4: "آئی پی وی 4 رینج",
			cidrv6: "آئی پی وی 6 رینج",
			base64: "بیس 64 ان کوڈڈ سٹرنگ",
			base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
			json_string: "جے ایس او این سٹرنگ",
			e164: "ای 164 نمبر",
			jwt: "جے ڈبلیو ٹی",
			template_literal: "ان پٹ"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `غلط ان پٹ: ${issue.expected} متوقع تھا، ${parsedType(issue.input)} موصول ہوا`;
				case "invalid_value":
					if (issue.values.length === 1) return `غلط ان پٹ: ${stringifyPrimitive(issue.values[0])} متوقع تھا`;
					return `غلط آپشن: ${joinValues(issue.values, "|")} میں سے ایک متوقع تھا`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `بہت بڑا: ${issue.origin ?? "ویلیو"} کے ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عناصر"} ہونے متوقع تھے`;
					return `بہت بڑا: ${issue.origin ?? "ویلیو"} کا ${adj}${issue.maximum.toString()} ہونا متوقع تھا`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `بہت چھوٹا: ${issue.origin} کے ${adj}${issue.minimum.toString()} ${sizing.unit} ہونے متوقع تھے`;
					return `بہت چھوٹا: ${issue.origin} کا ${adj}${issue.minimum.toString()} ہونا متوقع تھا`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `غلط سٹرنگ: "${_issue.prefix}" سے شروع ہونا چاہیے`;
					if (_issue.format === "ends_with") return `غلط سٹرنگ: "${_issue.suffix}" پر ختم ہونا چاہیے`;
					if (_issue.format === "includes") return `غلط سٹرنگ: "${_issue.includes}" شامل ہونا چاہیے`;
					if (_issue.format === "regex") return `غلط سٹرنگ: پیٹرن ${_issue.pattern} سے میچ ہونا چاہیے`;
					return `غلط ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `غلط نمبر: ${issue.divisor} کا مضاعف ہونا چاہیے`;
				case "unrecognized_keys": return `غیر تسلیم شدہ کی${issue.keys.length > 1 ? "ز" : ""}: ${joinValues(issue.keys, "، ")}`;
				case "invalid_key": return `${issue.origin} میں غلط کی`;
				case "invalid_union": return "غلط ان پٹ";
				case "invalid_element": return `${issue.origin} میں غلط ویلیو`;
				default: return `غلط ان پٹ`;
			}
		};
	}, "error");
	function ur_default() {
		return { localeError: error$3() };
	}
	__name(ur_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/vi.js
	var error$2 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "ký tự",
				verb: "có"
			},
			file: {
				unit: "byte",
				verb: "có"
			},
			array: {
				unit: "phần tử",
				verb: "có"
			},
			set: {
				unit: "phần tử",
				verb: "có"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "số";
				case "object":
					if (Array.isArray(data)) return "mảng";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "đầu vào",
			email: "địa chỉ email",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ngày giờ ISO",
			date: "ngày ISO",
			time: "giờ ISO",
			duration: "khoảng thời gian ISO",
			ipv4: "địa chỉ IPv4",
			ipv6: "địa chỉ IPv6",
			cidrv4: "dải IPv4",
			cidrv6: "dải IPv6",
			base64: "chuỗi mã hóa base64",
			base64url: "chuỗi mã hóa base64url",
			json_string: "chuỗi JSON",
			e164: "số E.164",
			jwt: "JWT",
			template_literal: "đầu vào"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `Đầu vào không hợp lệ: mong đợi ${issue.expected}, nhận được ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `Đầu vào không hợp lệ: mong đợi ${stringifyPrimitive(issue.values[0])}`;
					return `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Quá lớn: mong đợi ${issue.origin ?? "giá trị"} ${sizing.verb} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "phần tử"}`;
					return `Quá lớn: mong đợi ${issue.origin ?? "giá trị"} ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `Quá nhỏ: mong đợi ${issue.origin} ${sizing.verb} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `Quá nhỏ: mong đợi ${issue.origin} ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `Chuỗi không hợp lệ: phải bắt đầu bằng "${_issue.prefix}"`;
					if (_issue.format === "ends_with") return `Chuỗi không hợp lệ: phải kết thúc bằng "${_issue.suffix}"`;
					if (_issue.format === "includes") return `Chuỗi không hợp lệ: phải bao gồm "${_issue.includes}"`;
					if (_issue.format === "regex") return `Chuỗi không hợp lệ: phải khớp với mẫu ${_issue.pattern}`;
					return `${Nouns[_issue.format] ?? issue.format} không hợp lệ`;
				}
				case "not_multiple_of": return `Số không hợp lệ: phải là bội số của ${issue.divisor}`;
				case "unrecognized_keys": return `Khóa không được nhận dạng: ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `Khóa không hợp lệ trong ${issue.origin}`;
				case "invalid_union": return "Đầu vào không hợp lệ";
				case "invalid_element": return `Giá trị không hợp lệ trong ${issue.origin}`;
				default: return `Đầu vào không hợp lệ`;
			}
		};
	}, "error");
	function vi_default() {
		return { localeError: error$2() };
	}
	__name(vi_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/zh-CN.js
	var error$1 = /* @__PURE__ */ __name(() => {
		const Sizable = {
			string: {
				unit: "字符",
				verb: "包含"
			},
			file: {
				unit: "字节",
				verb: "包含"
			},
			array: {
				unit: "项",
				verb: "包含"
			},
			set: {
				unit: "项",
				verb: "包含"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "非数字(NaN)" : "数字";
				case "object":
					if (Array.isArray(data)) return "数组";
					if (data === null) return "空值(null)";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "输入",
			email: "电子邮件",
			url: "URL",
			emoji: "表情符号",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO日期时间",
			date: "ISO日期",
			time: "ISO时间",
			duration: "ISO时长",
			ipv4: "IPv4地址",
			ipv6: "IPv6地址",
			cidrv4: "IPv4网段",
			cidrv6: "IPv6网段",
			base64: "base64编码字符串",
			base64url: "base64url编码字符串",
			json_string: "JSON字符串",
			e164: "E.164号码",
			jwt: "JWT",
			template_literal: "输入"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `无效输入：期望 ${issue.expected}，实际接收 ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `无效输入：期望 ${stringifyPrimitive(issue.values[0])}`;
					return `无效选项：期望以下之一 ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `数值过大：期望 ${issue.origin ?? "值"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "个元素"}`;
					return `数值过大：期望 ${issue.origin ?? "值"} ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `数值过小：期望 ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `数值过小：期望 ${issue.origin} ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `无效字符串：必须以 "${_issue.prefix}" 开头`;
					if (_issue.format === "ends_with") return `无效字符串：必须以 "${_issue.suffix}" 结尾`;
					if (_issue.format === "includes") return `无效字符串：必须包含 "${_issue.includes}"`;
					if (_issue.format === "regex") return `无效字符串：必须满足正则表达式 ${_issue.pattern}`;
					return `无效${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `无效数字：必须是 ${issue.divisor} 的倍数`;
				case "unrecognized_keys": return `出现未知的键(key): ${joinValues(issue.keys, ", ")}`;
				case "invalid_key": return `${issue.origin} 中的键(key)无效`;
				case "invalid_union": return "无效输入";
				case "invalid_element": return `${issue.origin} 中包含无效值(value)`;
				default: return `无效输入`;
			}
		};
	}, "error");
	function zh_CN_default() {
		return { localeError: error$1() };
	}
	__name(zh_CN_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/zh-TW.js
	var error = () => {
		const Sizable = {
			string: {
				unit: "字元",
				verb: "擁有"
			},
			file: {
				unit: "位元組",
				verb: "擁有"
			},
			array: {
				unit: "項目",
				verb: "擁有"
			},
			set: {
				unit: "項目",
				verb: "擁有"
			}
		};
		function getSizing(origin) {
			return Sizable[origin] ?? null;
		}
		const parsedType = (data) => {
			const t = typeof data;
			switch (t) {
				case "number": return Number.isNaN(data) ? "NaN" : "number";
				case "object":
					if (Array.isArray(data)) return "array";
					if (data === null) return "null";
					if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) return data.constructor.name;
			}
			return t;
		};
		const Nouns = {
			regex: "輸入",
			email: "郵件地址",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO 日期時間",
			date: "ISO 日期",
			time: "ISO 時間",
			duration: "ISO 期間",
			ipv4: "IPv4 位址",
			ipv6: "IPv6 位址",
			cidrv4: "IPv4 範圍",
			cidrv6: "IPv6 範圍",
			base64: "base64 編碼字串",
			base64url: "base64url 編碼字串",
			json_string: "JSON 字串",
			e164: "E.164 數值",
			jwt: "JWT",
			template_literal: "輸入"
		};
		return (issue) => {
			switch (issue.code) {
				case "invalid_type": return `無效的輸入值：預期為 ${issue.expected}，但收到 ${parsedType(issue.input)}`;
				case "invalid_value":
					if (issue.values.length === 1) return `無效的輸入值：預期為 ${stringifyPrimitive(issue.values[0])}`;
					return `無效的選項：預期為以下其中之一 ${joinValues(issue.values, "|")}`;
				case "too_big": {
					const adj = issue.inclusive ? "<=" : "<";
					const sizing = getSizing(issue.origin);
					if (sizing) return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()} ${sizing.unit ?? "個元素"}`;
					return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()}`;
				}
				case "too_small": {
					const adj = issue.inclusive ? ">=" : ">";
					const sizing = getSizing(issue.origin);
					if (sizing) return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()} ${sizing.unit}`;
					return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()}`;
				}
				case "invalid_format": {
					const _issue = issue;
					if (_issue.format === "starts_with") return `無效的字串：必須以 "${_issue.prefix}" 開頭`;
					if (_issue.format === "ends_with") return `無效的字串：必須以 "${_issue.suffix}" 結尾`;
					if (_issue.format === "includes") return `無效的字串：必須包含 "${_issue.includes}"`;
					if (_issue.format === "regex") return `無效的字串：必須符合格式 ${_issue.pattern}`;
					return `無效的 ${Nouns[_issue.format] ?? issue.format}`;
				}
				case "not_multiple_of": return `無效的數字：必須為 ${issue.divisor} 的倍數`;
				case "unrecognized_keys": return `無法識別的鍵值${issue.keys.length > 1 ? "們" : ""}：${joinValues(issue.keys, "、")}`;
				case "invalid_key": return `${issue.origin} 中有無效的鍵值`;
				case "invalid_union": return "無效的輸入值";
				case "invalid_element": return `${issue.origin} 中有無效的值`;
				default: return `無效的輸入值`;
			}
		};
	};
	function zh_TW_default() {
		return { localeError: error() };
	}
	__name(zh_TW_default, "default");

//#endregion
//#region node_modules/zod/v4/locales/index.js
	var locales_exports = /* @__PURE__ */ __exportAll({
		ar: () => ar_default,
		az: () => az_default,
		be: () => be_default,
		ca: () => ca_default,
		cs: () => cs_default,
		de: () => de_default,
		en: () => en_default,
		eo: () => eo_default,
		es: () => es_default,
		fa: () => fa_default,
		fi: () => fi_default,
		fr: () => fr_default,
		frCA: () => fr_CA_default,
		he: () => he_default,
		hu: () => hu_default,
		id: () => id_default,
		it: () => it_default,
		ja: () => ja_default,
		kh: () => kh_default,
		ko: () => ko_default,
		mk: () => mk_default,
		ms: () => ms_default,
		nl: () => nl_default,
		no: () => no_default,
		ota: () => ota_default,
		pl: () => pl_default,
		ps: () => ps_default,
		pt: () => pt_default,
		ru: () => ru_default,
		sl: () => sl_default,
		sv: () => sv_default,
		ta: () => ta_default,
		th: () => th_default,
		tr: () => tr_default,
		ua: () => ua_default,
		ur: () => ur_default,
		vi: () => vi_default,
		zhCN: () => zh_CN_default,
		zhTW: () => zh_TW_default
	});

//#endregion
//#region node_modules/zod/v4/core/registries.js
	var $output = Symbol("ZodOutput");
	var $input = Symbol("ZodInput");
	var $ZodRegistry = class {
		constructor() {
			this._map = /* @__PURE__ */ new Map();
			this._idmap = /* @__PURE__ */ new Map();
		}
		add(schema, ..._meta) {
			const meta = _meta[0];
			this._map.set(schema, meta);
			if (meta && typeof meta === "object" && "id" in meta) {
				if (this._idmap.has(meta.id)) throw new Error(`ID ${meta.id} already exists in the registry`);
				this._idmap.set(meta.id, schema);
			}
			return this;
		}
		clear() {
			this._map = /* @__PURE__ */ new Map();
			this._idmap = /* @__PURE__ */ new Map();
			return this;
		}
		remove(schema) {
			const meta = this._map.get(schema);
			if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
			this._map.delete(schema);
			return this;
		}
		get(schema) {
			const p = schema._zod.parent;
			if (p) {
				const pm = { ...this.get(p) ?? {} };
				delete pm.id;
				return {
					...pm,
					...this._map.get(schema)
				};
			}
			return this._map.get(schema);
		}
		has(schema) {
			return this._map.has(schema);
		}
	};
	function registry() {
		return new $ZodRegistry();
	}
	var globalRegistry = /*@__PURE__*/ registry();

//#endregion
//#region node_modules/zod/v4/core/api.js
	function _string(Class, params) {
		return new Class({
			type: "string",
			...normalizeParams(params)
		});
	}
	function _coercedString(Class, params) {
		return new Class({
			type: "string",
			coerce: true,
			...normalizeParams(params)
		});
	}
	function _email(Class, params) {
		return new Class({
			type: "string",
			format: "email",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _guid(Class, params) {
		return new Class({
			type: "string",
			format: "guid",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _uuid(Class, params) {
		return new Class({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _uuidv4(Class, params) {
		return new Class({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: false,
			version: "v4",
			...normalizeParams(params)
		});
	}
	function _uuidv6(Class, params) {
		return new Class({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: false,
			version: "v6",
			...normalizeParams(params)
		});
	}
	function _uuidv7(Class, params) {
		return new Class({
			type: "string",
			format: "uuid",
			check: "string_format",
			abort: false,
			version: "v7",
			...normalizeParams(params)
		});
	}
	function _url(Class, params) {
		return new Class({
			type: "string",
			format: "url",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _emoji(Class, params) {
		return new Class({
			type: "string",
			format: "emoji",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _nanoid(Class, params) {
		return new Class({
			type: "string",
			format: "nanoid",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _cuid(Class, params) {
		return new Class({
			type: "string",
			format: "cuid",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _cuid2(Class, params) {
		return new Class({
			type: "string",
			format: "cuid2",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _ulid(Class, params) {
		return new Class({
			type: "string",
			format: "ulid",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _xid(Class, params) {
		return new Class({
			type: "string",
			format: "xid",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _ksuid(Class, params) {
		return new Class({
			type: "string",
			format: "ksuid",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _ipv4(Class, params) {
		return new Class({
			type: "string",
			format: "ipv4",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _ipv6(Class, params) {
		return new Class({
			type: "string",
			format: "ipv6",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _cidrv4(Class, params) {
		return new Class({
			type: "string",
			format: "cidrv4",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _cidrv6(Class, params) {
		return new Class({
			type: "string",
			format: "cidrv6",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _base64(Class, params) {
		return new Class({
			type: "string",
			format: "base64",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _base64url(Class, params) {
		return new Class({
			type: "string",
			format: "base64url",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _e164(Class, params) {
		return new Class({
			type: "string",
			format: "e164",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	function _jwt(Class, params) {
		return new Class({
			type: "string",
			format: "jwt",
			check: "string_format",
			abort: false,
			...normalizeParams(params)
		});
	}
	var TimePrecision = {
		Any: null,
		Minute: -1,
		Second: 0,
		Millisecond: 3,
		Microsecond: 6
	};
	function _isoDateTime(Class, params) {
		return new Class({
			type: "string",
			format: "datetime",
			check: "string_format",
			offset: false,
			local: false,
			precision: null,
			...normalizeParams(params)
		});
	}
	function _isoDate(Class, params) {
		return new Class({
			type: "string",
			format: "date",
			check: "string_format",
			...normalizeParams(params)
		});
	}
	function _isoTime(Class, params) {
		return new Class({
			type: "string",
			format: "time",
			check: "string_format",
			precision: null,
			...normalizeParams(params)
		});
	}
	function _isoDuration(Class, params) {
		return new Class({
			type: "string",
			format: "duration",
			check: "string_format",
			...normalizeParams(params)
		});
	}
	function _number(Class, params) {
		return new Class({
			type: "number",
			checks: [],
			...normalizeParams(params)
		});
	}
	function _coercedNumber(Class, params) {
		return new Class({
			type: "number",
			coerce: true,
			checks: [],
			...normalizeParams(params)
		});
	}
	function _int(Class, params) {
		return new Class({
			type: "number",
			check: "number_format",
			abort: false,
			format: "safeint",
			...normalizeParams(params)
		});
	}
	function _float32(Class, params) {
		return new Class({
			type: "number",
			check: "number_format",
			abort: false,
			format: "float32",
			...normalizeParams(params)
		});
	}
	function _float64(Class, params) {
		return new Class({
			type: "number",
			check: "number_format",
			abort: false,
			format: "float64",
			...normalizeParams(params)
		});
	}
	function _int32(Class, params) {
		return new Class({
			type: "number",
			check: "number_format",
			abort: false,
			format: "int32",
			...normalizeParams(params)
		});
	}
	function _uint32(Class, params) {
		return new Class({
			type: "number",
			check: "number_format",
			abort: false,
			format: "uint32",
			...normalizeParams(params)
		});
	}
	function _boolean(Class, params) {
		return new Class({
			type: "boolean",
			...normalizeParams(params)
		});
	}
	function _coercedBoolean(Class, params) {
		return new Class({
			type: "boolean",
			coerce: true,
			...normalizeParams(params)
		});
	}
	function _bigint(Class, params) {
		return new Class({
			type: "bigint",
			...normalizeParams(params)
		});
	}
	function _coercedBigint(Class, params) {
		return new Class({
			type: "bigint",
			coerce: true,
			...normalizeParams(params)
		});
	}
	function _int64(Class, params) {
		return new Class({
			type: "bigint",
			check: "bigint_format",
			abort: false,
			format: "int64",
			...normalizeParams(params)
		});
	}
	function _uint64(Class, params) {
		return new Class({
			type: "bigint",
			check: "bigint_format",
			abort: false,
			format: "uint64",
			...normalizeParams(params)
		});
	}
	function _symbol(Class, params) {
		return new Class({
			type: "symbol",
			...normalizeParams(params)
		});
	}
	function _undefined$1(Class, params) {
		return new Class({
			type: "undefined",
			...normalizeParams(params)
		});
	}
	__name(_undefined$1, "_undefined");
	function _null$1(Class, params) {
		return new Class({
			type: "null",
			...normalizeParams(params)
		});
	}
	__name(_null$1, "_null");
	function _any(Class) {
		return new Class({ type: "any" });
	}
	function _unknown(Class) {
		return new Class({ type: "unknown" });
	}
	function _never(Class, params) {
		return new Class({
			type: "never",
			...normalizeParams(params)
		});
	}
	function _void$1(Class, params) {
		return new Class({
			type: "void",
			...normalizeParams(params)
		});
	}
	__name(_void$1, "_void");
	function _date(Class, params) {
		return new Class({
			type: "date",
			...normalizeParams(params)
		});
	}
	function _coercedDate(Class, params) {
		return new Class({
			type: "date",
			coerce: true,
			...normalizeParams(params)
		});
	}
	function _nan(Class, params) {
		return new Class({
			type: "nan",
			...normalizeParams(params)
		});
	}
	function _lt(value, params) {
		return new $ZodCheckLessThan({
			check: "less_than",
			...normalizeParams(params),
			value,
			inclusive: false
		});
	}
	function _lte(value, params) {
		return new $ZodCheckLessThan({
			check: "less_than",
			...normalizeParams(params),
			value,
			inclusive: true
		});
	}
	function _gt(value, params) {
		return new $ZodCheckGreaterThan({
			check: "greater_than",
			...normalizeParams(params),
			value,
			inclusive: false
		});
	}
	function _gte(value, params) {
		return new $ZodCheckGreaterThan({
			check: "greater_than",
			...normalizeParams(params),
			value,
			inclusive: true
		});
	}
	function _positive(params) {
		return _gt(0, params);
	}
	function _negative(params) {
		return _lt(0, params);
	}
	function _nonpositive(params) {
		return _lte(0, params);
	}
	function _nonnegative(params) {
		return _gte(0, params);
	}
	function _multipleOf(value, params) {
		return new $ZodCheckMultipleOf({
			check: "multiple_of",
			...normalizeParams(params),
			value
		});
	}
	function _maxSize(maximum, params) {
		return new $ZodCheckMaxSize({
			check: "max_size",
			...normalizeParams(params),
			maximum
		});
	}
	function _minSize(minimum, params) {
		return new $ZodCheckMinSize({
			check: "min_size",
			...normalizeParams(params),
			minimum
		});
	}
	function _size(size, params) {
		return new $ZodCheckSizeEquals({
			check: "size_equals",
			...normalizeParams(params),
			size
		});
	}
	function _maxLength(maximum, params) {
		return new $ZodCheckMaxLength({
			check: "max_length",
			...normalizeParams(params),
			maximum
		});
	}
	function _minLength(minimum, params) {
		return new $ZodCheckMinLength({
			check: "min_length",
			...normalizeParams(params),
			minimum
		});
	}
	function _length(length, params) {
		return new $ZodCheckLengthEquals({
			check: "length_equals",
			...normalizeParams(params),
			length
		});
	}
	function _regex(pattern, params) {
		return new $ZodCheckRegex({
			check: "string_format",
			format: "regex",
			...normalizeParams(params),
			pattern
		});
	}
	function _lowercase(params) {
		return new $ZodCheckLowerCase({
			check: "string_format",
			format: "lowercase",
			...normalizeParams(params)
		});
	}
	function _uppercase(params) {
		return new $ZodCheckUpperCase({
			check: "string_format",
			format: "uppercase",
			...normalizeParams(params)
		});
	}
	function _includes(includes, params) {
		return new $ZodCheckIncludes({
			check: "string_format",
			format: "includes",
			...normalizeParams(params),
			includes
		});
	}
	function _startsWith(prefix, params) {
		return new $ZodCheckStartsWith({
			check: "string_format",
			format: "starts_with",
			...normalizeParams(params),
			prefix
		});
	}
	function _endsWith(suffix, params) {
		return new $ZodCheckEndsWith({
			check: "string_format",
			format: "ends_with",
			...normalizeParams(params),
			suffix
		});
	}
	function _property(property, schema, params) {
		return new $ZodCheckProperty({
			check: "property",
			property,
			schema,
			...normalizeParams(params)
		});
	}
	function _mime(types, params) {
		return new $ZodCheckMimeType({
			check: "mime_type",
			mime: types,
			...normalizeParams(params)
		});
	}
	function _overwrite(tx) {
		return new $ZodCheckOverwrite({
			check: "overwrite",
			tx
		});
	}
	function _normalize(form) {
		return _overwrite((input) => input.normalize(form));
	}
	function _trim() {
		return _overwrite((input) => input.trim());
	}
	function _toLowerCase() {
		return _overwrite((input) => input.toLowerCase());
	}
	function _toUpperCase() {
		return _overwrite((input) => input.toUpperCase());
	}
	function _array(Class, element, params) {
		return new Class({
			type: "array",
			element,
			...normalizeParams(params)
		});
	}
	function _union(Class, options, params) {
		return new Class({
			type: "union",
			options,
			...normalizeParams(params)
		});
	}
	function _discriminatedUnion(Class, discriminator, options, params) {
		return new Class({
			type: "union",
			options,
			discriminator,
			...normalizeParams(params)
		});
	}
	function _intersection(Class, left, right) {
		return new Class({
			type: "intersection",
			left,
			right
		});
	}
	function _tuple(Class, items, _paramsOrRest, _params) {
		const hasRest = _paramsOrRest instanceof $ZodType;
		const params = hasRest ? _params : _paramsOrRest;
		return new Class({
			type: "tuple",
			items,
			rest: hasRest ? _paramsOrRest : null,
			...normalizeParams(params)
		});
	}
	function _record(Class, keyType, valueType, params) {
		return new Class({
			type: "record",
			keyType,
			valueType,
			...normalizeParams(params)
		});
	}
	function _map(Class, keyType, valueType, params) {
		return new Class({
			type: "map",
			keyType,
			valueType,
			...normalizeParams(params)
		});
	}
	function _set(Class, valueType, params) {
		return new Class({
			type: "set",
			valueType,
			...normalizeParams(params)
		});
	}
	function _enum$1(Class, values, params) {
		return new Class({
			type: "enum",
			entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
			...normalizeParams(params)
		});
	}
	__name(_enum$1, "_enum");
	/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
	*
	* ```ts
	* enum Colors { red, green, blue }
	* z.enum(Colors);
	* ```
	*/
	function _nativeEnum(Class, entries, params) {
		return new Class({
			type: "enum",
			entries,
			...normalizeParams(params)
		});
	}
	function _literal(Class, value, params) {
		return new Class({
			type: "literal",
			values: Array.isArray(value) ? value : [value],
			...normalizeParams(params)
		});
	}
	function _file(Class, params) {
		return new Class({
			type: "file",
			...normalizeParams(params)
		});
	}
	function _transform(Class, fn) {
		return new Class({
			type: "transform",
			transform: fn
		});
	}
	function _optional(Class, innerType) {
		return new Class({
			type: "optional",
			innerType
		});
	}
	function _nullable(Class, innerType) {
		return new Class({
			type: "nullable",
			innerType
		});
	}
	function _default$1(Class, innerType, defaultValue) {
		return new Class({
			type: "default",
			innerType,
			get defaultValue() {
				return typeof defaultValue === "function" ? defaultValue() : defaultValue;
			}
		});
	}
	__name(_default$1, "_default");
	function _nonoptional(Class, innerType, params) {
		return new Class({
			type: "nonoptional",
			innerType,
			...normalizeParams(params)
		});
	}
	function _success(Class, innerType) {
		return new Class({
			type: "success",
			innerType
		});
	}
	function _catch$1(Class, innerType, catchValue) {
		return new Class({
			type: "catch",
			innerType,
			catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
		});
	}
	__name(_catch$1, "_catch");
	function _pipe(Class, in_, out) {
		return new Class({
			type: "pipe",
			in: in_,
			out
		});
	}
	function _readonly(Class, innerType) {
		return new Class({
			type: "readonly",
			innerType
		});
	}
	function _templateLiteral(Class, parts, params) {
		return new Class({
			type: "template_literal",
			parts,
			...normalizeParams(params)
		});
	}
	function _lazy(Class, getter) {
		return new Class({
			type: "lazy",
			getter
		});
	}
	function _promise(Class, innerType) {
		return new Class({
			type: "promise",
			innerType
		});
	}
	function _custom(Class, fn, _params) {
		const norm = normalizeParams(_params);
		norm.abort ?? (norm.abort = true);
		return new Class({
			type: "custom",
			check: "custom",
			fn,
			...norm
		});
	}
	function _refine(Class, fn, _params) {
		return new Class({
			type: "custom",
			check: "custom",
			fn,
			...normalizeParams(_params)
		});
	}
	function _stringbool(Classes, _params) {
		const params = normalizeParams(_params);
		let truthyArray = params.truthy ?? [
			"true",
			"1",
			"yes",
			"on",
			"y",
			"enabled"
		];
		let falsyArray = params.falsy ?? [
			"false",
			"0",
			"no",
			"off",
			"n",
			"disabled"
		];
		if (params.case !== "sensitive") {
			truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
			falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
		}
		const truthySet = new Set(truthyArray);
		const falsySet = new Set(falsyArray);
		const _Pipe = Classes.Pipe ?? $ZodPipe;
		const _Boolean = Classes.Boolean ?? $ZodBoolean;
		const _String = Classes.String ?? $ZodString;
		const tx = new (Classes.Transform ?? $ZodTransform)({
			type: "transform",
			transform: (input, payload) => {
				let data = input;
				if (params.case !== "sensitive") data = data.toLowerCase();
				if (truthySet.has(data)) return true;
				else if (falsySet.has(data)) return false;
				else {
					payload.issues.push({
						code: "invalid_value",
						expected: "stringbool",
						values: [...truthySet, ...falsySet],
						input: payload.value,
						inst: tx
					});
					return {};
				}
			},
			error: params.error
		});
		return new _Pipe({
			type: "pipe",
			in: new _Pipe({
				type: "pipe",
				in: new _String({
					type: "string",
					error: params.error
				}),
				out: tx,
				error: params.error
			}),
			out: new _Boolean({
				type: "boolean",
				error: params.error
			}),
			error: params.error
		});
	}
	function _stringFormat(Class, format, fnOrRegex, _params = {}) {
		const params = normalizeParams(_params);
		const def = {
			...normalizeParams(_params),
			check: "string_format",
			type: "string",
			format,
			fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
			...params
		};
		if (fnOrRegex instanceof RegExp) def.pattern = fnOrRegex;
		return new Class(def);
	}

//#endregion
//#region node_modules/zod/v4/core/function.js
	var $ZodFunction = class {
		constructor(def) {
			this._def = def;
			this.def = def;
		}
		implement(func) {
			if (typeof func !== "function") throw new Error("implement() must be called with a function");
			const impl = ((...args) => {
				const parsedArgs = this._def.input ? parse$1(this._def.input, args, void 0, { callee: impl }) : args;
				if (!Array.isArray(parsedArgs)) throw new Error("Invalid arguments schema: not an array or tuple schema.");
				const output = func(...parsedArgs);
				return this._def.output ? parse$1(this._def.output, output, void 0, { callee: impl }) : output;
			});
			return impl;
		}
		implementAsync(func) {
			if (typeof func !== "function") throw new Error("implement() must be called with a function");
			const impl = (async (...args) => {
				const parsedArgs = this._def.input ? await parseAsync$1(this._def.input, args, void 0, { callee: impl }) : args;
				if (!Array.isArray(parsedArgs)) throw new Error("Invalid arguments schema: not an array or tuple schema.");
				const output = await func(...parsedArgs);
				return this._def.output ? parseAsync$1(this._def.output, output, void 0, { callee: impl }) : output;
			});
			return impl;
		}
		input(...args) {
			const F = this.constructor;
			if (Array.isArray(args[0])) return new F({
				type: "function",
				input: new $ZodTuple({
					type: "tuple",
					items: args[0],
					rest: args[1]
				}),
				output: this._def.output
			});
			return new F({
				type: "function",
				input: args[0],
				output: this._def.output
			});
		}
		output(output) {
			const F = this.constructor;
			return new F({
				type: "function",
				input: this._def.input,
				output
			});
		}
	};
	function _function(params) {
		return new $ZodFunction({
			type: "function",
			input: Array.isArray(params?.input) ? _tuple($ZodTuple, params?.input) : params?.input ?? _array($ZodArray, _unknown($ZodUnknown)),
			output: params?.output ?? _unknown($ZodUnknown)
		});
	}

//#endregion
//#region node_modules/zod/v4/core/to-json-schema.js
	var JSONSchemaGenerator = class {
		constructor(params) {
			this.counter = 0;
			this.metadataRegistry = params?.metadata ?? globalRegistry;
			this.target = params?.target ?? "draft-2020-12";
			this.unrepresentable = params?.unrepresentable ?? "throw";
			this.override = params?.override ?? (() => {});
			this.io = params?.io ?? "output";
			this.seen = /* @__PURE__ */ new Map();
		}
		process(schema, _params = {
			path: [],
			schemaPath: []
		}) {
			var _a;
			const def = schema._zod.def;
			const formatMap = {
				guid: "uuid",
				url: "uri",
				datetime: "date-time",
				json_string: "json-string",
				regex: ""
			};
			const seen = this.seen.get(schema);
			if (seen) {
				seen.count++;
				if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
				return seen.schema;
			}
			const result = {
				schema: {},
				count: 1,
				cycle: void 0,
				path: _params.path
			};
			this.seen.set(schema, result);
			const overrideSchema = schema._zod.toJSONSchema?.();
			if (overrideSchema) result.schema = overrideSchema;
			else {
				const params = {
					..._params,
					schemaPath: [..._params.schemaPath, schema],
					path: _params.path
				};
				const parent = schema._zod.parent;
				if (parent) {
					result.ref = parent;
					this.process(parent, params);
					this.seen.get(parent).isParent = true;
				} else {
					const _json = result.schema;
					switch (def.type) {
						case "string": {
							const json = _json;
							json.type = "string";
							const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
							if (typeof minimum === "number") json.minLength = minimum;
							if (typeof maximum === "number") json.maxLength = maximum;
							if (format) {
								json.format = formatMap[format] ?? format;
								if (json.format === "") delete json.format;
							}
							if (contentEncoding) json.contentEncoding = contentEncoding;
							if (patterns && patterns.size > 0) {
								const regexes = [...patterns];
								if (regexes.length === 1) json.pattern = regexes[0].source;
								else if (regexes.length > 1) result.schema.allOf = [...regexes.map((regex) => ({
									...this.target === "draft-7" ? { type: "string" } : {},
									pattern: regex.source
								}))];
							}
							break;
						}
						case "number": {
							const json = _json;
							const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
							if (typeof format === "string" && format.includes("int")) json.type = "integer";
							else json.type = "number";
							if (typeof exclusiveMinimum === "number") json.exclusiveMinimum = exclusiveMinimum;
							if (typeof minimum === "number") {
								json.minimum = minimum;
								if (typeof exclusiveMinimum === "number") if (exclusiveMinimum >= minimum) delete json.minimum;
								else delete json.exclusiveMinimum;
							}
							if (typeof exclusiveMaximum === "number") json.exclusiveMaximum = exclusiveMaximum;
							if (typeof maximum === "number") {
								json.maximum = maximum;
								if (typeof exclusiveMaximum === "number") if (exclusiveMaximum <= maximum) delete json.maximum;
								else delete json.exclusiveMaximum;
							}
							if (typeof multipleOf === "number") json.multipleOf = multipleOf;
							break;
						}
						case "boolean": {
							const json = _json;
							json.type = "boolean";
							break;
						}
						case "bigint":
							if (this.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
							break;
						case "symbol":
							if (this.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
							break;
						case "null":
							_json.type = "null";
							break;
						case "any": break;
						case "unknown": break;
						case "undefined":
							if (this.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
							break;
						case "void":
							if (this.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
							break;
						case "never":
							_json.not = {};
							break;
						case "date":
							if (this.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
							break;
						case "array": {
							const json = _json;
							const { minimum, maximum } = schema._zod.bag;
							if (typeof minimum === "number") json.minItems = minimum;
							if (typeof maximum === "number") json.maxItems = maximum;
							json.type = "array";
							json.items = this.process(def.element, {
								...params,
								path: [...params.path, "items"]
							});
							break;
						}
						case "object": {
							const json = _json;
							json.type = "object";
							json.properties = {};
							const shape = def.shape;
							for (const key in shape) json.properties[key] = this.process(shape[key], {
								...params,
								path: [
									...params.path,
									"properties",
									key
								]
							});
							const allKeys = new Set(Object.keys(shape));
							const requiredKeys = new Set([...allKeys].filter((key) => {
								const v = def.shape[key]._zod;
								if (this.io === "input") return v.optin === void 0;
								else return v.optout === void 0;
							}));
							if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
							if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
							else if (!def.catchall) {
								if (this.io === "output") json.additionalProperties = false;
							} else if (def.catchall) json.additionalProperties = this.process(def.catchall, {
								...params,
								path: [...params.path, "additionalProperties"]
							});
							break;
						}
						case "union": {
							const json = _json;
							json.anyOf = def.options.map((x, i) => this.process(x, {
								...params,
								path: [
									...params.path,
									"anyOf",
									i
								]
							}));
							break;
						}
						case "intersection": {
							const json = _json;
							const a = this.process(def.left, {
								...params,
								path: [
									...params.path,
									"allOf",
									0
								]
							});
							const b = this.process(def.right, {
								...params,
								path: [
									...params.path,
									"allOf",
									1
								]
							});
							const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
							json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
							break;
						}
						case "tuple": {
							const json = _json;
							json.type = "array";
							const prefixItems = def.items.map((x, i) => this.process(x, {
								...params,
								path: [
									...params.path,
									"prefixItems",
									i
								]
							}));
							if (this.target === "draft-2020-12") json.prefixItems = prefixItems;
							else json.items = prefixItems;
							if (def.rest) {
								const rest = this.process(def.rest, {
									...params,
									path: [...params.path, "items"]
								});
								if (this.target === "draft-2020-12") json.items = rest;
								else json.additionalItems = rest;
							}
							if (def.rest) json.items = this.process(def.rest, {
								...params,
								path: [...params.path, "items"]
							});
							const { minimum, maximum } = schema._zod.bag;
							if (typeof minimum === "number") json.minItems = minimum;
							if (typeof maximum === "number") json.maxItems = maximum;
							break;
						}
						case "record": {
							const json = _json;
							json.type = "object";
							json.propertyNames = this.process(def.keyType, {
								...params,
								path: [...params.path, "propertyNames"]
							});
							json.additionalProperties = this.process(def.valueType, {
								...params,
								path: [...params.path, "additionalProperties"]
							});
							break;
						}
						case "map":
							if (this.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
							break;
						case "set":
							if (this.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
							break;
						case "enum": {
							const json = _json;
							const values = getEnumValues(def.entries);
							if (values.every((v) => typeof v === "number")) json.type = "number";
							if (values.every((v) => typeof v === "string")) json.type = "string";
							json.enum = values;
							break;
						}
						case "literal": {
							const json = _json;
							const vals = [];
							for (const val of def.values) if (val === void 0) {
								if (this.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
							} else if (typeof val === "bigint") if (this.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
							else vals.push(Number(val));
							else vals.push(val);
							if (vals.length === 0) {} else if (vals.length === 1) {
								const val = vals[0];
								json.type = val === null ? "null" : typeof val;
								json.const = val;
							} else {
								if (vals.every((v) => typeof v === "number")) json.type = "number";
								if (vals.every((v) => typeof v === "string")) json.type = "string";
								if (vals.every((v) => typeof v === "boolean")) json.type = "string";
								if (vals.every((v) => v === null)) json.type = "null";
								json.enum = vals;
							}
							break;
						}
						case "file": {
							const json = _json;
							const file = {
								type: "string",
								format: "binary",
								contentEncoding: "binary"
							};
							const { minimum, maximum, mime } = schema._zod.bag;
							if (minimum !== void 0) file.minLength = minimum;
							if (maximum !== void 0) file.maxLength = maximum;
							if (mime) if (mime.length === 1) {
								file.contentMediaType = mime[0];
								Object.assign(json, file);
							} else json.anyOf = mime.map((m) => {
								return {
									...file,
									contentMediaType: m
								};
							});
							else Object.assign(json, file);
							break;
						}
						case "transform":
							if (this.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
							break;
						case "nullable":
							_json.anyOf = [this.process(def.innerType, params), { type: "null" }];
							break;
						case "nonoptional":
							this.process(def.innerType, params);
							result.ref = def.innerType;
							break;
						case "success": {
							const json = _json;
							json.type = "boolean";
							break;
						}
						case "default":
							this.process(def.innerType, params);
							result.ref = def.innerType;
							_json.default = JSON.parse(JSON.stringify(def.defaultValue));
							break;
						case "prefault":
							this.process(def.innerType, params);
							result.ref = def.innerType;
							if (this.io === "input") _json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
							break;
						case "catch": {
							this.process(def.innerType, params);
							result.ref = def.innerType;
							let catchValue;
							try {
								catchValue = def.catchValue(void 0);
							} catch {
								throw new Error("Dynamic catch values are not supported in JSON Schema");
							}
							_json.default = catchValue;
							break;
						}
						case "nan":
							if (this.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
							break;
						case "template_literal": {
							const json = _json;
							const pattern = schema._zod.pattern;
							if (!pattern) throw new Error("Pattern not found in template literal");
							json.type = "string";
							json.pattern = pattern.source;
							break;
						}
						case "pipe": {
							const innerType = this.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
							this.process(innerType, params);
							result.ref = innerType;
							break;
						}
						case "readonly":
							this.process(def.innerType, params);
							result.ref = def.innerType;
							_json.readOnly = true;
							break;
						case "promise":
							this.process(def.innerType, params);
							result.ref = def.innerType;
							break;
						case "optional":
							this.process(def.innerType, params);
							result.ref = def.innerType;
							break;
						case "lazy": {
							const innerType = schema._zod.innerType;
							this.process(innerType, params);
							result.ref = innerType;
							break;
						}
						case "custom":
							if (this.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
							break;
						default:
					}
				}
			}
			const meta = this.metadataRegistry.get(schema);
			if (meta) Object.assign(result.schema, meta);
			if (this.io === "input" && isTransforming(schema)) {
				delete result.schema.examples;
				delete result.schema.default;
			}
			if (this.io === "input" && result.schema._prefault) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
			delete result.schema._prefault;
			return this.seen.get(schema).schema;
		}
		emit(schema, _params) {
			const params = {
				cycles: _params?.cycles ?? "ref",
				reused: _params?.reused ?? "inline",
				external: _params?.external ?? void 0
			};
			const root = this.seen.get(schema);
			if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
			const makeURI = (entry) => {
				const defsSegment = this.target === "draft-2020-12" ? "$defs" : "definitions";
				if (params.external) {
					const externalId = params.external.registry.get(entry[0])?.id;
					const uriGenerator = params.external.uri ?? ((id) => id);
					if (externalId) return { ref: uriGenerator(externalId) };
					const id = entry[1].defId ?? entry[1].schema.id ?? `schema${this.counter++}`;
					entry[1].defId = id;
					return {
						defId: id,
						ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
					};
				}
				if (entry[1] === root) return { ref: "#" };
				const defUriPrefix = `#/${defsSegment}/`;
				const defId = entry[1].schema.id ?? `__schema${this.counter++}`;
				return {
					defId,
					ref: defUriPrefix + defId
				};
			};
			const extractToDef = (entry) => {
				if (entry[1].schema.$ref) return;
				const seen = entry[1];
				const { ref, defId } = makeURI(entry);
				seen.def = { ...seen.schema };
				if (defId) seen.defId = defId;
				const schema = seen.schema;
				for (const key in schema) delete schema[key];
				schema.$ref = ref;
			};
			if (params.cycles === "throw") for (const entry of this.seen.entries()) {
				const seen = entry[1];
				if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
			}
			for (const entry of this.seen.entries()) {
				const seen = entry[1];
				if (schema === entry[0]) {
					extractToDef(entry);
					continue;
				}
				if (params.external) {
					const ext = params.external.registry.get(entry[0])?.id;
					if (schema !== entry[0] && ext) {
						extractToDef(entry);
						continue;
					}
				}
				if (this.metadataRegistry.get(entry[0])?.id) {
					extractToDef(entry);
					continue;
				}
				if (seen.cycle) {
					extractToDef(entry);
					continue;
				}
				if (seen.count > 1) {
					if (params.reused === "ref") {
						extractToDef(entry);
						continue;
					}
				}
			}
			const flattenRef = (zodSchema, params) => {
				const seen = this.seen.get(zodSchema);
				const schema = seen.def ?? seen.schema;
				const _cached = { ...schema };
				if (seen.ref === null) return;
				const ref = seen.ref;
				seen.ref = null;
				if (ref) {
					flattenRef(ref, params);
					const refSchema = this.seen.get(ref).schema;
					if (refSchema.$ref && params.target === "draft-7") {
						schema.allOf = schema.allOf ?? [];
						schema.allOf.push(refSchema);
					} else {
						Object.assign(schema, refSchema);
						Object.assign(schema, _cached);
					}
				}
				if (!seen.isParent) this.override({
					zodSchema,
					jsonSchema: schema,
					path: seen.path ?? []
				});
			};
			for (const entry of [...this.seen.entries()].reverse()) flattenRef(entry[0], { target: this.target });
			const result = {};
			if (this.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
			else if (this.target === "draft-7") result.$schema = "http://json-schema.org/draft-07/schema#";
			else console.warn(`Invalid target: ${this.target}`);
			if (params.external?.uri) {
				const id = params.external.registry.get(schema)?.id;
				if (!id) throw new Error("Schema is missing an `id` property");
				result.$id = params.external.uri(id);
			}
			Object.assign(result, root.def);
			const defs = params.external?.defs ?? {};
			for (const entry of this.seen.entries()) {
				const seen = entry[1];
				if (seen.def && seen.defId) defs[seen.defId] = seen.def;
			}
			if (params.external) {} else if (Object.keys(defs).length > 0) if (this.target === "draft-2020-12") result.$defs = defs;
			else result.definitions = defs;
			try {
				return JSON.parse(JSON.stringify(result));
			} catch (_err) {
				throw new Error("Error converting schema to JSON.");
			}
		}
	};
	function toJSONSchema(input, _params) {
		if (input instanceof $ZodRegistry) {
			const gen = new JSONSchemaGenerator(_params);
			const defs = {};
			for (const entry of input._idmap.entries()) {
				const [_, schema] = entry;
				gen.process(schema);
			}
			const schemas = {};
			const external = {
				registry: input,
				uri: _params?.uri,
				defs
			};
			for (const entry of input._idmap.entries()) {
				const [key, schema] = entry;
				schemas[key] = gen.emit(schema, {
					..._params,
					external
				});
			}
			if (Object.keys(defs).length > 0) schemas.__shared = { [gen.target === "draft-2020-12" ? "$defs" : "definitions"]: defs };
			return { schemas };
		}
		const gen = new JSONSchemaGenerator(_params);
		gen.process(input);
		return gen.emit(input, _params);
	}
	function isTransforming(_schema, _ctx) {
		const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
		if (ctx.seen.has(_schema)) return false;
		ctx.seen.add(_schema);
		const def = _schema._zod.def;
		switch (def.type) {
			case "string":
			case "number":
			case "bigint":
			case "boolean":
			case "date":
			case "symbol":
			case "undefined":
			case "null":
			case "any":
			case "unknown":
			case "never":
			case "void":
			case "literal":
			case "enum":
			case "nan":
			case "file":
			case "template_literal": return false;
			case "array": return isTransforming(def.element, ctx);
			case "object":
				for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
				return false;
			case "union":
				for (const option of def.options) if (isTransforming(option, ctx)) return true;
				return false;
			case "intersection": return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
			case "tuple":
				for (const item of def.items) if (isTransforming(item, ctx)) return true;
				if (def.rest && isTransforming(def.rest, ctx)) return true;
				return false;
			case "record": return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
			case "map": return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
			case "set": return isTransforming(def.valueType, ctx);
			case "promise":
			case "optional":
			case "nonoptional":
			case "nullable":
			case "readonly": return isTransforming(def.innerType, ctx);
			case "lazy": return isTransforming(def.getter(), ctx);
			case "default": return isTransforming(def.innerType, ctx);
			case "prefault": return isTransforming(def.innerType, ctx);
			case "custom": return false;
			case "transform": return true;
			case "pipe": return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
			case "success": return false;
			case "catch": return false;
			default:
		}
		throw new Error(`Unknown schema type: ${def.type}`);
	}

//#endregion
//#region node_modules/zod/v4/core/json-schema.js
	var json_schema_exports = /* @__PURE__ */ __exportAll({});

//#endregion
//#region node_modules/zod/v4/core/index.js
	var core_exports = /* @__PURE__ */ __exportAll({
		$ZodAny: () => $ZodAny,
		$ZodArray: () => $ZodArray,
		$ZodAsyncError: () => $ZodAsyncError,
		$ZodBase64: () => $ZodBase64,
		$ZodBase64URL: () => $ZodBase64URL,
		$ZodBigInt: () => $ZodBigInt,
		$ZodBigIntFormat: () => $ZodBigIntFormat,
		$ZodBoolean: () => $ZodBoolean,
		$ZodCIDRv4: () => $ZodCIDRv4,
		$ZodCIDRv6: () => $ZodCIDRv6,
		$ZodCUID: () => $ZodCUID,
		$ZodCUID2: () => $ZodCUID2,
		$ZodCatch: () => $ZodCatch,
		$ZodCheck: () => $ZodCheck,
		$ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
		$ZodCheckEndsWith: () => $ZodCheckEndsWith,
		$ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
		$ZodCheckIncludes: () => $ZodCheckIncludes,
		$ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
		$ZodCheckLessThan: () => $ZodCheckLessThan,
		$ZodCheckLowerCase: () => $ZodCheckLowerCase,
		$ZodCheckMaxLength: () => $ZodCheckMaxLength,
		$ZodCheckMaxSize: () => $ZodCheckMaxSize,
		$ZodCheckMimeType: () => $ZodCheckMimeType,
		$ZodCheckMinLength: () => $ZodCheckMinLength,
		$ZodCheckMinSize: () => $ZodCheckMinSize,
		$ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
		$ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
		$ZodCheckOverwrite: () => $ZodCheckOverwrite,
		$ZodCheckProperty: () => $ZodCheckProperty,
		$ZodCheckRegex: () => $ZodCheckRegex,
		$ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
		$ZodCheckStartsWith: () => $ZodCheckStartsWith,
		$ZodCheckStringFormat: () => $ZodCheckStringFormat,
		$ZodCheckUpperCase: () => $ZodCheckUpperCase,
		$ZodCustom: () => $ZodCustom,
		$ZodCustomStringFormat: () => $ZodCustomStringFormat,
		$ZodDate: () => $ZodDate,
		$ZodDefault: () => $ZodDefault,
		$ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
		$ZodE164: () => $ZodE164,
		$ZodEmail: () => $ZodEmail,
		$ZodEmoji: () => $ZodEmoji,
		$ZodEnum: () => $ZodEnum,
		$ZodError: () => $ZodError,
		$ZodFile: () => $ZodFile,
		$ZodFunction: () => $ZodFunction,
		$ZodGUID: () => $ZodGUID,
		$ZodIPv4: () => $ZodIPv4,
		$ZodIPv6: () => $ZodIPv6,
		$ZodISODate: () => $ZodISODate,
		$ZodISODateTime: () => $ZodISODateTime,
		$ZodISODuration: () => $ZodISODuration,
		$ZodISOTime: () => $ZodISOTime,
		$ZodIntersection: () => $ZodIntersection,
		$ZodJWT: () => $ZodJWT,
		$ZodKSUID: () => $ZodKSUID,
		$ZodLazy: () => $ZodLazy,
		$ZodLiteral: () => $ZodLiteral,
		$ZodMap: () => $ZodMap,
		$ZodNaN: () => $ZodNaN,
		$ZodNanoID: () => $ZodNanoID,
		$ZodNever: () => $ZodNever,
		$ZodNonOptional: () => $ZodNonOptional,
		$ZodNull: () => $ZodNull,
		$ZodNullable: () => $ZodNullable,
		$ZodNumber: () => $ZodNumber,
		$ZodNumberFormat: () => $ZodNumberFormat,
		$ZodObject: () => $ZodObject,
		$ZodOptional: () => $ZodOptional,
		$ZodPipe: () => $ZodPipe,
		$ZodPrefault: () => $ZodPrefault,
		$ZodPromise: () => $ZodPromise,
		$ZodReadonly: () => $ZodReadonly,
		$ZodRealError: () => $ZodRealError,
		$ZodRecord: () => $ZodRecord,
		$ZodRegistry: () => $ZodRegistry,
		$ZodSet: () => $ZodSet,
		$ZodString: () => $ZodString,
		$ZodStringFormat: () => $ZodStringFormat,
		$ZodSuccess: () => $ZodSuccess,
		$ZodSymbol: () => $ZodSymbol,
		$ZodTemplateLiteral: () => $ZodTemplateLiteral,
		$ZodTransform: () => $ZodTransform,
		$ZodTuple: () => $ZodTuple,
		$ZodType: () => $ZodType,
		$ZodULID: () => $ZodULID,
		$ZodURL: () => $ZodURL,
		$ZodUUID: () => $ZodUUID,
		$ZodUndefined: () => $ZodUndefined,
		$ZodUnion: () => $ZodUnion,
		$ZodUnknown: () => $ZodUnknown,
		$ZodVoid: () => $ZodVoid,
		$ZodXID: () => $ZodXID,
		$brand: () => $brand,
		$constructor: () => $constructor,
		$input: () => $input,
		$output: () => $output,
		Doc: () => Doc,
		JSONSchema: () => json_schema_exports,
		JSONSchemaGenerator: () => JSONSchemaGenerator,
		NEVER: () => NEVER,
		TimePrecision: () => TimePrecision,
		_any: () => _any,
		_array: () => _array,
		_base64: () => _base64,
		_base64url: () => _base64url,
		_bigint: () => _bigint,
		_boolean: () => _boolean,
		_catch: () => _catch$1,
		_cidrv4: () => _cidrv4,
		_cidrv6: () => _cidrv6,
		_coercedBigint: () => _coercedBigint,
		_coercedBoolean: () => _coercedBoolean,
		_coercedDate: () => _coercedDate,
		_coercedNumber: () => _coercedNumber,
		_coercedString: () => _coercedString,
		_cuid: () => _cuid,
		_cuid2: () => _cuid2,
		_custom: () => _custom,
		_date: () => _date,
		_default: () => _default$1,
		_discriminatedUnion: () => _discriminatedUnion,
		_e164: () => _e164,
		_email: () => _email,
		_emoji: () => _emoji,
		_endsWith: () => _endsWith,
		_enum: () => _enum$1,
		_file: () => _file,
		_float32: () => _float32,
		_float64: () => _float64,
		_gt: () => _gt,
		_gte: () => _gte,
		_guid: () => _guid,
		_includes: () => _includes,
		_int: () => _int,
		_int32: () => _int32,
		_int64: () => _int64,
		_intersection: () => _intersection,
		_ipv4: () => _ipv4,
		_ipv6: () => _ipv6,
		_isoDate: () => _isoDate,
		_isoDateTime: () => _isoDateTime,
		_isoDuration: () => _isoDuration,
		_isoTime: () => _isoTime,
		_jwt: () => _jwt,
		_ksuid: () => _ksuid,
		_lazy: () => _lazy,
		_length: () => _length,
		_literal: () => _literal,
		_lowercase: () => _lowercase,
		_lt: () => _lt,
		_lte: () => _lte,
		_map: () => _map,
		_max: () => _lte,
		_maxLength: () => _maxLength,
		_maxSize: () => _maxSize,
		_mime: () => _mime,
		_min: () => _gte,
		_minLength: () => _minLength,
		_minSize: () => _minSize,
		_multipleOf: () => _multipleOf,
		_nan: () => _nan,
		_nanoid: () => _nanoid,
		_nativeEnum: () => _nativeEnum,
		_negative: () => _negative,
		_never: () => _never,
		_nonnegative: () => _nonnegative,
		_nonoptional: () => _nonoptional,
		_nonpositive: () => _nonpositive,
		_normalize: () => _normalize,
		_null: () => _null$1,
		_nullable: () => _nullable,
		_number: () => _number,
		_optional: () => _optional,
		_overwrite: () => _overwrite,
		_parse: () => _parse,
		_parseAsync: () => _parseAsync,
		_pipe: () => _pipe,
		_positive: () => _positive,
		_promise: () => _promise,
		_property: () => _property,
		_readonly: () => _readonly,
		_record: () => _record,
		_refine: () => _refine,
		_regex: () => _regex,
		_safeParse: () => _safeParse,
		_safeParseAsync: () => _safeParseAsync,
		_set: () => _set,
		_size: () => _size,
		_startsWith: () => _startsWith,
		_string: () => _string,
		_stringFormat: () => _stringFormat,
		_stringbool: () => _stringbool,
		_success: () => _success,
		_symbol: () => _symbol,
		_templateLiteral: () => _templateLiteral,
		_toLowerCase: () => _toLowerCase,
		_toUpperCase: () => _toUpperCase,
		_transform: () => _transform,
		_trim: () => _trim,
		_tuple: () => _tuple,
		_uint32: () => _uint32,
		_uint64: () => _uint64,
		_ulid: () => _ulid,
		_undefined: () => _undefined$1,
		_union: () => _union,
		_unknown: () => _unknown,
		_uppercase: () => _uppercase,
		_url: () => _url,
		_uuid: () => _uuid,
		_uuidv4: () => _uuidv4,
		_uuidv6: () => _uuidv6,
		_uuidv7: () => _uuidv7,
		_void: () => _void$1,
		_xid: () => _xid,
		clone: () => clone,
		config: () => config,
		flattenError: () => flattenError,
		formatError: () => formatError,
		function: () => _function,
		globalConfig: () => globalConfig,
		globalRegistry: () => globalRegistry,
		isValidBase64: () => isValidBase64,
		isValidBase64URL: () => isValidBase64URL,
		isValidJWT: () => isValidJWT,
		locales: () => locales_exports,
		parse: () => parse$1,
		parseAsync: () => parseAsync$1,
		prettifyError: () => prettifyError,
		regexes: () => regexes_exports,
		registry: () => registry,
		safeParse: () => safeParse$1,
		safeParseAsync: () => safeParseAsync$1,
		toDotPath: () => toDotPath,
		toJSONSchema: () => toJSONSchema,
		treeifyError: () => treeifyError,
		util: () => util_exports,
		version: () => version
	});

//#endregion
//#region node_modules/zod/v4/classic/iso.js
	var iso_exports = /* @__PURE__ */ __exportAll({
		ZodISODate: () => ZodISODate,
		ZodISODateTime: () => ZodISODateTime,
		ZodISODuration: () => ZodISODuration,
		ZodISOTime: () => ZodISOTime,
		date: () => date$2,
		datetime: () => datetime,
		duration: () => duration,
		time: () => time
	});
	var ZodISODateTime = /*@__PURE__*/ $constructor("ZodISODateTime", (inst, def) => {
		$ZodISODateTime.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function datetime(params) {
		return _isoDateTime(ZodISODateTime, params);
	}
	var ZodISODate = /*@__PURE__*/ $constructor("ZodISODate", (inst, def) => {
		$ZodISODate.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function date$2(params) {
		return _isoDate(ZodISODate, params);
	}
	__name(date$2, "date");
	var ZodISOTime = /*@__PURE__*/ $constructor("ZodISOTime", (inst, def) => {
		$ZodISOTime.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function time(params) {
		return _isoTime(ZodISOTime, params);
	}
	var ZodISODuration = /*@__PURE__*/ $constructor("ZodISODuration", (inst, def) => {
		$ZodISODuration.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function duration(params) {
		return _isoDuration(ZodISODuration, params);
	}

//#endregion
//#region node_modules/zod/v4/classic/errors.js
	var initializer = (inst, issues) => {
		$ZodError.init(inst, issues);
		inst.name = "ZodError";
		Object.defineProperties(inst, {
			format: { value: (mapper) => formatError(inst, mapper) },
			flatten: { value: (mapper) => flattenError(inst, mapper) },
			addIssue: { value: (issue) => inst.issues.push(issue) },
			addIssues: { value: (issues) => inst.issues.push(...issues) },
			isEmpty: { get() {
				return inst.issues.length === 0;
			} }
		});
	};
	var ZodError = $constructor("ZodError", initializer);
	var ZodRealError = $constructor("ZodError", initializer, { Parent: Error });

//#endregion
//#region node_modules/zod/v4/classic/parse.js
	var parse = /* @__PURE__ */ _parse(ZodRealError);
	var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
	var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
	var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);

//#endregion
//#region node_modules/zod/v4/classic/schemas.js
	var ZodType = /*@__PURE__*/ $constructor("ZodType", (inst, def) => {
		$ZodType.init(inst, def);
		inst.def = def;
		Object.defineProperty(inst, "_def", { value: def });
		inst.check = (...checks) => {
			return inst.clone({
				...def,
				checks: [...def.checks ?? [], ...checks.map((ch) => typeof ch === "function" ? { _zod: {
					check: ch,
					def: { check: "custom" },
					onattach: []
				} } : ch)]
			});
		};
		inst.clone = (def, params) => clone(inst, def, params);
		inst.brand = () => inst;
		inst.register = ((reg, meta) => {
			reg.add(inst, meta);
			return inst;
		});
		inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
		inst.safeParse = (data, params) => safeParse(inst, data, params);
		inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
		inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
		inst.spa = inst.safeParseAsync;
		inst.refine = (check, params) => inst.check(refine(check, params));
		inst.superRefine = (refinement) => inst.check(superRefine(refinement));
		inst.overwrite = (fn) => inst.check(_overwrite(fn));
		inst.optional = () => optional(inst);
		inst.nullable = () => nullable(inst);
		inst.nullish = () => optional(nullable(inst));
		inst.nonoptional = (params) => nonoptional(inst, params);
		inst.array = () => array(inst);
		inst.or = (arg) => union([inst, arg]);
		inst.and = (arg) => intersection(inst, arg);
		inst.transform = (tx) => pipe(inst, transform(tx));
		inst.default = (def) => _default(inst, def);
		inst.prefault = (def) => prefault(inst, def);
		inst.catch = (params) => _catch(inst, params);
		inst.pipe = (target) => pipe(inst, target);
		inst.readonly = () => readonly(inst);
		inst.describe = (description) => {
			const cl = inst.clone();
			globalRegistry.add(cl, { description });
			return cl;
		};
		Object.defineProperty(inst, "description", {
			get() {
				return globalRegistry.get(inst)?.description;
			},
			configurable: true
		});
		inst.meta = (...args) => {
			if (args.length === 0) return globalRegistry.get(inst);
			const cl = inst.clone();
			globalRegistry.add(cl, args[0]);
			return cl;
		};
		inst.isOptional = () => inst.safeParse(void 0).success;
		inst.isNullable = () => inst.safeParse(null).success;
		return inst;
	});
	/** @internal */
	var _ZodString = /*@__PURE__*/ $constructor("_ZodString", (inst, def) => {
		$ZodString.init(inst, def);
		ZodType.init(inst, def);
		const bag = inst._zod.bag;
		inst.format = bag.format ?? null;
		inst.minLength = bag.minimum ?? null;
		inst.maxLength = bag.maximum ?? null;
		inst.regex = (...args) => inst.check(_regex(...args));
		inst.includes = (...args) => inst.check(_includes(...args));
		inst.startsWith = (...args) => inst.check(_startsWith(...args));
		inst.endsWith = (...args) => inst.check(_endsWith(...args));
		inst.min = (...args) => inst.check(_minLength(...args));
		inst.max = (...args) => inst.check(_maxLength(...args));
		inst.length = (...args) => inst.check(_length(...args));
		inst.nonempty = (...args) => inst.check(_minLength(1, ...args));
		inst.lowercase = (params) => inst.check(_lowercase(params));
		inst.uppercase = (params) => inst.check(_uppercase(params));
		inst.trim = () => inst.check(_trim());
		inst.normalize = (...args) => inst.check(_normalize(...args));
		inst.toLowerCase = () => inst.check(_toLowerCase());
		inst.toUpperCase = () => inst.check(_toUpperCase());
	});
	var ZodString = /*@__PURE__*/ $constructor("ZodString", (inst, def) => {
		$ZodString.init(inst, def);
		_ZodString.init(inst, def);
		inst.email = (params) => inst.check(_email(ZodEmail, params));
		inst.url = (params) => inst.check(_url(ZodURL, params));
		inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
		inst.emoji = (params) => inst.check(_emoji(ZodEmoji, params));
		inst.guid = (params) => inst.check(_guid(ZodGUID, params));
		inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
		inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
		inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
		inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
		inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
		inst.guid = (params) => inst.check(_guid(ZodGUID, params));
		inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
		inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
		inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
		inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
		inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
		inst.xid = (params) => inst.check(_xid(ZodXID, params));
		inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
		inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
		inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
		inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
		inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
		inst.e164 = (params) => inst.check(_e164(ZodE164, params));
		inst.datetime = (params) => inst.check(datetime(params));
		inst.date = (params) => inst.check(date$2(params));
		inst.time = (params) => inst.check(time(params));
		inst.duration = (params) => inst.check(duration(params));
	});
	function string$1(params) {
		return _string(ZodString, params);
	}
	__name(string$1, "string");
	var ZodStringFormat = /*@__PURE__*/ $constructor("ZodStringFormat", (inst, def) => {
		$ZodStringFormat.init(inst, def);
		_ZodString.init(inst, def);
	});
	var ZodEmail = /*@__PURE__*/ $constructor("ZodEmail", (inst, def) => {
		$ZodEmail.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function email(params) {
		return _email(ZodEmail, params);
	}
	var ZodGUID = /*@__PURE__*/ $constructor("ZodGUID", (inst, def) => {
		$ZodGUID.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function guid(params) {
		return _guid(ZodGUID, params);
	}
	var ZodUUID = /*@__PURE__*/ $constructor("ZodUUID", (inst, def) => {
		$ZodUUID.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function uuid(params) {
		return _uuid(ZodUUID, params);
	}
	function uuidv4(params) {
		return _uuidv4(ZodUUID, params);
	}
	function uuidv6(params) {
		return _uuidv6(ZodUUID, params);
	}
	function uuidv7(params) {
		return _uuidv7(ZodUUID, params);
	}
	var ZodURL = /*@__PURE__*/ $constructor("ZodURL", (inst, def) => {
		$ZodURL.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function url(params) {
		return _url(ZodURL, params);
	}
	var ZodEmoji = /*@__PURE__*/ $constructor("ZodEmoji", (inst, def) => {
		$ZodEmoji.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function emoji(params) {
		return _emoji(ZodEmoji, params);
	}
	var ZodNanoID = /*@__PURE__*/ $constructor("ZodNanoID", (inst, def) => {
		$ZodNanoID.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function nanoid(params) {
		return _nanoid(ZodNanoID, params);
	}
	var ZodCUID = /*@__PURE__*/ $constructor("ZodCUID", (inst, def) => {
		$ZodCUID.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function cuid(params) {
		return _cuid(ZodCUID, params);
	}
	var ZodCUID2 = /*@__PURE__*/ $constructor("ZodCUID2", (inst, def) => {
		$ZodCUID2.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function cuid2(params) {
		return _cuid2(ZodCUID2, params);
	}
	var ZodULID = /*@__PURE__*/ $constructor("ZodULID", (inst, def) => {
		$ZodULID.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function ulid(params) {
		return _ulid(ZodULID, params);
	}
	var ZodXID = /*@__PURE__*/ $constructor("ZodXID", (inst, def) => {
		$ZodXID.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function xid(params) {
		return _xid(ZodXID, params);
	}
	var ZodKSUID = /*@__PURE__*/ $constructor("ZodKSUID", (inst, def) => {
		$ZodKSUID.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function ksuid(params) {
		return _ksuid(ZodKSUID, params);
	}
	var ZodIPv4 = /*@__PURE__*/ $constructor("ZodIPv4", (inst, def) => {
		$ZodIPv4.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function ipv4(params) {
		return _ipv4(ZodIPv4, params);
	}
	var ZodIPv6 = /*@__PURE__*/ $constructor("ZodIPv6", (inst, def) => {
		$ZodIPv6.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function ipv6(params) {
		return _ipv6(ZodIPv6, params);
	}
	var ZodCIDRv4 = /*@__PURE__*/ $constructor("ZodCIDRv4", (inst, def) => {
		$ZodCIDRv4.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function cidrv4(params) {
		return _cidrv4(ZodCIDRv4, params);
	}
	var ZodCIDRv6 = /*@__PURE__*/ $constructor("ZodCIDRv6", (inst, def) => {
		$ZodCIDRv6.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function cidrv6(params) {
		return _cidrv6(ZodCIDRv6, params);
	}
	var ZodBase64 = /*@__PURE__*/ $constructor("ZodBase64", (inst, def) => {
		$ZodBase64.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function base64(params) {
		return _base64(ZodBase64, params);
	}
	var ZodBase64URL = /*@__PURE__*/ $constructor("ZodBase64URL", (inst, def) => {
		$ZodBase64URL.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function base64url(params) {
		return _base64url(ZodBase64URL, params);
	}
	var ZodE164 = /*@__PURE__*/ $constructor("ZodE164", (inst, def) => {
		$ZodE164.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function e164(params) {
		return _e164(ZodE164, params);
	}
	var ZodJWT = /*@__PURE__*/ $constructor("ZodJWT", (inst, def) => {
		$ZodJWT.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function jwt(params) {
		return _jwt(ZodJWT, params);
	}
	var ZodCustomStringFormat = /*@__PURE__*/ $constructor("ZodCustomStringFormat", (inst, def) => {
		$ZodCustomStringFormat.init(inst, def);
		ZodStringFormat.init(inst, def);
	});
	function stringFormat(format, fnOrRegex, _params = {}) {
		return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
	}
	var ZodNumber = /*@__PURE__*/ $constructor("ZodNumber", (inst, def) => {
		$ZodNumber.init(inst, def);
		ZodType.init(inst, def);
		inst.gt = (value, params) => inst.check(_gt(value, params));
		inst.gte = (value, params) => inst.check(_gte(value, params));
		inst.min = (value, params) => inst.check(_gte(value, params));
		inst.lt = (value, params) => inst.check(_lt(value, params));
		inst.lte = (value, params) => inst.check(_lte(value, params));
		inst.max = (value, params) => inst.check(_lte(value, params));
		inst.int = (params) => inst.check(int(params));
		inst.safe = (params) => inst.check(int(params));
		inst.positive = (params) => inst.check(_gt(0, params));
		inst.nonnegative = (params) => inst.check(_gte(0, params));
		inst.negative = (params) => inst.check(_lt(0, params));
		inst.nonpositive = (params) => inst.check(_lte(0, params));
		inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
		inst.step = (value, params) => inst.check(_multipleOf(value, params));
		inst.finite = () => inst;
		const bag = inst._zod.bag;
		inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
		inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
		inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
		inst.isFinite = true;
		inst.format = bag.format ?? null;
	});
	function number$1(params) {
		return _number(ZodNumber, params);
	}
	__name(number$1, "number");
	var ZodNumberFormat = /*@__PURE__*/ $constructor("ZodNumberFormat", (inst, def) => {
		$ZodNumberFormat.init(inst, def);
		ZodNumber.init(inst, def);
	});
	function int(params) {
		return _int(ZodNumberFormat, params);
	}
	function float32(params) {
		return _float32(ZodNumberFormat, params);
	}
	function float64(params) {
		return _float64(ZodNumberFormat, params);
	}
	function int32(params) {
		return _int32(ZodNumberFormat, params);
	}
	function uint32(params) {
		return _uint32(ZodNumberFormat, params);
	}
	var ZodBoolean = /*@__PURE__*/ $constructor("ZodBoolean", (inst, def) => {
		$ZodBoolean.init(inst, def);
		ZodType.init(inst, def);
	});
	function boolean$1(params) {
		return _boolean(ZodBoolean, params);
	}
	__name(boolean$1, "boolean");
	var ZodBigInt = /*@__PURE__*/ $constructor("ZodBigInt", (inst, def) => {
		$ZodBigInt.init(inst, def);
		ZodType.init(inst, def);
		inst.gte = (value, params) => inst.check(_gte(value, params));
		inst.min = (value, params) => inst.check(_gte(value, params));
		inst.gt = (value, params) => inst.check(_gt(value, params));
		inst.gte = (value, params) => inst.check(_gte(value, params));
		inst.min = (value, params) => inst.check(_gte(value, params));
		inst.lt = (value, params) => inst.check(_lt(value, params));
		inst.lte = (value, params) => inst.check(_lte(value, params));
		inst.max = (value, params) => inst.check(_lte(value, params));
		inst.positive = (params) => inst.check(_gt(BigInt(0), params));
		inst.negative = (params) => inst.check(_lt(BigInt(0), params));
		inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
		inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
		inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
		const bag = inst._zod.bag;
		inst.minValue = bag.minimum ?? null;
		inst.maxValue = bag.maximum ?? null;
		inst.format = bag.format ?? null;
	});
	function bigint$1(params) {
		return _bigint(ZodBigInt, params);
	}
	__name(bigint$1, "bigint");
	var ZodBigIntFormat = /*@__PURE__*/ $constructor("ZodBigIntFormat", (inst, def) => {
		$ZodBigIntFormat.init(inst, def);
		ZodBigInt.init(inst, def);
	});
	function int64(params) {
		return _int64(ZodBigIntFormat, params);
	}
	function uint64(params) {
		return _uint64(ZodBigIntFormat, params);
	}
	var ZodSymbol = /*@__PURE__*/ $constructor("ZodSymbol", (inst, def) => {
		$ZodSymbol.init(inst, def);
		ZodType.init(inst, def);
	});
	function symbol(params) {
		return _symbol(ZodSymbol, params);
	}
	var ZodUndefined = /*@__PURE__*/ $constructor("ZodUndefined", (inst, def) => {
		$ZodUndefined.init(inst, def);
		ZodType.init(inst, def);
	});
	function _undefined(params) {
		return _undefined$1(ZodUndefined, params);
	}
	var ZodNull = /*@__PURE__*/ $constructor("ZodNull", (inst, def) => {
		$ZodNull.init(inst, def);
		ZodType.init(inst, def);
	});
	function _null(params) {
		return _null$1(ZodNull, params);
	}
	var ZodAny = /*@__PURE__*/ $constructor("ZodAny", (inst, def) => {
		$ZodAny.init(inst, def);
		ZodType.init(inst, def);
	});
	function any() {
		return _any(ZodAny);
	}
	var ZodUnknown = /*@__PURE__*/ $constructor("ZodUnknown", (inst, def) => {
		$ZodUnknown.init(inst, def);
		ZodType.init(inst, def);
	});
	function unknown() {
		return _unknown(ZodUnknown);
	}
	var ZodNever = /*@__PURE__*/ $constructor("ZodNever", (inst, def) => {
		$ZodNever.init(inst, def);
		ZodType.init(inst, def);
	});
	function never(params) {
		return _never(ZodNever, params);
	}
	var ZodVoid = /*@__PURE__*/ $constructor("ZodVoid", (inst, def) => {
		$ZodVoid.init(inst, def);
		ZodType.init(inst, def);
	});
	function _void(params) {
		return _void$1(ZodVoid, params);
	}
	var ZodDate = /*@__PURE__*/ $constructor("ZodDate", (inst, def) => {
		$ZodDate.init(inst, def);
		ZodType.init(inst, def);
		inst.min = (value, params) => inst.check(_gte(value, params));
		inst.max = (value, params) => inst.check(_lte(value, params));
		const c = inst._zod.bag;
		inst.minDate = c.minimum ? new Date(c.minimum) : null;
		inst.maxDate = c.maximum ? new Date(c.maximum) : null;
	});
	function date$1(params) {
		return _date(ZodDate, params);
	}
	__name(date$1, "date");
	var ZodArray = /*@__PURE__*/ $constructor("ZodArray", (inst, def) => {
		$ZodArray.init(inst, def);
		ZodType.init(inst, def);
		inst.element = def.element;
		inst.min = (minLength, params) => inst.check(_minLength(minLength, params));
		inst.nonempty = (params) => inst.check(_minLength(1, params));
		inst.max = (maxLength, params) => inst.check(_maxLength(maxLength, params));
		inst.length = (len, params) => inst.check(_length(len, params));
		inst.unwrap = () => inst.element;
	});
	function array(element, params) {
		return _array(ZodArray, element, params);
	}
	function keyof(schema) {
		const shape = schema._zod.def.shape;
		return literal(Object.keys(shape));
	}
	var ZodObject = /*@__PURE__*/ $constructor("ZodObject", (inst, def) => {
		$ZodObject.init(inst, def);
		ZodType.init(inst, def);
		defineLazy(inst, "shape", () => def.shape);
		inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
		inst.catchall = (catchall) => inst.clone({
			...inst._zod.def,
			catchall
		});
		inst.passthrough = () => inst.clone({
			...inst._zod.def,
			catchall: unknown()
		});
		inst.loose = () => inst.clone({
			...inst._zod.def,
			catchall: unknown()
		});
		inst.strict = () => inst.clone({
			...inst._zod.def,
			catchall: never()
		});
		inst.strip = () => inst.clone({
			...inst._zod.def,
			catchall: void 0
		});
		inst.extend = (incoming) => {
			return extend(inst, incoming);
		};
		inst.merge = (other) => merge(inst, other);
		inst.pick = (mask) => pick(inst, mask);
		inst.omit = (mask) => omit(inst, mask);
		inst.partial = (...args) => partial(ZodOptional, inst, args[0]);
		inst.required = (...args) => required(ZodNonOptional, inst, args[0]);
	});
	function object(shape, params) {
		const def = {
			type: "object",
			get shape() {
				assignProp(this, "shape", { ...shape });
				return this.shape;
			},
			...normalizeParams(params)
		};
		return new ZodObject(def);
	}
	function strictObject(shape, params) {
		return new ZodObject({
			type: "object",
			get shape() {
				assignProp(this, "shape", { ...shape });
				return this.shape;
			},
			catchall: never(),
			...normalizeParams(params)
		});
	}
	function looseObject(shape, params) {
		return new ZodObject({
			type: "object",
			get shape() {
				assignProp(this, "shape", { ...shape });
				return this.shape;
			},
			catchall: unknown(),
			...normalizeParams(params)
		});
	}
	var ZodUnion = /*@__PURE__*/ $constructor("ZodUnion", (inst, def) => {
		$ZodUnion.init(inst, def);
		ZodType.init(inst, def);
		inst.options = def.options;
	});
	function union(options, params) {
		return new ZodUnion({
			type: "union",
			options,
			...normalizeParams(params)
		});
	}
	var ZodDiscriminatedUnion = /*@__PURE__*/ $constructor("ZodDiscriminatedUnion", (inst, def) => {
		ZodUnion.init(inst, def);
		$ZodDiscriminatedUnion.init(inst, def);
	});
	function discriminatedUnion(discriminator, options, params) {
		return new ZodDiscriminatedUnion({
			type: "union",
			options,
			discriminator,
			...normalizeParams(params)
		});
	}
	var ZodIntersection = /*@__PURE__*/ $constructor("ZodIntersection", (inst, def) => {
		$ZodIntersection.init(inst, def);
		ZodType.init(inst, def);
	});
	function intersection(left, right) {
		return new ZodIntersection({
			type: "intersection",
			left,
			right
		});
	}
	var ZodTuple = /*@__PURE__*/ $constructor("ZodTuple", (inst, def) => {
		$ZodTuple.init(inst, def);
		ZodType.init(inst, def);
		inst.rest = (rest) => inst.clone({
			...inst._zod.def,
			rest
		});
	});
	function tuple(items, _paramsOrRest, _params) {
		const hasRest = _paramsOrRest instanceof $ZodType;
		const params = hasRest ? _params : _paramsOrRest;
		return new ZodTuple({
			type: "tuple",
			items,
			rest: hasRest ? _paramsOrRest : null,
			...normalizeParams(params)
		});
	}
	var ZodRecord = /*@__PURE__*/ $constructor("ZodRecord", (inst, def) => {
		$ZodRecord.init(inst, def);
		ZodType.init(inst, def);
		inst.keyType = def.keyType;
		inst.valueType = def.valueType;
	});
	function record(keyType, valueType, params) {
		return new ZodRecord({
			type: "record",
			keyType,
			valueType,
			...normalizeParams(params)
		});
	}
	function partialRecord(keyType, valueType, params) {
		return new ZodRecord({
			type: "record",
			keyType: union([keyType, never()]),
			valueType,
			...normalizeParams(params)
		});
	}
	var ZodMap = /*@__PURE__*/ $constructor("ZodMap", (inst, def) => {
		$ZodMap.init(inst, def);
		ZodType.init(inst, def);
		inst.keyType = def.keyType;
		inst.valueType = def.valueType;
	});
	function map(keyType, valueType, params) {
		return new ZodMap({
			type: "map",
			keyType,
			valueType,
			...normalizeParams(params)
		});
	}
	var ZodSet = /*@__PURE__*/ $constructor("ZodSet", (inst, def) => {
		$ZodSet.init(inst, def);
		ZodType.init(inst, def);
		inst.min = (...args) => inst.check(_minSize(...args));
		inst.nonempty = (params) => inst.check(_minSize(1, params));
		inst.max = (...args) => inst.check(_maxSize(...args));
		inst.size = (...args) => inst.check(_size(...args));
	});
	function set(valueType, params) {
		return new ZodSet({
			type: "set",
			valueType,
			...normalizeParams(params)
		});
	}
	var ZodEnum = /*@__PURE__*/ $constructor("ZodEnum", (inst, def) => {
		$ZodEnum.init(inst, def);
		ZodType.init(inst, def);
		inst.enum = def.entries;
		inst.options = Object.values(def.entries);
		const keys = new Set(Object.keys(def.entries));
		inst.extract = (values, params) => {
			const newEntries = {};
			for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
			else throw new Error(`Key ${value} not found in enum`);
			return new ZodEnum({
				...def,
				checks: [],
				...normalizeParams(params),
				entries: newEntries
			});
		};
		inst.exclude = (values, params) => {
			const newEntries = { ...def.entries };
			for (const value of values) if (keys.has(value)) delete newEntries[value];
			else throw new Error(`Key ${value} not found in enum`);
			return new ZodEnum({
				...def,
				checks: [],
				...normalizeParams(params),
				entries: newEntries
			});
		};
	});
	function _enum(values, params) {
		const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
		return new ZodEnum({
			type: "enum",
			entries,
			...normalizeParams(params)
		});
	}
	/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
	*
	* ```ts
	* enum Colors { red, green, blue }
	* z.enum(Colors);
	* ```
	*/
	function nativeEnum(entries, params) {
		return new ZodEnum({
			type: "enum",
			entries,
			...normalizeParams(params)
		});
	}
	var ZodLiteral = /*@__PURE__*/ $constructor("ZodLiteral", (inst, def) => {
		$ZodLiteral.init(inst, def);
		ZodType.init(inst, def);
		inst.values = new Set(def.values);
		Object.defineProperty(inst, "value", { get() {
			if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return def.values[0];
		} });
	});
	function literal(value, params) {
		return new ZodLiteral({
			type: "literal",
			values: Array.isArray(value) ? value : [value],
			...normalizeParams(params)
		});
	}
	var ZodFile = /*@__PURE__*/ $constructor("ZodFile", (inst, def) => {
		$ZodFile.init(inst, def);
		ZodType.init(inst, def);
		inst.min = (size, params) => inst.check(_minSize(size, params));
		inst.max = (size, params) => inst.check(_maxSize(size, params));
		inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
	});
	function file(params) {
		return _file(ZodFile, params);
	}
	var ZodTransform = /*@__PURE__*/ $constructor("ZodTransform", (inst, def) => {
		$ZodTransform.init(inst, def);
		ZodType.init(inst, def);
		inst._zod.parse = (payload, _ctx) => {
			payload.addIssue = (issue$2) => {
				if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, def));
				else {
					const _issue = issue$2;
					if (_issue.fatal) _issue.continue = false;
					_issue.code ?? (_issue.code = "custom");
					_issue.input ?? (_issue.input = payload.value);
					_issue.inst ?? (_issue.inst = inst);
					_issue.continue ?? (_issue.continue = true);
					payload.issues.push(issue(_issue));
				}
			};
			const output = def.transform(payload.value, payload);
			if (output instanceof Promise) return output.then((output) => {
				payload.value = output;
				return payload;
			});
			payload.value = output;
			return payload;
		};
	});
	function transform(fn) {
		return new ZodTransform({
			type: "transform",
			transform: fn
		});
	}
	var ZodOptional = /*@__PURE__*/ $constructor("ZodOptional", (inst, def) => {
		$ZodOptional.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.innerType;
	});
	function optional(innerType) {
		return new ZodOptional({
			type: "optional",
			innerType
		});
	}
	var ZodNullable = /*@__PURE__*/ $constructor("ZodNullable", (inst, def) => {
		$ZodNullable.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.innerType;
	});
	function nullable(innerType) {
		return new ZodNullable({
			type: "nullable",
			innerType
		});
	}
	function nullish(innerType) {
		return optional(nullable(innerType));
	}
	var ZodDefault = /*@__PURE__*/ $constructor("ZodDefault", (inst, def) => {
		$ZodDefault.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.innerType;
		inst.removeDefault = inst.unwrap;
	});
	function _default(innerType, defaultValue) {
		return new ZodDefault({
			type: "default",
			innerType,
			get defaultValue() {
				return typeof defaultValue === "function" ? defaultValue() : defaultValue;
			}
		});
	}
	var ZodPrefault = /*@__PURE__*/ $constructor("ZodPrefault", (inst, def) => {
		$ZodPrefault.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.innerType;
	});
	function prefault(innerType, defaultValue) {
		return new ZodPrefault({
			type: "prefault",
			innerType,
			get defaultValue() {
				return typeof defaultValue === "function" ? defaultValue() : defaultValue;
			}
		});
	}
	var ZodNonOptional = /*@__PURE__*/ $constructor("ZodNonOptional", (inst, def) => {
		$ZodNonOptional.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.innerType;
	});
	function nonoptional(innerType, params) {
		return new ZodNonOptional({
			type: "nonoptional",
			innerType,
			...normalizeParams(params)
		});
	}
	var ZodSuccess = /*@__PURE__*/ $constructor("ZodSuccess", (inst, def) => {
		$ZodSuccess.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.innerType;
	});
	function success(innerType) {
		return new ZodSuccess({
			type: "success",
			innerType
		});
	}
	var ZodCatch = /*@__PURE__*/ $constructor("ZodCatch", (inst, def) => {
		$ZodCatch.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.innerType;
		inst.removeCatch = inst.unwrap;
	});
	function _catch(innerType, catchValue) {
		return new ZodCatch({
			type: "catch",
			innerType,
			catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
		});
	}
	var ZodNaN = /*@__PURE__*/ $constructor("ZodNaN", (inst, def) => {
		$ZodNaN.init(inst, def);
		ZodType.init(inst, def);
	});
	function nan(params) {
		return _nan(ZodNaN, params);
	}
	var ZodPipe = /*@__PURE__*/ $constructor("ZodPipe", (inst, def) => {
		$ZodPipe.init(inst, def);
		ZodType.init(inst, def);
		inst.in = def.in;
		inst.out = def.out;
	});
	function pipe(in_, out) {
		return new ZodPipe({
			type: "pipe",
			in: in_,
			out
		});
	}
	var ZodReadonly = /*@__PURE__*/ $constructor("ZodReadonly", (inst, def) => {
		$ZodReadonly.init(inst, def);
		ZodType.init(inst, def);
	});
	function readonly(innerType) {
		return new ZodReadonly({
			type: "readonly",
			innerType
		});
	}
	var ZodTemplateLiteral = /*@__PURE__*/ $constructor("ZodTemplateLiteral", (inst, def) => {
		$ZodTemplateLiteral.init(inst, def);
		ZodType.init(inst, def);
	});
	function templateLiteral(parts, params) {
		return new ZodTemplateLiteral({
			type: "template_literal",
			parts,
			...normalizeParams(params)
		});
	}
	var ZodLazy = /*@__PURE__*/ $constructor("ZodLazy", (inst, def) => {
		$ZodLazy.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.getter();
	});
	function lazy(getter) {
		return new ZodLazy({
			type: "lazy",
			getter
		});
	}
	var ZodPromise = /*@__PURE__*/ $constructor("ZodPromise", (inst, def) => {
		$ZodPromise.init(inst, def);
		ZodType.init(inst, def);
		inst.unwrap = () => inst._zod.def.innerType;
	});
	function promise(innerType) {
		return new ZodPromise({
			type: "promise",
			innerType
		});
	}
	var ZodCustom = /*@__PURE__*/ $constructor("ZodCustom", (inst, def) => {
		$ZodCustom.init(inst, def);
		ZodType.init(inst, def);
	});
	function check(fn) {
		const ch = new $ZodCheck({ check: "custom" });
		ch._zod.check = fn;
		return ch;
	}
	function custom(fn, _params) {
		return _custom(ZodCustom, fn ?? (() => true), _params);
	}
	function refine(fn, _params = {}) {
		return _refine(ZodCustom, fn, _params);
	}
	function superRefine(fn) {
		const ch = check((payload) => {
			payload.addIssue = (issue$1) => {
				if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, ch._zod.def));
				else {
					const _issue = issue$1;
					if (_issue.fatal) _issue.continue = false;
					_issue.code ?? (_issue.code = "custom");
					_issue.input ?? (_issue.input = payload.value);
					_issue.inst ?? (_issue.inst = ch);
					_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
					payload.issues.push(issue(_issue));
				}
			};
			return fn(payload.value, payload);
		});
		return ch;
	}
	function _instanceof(cls, params = { error: `Input not instance of ${cls.name}` }) {
		const inst = new ZodCustom({
			type: "custom",
			check: "custom",
			fn: (data) => data instanceof cls,
			abort: true,
			...normalizeParams(params)
		});
		inst._zod.bag.Class = cls;
		return inst;
	}
	var stringbool = (...args) => _stringbool({
		Pipe: ZodPipe,
		Boolean: ZodBoolean,
		String: ZodString,
		Transform: ZodTransform
	}, ...args);
	function json(params) {
		const jsonSchema = lazy(() => {
			return union([
				string$1(params),
				number$1(),
				boolean$1(),
				_null(),
				array(jsonSchema),
				record(string$1(), jsonSchema)
			]);
		});
		return jsonSchema;
	}
	function preprocess(fn, schema) {
		return pipe(transform(fn), schema);
	}

//#endregion
//#region node_modules/zod/v4/classic/compat.js
/** @deprecated Use the raw string literal codes instead, e.g. "invalid_type". */
	var ZodIssueCode = {
		invalid_type: "invalid_type",
		too_big: "too_big",
		too_small: "too_small",
		invalid_format: "invalid_format",
		not_multiple_of: "not_multiple_of",
		unrecognized_keys: "unrecognized_keys",
		invalid_union: "invalid_union",
		invalid_key: "invalid_key",
		invalid_element: "invalid_element",
		invalid_value: "invalid_value",
		custom: "custom"
	};
	/** @deprecated Use `z.config(params)` instead. */
	function setErrorMap(map) {
		config({ customError: map });
	}
	/** @deprecated Use `z.config()` instead. */
	function getErrorMap() {
		return config().customError;
	}

//#endregion
//#region node_modules/zod/v4/classic/coerce.js
	var coerce_exports = /* @__PURE__ */ __exportAll({
		bigint: () => bigint,
		boolean: () => boolean,
		date: () => date,
		number: () => number,
		string: () => string
	});
	function string(params) {
		return _coercedString(ZodString, params);
	}
	function number(params) {
		return _coercedNumber(ZodNumber, params);
	}
	function boolean(params) {
		return _coercedBoolean(ZodBoolean, params);
	}
	function bigint(params) {
		return _coercedBigint(ZodBigInt, params);
	}
	function date(params) {
		return _coercedDate(ZodDate, params);
	}

//#endregion
//#region node_modules/zod/v4/classic/external.js
	var external_exports = /* @__PURE__ */ __exportAll({
		$brand: () => $brand,
		$input: () => $input,
		$output: () => $output,
		NEVER: () => NEVER,
		TimePrecision: () => TimePrecision,
		ZodAny: () => ZodAny,
		ZodArray: () => ZodArray,
		ZodBase64: () => ZodBase64,
		ZodBase64URL: () => ZodBase64URL,
		ZodBigInt: () => ZodBigInt,
		ZodBigIntFormat: () => ZodBigIntFormat,
		ZodBoolean: () => ZodBoolean,
		ZodCIDRv4: () => ZodCIDRv4,
		ZodCIDRv6: () => ZodCIDRv6,
		ZodCUID: () => ZodCUID,
		ZodCUID2: () => ZodCUID2,
		ZodCatch: () => ZodCatch,
		ZodCustom: () => ZodCustom,
		ZodCustomStringFormat: () => ZodCustomStringFormat,
		ZodDate: () => ZodDate,
		ZodDefault: () => ZodDefault,
		ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
		ZodE164: () => ZodE164,
		ZodEmail: () => ZodEmail,
		ZodEmoji: () => ZodEmoji,
		ZodEnum: () => ZodEnum,
		ZodError: () => ZodError,
		ZodFile: () => ZodFile,
		ZodGUID: () => ZodGUID,
		ZodIPv4: () => ZodIPv4,
		ZodIPv6: () => ZodIPv6,
		ZodISODate: () => ZodISODate,
		ZodISODateTime: () => ZodISODateTime,
		ZodISODuration: () => ZodISODuration,
		ZodISOTime: () => ZodISOTime,
		ZodIntersection: () => ZodIntersection,
		ZodIssueCode: () => ZodIssueCode,
		ZodJWT: () => ZodJWT,
		ZodKSUID: () => ZodKSUID,
		ZodLazy: () => ZodLazy,
		ZodLiteral: () => ZodLiteral,
		ZodMap: () => ZodMap,
		ZodNaN: () => ZodNaN,
		ZodNanoID: () => ZodNanoID,
		ZodNever: () => ZodNever,
		ZodNonOptional: () => ZodNonOptional,
		ZodNull: () => ZodNull,
		ZodNullable: () => ZodNullable,
		ZodNumber: () => ZodNumber,
		ZodNumberFormat: () => ZodNumberFormat,
		ZodObject: () => ZodObject,
		ZodOptional: () => ZodOptional,
		ZodPipe: () => ZodPipe,
		ZodPrefault: () => ZodPrefault,
		ZodPromise: () => ZodPromise,
		ZodReadonly: () => ZodReadonly,
		ZodRealError: () => ZodRealError,
		ZodRecord: () => ZodRecord,
		ZodSet: () => ZodSet,
		ZodString: () => ZodString,
		ZodStringFormat: () => ZodStringFormat,
		ZodSuccess: () => ZodSuccess,
		ZodSymbol: () => ZodSymbol,
		ZodTemplateLiteral: () => ZodTemplateLiteral,
		ZodTransform: () => ZodTransform,
		ZodTuple: () => ZodTuple,
		ZodType: () => ZodType,
		ZodULID: () => ZodULID,
		ZodURL: () => ZodURL,
		ZodUUID: () => ZodUUID,
		ZodUndefined: () => ZodUndefined,
		ZodUnion: () => ZodUnion,
		ZodUnknown: () => ZodUnknown,
		ZodVoid: () => ZodVoid,
		ZodXID: () => ZodXID,
		_ZodString: () => _ZodString,
		_default: () => _default,
		any: () => any,
		array: () => array,
		base64: () => base64,
		base64url: () => base64url,
		bigint: () => bigint$1,
		boolean: () => boolean$1,
		catch: () => _catch,
		check: () => check,
		cidrv4: () => cidrv4,
		cidrv6: () => cidrv6,
		clone: () => clone,
		coerce: () => coerce_exports,
		config: () => config,
		core: () => core_exports,
		cuid: () => cuid,
		cuid2: () => cuid2,
		custom: () => custom,
		date: () => date$1,
		discriminatedUnion: () => discriminatedUnion,
		e164: () => e164,
		email: () => email,
		emoji: () => emoji,
		endsWith: () => _endsWith,
		enum: () => _enum,
		file: () => file,
		flattenError: () => flattenError,
		float32: () => float32,
		float64: () => float64,
		formatError: () => formatError,
		function: () => _function,
		getErrorMap: () => getErrorMap,
		globalRegistry: () => globalRegistry,
		gt: () => _gt,
		gte: () => _gte,
		guid: () => guid,
		includes: () => _includes,
		instanceof: () => _instanceof,
		int: () => int,
		int32: () => int32,
		int64: () => int64,
		intersection: () => intersection,
		ipv4: () => ipv4,
		ipv6: () => ipv6,
		iso: () => iso_exports,
		json: () => json,
		jwt: () => jwt,
		keyof: () => keyof,
		ksuid: () => ksuid,
		lazy: () => lazy,
		length: () => _length,
		literal: () => literal,
		locales: () => locales_exports,
		looseObject: () => looseObject,
		lowercase: () => _lowercase,
		lt: () => _lt,
		lte: () => _lte,
		map: () => map,
		maxLength: () => _maxLength,
		maxSize: () => _maxSize,
		mime: () => _mime,
		minLength: () => _minLength,
		minSize: () => _minSize,
		multipleOf: () => _multipleOf,
		nan: () => nan,
		nanoid: () => nanoid,
		nativeEnum: () => nativeEnum,
		negative: () => _negative,
		never: () => never,
		nonnegative: () => _nonnegative,
		nonoptional: () => nonoptional,
		nonpositive: () => _nonpositive,
		normalize: () => _normalize,
		null: () => _null,
		nullable: () => nullable,
		nullish: () => nullish,
		number: () => number$1,
		object: () => object,
		optional: () => optional,
		overwrite: () => _overwrite,
		parse: () => parse,
		parseAsync: () => parseAsync,
		partialRecord: () => partialRecord,
		pipe: () => pipe,
		positive: () => _positive,
		prefault: () => prefault,
		preprocess: () => preprocess,
		prettifyError: () => prettifyError,
		promise: () => promise,
		property: () => _property,
		readonly: () => readonly,
		record: () => record,
		refine: () => refine,
		regex: () => _regex,
		regexes: () => regexes_exports,
		registry: () => registry,
		safeParse: () => safeParse,
		safeParseAsync: () => safeParseAsync,
		set: () => set,
		setErrorMap: () => setErrorMap,
		size: () => _size,
		startsWith: () => _startsWith,
		strictObject: () => strictObject,
		string: () => string$1,
		stringFormat: () => stringFormat,
		stringbool: () => stringbool,
		success: () => success,
		superRefine: () => superRefine,
		symbol: () => symbol,
		templateLiteral: () => templateLiteral,
		toJSONSchema: () => toJSONSchema,
		toLowerCase: () => _toLowerCase,
		toUpperCase: () => _toUpperCase,
		transform: () => transform,
		treeifyError: () => treeifyError,
		trim: () => _trim,
		tuple: () => tuple,
		uint32: () => uint32,
		uint64: () => uint64,
		ulid: () => ulid,
		undefined: () => _undefined,
		union: () => union,
		unknown: () => unknown,
		uppercase: () => _uppercase,
		url: () => url,
		uuid: () => uuid,
		uuidv4: () => uuidv4,
		uuidv6: () => uuidv6,
		uuidv7: () => uuidv7,
		void: () => _void,
		xid: () => xid
	});
	config(en_default());

//#endregion
//#region packages/packages/libs/schema/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		z: () => external_exports$1,
		z4: () => external_exports
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).schema = src_exports;

//#endregion
})();
window.elementorV2.schema?.init?.();
//# sourceMappingURL=schema.js.map