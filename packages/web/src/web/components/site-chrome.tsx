import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { BOOK, CONTACT_EMAIL, COMPANY } from "../lib/site";

/** Layered dark background: radial cyan glows, node grid, and the ring mark as a watermark. */
export function SiteBackground({ watermark = true }: { watermark?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(900px 520px at 12% -6%, rgba(1,204,254,0.20), transparent 60%), radial-gradient(760px 520px at 88% 8%, rgba(26,127,181,0.22), transparent 62%), radial-gradient(1100px 700px at 50% 108%, rgba(1,204,254,0.12), transparent 65%)",
        }}
      />
      <div className="node-grid absolute inset-0 opacity-[0.35]" />
      {watermark && (
        <img
          src="/images/ordinix-mark-light.png"
          alt=""
          className="float-slow absolute -right-32 top-1/4 hidden w-[640px] opacity-[0.055] lg:block"
        />
      )}
      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{ background: "linear-gradient(to top, rgba(5,13,28,0.95), transparent)" }}
      />
    </div>
  );
}

const NAV = [
  { label: "Overview", href: "/#overview" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "How we work", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[rgba(1,204,254,0.18)] bg-[rgba(5,13,28,0.88)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between gap-6 py-4 md:py-5">
        <Link to="/" className="shrink-0" aria-label={`${COMPANY.name} home`}>
          <img
            src="/images/ordinix-logo-light.png"
            alt={`${COMPANY.name} logo`}
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-cyan-soft"
            >
              {item.label}
            </a>
          ))}
          <Link
            to={BOOK.path}
            className="border border-[rgba(1,204,254,0.45)] px-5 py-2.5 text-sm font-semibold text-cyan-soft transition-all hover:bg-[rgba(1,204,254,0.12)] hover:text-ink-50"
          >
            {BOOK.title}
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="border border-[rgba(1,204,254,0.3)] p-2.5 text-ink-50 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[rgba(1,204,254,0.18)] bg-[rgba(5,13,28,0.97)] lg:hidden">
          <nav className="shell flex flex-col py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[rgba(1,204,254,0.1)] py-3.5 text-sm font-medium text-ink-300"
              >
                {item.label}
              </a>
            ))}
            <Link
              to={BOOK.path}
              onClick={() => setOpen(false)}
              className="py-3.5 text-sm font-semibold text-cyan-soft"
            >
              {BOOK.title} — {BOOK.status}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[rgba(1,204,254,0.16)] bg-[rgba(6,18,37,0.6)]">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div>
          <img
            src="/images/ordinix-logo-light.png"
            alt={`${COMPANY.name} logo`}
            className="h-16 w-auto md:h-[72px]"
          />
          <p className="mt-5 max-w-md text-sm text-ink-400">
            {COMPANY.headline}. Architecture and advisory for financial services, insurance and
            media.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-display text-lg font-semibold text-cyan-soft transition-colors hover:text-ink-50"
          >
            {CONTACT_EMAIL}
          </a>
          <Link to={BOOK.path} className="text-sm text-ink-300 transition-colors hover:text-cyan-soft">
            {BOOK.title} — {BOOK.status}
          </Link>
          <a href="/#capabilities" className="text-sm text-ink-300 transition-colors hover:text-cyan-soft">
            Capabilities
          </a>
        </div>
      </div>
      <div className="shell flex flex-col gap-2 border-t border-[rgba(1,204,254,0.12)] py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </span>
        <span>Registered in England &amp; Wales</span>
      </div>
    </footer>
  );
}
