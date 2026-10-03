import { useEffect } from "react";
import AboutPage from "@/components/site/AboutPage";
import ContactPage from "@/components/site/ContactPage";
import HomePage from "@/components/site/HomePage";
import ProductsPage from "@/components/site/ProductsPage";

const pages = {
  "/": {
    component: HomePage,
    title: "AS Textile | Export Textiles from Karachi",
    description:
      "AS Textile supplies export-class towels and cotton fabric from Karachi for bulk orders, hospitality, retail, and trade.",
  },
  "/about": {
    component: AboutPage,
    title: "About AS Textile | Karachi Textile Manufacturer",
    description:
      "Learn about AS Textile, a Karachi-based supplier of export-class towels and cotton fabrics for bulk and international orders.",
  },
  "/products": {
    component: ProductsPage,
    title: "Wholesale Towels & Cotton Fabric | AS Textile Pakistan",
    description:
      "Source bulk cotton towels and cotton fabric from AS Textile in Karachi, Pakistan.",
  },
  "/contact": {
    component: ContactPage,
    title: "Contact AS Textile | Karachi Textile Manufacturer",
    description:
      "Contact AS Textile in Karachi for export towels, bulk cotton fabric orders, email, phone, and WhatsApp details.",
  },
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const page = pages[path];

  useEffect(() => {
    if (!page) return;
    document.title = page.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", page.description);
  }, [page]);

  if (!page) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <h1 className="font-display text-5xl font-semibold text-primary">404</h1>
        <p className="mt-3 text-muted-foreground">Page not found.</p>
        <a href="/" className="mt-6 text-accent underline underline-offset-4">
          Return home
        </a>
      </main>
    );
  }

  const Page = page.component;
  return <Page />;
}