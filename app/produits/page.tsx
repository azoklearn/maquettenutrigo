import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Tous nos produits | Nutrigo',
  description: 'Découvrez notre gamme complète de nutrition sportive et compléments alimentaires',
}

export default function ProduitsPage() {
  return (
    <>
      {/* Header */}
      <Section
        title="Tous nos produits"
        subtitle="Découvrez notre gamme complète de nutrition sportive et compléments alimentaires"
        centered
        background="gray"
        className="py-12"
      >
        <div />
      </Section>

      {/* Filtres */}
      <Section className="py-8 border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="font-medium text-neutral-900">{products.length}</span> produits
          </div>
          
          <div className="flex flex-wrap gap-3">
            <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600">
              <option>Toutes les catégories</option>
              <option>Protéines</option>
              <option>Acides Aminés</option>
              <option>Minceur</option>
              <option>Vitamines</option>
            </select>
            
            <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600">
              <option>Trier par: Popularité</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
              <option>Meilleures notes</option>
            </select>
          </div>
        </div>
      </Section>

      {/* Grille de produits */}
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">
            1
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50">
            2
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50">
            3
          </button>
          <button className="px-4 py-2 bg-white border border-neutral-300 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50">
            Suivant →
          </button>
        </div>
      </Section>
    </>
  )
}
