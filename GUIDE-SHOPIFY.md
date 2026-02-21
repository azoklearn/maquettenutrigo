# 🛍️ GUIDE COMPLET SHOPIFY - NUTRIGO

## 🎯 CE QUI A ÉTÉ FAIT

✅ **Intégration Shopify complète** dans votre code Next.js  
✅ **Panier fonctionnel** avec localStorage  
✅ **Checkout Shopify** sécurisé  
✅ **API GraphQL** configurée  
✅ **Context React** pour le state global  
✅ **Bouton "Ajouter au panier"** fonctionnel  
✅ **Compteur panier** dans le header  

---

## 📋 CE QUE VOUS DEVEZ FAIRE MAINTENANT

### **ÉTAPE 1 : Créer votre boutique Shopify (10 minutes)**

#### 1.1 Inscription
1. Allez sur **https://shopify.com/fr**
2. Cliquez sur **"Essayer Shopify gratuitement"**
3. Entrez l'email : `giova_sch@outlook.com`
4. Créez votre mot de passe
5. Nom de la boutique : **"Nutrigo54"** ou **"Nutrigo-France"**

#### 1.2 Configuration de base
1. **Informations de la boutique** :
   - Nom : Nutrigo
   - Contact : giova_sch@outlook.com
   - Téléphone : 0782540167
   - Adresse : [Votre adresse]

2. **Paramètres → Paiements** :
   - Activer **Shopify Payments** (0% de frais)
   - Ou configurer Stripe/PayPal

3. **Paramètres → Expédition** :
   - Ajouter "France métropolitaine"
   - Livraison standard : 4.99€
   - Livraison gratuite : à partir de 50€

4. **Paramètres → Taxes** :
   - TVA France : 20% (automatique)

---

### **ÉTAPE 2 : Obtenir les clés API Shopify (5 minutes)**

#### 2.1 Créer une App Custom
1. Dans Shopify Admin → **Paramètres** → **Apps et canaux de vente**
2. Cliquez sur **"Développer des apps"**
3. Cliquez sur **"Créer une app"**
4. Nom de l'app : **"Nutrigo Frontend"**
5. Cliquez sur **"Créer une app"**

#### 2.2 Configurer les permissions
1. Cliquez sur **"Configurer Storefront API"**
2. **Cochez toutes ces permissions** :
   - ✅ `unauthenticatedReadProduct`
   - ✅ `unauthenticatedReadProductInventory`
   - ✅ `unauthenticatedReadProductListings`
   - ✅ `unauthenticatedWriteCheckout`
   - ✅ `unauthenticatedReadCheckout`
3. Cliquez sur **"Enregistrer"**

#### 2.3 Obtenir le Token
1. Cliquez sur **"Installer l'app"**
2. **COPIEZ** le **Storefront access token** (commence par `shpat_...`)
3. **IMPORTANT** : Sauvegardez-le, il ne sera affiché qu'une fois !

---

### **ÉTAPE 3 : Configurer les variables d'environnement (2 minutes)**

#### 3.1 Fichier local
1. Ouvrez le fichier **`.env.local`** dans votre projet
2. Remplacez ces valeurs :

```env
# Remplacez par VOS valeurs
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=nutrigo54.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_VOTRE_TOKEN_ICI
```

#### 3.2 Sur Vercel (pour la production)
1. Allez sur **vercel.com** → Votre projet
2. **Settings** → **Environment Variables**
3. Ajoutez les 2 variables :
   - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`
   - `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
4. Cliquez sur **"Save"**
5. **Redéployez** le site

---

### **ÉTAPE 4 : Ajouter vos produits sur Shopify (30 minutes)**

#### 4.1 Créer les Collections (Catégories)
1. **Produits** → **Collections**
2. Créez ces collections :
   - 📦 **Protéines** (handle: `proteines`)
   - ⚡ **Acides Aminés** (handle: `acides-amines`)
   - 🔥 **Minceur** (handle: `minceur`)
   - 🌿 **Vitamines & Minéraux** (handle: `vitamines-mineraux`)
   - ⚡ **Energy & Focus** (handle: `energy-focus`)
   - 🍫 **Barres & Snacks** (handle: `barres-snacks`)

