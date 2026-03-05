'use client'

import { motion } from 'framer-motion'
import { Check, BookOpen } from 'lucide-react'

const FeaturedGuideSection = () => {
  const features = [
    'Stap-voor-stap emigratieplan',
    'Belasting- en financieel overzicht',
    'Woon- en vastgoedgids',
    'Zorg- en verzekeringshoofdstuk',
    'Praktische checklists',
    'Regelmatig geupdate'
  ]

  const availableGuides = ['Spanje', 'Portugal', 'Frankrijk', 'Italië', 'Griekenland']

  return (
    <section id="gidsen" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full" />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Guide Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Guide Book Representation */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-700">
                <div className="text-center">
                  <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                    Emigratie Gids
                  </h3>
                  <div className="text-accent font-bold text-lg mb-2">Spanje</div>
                  <div className="text-darkText/70 text-sm mb-6">
                    Complete gids • 120+ pagina's
                  </div>
                  
                  {/* Mock pages preview */}
                  <div className="space-y-2 text-left text-xs text-darkText/60">
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span>1. Voorbereiding</span>
                      <span>p. 5</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span>2. Belastingen</span>
                      <span>p. 18</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span>3. Zorgverzekering</span>
                      <span>p. 32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4. Wonen</span>
                      <span>p. 48</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shadow guides behind */}
              <div className="absolute -top-2 -left-2 w-full h-full bg-secondary rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/30 rounded-2xl -z-20" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
              De Emigratie Gidsen
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Meer dan 100 pagina's per land. Alles wat je moet weten, stap voor stap.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Available Guides */}
            <div className="mb-8">
              <p className="text-white/70 text-sm mb-3">Beschikbare gidsen:</p>
              <div className="flex flex-wrap gap-2">
                {availableGuides.map((guide, index) => (
                  <span
                    key={guide}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/90"
                  >
                    {guide}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Bekijk de Gidsen
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedGuideSection