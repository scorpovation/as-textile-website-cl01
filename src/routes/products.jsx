import { createFileRoute } from "@tanstack/react-router";
import ProductsPage from "@/components/site/ProductsPage";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Wholesale Towels & Cotton Fabric | AS Textile Pakistan" },
      { name: "description", content: "Source bulk cotton bath, hand, face, cabana, and bar mop towels plus cotton fabric from AS Textile in Karachi, Pakistan." },
      { property: "og:title", content: "Wholesale Towels & Cotton Fabric | AS Textile Pakistan" },
      { property: "og:description", content: "Bulk cotton towels and cotton fabric for hospitality, retail, and trade buyers, supplied from Karachi, Pakistan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.astextiles.com/products" },
      { property: "og:image", content: "https://www.astextiles.com/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://www.astextiles.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AS Textile Products - Export Towels & Cotton Fabric" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Textile Products | Towels & Cotton Fabric" },
      { name: "twitter:description", content: "Export-class towels and cotton fabrics made for commercial-scale orders." },
      { name: "twitter:image", content: "https://www.astextiles.com/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.astextiles.com/products" },
    ],
  }),
  component: ProductsPage,
});