import { Clock, HelpCircle, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer, Header, WhatsAppButton } from "@/components/site/SiteChrome";
import { siteData } from "@/data/siteData";

export default function ContactPage() {
  const contact = siteData.contact;
  const page = siteData.contactPage || {
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
  };

  return (
    <>
      <Header />
      <main>
        {/* Contact Hero Banner */}
        <section className="relative overflow-hidden bg-primary pb-20 pt-36 text-primary-foreground sm:pb-24 sm:pt-44">
          <div className="pattern-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
            <p className="eyebrow text-accent-bright">{page.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg">
              {page.description}
            </p>
          </div>
        </section>

        {/* Direct Contact Cards Grid */}
        <section className="-mt-10 relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* WhatsApp Card - Recommended */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-accent/40 bg-card p-7 shadow-panel transition-all hover:-translate-y-1 hover:border-accent">
              <div className="absolute top-4 right-4 rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold text-accent uppercase tracking-wider">
                Fastest Response
              </div>
              <div>
                <div className="grid size-12 place-items-center rounded-lg bg-accent/15 text-accent">
                  <MessageCircle className="size-6" />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-card-foreground">
                  WhatsApp Direct
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Chat instantly with our export sales team for instant quotes, specifications & media.
                </p>
                <div className="mt-4 font-mono text-base font-semibold text-primary">
                  {contact.whatsapp}
                </div>
              </div>
              <div className="mt-7">
                <Button asChild variant="accent" className="w-full">
                  <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Phone Call Card */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40">
              <div>
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-6" />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-card-foreground">
                  Phone / Call Direct
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Speak directly with our Karachi office for urgent order inquiries and bulk discussions.
                </p>
                <div className="mt-4 font-mono text-base font-semibold text-primary">
                  {contact.phone}
                </div>
              </div>
              <div className="mt-7">
                <Button asChild variant="outline" className="w-full">
                  <a href={contact.phoneHref}>
                    <Phone /> Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 md:col-span-2 lg:col-span-1">
              <div>
                <div className="grid size-12 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-6" />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-card-foreground">
                  Email Inquiry
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Send your purchase orders, tech packs, or RFQs for detailed commercial quotes.
                </p>
                <div className="mt-4 font-mono text-base font-semibold text-primary">
                  {contact.email}
                </div>
              </div>
              <div className="mt-7">
                <Button asChild variant="outline" className="w-full">
                  <a href={contact.emailHref}>
                    <Mail /> Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Communication Banner */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-secondary/60 p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <ShieldCheck className="size-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {page.directNoticeTitle}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {page.directNoticeText}
                  </p>
                </div>
              </div>
              <Button asChild variant="accent" size="lg" className="shrink-0">
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle /> Start Direct Chat
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow">Production Hub</p>
                <h2 className="section-title mt-3">Our Karachi Office & Facility</h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  Strategically situated in North Karachi Industrial Area for efficient manufacturing, quality control, and seaport dispatch.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Physical Address</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Operating Hours</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{page.officeHours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg border border-border bg-card p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Buyer Visits</span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We welcome quality audits and scheduled facility visits for prospective commercial clients. Please coordinate with us via WhatsApp prior to visiting.
                  </p>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-panel">
                <iframe
                  title="AS Textile Location Map"
                  src={contact.mapEmbed}
                  className="h-[400px] w-full border-0 lg:h-[480px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center">
              <p className="eyebrow">Buyer Questions</p>
              <h2 className="mx-auto mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Frequently Asked Contact Questions
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {page.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-card"
                >
                  <h3 className="flex items-start gap-3 font-display text-lg font-semibold text-foreground">
                    <HelpCircle className="mt-1 size-5 shrink-0 text-accent" />
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-14 text-accent-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div>
              <h2 className="font-display text-3xl font-semibold">Ready to place a bulk order?</h2>
              <p className="mt-2 text-sm opacity-90">
                Contact our Karachi sales team on WhatsApp for immediate response.
              </p>
            </div>
            <Button asChild variant="dark" size="xl" className="shrink-0">
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle /> Request a Quote
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
