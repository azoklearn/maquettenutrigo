import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import ProductCard from '@/components/ui/ProductCard'
import { getAllProducts } from '@/lib/shopify-queries'
import { shopifyProductToProduct } from '@/lib/shopify-adapter'

export const metadata: Metadata = {
  title: 'Tous nos produits | Nutrigo',
  description: 'Découvrez notre gamme complète de nutrition sportive et compléments alimentaires',
}

export const revalidate = 60

export default async function ProduitsShopifyPage() {
  let products = []
  
  try {
    const shopifyProducts = await getAllProducts(50)
    products = shopifyProducts.map(shopifyProductToProduct)
  } catch (error) {
    console.error('Error fetching products:', error)
  }

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
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600">
              Aucun produit disponible. Configurez d'abord votre boutique Shopify.
            </p>
          </div>
        )}
      </Section>
    </>
  )
}
