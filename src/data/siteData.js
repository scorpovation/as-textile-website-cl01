import heroImage from "@/assets/sa-textile-hero.jpg";
import qualityImage from "@/assets/sa-quality.jpg";
import videoPoster from "@/assets/sa-video-poster.jpg";
import processVideo from "@/assets/as-textile-process-video.mp4";
import barmopTowel from "@/assets/as-bar-mop-towels.jpeg";
import logoAsset from "@/assets/as-textile-logo.png";
import asBathTowels from "@/assets/as-bath-towels.jpeg";
import asHandTowels from "@/assets/as-hand-towels.jpeg";
import asFaceTowels from "@/assets/as-face-towels.jpeg";
import asCabanaTowels from "@/assets/as-cabana-towels.jpeg";
import asCottonFabric from "@/assets/as-cotton-fabric.jpeg";

export const siteData = {
  company: {
    name: "AS Textile",
    shortName: "AS",
    location: "Karachi, Pakistan",
    address: "Karachi, Pakistan",
    story:
      "AS Textile is based in Karachi, Pakistan, specializing in export-class textile products and bulk-quantity orders. We are currently open to new orders and welcome new contracts with quality-focused clients.",
    logo: logoAsset,
  },
  contact: {
    phone: "+92 314 3065 816",
    phoneHref: "tel:+923143065816",
    whatsapp: "+92 314 3065 816",
    whatsappHref: "https://wa.me/923143065816",
    email: "hariisazeem@gmail.com",
    // 
    emailHref: "mailto:hariisazeem@gmail.com",
    address: "CI-33 Sector 6-B North Karachi Industrial Area, Karachi",
    mapEmbed:
      // "https://maps.google.com/maps?q=CL-33+Sector+6-B+North+Karachi+Industrial+Area%2C+Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed",
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3616.0987787287327!2d67.08570467537534!3d24.99675927784056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU5JzQ4LjMiTiA2N8KwMDUnMTcuOCJF!5e0!3m2!1sen!2s!4v1789760742399!5m2!1sen!2s",
  },
  contactPage: {
    eyebrow: "Direct Buyer Inquiries",
    title: "Get in Touch with Our Karachi Export Team",
    description:
      "We are currently open to new bulk orders, contract manufacturing, and international buyer inquiries. Connect directly with our team via WhatsApp, phone, or email.",
    directNoticeTitle: "No Web Forms — Direct Communication Only",
    directNoticeText:
      "To process your order specifications immediately without delay, we do not require any online form submissions. Reach out directly via WhatsApp, Phone, or Email to speak with our export specialists.",
    officeHours: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT)",
    faqs: [
      {
        question: "How do I request a custom product quote?",
        answer:
          "Send your product type (e.g., Bath Towels, Cabana Towels, Cotton Fabric), required dimensions, GSM, and target quantity directly via WhatsApp or Email.",
      },
      {
        question: "Do you supply samples for international buyers?",
        answer:
          "Yes, sample towels and fabric swatches can be dispatched upon request for serious commercial buyers.",
      },
      {
        question: "Where are your manufacturing operations based?",
        answer:
          "Our operations are situated in North Karachi Industrial Area, Karachi, Pakistan, offering direct access to Karachi port facilities for export shipping.",
      },
      {
        question: "What contract quantities do you support?",
        answer:
          "We specialize in bulk-quantity orders and ongoing private-label contract manufacturing for hospitality, retail, and global trade.",
      },
    ],
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Our Process", href: "/#process" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    eyebrow: "Made in Pakistan · Delivered Worldwide",
    // title: "Export-Class Textiles, Crafted for Global Business.",
    title: "AS Textile, Quality Crafted for Global Business.",
    description:
      "Premium towels and cotton fabrics manufactured for bulk orders, private labels, hospitality, and international buyers.",
    image: heroImage,
    primaryCta: "Explore Products",
    secondaryCta: "Talk to Our Team",
  },
  stats: [
    { value: "Export", label: "Class Quality" },
    { value: "Bulk", label: "Order Ready" },
    { value: "Karachi", label: "Manufacturing Base" },
    { value: "Global", label: "Client Focus" },
  ],
  about: {
    eyebrow: "About AS Textile",
    title: "Built around quality, consistency, and dependable supply.",
    text: "From careful material selection to final inspection, our production is shaped for buyers who need reliable quality at commercial scale.",
    image: qualityImage,
    points: [
      { title: "Quality First", text: "Careful inspection throughout production and before dispatch." },
      { title: "Bulk Capability", text: "Production planned for consistent, large-quantity requirements." },
      { title: "Flexible Supply", text: "Product specifications tailored for hospitality, retail, and trade." },
      { title: "Export Mindset", text: "Clear communication and buyer-focused production standards." },
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
        { value: "Karachi", label: "Production base" },
        { value: "Bulk", label: "Order capability" },
        { value: "Export", label: "Quality focus" },
      ],
    },
  },
  products: [
    { id: "bath-towels", name: "Bath Towels", category: "Terry Towels", description: "Soft, absorbent cotton towels for hospitality, retail, and private-label collections.", details: ["Custom sizes and weights", "Bulk and private-label supply", "Consistent absorbency and finish"], image: asBathTowels },
    { id: "hand-towels", name: "Hand Towels", category: "Terry Towels", description: "Durable everyday towels offered in adaptable sizes, weights, and finishes.", details: ["Hospitality and retail ready", "Adaptable colors and finishes", "Designed for repeated use"], image: asHandTowels },
    { id: "face-towels", name: "Face Towels / Washcloths", category: "Terry Towels", description: "Compact, gentle washcloths made for comfort and repeated commercial use.", details: ["Soft cotton construction", "Flexible pack quantities", "Commercial-grade consistency"], image: asFaceTowels },
    { id: "cabana-towel", name: "Cabana Towels", category: "Hospitality", description: "Distinctive striped towels developed for pools, resorts, clubs, and leisure brands.", details: ["Classic stripe options", "Resort and pool applications", "Bulk contract production"], image: asCabanaTowels },
    { id: "cotton-fabric", name: "Cotton Fabric", category: "Fabric", description: "Versatile woven cotton fabric supplied for institutional and finished-product use.", details: ["Adaptable specifications", "Commercial quantity supply", "Quality-controlled weaving"], image: asCottonFabric },
    // { id: "kitchen-towels", name: "Kitchen Towels", category: "Kitchen & Home", description: "Absorbent everyday kitchen towels made for food service, retail, and homeware ranges.", details: ["Woven and terry options", "Custom colors and patterns", "Bulk retail-ready supply"], image: asKitchenTowels },
    // { id: "tea-towels", name: "Tea Towels", category: "Kitchen & Home", description: "Lightweight woven cotton tea towels for drying, presentation, and private-label collections.", details: ["Classic woven designs", "Print and embroidery options", "Retail and hospitality supply"], image: kitchenTeaImage },
    // { id: "shop-towels", name: "Shop Towels", category: "Utility", description: "Hard-wearing shop towels built for workshops, service environments, and repeat use.", details: ["Durable cotton construction", "High-visibility color options", "Commercial pack quantities"], image: utilityImage },
    // { id: "cleaning-towels", name: "Cleaning Towels", category: "Utility", description: "Practical cleaning towels designed for dependable absorption across commercial settings.", details: ["Reusable and absorbent", "Multiple weights available", "Bulk institutional supply"], image: utilityImage },
    // { id: "golf-towels", name: "Golf Towels", category: "Sports", description: "Compact performance towels for golf clubs, tournaments, pro shops, and branded programs.", details: ["Loop and clip options", "Embroidery ready", "Club and event quantities"], image: sportsImage },
    // { id: "gym-sports-towels", name: "Gym / Sports Towels", category: "Sports", description: "Quick-absorbing cotton towels sized for gyms, teams, studios, and fitness brands.", details: ["Compact performance sizing", "Branding options", "Designed for frequent washing"], image: sportsImage },
    // { id: "beach-towels", name: "Beach Towels", category: "Leisure", description: "Generously sized beach towels with vibrant custom color and pattern possibilities.", details: ["Large-format sizing", "Jacquard and printed options", "Resort and retail programs"], image: asCabanaTowels },
    // { id: "pool-towels", name: "Pool Towels", category: "Hospitality", description: "Durable pool towels for hotels, resorts, clubs, and aquatic facilities.", details: ["Bleach-resistant options", "Stripe and solid designs", "High-volume contract supply"], image: cabanaImage },
    // { id: "hotel-towels", name: "Hotel Towels", category: "Hospitality", description: "Refined hotel towel collections developed for guest comfort and operational durability.", details: ["Bath linen programs", "Custom GSM and sizing", "Built for commercial laundering"], image: hospitalityImage },
    // { id: "spa-towels", name: "Spa Towels", category: "Hospitality", description: "Soft, premium towels selected for spas, wellness centers, and treatment rooms.", details: ["Plush hand feel", "Calm custom colorways", "Salon and spa sizing"], image: towelsImage },
    // { id: "salon-towels", name: "Salon Towels", category: "Professional", description: "Reliable salon towels developed for daily professional use and frequent laundering.", details: ["Colorfast options", "Compact practical sizes", "Bulk professional supply"], image: towelsImage },
    // { id: "bar-towels", name: "Bar Towels", category: "Food Service", description: "Absorbent bar towels for restaurants, cafés, kitchens, and beverage service operations.", details: ["Fast everyday absorption", "Woven stripe options", "Food-service quantities"], image: kitchenTeaImage },
    // { id: "terry-towels", name: "Terry Towels", category: "Terry Towels", description: "Versatile cotton terry towels made to buyer specifications across commercial applications.", details: ["Custom pile and GSM", "Multiple sizes and colors", "Private-label production"], image: towelsImage },
    // { id: "terry-hand-towels", name: "Terry Hand Towels", category: "Terry Towels", description: "Soft and durable terry hand towels for hospitality, retail, and institutional buyers.", details: ["Consistent loop construction", "Custom border designs", "Commercial-scale orders"], image: asHandTowels },
    // { id: "terry-bath-towels", name: "Terry Bath Towels", category: "Terry Towels", description: "Full-size terry bath towels balancing absorbency, softness, and wash durability.", details: ["Custom dimensions and GSM", "Hotel and retail quality", "Private-label finishing"], image: asBathTowels },
    // { id: "terry-kitchen-towels", name: "Terry Kitchen Towels", category: "Kitchen & Home", description: "Absorbent terry kitchen towels for demanding household and food-service routines.", details: ["High-absorbency loops", "Solid and stripe options", "Retail pack programs"], image: asKitchenTowels },
    // { id: "industrial-wiping-towels", name: "Industrial Wiping Towels", category: "Industrial", description: "Rugged wiping towels engineered for workshops, manufacturing, maintenance, and trade use.", details: ["Heavy-duty construction", "Reusable utility format", "Large-volume supply"], image: utilityImage },
    {
      id: "bar-mop-towels",
      name: "Bar Mop Towels",
      category: "Kitchen & Hospitality",
      description: "Highly absorbent bar mop towels designed for restaurants, kitchens, cafés, hotels, and everyday cleaning use.",
      details: [
        "Highly absorbent cotton construction",
        "Durable and reusable",
        "Ideal for restaurants and kitchens"
      ], image: barmopTowel,
    },
  ],
  productsPage: {
    eyebrow: "Our Product Range",
    title: "Textiles made to perform at commercial scale.",
    description: "Explore our core towel and cotton fabric lines, available for bulk purchasing, hospitality supply, trade, and private-label requirements.",
    orderTitle: "Need a custom specification?",
    orderText: "Tell us the product, quantity, size, weight, color, and finish you need. Our team will discuss a practical production plan for your order.",
  },
  process: {
    eyebrow: "Inside Our Operations",
    title: "Quality you can see at every stage.",
    description: "Take a closer look at the people, machinery, and standards behind every AS Textile order.",
    poster: videoPoster,
    video: processVideo,
    caption: "Inside AS Textile",
  },
  values: ["Consistent specifications", "Buyer-focused communication", "Responsible production", "On-time order planning"],
  footer: {
    statement: "Export-class towels and cotton fabrics, Made in Pakistan for quality-focused buyers worldwide.",
    copyright: "AS Textile. All rights reserved.",
  },
};
