import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Check, f as ArrowRight, i as MessageCircle, s as Mail, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as siteData, i as WhatsAppButton, n as Footer, r as Header, t as Button } from "./SiteChrome-CmBWCWJW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DL9n7lhY.js
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate flex min-h-[720px] items-center overflow-hidden pt-18 text-primary-foreground sm:min-h-[760px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: siteData.hero.image,
				alt: "Modern textile manufacturing floor with cotton fabric rolls",
				width: "1920",
				height: "1088",
				className: "absolute inset-0 -z-20 size-full object-cover",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-hero-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-7xl px-5 py-24 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-soft px-4 py-2 text-xs font-semibold uppercase tracking-widest text-hero-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent" }), siteData.hero.eyebrow]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl",
							children: siteData.hero.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg",
							children: siteData.hero.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "accent",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/products",
									children: [siteData.hero.primaryCta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "heroOutline",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: siteData.contact.whatsappHref,
									target: "_blank",
									rel: "noreferrer",
									children: siteData.hero.secondaryCta
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#about",
				"aria-label": "Scroll to company introduction",
				className: "absolute bottom-7 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-hero-border text-hero-muted transition-colors hover:text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5" })
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Company highlights",
		className: "border-b border-border bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8",
			children: siteData.stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-border px-3 py-9 text-center even:border-l lg:border-l lg:first:border-l-0 lg:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "block font-display text-3xl text-primary sm:text-4xl",
					children: stat.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-[11px] font-bold uppercase tracking-widest text-muted-foreground",
					children: stat.label
				})]
			}, stat.label))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: siteData.about.image,
					alt: `${siteData.company.name} team inspecting cotton fabric`,
					width: "1600",
					height: "1008",
					loading: "lazy",
					className: "aspect-[4/3] w-full rounded-lg object-cover shadow-image"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 right-5 rounded-md bg-primary px-6 py-5 text-primary-foreground shadow-panel sm:right-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-display text-3xl",
						children: "Quality"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs font-bold uppercase tracking-widest text-hero-muted",
						children: "at every stage"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: siteData.about.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title mt-4",
					children: siteData.about.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-7 text-muted-foreground",
					children: siteData.company.story
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-7 text-muted-foreground",
					children: siteData.about.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: siteData.about.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "flex items-center gap-2 font-display text-lg font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-5 place-items-center rounded-full bg-accent-soft text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" })
							}), point.title]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: point.text
						})]
					}, point.title))
				})
			] })]
		})
	});
}
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "products",
		className: "pattern-grid bg-secondary py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Our Product Range"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title mt-4",
					children: "Made for hospitality, retail, and trade."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm leading-6 text-muted-foreground",
					children: "Flexible specifications and dependable bulk production for buyers who value consistent quality."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: siteData.products.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `group overflow-hidden rounded-lg border border-border bg-card shadow-card ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							width: "1200",
							height: "912",
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full bg-hero-surface/85 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-sm",
							children: product.category
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 min-h-12 text-sm leading-6 text-muted-foreground",
								children: product.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: siteData.contact.whatsappHref,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary",
								children: ["Discuss an order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				}, product.id))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "bg-primary py-20 text-primary-foreground sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent-bright",
							children: siteData.process.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl font-semibold sm:text-5xl",
							children: siteData.process.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 leading-7 text-hero-muted",
							children: siteData.process.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 overflow-hidden rounded-lg border border-hero-border shadow-deep",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: siteData.process.video,
						poster: siteData.process.poster,
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						controls: true,
						preload: "metadata",
						"aria-label": `${siteData.company.name} manufacturing process video`,
						className: "aspect-video w-full bg-black object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 border-t border-hero-border bg-primary px-5 py-4 sm:px-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold uppercase tracking-widest text-hero-muted",
							children: siteData.process.caption
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-hero-muted",
							children: "Karachi · Pakistan"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: siteData.values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 border-t border-hero-border pt-4 text-sm text-hero-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-accent-bright" }), value]
					}, value))
				})
			]
		})
	});
}
function ContactBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-accent py-14 text-accent-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-bold uppercase tracking-widest opacity-70",
				children: "New contracts welcome"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
				children: "Let’s discuss your next textile order."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "dark",
					size: "xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: siteData.contact.whatsappHref,
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "WhatsApp Us"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "accentOutline",
					size: "xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: siteData.contact.emailHref,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), "Send an Email"]
					})
				})]
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Products, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactBand, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
	] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Index as component };
