import { Clock, MessageCircle } from 'lucide-react';
import type { Service } from '../data/services';
import { buildWhatsAppLink } from '../config/contact';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const waMessage =
    `Bonjour Gaby 👋🏾\n\nJe souhaite réserver la prestation : ${service.name}.\n\nMerci.`;

  return (
    <article className="card service-card">
      <div className="service-media">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.background = 'linear-gradient(135deg, #1c1410, #0b0b0b)';
            img.style.opacity = '0.6';
          }}
        />
        <span className="service-tag">{service.category}</span>
      </div>

      <div className="service-body">
        <h3>{service.name}</h3>
        <p>{service.description}</p>

        <div className="service-meta">
          <span className="service-price">{service.price}</span>
          <span className="service-duration">
            <Clock size={14} /> {service.duration}
          </span>
        </div>

        <a
          className="btn btn-outline mt-2"
          style={{ width: '100%' }}
          href={buildWhatsAppLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={16} /> Réserver
        </a>
      </div>
    </article>
  );
}