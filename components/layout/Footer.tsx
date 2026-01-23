import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'Tous les produits', href: '/produits' },
    { name: 'Protéines', href: '/categories/proteines' },
    { name: 'Acides Aminés', href: '/categories/acides-amines' },
    { name: 'Minceur', href: '/categories/minceur' },
    { name: 'Vitamines', href: '/categories/vitamines-mineraux' },
  ],
  info: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
    { name: 'Livraison', href: '/livraison' },
    { name: 'Retours', href: '/retours' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/cgv' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { name: 'Cookies', href: '/cookies' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Newsletter */}
      <div className="bg-primary-600 text-white py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">
              Restez informé de nos offres
            </h3>
            <p className="mb-6 text-primary-100">
              Inscrivez-vous à notre newsletter et recevez -10% sur votre première commande
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* À propos */}
          <div>
            <Image
              src="/logo.png"
              alt="Nutrigo"
              width={180}
              height={180}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm mb-4">
              Votre boutique spécialisée en nutrition sportive et compléments alimentaires. 
              Qualité, authenticité et performance.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-neutral-800 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-neutral-800 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="font-semibold text-white mb-4">Boutique</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="font-semibold text-white mb-4">Informations</h4>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:giova_sch@outlook.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  giova_sch@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:0782540167"
                  className="hover:text-primary-400 transition-colors"
                >
                  07 82 54 01 67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bas */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-neutral-400">
              © {new Date().getFullYear()} Nutrigo. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
