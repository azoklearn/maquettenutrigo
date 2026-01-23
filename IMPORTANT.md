# ⚠️ IMPORTANT - Logo à remplacer

## 🎨 Logo Actuel

Pour le moment, le logo est affiché en texte stylisé "NUTRIGO" avec un fond vert.

## 📝 Comment ajouter votre vrai logo ?

### Option 1 : Fichier PNG/JPG (Recommandé)

1. Préparez votre logo au format PNG ou JPG
2. Nommez-le `logo.png`
3. Placez-le dans `/public/logo.png`
4. Le logo doit avoir une taille recommandée de **200x60 pixels** (ou proportions similaires)

### Option 2 : Fichier SVG

1. Préparez votre logo au format SVG
2. Nommez-le `logo.svg`
3. Placez-le dans `/public/logo.svg`

Puis mettez à jour les fichiers suivants :

**components/layout/Header.tsx** (lignes ~37-41) :
```tsx
<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"  // ou /logo.svg
    alt="Nutrigo"
    width={200}
    height={60}
    className="h-10 lg:h-12 w-auto"
    priority
  />
</Link>
```

**components/layout/Footer.tsx** (lignes ~61-65) :
```tsx
<Image
  src="/logo.png"  // ou /logo.svg
  alt="Nutrigo"
  width={200}
  height={60}
  className="h-10 w-auto mb-4 brightness-0 invert"
/>
```

## 📐 Spécifications Logo

- **Format** : PNG, SVG ou JPG
- **Taille recommandée** : 200x60 pixels (ratio 10:3)
- **Fond** : Transparent (PNG/SVG) recommandé
- **Couleurs** : Respecter la charte (Blanc/Vert/Noir)

## 🔧 Après avoir ajouté votre logo

Le site se rechargera automatiquement et votre logo apparaîtra dans :
- ✅ Le header (en haut de toutes les pages)
- ✅ Le footer (en bas de toutes les pages)
- ✅ La page "À propos"

---

**Votre logo actuel est un placeholder temporaire. Remplacez-le dès que possible par votre vrai logo Nutrigo !** 🎨
