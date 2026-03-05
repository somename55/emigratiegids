'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Deze gids heeft me ontzettend veel tijd bespaard. Alles staat helder bij elkaar — geen eindeloos Googelen meer.",
      name: "Anna",
      location: "Breda"
    },
    {
      text: "Praktisch en eerlijk. Je krijgt precies de informatie die je nodig hebt, zonder verkooppraatjes.",
      name: "Mark",
      location: "digital nomad"
    },
    {
      text: "Wat ik waardeer is dat het niet alleen over regels gaat, maar ook over het dagelijks leven. Zo bereid je je echt goed voor.",
      name: "Saskia",
      location: "Rotterdam"
    },
    {
      text: "Wij hadden al veel gelezen, maar dit is de eerste bron die alles samenvoegt en begrijpelijk maakt.",
      name: "Peter & Linda",
      location: "Den Haag"
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
            Wat Anderen Zeggen
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Quote text */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  
                  <blockquote className="text-darkText/90 text-lg leading-relaxed mb-6 font-medium">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-darkText/60 text-sm">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-darkText/60">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">★</span>
                  </div>
                ))}
              </div>
              <span className="font-medium">4.8/5 gemiddelde score</span>
            </div>
            
            <div className="w-px h-4 bg-darkText/20 hidden sm:block" />
            
            <div className="font-medium">
              Meer dan 2.500 tevreden emigranten
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection