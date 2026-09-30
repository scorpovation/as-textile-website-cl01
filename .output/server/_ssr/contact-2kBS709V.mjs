import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Clock, i as MessageCircle, l as CircleQuestionMark, n as ShieldCheck, o as MapPin, r as Phone, s as Mail } from "../_libs/lucide-react.mjs";
import { a as siteData, i as WhatsAppButton, n as Footer, r as Header, t as Button } from "./SiteChrome-5Y0BAHtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-2kBS709V.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const contact = siteData.contact;
	const page = siteData.contactPage || {
		eyebrow: "Direct Buyer Inquiries",
		title: "Get in Touch with Our Karachi Export Team",
		description: "We are currently open to new bulk orders, contract manufacturing, and international buyer inquiries. Connect directly with our team via WhatsApp, phone, or email.",
		directNoticeTitle: "No Web Forms — Direct Communication Only",
		directNoticeText: "To process your order specifications immediately without delay, we do not require any online form submissions. Reach out directly via WhatsApp, Phone, or Email to speak with our export specialists.",
		officeHours: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT)",
		faqs: [
			{
				question: "How do I request a custom product quote?",
				answer: "Send your product type (e.g., Bath Towels, Cabana Towels, Cotton Fabric), required dimensions, GSM, and target quantity directly via WhatsApp or Email."
			},
			{
				question: "Do you supply samples for international buyers?",
				answer: "Yes, sample towels and fabric swatches can be dispatched upon request for serious commercial buyers."
			},
			{
				question: "Where are your manufacturing operations based?",
				answer: "Our operations are situated in North Karachi Industrial Area, Karachi, Pakistan, offering direct access to Karachi port facilities for export shipping."
			},
			{
				question: "What contract quantities do you support?",
				answer: "We specialize in bulk-quantity orders and ongoing private-label contract manufacturing for hospitality, retail, and global trade."
			}
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-primary pb-20 pt-36 text-primary-foreground sm:pb-24 sm:pt-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pattern-grid absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-5 text-center lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent-bright",
							children: page.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
							children: page.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg",
							children: page.description
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "-mt-10 relative z-10 mx-auto max-w-7xl px-5 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col justify-between overflow-hidden rounded-xl border border-accent/40 bg-card p-7 shadow-panel transition-all hover:-translate-y-1 hover:border-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 right-4 rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold text-accent uppercase tracking-wider",
									children: "Fastest Response"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-12 place-items-center rounded-lg bg-accent/15 text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-5 font-display text-xl font-semibold text-card-foreground",
										children: "WhatsApp Direct"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Chat instantly with our export sales team for instant quotes, specifications & media."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 font-mono text-base font-semibold text-primary",
										children: contact.whatsapp
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "accent",
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: contact.whatsappHref,
											target: "_blank",
											rel: "noreferrer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " Chat on WhatsApp"]
										})
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-12 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-xl font-semibold text-card-foreground",
									children: "Phone / Call Direct"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Speak directly with our Karachi office for urgent order inquiries and bulk discussions."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 font-mono text-base font-semibold text-primary",
									children: contact.phone
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: contact.phoneHref,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), " Call Now"]
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 md:col-span-2 lg:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-12 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-xl font-semibold text-card-foreground",
									children: "Email Inquiry"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Send your purchase orders, tech packs, or RFQs for detailed commercial quotes."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 font-mono text-base font-semibold text-primary",
									children: contact.email
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: contact.emailHref,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), " Send Email"]
									})
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start gap-6 rounded-2xl border border-border bg-secondary/60 p-8 sm:p-10 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-12 shrink-0 place-items-center rounded-full bg-accent-soft text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold text-foreground",
								children: page.directNoticeTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground",
								children: page.directNoticeText
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "accent",
							size: "lg",
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: contact.whatsappHref,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " Start Direct Chat"]
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/30 py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Production Hub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-title mt-3",
								children: "Our Karachi Office & Facility"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-7 text-muted-foreground",
								children: "Strategically situated in North Karachi Industrial Area for efficient manufacturing, quality control, and seaport dispatch."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-foreground",
										children: "Physical Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: contact.address
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-foreground",
										children: "Operating Hours"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: page.officeHours
									})] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-lg border border-border bg-card p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider text-accent",
									children: "Buyer Visits"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "We welcome quality audits and scheduled facility visits for prospective commercial clients. Please coordinate with us via WhatsApp prior to visiting."
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-border bg-card shadow-panel",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "AS Textile Location Map",
								src: contact.mapEmbed,
								className: "h-[400px] w-full border-0 lg:h-[480px]",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade",
								allowFullScreen: true
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Buyer Questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto mt-3 font-display text-3xl font-semibold sm:text-4xl",
							children: "Frequently Asked Contact Questions"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2",
						children: page.faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "flex items-start gap-3 font-display text-lg font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "mt-1 size-5 shrink-0 text-accent" }), faq.question]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: faq.answer
							})]
						}, index))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-accent py-14 text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Ready to place a bulk order?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm opacity-90",
						children: "Contact our Karachi sales team on WhatsApp for immediate response."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "dark",
						size: "xl",
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.whatsappHref,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), " Request a Quote"]
						})
					})]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
	] });
}
var SplitComponent = ContactPage;
//#endregion
export { SplitComponent as component };
