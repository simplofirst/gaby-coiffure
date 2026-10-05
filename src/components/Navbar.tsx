import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { CONTACT, buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../config/contact';

const LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/prestations', label: 'Prestations' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/tarifs', label: 'Tarifs' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" aria-label="Retour à l'accueil">
            <Logo size={38} />
            <span>Gaby Coiffure</span>
          </Link>

          <nav aria-label="Navigation principale">
            <ul className="nav-links">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : '')} end={l.to === '/'}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a
            className="btn btn-primary nav-cta"
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Prendre rendez-vous
          </a>

          <button
            className="nav-toggle"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Drawer mobile */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-drawer-header">
          <Link to="/" className="nav-logo">
            <Logo size={34} />
            <span>Gaby Coiffure</span>
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={26} />
          </button>
        </div>
        <nav aria-label="Navigation mobile">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a
          className="btn btn-whatsapp drawer-cta"
          href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre rendez-vous · {CONTACT.brandName}
        </a>
      </div>
    </>
  );
}