'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, Package, MapPin, Heart, Settings, LogOut } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

// État de connexion simulé
const isLoggedIn = true

export default function ComptePage() {
  const [activeTab, setActiveTab] = useState('apercu')

  if (!isLoggedIn) {
    return (
      <Section className="py-20">
        <div className="max-w-md mx-auto">
          <div className="card p-8">
            <h1 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Se connecter
            </h1>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
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
                  Mot de passe
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-neutral-700">Se souvenir de moi</span>
                </label>
                <Link href="/compte/mot-de-passe-oublie" className="text-primary-600 hover:text-primary-700">
                  Mot de passe oublié ?
                </Link>
              </div>
              <Button variant="primary" size="lg" fullWidth>
                Se connecter
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-neutral-600">
                Pas encore de compte ?{' '}
                <Link href="/compte/inscription" className="text-primary-600 hover:text-primary-700 font-medium">
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>
    )
  }

  const menuItems = [
    { id: 'apercu', label: 'Aperçu', icon: User },
    { id: 'commandes', label: 'Mes commandes', icon: Package },
    { id: 'adresses', label: 'Adresses', icon: MapPin },
    { id: 'favoris', label: 'Favoris', icon: Heart },
    { id: 'parametres', label: 'Paramètres', icon: Settings },
  ]

  return (
    <>
      <Section background="gray" className="py-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900">
          Mon compte
        </h1>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Menu latéral */}
          <div className="lg:col-span-1">
            <div className="card p-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary-50 text-primary-600 font-medium'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                )
              })}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                <LogOut className="w-5 h-5" />
                Déconnexion
              </button>
            </div>
          </div>

          {/* Contenu */}
          <div className="lg:col-span-3">
            {activeTab === 'apercu' && (
              <div className="space-y-6">
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    Bienvenue, Giovani !
                  </h2>
                  <p className="text-neutral-600">
                    Gérez votre compte et suivez vos commandes depuis votre espace personnel.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="card p-6 text-center">
                    <Package className="w-10 h-10 mx-auto mb-3 text-primary-600" />
                    <h3 className="font-semibold text-neutral-900 mb-1">3 Commandes</h3>
                    <p className="text-sm text-neutral-600">En cours</p>
                  </div>
                  <div className="card p-6 text-center">
                    <Heart className="w-10 h-10 mx-auto mb-3 text-primary-600" />
                    <h3 className="font-semibold text-neutral-900 mb-1">12 Favoris</h3>
                    <p className="text-sm text-neutral-600">Sauvegardés</p>
                  </div>
                  <div className="card p-6 text-center">
                    <MapPin className="w-10 h-10 mx-auto mb-3 text-primary-600" />
                    <h3 className="font-semibold text-neutral-900 mb-1">2 Adresses</h3>
                    <p className="text-sm text-neutral-600">Enregistrées</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'commandes' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Mes commandes
                  </h2>
                </div>

                {[1, 2, 3].map((order) => (
                  <div key={order} className="card p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          Commande #NTG-{1000 + order}
                        </h3>
                        <p className="text-sm text-neutral-600">
                          Passée le {new Date().toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <Badge variant="warning">En cours</Badge>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                      <span className="text-neutral-700">Total: <strong>89,97 €</strong></span>
                      <Button variant="outline" size="sm">
                        Voir détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'adresses' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Mes adresses
                  </h2>
                  <Button variant="primary" size="sm">
                    Ajouter une adresse
                  </Button>
                </div>

                <div className="card p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-neutral-900">Adresse principale</h3>
                    <Badge variant="primary" size="sm">Par défaut</Badge>
                  </div>
                  <p className="text-neutral-700">
                    Giovani Schmitt<br />
                    123 Rue Example<br />
                    75001 Paris<br />
                    France<br />
                    07 82 54 01 67
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                      Supprimer
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'favoris' && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Mes favoris
                </h2>
                <div className="text-center py-12 card">
                  <Heart className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
                  <p className="text-neutral-600">
                    Vous n'avez pas encore de produits favoris.
                  </p>
                  <Link href="/produits" className="inline-block mt-4">
                    <Button variant="primary">
                      Découvrir nos produits
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'parametres' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-neutral-900">
                  Paramètres du compte
                </h2>

                <div className="card p-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">
                    Informations personnelles
                  </h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Prénom
                        </label>
                        <input
                          type="text"
                          defaultValue="Giovani"
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Nom
                        </label>
                        <input
                          type="text"
                          defaultValue="Schmitt"
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="giova_sch@outlook.com"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        defaultValue="0782540167"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <Button variant="primary">
                      Enregistrer les modifications
                    </Button>
                  </form>
                </div>

                <div className="card p-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">
                    Modifier le mot de passe
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Mot de passe actuel
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Nouveau mot de passe
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Confirmer le mot de passe
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                    </div>
                    <Button variant="secondary">
                      Modifier le mot de passe
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}
