import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight, TrendingUp, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emigratie Blog - Tips, Ervaringen & Actueel Nieuws | Emigratie Kompas',
  description: 'Lees de laatste emigratie tips, persoonlijke verhalen en actueel nieuws over emigreren. Praktische advice van experts en ervaringen van emigranten.',
  openGraph: {
    title: 'Emigratie Blog - Tips, Ervaringen & Actueel Nieuws',
    description: 'Lees de laatste emigratie tips, persoonlijke verhalen en actueel nieuws over emigreren. Praktische advice van experts en ervaringen van emigranten.',
  },
}

export default function BlogPage() {
  const categories = ['Alle artikelen', 'Tips & Guides', 'Persoonlijke Verhalen', 'Belastingen', 'Huisvesting', 'Landen Updates']

  const featuredPost = {
    title: '10 Veelgemaakte Fouten bij Emigreren naar Portugal',
    excerpt: 'Leer van de fouten van anderen! Deze 10 misstappen kun je gemakkelijk vermijden als je goed voorbereid bent op je emigratie naar Portugal.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800',
    category: 'Tips & Guides',
    readTime: '8 min',
    date: '15 februari 2026',
    slug: 'veelgemaakte-fouten-portugal'
  }

  const blogPosts = [
    {
      title: 'NHR Belastingregime Portugal: Complete Gids 2026',
      excerpt: 'Alles wat je moet weten over het NHR belastingregime in Portugal. Van aanvraag tot voordelen - we leggen het helder uit.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
      category: 'Belastingen',
      readTime: '12 min',
      date: '10 februari 2026',
      slug: 'nhr-belastingregime-portugal-2026'
    },
    {
      title: 'Van Amsterdam naar Valencia: Mijn Emigratie Verhaal',
      excerpt: 'Lisa deelt haar ervaringen over haar emigratie naar Spanje. Van de eerste twijfels tot een succesvol nieuw leven in Valencia.',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800',
      category: 'Persoonlijke Verhalen',
      readTime: '6 min',
      date: '5 februari 2026',
      slug: 'amsterdam-naar-valencia-emigratie-verhaal'
    },
    {
      title: 'Beste Regio\'s in Spanje voor Nederlandse Emigranten',
      excerpt: 'Ontdek welke Spaanse regio het beste bij jouw lifestyle en budget past. Van Costa Brava tot Andalusië.',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d7608c?q=80&w=800',
      category: 'Landen Updates',
      readTime: '10 min',
      date: '28 januari 2026',
      slug: 'beste-regios-spanje-emigranten'
    },
    {
      title: 'Huis Huren vs Kopen in Portugal: Wat is Verstandig?',
      excerpt: 'De voor- en nadelen van huren versus kopen in Portugal. Plus praktische tips voor beide opties.',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800',
      category: 'Huisvesting',
      readTime: '7 min',
      date: '20 januari 2026',
      slug: 'huis-huren-kopen-portugal'
    },
    {
      title: 'Brexit Impact: Emigreren naar het VK in 2026',
      excerpt: 'Hoe Brexit invloed heeft op emigratie naar het Verenigd Koninkrijk en welke visa opties er nog zijn.',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800',
      category: 'Landen Updates',
      readTime: '9 min',
      date: '12 januari 2026',
      slug: 'brexit-emigreren-vk-2026'
    },
    {
      title: 'Emigreren met Kinderen: Complete Checklist',
      excerpt: 'Praktische tips en een uitgebreide checklist voor emigreren met kinderen. Van schoolkeuze tot sociale integratie.',
      image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=800',
      category: 'Tips & Guides',
      readTime: '11 min',
      date: '3 januari 2026',
      slug: 'emigreren-met-kinderen-checklist'
    }
  ]

  return (
    <div className="min-h-screen bg-lightBg pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-darkText mb-6">
              Emigratie Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ontdek de laatste emigratie tips, persoonlijke verhalen van expats en actueel nieuws 
              over je favoriete emigratielanden. Geschreven door experts en ervaringsdeskundigen.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-gray-600">Wekelijks Nieuwe Content</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-gray-600">Geschreven door Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-gray-600">50+ Landen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-primary/5 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-darkText">Uitgelicht Artikel</h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Uitgelicht
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Tag className="h-4 w-4" />
                    <span>{featuredPost.category}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime} leestijd</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-darkText mb-4">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center text-primary hover:text-accent font-semibold group"
                >
                  Lees artikel
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-darkText">Recente Artikelen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-darkText mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-accent font-medium text-sm group"
                  >
                    Lees meer
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white hover:bg-gray-50 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Meer Artikelen Laden
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
            Blijf op de Hoogte
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontvang wekelijks de nieuwste emigratie tips en verhalen direct in je inbox. 
            Plus exclusieve content voor abonnees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Je emailadres"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Inschrijven
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Geen spam. Uitschrijven kan altijd.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Klaar om je Emigratie te Plannen?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Van blog artikelen naar actie! Onze complete emigratiegidsen helpen je 
            stap voor stap bij het realiseren van je emigratiedroom.
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