import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Check, f as ArrowRight, i as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as siteData, i as WhatsAppButton, n as Footer, r as Header, t as Button } from "./SiteChrome-5Y0BAHtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-D01i7ExH.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const page = siteData.productsPage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-primary pb-20 pt-36 text-primary-foreground sm:pb-24 sm:pt-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-grid absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-5 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent-bright",
							children: page.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl",
							children: page.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg",
							children: page.description
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pattern-grid bg-secondary py-20 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl space-y-8 px-5 lg:px-8",
					children: siteData.products.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid overflow-hidden rounded-lg border border-border bg-card shadow-card lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: index % 2 ? "lg:order-2" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: product.name,
								className: "h-full min-h-72 w-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-center p-7 sm:p-10 lg:p-14",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: product.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl font-semibold sm:text-4xl",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-7 text-muted-foreground",
									children: product.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3",
									children: product.details.map((detail) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-accent" }), detail]
									}, detail))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: siteData.contact.whatsappHref,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary",
									children: ["Discuss this product ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						})]
					}, product.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-accent py-16 text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold sm:text-4xl",
						children: page.orderTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-6 opacity-80",
						children: page.orderText
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "dark",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: siteData.contact.whatsappHref,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "Request a Quote"]
						})
					})]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
	] });
}
var SplitComponent = ProductsPage;
//#endregion
export { SplitComponent as component };
