import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import ProductCard from '@/components/ui/ProductCard'
import { products, categories } from '@/lib/data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = categories.find(c => c.slug === params.slug)
  
  if (!category) {
    return {
      title: 'Catégorie non trouvée | Nutrigo',
    }
  }

  return {
    title: `${category.name} | Nutrigo`,
    description: category.description || `Découvrez notre sélection de ${category.name.toLowerCase()}`,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug)
  
  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter(p => 
    p.category.toLowerCase().replace(/\s+/g, '-') === params.slug ||
    p.category === category.name
  )

  return (
    <>
      {/* Header catégorie */}
      <Section
        background="gray"
        className="py-12"
      >
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-4">{category.icon || '📦'}</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-xl text-neutral-600">
              {category.description}
            </p>
          )}
          <div className="mt-4 text-neutral-500">
            {categoryProducts.length} produit{categoryProducts.length > 1 ? 's' : ''}
          </div>
        </div>
      </Section>

      {/* Filtres et tri */}
      <Section className="py-8 border-b border-neutral-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="font-medium text-neutral-900">{categoryProducts.length}</span> 
            {' '}produit{categoryProducts.length > 1 ? 's' : ''} disponible{categoryProducts.length > 1 ? 's' : ''}
          </div>
          
          <div className="flex flex-wrap gap-3">
            <select className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600">
              <option>Toutes les marques</option>
              <option>Nutrigo Pro</option>
              <option>Nutrigo Elite</option>
              <option>Nutrigo Burn</option>
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
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">
              Aucun produit disponible dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </Section>

      {/* Autres catégories */}
      <Section
        title="Découvrez aussi"
        subtitle="Explorez nos autres catégories"
        centered
        background="gray"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories
            .filter(c => c.slug !== params.slug)
            .slice(0, 4)
            .map((cat) => (
              <a
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="card p-6 text-center hover:shadow-soft-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{cat.icon || '📦'}</div>
                <h3 className="font-semibold text-neutral-900">{cat.name}</h3>
                <p className="text-sm text-neutral-600 mt-1">
                  {cat.productCount} produits
                </p>
              </a>
            ))}
        </div>
      </Section>
    </>
  )
}
