import Link from 'next/link'
import { ArrowRight, Package, Zap, Shield, Headphones } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import ProductCard from '@/components/ui/ProductCard'
import CategoryCard from '@/components/ui/CategoryCard'
import { products, categories, shopFeatures } from '@/lib/data'

export default function HomePage() {
  const featuredProducts = products.filter(p => p.featured || p.bestseller).slice(0, 4)
  const mainCategories = categories.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')"
            }}
          />
        </div>

        {/* Particules animées */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-500 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary-400 rounded-full animate-float-delay-1" />
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary-600 rounded-full animate-float-delay-2" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary-500 rounded-full animate-float-delay-3" />
        </div>
        
        {/* Contenu principal */}
        <div className="relative z-20 flex-1 flex items-center">
          <div className="container-custom py-16 lg:py-24 w-full">
            <div className="max-w-4xl pb-32 lg:pb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                <span className="text-sm font-medium text-white">Nouveau : Gamme Performance Pro</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight text-white animate-fade-in-up animation-delay-200">
                Dépassez Vos
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 animate-gradient">
                  Limites
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl animate-fade-in-up animation-delay-400">
                La nutrition sportive de pointe pour les athlètes qui visent l'excellence. 
                <strong className="text-primary-400"> Performance maximale garantie.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <Link href="/produits">
                  <Button size="lg" variant="primary" className="group transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-primary-500/50">
                    <Zap className="w-5 h-5 mr-2 inline" />
                    Découvrir nos produits
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                  </Button>
                </Link>
                <Link href="/nutrition-sportive">
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                    <Package className="w-5 h-5 mr-2 inline" />
                    Guide nutrition
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats avec animation - Fixed position */}
        <div className="relative z-30 bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="container-custom py-6 lg:py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { label: 'Produits', value: '500+', icon: '📦' },
                { label: 'Marques', value: '50+', icon: '⭐' },
                { label: 'Clients', value: '10K+', icon: '💪' },
                { label: 'Livraison', value: '24h', icon: '🚚' },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-110 transition-transform duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-xl lg:text-2xl mb-1 lg:mb-2">{stat.icon}</div>
                  <div className="text-2xl lg:text-4xl font-bold mb-1 text-white group-hover:text-primary-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-xs lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator - Hidden on mobile */}
        <div className="hidden lg:block absolute bottom-32 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowRight className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </section>

      {/* Catégories */}
      <Section
        title="Parcourir par catégorie"
        subtitle="Trouvez exactement ce dont vous avez besoin pour vos objectifs"
        centered
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCategories.map((category, index) => (
            <div 
              key={category.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </Section>

      {/* Produits Best Sellers */}
      <Section
        title="Nos Best Sellers"
        subtitle="Les produits préférés de nos clients"
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/produits">
            <Button variant="outline" size="lg">
              Voir tous les produits
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Avantages */}
      <Section background="primary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Package,
              title: 'Livraison Rapide',
              description: 'Expédition sous 24h partout en France',
            },
            {
              icon: Shield,
              title: 'Produits Certifiés',
              description: 'Qualité garantie et contrôlée',
            },
            {
              icon: Zap,
              title: 'Paiement Sécurisé',
              description: 'Transactions 100% protégées',
            },
            {
              icon: Headphones,
              title: 'Support Client',
              description: 'À votre écoute 7j/7',
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Rejoignez la communauté Nutrigo
              </h2>
              <p className="text-xl mb-6 text-primary-100">
                Bénéficiez de -10% sur votre première commande et accédez à des offres exclusives.
              </p>
              <Link href="/compte/inscription">
                <Button size="lg" variant="secondary">
                  Créer mon compte gratuit
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block h-full bg-primary-800/30 p-12">
              <div className="flex flex-col gap-4">
                {['Offres exclusives', 'Conseils personnalisés', 'Livraison suivie', 'Programme de fidélité'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
