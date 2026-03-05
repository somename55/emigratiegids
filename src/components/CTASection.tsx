'use client'

import { motion } from 'framer-motion'
import { Mail, Shield, Users } from 'lucide-react'
import { useState } from 'react'

const CTASection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail('')
  }

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Klaar om de eerste stap te zetten?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Download de gratis emigratie-checklist en begin vandaag nog met je voorbereiding.
          </p>
        </motion.div>

        {/* Email Form */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-darkText/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Jouw e-mailadres"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-darkText placeholder-darkText/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Checklist
              </motion.button>
            </form>
          ) : (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-success/20 border border-success/30 rounded-lg p-4 max-w-md mx-auto">
                <p className="font-semibold text-success">
                  Bedankt! Check je inbox voor de checklist.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center space-x-2 text-white/80">
            <Shield className="h-5 w-5" />
            <span className="text-sm">Geen spam. Alleen nuttige informatie.</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-white/60">
            <Users className="h-5 w-5" />
            <span className="text-sm">Al meer dan 5.000 Nederlanders gingen je voor.</span>
          </div>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/80 mb-4">
            Wil je direct starten met de complete gids?
          </p>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Bekijk Alle Gidsen
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection