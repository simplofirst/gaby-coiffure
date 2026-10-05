import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE, CONTACT } from '../config/contact';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        {/* Image de fond — remplacez /assets/hero/hero.jpg par votre photo */}
        <img
          src="/assets/hero/hero.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      <div className="container hero-inner">
        <span className="hero-eyebrow">
          <Logo size={22} /> Gaby Coiffure
        </span>

        <h1>
          L'art de la coiffure
          <span className="accent">au service de votre beauté.</span>
        </h1>

        <p className="hero-tagline">« {CONTACT.tagline} »</p>

        <p className="hero-desc">
          Des coiffures soignées, des finitions impeccables et une attention sincère
          portée à chaque cliente. Bienvenue chez {CONTACT.brandName}.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Prendre rendez-vous
          </a>
          <Link className="btn btn-outline" to="/galerie">
            <Sparkles size={18} /> Découvrir nos coiffures
          </Link>
        </div>

        <div className="hero-meta">
          Coiffure <span>•</span> Beauté <span>•</span> Élégance
        </div>
      </div>
    </section>
  );
}