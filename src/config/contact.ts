/**
 * ============================================================
 *  CONFIGURATION CENTRALE — GABY COIFFURE
 *  Modifiez UNIQUEMENT ce fichier pour changer les coordonnées.
 *  Les valeurs ci-dessous sont des PLACEHOLDERS à remplacer.
 * ============================================================
 */

export const CONTACT = {
  /** Nom de la marque */
  brandName: 'Gaby Coiffure',

  /** Slogan principal */
  tagline: 'Révélez votre beauté.',

  /** Numéro WhatsApp au format international SANS + ni espaces */
  whatsapp: '237682267999', // ← REMPLACER (ex: 237690000000)

  /** Numéro de téléphone affiché (peut contenir + et espaces) */
  phone: '+237 682 26 79 99', // ← REMPLACER

  /** Adresse (placeholder) */
  address: '[Monti-nkilgoué]', // ← REMPLACER

  /** Ville / pays */
  city: 'Yaoundé, Cameroun', // ← REMPLACER

  /** Horaires d'ouverture */
  hours: [
    { days: 'Lundi – Vendredi', time: '09h00 – 17h00' },
    { days: 'Samedi', time: '08h00 – 20h00' },
    { days: 'Dimanche', time: 'Sur rendez-vous' }
  ],

  /** Réseaux sociaux — remplacez les "#" par les vraies URLs */
  socials: {
    instagram: '#', // ex: https://instagram.com/gabycoiffure
    tiktok: 'https://tiktok.com/@simplicenostalgie',    // ex: https://tiktok.com/@gabycoiffure
    facebook: 'https://facebook.com/la.simplicite.2023'   // ex: https://facebook.com/gabycoiffure
  },

  /** Lien Google Maps (optionnel — laissez '#' si non disponible) */
  mapsUrl: '#',

  /** Email de contact (optionnel) */
  email: 'mabadeboga@gmail.com'
} as const;

/**
 * Construit un lien WhatsApp cliquable avec message prérempli.
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Message par défaut pour le bouton WhatsApp flottant. */
export const DEFAULT_WHATSAPP_MESSAGE =
  `Bonjour Gaby 👋🏾\n\nJe vous contacte depuis votre site web. J'aimerais avoir des informations.`;