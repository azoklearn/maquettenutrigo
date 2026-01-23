import Link from 'next/link'
import { Home, Search } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-neutral-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              <Home className="w-5 h-5 mr-2 inline" />
              Retour à l'accueil
            </Button>
          </Link>
          <Link href="/produits">
            <Button variant="outline" size="lg">
              <Search className="w-5 h-5 mr-2 inline" />
              Voir les produits
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
