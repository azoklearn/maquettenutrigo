import { Target, Award, Users, Heart } from 'lucide-react'
import Section from '@/components/ui/Section'
import Image from 'next/image'

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <Section
        background="gray"
        className="py-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            À propos de Nutrigo
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Votre partenaire de confiance pour la nutrition sportive et les compléments 
            alimentaires depuis 2020. Nous sommes passionnés par votre santé et votre performance.
          </p>
        </div>
      </Section>

      {/* Notre mission */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Chez <strong>Nutrigo</strong>, nous croyons que chacun mérite d'atteindre ses objectifs 
              de santé et de performance. C'est pourquoi nous sélectionnons rigoureusement les meilleurs 
              produits de nutrition sportive et compléments alimentaires du marché.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Nous travaillons exclusivement avec des marques reconnues et certifiées pour vous 
              garantir des produits de qualité supérieure, sûrs et efficaces.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Notre équipe d'experts est toujours disponible pour vous conseiller et vous accompagner 
              dans votre parcours vers une meilleure santé et des performances optimales.
            </p>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3] bg-white rounded-2xl overflow-hidden flex items-center justify-center p-8">
            <Image
              src="/logo.png"
              alt="Nutrigo"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Nos valeurs */}
      <Section background="gray">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
          Nos Valeurs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Award,
              title: 'Qualité Premium',
              description: 'Sélection rigoureuse des meilleurs produits et marques du marché',
            },
            {
              icon: Target,
              title: 'Performance',
              description: 'Des produits efficaces pour vous aider à atteindre vos objectifs',
            },
            {
              icon: Heart,
              title: 'Passion',
              description: 'Une équipe passionnée et dévouée à votre réussite',
            },
            {
              icon: Users,
              title: 'Accompagnement',
              description: 'Conseils personnalisés et support client réactif',
            },
          ].map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Nos engagements */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Nos Engagements
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Produits Certifiés',
                description: 'Tous nos produits sont certifiés et contrôlés pour garantir votre sécurité et leur efficacité.',
              },
              {
                title: 'Livraison Rapide',
                description: 'Expédition sous 24h et livraison gratuite dès 50€ d\'achat partout en France.',
              },
              {
                title: 'Service Client Réactif',
                description: 'Notre équipe est disponible 7j/7 pour répondre à toutes vos questions.',
              },
              {
                title: 'Satisfaction Garantie',
                description: 'Retour gratuit sous 30 jours si vous n\'êtes pas satisfait de votre achat.',
              },
              {
                title: 'Prix Compétitifs',
                description: 'Les meilleurs prix du marché avec des promotions régulières.',
              },
            ].map((engagement, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {engagement.title}
                  </h3>
                  <p className="text-neutral-700">
                    {engagement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section background="primary">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Besoin d'aide ?
          </h2>
          <p className="text-neutral-700 mb-6">
            Notre équipe est là pour vous accompagner dans votre parcours sportif et santé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Nous contacter
            </a>
            <a
              href="tel:0782540167"
              className="btn-secondary inline-flex items-center justify-center"
            >
              07 82 54 01 67
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
