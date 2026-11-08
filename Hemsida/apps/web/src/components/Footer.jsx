import React from 'react';
import { Link } from 'react-router-dom';
import { company } from '@/lib/company.js';

function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-[auto_1fr_1fr] sm:gap-16">
        <img src="/images/logo-mark.png" alt={company.name} width="600" height="302" className="h-14 w-auto" />

        <div className="text-sm leading-7">
          <p className="font-display text-base uppercase tracking-wide text-muted-foreground mb-2">Kontakt</p>
          <a href={company.phoneHref} className="block hover:text-primary">{company.phone}</a>
          <a href={`mailto:${company.email}`} className="block hover:text-primary break-all">{company.email}</a>
          <a href={company.mapsHref} target="_blank" rel="noreferrer" className="block hover:text-primary">
            {company.street}, {company.city}
          </a>
        </div>

        <div className="text-sm leading-7">
          <p className="font-display text-base uppercase tracking-wide text-muted-foreground mb-2">Sidor</p>
          <Link to="/" className="block hover:text-primary">Hem</Link>
          <Link to="/om-oss" className="block hover:text-primary">Om oss</Link>
          <Link to="/kontakt" className="block hover:text-primary">Kontakt</Link>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {company.name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
