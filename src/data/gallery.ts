export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

/**
 * ============================================================
 *  GALERIE — Remplacez les images par vos vraies photos.
 *  Déposez vos fichiers dans : public/assets/gallery/
 * ============================================================
 */
export const GALLERY_CATEGORIES = [
  'Toutes',
  'Braids',
  'Knotless',
  'Nattes',
  'Locks',
  'Perruques',
  'Coiffure naturelle'
] as const;

export const GALLERY: GalleryItem[] = [
  { id: 'g1',  title: 'Rastas',                category: 'Braids',             image: '/assets/services/braids.jpg' },
  { id: 'g2',  title: 'Lud braids',            category: 'Braids',           image: '/assets/services/lud.jpg' },
  { id: 'g3',  title: 'Nattes collées',        category: 'Nattes',             image: '/assets/services/nattes.jpg' },
  { id: 'g4',  title: 'Locks soignées',        category: 'Locks',              image: '/assets/services/locks.jpg' },
  { id: 'g5',  title: 'Fulani braids',         category: 'Braids',          image: '/assets/services/fulani3.jpg' },
  { id: 'g7',  title: 'Fulani braids',         category: 'Braids',             image: '/assets/services/fulani2.jpg' },
  { id: 'g8',  title: 'Fulani braids',         category: 'Braids',           image: '/assets/services/fulani1.jpg' },
  { id: 'g9',  title: 'Fulani braids',         category: 'Braids',             image: '/assets/services/fulani.jpg' },
  { id: 'g10',  title: 'Fulani braids',         category: 'Locks',             image: '/assets/services/invisible.jpg' }
];