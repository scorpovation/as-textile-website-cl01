import { createFileRoute } from "@tanstack/react-router";
import ProductsPage from "@/components/site/ProductsPage";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Textile Products | Towels & Cotton Fabric" },
      { name: "description", content: "Explore AS Textile kitchen, sports, hotel, spa, utility, terry towels, and cotton fabric for bulk and trade orders." },
      { property: "og:title", content: "Textile Products | Towels & Cotton Fabric" },
      { property: "og:description", content: "Export-class towels and cotton fabrics made for commercial-scale orders." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endearing-manatee-621e01.netlify.app/products" },
      { property: "og:image", content: "https://endearing-manatee-621e01.netlify.app/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://endearing-manatee-621e01.netlify.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AS Textile Products - Export Towels & Cotton Fabric" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Textile Products | Towels & Cotton Fabric" },
      { name: "twitter:description", content: "Export-class towels and cotton fabrics made for commercial-scale orders." },
      { name: "twitter:image", content: "https://endearing-manatee-621e01.netlify.app/og-image.jpg" },
    ],
  }),
  component: ProductsPage,
});