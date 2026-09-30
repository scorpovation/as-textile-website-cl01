import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AS Textile | Export Textiles from Karachi" },
      { name: "description", content: "AS Textile supplies export-class towels and cotton fabric from Karachi for bulk orders, hospitality, retail, and trade." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "AS Textile | Export Textiles from Karachi" },
      { property: "og:description", content: "Export-class towels and cotton fabrics for quality-focused buyers worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.astextiles.com/" },
      { property: "og:image", content: "https://www.astextiles.com/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://www.astextiles.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AS Textile - Quality Crafted for Global Business" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AS Textile | Export Textiles from Karachi" },
      { name: "twitter:description", content: "Export-class towels and cotton fabrics for quality-focused buyers worldwide." },
      { name: "twitter:image", content: "https://www.astextiles.com/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.astextiles.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  // console.log("test")
  return <HomePage />;
}
