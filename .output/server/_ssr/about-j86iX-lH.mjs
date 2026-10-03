import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Check, i as MessageCircle } from "../_libs/lucide-react.mjs";
import { a as siteData, i as WhatsAppButton, n as Footer, r as Header, t as Button } from "./SiteChrome-BvIDQHcp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-j86iX-lH.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const page = siteData.about.page;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-primary pb-20 pt-36 text-primary-foreground sm:pb-24 sm:pt-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-grid absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_0.55fr] lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent-bright",
							children: siteData.about.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl",
							children: page.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg",
							children: siteData.company.story
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: siteData.company.logo,
							alt: `${siteData.company.name} logo`,
							className: "mx-auto w-full max-w-xs object-contain drop-shadow-2xl sm:max-w-sm lg:max-w-md"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: page.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-4",
							children: page.missionTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-7 text-muted-foreground",
							children: page.introduction
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-7 text-muted-foreground",
							children: page.missionText
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid grid-cols-3 border-y border-border",
							children: page.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-border px-3 py-6 first:border-l-0 sm:px-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block font-display text-xl text-primary sm:text-2xl",
									children: item.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted-foreground",
									children: item.label
								})]
							}, item.label))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-lg bg-hero-surface shadow-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: siteData.process.video,
							poster: siteData.process.poster,
							autoPlay: true,
							muted: true,
							loop: true,
							playsInline: true,
							controls: true,
							preload: "metadata",
							"aria-label": page.videoTitle,
							className: "aspect-[4/3] w-full bg-black object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold",
								children: page.videoTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-hero-muted",
								children: page.videoCaption
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pattern-grid bg-secondary py-20 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: siteData.about.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2",
						children: siteData.about.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border-t border-border pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "flex items-center gap-3 font-display text-2xl font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-7 place-items-center rounded-full bg-accent-soft text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
								}), point.title]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-lg text-sm leading-6 text-muted-foreground",
								children: point.text
							})]
						}, point.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-accent py-14 text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-2xl font-display text-3xl font-semibold",
						children: siteData.productsPage.orderTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
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
var SplitComponent = AboutPage;
//#endregion
export { SplitComponent as component };
