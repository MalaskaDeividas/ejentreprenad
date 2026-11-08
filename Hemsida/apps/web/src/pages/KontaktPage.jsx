
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { company } from '@/lib/company.js';

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
        subject: 'Nytt meddelande från hemsidan (E&J Schakt & Entreprenad)',
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

  const fieldClass = 'bg-transparent border-border rounded-sm h-12 text-base focus-visible:ring-primary';

  return (
    <>
      <Helmet>
        <title>{`Kontakt – ${company.shortName}`}</title>
        <meta name="description" content="Kontakta E&J Schakt & Entreprenad Sverige AB för en kostnadsfri offert. Ring 070-542 20 31 eller skicka ett meddelande." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
            <div>
              <p className="font-display uppercase tracking-[0.2em] text-sm text-primary mb-4">Kontakt</p>
              <h1 className="font-display uppercase text-5xl md:text-6xl leading-[0.95] mb-6">Berätta om ditt projekt</h1>
              <p className="text-lg text-muted-foreground mb-10">
                Offerten är kostnadsfri och vi svarar normalt inom 24 timmar. Snabbast når du oss på telefon.
              </p>

              <dl className="space-y-6">
                <div>
                  <dt className="text-sm text-muted-foreground mb-1">Telefon</dt>
                  <dd><a href={company.phoneHref} className="font-display text-3xl text-primary hover:underline">{company.phone}</a></dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground mb-1">E-post</dt>
                  <dd><a href={`mailto:${company.email}`} className="text-lg hover:text-primary break-all">{company.email}</a></dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground mb-1">Adress</dt>
                  <dd>
                    <a href={company.mapsHref} target="_blank" rel="noreferrer" className="text-lg hover:text-primary">
                      {company.street}<br />{company.city}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground mb-1">Öppettider</dt>
                  <dd className="text-lg">{company.hours}</dd>
                </div>
              </dl>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:border-l md:border-border md:pl-20">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Namn *</Label>
                  <Input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className={fieldClass} />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} className={fieldClass} />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="mb-2 block">E-post *</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className={fieldClass} />
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block">Meddelande *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  className="bg-transparent border-border rounded-sm text-base resize-y focus-visible:ring-primary"
                  placeholder="Vad ska göras, var, och ungefär när?"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 font-display text-xl font-semibold h-auto px-10 py-3 disabled:opacity-50"
              >
                {isSubmitting ? 'Skickar…' : 'Skicka meddelande'}
              </Button>
            </form>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default KontaktPage;
