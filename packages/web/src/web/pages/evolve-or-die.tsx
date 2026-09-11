import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { SiteBackground } from "../components/site-chrome";
import { BOOK, COMPANY, CONTACT_EMAIL } from "../lib/site";

type Status = "idle" | "sending" | "done" | "error";

/** FormSubmit AJAX endpoint — no server code, the browser posts straight to FormSubmit. */
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export default function EvolveOrDiePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          _subject: `Evolve or Die — subscribe: ${email}`,
          _template: "table",
          _captcha: "false",
          source: "ordinix.co.uk/evolveordie",
        }),
      });

      if (!response.ok) throw new Error(`Request failed (${response.status})`);
      setStatus("done");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setError("That didn't go through. Please try again, or email us directly.");
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteBackground watermark={false} />

      <header className="shell flex items-center justify-between gap-6 py-6">
        <Link to="/" aria-label={`${COMPANY.name} home`}>
          <img
            src="/images/ordinix-logo-light.png"
            alt={`${COMPANY.name} logo`}
            className="h-12 w-auto md:h-14"
          />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-cyan-soft"
        >
          <ArrowLeft className="size-4" />
          Back to Ordinix
        </Link>
      </header>

      <main className="shell flex flex-1 items-center py-10 md:py-16">
        <div className="grid w-full items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="enter flex justify-center md:justify-end">
            <img
              src={BOOK.cover}
              alt={`${BOOK.title} book cover`}
              className="w-full max-w-[360px] border border-[rgba(1,204,254,0.25)] shadow-[0_40px_100px_-40px_rgba(1,204,254,0.55)]"
            />
          </div>

          <div className="enter max-w-md" style={{ animationDelay: "120ms" }}>
            <p className="eyebrow">{BOOK.status}</p>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{BOOK.title}</h1>
            <p className="mt-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-ink-400">
              {BOOK.author}
            </p>

            <div className="rule-glow my-8" />

            {status === "done" ? (
              <div className="panel flex items-start gap-4 p-6">
                <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-cyan-brand" />
                <div>
                  <p className="font-display text-lg font-semibold text-ink-50">You're on the list</p>
                  <p className="mt-2 text-sm text-ink-300">
                    We'll email you with release information and updates. Nothing else.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-semibold text-cyan-soft underline-offset-4 hover:underline"
                  >
                    Add another address
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-ink-300">
                  Subscribe for release information and updates.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      aria-label="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full border border-[rgba(1,204,254,0.25)] bg-[rgba(6,18,37,0.7)] px-4 py-3.5 text-ink-50 placeholder:text-ink-400 focus:border-cyan-brand focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      aria-label="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full border border-[rgba(1,204,254,0.25)] bg-[rgba(6,18,37,0.7)] px-4 py-3.5 text-ink-50 placeholder:text-ink-400 focus:border-cyan-brand focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="glow-cyan inline-flex w-full items-center justify-center gap-2 bg-cyan-brand px-7 py-4 font-display text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Subscribing…
                      </>
                    ) : (
                      "Subscribe for updates"
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-[#ff9a8b]">
                      {error}{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}?subject=Evolve%20or%20Die%20updates`}
                        className="font-semibold text-cyan-soft underline underline-offset-4"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="shell py-8 text-xs text-ink-400">
        <div className="flex flex-col gap-2 border-t border-[rgba(1,204,254,0.12)] pt-6 sm:flex-row sm:items-center sm:gap-6">
          <span>
            © {new Date().getFullYear()} {COMPANY.name}
          </span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-cyan-soft">
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
