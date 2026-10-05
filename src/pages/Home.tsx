import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles, Scissors } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Reveal from '../components/Reveal';
import { SERVICES } from '../data/services';
import { TESTIMONIALS } from '../data/testimonials';
import { CONTACT, buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../config/contact';

export default function Home() {
  const featured = SERVICES.slice(0, 3);

  return (
    <div className="page">
      <Hero />

      {/* À propos teaser */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <div className="about-image">
                <img
                  src="/assets/hero/about.jpg"
                  alt="Gaby, coiffeuse professionnelle"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    img.parentElement!.style.background =
                      'linear-gradient(135deg, #1c1410 0%, #0b0b0b 100%)';
                  }}
                />
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="about-text">
                <span className="eyebrow" style={{ color: '#d4af37', letterSpacing: '0.3em', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                  À propos
                </span>
                <h2 style={{ marginTop: 14 }}>
                  Une passion, un savoir-faire, <br /> une signature.
                </h2>
                <p>
                  Passionnée par la coiffure depuis toujours, Gaby met son
                  expertise et sa créativité au service de la beauté de chaque
                  femme.
                </p>
                <p className="about-quote">
                  « Chaque coiffure raconte une histoire — la vôtre. »
                </p>

                <div className="about-stats">
                  <div className="stat">
                    <strong>+5</strong>
                    <span>Années</span>
                  </div>
                  <div className="stat">
                    <strong>+300</strong>
                    <span>Clientes</span>
                  </div>
                  <div className="stat">
                    <strong>100%</strong>
                    <span>Passion</span>
                  </div>
                </div>

                <Link to="/a-propos" className="btn btn-outline mt-4">
                  En savoir plus
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #0b0b0b 0%, #0f0f0f 100%)' }}>
        <div className="container">
          <SectionTitle
            eyebrow="Prestations"
            title="Des coiffures d'exception"
            subtitle="Un savoir-faire varié pour toutes vos envies : tresses, perruques, coiffure naturelle et plus encore."
          />

          <div className="grid-3">
            {featured.map((s, i) => (
              <Reveal key={s.id} delay={(i as 0 | 1 | 2)}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/prestations" className="btn btn-outline">
              Voir toutes les prestations
            </Link>
          </div>
        </div>
      </section>

      {/* Galerie teaser */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Réalisations"
            title="Un aperçu de nos créations"
            subtitle="Découvrez la galerie complète de nos coiffures réalisées en salon."
          />
          <div className="text-center">
            <Link to="/galerie" className="btn btn-primary">
              <Sparkles size={18} /> Explorer la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #0b0b0b 100%)' }}>
        <div className="container">
          <SectionTitle
            eyebrow="Avis clientes"
            title="Elles nous font confiance"
            subtitle="Quelques retours de clientes satisfaites (exemples de démonstration)."
          />
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.id} delay={(i as 0 | 1 | 2)}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div
              className="form-card text-center"
              style={{ maxWidth: 720, margin: '0 auto' }}
            >
              <Scissors size={26} color="#d4af37" style={{ marginBottom: 16 }} />
              <h2 style={{ color: '#fbf8f3', marginBottom: 12 }}>
                Prête à briller ?
              </h2>
              <p style={{ color: '#8a8175', marginBottom: 26 }}>
                Réservez votre place dès maintenant et offrez à vos cheveux
                l'attention qu'ils méritent.
              </p>
              <a
                className="btn btn-whatsapp"
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Discuter sur WhatsApp
              </a>
              <p className="form-hint">
                {CONTACT.phone} — {CONTACT.city}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}