#### 4.2 Ajouter des produits
1. **Produits** → **Ajouter un produit**

**Exemple : Whey Protein Isolate**

**Informations générales :**
- Titre : `Whey Protein Isolate`
- Description : Description complète du produit
- Prix : `49.99` EUR
- Comparer au prix : `59.99` EUR (pour afficher la promo)

**Médias :**
- Ajoutez 2-3 photos du produit

**Tarification :**
- Prix : 49.99€
- SKU : `WPI-001`

**Inventaire :**
- Cochez "Suivre la quantité"
- Quantité disponible : 100

**Expédition :**
- Poids : 1 kg

**Variantes :**
- Goût : Vanille, Chocolat, Fraise (si applicable)

**Organisation :**
- Type de produit : `Protéines`
- Fournisseur : `Nutrigo Pro`
- Collections : Sélectionnez `Protéines`
- Tags : `whey, isolate, bestseller, featured`

**Tags importants :**
- `bestseller` → Affiche badge "Best Seller"
- `featured` → Apparaît sur la page d'accueil
- `new` → Affiche badge "Nouveau"

#### 4.3 Répétez pour tous vos produits

---

### **ÉTAPE 5 : Tester l'intégration (10 minutes)**

1. **Redémarrez votre serveur local** :
```bash
npm run dev
```

2. **Testez ces fonctionnalités** :
   - ✅ Les produits Shopify s'affichent sur `/produits-shopify`
   - ✅ Cliquez sur "Ajouter au panier"
   - ✅ Le compteur du header s'incrémente
   - ✅ Allez sur `/panier`
   - ✅ Modifiez les quantités
   - ✅ Cliquez sur "Passer la commande"
   - ✅ Vous êtes redirigé vers Shopify Checkout

3. **Testez un achat complet** :
   - Utilisez les cartes de test Shopify
   - Numéro : `4242 4242 4242 4242`
   - Date : N'importe quelle date future
   - CVV : `123`

---

### **ÉTAPE 6 : Remplacer les pages statiques par Shopify (OPTIONNEL)**

**Pour le moment, j'ai créé `/produits-shopify` comme exemple.**

**Si vous voulez que TOUTES les pages utilisent Shopify :**

1. Je peux remplacer `/produits/page.tsx` par la version Shopify
2. Remplacer `/categories/[slug]/page.tsx`
3. Remplacer la page d'accueil pour afficher vrais produits

**Dites-moi si vous voulez que je le fasse !**

---

## 🎨 GESTION QUOTIDIENNE POUR VOTRE CLIENT

### Ajouter un produit (5 min)
1. Shopify Admin → **Produits** → **Ajouter un produit**
2. Remplir titre, description, prix, photos
3. Choisir collection
4. Ajouter tags (`bestseller`, `featured`)
5. **Enregistrer** → Produit visible instantanément sur le site !

### Modifier un produit (2 min)
1. **Produits** → Sélectionner le produit
2. Modifier prix, stock, description
3. **Enregistrer** → Mise à jour instantanée

### Gérer les commandes
1. **Commandes** → Voir toutes les commandes
2. Cliquer sur une commande pour voir détails
3. Marquer comme **"Expédiée"**
4. Client reçoit email automatique

### Suivre les ventes
1. **Analyses** → Dashboard complet
2. Chiffre d'affaires
3. Produits les plus vendus
4. Taux de conversion

---

## 💰 COÛTS

### Shopify
- **3 premiers mois** : 1€/mois
- **Ensuite** : 29€/mois (Basic)
- **Frais transaction** : 0% avec Shopify Payments

### Vercel (Frontend)
- **Gratuit** jusqu'à 100GB de bande passante

**Total : ~30€/mois après l'offre**

---

## 🔒 SÉCURITÉ

