import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
function Footer() {
  return <footer className="bg-background border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="/images/1000035905.png" alt="Schackt & Entreprenad Sverige AB" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Din pålitliga partner för professionell schaktning och jordarbete i hela regionen.
            </p>
          </div>

          <div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Snabblänkar</span>
            <nav className="mt-4 space-y-3">
              <Link to="/" className="block text-sm hover:text-primary transition-colors duration-200">
                Hem
              </Link>
              <Link to="/om-oss" className="block text-sm hover:text-primary transition-colors duration-200">
                Om oss
              </Link>
              <Link to="/kontakt" className="block text-sm hover:text-primary transition-colors duration-200">
                Kontakt
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Kontaktinformation</span>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">+46 70-542 20 31</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">info@ej.entreprerad.se</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Knotavägen 16, 723 52 Västerås</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Schackt & Entreprenad Sverige AB. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6">
              <Link to="/integritetspolicy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Integritetspolicy
              </Link>
              <Link to="/villkor" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Villkor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;