import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  /** Prix indicatif en FCFA — "À partir de X FCFA" ou "Sur devis" */
  price: string;
  /** Durée estimée */
  duration: string;
  /** Catégorie pour filtrage éventuel */
  category: string;
  /** Chemin image locale ou URL */
  image: string;
  /** Icône Lucide (optionnel) */
  icon?: LucideIcon;
}

/**
 * ============================================================
 *  PRESTATIONS — Modifiez librement cette liste.
 *  Les prix sont FICTIFS / placeholders.
 * ============================================================
 */
export const SERVICES: Service[] = [
  {
    id: 'braids',
    name: 'Braids',
    description: 'Tresses élégantes et durables, adaptées à votre style et à votre personnalité.',
    price: 'À partir de 2 000 FCFA',
    duration: '3h – 5h',
    category: 'Tresses',
    image: '/assets/services/braids.jpg'
  },
  {
    id: 'knotless',
    name: 'invisible locks',
    description: 'Tresses sans nœuds, légères et naturelles, parfaites pour un rendu soigné.',
    price: 'À partir de 2 000 FCFA',
    duration: '4h – 6h',
    category: 'Tresses',
    image: '/assets/services/invisible.jpg'
  },
  {
    id: 'cornrows',
    name: 'fulani braids',
    description: 'Nattes collées raffinées, motifs personnalisés et finitions impeccables.',
    price: 'À partir de 2 000 FCFA',
    duration: '2h – 4h',
    category: 'Tresses',
    image: '/assets/services/fulani.jpg'
  },
  {
    id: 'nattes',
    name: 'Nattes classiques',
    description: 'Nattes traditionnelles revisitées avec une touche moderne et élégante.',
    price: 'À partir de 2 000 FCFA',
    duration: '2h – 4h',
    category: 'Tresses',
    image: '/assets/services/nattes.jpg'
  },
  {
    id: 'locks',
    name: 'Locks',
    description: 'Entretien, reprise et création de locks avec un soin méticuleux.',
    price: 'À partir de 2 000 FCFA',
    duration: '2h – 5h',
    category: 'Locks',
    image: '/assets/services/locks.jpg'
  },
  {
    id: 'locks',
    name: 'Lud braids',
    description: 'Entretien, reprise et création de locks avec un soin méticuleux.',
    price: 'À partir de 2 000 FCFA',
    duration: '2h – 5h',
    category: 'Locks',
    image: '/assets/services/lud.jpg'
  }
];