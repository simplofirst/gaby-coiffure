# Gaby Coiffure — Site vitrine

Site vitrine premium, **100 % frontend**, sans base de données ni backend.
Stack : **React + TypeScript + Vite**.

---

## 🚀 Démarrage local

```bash
npm install
npm run dev
```

Ouvrez http://localhost:5173

---

## 🏗️ Build de production

```bash
npm run build
```

Le build est généré dans `dist/`, prêt à être déployé.

Pour prévisualiser :

```bash
npm run preview
```

---

## ☁️ Déploiement sur Vercel

1. Poussez le projet sur GitHub.
2. Sur [vercel.com](https://vercel.com), cliquez **New Project** → importez le repo.
3. Vercel détecte automatiquement Vite. Laissez les réglages par défaut :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
4. Cliquez **Deploy**. C'est en ligne ✅

Aucune variable d'environnement n'est nécessaire.

---

## 🖼️ Remplacer le logo

Tous les fichiers du logo sont dans `public/assets/logo/` :

| Fichier           | Usage                                   |
|-------------------|-----------------------------------------|
| `gc.svg`          | Logo doré principal                     |
| `gc-mono.svg`     | Version monochrome                      |
| `gc-social.svg`   | Image Open Graph (partage réseaux)      |

Le favicon est dans `public/favicon/favicon.svg`.

Le composant React `<Logo />` (dans `src/components/Logo.tsx`) dessine le
monogramme GC en SVG. Modifiez-le si vous changez la forme du logo.

---

## 📸 Ajouter vos photos

Déposez simplement vos images (en `.jpg` de préférence) :

- `public/assets/hero/hero.jpg` — image de fond du Hero
- `public/assets/hero/about.jpg` — photo de Gaby
- `public/assets/services/*.jpg` — images des prestations
- `public/assets/gallery/*.jpg` — images de la galerie

Le site fonctionne **même si les images sont absentes** (dégradés en fallback).

---

## 📞 Modifier les coordonnées (WhatsApp, téléphone, adresse…)

Tout est centralisé dans **`src/config/contact.ts`**.

Remplacez notamment :

```ts
whatsapp: '237XXXXXXXXX',     // ← votre numéro WhatsApp (sans + ni espaces)
phone: '+237 XX XX XX XX XX', // ← numéro affiché
address: '[Adresse du salon]',
city: 'Douala, Cameroun',
socials: {
  instagram: '#',
  tiktok: '#',
  facebook: '#'
}
```

---

## 💇 Modifier les prestations

Fichier : **`src/data/services.ts`**

Chaque prestation contient :
- `name`, `description`
- `price` (ex : `"À partir de 15 000 FCFA"`)
- `duration`
- `category`
- `image` (chemin vers `public/assets/services/...`)

---

## 💰 Modifier les tarifs

Les tarifs sont **dans les mêmes objets** que les prestations
(`price` dans `src/data/services.ts`). La page `/tarifs` les affiche
automatiquement.

---

## 🖼️ Modifier la galerie

Fichier : **`src/data/gallery.ts`**

Ajoutez / modifiez les entrées et déposez les images correspondantes dans
`public/assets/gallery/`.

Les catégories sont définies dans `GALLERY_CATEGORIES`.

---

## 💬 Modifier les témoignages

Fichier : **`src/data/testimonials.ts`**

> ⚠️ Les témoignages actuels sont des **exemples de démonstration**.
> Remplacez-les par de vrais avis.

---

## 📱 WhatsApp — comment ça marche

- Le **bouton flottant** ouvre WhatsApp avec un message d'accueil.
- Le **formulaire de contact** construit un message prérempli
  (nom, prestation, date, heure, message) puis ouvre WhatsApp.
- Aucune donnée n'est envoyée à un serveur : tout passe par un lien `wa.me`.

---

## 🧱 Structure

```
src/
├── components/      → composants réutilisables
├── pages/           → pages (route)
├── data/            → données statiques (services, galerie, témoignages)
├── config/          → configuration centrale (contact)
├── styles/          → CSS global
├── App.tsx          → routes
└── main.tsx         → point d'entrée
```

---

## ✅ Bonnes pratiques respectées

- Aucune base de données / backend
- Aucune clé secrète / `.env` inutile
- Responsive mobile-first (320px → 1440px+)
- `prefers-reduced-motion` respecté
- Accessibilité : aria-labels, alt, focus
- SEO : meta description, Open Graph, titres hiérarchisés
- Build Vite optimisé

---

© 2026 Gaby Coiffure — Tous droits réservés.