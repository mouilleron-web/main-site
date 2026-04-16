# Site Perso — Cédric Mouilleron

Site vitrine freelance développeur web, construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com).

## Prérequis

- Node.js >= 22.12.0

## Démarrage

```bash
npm install
npm run dev
```

Le serveur de développement démarre sur `localhost:4321`.

## Scripts

| Commande          | Description                          |
| :---------------- | :----------------------------------- |
| `npm run dev`     | Serveur de développement             |
| `npm run build`   | Build de production dans `./dist/`   |
| `npm run preview` | Prévisualiser le build en local      |

## Déploiement

Hébergé sur [Netlify](https://app.netlify.com). Le déploiement est automatique : chaque push sur `main` déclenche un build et met le site en ligne.

- **URL** : https://mouilleronweb.netlify.app
- **Build** : `npm run build` (configuré dans `netlify.toml`)
- **Dossier publié** : `dist/`

## Stack technique

- **Astro 6** — framework de génération statique
- **Tailwind CSS v4** — styles utilitaires avec thème personnalisé
- **Formspree** — backend du formulaire de contact
- **Google Fonts** — police Inter
