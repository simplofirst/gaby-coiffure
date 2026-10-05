import { useMemo, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/GalleryGrid';
import GalleryModal from '../components/GalleryModal';
import Reveal from '../components/Reveal';
import { GALLERY, GALLERY_CATEGORIES } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState<string>('Toutes');
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === 'Toutes' ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  const openModal = (i: number) => setModalIndex(i);
  const closeModal = () => setModalIndex(null);
  const prev = () =>
    setModalIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
  const next = () =>
    setModalIndex((i) => (i === null ? i : (i + 1) % items.length));

  return (
    <div className="page section">
      <div className="container">
        <SectionTitle
          eyebrow="Galerie"
          title="Nos plus belles réalisations"
          subtitle="Un aperçu de nos créations. Cliquez sur une image pour l'agrandir."
        />

        <div className="gallery-filters">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <Reveal>
          <GalleryGrid items={items} onOpen={openModal} />
        </Reveal>

        {items.length === 0 && (
          <p className="text-center" style={{ color: '#8a8175', marginTop: 40 }}>
            Aucune réalisation dans cette catégorie pour l'instant.
          </p>
        )}
      </div>

      {modalIndex !== null && items[modalIndex] && (
        <GalleryModal
          items={items}
          index={modalIndex}
          onClose={closeModal}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}