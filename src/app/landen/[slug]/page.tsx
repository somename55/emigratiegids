import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Check, MapPin, Thermometer, Euro, Clock, Globe } from 'lucide-react'
import { countries, getCountryBySlug } from '@/data/countries'
import { essentials } from '@/data/essentials'

interface CountryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return countries.map((country) => ({
    slug: country.slug,
  }))
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const country = getCountryBySlug(resolvedParams.slug)
  
  if (!country) {
    return {
      title: 'Land niet gevonden - Emigratie Kompas',
    }
  }

  return {
    title: `Emigreren naar ${country.name} - Complete Gids | Emigratie Kompas`,
    description: country.description,
    openGraph: {
      title: `Emigreren naar ${country.name} - Complete Gids`,
      description: country.description,
      images: [country.image],
    },
  }
}

export default async function CountryPage({ params }: CountryPageProps) {
  const resolvedParams = await params
  const country = getCountryBySlug(resolvedParams.slug)

  if (!country) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-lightBg">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={country.image}
            alt={`${country.name} landschap`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/80" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 text-white/80 mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">{country.continent}</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
                Emigreren naar {country.name}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {country.description}
              </p>
              
              <Link
                href="/gidsen"
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Download Complete Gids
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-3">
                <Thermometer className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-darkText">Klimaat</h3>
              </div>
              <p className="text-sm text-gray-600">{country.climate}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-3">
                <Euro className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-darkText">Kosten</h3>
              </div>
              <p className="text-sm text-gray-600">{country.costOfLiving}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-darkText">Taal</h3>
              </div>
              <p className="text-sm text-gray-600">{country.language}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-3">
                <Euro className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-darkText">Valuta</h3>
              </div>
              <p className="text-sm text-gray-600">{country.currency}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-darkText">Tijdzone</h3>
              </div>
              <p className="text-sm text-gray-600">{country.timezone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Waarom kiezen voor {country.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {country.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-success" />
                  </div>
                </div>
                <div>
                  <p className="text-lg text-darkText">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat je moet regelen */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Wat moet je regelen voor emigratie?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze onderwerpen moet je goed voorbereiden voordat je naar {country.name} emigreert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentials.slice(0, 6).map((essential, index) => (
              <Link
                key={essential.slug}
                href={`/essentials/${essential.slug}`}
                className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary text-lg">📋</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-darkText group-hover:text-primary transition-colors mb-2">
                      {essential.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {essential.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/essentials"
              className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
            >
              Bekijk alle emigratie essentials →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Klaar om naar {country.name} te emigreren?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Download onze complete emigratiegids en krijg stap-voor-stap begeleiding voor jouw emigratie naar {country.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gidsen"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Download Emigratiegids
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