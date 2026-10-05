import type { GalleryItem } from '../data/gallery';

interface GalleryGridProps {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}

export default function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  return (
    <div className="gallery-grid">
      {items.map((item, i) => (
        <button
          key={item.id}
          className="gallery-item"
          onClick={() => onOpen(i)}
          aria-label={`Voir ${item.title}`}
          style={{ padding: 0 }}
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.background = 'linear-gradient(135deg, #1c1410, #0b0b0b)';
            }}
          />
          <div className="gallery-overlay">
            <span>{item.category}</span>
            <h4>{item.title}</h4>
          </div>
        </button>
      ))}
    </div>
  );
}