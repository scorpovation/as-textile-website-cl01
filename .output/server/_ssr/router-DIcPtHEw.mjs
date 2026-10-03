import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DIcPtHEw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BCOVBIhh.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var businessStructuredData = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "AS Textile",
	url: "https://www.astextiles.com/",
	logo: "https://www.astextiles.com/as-textile-logo.png",
	telephone: "+92 314 3065 816",
	description: "Karachi-based supplier of bulk cotton towels and cotton fabric for hospitality, retail, and international buyers.",
	address: {
		"@type": "PostalAddress",
		streetAddress: "CI-33 Sector 6-B, North Karachi Industrial Area",
		addressLocality: "Karachi",
		addressRegion: "Sindh",
		addressCountry: "PK"
	}
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "AS Textile"
			},
			{
				property: "og:site_name",
				content: "AS Textile"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				property: "og:url",
				content: "https://www.astextiles.com/"
			},
			{
				property: "og:image",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:secure_url",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:type",
				content: "image/jpeg"
			},
			{
				property: "og:image:alt",
				content: "AS Textile - Quality Crafted for Global Business"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:image",
				content: "https://www.astextiles.com/og-image.jpg"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(businessStructuredData) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$3 = () => import("./routes-WReIWoqI.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "AS Textile | Export Textiles from Karachi" },
			{
				name: "description",
				content: "AS Textile supplies export-class towels and cotton fabric from Karachi for bulk orders, hospitality, retail, and trade."
			},
			{
				name: "robots",
				content: "index,follow"
			},
			{
				property: "og:title",
				content: "AS Textile | Export Textiles from Karachi"
			},
			{
				property: "og:description",
				content: "Export-class towels and cotton fabrics for quality-focused buyers worldwide."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.astextiles.com/"
			},
			{
				property: "og:image",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:secure_url",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AS Textile - Quality Crafted for Global Business"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "AS Textile | Export Textiles from Karachi"
			},
			{
				name: "twitter:description",
				content: "Export-class towels and cotton fabrics for quality-focused buyers worldwide."
			},
			{
				name: "twitter:image",
				content: "https://www.astextiles.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.astextiles.com/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-j86iX-lH.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About AS Textile | Karachi Textile Manufacturer" },
			{
				name: "description",
				content: "Learn about AS Textile, a Karachi-based supplier of export-class towels and cotton fabrics for bulk and international orders."
			},
			{
				property: "og:title",
				content: "About AS Textile | Karachi Textile Manufacturer"
			},
			{
				property: "og:description",
				content: "A dependable Karachi textile partner for quality-focused buyers worldwide."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.astextiles.com/about"
			},
			{
				property: "og:image",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:secure_url",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "About AS Textile - Quality Crafted for Global Business"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "About AS Textile | Karachi Textile Manufacturer"
			},
			{
				name: "twitter:description",
				content: "A dependable Karachi textile partner for quality-focused buyers worldwide."
			},
			{
				name: "twitter:image",
				content: "https://www.astextiles.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.astextiles.com/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contact-Drmg4jup.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact AS Textile | Karachi Textile Manufacturer" },
			{
				name: "description",
				content: "Contact AS Textile in Pakistan, Karachi for export towels, bulk cotton fabric orders, email, phone, and WhatsApp contact details."
			},
			{
				property: "og:title",
				content: "Contact AS Textile | Karachi Textile Manufacturer"
			},
			{
				property: "og:description",
				content: "Direct phone, email, WhatsApp, and facility location for AS Textile in Karachi, Pakistan."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.astextiles.com/contact"
			},
			{
				property: "og:image",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:secure_url",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "Contact AS Textile - Karachi, Pakistan"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Contact AS Textile | Karachi Textile Manufacturer"
			},
			{
				name: "twitter:description",
				content: "Direct phone, email, WhatsApp, and facility location for AS Textile in Karachi, Pakistan."
			},
			{
				name: "twitter:image",
				content: "https://www.astextiles.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.astextiles.com/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products-BTH8y1Os.mjs");
var Route = createFileRoute("/products")({
	head: () => ({
		meta: [
			{ title: "Wholesale Towels & Cotton Fabric | AS Textile Pakistan" },
			{
				name: "description",
				content: "Source bulk cotton bath, hand, face, cabana, and bar mop towels plus cotton fabric from AS Textile in Karachi, Pakistan."
			},
			{
				property: "og:title",
				content: "Wholesale Towels & Cotton Fabric | AS Textile Pakistan"
			},
			{
				property: "og:description",
				content: "Bulk cotton towels and cotton fabric for hospitality, retail, and trade buyers, supplied from Karachi, Pakistan."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://www.astextiles.com/products"
			},
			{
				property: "og:image",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:secure_url",
				content: "https://www.astextiles.com/og-image.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:image:alt",
				content: "AS Textile Products - Export Towels & Cotton Fabric"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Textile Products | Towels & Cotton Fabric"
			},
			{
				name: "twitter:description",
				content: "Export-class towels and cotton fabrics made for commercial-scale orders."
			},
			{
				name: "twitter:image",
				content: "https://www.astextiles.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://www.astextiles.com/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute: Route$2.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$4
	}),
	ContactRoute: Route$1.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$4
	}),
	ProductsRoute: Route.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
