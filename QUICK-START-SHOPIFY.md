# ⚡ DÉMARRAGE RAPIDE SHOPIFY - 30 MINUTES

## 🎯 OBJECTIF
Transformer votre site vitrine en e-commerce fonctionnel avec paiements réels.

---

## ✅ ÉTAPES RAPIDES

### **1️⃣ Créer Shopify (10 min)**

**→ https://shopify.com/fr**

- Inscription avec `giova_sch@outlook.com`
- Nom boutique : `nutrigo54`
- URL : `nutrigo54.myshopify.com`

### **2️⃣ Obtenir les tokens (5 min)**

**Shopify Admin → Paramètres → Apps → Développer des apps**

1. Créer app "Nutrigo Frontend"
2. Configurer Storefront API
3. Cocher : `unauthenticatedReadProduct`, `unauthenticatedWriteCheckout`
4. Installer l'app
5. **COPIER** le token (commence par `shpat_...`)

### **3️⃣ Configurer le code (2 min)**

**Fichier : `.env.local`**

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=nutrigo54.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_VOTRE_TOKEN_ICI
```

### **4️⃣ Ajouter des produits (10 min)**

**Shopify Admin → Produits → Ajouter**

**Produit exemple :**
- Titre : `Whey Protein Isolate`
- Prix : `49.99`
- Photos : 2-3 images
- Collection : `Protéines`
- Tags : `whey, bestseller, featured`
- Stock : `100`

Répétez pour 4-5 produits.

### **5️⃣ Tester (3 min)**

```bash
npm run dev
```

1. Allez sur `/produits-shopify`
2. Cliquez "Ajouter au panier"
3. Allez sur `/panier`
4. Cliquez "Passer la commande"
5. Testez le checkout

**Carte de test :**
- N° : `4242 4242 4242 4242`
- Date : `12/28`
- CVV : `123`

---

## 🚀 MISE EN PRODUCTION

### **Sur Vercel :**

1. **Settings** → **Environment Variables**
2. Ajoutez les 2 variables Shopify
3. Cliquez **"Redeploy"**
4. ✅ **E-commerce en ligne !**

---

## 🎊 C'EST FAIT !

Votre client peut maintenant :
- ✅ Vendre en ligne
- ✅ Accepter les paiements
- ✅ Gérer les commandes
- ✅ Suivre les ventes

**Total temps : 30 minutes !** ⏱️

---

## 📞 BESOIN D'AIDE ?

**Lisez le guide complet :** `GUIDE-SHOPIFY.md`

**Support :**
- Shopify : Chat 24/7 (dans l'admin)
- Technique : giova_sch@outlook.com
