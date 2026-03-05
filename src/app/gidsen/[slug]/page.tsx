import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Star, CheckCircle, ArrowLeft, Clock, FileText, Users, Shield } from 'lucide-react'

interface GuidePageProps {
  params: Promise<{ slug: string }>
}

const guides = {
  portugal: {
    title: 'Portugal Emigratiegids 2026',
    subtitle: 'De Complete Gids voor Emigreren naar Portugal',
    description: 'Ontdek hoe je succesvol naar Portugal emigreert met het NHR-belastingregime, Golden Visa mogelijkheden en alle praktische tips die je nodig hebt.',
    price: '€49',
    originalPrice: '€79',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800',
    pages: 120,
    chapters: [
      'Waarom Portugal? (De Voor- en Nadelen)',
      'NHR Belastingregime Volledig Uitgelegd',
      'Golden Visa vs D7 Visa: Welke Kies Je?',
      'De Beste Regio\'s om te Wonen',
      'Fiscaal Nummer (NIF) Aanvragen',
      'Portuguese Bankrekening Openen',
      'Gezondheidszorg en SNS Systeem',
      'Onderwijs voor Expat Kinderen',
      'Portugees Leren: Beste Methodes',
      'Huis Kopen vs Huren in Portugal',
      'Sociale Zekerheid en Uitkeringen',
      'Checklists en Templates'
    ],
    features: [
      'NHR belastingregime volledig uitgelegd',
      'Golden Visa mogelijkheden en vereisten',
      'D7 visa stap-voor-stap proces',
      'Beste regio\'s per budget en lifestyle',
      'Fiscaal nummer (NIF) aanvraag hulp',
      'Bankieren en financiën regelen',
      'Gezondheidszorg SNS toegang',
      'Portugese belasting aangifte tips',
      'Sociale zekerheid uitgelegd',
      'Huis kopen juridische aspecten',
      '20+ praktische checklists',
      'Email support bij vragen'
    ],
    testimonials: [
      {
        text: "Deze gids heeft mijn emigratie naar Portugal zo veel makkelijker gemaakt. Alle praktische info op één plek en de NHR uitleg was perfect!",
        author: "Sandra K.",
        location: "emigreerde naar Lissabon"
      },
      {
        text: "Dankzij de gids wist ik precies welke stappen ik moest zetten. Nu geniet ik van het leven in de Algarve zonder zorgen.",
        author: "Peter M.",
        location: "emigreerde naar Lagos"
      }
    ]
  },
  spanje: {
    title: 'Spanje Emigratiegids 2026',
    subtitle: 'De Complete Gids voor Emigreren naar Spanje', 
    description: 'Van Costa Brava tot Andalusië - ontdek alle mogelijkheden voor een succesvol leven in Spanje met praktische tips over NIE, belastingen en meer.',
    price: '€49',
    originalPrice: '€79',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800',
    pages: 115,
    chapters: [
      'Waarom Spanje? (Regio\'s Vergeleken)',
      'NIE Nummer Aanvragen Stap-voor-Stap',
      'Autonoom vs Empleado: Wat Past Bij Jou?',
      'De Beste Regio\'s per Leeftijdsgroep',
      'Sociale Zekerheid en Gezondheidszorg',
      'Spaanse Bankrekening en Hypotheek',
      'Belastingen voor Nederlandse Emigranten',
      'Onderwijs Systeem en Internationale Scholen',
      'Spaans Leren: Effectieve Strategieën',
      'Huis Kopen: Juridische Aspecten',
      'Auto Import en Rijbewijs',
      'Praktische Checklists en Formulieren'
    ],
    features: [
      'NIE nummer aanvraag uitgelegd',
      'Autonoom vs empleado vergelijking',
      'Beste regio\'s per levensfase',
      'Sociale zekerheid toegang',
      'Spaanse belasting systeem',
      'Gezondheidszorg en centro de salud',
      'Huis kopen juridische tips',
      'Auto import procedures',
      'Rijbewijs omwisseling',
      'Onderwijs opties kinderen',
      'Spaans leren strategieën',
      'Email support bij vragen'
    ],
    testimonials: [
      {
        text: "Dankzij deze gids wist ik precies wat ik moest doen. Nu woon ik al 6 maanden gelukkig in Valencia en alles liep soepel!",
        author: "Mark V.",
        location: "emigreerde naar Valencia"
      },
      {
        text: "De NIE procedure was dankzij de gids geen probleem. Zelfs mijn Spaanse vrienden waren onder de indruk van mijn voorbereiding.",
        author: "Lisa T.",
        location: "emigreerde naar Barcelona"
      }
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const guide = guides[resolvedParams.slug as keyof typeof guides]
  
  if (!guide) {
    return {
      title: 'Gids niet gevonden - Emigratie Kompas',
    }
  }

  return {
    title: `${guide.title} | Emigratie Kompas`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      images: [guide.image],
    },
  }
}

export default async function GuidePage({ params }: GuidePageProps) {
  const resolvedParams = await params
  const guide = guides[resolvedParams.slug as keyof typeof guides]

  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-lightBg pt-24">
      {/* Breadcrumb */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/gidsen" className="text-gray-500 hover:text-primary transition-colors">Emigratiegidsen</Link>
            <span className="text-gray-300">/</span>
            <span className="text-primary font-medium">{guide.title}</span>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/gidsen"
          className="inline-flex items-center text-primary hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Terug naar alle gidsen
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Nieuw 2026
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-darkText mb-4">
                  {guide.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {guide.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {guide.description}
                </p>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">{guide.pages} pagina's</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">Instant download</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">4.9/5 sterren</span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-r from-secondary/20 to-secondary/30 p-6 rounded-xl mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary">{guide.price}</div>
                      <div className="text-lg text-gray-500 line-through">{guide.originalPrice}</div>
                      <div className="text-sm text-success font-semibold">37% korting!</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Eenmalige betaling</div>
                      <div className="text-sm text-gray-600">Inclusief alle updates</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    Download Nu - {guide.price}
                  </button>
                  <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                    Bekijk Preview
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span>30 dagen geld terug</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>1000+ tevreden klanten</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Wat krijg je in deze gids?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guide.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Inhoud van de Gids
            </h2>
            <p className="text-xl text-gray-600">
              {guide.pages} pagina's vol praktische informatie, stap-voor-stap instructies en insider tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guide.chapters.map((chapter, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-darkText">{chapter}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Wat Zeggen Onze Klanten?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guide.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary/20 to-secondary/30 p-8 rounded-xl">
                <div className="flex items-center space-x-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div>{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                Is deze gids geschikt voor beginners?
              </h3>
              <p className="text-gray-600">
                Absoluut! De gids is geschreven voor mensen die nog nooit geëmigreerd hebben. 
                Alles wordt stap-voor-stap uitgelegd zonder veronderstellingen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-darkText mb-2">
                Krijg ik support bij vragen?
              </h3>
              <p className="text-gray-600">
                Ja, je krijgt email support bij vragen over de inhoud van de gids. 
                We helpen je graag verder als er iets onduidelijk is.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-darkText mb-2">
                Kan ik de gids delen met mijn partner?
              </h3>
              <p className="text-gray-600">
                Ja, je mag de gids delen binnen je huishouden. We vragen alleen om hem niet publiek te delen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Begin vandaag met je emigratie plannen
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Duizenden mensen gingen je voor. Download de gids en maak dezelfde keuzes als succesvolle emigranten.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Download Nu - {guide.price}
          </button>
          <div className="mt-4 text-white/80 text-sm">
            30 dagen geld terug garantie
          </div>
        </div>
      </section>
    </div>
  )
}