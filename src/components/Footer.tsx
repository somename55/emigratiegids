'use client'

import { motion } from 'framer-motion'
import { Compass, MapPin, BookOpen, Users } from 'lucide-react'

const Footer = () => {
  const landen = [
    { name: 'Spanje', href: '#spanje' },
    { name: 'Portugal', href: '#portugal' },
    { name: 'Frankrijk', href: '#frankrijk' },
    { name: 'Italië', href: '#italie' },
    { name: 'Griekenland', href: '#griekenland' }
  ]

  const onderwerpen = [
    { name: 'Belastingen', href: '#belastingen' },
    { name: 'Zorgverzekering', href: '#zorgverzekering' },
    { name: 'Wonen', href: '#wonen' },
    { name: 'Werken', href: '#werken' },
    { name: 'Visum', href: '#visum' }
  ]

  const bedrijf = [
    { name: 'Over Ons', href: '#over' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy', href: '#privacy' }
  ]

  return (
    <footer className="bg-darkText text-white">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-success" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Compass className="h-8 w-8 text-accent" />
                <span className="font-serif text-xl font-bold">
                  EMIGRATIE KOMPAS
                </span>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-6">
                Jouw route naar een nieuw begin
              </p>
              
              <p className="text-white/60 text-sm leading-relaxed">
                De meest complete gids voor emigreren vanuit Nederland. 
                Praktische informatie, eerlijke adviezen en persoonlijke begeleiding 
                voor jouw nieuwe leven in het buitenland.
              </p>
            </motion.div>

            {/* Landen column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-lg">Landen</h3>
              </div>
              <ul className="space-y-3">
                {landen.map((land) => (
                  <li key={land.name}>
                    <a
                      href={land.href}
                      className="text-white/70 hover:text-accent transition-colors duration-300"
                    >
                      {land.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Onderwerpen column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-lg">Onderwerpen</h3>
              </div>
              <ul className="space-y-3">
                {onderwerpen.map((onderwerp) => (
                  <li key={onderwerp.name}>
                    <a
                      href={onderwerp.href}
                      className="text-white/70 hover:text-accent transition-colors duration-300"
                    >
                      {onderwerp.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bedrijf column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-lg">Bedrijf</h3>
              </div>
              <ul className="space-y-3">
                {bedrijf.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-accent transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Emigratie Kompas. Alle rechten voorbehouden.
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="#privacy"
                className="text-white/60 hover:text-accent text-sm transition-colors duration-300"
              >
                Privacybeleid
              </a>
              <a
                href="#voorwaarden"
                className="text-white/60 hover:text-accent text-sm transition-colors duration-300"
              >
                Voorwaarden
              </a>
              <span className="text-white/40 text-sm">
                Website door Automatevia
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer