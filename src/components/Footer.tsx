import { Link } from 'react-router-dom';
import { Instagram, Facebook, Music2, Phone } from 'lucide-react';
import Logo from './Logo';
import { CONTACT, buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../config/contact';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <Logo size={40} />
              <span>{CONTACT.brandName}</span>
            </div>
            <p style={{ maxWidth: 300 }}>
              {CONTACT.tagline} Coiffure, beauté et élégance pour sublimer chaque femme.

              <b><i>Et puis toutes coiffures sera payer sous forme de motivations</i></b>
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/prestations">Prestations</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
              <li><Link to="/tarifs">Tarifs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.address}</li>
              <li>{CONTACT.city}</li>
              <li>
                <a href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Suivez-nous</h4>
            <div className="socials">
              <a className="social-btn" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
              <a className="social-btn" href={CONTACT.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a className="social-btn" href={CONTACT.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <Music2 size={18} />
              </a>
              <a className="social-btn" href={CONTACT.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {CONTACT.brandName} — Tous droits réservés.</span>
          <span>Site vitrine • Conçu par SIMPLICE</span>
        </div>
      </div>
    </footer>
  );
}