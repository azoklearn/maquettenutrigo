import Link from 'next/link'
import { Mail, Lock, User, Phone } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function InscriptionPage() {
  return (
    <Section className="py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-3">
            Créer un compte
          </h1>
          <p className="text-neutral-600">
            Rejoignez Nutrigo et bénéficiez d'offres exclusives
          </p>
        </div>

        <div className="card p-8">
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Prénom *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Nom *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Téléphone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Mot de passe *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Confirmer le mot de passe *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded"
                required
              />
              <label htmlFor="terms" className="text-sm text-neutral-700">
                J'accepte les{' '}
                <Link href="/cgv" className="text-primary-600 hover:text-primary-700">
                  conditions générales de vente
                </Link>{' '}
                et la{' '}
                <Link href="/politique-confidentialite" className="text-primary-600 hover:text-primary-700">
                  politique de confidentialité
                </Link>
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="newsletter"
                className="mt-1 rounded"
              />
              <label htmlFor="newsletter" className="text-sm text-neutral-700">
                Je souhaite recevoir les offres et nouveautés par email
              </label>
            </div>

            <Button variant="primary" size="lg" fullWidth>
              Créer mon compte
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-neutral-600">
              Vous avez déjà un compte ?{' '}
              <Link href="/compte" className="text-primary-600 hover:text-primary-700 font-medium">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
