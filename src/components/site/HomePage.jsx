import { ArrowRight, Check, ChevronDown, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";
import { Footer, Header, WhatsAppButton } from "@/components/site/SiteChrome";

function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[720px] items-center overflow-hidden pt-18 text-primary-foreground sm:min-h-[760px]">
      <img src={siteData.hero.image} alt="Modern textile manufacturing floor with cotton fabric rolls" width="1920" height="1088" className="absolute inset-0 -z-20 size-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-hero-border bg-hero-soft px-4 py-2 text-xs font-semibold uppercase tracking-widest text-hero-muted">
            <span className="size-1.5 rounded-full bg-accent" />{siteData.hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">{siteData.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">{siteData.hero.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="xl"><a href="/products">{siteData.hero.primaryCta}<ArrowRight /></a></Button>
            <Button asChild variant="heroOutline" size="xl"><a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer">{siteData.hero.secondaryCta}</a></Button>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to company introduction" className="absolute bottom-7 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-hero-border text-hero-muted transition-colors hover:text-primary-foreground">
        <ChevronDown className="size-5" />
      </a>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Company highlights" className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
        {siteData.stats.map((stat) => (
          <div key={stat.label} className="border-border px-3 py-9 text-center even:border-l lg:border-l lg:first:border-l-0 lg:py-12">
            <strong className="block font-display text-3xl text-primary sm:text-4xl">{stat.value}</strong>
            <span className="mt-1 block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="relative">
          <img src={siteData.about.image} alt={`${siteData.company.name} team inspecting cotton fabric`} width="1600" height="1008" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover shadow-image" />
          <div className="absolute -bottom-6 right-5 rounded-md bg-primary px-6 py-5 text-primary-foreground shadow-panel sm:right-8">
            <strong className="font-display text-3xl">Quality</strong>
            <span className="block text-xs font-bold uppercase tracking-widest text-hero-muted">at every stage</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">{siteData.about.eyebrow}</p>
          <h2 className="section-title mt-4">{siteData.about.title}</h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">{siteData.company.story}</p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{siteData.about.text}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteData.about.points.map((point) => (
              <div key={point.title} className="border-t border-border pt-4">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold"><span className="grid size-5 place-items-center rounded-full bg-accent-soft text-accent"><Check className="size-3" /></span>{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="pattern-grid bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">Our Product Range</p><h2 className="section-title mt-4">Made for hospitality, retail, and trade.</h2></div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">Flexible specifications and dependable bulk production for buyers who value consistent quality.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteData.products.map((product, index) => (
            <article key={product.id} className={`group overflow-hidden rounded-lg border border-border bg-card shadow-card ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} width="1200" height="912" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <span className="absolute left-4 top-4 rounded-full bg-hero-surface/85 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">{product.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{product.name}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{product.description}</p>
                <a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary">Discuss an order <ArrowRight className="size-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center"><p className="eyebrow text-accent-bright">{siteData.process.eyebrow}</p><h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{siteData.process.title}</h2><p className="mt-5 leading-7 text-hero-muted">{siteData.process.description}</p></div>
        <div className="mt-12 overflow-hidden rounded-lg border border-hero-border shadow-deep">
          <video src={siteData.process.video} poster={siteData.process.poster} autoPlay muted loop playsInline controls preload="metadata" aria-label={`${siteData.company.name} manufacturing process video`} className="aspect-video w-full bg-black object-cover" />
          <div className="flex items-center justify-between gap-4 border-t border-hero-border bg-primary px-5 py-4 sm:px-7">
            <span className="text-xs font-bold uppercase tracking-widest text-hero-muted">{siteData.process.caption}</span>
            <span className="text-xs text-hero-muted">Karachi · Pakistan</span>
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.values.map((value) => <div key={value} className="flex items-center gap-3 border-t border-hero-border pt-4 text-sm text-hero-muted"><Check className="size-4 shrink-0 text-accent-bright" />{value}</div>)}
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section id="contact" className="bg-accent py-14 text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div><p className="text-xs font-bold uppercase tracking-widest opacity-70">New contracts welcome</p><h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Let’s discuss your next textile order.</h2></div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="dark" size="xl"><a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp Us</a></Button>
          <Button asChild variant="accentOutline" size="xl"><a href={siteData.contact.emailHref}><Mail />Send an Email</a></Button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return <><Header /><main><Hero /><Stats /><About /><Products /><Process /><ContactBand /></main><Footer /><WhatsAppButton /></>;
}
