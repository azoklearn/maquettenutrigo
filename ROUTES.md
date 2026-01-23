# 🗺️ Routes et Pages Disponibles - Nutrigo54.fr

## Pages Principales

### 🏠 Accueil
- **Route** : `/`
- **Description** : Page d'accueil avec hero, catégories, best sellers, avantages
- **Composants** : Hero, CategoryCard, ProductCard, Features

### 🛍️ Produits
- **Route** : `/produits`
- **Description** : Liste complète des produits avec filtres et tri
- **Fonctionnalités** : Filtrage, tri, pagination

### 📦 Détail Produit
- **Route** : `/produits/[slug]`
- **Description** : Page détaillée d'un produit avec galerie, infos nutritionnelles
- **Exemples** :
  - `/produits/whey-protein-isolate`
  - `/produits/bcaa-811`
  - `/produits/fat-burner-thermogenique`
  - `/produits/creatine-monohydrate`

### 📂 Catégories
- **Route** : `/categories/[slug]`
- **Description** : Produits filtrés par catégorie
- **Exemples** :
  - `/categories/proteines`
  - `/categories/acides-amines`
  - `/categories/minceur`
  - `/categories/vitamines-mineraux`
  - `/categories/energy-focus`
  - `/categories/barres-snacks`

## Espace Client

### 👤 Mon Compte
- **Route** : `/compte`
- **Description** : Dashboard utilisateur avec onglets
- **Sections** :
  - Aperçu
  - Mes commandes
  - Mes adresses
  - Mes favoris
  - Paramètres

### ✍️ Inscription
- **Route** : `/compte/inscription`
- **Description** : Formulaire de création de compte
- **Champs** : Prénom, nom, email, téléphone, mot de passe

## Panier & Commande

### 🛒 Panier
- **Route** : `/panier`
- **Description** : Gestion du panier d'achat
- **Fonctionnalités** :
  - Modification quantité
  - Suppression articles
  - Code promo
  - Résumé commande
  - Calcul livraison

## Pages Informatives

### 📧 Contact
- **Route** : `/contact`
- **Description** : Formulaire de contact + coordonnées
- **Contenu** :
  - Formulaire (nom, email, sujet, message)
  - Email : giova_sch@outlook.com
  - Téléphone : 07 82 54 01 67
  - Horaires d'ouverture

### ℹ️ À Propos
- **Route** : `/a-propos`
- **Description** : Présentation de l'entreprise Nutrigo
- **Sections** :
  - Notre mission
  - Nos valeurs
  - Nos engagements
  - CTA contact

### ❓ FAQ
- **Route** : `/faq`
- **Description** : Questions fréquentes
- **Catégories** :
  - Commande & Paiement
  - Livraison
  - Retours & Remboursements
  - Produits

### 💪 Nutrition Sportive
- **Route** : `/nutrition-sportive`
- **Description** : Page thématique sur la nutrition sportive
- **Sections** :
  - Catégories sport
  - Avantages
  - Produits populaires
  - Guide nutrition (prise de masse, sèche, endurance, récupération)

### 📜 Mentions Légales
- **Route** : `/mentions-legales`
- **Description** : Informations légales
- **Contenu** :
  - Éditeur du site
  - Hébergement
  - Propriété intellectuelle
  - RGPD

## Erreurs

### 🚫 Page 404
- **Route** : Toute route non définie
- **Description** : Page d'erreur personnalisée
- **Actions** : Retour accueil, voir produits

## Navigation Footer

### Boutique
- Tous les produits → `/produits`
- Protéines → `/categories/proteines`
- Acides Aminés → `/categories/acides-amines`
- Minceur → `/categories/minceur`
- Vitamines → `/categories/vitamines-mineraux`

### Informations
- À propos → `/a-propos`
- Contact → `/contact`
- Livraison → `/livraison` (à créer)
- Retours → `/retours` (à créer)
- FAQ → `/faq`

### Légal
- Mentions légales → `/mentions-legales`
- CGV → `/cgv` (à créer)
- Politique de confidentialité → `/politique-confidentialite` (à créer)
- Cookies → `/cookies` (à créer)

## Routes à Créer (Optionnelles)

- `/livraison` - Informations de livraison
- `/retours` - Politique de retours
- `/cgv` - Conditions générales de vente
- `/politique-confidentialite` - RGPD
- `/cookies` - Politique cookies
- `/marques` - Liste des marques
- `/marques/[slug]` - Page marque
- `/blog` - Blog nutrition
- `/blog/[slug]` - Article blog
- `/promotions` - Offres spéciales
- `/nouveautes` - Nouveaux produits
- `/compte/mot-de-passe-oublie` - Réinitialisation
- `/compte/commandes/[id]` - Détail commande
- `/checkout` - Page de paiement

## Total Pages Créées : 17+

✅ Toutes les pages principales sont **fonctionnelles et prêtes à l'emploi** !
