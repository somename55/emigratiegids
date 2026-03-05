'use client'

import { motion } from 'framer-motion'
import { Compass, Heart, Home, Briefcase, FileText, PawPrint } from 'lucide-react'

const TopicsSection = () => {
  const topics = [
    {
      icon: Compass,
      title: 'Belastingen & Financiën',
      description: 'Van conserverende aanslag tot dubbelbelasting: voorkom fiscale verrassingen.',
      color: 'bg-primary'
    },
    {
      icon: Heart,
      title: 'Zorgverzekering',
      description: 'Hoe blijf je verzekerd in je nieuwe woonland? Alles over EHIC, lokale zorg en meer.',
      color: 'bg-accent'
    },
    {
      icon: Home,
      title: 'Wonen & Vastgoed',
      description: 'Een huis kopen of huren in het buitenland: regels, kosten en tips.',
      color: 'bg-success'
    },
    {
      icon: Briefcase,
      title: 'Werken & Ondernemen',
      description: 'Werken in loondienst, freelancen of een bedrijf starten over de grens.',
      color: 'bg-primary'
    },
    {
      icon: FileText,
      title: 'Visum & Verblijf',
      description: 'Welk visum heb je nodig? Overzicht van verblijfsvergunningen per land.',
      color: 'bg-accent'
    },
    {
      icon: PawPrint,
      title: 'Huisdier Meenemen',
      description: 'Van chip en vaccinatie tot invoerregels: neem je huisdier stressvrij mee.',
      color: 'bg-success'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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
    <section id="onderwerpen" className="py-20 bg-white">
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
            Wat je moet regelen
          </h2>
          <p className="text-xl text-darkText/80 max-w-4xl mx-auto">
            Emigreren is meer dan een vliegticket boeken. Dit zijn de onderwerpen die je moet kennen.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              variants={cardVariants}
              className="group card-hover cursor-pointer"
            >
              <div className="bg-lightBg border border-gray-200/50 rounded-2xl p-8 h-full hover:border-primary/20 transition-all duration-500">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl ${topic.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <topic.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {topic.title}
                </h3>
                
                <p className="text-darkText/80 leading-relaxed">
                  {topic.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Lees meer</span>
                  <div className="ml-2 w-0 group-hover:w-6 transition-all duration-300">
                    <div className="h-0.5 bg-accent" />
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
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Bekijk Alle Onderwerpen
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TopicsSection