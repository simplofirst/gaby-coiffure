import { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Music2, MessageCircle, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { SERVICES } from '../data/services';
import { CONTACT, buildWhatsAppLink } from '../config/contact';

export default function Contact() {
  const [name, setName] = useState('');
  const [service, setService] = useState(SERVICES[0]?.name ?? '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Bonjour Gaby 👋🏾\n\n` +
      `Je souhaite prendre rendez-vous.\n\n` +
      `Nom : ${name || '—'}\n` +
      `Prestation : ${service || '—'}\n` +
      `Date souhaitée : ${date || '—'}\n` +
      `Heure souhaitée : ${time || '—'}\n\n` +
      (message ? `Message : ${message}\n\n` : '') +
      `Merci.`;
    window.open(buildWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Prenons rendez-vous"
          subtitle="Remplissez le formulaire ci-dessous : votre message s'ouvrira directement dans WhatsApp."
        />

        <div className="contact-grid">
          {/* Infos */}
          <Reveal>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon"><Phone size={18} /></div>
                <div>
                  <h4>Téléphone & WhatsApp</h4>
                  <p>{CONTACT.phone}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><MapPin size={18} /></div>
                <div>
                  <h4>Adresse</h4>
                  <p>{CONTACT.address}</p>
                  <p style={{ color: '#8a8175', fontSize: '0.88rem' }}>{CONTACT.city}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><Clock size={18} /></div>
                <div>
                  <h4>Horaires</h4>
                  {CONTACT.hours.map((h) => (
                    <p key={h.days} style={{ fontSize: '0.92rem' }}>
                      <span style={{ color: '#d4af37' }}>{h.days} :</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>

              <div className="contact-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <h4>Réseaux sociaux</h4>
                <div className="socials">
                  <a className="social-btn" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle size={18} />
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
          </Reveal>

          {/* Formulaire WhatsApp */}
          <Reveal delay={1}>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Votre nom</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Marie"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Prestation souhaitée</label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date souhaitée</label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Heure souhaitée</label>
                  <input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (optionnel)</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Précisions, inspiration, questions..."
                />
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
                <Send size={16} /> Envoyer via WhatsApp
              </button>

              <p className="form-hint">
                Le bouton ouvre WhatsApp avec un message prérempli. Aucune donnée
                n'est stockée sur le site.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}