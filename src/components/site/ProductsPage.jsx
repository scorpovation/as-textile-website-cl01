import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer, Header, WhatsAppButton } from "@/components/site/SiteChrome";
import { siteData } from "@/data/siteData";

export default function ProductsPage() {
  const page = siteData.productsPage;

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-primary pb-20 pt-36 text-primary-foreground sm:pb-24 sm:pt-44">
          <div className="pattern-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow text-accent-bright">{page.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">{page.title}</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">{page.description}</p>
          </div>
        </section>

        <section className="pattern-grid bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl space-y-8 px-5 lg:px-8">
            {siteData.products.map((product, index) => (
              <article key={product.id} className="grid overflow-hidden rounded-lg border border-border bg-card shadow-card lg:grid-cols-2">
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <img src={product.image} alt={product.name} className="h-full min-h-72 w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="eyebrow">{product.category}</span>
                  <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{product.name}</h2>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{product.description}</p>
                  <ul className="mt-6 space-y-3">
                    {product.details.map((detail) => <li key={detail} className="flex items-center gap-3 text-sm"><Check className="size-4 shrink-0 text-accent" />{detail}</li>)}
                  </ul>
                  <a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary">Discuss this product <ArrowRight className="size-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-accent py-16 text-accent-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div><h2 className="font-display text-3xl font-semibold sm:text-4xl">{page.orderTitle}</h2><p className="mt-3 max-w-2xl text-sm leading-6 opacity-80">{page.orderText}</p></div>
            <Button asChild variant="dark" size="xl"><a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle />Request a Quote</a></Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}