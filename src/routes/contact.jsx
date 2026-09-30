import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/components/site/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AS Textile | Karachi Textile Manufacturer" },
      { name: "description", content: "Contact AS Textile in Pakistan, Karachi for export towels, bulk cotton fabric orders, email, phone, and WhatsApp contact details." },
      { property: "og:title", content: "Contact AS Textile | Karachi Textile Manufacturer" },
      { property: "og:description", content: "Direct phone, email, WhatsApp, and facility location for AS Textile in Karachi, Pakistan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.astextiles.com/contact" },
      { property: "og:image", content: "https://www.astextiles.com/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://www.astextiles.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Contact AS Textile - Karachi, Pakistan" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact AS Textile | Karachi Textile Manufacturer" },
      { name: "twitter:description", content: "Direct phone, email, WhatsApp, and facility location for AS Textile in Karachi, Pakistan." },
      { name: "twitter:image", content: "https://www.astextiles.com/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.astextiles.com/contact" },
    ],
  }),
  component: ContactPage,
});
