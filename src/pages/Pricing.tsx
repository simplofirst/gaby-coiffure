import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { SERVICES } from '../data/services';
import { buildWhatsAppLink } from '../config/contact';
import { MessageCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="page section">
      <div className="container">
        <SectionTitle
          eyebrow="Tarifs"
          title="Prix De Motivation"
          subtitle="Tous les montants décrit ci dessous sont juste des gestes de motivations."
        />

        <div className="pricing-list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={((i % 3) as 0 | 1 | 2)}>
              <div className="pricing-row">
                <div className="pricing-head">
                  <h3>{s.name}</h3>
                  <span className="price">{s.price}</span>
                </div>
                <p>{s.description}</p>
                <div className="pricing-foot">
                  <span>{s.category}</span>
                  <span>{s.duration}</span>
                </div>
                <a
                  className="btn btn-outline mt-2"
                  style={{ width: '100%' }}
                  href={buildWhatsAppLink(
                    `Bonjour Gaby 👋🏾\n\nJe souhaite réserver : ${s.name}.\nMerci.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} /> Réserver
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="form-hint mt-4">
          * Prix indicatifs en FCFA — susceptibles d'être ajustés selon la longueur et l'épaisseur des cheveux.
        </p>
      </div>
    </div>
  );
}