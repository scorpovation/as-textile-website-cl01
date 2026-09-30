import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/components/site/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AS Textile | Karachi Textile Manufacturer" },
      { name: "description", content: "Learn about AS Textile, a Karachi-based supplier of export-class towels and cotton fabrics for bulk and international orders." },
      { property: "og:title", content: "About AS Textile | Karachi Textile Manufacturer" },
      { property: "og:description", content: "A dependable Karachi textile partner for quality-focused buyers worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endearing-manatee-621e01.netlify.app/about" },
      { property: "og:image", content: "https://endearing-manatee-621e01.netlify.app/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://endearing-manatee-621e01.netlify.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "About AS Textile - Quality Crafted for Global Business" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About AS Textile | Karachi Textile Manufacturer" },
      { name: "twitter:description", content: "A dependable Karachi textile partner for quality-focused buyers worldwide." },
      { name: "twitter:image", content: "https://endearing-manatee-621e01.netlify.app/og-image.jpg" },
    ],
  }),
  component: AboutPage,
});