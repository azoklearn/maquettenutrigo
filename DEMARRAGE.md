# 🚀 Guide de Démarrage - Nutrigo54.fr

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
nutrigo2/
├── app/                          # Pages Next.js 14 (App Router)
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   ├── produits/                # Catalogue produits
│   │   ├── page.tsx            # Liste des produits
│   │   └── [slug]/page.tsx     # Détail produit
│   ├── categories/              # Pages catégories
│   │   └── [slug]/page.tsx     # Catégorie dynamique
│   ├── panier/                  # Panier d'achat
│   ├── compte/                  # Espace client
│   │   ├── page.tsx            # Dashboard
│   │   └── inscription/        # Inscription
│   ├── contact/                 # Page contact
│   ├── a-propos/               # À propos
│   ├── faq/                    # Questions fréquentes
│   ├── nutrition-sportive/     # Page thématique
│   ├── mentions-legales/       # Mentions légales
│   ├── not-found.tsx           # Page 404
│   └── globals.css             # Styles globaux
│
├── components/                  # Composants réutilisables
│   ├── layout/                 # Composants de layout
│   │   ├── Header.tsx         # En-tête
│   │   └── Footer.tsx         # Pied de page
│   └── ui/                    # Composants UI
│       ├── Button.tsx         # Bouton
│       ├── ProductCard.tsx    # Carte produit
│       ├── CategoryCard.tsx   # Carte catégorie
│       ├── Badge.tsx          # Badge
│       ├── Container.tsx      # Conteneur
│       └── Section.tsx        # Section
│
├── lib/                        # Utilitaires et données
│   ├── types.ts               # Types TypeScript
│   ├── utils.ts               # Fonctions utilitaires
│   └── data.ts                # Données de démonstration
│
└── public/                     # Fichiers statiques
    └── logo.png               # Logo (SVG temporaire)
```

## 🎨 Pages Créées

### Pages Principales
- ✅ **Accueil** (`/`) - Hero, catégories, best sellers, avantages
- ✅ **Produits** (`/produits`) - Liste complète avec filtres
- ✅ **Détail Produit** (`/produits/[slug]`) - Galerie, infos, achat
- ✅ **Catégories** (`/categories/[slug]`) - Produits par catégorie
- ✅ **Panier** (`/panier`) - Gestion du panier
- ✅ **Compte** (`/compte`) - Dashboard utilisateur
- ✅ **Inscription** (`/compte/inscription`) - Création de compte

### Pages Informatives
- ✅ **Contact** (`/contact`) - Formulaire + coordonnées
- ✅ **À propos** (`/a-propos`) - Présentation entreprise
- ✅ **FAQ** (`/faq`) - Questions fréquentes
- ✅ **Nutrition Sportive** (`/nutrition-sportive`) - Page thématique
- ✅ **Mentions légales** (`/mentions-legales`)
- ✅ **404** - Page d'erreur personnalisée

## 🎨 Design System

### Couleurs
- **Primary (Vert)** : `primary-50` à `primary-900`
- **Neutral (Gris)** : `neutral-50` à `neutral-950`
- **White / Black** : Pour contraste

### Composants UI
- `Button` : 4 variants (primary, secondary, outline, ghost)
- `ProductCard` : Carte produit avec image, prix, badge, actions
- `CategoryCard` : Carte catégorie avec icône et description
- `Badge` : 5 variants (primary, secondary, success, warning, danger)
- `Section` : Container avec title/subtitle
- `Container` : Wrapper responsive

## 🔧 Fonctionnalités

### Actuellement Implémentées (UI)
- ✅ Navigation responsive avec menu mobile
- ✅ Catalogue produits avec filtres (UI)
- ✅ Pages produit détaillées
- ✅ Panier d'achat (UI)
- ✅ Espace client (UI)
- ✅ Formulaires de contact et inscription
- ✅ Footer avec newsletter
- ✅ Design mobile-first

### À Implémenter (Backend)
- ⏳ Authentification utilisateur
- ⏳ Gestion du panier (state global)
- ⏳ Système de paiement
- ⏳ Base de données produits
- ⏳ Gestion des commandes
- ⏳ Newsletter
- ⏳ Système de recherche

## 📝 Données de Démonstration

Le fichier `lib/data.ts` contient :
- 6 catégories principales
- 4 produits exemples
- Informations de contact
- Avantages de la boutique

**Important** : Remplacez ces données par une vraie base de données (MongoDB, PostgreSQL, etc.)

## 🎯 Prochaines Étapes

1. **Remplacer le logo** : Ajoutez votre vrai logo dans `/public/logo.png`
2. **Ajouter des images produits** : Créez un dossier `/public/products/`
3. **Configurer une base de données** : Prisma, MongoDB, Supabase, etc.
4. **Implémenter l'authentification** : NextAuth.js, Clerk, Auth0
5. **Ajouter un state management** : Zustand, Redux, Context API
6. **Configurer le paiement** : Stripe, PayPal
7. **Optimiser le SEO** : Métadonnées, sitemap, robots.txt
8. **Analytics** : Google Analytics, Plausible

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Build Production
```bash
npm run build
npm start
```

## 📞 Contact

- **Email** : giova_sch@outlook.com
- **Téléphone** : 07 82 54 01 67
- **Contact** : Schmitt Giovani

## 🎉 Site Complet et Prêt à l'Emploi !

Le site est maintenant **100% fonctionnel** en mode UI. Toutes les pages sont créées, le design est moderne et responsive, et la structure est professionnelle. Vous pouvez maintenant :

1. Lancer le projet avec `npm install && npm run dev`
2. Personnaliser les couleurs dans `tailwind.config.js`
3. Ajouter vos vrais produits dans `lib/data.ts`
4. Remplacer le logo
5. Implémenter le backend selon vos besoins

**Bon développement ! 🚀**
