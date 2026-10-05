export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
}

/**
 * ============================================================
 *  TÉMOIGNAGES — Exemples de démonstration.
 *  Remplacez par de VRAIS avis dès qu'ils sont disponibles.
 * ============================================================
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aïcha',
    rating: 5,
    text: "Un travail magnifique, très professionnel. J'ai adoré le résultat et la douceur avec laquelle mes cheveux ont été traités."
  },
  {
    id: 't2',
    name: 'Nadia',
    rating: 5,
    text: "Gaby est une vraie artiste. Mes braids ont tenu des semaines et tout le monde me demandait où je les avais faites !"
  },
  {
    id: 't3',
    name: 'Fatou',
    rating: 5,
    text: "Ponctuelle, soignée et passionnée. On sent l'amour du métier dans chaque détail. Je recommande à 100 %."
  }
];