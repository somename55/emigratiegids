'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const DestinationsSection = () => {
  const destinations = [
    {
      name: 'Spanje',
      description: 'Zon, cultuur en een ontspannen levensritme',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800',
      alt: 'Spaans dorpje met traditionele architectuur'
    },
    {
      name: 'Portugal',
      description: 'Betaalbaar, veilig en prachtig klimaat',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800',
      alt: 'Kleurrijke gebouwen in Lissabon'
    },
    {
      name: 'Frankrijk',
      description: 'Ruimte, natuur en savoir-vivre',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800',
      alt: 'Frans landschap met lavendelvelden'
    },
    {
      name: 'Italië',
      description: 'La dolce vita voor wie van het goede leven houdt',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800',
      alt: 'Pittoreske Italiaanse kustlijn'
    },
    {
      name: 'Griekenland',
      description: 'Eilandleven of vasteland, altijd bijzonder',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800',
      alt: 'Witte huisjes op Santorini'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-6">
            Populaire Bestemmingen
          </h2>
          <p className="text-xl text-darkText/80 max-w-3xl mx-auto">
            Ontdek de landen waar Nederlanders het meest naartoe emigreren
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              variants={cardVariants}
              className="group card-hover cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.alt}
                    fill
                    className="object-cover image-hover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    {destination.name}
                  </h3>
                  <p className="text-darkText/80 leading-relaxed mb-4">
                    {destination.description}
                  </p>
                  
                  {/* Arrow link */}
                  <div className="flex items-center text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Meer info</span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Bekijk Alle Bestemmingen
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default DestinationsSection