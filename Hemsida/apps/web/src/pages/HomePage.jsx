
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, Truck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  const features = [
    {
      icon: Hammer,
      title: 'Professionell schaktning',
      description: 'Vi utför alla typer av schaktarbeten med modern utrustning och erfaren personal.'
    },
    {
      icon: Truck,
      title: 'Jordarbete & transport',
      description: 'Kompletta lösningar för jordarbete, massor och transport till och från arbetsplatsen.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Entreprerad & Schakt AB - Professionell schaktning och jordarbete</title>
        <meta name="description" content="Din pålitlig partner för professionell schaktning och jordarbete. Kontakta oss för en kostnadsfri offert." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <img 
                  src="https://horizons-cdn.hostinger.com/08845edc-3759-4203-a1a9-b7b4faf1b8e1/9e56c6dbd94a0ff9a937ffd1d461333b.png" 
                  alt="Schack & Entreprenad Sverige AB"
                  className="w-full max-w-[320px] h-auto mx-auto"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Vi levererar högkvalitativa schakt, jordarbeten och dränering för både privata och kommersiella projekt. Vi tar hand om allt från planering till färdigställande.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:brightness-110 transition-all duration-200 active:scale-[0.98] industrial-shadow"
                >
                  Kontakta oss
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
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
                  Vi erbjuder kompletta lösningar för alla typer av schakt- och jordarbeten
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 md:p-16 text-center border-2 border-primary/20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Redo att starta ditt projekt?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Kontakta oss idag för en kostnadsfri konsultation och offert. Vi hjälper dig från start till mål.
                  </p>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:brightness-110 transition-all duration-200 active:scale-[0.98] industrial-shadow"
                  >
                    Begär offert
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
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
