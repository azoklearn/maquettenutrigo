'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { products } from '@/lib/data'

// Exemple de panier (à remplacer par un state global)
const cartItemsExample = [
  { product: products[0], quantity: 2 },
  { product: products[1], quantity: 1 },
]

export default function PanierPage() {
  const [cartItems, setCartItems] = useState(cartItemsExample)

  const updateQuantity = (productId: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (productId: string) => {
    setCartItems(items => items.filter(item => item.product.id !== productId))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal >= 50 ? 0 : 4.99
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <Section className="py-20">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-20 h-20 mx-auto mb-6 text-neutral-300" />
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Votre panier est vide
          </h1>
          <p className="text-neutral-600 mb-8">
            Découvrez nos produits et ajoutez-les à votre panier pour commencer vos achats.
          </p>
          <Link href="/produits">
            <Button variant="primary" size="lg">
              Découvrir nos produits
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </div>
      </Section>
    )
  }

  return (
    <>
      {/* Header */}
      <Section background="gray" className="py-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900">
          Mon panier ({cartItems.length})
        </h1>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="card p-4 lg:p-6">
                  <div className="flex gap-4">
                    {/* Image */}
                    <Link
                      href={`/produits/${item.product.slug}`}
                      className="relative w-24 h-24 flex-shrink-0 bg-neutral-100 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={item.product.images[0] || '/placeholder-product.jpg'}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </Link>

                    {/* Infos */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/produits/${item.product.slug}`}>
                        <h3 className="font-semibold text-neutral-900 hover:text-primary-600 mb-1">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-neutral-600 mb-3">
                        {item.product.brand}
                      </p>

                      {/* Actions mobile */}
                      <div className="flex items-center justify-between lg:hidden">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded hover:bg-neutral-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded hover:bg-neutral-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-primary-600">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions desktop */}
                    <div className="hidden lg:flex items-center gap-6">
                      {/* Quantité */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded hover:bg-neutral-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded hover:bg-neutral-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Prix */}
                      <div className="w-32 text-right">
                        <p className="font-bold text-lg text-primary-600">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {formatPrice(item.product.price)} / unité
                        </p>
                      </div>

                      {/* Supprimer */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-neutral-400 hover:text-red-600 transition-colors"
                        aria-label="Supprimer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Bouton supprimer mobile */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="lg:hidden mt-3 text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>

            {/* Code promo */}
            <div className="card p-6 mt-6">
              <h3 className="font-semibold text-neutral-900 mb-3">
                Code promo
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Entrez votre code"
                  className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
                <Button variant="secondary">
                  Appliquer
                </Button>
              </div>
            </div>
          </div>

          {/* Résumé */}
          <div>
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">
                Résumé
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-neutral-700">
                  <span>Sous-total</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-700">
                  <span>Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratuite' : formatPrice(shipping)}
                  </span>
                </div>
                {subtotal < 50 && (
                  <p className="text-sm text-primary-600">
                    Plus que {formatPrice(50 - subtotal)} pour la livraison gratuite !
                  </p>
                )}
              </div>

              <div className="border-t border-neutral-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold text-neutral-900">
                  <span>Total</span>
                  <span className="text-primary-600">{formatPrice(total)}</span>
                </div>
              </div>

              <Button variant="primary" size="lg" fullWidth className="mb-3">
                Passer la commande
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>

              <Link href="/produits">
                <Button variant="ghost" size="lg" fullWidth>
                  Continuer mes achats
                </Button>
              </Link>

              {/* Avantages */}
              <div className="mt-6 pt-6 border-t border-neutral-200 space-y-3 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  <span>Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  <span>Livraison rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  <span>Retour gratuit sous 30 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
