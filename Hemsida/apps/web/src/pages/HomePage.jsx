import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { company, services } from '@/lib/company.js';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{`${company.shortName} – Schakt och markarbeten i Västerås`}</title>
        <meta
          name="description"
          content="Schakt, dränering och markarbeten för privatpersoner och företag. Ring 070-542 20 31 eller begär en kostnadsfri offert."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-24 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div className="md:order-2">
                <img
                  src="/images/logo-full.png"
                  alt={company.name}
                  width="900"
                  height="625"
                  className="w-full max-w-[300px] md:max-w-[460px] mx-auto md:mr-0"
                />
              </div>

              <div className="md:order-1">
                <p className="font-display uppercase tracking-[0.2em] text-sm text-primary mb-4">
                  Västerås med omnejd
                </p>
                <h1 className="font-display uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
                  Schakt, dränering<br />och markarbeten
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Vi gräver för husgrunder, drar ledningar, dränerar och planerar mark – för både
                  privatpersoner och företag. Vi tar hand om jobbet från planering till färdig yta.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-xl font-semibold px-6 py-3 rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    <Phone size={18} strokeWidth={2.5} />
                    {company.phone}
                  </a>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center font-display text-xl px-6 py-3 rounded-sm border border-foreground/30 hover:border-primary hover:text-primary transition-colors"
                  >
                    Begär offert
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="font-display uppercase text-4xl md:text-5xl leading-none mb-4">Det här gör vi</h2>
                <p className="text-muted-foreground">
                  Stora som små jobb. Hör av dig så går vi igenom ditt projekt och tar fram en offert.
                </p>
              </div>

              <ol className="grid sm:grid-cols-2 border-t border-border">
                {services.map((service, i) => (
                  <li
                    key={service}
                    className="flex gap-4 items-baseline py-4 border-b border-border sm:odd:pr-6 sm:even:pl-6 sm:even:border-l"
                  >
                    <span className="font-display text-primary text-lg tabular-nums w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base">{service}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Call band */}
          <section className="bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="font-display uppercase text-3xl md:text-4xl leading-none mb-2">Har du ett projekt på gång?</h2>
                <p className="text-primary-foreground/80">Offerten är kostnadsfri. Ring eller skicka ett meddelande.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 bg-black text-white font-display text-xl px-6 py-3 rounded-sm hover:bg-black/85 transition-colors"
                >
                  <Phone size={18} />
                  {company.phone}
                </a>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center font-display text-xl px-6 py-3 rounded-sm border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  Skriv till oss
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
