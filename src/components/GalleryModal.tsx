import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/gallery';

interface GalleryModalProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryModal({ items, index, onClose, onPrev, onNext }: GalleryModalProps) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button className="modal-close" onClick={onClose} aria-label="Fermer">
        <X size={20} />
      </button>

      {items.length > 1 && (
        <button
          className="modal-nav modal-prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Image précédente"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
        <img className="modal-image" src={item.image} alt={item.title} />
        <div className="modal-caption">
          {item.title} — <span style={{ color: '#d4af37' }}>{item.category}</span>
        </div>
      </div>

      {items.length > 1 && (
        <button
          className="modal-nav modal-next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Image suivante"
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  );
}