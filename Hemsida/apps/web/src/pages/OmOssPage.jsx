import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { company, services } from '@/lib/company.js';

const values = [
  { title: 'Kvalitet', description: 'Samma noggrannhet oavsett om det är en dränering runt villan eller ett större markjobb.' },
  { title: 'Punktlighet', description: 'Vi håller tiderna vi lovar och säger till direkt om något ändras.' },
  { title: 'Pris', description: 'Konkurrenskraftiga priser utan att kompromissa med kvaliteten.' },
  { title: 'Precision', description: 'Rätt nivåer, rätt fall och ordning på arbetsplatsen.' },
];

function OmOssPage() {
  return (
    <>
      <Helmet>
        <title>{`Om oss – ${company.shortName}`}</title>
        <meta
          name="description"
          content="Lär känna E&J Schakt & Entreprenad Sverige AB – schakt- och markarbeten för privatpersoner och företag i Västerås med omnejd."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 md:pt-20 pb-16">
            <p className="font-display uppercase tracking-[0.2em] text-sm text-primary mb-4">Om oss</p>
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <h1 className="font-display uppercase text-5xl md:text-6xl leading-[0.95]">
                Schakt och mark&shy;arbeten från start till mål
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  {company.name} utför schakt- och jordarbeten åt både privatpersoner och företag. Vi vill
                  att du ska kunna lita på att jobbet blir rätt gjort, i tid och till ett rimligt pris.
                </p>
                <p>Vi tar hand om hela kedjan – från planering och grävning till återfyllnad och färdig yta.</p>
                <p>
                  Vi investerar löpande i maskiner och kunskap så att vi kan leverera bästa möjliga resultat.
                  Kvalitet och nöjda kunder till ett bra pris är det vi mäts på.
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-border">
            <dl className="max-w-6xl mx-auto px-4 sm:px-6 py-4 lg:py-0 grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-border">
              {values.map((v) => (
                <div key={v.title} className="py-5 lg:py-10 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                  <dt className="font-display uppercase text-2xl text-primary mb-2">{v.title}</dt>
                  <dd className="text-muted-foreground">{v.description}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
            <h2 className="font-display uppercase text-4xl leading-none mb-8">Tjänster</h2>
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3 text-lg">
              {services.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="text-primary">—</span>
                  {s}
                </li>
              ))}
            </ul>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default OmOssPage;
