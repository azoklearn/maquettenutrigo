import { Dumbbell, Flame, Zap, Heart } from 'lucide-react'
import Section from '@/components/ui/Section'
import CategoryCard from '@/components/ui/CategoryCard'
import ProductCard from '@/components/ui/ProductCard'
import { categories, products } from '@/lib/data'

export default function NutritionSportivePage() {
  const sportCategories = categories.slice(0, 4)
  const sportProducts = products.slice(0, 8)

  return (
    <>
      {/* Hero */}
      <Section background="gray">
        <div className="text-center max-w-3xl mx-auto py-8">
          <div className="text-6xl mb-4">💪</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Nutrition Sportive
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Découvrez notre gamme complète de produits pour optimiser vos performances, 
            accélérer votre récupération et atteindre vos objectifs sportifs.
          </p>
        </div>
      </Section>

      {/* Catégories */}
      <Section
        title="Catégories"
        subtitle="Trouvez les produits adaptés à vos besoins"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      {/* Avantages */}
      <Section background="primary">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Dumbbell,
              title: 'Performance',
              description: 'Optimisez vos entraînements et dépassez vos limites',
            },
            {
              icon: Zap,
              title: 'Énergie',
              description: 'Boostez votre énergie pour des séances intenses',
            },
            {
              icon: Heart,
              title: 'Récupération',
              description: 'Accélérez votre récupération musculaire',
            },
            {
              icon: Flame,
              title: 'Résultats',
              description: 'Atteignez vos objectifs plus rapidement',
            },
          ].map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Produits populaires */}
      <Section
        title="Produits Populaires"
        subtitle="Les best-sellers de la nutrition sportive"
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      {/* Guide */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Guide de la Nutrition Sportive
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Pour la Prise de Masse
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Protéines whey pour la construction musculaire</li>
                <li>• BCAA pour la récupération</li>
                <li>• Créatine pour la force et l'énergie</li>
                <li>• Gainers pour l'apport calorique</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Pour la Sèche
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Protéines isolate faibles en calories</li>
                <li>• Brûleurs de graisse thermogéniques</li>
                <li>• L-Carnitine pour l'oxydation des graisses</li>
                <li>• CLA pour la définition musculaire</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Pour l'Endurance
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Boissons énergétiques isotoniques</li>
                <li>• Gels énergétiques pour l'effort</li>
                <li>• BCAA pour limiter le catabolisme</li>
                <li>• Électrolytes pour l'hydratation</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Pour la Récupération
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Protéines caséine à diffusion lente</li>
                <li>• Glutamine pour la réparation musculaire</li>
                <li>• Oméga-3 anti-inflammatoires</li>
                <li>• ZMA pour un sommeil réparateur</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
