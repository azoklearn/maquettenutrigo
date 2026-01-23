'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Section from '@/components/ui/Section'

const faqs = [
  {
    category: 'Commande & Paiement',
    questions: [
      {
        q: 'Quels sont les modes de paiement acceptés ?',
        a: 'Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, et le paiement en 3x sans frais à partir de 100€.',
      },
      {
        q: 'Comment suivre ma commande ?',
        a: 'Dès l\'expédition de votre commande, vous recevrez un email avec un numéro de suivi. Vous pouvez également consulter le statut dans votre espace client.',
      },
      {
        q: 'Puis-je modifier ou annuler ma commande ?',
        a: 'Vous pouvez modifier ou annuler votre commande dans les 2 heures suivant sa validation. Passé ce délai, contactez notre service client.',
      },
    ],
  },
  {
    category: 'Livraison',
    questions: [
      {
        q: 'Quels sont les délais de livraison ?',
        a: 'Les commandes sont expédiées sous 24h (jours ouvrés). La livraison prend ensuite 2-3 jours ouvrés en France métropolitaine.',
      },
      {
        q: 'La livraison est-elle gratuite ?',
        a: 'Oui, la livraison est gratuite pour toute commande à partir de 50€. En dessous, les frais de port sont de 4,99€.',
      },
      {
        q: 'Livrez-vous à l\'international ?',
        a: 'Actuellement, nous livrons uniquement en France métropolitaine et en Corse. Nous prévoyons d\'étendre nos livraisons prochainement.',
      },
    ],
  },
  {
    category: 'Retours & Remboursements',
    questions: [
      {
        q: 'Quelle est votre politique de retour ?',
        a: 'Vous disposez de 30 jours pour retourner un produit non ouvert et dans son emballage d\'origine. Les frais de retour sont à votre charge sauf en cas d\'erreur de notre part.',
      },
      {
        q: 'Comment faire un retour ?',
        a: 'Connectez-vous à votre espace client, sélectionnez la commande concernée et cliquez sur "Retourner un article". Suivez ensuite les instructions.',
      },
      {
        q: 'Quand serai-je remboursé ?',
        a: 'Une fois votre retour réceptionné et contrôlé, le remboursement est effectué sous 5-7 jours ouvrés sur votre moyen de paiement initial.',
      },
    ],
  },
  {
    category: 'Produits',
    questions: [
      {
        q: 'Vos produits sont-ils certifiés ?',
        a: 'Oui, tous nos produits sont certifiés et contrôlés. Nous travaillons uniquement avec des marques reconnues et des laboratoires certifiés.',
      },
      {
        q: 'Comment choisir le bon produit ?',
        a: 'Notre équipe d\'experts est disponible pour vous conseiller. Vous pouvez nous contacter par téléphone, email ou via le chat en ligne.',
      },
      {
        q: 'Les produits ont-ils une date de péremption ?',
        a: 'Oui, tous nos produits ont une DLC (Date Limite de Consommation) indiquée sur l\'emballage. Nous garantissons minimum 6 mois de DLC à réception.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <>
      <Section
        title="Questions Fréquentes"
        subtitle="Trouvez rapidement des réponses à vos questions"
        centered
        background="gray"
        className="py-12"
      >
        <div />
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const id = `${categoryIndex}-${questionIndex}`
                  const isOpen = openItems.includes(id)
                  
                  return (
                    <div key={id} className="card overflow-hidden">
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                      >
                        <span className="font-semibold text-neutral-900 pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-neutral-700 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section background="primary">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Vous ne trouvez pas de réponse ?
          </h2>
          <p className="text-neutral-700 mb-6">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center justify-center"
          >
            Nous contacter
          </a>
        </div>
      </Section>
    </>
  )
}
