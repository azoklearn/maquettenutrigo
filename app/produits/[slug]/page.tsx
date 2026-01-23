'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ShoppingCart, Heart, Share2, Package, Shield, Truck } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import ProductCard from '@/components/ui/ProductCard'
import Badge from '@/components/ui/Badge'
import { products } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import { notFound } from 'next/navigation'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)
  
  if (!product) {
    notFound()
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-600">
            <a href="/" className="hover:text-primary-600">Accueil</a>
            <span>/</span>
            <a href="/produits" className="hover:text-primary-600">Produits</a>
            <span>/</span>
            <a href={`/categories/${product.category.toLowerCase()}`} className="hover:text-primary-600">
              {product.category}
            </a>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Détails produit */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galerie images */}
          <div>
            <div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden mb-4">
              <Image
                src={product.images[selectedImage] || '/placeholder-product.jpg'}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.discount && (
                <Badge variant="danger" size="lg" className="absolute top-4 left-4">
                  -{product.discount}%
                </Badge>
              )}
            </div>
            
            {/* Miniatures */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary-600'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informations */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">{product.brand}</Badge>
              {product.bestseller && <Badge variant="primary">Best Seller</Badge>}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-neutral-600">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>
            )}

            {/* Prix */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl font-bold text-primary-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-neutral-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-600">TVA incluse, livraison calculée à la caisse</p>
            </div>

            {/* Description */}
            <p className="text-neutral-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Stock */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Package className="w-5 h-5" />
                  <span className="font-medium">En stock - Expédition sous 24h</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <Package className="w-5 h-5" />
                  <span className="font-medium">Rupture de stock</span>
                </div>
              )}
            </div>

            {/* Quantité */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Quantité
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-lg hover:bg-neutral-50"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 h-10 text-center border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-lg hover:bg-neutral-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Ajouter au panier
              </Button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-neutral-300 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-neutral-300 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Avantages */}
            <div className="border-t border-neutral-200 pt-6 space-y-3">
              <div className="flex items-center gap-3 text-neutral-700">
                <Truck className="w-5 h-5 text-primary-600" />
                <span>Livraison gratuite dès 50€</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <Shield className="w-5 h-5 text-primary-600" />
                <span>Produits certifiés et contrôlés</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <Package className="w-5 h-5 text-primary-600" />
                <span>Retour gratuit sous 30 jours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Informations nutritionnelles */}
        {product.nutritionalInfo && (
          <div className="mt-12 border-t border-neutral-200 pt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Informations nutritionnelles
            </h2>
            <div className="grid md:grid-cols-2 gap-6 bg-neutral-50 rounded-xl p-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Par portion</h3>
                <div className="space-y-2 text-neutral-700">
                  <p><strong>Portion:</strong> {product.nutritionalInfo.servingSize}</p>
                  <p><strong>Portions par contenant:</strong> {product.nutritionalInfo.servingsPerContainer}</p>
                  {product.nutritionalInfo.calories && (
                    <p><strong>Calories:</strong> {product.nutritionalInfo.calories} kcal</p>
                  )}
                  {product.nutritionalInfo.protein && (
                    <p><strong>Protéines:</strong> {product.nutritionalInfo.protein}</p>
                  )}
                  {product.nutritionalInfo.carbs && (
                    <p><strong>Glucides:</strong> {product.nutritionalInfo.carbs}</p>
                  )}
                  {product.nutritionalInfo.fats && (
                    <p><strong>Lipides:</strong> {product.nutritionalInfo.fats}</p>
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Ingrédients</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {product.nutritionalInfo.ingredients}
                </p>
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* Produits similaires */}
      {relatedProducts.length > 0 && (
        <Section
          title="Produits similaires"
          subtitle="Ces produits pourraient également vous intéresser"
          centered
          background="gray"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
