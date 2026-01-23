import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Category } from '@/lib/types'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { name, slug, description, image, icon, productCount } = category

  return (
    <Link
      href={`/categories/${slug}`}
      className="card group hover:border-primary-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image ou icône */}
      <div className="relative h-48 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-6xl">{icon || '📦'}</span>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
          <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
        </div>

        {description && (
          <p className="text-neutral-600 text-sm mb-3">
            {description}
          </p>
        )}

        {productCount !== undefined && (
          <p className="text-sm text-neutral-500">
            {productCount} produit{productCount > 1 ? 's' : ''}
          </p>
        )}
      </div>
    </Link>
  )
}
