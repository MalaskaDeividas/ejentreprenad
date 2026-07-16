
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Target } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function OmOssPage() {
  const values = [
    {
      icon: Award,
      title: 'Kvalitet',
      description: 'Vi levererar alltid högsta kvalitet i varje projekt, oavsett storlek.'
    },
    {
      icon: Clock,
      title: 'Punktlighet',
      description: 'Vi håller våra tidsramar och ser till att projekten slutförs i tid.'
    },
    {
      icon: Shield,
      title: 'Pris',
      description: 'Vi erbjuder konkurrenskraftiga priser utan att kompromissa med kvaliteten.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Noggrannhet och precision i varje detalj av vårt arbete.'
    }
  ];

  const services = [
    'Schaktning för husgrunder och källare',
    'Dränering och markarbeten',
    'Ledningsgrävning',
    'Maskinuthyrning',
    'Markplanering och utfyllnad',
    'Bortforsling av massor',
    'Snöröjning och vinterunderhåll',
    'Specialanpassade lösningar för unika projekt'
  ];

  return (
    <>
      <Helmet>
        <title>Om oss - Schackt & Entreprenad Sverige AB</title>
        <meta name="description" content="Lär känna Schackt & Entreprenad Sverige AB. Med över 20 års erfarenhet är vi din pålitliga partner för schaktning och jordarbete." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-b from-background to-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                  Om <span className="text-primary">Schackt & Entreprenad Sverige AB</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Din pålitliga partner för professionell schaktning och jordarbete.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 md:p-12 border border-border"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Om oss</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Schackt & Entreprenad Sverige AB jobbar med en vision om att erbjuda högkvalitativa schakt- och jordarbeten till både privata och kommersiella kunder. Vår vision bygger på att leverera pålitlighet, kvalitet och professionalism till alla våra kunder.
                  </p>
                  <p>
                    Vi är stolta över att kunna erbjuda kompletta lösningar från planering till färdigställande.
                  </p>
                  <p>
                    Vi investerar kontinuerligt i att säkerställa att vi alltid kan leverera bästa möjliga resultat till våra kunder. Kvalitet och kundnöjdhet för ett bra pris är våra ledord.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Våra <span className="text-primary">värderingar</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Dessa principer styr allt vi gör
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon size={28} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Våra <span className="text-primary">tjänster</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Vi erbjuder ett brett utbud av schakt- och jordarbeten
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-background rounded-lg p-4 border border-border"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default OmOssPage;
