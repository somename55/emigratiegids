import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { countries, getCountriesByContinent } from '@/data/countries'

export const metadata: Metadata = {
  title: 'Alle Emigratielanden - Ontdek Jouw Perfecte Bestemming | Emigratie Kompas',
  description: 'Ontdek meer dan 50 emigratiebestemmingen wereldwijd. Van Europa tot Azië, van Amerika tot Afrika - vind jouw ideale emigratieland.',
  openGraph: {
    title: 'Alle Emigratielanden - Ontdek Jouw Perfecte Bestemming',
    description: 'Ontdek meer dan 50 emigratiebestemmingen wereldwijd. Van Europa tot Azië, van Amerika tot Afrika - vind jouw ideale emigratieland.',
  },
}

export default function LandenPage() {
  const countriesByContinent = getCountriesByContinent()
  
  const continentOrder = ['Europa', 'Amerika\'s', 'Azië & Oceanië', 'Afrika', 'Midden-Oosten']

  return (
    <div className="min-h-screen bg-lightBg pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-darkText mb-6">
              Alle Emigratielanden
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ontdek meer dan 50 emigratiebestemmingen wereldwijd. Van Europa tot Azië, van Amerika tot Afrika - 
              vind jouw ideale emigratieland met onze uitgebreide landengids.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {continentOrder.map((continent) => (
                <a
                  key={continent}
                  href={`#${continent.toLowerCase().replace(/\s+/g, '-').replace('\'', '')}`}
                  className="bg-white hover:bg-primary/5 text-primary border border-primary/20 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  {continent}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countries by Continent */}
      {continentOrder.map((continent) => {
        const continentCountries = countriesByContinent[continent]
        if (!continentCountries || continentCountries.length === 0) return null

        const continentId = continent.toLowerCase().replace(/\s+/g, '-').replace('\'', '')
        
        return (
          <section 
            key={continent} 
            id={continentId}
            className="py-16 border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-3 mb-12">
                <MapPin className="h-8 w-8 text-primary" />
                <h2 className="font-serif text-4xl font-bold text-darkText">
                  {continent}
                </h2>
                <span className="text-lg text-gray-500">
                  ({continentCountries.length} landen)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {continentCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/landen/${country.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={country.image}
                        alt={`${country.name} landschap`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-serif text-xl font-bold text-white mb-1">
                          {country.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {country.description}
                      </p>
                      
                      <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                        <span className="font-medium text-sm">Meer informatie</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Emigratielanden</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">Continenten</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Actuele Informatie</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Nog niet gevonden wat je zoekt?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Onze emigratiegidsen helpen je stap voor stap bij het plannen van je emigratie. 
            Van praktische zaken tot persoonlijke begeleiding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gidsen"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Bekijk Emigratiegidsen
            </Link>
            <Link
              href="/essentials"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Emigratie Essentials
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}