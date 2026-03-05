import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Star, Users, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emigratiegidsen 2026 - Portugal & Spanje | Emigratie Kompas',
  description: 'Complete emigratiegidsen voor Portugal en Spanje 2026. Stap-voor-stap begeleiding, checklists en insider tips voor een succesvolle emigratie.',
  openGraph: {
    title: 'Emigratiegidsen 2026 - Portugal & Spanje',
    description: 'Complete emigratiegidsen voor Portugal en Spanje 2026. Stap-voor-stap begeleiding, checklists en insider tips voor een succesvolle emigratie.',
  },
}

export default function GidsenPage() {
  const guides = [
    {
      slug: 'portugal',
      title: 'Portugal Emigratiegids 2026',
      subtitle: 'De Complete Gids voor Emigreren naar Portugal',
      description: 'Van NHR-belastingregime tot Golden Visa - alles wat je moet weten over emigreren naar Portugal.',
      price: '€49',
      originalPrice: '€79',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800',
      highlights: [
        'NHR belastingregime uitgelegd',
        'Golden Visa mogelijkheden',
        'Beste regio\'s om te wonen',
        'Fiscaal nummer aanvragen',
        'Gezondheidszorg en SNS',
        'Portugees leren tips'
      ],
      testimonial: {
        text: "Deze gids heeft mijn emigratie naar Portugal zo veel makkelijker gemaakt. Alle praktische info op één plek!",
        author: "Sandra K., emigreerde naar Lissabon"
      },
      pages: 120,
      updated: '2026'
    },
    {
      slug: 'spanje',
      title: 'Spanje Emigratiegids 2026', 
      subtitle: 'De Complete Gids voor Emigreren naar Spanje',
      description: 'Costa Brava tot Andalusië - ontdek alle mogelijkheden voor een succesvol leven in Spanje.',
      price: '€49',
      originalPrice: '€79',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800',
      highlights: [
        'NIE nummer aanvragen',
        'Autonoom vs empleado',
        'Beste regio\'s per leeftijd',
        'Sociale zekerheid',
        'Gezondheidszorg systeem',
        'Spaans leren strategieën'
      ],
      testimonial: {
        text: "Dankzij deze gids wist ik precies wat ik moest doen. Nu woon ik al 6 maanden gelukkig in Valencia!",
        author: "Mark V., emigreerde naar Valencia"
      },
      pages: 115,
      updated: '2026'
    }
  ]

  return (
    <div className="min-h-screen bg-lightBg pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-darkText mb-6">
              Emigratiegidsen 2026
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete, stap-voor-stap emigratiegidsen voor de populairste bestemmingen. 
              Van praktische checklists tot insider tips - alles wat je nodig hebt voor een succesvolle emigratie.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <Download className="h-5 w-5 text-primary" />
                <span className="text-gray-600">Instant Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-gray-600">4.9/5 Sterren</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-gray-600">1000+ Tevreden Klanten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {guides.map((guide) => (
              <div key={guide.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Nieuw {guide.updated}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-darkText mb-1">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{guide.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{guide.price}</div>
                      <div className="text-sm text-gray-500 line-through">{guide.originalPrice}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {guide.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-darkText mb-3">Wat krijg je:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {guide.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 text-sm text-gray-500 border-t border-gray-100 pt-4 mb-6">
                    <span>{guide.pages} pagina's</span>
                    <span>PDF formaat</span>
                    <span>Mobiel-vriendelijk</span>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-secondary/20 to-secondary/30 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700 italic mb-2">
                      "{guide.testimonial.text}"
                    </p>
                    <p className="text-xs text-gray-600">- {guide.testimonial.author}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/gidsen/${guide.slug}`}
                      className="flex-1 bg-accent hover:bg-accent/90 text-white text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Meer Info & Bestellen
                    </Link>
                    <Link
                      href={`/gidsen/${guide.slug}`}
                      className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                    >
                      Bekijk Preview
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Waarom Onze Emigratiegidsen?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-darkText mb-3">Actueel & Compleet</h3>
              <p className="text-gray-600">
                Alle informatie is up-to-date voor 2026 en gebaseerd op de laatste regelgeving en praktijkervaringen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-darkText mb-3">Door Experts</h3>
              <p className="text-gray-600">
                Geschreven door emigratie-experts en gecontroleerd door lokale specialisten in elk land.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-darkText mb-3">Instant Toegang</h3>
              <p className="text-gray-600">
                Na betaling krijg je direct toegang tot je gids en alle updates. Geen wachten, direct aan de slag!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Veelgestelde Vragen
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-darkText mb-2">
                Hoe ontvang ik mijn emigratiegids?
              </h3>
              <p className="text-gray-600">
                Na betaling ontvang je direct een download link via email. Je krijgt een PDF die je op alle apparaten kunt lezen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-darkText mb-2">
                Zijn de gidsen up-to-date voor 2026?
              </h3>
              <p className="text-gray-600">
                Ja, alle gidsen zijn volledig bijgewerkt voor 2026 met de laatste regelgeving, belastinginformatie en praktische tips.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-darkText mb-2">
                Krijg ik updates als er iets verandert?
              </h3>
              <p className="text-gray-600">
                Ja, als er belangrijke wijzigingen zijn in regelgeving of procedures, ontvang je automatisch de bijgewerkte versie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Begin vandaag met je emigratie
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Duizenden mensen gingen je voor. Met onze gidsen maak je dezelfde keuzes als succesvolle emigranten.
          </p>
          <Link
            href="#guides"
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Kies Jouw Gids
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}