import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Menu, i as MessageCircle, o as MapPin, r as Phone, s as Mail, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteChrome-5Y0BAHtG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			accent: "bg-accent text-accent-foreground shadow hover:bg-accent/90",
			dark: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			heroOutline: "border border-hero-border bg-hero-soft text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground hover:text-primary",
			heroGhost: "text-primary-foreground hover:bg-hero-soft",
			accentOutline: "border border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground hover:text-accent",
			play: "rounded-full bg-accent text-accent-foreground shadow-deep hover:bg-accent/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			xl: "h-12 rounded-md px-6 text-sm",
			play: "size-16 rounded-full p-0 sm:size-20",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var siteData = {
	company: {
		name: "AS Textile",
		shortName: "AS",
		location: "Karachi, Pakistan",
		address: "Karachi, Pakistan",
		story: "AS Textile is based in Karachi, Pakistan, specializing in export-class textile products and bulk-quantity orders. We are currently open to new orders and welcome new contracts with quality-focused clients.",
		logo: "/assets/as-textile-logo-BHR61hya.png"
	},
	contact: {
		phone: "+92 314 3065 816",
		phoneHref: "tel:+923143065816",
		whatsapp: "+92 314 3065 816",
		whatsappHref: "https://wa.me/923143065816",
		email: "info@dummy.com",
		emailHref: "mailto:info@satextile.com",
		address: "CI-33 Sector 6-B North Karachi Industrial Area, Karachi",
		mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3616.0987787287327!2d67.08570467537534!3d24.99675927784056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU5JzQ4LjMiTiA2N8KwMDUnMTcuOCJF!5e0!3m2!1sen!2s!4v1789760742399!5m2!1sen!2s"
	},
	contactPage: {
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
	},
	navigation: [
		{
			label: "Home",
			href: "/"
		},
		{
			label: "About",
			href: "/about"
		},
		{
			label: "Products",
			href: "/products"
		},
		{
			label: "Our Process",
			href: "/#process"
		},
		{
			label: "Contact",
			href: "/contact"
		}
	],
	hero: {
		eyebrow: "Made in Pakistan · Delivered Worldwide",
		title: "AS Textile, Quality Crafted for Global Business.",
		description: "Premium towels and cotton fabrics manufactured for bulk orders, private labels, hospitality, and international buyers.",
		image: "/assets/sa-textile-hero-DVR-Dl3S.jpg",
		primaryCta: "Explore Products",
		secondaryCta: "Talk to Our Team"
	},
	stats: [
		{
			value: "Export",
			label: "Class Quality"
		},
		{
			value: "Bulk",
			label: "Order Ready"
		},
		{
			value: "Karachi",
			label: "Manufacturing Base"
		},
		{
			value: "Global",
			label: "Client Focus"
		}
	],
	about: {
		eyebrow: "About AS Textile",
		title: "Built around quality, consistency, and dependable supply.",
		text: "From careful material selection to final inspection, our production is shaped for buyers who need reliable quality at commercial scale.",
		image: "/assets/sa-quality-BipOTXFo.jpg",
		points: [
			{
				title: "Quality First",
				text: "Careful inspection throughout production and before dispatch."
			},
			{
				title: "Bulk Capability",
				text: "Production planned for consistent, large-quantity requirements."
			},
			{
				title: "Flexible Supply",
				text: "Product specifications tailored for hospitality, retail, and trade."
			},
			{
				title: "Export Mindset",
				text: "Clear communication and buyer-focused production standards."
			}
		],
		page: {
			eyebrow: "Made in Pakistan · Built for Global Buyers",
			title: "A dependable textile partner for quality-led businesses.",
			introduction: "We combine hands-on production oversight with a practical understanding of commercial textile requirements. Every order begins with the buyer’s specification and is managed for consistency from material selection through final inspection.",
			videoTitle: "Inside AS Textile",
			videoCaption: "A look inside our operations",
			missionTitle: "Our approach to every order",
			missionText: "Clear communication, dependable planning, and consistent output guide the way we work with hospitality groups, retailers, distributors, and private-label buyers.",
			highlights: [
				{
					value: "Karachi",
					label: "Production base"
				},
				{
					value: "Bulk",
					label: "Order capability"
				},
				{
					value: "Export",
					label: "Quality focus"
				}
			]
		}
	},
	products: [
		{
			id: "bath-towels",
			name: "Bath Towels",
			category: "Terry Towels",
			description: "Soft, absorbent cotton towels for hospitality, retail, and private-label collections.",
			details: [
				"Custom sizes and weights",
				"Bulk and private-label supply",
				"Consistent absorbency and finish"
			],
			image: "/assets/as-bath-towels-Cv_4W4kC.jpeg"
		},
		{
			id: "hand-towels",
			name: "Hand Towels",
			category: "Terry Towels",
			description: "Durable everyday towels offered in adaptable sizes, weights, and finishes.",
			details: [
				"Hospitality and retail ready",
				"Adaptable colors and finishes",
				"Designed for repeated use"
			],
			image: "/assets/as-hand-towels-Ccgqym6T.jpeg"
		},
		{
			id: "face-towels",
			name: "Face Towels / Washcloths",
			category: "Terry Towels",
			description: "Compact, gentle washcloths made for comfort and repeated commercial use.",
			details: [
				"Soft cotton construction",
				"Flexible pack quantities",
				"Commercial-grade consistency"
			],
			image: "/assets/as-face-towels-BAYAVtOp.jpeg"
		},
		{
			id: "cabana-towel",
			name: "Cabana Towels",
			category: "Hospitality",
			description: "Distinctive striped towels developed for pools, resorts, clubs, and leisure brands.",
			details: [
				"Classic stripe options",
				"Resort and pool applications",
				"Bulk contract production"
			],
			image: "/assets/as-cabana-towels-a1WPvw93.jpeg"
		},
		{
			id: "cotton-fabric",
			name: "Cotton Fabric",
			category: "Fabric",
			description: "Versatile woven cotton fabric supplied for institutional and finished-product use.",
			details: [
				"Adaptable specifications",
				"Commercial quantity supply",
				"Quality-controlled weaving"
			],
			image: "/assets/as-cotton-fabric-BSIrtrKQ.jpeg"
		},
		{
			id: "bar-mop-towels",
			name: "Bar Mop Towels",
			category: "Kitchen & Hospitality",
			description: "Highly absorbent bar mop towels designed for restaurants, kitchens, cafés, hotels, and everyday cleaning use.",
			details: [
				"Highly absorbent cotton construction",
				"Durable and reusable",
				"Ideal for restaurants and kitchens"
			],
			image: "/assets/as-bar-mop-towels-2nea7gBK.jpeg"
		}
	],
	productsPage: {
		eyebrow: "Our Product Range",
		title: "Textiles made to perform at commercial scale.",
		description: "Explore our core towel and cotton fabric lines, available for bulk purchasing, hospitality supply, trade, and private-label requirements.",
		orderTitle: "Need a custom specification?",
		orderText: "Tell us the product, quantity, size, weight, color, and finish you need. Our team will discuss a practical production plan for your order."
	},
	process: {
		eyebrow: "Inside Our Operations",
		title: "Quality you can see at every stage.",
		description: "Take a closer look at the people, machinery, and standards behind every AS Textile order.",
		poster: "/assets/sa-video-poster-DO3Z03YL.jpg",
		video: "/assets/as-textile-process-video-BjLaTQJ5.mp4",
		caption: "Inside AS Textile"
	},
	values: [
		"Consistent specifications",
		"Buyer-focused communication",
		"Responsible production",
		"On-time order planning"
	],
	footer: {
		statement: "Export-class towels and cotton fabrics, Made in Pakistan for quality-focused buyers worldwide.",
		copyright: "AS Textile. All rights reserved."
	}
};
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "flex shrink-0 items-center transition-opacity hover:opacity-95",
		"aria-label": `${siteData.company.name} home`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: siteData.company.logo,
			alt: siteData.company.name,
			className: "h-12 w-auto object-contain rounded-lg shadow-md"
		})
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-hero-border bg-hero-surface/90 text-primary-foreground backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto hidden items-center gap-7 lg:flex",
					"aria-label": "Main navigation",
					children: siteData.navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm font-medium text-hero-muted transition-colors hover:text-primary-foreground",
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "accent",
					className: "ml-5 hidden lg:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: siteData.contact.whatsappHref,
						target: "_blank",
						rel: "noreferrer",
						children: "Request a Quote"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "heroGhost",
					size: "icon",
					className: "lg:hidden",
					onClick: () => setOpen((value) => !value),
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-hero-border bg-hero-surface px-5 py-5 lg:hidden",
			"aria-label": "Mobile navigation",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1",
				children: [siteData.navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-sm font-medium text-hero-muted hover:bg-hero-soft hover:text-primary-foreground",
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "accent",
					className: "mt-3 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: siteData.contact.whatsappHref,
						target: "_blank",
						rel: "noreferrer",
						children: "Request a Quote"
					})
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-hero-surface text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-sm text-sm leading-6 text-hero-muted",
					children: siteData.footer.statement
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-bold uppercase tracking-widest text-primary-foreground",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-2 gap-3",
					children: siteData.navigation.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm text-hero-muted hover:text-primary-foreground",
						children: item.label
					}, item.label))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "not-italic",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-bold uppercase tracking-widest text-primary-foreground",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-3 text-sm text-hero-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: siteData.contact.phoneHref,
								className: "flex items-center gap-3 hover:text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-accent-bright" }), siteData.contact.phone]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: siteData.contact.emailHref,
								className: "flex items-center gap-3 hover:text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-accent-bright" }), siteData.contact.email]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-accent-bright" }), siteData.company.address]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-hero-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-hero-muted sm:flex-row sm:justify-between lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					siteData.footer.copyright
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made in Pakistan · Supplied worldwide" })]
			})
		})]
	});
}
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: siteData.contact.whatsappHref,
		target: "_blank",
		rel: "noreferrer",
		className: "fixed bottom-5 right-5 z-40 grid size-13 place-items-center rounded-full bg-accent text-accent-foreground shadow-panel transition-transform hover:scale-105",
		"aria-label": `Chat with ${siteData.company.name} on WhatsApp`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" })
	});
}
//#endregion
export { siteData as a, WhatsAppButton as i, Footer as n, Header as r, Button as t };
