import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';
import { SERVICES } from '../data/services';

export default function Services() {
  return (
    <div className="page section">
      <div className="container">
        <SectionTitle
          eyebrow="Prestations"
          title="Nos coiffures & services"
          subtitle="Un éventail complet de prestations pour tous les styles et toutes les envies."
        />

        <div className="grid-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={((i % 3) as 0 | 1 | 2)}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}