import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer, Header, WhatsAppButton } from "@/components/site/SiteChrome";
import { siteData } from "@/data/siteData";

export default function AboutPage() {
  const page = siteData.about.page;

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-primary pb-20 pt-36 text-primary-foreground sm:pb-24 sm:pt-44">
          <div className="pattern-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_0.55fr] lg:px-8">
            <div>
              <p className="eyebrow text-accent-bright">{siteData.about.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">{page.title}</h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">{siteData.company.story}</p>
            </div>
            <div className="relative mx-auto flex justify-center">
              <img src={siteData.company.logo} alt={`${siteData.company.name} logo`} className="mx-auto w-full max-w-xs object-contain drop-shadow-2xl sm:max-w-sm lg:max-w-md" />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-8">
            <div>
              <p className="eyebrow">{page.eyebrow}</p>
              <h2 className="section-title mt-4">{page.missionTitle}</h2>
              <p className="mt-6 text-base leading-7 text-muted-foreground">{page.introduction}</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{page.missionText}</p>
              <div className="mt-9 grid grid-cols-3 border-y border-border">
                {page.highlights.map((item) => (
                  <div key={item.label} className="border-l border-border px-3 py-6 first:border-l-0 sm:px-5">
                    <strong className="block font-display text-xl text-primary sm:text-2xl">{item.value}</strong>
                    <span className="mt-1 block text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-hero-surface shadow-deep">
              <video src={siteData.process.video} poster={siteData.process.poster} autoPlay muted loop playsInline controls preload="metadata" aria-label={page.videoTitle} className="aspect-[4/3] w-full bg-black object-cover" />
              <div className="p-6 text-primary-foreground">
                <h2 className="font-display text-2xl font-semibold">{page.videoTitle}</h2>
                <p className="mt-1 text-sm text-hero-muted">{page.videoCaption}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pattern-grid bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">{siteData.about.title}</p>
            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {siteData.about.points.map((point) => (
                <article key={point.title} className="border-t border-border pt-6">
                  <h2 className="flex items-center gap-3 font-display text-2xl font-semibold"><span className="grid size-7 place-items-center rounded-full bg-accent-soft text-accent"><Check className="size-4" /></span>{point.title}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent py-14 text-accent-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <h2 className="max-w-2xl font-display text-3xl font-semibold">{siteData.productsPage.orderTitle}</h2>
            <Button asChild variant="dark" size="xl"><a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle />Request a Quote</a></Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}