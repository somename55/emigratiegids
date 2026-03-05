'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const essentialsItems = [
    "AOW & Pensioen", "Bankieren", "Belastingen", "Huisdieren", "Ondernemen", 
    "Onderwijs", "Uitschrijven", "Visum & Verblijfsvergunning", "Wonen & Huis Kopen", "Zorgverzekering"
  ]

  const convertToSlug = (text: string) => {
    return text.toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Emigratiegidsen', 
      href: '/gidsen',
      dropdown: [
        { label: 'Portugal 2026', href: '/gidsen/portugal' },
        { label: 'Spanje 2026', href: '/gidsen/spanje' }
      ]
    },
    { 
      label: 'Emigratie Essentials', 
      href: '/essentials',
      dropdown: essentialsItems.map(item => ({
        label: item,
        href: `/essentials/${convertToSlug(item)}`
      }))
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Over Ons', href: '/over-ons' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-bold text-primary">
                EMIGRATIE KOMPAS
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-darkText hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-darkText hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/gidsen"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Start Jouw Route
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-darkText" />
            ) : (
              <Menu className="h-6 w-6 text-darkText" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-darkText hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => !item.dropdown && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-primary py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                href="/gidsen"
                className="block w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Start Jouw Route
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
