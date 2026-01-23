import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nutrigo - Nutrition Sportive & Compléments Alimentaires',
  description: 'Boutique en ligne spécialisée dans la nutrition sportive et les compléments alimentaires multi-marques. Protéines, acides aminés, minceur et plus.',
  keywords: ['nutrition sportive', 'compléments alimentaires', 'protéines', 'musculation', 'fitness', 'santé'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
