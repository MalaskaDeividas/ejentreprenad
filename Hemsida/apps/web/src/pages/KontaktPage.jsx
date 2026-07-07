
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        subject: 'Nytt meddelande från Entreprerad & Schakt AB',
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast.success('Tack för ditt meddelande. Vi återkommer inom kort.');

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      toast.error('Något gick fel. Försök igen.');
    }
  } catch (error) {
    toast.error('Något gick fel. Försök igen.');
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+46 123 456 789',
      link: 'tel:+46123456789'
    },
    {
      icon: Mail,
      title: 'E-post',
      content: 'info@entreprerad-schakt.se',
      link: 'mailto:info@entreprerad-schakt.se'
    },
    {
      icon: MapPin,
      title: 'Adress',
      content: 'Industrivägen 12, 123 45 Stockholm',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Öppettider',
      content: 'Mån-Fre: 07:00-17:00',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt - Entreprerad & Schakt AB</title>
        <meta name="description" content="Kontakta Entreprerad & Schakt AB för en kostnadsfri offert. Vi finns här för att hjälpa dig med ditt projekt." />
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
                  Kontakta <span className="text-primary">oss</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Vi finns här för att hjälpa dig. Fyll i formuläret eller kontakta oss direkt.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <h2 className="text-2xl font-bold mb-6">Skicka ett meddelande</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold mb-2 block">
                          Namn *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                          placeholder="Ditt namn"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold mb-2 block">
                          E-post *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                          placeholder="din@epost.se"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold mb-2 block">
                          Telefon
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                          placeholder="+46 123 456 789"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-sm font-semibold mb-2 block">
                          Meddelande *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                          placeholder="Berätta om ditt projekt..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:brightness-110 font-bold text-lg uppercase tracking-wide py-6 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Skickar...' : 'Skicka'}
                      </Button>
                    </form>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <h2 className="text-2xl font-bold mb-6">Kontaktinformation</h2>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <info.icon size={24} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-1">
                              {info.title}
                            </p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-base font-medium hover:text-primary transition-colors duration-200"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-base font-medium">{info.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20">
                    <h3 className="text-xl font-bold mb-4">Begär en kostnadsfri offert</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Vi erbjuder kostnadsfria offerter för alla typer av schakt- och jordarbeten. Kontakta oss idag så återkommer vi inom 24 timmar.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Clock size={18} />
                      <span>Svarstid: Inom 24 timmar</span>
                    </div>
                  </div>
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

export default KontaktPage;
