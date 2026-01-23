import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <Section
        title="Contactez-nous"
        subtitle="Notre équipe est à votre écoute pour répondre à toutes vos questions"
        centered
        background="gray"
        className="py-12"
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Envoyez-nous un message
            </h2>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Sujet *
                </label>
                <select
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option>Question sur un produit</option>
                  <option>Suivi de commande</option>
                  <option>Retour / Échange</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
                  required
                />
              </div>

              <Button variant="primary" size="lg" fullWidth>
                <Send className="w-5 h-5 mr-2 inline" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <a
                      href="mailto:giova_sch@outlook.com"
                      className="text-neutral-700 hover:text-primary-600"
                    >
                      giova_sch@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Téléphone</h3>
                    <a
                      href="tel:0782540167"
                      className="text-neutral-700 hover:text-primary-600"
                    >
                      07 82 54 01 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Adresse</h3>
                    <p className="text-neutral-700">
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Horaires</h3>
                    <p className="text-neutral-700">
                      Lundi - Vendredi : 9h - 18h<br />
                      Samedi : 10h - 16h<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ rapide */}
            <div className="card p-6 bg-primary-50 border-primary-200">
              <h3 className="font-semibold text-neutral-900 mb-3">
                Questions fréquentes
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/faq#livraison" className="text-neutral-700 hover:text-primary-600">
                    → Délais de livraison
                  </a>
                </li>
                <li>
                  <a href="/faq#retour" className="text-neutral-700 hover:text-primary-600">
                    → Politique de retour
                  </a>
                </li>
                <li>
                  <a href="/faq#paiement" className="text-neutral-700 hover:text-primary-600">
                    → Modes de paiement
                  </a>
                </li>
                <li>
                  <a href="/faq#suivi" className="text-neutral-700 hover:text-primary-600">
                    → Suivi de commande
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
