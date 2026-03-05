import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { essentials } from '@/data/essentials'
import * as LucideIcons from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emigratie Essentials - Alles wat je moet regelen | Emigratie Kompas',
  description: 'Complete gids voor alle praktische zaken bij emigratie. Van AOW en pensioen tot huisdieren en visum - wij helpen je stap voor stap.',
  openGraph: {
    title: 'Emigratie Essentials - Alles wat je moet regelen',
    description: 'Complete gids voor alle praktische zaken bij emigratie. Van AOW en pensioen tot huisdieren en visum - wij helpen je stap voor stap.',
  },
}

export default function EssentialsPage() {
  return (
    <div className="min-h-screen bg-lightBg pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-darkText mb-6">
              Emigratie Essentials
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Alle praktische zaken die je moet regelen voor je emigratie. Van AOW en pensioen tot 
              huisdieren en visum - wij helpen je stap voor stap door het emigratieproces.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-success">
              <CheckCircle className="h-6 w-6" />
              <span className="font-medium">Actuele informatie voor 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentials.map((essential, index) => {
              // Get the Lucide icon component
              const IconComponent = (LucideIcons as any)[essential.icon] || LucideIcons.FileText
              
              return (
                <Link
                  key={essential.slug}
                  href={`/essentials/${essential.slug}`}
                  className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-darkText group-hover:text-primary transition-colors mb-3">
                        {essential.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {essential.description}
                      </p>
                      
                      <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                        <span className="font-medium text-sm">Lees meer</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Jouw Emigratie Stap voor Stap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emigreren is een groot avontuur. Wij helpen je om niets over het hoofd te zien 
              met onze systematische aanpak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-darkText mb-2">Planning</h3>
              <p className="text-sm text-gray-600">
                Bepaal je budget, tijdlijn en kies je bestemming
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-darkText mb-2">Administratie</h3>
              <p className="text-sm text-gray-600">
                Regel alle Nederlandse zaken en officiële documenten
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-darkText mb-2">Voorbereiding</h3>
              <p className="text-sm text-gray-600">
                Visum, huisvesting en praktische zaken in je nieuwe land
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold text-darkText mb-2">Verhuizing</h3>
              <p className="text-sm text-gray-600">
                Uitvoering van je emigratie en settling in je nieuwe thuis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Categories */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Essentials per Categorie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-bold text-darkText mb-4">
                Financiële Zaken
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AOW & Pensioen</li>
                <li>• Bankieren</li>
                <li>• Belastingen</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-bold text-darkText mb-4">
                Wonen & Leven
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wonen & Huis Kopen</li>
                <li>• Zorgverzekering</li>
                <li>• Onderwijs</li>
                <li>• Huisdieren</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-bold text-darkText mb-4">
                Juridisch & Administratief
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Visum & Verblijfsvergunning</li>
                <li>• Uitschrijven</li>
                <li>• Ondernemen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Klaar om te beginnen met je emigratie?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Onze complete emigratiegidsen bevatten alle essentials plus stap-voor-stap begeleiding, 
            checklists en exclusieve tips van emigratie-experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gidsen"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Bekijk Emigratiegidsen
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Persoonlijk Advies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}