# 📋 ACTIONS À FAIRE - CHECKLIST POUR VOUS

## 🎯 CE QUI EST DÉJÀ FAIT ✅

- ✅ Code Shopify intégré
- ✅ Panier fonctionnel
- ✅ Checkout connecté
- ✅ Boutons "Ajouter au panier" partout
- ✅ Context React pour state global
- ✅ API GraphQL configurée
- ✅ Documentation complète créée

---

## 📝 CE QUE VOUS DEVEZ FAIRE (Dans l'ordre)

### **ACTION 1 : Créer compte Shopify** ⏱️ 10 min

**→ https://shopify.com/fr**

1. Cliquez sur "Essai gratuit"
2. Email : `giova_sch@outlook.com`
3. Nom boutique : `nutrigo54`
4. Créez votre mot de passe

**✅ Fait quand :** Vous pouvez vous connecter à l'admin Shopify

---

### **ACTION 2 : Obtenir les tokens API** ⏱️ 5 min

**Dans Shopify Admin :**

1. **Paramètres** (en bas à gauche)
2. **Apps et canaux de vente**
3. **Développer des apps**
4. **Créer une app** → Nom : "Nutrigo Frontend"
5. **Configurer Storefront API**
6. Cochez ces permissions :
   - `unauthenticatedReadProduct`
   - `unauthenticatedReadProductInventory`  
   - `unauthenticatedReadProductListings`
   - `unauthenticatedWriteCheckout`
   - `unauthenticatedReadCheckout`
7. **Enregistrer**
8. **Installer l'app**
9. **COPIEZ le Storefront access token** (commence par `shpat_...`)

**✅ Fait quand :** Vous avez copié le token qui commence par `shpat_`

---

### **ACTION 3 : Configurer .env.local** ⏱️ 2 min

**Dans le fichier `.env.local` :**

Remplacez ces 2 lignes :

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=nutrigo54.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_COLLEZ_VOTRE_TOKEN_ICI
```

**✅ Fait quand :** Le fichier `.env.local` contient vos vraies valeurs

---

### **ACTION 4 : Ajouter des produits sur Shopify** ⏱️ 30 min

**Dans Shopify Admin → Produits → Ajouter un produit**

#### **Créez d'abord les Collections :**
1. **Produits** → **Collections** → **Créer une collection**
2. Créez :
   - Protéines (handle: `proteines`)
   - Acides Aminés (handle: `acides-amines`)
   - Minceur (handle: `minceur`)
   - Vitamines (handle: `vitamines-mineraux`)

#### **Ajoutez des produits :**

**Exemple - Produit 1 :**
- **Titre** : Whey Protein Isolate
- **Description** : Protéine de whey isolate ultra pure, idéale pour la prise de masse musculaire et la récupération.
- **Prix** : 49.99 EUR
- **Comparer au prix** : 59.99 EUR (pour la promo -17%)
- **Photos** : Téléchargez 2-3 images
- **SKU** : WPI-001
- **Stock** : 100
- **Poids** : 1 kg
- **Collection** : Protéines
- **Tags** : `whey, isolate, bestseller, featured`
- **Type de produit** : Protéines
- **Fournisseur** : Nutrigo Pro

**Répétez pour 5-10 produits minimum**

**✅ Fait quand :** Au moins 5 produits ajoutés avec photos

---

### **ACTION 5 : Configurer les paiements** ⏱️ 10 min

**Shopify Admin → Paramètres → Paiements**

1. Activez **Shopify Payments** (recommandé)
2. Ou configurez **Stripe** / **PayPal**
3. Remplissez les infos bancaires
4. **Mode Test** : Activez pour tester

**✅ Fait quand :** "Paiements activés" dans l'admin

---

### **ACTION 6 : Configurer l'expédition** ⏱️ 5 min

**Shopify Admin → Paramètres → Expédition et livraison**

1. **France métropolitaine** :
   - Standard : 4.99€
   - Gratuit : à partir de 50€
2. **Délais** : 2-3 jours ouvrés

**✅ Fait quand :** Zones de livraison configurées

---

### **ACTION 7 : Tester en local** ⏱️ 10 min

```bash
cd /Users/noanbarbelin/Desktop/nutrigo2
npm run dev
```

**Testez :**
1. Allez sur `http://localhost:3000/produits-shopify`
2. Vérifiez que vos produits Shopify s'affichent
3. Cliquez "Ajouter au panier"
4. Allez sur `/panier`
5. Cliquez "Passer la commande"
6. Vous devez être redirigé vers Shopify Checkout

**Testez un achat avec carte de test :**
- N° : `4242 4242 4242 4242`
- Date : `12/28`
- CVV : `123`

**✅ Fait quand :** Un achat test complet fonctionne

---

### **ACTION 8 : Configurer Vercel** ⏱️ 5 min

**Sur vercel.com → Votre projet → Settings → Environment Variables**

Ajoutez :
```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN = nutrigo54.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN = shpat_VOTRE_TOKEN
```

**✅ Fait quand :** Variables ajoutées sur Vercel

---

### **ACTION 9 : Redéployer sur Vercel** ⏱️ 2 min

```bash
git add .
git commit -m "Integration Shopify complete"
git push
```

Ou dans Vercel → **Deployments** → **Redeploy**

**✅ Fait quand :** Site redéployé et en ligne

---

### **ACTION 10 : Tester en production** ⏱️ 10 min

1. Allez sur votre site Vercel
2. Testez un achat complet
3. Vérifiez dans Shopify Admin que la commande apparaît
4. ✅ **C'EST EN LIGNE !**

---

## ⏱️ TEMPS TOTAL : ~1h30

---

## 🆘 EN CAS DE PROBLÈME

### **Les produits ne s'affichent pas :**
- Vérifiez que `.env.local` est correct
- Vérifiez que les tokens Shopify sont valides
- Redémarrez `npm run dev`

### **Le panier ne fonctionne pas :**
- Vérifiez la console navigateur (F12)
- Vérifiez que CartProvider est dans `layout.tsx`

### **Le checkout ne redirige pas :**
- Vérifiez les permissions Storefront API
- Vérifiez que `unauthenticatedWriteCheckout` est activé

### **Erreur de build :**
- Vérifiez que toutes les dépendances sont installées
- Faites `npm install` à nouveau

---

## 📞 SUPPORT

**Besoin d'aide ?**
- 📧 giova_sch@outlook.com
- 📱 0782540167
- 💬 Support Shopify 24/7 dans l'admin

---

## 🎊 APRÈS ÇA, C'EST FINI !

Votre client aura :
- ✅ Boutique en ligne complète
- ✅ Paiements sécurisés
- ✅ Interface admin simple
- ✅ Gestion commandes automatique
- ✅ Design sportif et moderne

**GO ! Commencez par l'ACTION 1 ! 💪🚀**