✅ **PCI-DSS Compliant** - Shopify gère tout  
✅ **Données bancaires** - Jamais stockées chez vous  
✅ **SSL/HTTPS** - Automatique  
✅ **3D Secure** - Protection fraude  

---

## 📊 FONCTIONNALITÉS SHOPIFY INCLUSES

### Pour le client (Admin)
- ✅ Gestion produits illimitée
- ✅ Gestion stock en temps réel
- ✅ Gestion commandes
- ✅ Gestion clients
- ✅ Codes promo et réductions
- ✅ Analytics détaillés
- ✅ Emails automatiques
- ✅ Export compta (CSV, Excel)

### Pour les acheteurs
- ✅ Panier persistant
- ✅ Checkout sécurisé Shopify
- ✅ Multi-devises (si activé)
- ✅ Récupération panier abandonné
- ✅ Suivi de commande
- ✅ Factures automatiques

---

## 🚀 PROCHAINES ÉTAPES

### Immédiatement :
1. ✅ Créer compte Shopify
2. ✅ Obtenir les tokens API
3. ✅ Les mettre dans `.env.local`
4. ✅ Ajouter 3-5 produits de test
5. ✅ Tester un achat

### Dans les 7 jours :
- Ajouter tous vos produits
- Configurer les collections
- Personnaliser emails Shopify
- Activer les paiements
- Tester en profondeur

### Après lancement :
- Activer Google Analytics
- Mettre en place remarketing
- Créer codes promos
- Lancer campagnes marketing

---

## 🆘 SUPPORT

### Problème avec Shopify ?
- 📧 Support Shopify 24/7 (chat en direct)
- 📚 https://help.shopify.com

### Problème avec le code ?
- 📧 Email : giova_sch@outlook.com
- 📱 Tél : 0782540167

---

## 📚 RESSOURCES UTILES

- [Shopify Admin Guide](https://help.shopify.com/fr)
- [Ajouter un produit](https://help.shopify.com/fr/manual/products/add-update-products)
- [Configurer les paiements](https://help.shopify.com/fr/manual/payments)
- [Configurer l'expédition](https://help.shopify.com/fr/manual/shipping)

---

## ✅ CHECKLIST FINALE

Avant de lancer en production :

- [ ] Compte Shopify créé
- [ ] Offre 1€/mois activée
- [ ] Tokens API obtenus
- [ ] Variables d'environnement configurées (local + Vercel)
- [ ] 5+ produits ajoutés avec photos
- [ ] Collections créées
- [ ] Paiements configurés (Shopify Payments ou Stripe)
- [ ] Expédition configurée
- [ ] Test d'achat complet effectué
- [ ] Emails de confirmation testés
- [ ] Site redéployé sur Vercel

---

## 🎊 FÉLICITATIONS !

**Votre site est maintenant un VRAI E-COMMERCE !** 🚀

Le client peut maintenant :
- 💼 Gérer ses produits facilement
- 📦 Recevoir et traiter les commandes
- 💰 Accepter les paiements
- 📊 Suivre ses ventes
- 📧 Communiquer avec les clients

**Tout cela avec une interface simple et professionnelle !**

---

## 🔥 BONUS : FONCTIONNALITÉS SHOPIFY À EXPLORER

### Maintenant disponible :
- Codes promo et réductions
- Cartes cadeaux
- Notifications email automatiques
- Récupération paniers abandonnés
- Programmes de fidélité (apps)
- Dropshipping (apps Oberlo, etc.)
- Multi-devises
- Multi-langues

### Apps Shopify utiles :
- **Klaviyo** : Email marketing
- **Judge.me** : Avis clients
- **Loox** : Photos clients
- **Smile.io** : Programme fidélité

---

## 📱 INTERFACE CLIENT MOBILE

Shopify a une **app mobile** excellente :
- 📱 iOS : App Store
- 🤖 Android : Google Play

Le client peut gérer sa boutique depuis son téléphone !

---

**Commencez par l'ÉTAPE 1 et suivez le guide pas à pas ! 💪**
