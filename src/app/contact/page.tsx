import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageSquare, Clock, MapPin, Phone, Send, HelpCircle, FileText, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Neem Contact Op met Emigratie Kompas',
  description: 'Heb je vragen over emigreren? Neem contact op met onze experts. We helpen je graag verder met persoonlijk advies en ondersteuning.',
  openGraph: {
    title: 'Contact - Neem Contact Op met Emigratie Kompas',
    description: 'Heb je vragen over emigreren? Neem contact op met onze experts. We helpen je graag verder met persoonlijk advies en ondersteuning.',
  },
}

export default function ContactPage() {
  const contactOptions = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Voor algemene vragen en ondersteuning',
      detail: 'info@emigratiekompas.nl',
      responseTime: 'Binnen 24 uur'
    },
    {
      icon: MessageSquare,
      title: 'Persoonlijk Advies',
      description: 'Voor uitgebreide begeleiding en maatwerk',
      detail: 'Plan een gesprek in',
      responseTime: 'Binnen 3 werkdagen'
    },
    {
      icon: Phone,
      title: 'Telefonisch',
      description: 'Voor urgente vragen en directe hulp',
      detail: '+31 (0)20 123 4567',
      responseTime: 'Ma-Vr 9:00-17:00'
    }
  ]

  const faqItems = [
    {
      question: 'Kan ik een gratis consultatiegesprek krijgen?',
      answer: 'Ja, we bieden een gratis 15-minuten kennismakingsgesprek aan waarin we je vragen beantwoorden en bekijken hoe we je kunnen helpen.'
    },
    {
      question: 'Hoeveel kost persoonlijk emigratie-advies?',
      answer: 'Onze tarieven variëren afhankelijk van de complexiteit van je situatie. Een standaard adviesgesprek van 1 uur kost €125. We maken vooraf altijd duidelijke afspraken over kosten.'
    },
    {
      question: 'In welke landen kunnen jullie me helpen?',
      answer: 'We bieden gedetailleerde ondersteuning voor alle populaire emigratielanden, met specialisatie in Portugal en Spanje. Voor andere landen kunnen we je doorverwijzen naar lokale experts.'
    },
    {
      question: 'Hoe snel krijg ik antwoord op mijn vraag?',
      answer: 'E-mailvragen beantwoorden we binnen 24 uur. Voor complexere vragen of persoonlijk advies plannen we binnen 3 werkdagen een gesprek in.'
    },
    {
      question: 'Krijg ik ondersteuning na aankoop van een gids?',
      answer: 'Ja! Bij elke gids krijg je 3 maanden email support. Je kunt al je vragen stellen over de inhoud en we helpen je verder waar nodig.'
    },
    {
      question: 'Kunnen jullie me helpen met het invullen van formulieren?',
      answer: 'Ja, we bieden praktische ondersteuning bij het invullen van belangrijke formulieren zoals NIE-aanvragen, belastingaangiftes en visa-aanvragen.'
    }
  ]

  const serviceTypes = [
    {
      icon: FileText,
      title: 'Gids Ondersteuning',
      description: 'Vragen over onze emigratiegidsen'
    },
    {
      icon: Users,
      title: 'Persoonlijk Advies',
      description: 'Maatwerk begeleiding voor je emigratie'
    },
    {
      icon: HelpCircle,
      title: 'Algemene Vragen',
      description: 'Vragen over landen, procedures of voorbereidingen'
    }
  ]

  return (
    <div className="min-h-screen bg-lightBg pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-darkText mb-6">
              Neem Contact Op
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Heb je vragen over emigreren? Ons team van experts staat klaar om je te helpen. 
              Van algemene vragen tot persoonlijk advies - we denken graag met je mee.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-success">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Gemiddelde reactietijd: binnen 24 uur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-darkText mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {option.description}
                  </p>
                  <p className="text-lg font-semibold text-primary mb-2">
                    {option.detail}
                  </p>
                  <p className="text-sm text-gray-500">
                    {option.responseTime}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="font-serif text-3xl font-bold text-darkText mb-6">
                  Stel je Vraag
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-darkText mb-2">
                        Voornaam *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Je voornaam"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-darkText mb-2">
                        Achternaam *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Je achternaam"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-darkText mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="je@email.nl"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-darkText mb-2">
                      Onderwerp *
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Selecteer een onderwerp</option>
                      <option value="gids-vraag">Vraag over emigratiegids</option>
                      <option value="persoonlijk-advies">Persoonlijk emigratie-advies</option>
                      <option value="land-informatie">Informatie over specifiek land</option>
                      <option value="technische-ondersteuning">Technische ondersteuning</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-darkText mb-2">
                      Naar welk land wil je emigreren?
                    </label>
                    <input
                      type="text"
                      id="country"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Bijvoorbeeld: Portugal, Spanje, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-darkText mb-2">
                      Je vraag of bericht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Beschrijf je vraag zo gedetailleerd mogelijk. Hoe meer informatie je geeft, hoe beter we je kunnen helpen."
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Ja, ik wil graag de nieuwsbrief ontvangen met emigratie tips en updates
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Ik ga akkoord met de <Link href="/privacy" className="text-primary hover:underline">privacyverklaring</Link> en 
                      het gebruik van mijn gegevens voor het beantwoorden van mijn vraag *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Verstuur Bericht
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Service Types */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-darkText mb-4">Waar kunnen we je mee helpen?</h3>
                <div className="space-y-4">
                  {serviceTypes.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-darkText text-sm">{service.title}</h4>
                          <p className="text-xs text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-xl text-white">
                <h3 className="font-semibold mb-4">Populaire Vragen</h3>
                <div className="space-y-3 text-sm">
                  <Link href="/essentials/aow-pensioen" className="block hover:text-accent transition-colors">
                    • Wat gebeurt er met mijn AOW?
                  </Link>
                  <Link href="/essentials/belastingen" className="block hover:text-accent transition-colors">
                    • Hoe zit het met belasting betalen?
                  </Link>
                  <Link href="/essentials/visum-verblijfsvergunning" className="block hover:text-accent transition-colors">
                    • Welk visum heb ik nodig?
                  </Link>
                  <Link href="/landen/portugal" className="block hover:text-accent transition-colors">
                    • Is Portugal geschikt voor mij?
                  </Link>
                </div>
                
                <Link
                  href="/essentials"
                  className="inline-block bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium mt-4 transition-colors"
                >
                  Alle essentials →
                </Link>
              </div>

              {/* Response Time */}
              <div className="bg-success/10 p-6 rounded-xl border border-success/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="h-5 w-5 text-success" />
                  <h3 className="font-semibold text-success">Snelle Response</h3>
                </div>
                <p className="text-sm text-gray-700">
                  We streven ernaar om alle vragen binnen 24 uur te beantwoorden. 
                  Voor complexere vragen plannen we snel een persoonlijk gesprek in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-gray-600">
              Misschien staat je vraag er al tussen. Check eerst deze populaire vragen.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-secondary/10 to-secondary/20 p-6 rounded-xl">
                <h3 className="font-semibold text-darkText mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Staat je vraag er niet tussen?
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center text-primary hover:text-accent font-semibold"
            >
              Stel je vraag via het contactformulier →
            </a>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl font-bold text-darkText mb-6">
                  Kantoor Informatie
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-darkText font-medium">Bezoekadres</p>
                      <p className="text-gray-600 text-sm">
                        Herengracht 123<br />
                        1015 BC Amsterdam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-darkText font-medium">Openingstijden</p>
                      <p className="text-gray-600 text-sm">
                        Maandag - Vrijdag: 9:00 - 17:00<br />
                        Weekend: Alleen op afspraak
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-darkText font-medium">Contact</p>
                      <p className="text-gray-600 text-sm">
                        info@emigratiekompas.nl<br />
                        +31 (0)20 123 4567
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-darkText mb-6">
                  Afspraak Maken
                </h3>
                <p className="text-gray-600 mb-6">
                  Wil je een persoonlijk gesprek? We komen graag in gesprek om je emigratie-uitdagingen 
                  te bespreken en te kijken hoe we je het beste kunnen helpen.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-darkText mb-1">Gratis Kennismaking</h4>
                    <p className="text-sm text-gray-600">15 minuten | Telefonisch of online</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-darkText mb-1">Uitgebreid Adviesgesprek</h4>
                    <p className="text-sm text-gray-600">60 minuten | €125 | Op kantoor of online</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Plan een Afspraak
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}