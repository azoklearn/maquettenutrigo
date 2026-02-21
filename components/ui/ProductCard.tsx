'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import AddToCartButton from './AddToCartButton'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    slug,
    shortDescription,
    price,
    originalPrice,
    discount,
    images,
    rating,
    reviews,
    inStock,
    bestseller,
  } = product

  return (
    <div className="card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <Link href={`/produits/${slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-square bg-neutral-100 overflow-hidden">
          <Image
            src={images[0] || '/placeholder-product.jpg'}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discount && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discount}%
              </span>
            )}
            {bestseller && (
              <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                Best Seller
              </span>
            )}
          </div>

          {/* Stock */}
          {!inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="bg-white text-neutral-900 font-bold px-4 py-2 rounded-lg">
                Rupture de stock
              </span>
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="p-4">
          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
              {reviews && (
                <span className="text-sm text-neutral-500">({reviews})</span>
              )}
            </div>
          )}

          {/* Titre */}
          <h3 className="font-semibold text-neutral-900 mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>

          {/* Description */}
          {shortDescription && (
            <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
              {shortDescription}
            </p>
          )}

          {/* Prix */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-primary-600">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-neutral-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          {/* Bouton */}
          <AddToCartButton
            product={{
              id: product.id,
              variantId: product.id,
              name,
              price,
              image: images[0] || '/placeholder.svg',
              handle: slug,
            }}
            disabled={!inStock}
            fullWidth
            size="md"
          />
        </div>
      </Link>
    </div>
  )
}
