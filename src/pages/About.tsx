import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <div className="page section">
      <div className="container">
        <SectionTitle
          eyebrow="À propos"
          title="Gaby, l'art de sublimer"
          subtitle="Une professionnelle passionnée, à l'écoute de chaque cliente."
        />

        <div className="about-grid">
          <Reveal>
            <div className="about-image">
              <img
                src="/assets/hero/about.jpg"
                alt="Portrait de Gaby"
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
              <h2>Une passion née depuis toujours</h2>
              <p>
                encore amatrice de coiffure mais déjà très performante dans ce qu'elle entreprend 
              </p>

              <h3 style={{ color: '#fbf8f3', marginTop: 28, marginBottom: 12 }}>
                Philosophie
              </h3>
              <p>
                Sublimer sans abîmer. Chaque cheveu est traité avec soin, chaque
                coiffure pensée pour durer et mettre en valeur votre personnalité.
              </p>

              <p className="about-quote">
                « La beauté commence par des cheveux qui se sentent bien. »
              </p>
            </div>
          </Reveal>
        </div>

        <div className="text-center mt-4">
          <Link to="/prestations" className="btn btn-primary">
            Découvrir les prestations
          </Link>
        </div>
      </div>
    </div>
  );
}