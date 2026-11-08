import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { company } from '@/lib/company.js';

const navLinks = [
  { path: '/', label: 'Hem' },
  { path: '/om-oss', label: 'Om oss' },
  { path: '/kontakt', label: 'Kontakt' },
];

function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-display text-lg uppercase tracking-wide transition-colors ${
      isActive ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="shrink-0" aria-label={`${company.name} – startsida`}>
          <img
            src="/images/logo-mark.png"
            alt={company.name}
            width="600"
            height="302"
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg font-semibold px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
          >
            <Phone size={16} strokeWidth={2.5} />
            {company.phone}
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <a href={company.phoneHref} className="font-display text-lg text-primary flex items-center gap-2">
            <Phone size={16} /> {company.phone}
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
