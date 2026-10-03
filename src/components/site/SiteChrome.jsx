import { useState } from "react";
import { Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";

export function Brand() {
  return (
    <a href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-95" aria-label={`${siteData.company.name} home`}>
      <img
        src={siteData.company.logo}
        alt={siteData.company.name}
        className="h-12 w-auto object-contain rounded-lg shadow-md"
      />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hero-border bg-hero-surface/90 text-primary-foreground backdrop-blur-md">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:px-8">
        <Brand />
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {siteData.navigation.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-hero-muted transition-colors hover:text-primary-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="accent" className="ml-5 hidden lg:inline-flex">
          <a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer">Request a Quote</a>
        </Button>
        <Button variant="heroGhost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-hero-border bg-hero-surface px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {siteData.navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-hero-muted hover:bg-hero-soft hover:text-primary-foreground">
                {item.label}
              </a>
            ))}
            <Button asChild variant="accent" className="mt-3 w-full">
              <a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer">Request a Quote</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-hero-surface text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div><Brand /><p className="mt-5 max-w-sm text-sm leading-6 text-hero-muted">{siteData.footer.statement}</p></div>
        <div><h2 className="text-xs font-bold uppercase tracking-widest text-primary-foreground">Navigate</h2><div className="mt-4 grid grid-cols-2 gap-3">{siteData.navigation.slice(0, 4).map((item) => <a key={item.label} href={item.href} className="text-sm text-hero-muted hover:text-primary-foreground">{item.label}</a>)}</div></div>
        <address className="not-italic"><h2 className="text-xs font-bold uppercase tracking-widest text-primary-foreground">Contact</h2><div className="mt-4 space-y-3 text-sm text-hero-muted"><a href={siteData.contact.phoneHref} className="flex items-center gap-3 hover:text-primary-foreground"><Phone className="size-4 text-accent-bright" />{siteData.contact.phone}</a><a href={siteData.contact.emailHref} className="flex items-center gap-3 hover:text-primary-foreground"><Mail className="size-4 text-accent-bright" />{siteData.contact.email}</a><span className="flex items-center gap-3"><MapPin className="size-4 text-accent-bright" />{siteData.company.address}</span></div></address>
      </div>
      <div className="border-t border-hero-border"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-hero-muted sm:flex-row sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} {siteData.footer.copyright}</span><span>Made in Pakistan · Supplied worldwide</span></div></div>
    </footer>
  );
}

export function WhatsAppButton() {
  return <a href={siteData.contact.whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 grid size-13 place-items-center rounded-full bg-accent text-accent-foreground shadow-panel transition-transform hover:scale-105" aria-label={`Chat with ${siteData.company.name} on WhatsApp`}><MessageCircle className="size-6" /></a>;
}

// the quick 
// brown fox