'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'

const BlogSection = () => {
  const articles = [
    {
      title: '12 Fiscale Verrassingen bij Emigratie',
      excerpt: 'Ontdek de belastingzaken die veel emigranten te laat ontdekken.',
      category: 'Belastingen',
      date: '15 maart 2024',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
      alt: 'Persoon werkt aan laptop met documenten',
      readTime: '8 min'
    },
    {
      title: 'Emigreren met Kinderen: Wat Je Moet Weten',
      excerpt: 'Van schoolkeuze tot sociale aanpassing: een eerlijke gids.',
      category: 'Familie',
      date: '12 maart 2024',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800',
      alt: 'Gelukkig gezin in een park',
      readTime: '12 min'
    },
    {
      title: 'Betaalbaar Wonen in Zuid-Europa',
      excerpt: 'Deze regio\'s bieden nog steeds huizen onder de twee ton.',
      category: 'Wonen',
      date: '8 maart 2024',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200',
      alt: 'Mediterrane villa met terras',
      readTime: '6 min'
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
    <section id="blog" className="py-20 bg-white">
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
            Laatste Artikelen
          </h2>
          <p className="text-xl text-darkText/80 max-w-3xl mx-auto">
            Blijf op de hoogte van de laatste ontwikkelingen en krijg praktische tips voor je emigratie.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              variants={cardVariants}
              className="group card-hover cursor-pointer"
            >
              <div className="bg-lightBg rounded-2xl overflow-hidden shadow-lg h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover image-hover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                      <Tag className="h-3 w-3 mr-1" />
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center text-darkText/60 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-darkText/80 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read more link */}
                  <div className="flex items-center text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Lees meer</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Bekijk Alle Artikelen
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection