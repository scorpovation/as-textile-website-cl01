globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/as-textile-logo.jpg": {
		"type": "image/jpeg",
		"etag": "\"48902-xlP+zqxQVWgi7wOMoumDTXcoAdQ\"",
		"mtime": "2026-09-15T10:03:04.913Z",
		"size": 297218,
		"path": "../public/as-textile-logo.jpg"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"37499-/v6kFnadxsYxRJ32hrflYkzSbPM\"",
		"mtime": "2026-09-18T19:42:10.417Z",
		"size": 226457,
		"path": "../public/favicon.png"
	},
	"/og-image.jpg": {
		"type": "image/jpeg",
		"etag": "\"c387-/drxwMc0nCbELGf6tlcKSTIAGEg\"",
		"mtime": "2026-09-30T19:45:32.813Z",
		"size": 50055,
		"path": "../public/og-image.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"d1-3LQEeJ/W1f3N/WLuPIMcK0MUQcY\"",
		"mtime": "2026-09-30T19:59:04.286Z",
		"size": 209,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"181-/TNmJwZsX/2v/lexOiZcnK0lhuY\"",
		"mtime": "2026-09-30T19:59:03.537Z",
		"size": 385,
		"path": "../public/sitemap.xml"
	},
	"/assets/about-jqR3GuKg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ff9-J7iXomDlu/CNBpoElDjk2b+RHFE\"",
		"mtime": "2026-10-03T07:41:07.171Z",
		"size": 4089,
		"path": "../public/assets/about-jqR3GuKg.js"
	},
	"/assets/arrow-right-Ci17dMGr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-E3Q7wCQpotFWkwF1kdPob20E5uE\"",
		"mtime": "2026-10-03T07:41:07.172Z",
		"size": 159,
		"path": "../public/assets/arrow-right-Ci17dMGr.js"
	},
	"/assets/as-bar-mop-towels-2nea7gBK.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13800-7SycK8HzE/Dm8DqwYh79B2nf3ug\"",
		"mtime": "2026-10-03T07:41:07.174Z",
		"size": 79872,
		"path": "../public/assets/as-bar-mop-towels-2nea7gBK.jpeg"
	},
	"/assets/as-bath-towels-Cv_4W4kC.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13800-K1Weapg2CQmmmIG+jRD0rzY7o9k\"",
		"mtime": "2026-10-03T07:41:07.174Z",
		"size": 79872,
		"path": "../public/assets/as-bath-towels-Cv_4W4kC.jpeg"
	},
	"/assets/as-cabana-towels-a1WPvw93.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13800-FGlltsF1H1LpkQ7+ZeZnjCkxELI\"",
		"mtime": "2026-10-03T07:41:07.175Z",
		"size": 79872,
		"path": "../public/assets/as-cabana-towels-a1WPvw93.jpeg"
	},
	"/assets/as-cotton-fabric-BSIrtrKQ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13800-OY9SwoD15VGJsJ6lbjnUy8XqyUA\"",
		"mtime": "2026-10-03T07:41:07.176Z",
		"size": 79872,
		"path": "../public/assets/as-cotton-fabric-BSIrtrKQ.jpeg"
	},
	"/assets/as-face-towels-BAYAVtOp.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13800-z0ex9l0b3T6kMdwgOYsD+7XGAxE\"",
		"mtime": "2026-10-03T07:41:07.177Z",
		"size": 79872,
		"path": "../public/assets/as-face-towels-BAYAVtOp.jpeg"
	},
	"/assets/as-hand-towels-Ccgqym6T.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13800-oCttkAp8s1Cc/x0Oo6QaD4wzTEE\"",
		"mtime": "2026-10-03T07:41:07.177Z",
		"size": 79872,
		"path": "../public/assets/as-hand-towels-Ccgqym6T.jpeg"
	},
	"/assets/as-textile-logo-BHR61hya.png": {
		"type": "image/png",
		"etag": "\"3746d-UrZfxYw8ZElSEBMiYo6YF9yMteM\"",
		"mtime": "2026-10-03T07:41:07.178Z",
		"size": 226413,
		"path": "../public/assets/as-textile-logo-BHR61hya.png"
	},
	"/assets/check-CFILw76L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-1PtcFPgq5S+WulOKClHPk3rJ//I\"",
		"mtime": "2026-10-03T07:41:07.172Z",
		"size": 118,
		"path": "../public/assets/check-CFILw76L.js"
	},
	"/assets/contact-DdRD0r-g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b47-kegXYELVqMoaGt1kZowX/8jQ3b4\"",
		"mtime": "2026-10-03T07:41:07.172Z",
		"size": 11079,
		"path": "../public/assets/contact-DdRD0r-g.js"
	},
	"/assets/products-CJcbTKxv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b75-9HaYlLPMdA/MIQFWIjNp5Y+sChM\"",
		"mtime": "2026-10-03T07:41:07.173Z",
		"size": 2933,
		"path": "../public/assets/products-CJcbTKxv.js"
	},
	"/assets/index-CBznsmaw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5dd01-9s71OUIjO92UR9NZeGExGLLZHeQ\"",
		"mtime": "2026-10-03T07:41:07.170Z",
		"size": 384257,
		"path": "../public/assets/index-CBznsmaw.js"
	},
	"/assets/routes-BLwD9NN2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23d4-WcNPrThFV4Gk4E4uV26eecg9cB0\"",
		"mtime": "2026-10-03T07:41:07.174Z",
		"size": 9172,
		"path": "../public/assets/routes-BLwD9NN2.js"
	},
	"/assets/sa-quality-BipOTXFo.jpg": {
		"type": "image/jpeg",
		"etag": "\"13800-QLPsVz9Ngk0Sms6czimUzzNhjxY\"",
		"mtime": "2026-10-03T07:41:07.209Z",
		"size": 79872,
		"path": "../public/assets/sa-quality-BipOTXFo.jpg"
	},
	"/assets/sa-textile-hero-DVR-Dl3S.jpg": {
		"type": "image/jpeg",
		"etag": "\"13800-ORrkussKfMd2+dgup8Ekm0IlUQU\"",
		"mtime": "2026-10-03T07:41:07.210Z",
		"size": 79872,
		"path": "../public/assets/sa-textile-hero-DVR-Dl3S.jpg"
	},
	"/assets/sa-video-poster-DO3Z03YL.jpg": {
		"type": "image/jpeg",
		"etag": "\"13800-3/2FbtInq13zi/xq14ZwJm7bTRU\"",
		"mtime": "2026-10-03T07:41:07.210Z",
		"size": 79872,
		"path": "../public/assets/sa-video-poster-DO3Z03YL.jpg"
	},
	"/assets/SiteChrome-C00lqmZ6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b6b7-F/GL9zvd364z5l0L44yb+gMR1mA\"",
		"mtime": "2026-10-03T07:41:07.170Z",
		"size": 46775,
		"path": "../public/assets/SiteChrome-C00lqmZ6.js"
	},
	"/as-textile-logo.png": {
		"type": "image/png",
		"etag": "\"f2f1f-qkqFs9jbsYcxYHwZnippg/bgj2Q\"",
		"mtime": "2026-09-15T10:08:35.866Z",
		"size": 995103,
		"path": "../public/as-textile-logo.png"
	},
	"/assets/styles-BCOVBIhh.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"154f3-HcL4NTDq+jd1HnQbASuJalun1z4\"",
		"mtime": "2026-10-03T07:41:07.211Z",
		"size": 87283,
		"path": "../public/assets/styles-BCOVBIhh.css"
	},
	"/assets/as-textile-process-video-BjLaTQJ5.mp4": {
		"type": "video/mp4",
		"etag": "\"1794a4a-fdQt3dGkcCahYDSfrpO/rGh0Xak\"",
		"mtime": "2026-10-03T07:41:07.208Z",
		"size": 24726090,
		"path": "../public/assets/as-textile-process-video-BjLaTQJ5.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_9P_I55 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_9P_I55
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
