import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, User, ArrowRight } from 'lucide-react'
import { essentials, getEssentialBySlug } from '@/data/essentials'
import * as LucideIcons from 'lucide-react'

interface EssentialPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return essentials.map((essential) => ({
    slug: essential.slug,
  }))
}

export async function generateMetadata({ params }: EssentialPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const essential = getEssentialBySlug(resolvedParams.slug)
  
  if (!essential) {
    return {
      title: 'Onderwerp niet gevonden - Emigratie Kompas',
    }
  }

  return {
    title: `${essential.title} bij Emigratie - Complete Gids | Emigratie Kompas`,
    description: essential.description,
    openGraph: {
      title: `${essential.title} bij Emigratie - Complete Gids`,
      description: essential.description,
    },
  }
}

export default async function EssentialPage({ params }: EssentialPageProps) {
  const resolvedParams = await params
  const essential = getEssentialBySlug(resolvedParams.slug)

  if (!essential) {
    notFound()
  }

  // Get the Lucide icon component
  const IconComponent = (LucideIcons as any)[essential.icon] || LucideIcons.FileText

  // Get other essentials for sidebar
  const otherEssentials = essentials.filter(e => e.slug !== essential.slug).slice(0, 5)

  return (
    <div className="min-h-screen bg-lightBg pt-24">
      {/* Breadcrumb */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link 
              href="/" 
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link 
              href="/essentials" 
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Emigratie Essentials
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-primary font-medium">{essential.title}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/essentials"
                className="inline-flex items-center text-primary hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Terug naar alle essentials
              </Link>

              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-darkText mb-4">
                    {essential.title}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {essential.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>5 min leestijd</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Emigratie Kompas Team</span>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {essential.sections.map((section, index) => (
                <article key={index} className="prose prose-lg max-w-none">
                  <h2 className="font-serif text-2xl font-bold text-darkText mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
              <h3 className="font-serif text-2xl font-bold text-darkText mb-4">
                Hulp nodig met {essential.title.toLowerCase()}?
              </h3>
              <p className="text-gray-600 mb-6">
                Onze emigratiegidsen bevatten stap-voor-stap instructies en handige checklists 
                voor alle aspecten van je emigratie, inclusief {essential.title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/gidsen"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Bekijk Emigratiegidsen
                </Link>
                <Link
                  href="/contact"
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Persoonlijk Advies
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-darkText mb-4">Inhoud</h3>
                <nav className="space-y-2">
                  {essential.sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Essentials */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-darkText mb-4">Andere Essentials</h3>
                <div className="space-y-3">
                  {otherEssentials.map((item) => {
                    const ItemIcon = (LucideIcons as any)[item.icon] || LucideIcons.FileText
                    return (
                      <Link
                        key={item.slug}
                        href={`/essentials/${item.slug}`}
                        className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ItemIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-darkText group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </Link>
                    )
                  })}
                </div>
                
                <Link
                  href="/essentials"
                  className="block text-center text-primary hover:text-accent font-medium text-sm mt-4 pt-4 border-t border-gray-100"
                >
                  Alle essentials bekijken →
                </Link>
              </div>

              {/* Help Box */}
              <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-xl text-white">
                <h3 className="font-semibold mb-3">Persoonlijk Advies</h3>
                <p className="text-white/90 text-sm mb-4">
                  Heb je specifieke vragen over je emigratie? Onze experts helpen je graag verder.
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-primary px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors block text-center"
                >
                  Contact opnemen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}