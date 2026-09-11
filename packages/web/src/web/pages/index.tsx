import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { SiteBackground, SiteFooter, SiteHeader } from "../components/site-chrome";
import { useReveal } from "../hooks/use-reveal";
import { APPROACH, BOOK, CAPABILITIES, COMPANY, CONTACT_EMAIL, SECTORS } from "../lib/site";

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="shell grid items-center gap-14 lg:grid-cols-[7fr_5fr]">
        <div>
          <p className="eyebrow enter">{COMPANY.headline}</p>
          <img
            src="/images/ordinix-logo-light.png"
            alt={`${COMPANY.name} logo`}
            className="enter mt-6 h-20 w-auto sm:h-24 md:h-28"
            style={{ animationDelay: "60ms" }}
          />
          <h1
            className="enter mt-8 max-w-2xl text-4xl font-semibold sm:text-5xl md:text-[3.5rem]"
            style={{ animationDelay: "120ms" }}
          >
            Architecture that turns{" "}
            <span className="text-gradient-brand">transformation strategy</span> into delivered
            systems.
          </h1>
          <p
            className="enter mt-7 max-w-xl text-lg text-ink-300"
            style={{ animationDelay: "180ms" }}
          >
            {COMPANY.strapline}
          </p>
          <div
            className="enter mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#contact"
              className="glow-cyan group inline-flex items-center gap-2 bg-cyan-brand px-7 py-3.5 font-display text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 border border-[rgba(1,204,254,0.35)] px-7 py-3.5 font-display text-sm font-semibold text-ink-50 transition-colors hover:bg-[rgba(1,204,254,0.1)]"
            >
              What we do
            </a>
          </div>
          <div
            className="enter mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-ink-400"
            style={{ animationDelay: "300ms" }}
          >
            {SECTORS.map((sector) => (
              <span key={sector} className="flex items-center gap-2">
                <span className="size-1.5 bg-cyan-brand" />
                {sector}
              </span>
            ))}
          </div>
        </div>

        <div className="enter relative" style={{ animationDelay: "260ms" }}>
          <div className="panel relative p-8 md:p-10">
            <img
              src="/images/ordinix-mark-light.png"
              alt=""
              aria-hidden
              className="absolute -right-8 -top-10 w-28 opacity-40 md:w-32"
            />
            <p className="eyebrow">Experience</p>
            <p className="mt-4 font-display text-6xl font-bold text-gradient-brand">25+</p>
            <p className="mt-2 text-sm text-ink-300">
              years leading mission-critical transformations at scale.
            </p>
            <div className="rule-glow my-8" />
            <p className="font-display text-xl font-semibold leading-snug text-ink-50">
              A force multiplier — bridging the gaps between strategy, architecture and delivery.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink-400">Engagement</dt>
                <dd className="mt-1 font-display font-semibold text-ink-50">
                  Principal architect &amp; advisory
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink-400">Method</dt>
                <dd className="mt-1 font-display font-semibold text-ink-50">
                  Fail-fast, evidence-led
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="overview" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[5fr_7fr]">
        <div className="reveal">
          <p className="eyebrow">Overview</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            {COMPANY.name}
            <span className="mt-3 block text-xl font-medium text-cyan-soft sm:text-2xl">
              {COMPANY.headline}
            </span>
          </h2>
        </div>
        <div className="reveal space-y-6 text-lg text-ink-300" style={{ transitionDelay: "90ms" }}>
          <p>{COMPANY.strapline}</p>
          <p>
            With {COMPANY.experience}, we operate as a force multiplier — bridging the gaps between
            strategy, architecture and delivery so that target-state designs survive contact with
            production, regulation and real budgets.
          </p>
          <p>
            Engagements are led personally by {COMPANY.principal}, working directly with executive
            sponsors, architecture functions and delivery teams.
          </p>
          <div className="rule-glow" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "Sectors", v: "Financial services, insurance, media" },
              { k: "Focus", v: "AI-first, data, integration, cloud" },
              { k: "Model", v: "Advisory + hands-on architecture" },
            ].map((item) => (
              <div key={item.k} className="panel p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-ink-400">{item.k}</p>
                <p className="mt-2 text-sm font-medium text-ink-50">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">What we specialise in</h2>
          <p className="mt-5 text-lg text-ink-300">
            Five practice areas, applied together on high-impact digital transformation programmes.
          </p>
        </div>

        <div className="mt-14 border-t border-[rgba(1,204,254,0.16)]">
          {CAPABILITIES.map((cap, i) => (
            <article
              key={cap.id}
              className="reveal group grid gap-6 border-b border-[rgba(1,204,254,0.16)] py-9 transition-colors hover:bg-[rgba(13,34,70,0.4)] md:grid-cols-[auto_5fr_6fr] md:items-start md:gap-10 md:px-4"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-cyan-brand">
                {cap.index}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-ink-50 sm:text-2xl">{cap.title}</h3>
                <span className="mt-4 block h-px w-16 bg-cyan-brand transition-all duration-500 group-hover:w-32" />
              </div>
              <div>
                <p className="text-ink-300">{cap.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cap.points.map((point) => (
                    <li
                      key={point}
                      className="border border-[rgba(1,204,254,0.22)] px-3 py-1.5 text-xs font-medium text-ink-300"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            De-risk the decision, then build it properly
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {APPROACH.map((item, i) => (
            <div
              key={item.title}
              className="reveal panel p-7 md:p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-lg font-semibold text-ink-50">{item.title}</h3>
              <p className="mt-3 text-ink-300">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookTeaser() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="shell">
        <div className="reveal panel grid items-center gap-10 p-8 md:grid-cols-[auto_1fr] md:p-12">
          <img
            src={BOOK.cover}
            alt={`${BOOK.title} book cover`}
            className="mx-auto w-52 border border-[rgba(1,204,254,0.25)] shadow-[0_30px_80px_-30px_rgba(1,204,254,0.5)] md:w-60"
          />
          <div>
            <p className="eyebrow">Publication — {BOOK.status}</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{BOOK.title}</h2>
            <p className="mt-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-ink-400">
              {BOOK.author}
            </p>
            <p className="mt-5 max-w-xl text-lg text-ink-300">{BOOK.teaser}</p>
            <Link
              to={BOOK.path}
              className="group mt-8 inline-flex items-center gap-2 bg-cyan-brand px-7 py-3.5 font-display text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5"
            >
              Subscribe for release updates
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="shell">
        <div className="reveal relative overflow-hidden border border-[rgba(1,204,254,0.22)] bg-[linear-gradient(140deg,rgba(13,34,70,0.85),rgba(5,13,28,0.7))] px-8 py-14 text-center md:px-16 md:py-20">
          <img
            src="/images/ordinix-mark-light.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -left-16 -bottom-20 w-72 opacity-[0.07]"
          />
          <p className="eyebrow">Contact</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Tell us what you are trying to change
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">
            Architecture reviews, AI adoption planning, data platform strategy, or a time-boxed
            discovery spike — start with an email.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Enquiry%20for%20Ordinix%20Limited`}
            className="glow-cyan mt-10 inline-flex items-center gap-3 bg-cyan-brand px-8 py-4 font-display text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            <Mail className="size-5" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  useReveal();

  return (
    <div className="min-h-screen">
      <SiteBackground />
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <Capabilities />
        <Approach />
        <BookTeaser />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

export default Index;
