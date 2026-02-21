'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/produits' },
  { name: 'Nutrition Sportive', href: '/nutrition-sportive' },
  { name: 'Protéines', href: '/categories/proteines' },
  { name: 'Acides Aminés', href: '/categories/acides-amines' },
  { name: 'Minceur', href: '/categories/minceur' },
  { name: 'Nutrigo', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      {/* Bandeau promo */}
      <div className="bg-primary-600 text-white text-center py-2 text-sm">
        <p>🎉 Livraison gratuite dès 50€ d'achat</p>
      </div>

      {/* Header principal */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Nutrigo"
              width={180}
              height={180}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Recherche */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors">
              <Search className="w-4 h-4 text-neutral-500" />
              <span className="text-sm text-neutral-600">Rechercher...</span>
            </button>

            {/* Compte */}
            <Link
              href="/compte"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Mon compte"
            >
              <User className="w-5 h-5 text-neutral-700" />
            </Link>

            {/* Panier */}
            <Link
              href="/panier"
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Panier"
            >
              <ShoppingCart className="w-5 h-5 text-neutral-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-primary-600 text-white text-xs font-bold rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Menu mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <nav className="container-custom py-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
