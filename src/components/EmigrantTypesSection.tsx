'use client'

import { motion } from 'framer-motion'
import { Shield, Compass, TreePine, Globe, Sparkles, Lightbulb } from 'lucide-react'

const EmigrantTypesSection = () => {
  const types = [
    {
      icon: Shield,
      title: 'Stabiliteitszoeker',
      description: 'Je zoekt zekerheid, structuur en een veilige basis voor je gezin.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Compass,
      title: 'Vrijheidszoeker',
      description: 'Je wilt leven op jouw voorwaarden, zonder onnodige regels.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TreePine,
      title: 'Rustzoeker',
      description: 'Natuur, stilte en een trager levensritme trekken je aan.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Avonturier',
      description: 'Nieuwe culturen en ervaringen zijn jouw brandstof.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Sparkles,
      title: 'Betekeniszoeker',
      description: 'Je zoekt een leven dat klopt met jouw waarden.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Vooruitgangszoeker',
      description: 'Je wilt bouwen, creëren en bijdragen aan iets nieuws.',
      color: 'from-yellow-500 to-yellow-600'
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section className="py-20 bg-lightBg">
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
            Welk Type Emigrant Ben Jij?
          </h2>
          <p className="text-xl text-darkText/80 max-w-4xl mx-auto">
            Iedereen emigreert om andere redenen. Ontdek welk profiel bij jou past.
          </p>
        </motion.div>

        {/* Types Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {types.map((type, index) => (
            <motion.div
              key={type.title}
              variants={cardVariants}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${type.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <type.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {type.title}
                  </h3>
                  
                  <p className="text-darkText/80 leading-relaxed">
                    {type.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <type.icon className="w-full h-full text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Ontdek Jouw Type
          </button>
          
          <p className="text-darkText/60 text-sm mt-4">
            Gratis persoonlijkheidstest • 2 minuten
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EmigrantTypesSection