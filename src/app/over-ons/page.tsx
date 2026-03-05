import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Users, Award, Target, Mail, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Over Ons - Het Team Achter Emigratie Kompas',
  description: 'Leer het team achter Emigratie Kompas kennen. Onze missie is emigranten helpen hun dromen waar te maken met betrouwbare informatie en persoonlijke begeleiding.',
  openGraph: {
    title: 'Over Ons - Het Team Achter Emigratie Kompas',
    description: 'Leer het team achter Emigratie Kompas kennen. Onze missie is emigranten helpen hun dromen waar te maken met betrouwbare informatie en persoonlijke begeleiding.',
  },
}

export default function OverOnsPage() {
  const teamMembers = [
    {
      name: 'Sarah van der Berg',
      role: 'Oprichter & Emigratie Expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2a2c13e?q=80&w=400',
      bio: 'Na haar eigen emigratie naar Portugal in 2018, besloot Sarah andere Nederlanders te helpen hun emigratiedroom waar te maken. Met een achtergrond in financieel advies en persoonlijke ervaring met het NHR-regime, biedt zij praktische en betrouwbare emigratie-ondersteuning.',
      expertise: ['Portugal & NHR', 'Fiscale planning', 'Financiële voorbereiding']
    },
    {
      name: 'Marco Visser',
      role: 'Spanje Specialist & Content Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
      bio: 'Marco woont al 8 jaar in Valencia en kent de ins en outs van emigreren naar Spanje. Van NIE-aanvragen tot het vinden van de perfecte woonplek - Marco helpt je met alle praktische aspecten van je Spaanse emigratie.',
      expertise: ['Spanje & NIE procedures', 'Lokale connecties', 'Culturele integratie']
    },
    {
      name: 'Linda Jansen',
      role: 'Juridisch Adviseur & Research',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
      bio: 'Met meer dan 10 jaar ervaring in internationaal recht en emigratie-wetgeving, zorgt Linda ervoor dat alle informatie in onze gidsen accuraat en up-to-date is. Zij specialiseert zich in visa procedures en belastingverdragen.',
      expertise: ['Internationaal recht', 'Visa & verblijfsvergunningen', 'Belastingverdragen']
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Persoonlijke Benadering',
      description: 'Elke emigratie is uniek. Wij geloven in persoonlijk advies dat past bij jouw situatie, dromen en mogelijkheden.'
    },
    {
      icon: Award,
      title: 'Betrouwbare Informatie',
      description: 'Alle content wordt gecontroleerd door experts en gebaseerd op actuele regelgeving en praktijkervaringen.'
    },
    {
      icon: Users,
      title: 'Community Gericht',
      description: 'We bouwen een gemeenschap van emigranten die elkaar helpen en inspireren om hun doelen te bereiken.'
    },
    {
      icon: Target,
      title: 'Resultaat Gedreven',
      description: 'Ons succes meten we aan jouw succes. We zijn er pas tevreden als jij succesvol bent geëmigreerd.'
    }
  ]

  const stats = [
    { number: '5000+', label: 'Geholpen Emigranten' },
    { number: '50+', label: 'Emigratielanden' },
    { number: '98%', label: 'Klanttevredenheid' },
    { number: '3', label: 'Jaar Ervaring' }
  ]

  return (
    <div className="min-h-screen bg-lightBg pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Compass className="h-12 w-12 text-primary" />
              </div>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-darkText mb-6">
              Over Emigratie Kompas
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Wij geloven dat iedereen het recht heeft om te leven waar het hart ligt. 
              Ons team van emigratie-experts helpt je stap voor stap bij het realiseren van je emigratiedroom.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
                Onze Missie
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Emigratie Kompas is ontstaan uit persoonlijke ervaring. Onze oprichter Sarah ervaarde zelf hoe 
                overweldigend het emigratieproces kan zijn - ondanks alle online informatie bleef het onduidelijk 
                wat er nou precies gedaan moest worden.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Daarom hebben wij het anders aangepakt. In plaats van losse artikelen bieden wij complete, 
                stap-voor-stap gidsen die je van A tot Z begeleiden. Met praktische checklists, echte ervaringen 
                en persoonlijke ondersteuning maken wij emigreren overzichtelijk en haalbaar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Onze missie is simpel: <strong>elke Nederlandse emigrant succesvol maken in hun nieuwe thuisland.</strong>
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800"
                  alt="Team vergadering"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Onze Waarden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze waarden vormen de basis van alles wat wij doen en hoe wij onze klanten ondersteunen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-darkText mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-6">
              Onze Impact in Cijfers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Ons Expertteam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leer de mensen kennen achter Emigratie Kompas. Een team van ervaren emigranten 
              en specialisten die je helpen succesvol te emigreren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary/10 to-secondary/20 p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-darkText mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    {member.role}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div>
                  <h4 className="font-semibold text-darkText mb-3">Specialisaties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
              Ons Verhaal
            </h2>
          </div>

          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                2018
              </div>
              <div>
                <h3 className="font-semibold text-darkText mb-2">De Emigratie van Sarah</h3>
                <p className="text-gray-600">
                  Sarah emigreert naar Portugal en ervaart de complexiteit van het emigratieproces. 
                  Ondanks maandenlang research blijven er veel onduidelijkheden.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                2021
              </div>
              <div>
                <h3 className="font-semibold text-darkText mb-2">Eerste Hulp aan Anderen</h3>
                <p className="text-gray-600">
                  Sarah begint andere Nederlanders te helpen met hun emigratie naar Portugal. 
                  De vraag naar duidelijke informatie blijkt enorm groot.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                2023
              </div>
              <div>
                <h3 className="font-semibold text-darkText mb-2">Emigratie Kompas Opgericht</h3>
                <p className="text-gray-600">
                  Samen met Marco en Linda wordt Emigratie Kompas gelanceerd. 
                  De eerste complete emigratiegidsen zien het licht.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                2026
              </div>
              <div>
                <h3 className="font-semibold text-darkText mb-2">Vandaag</h3>
                <p className="text-gray-600">
                  Meer dan 5000 emigranten geholpen, uitgebreid naar 50+ landen, 
                  en nog altijd dezelfde missie: emigreren maken mogelijk maken voor iedereen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="font-serif text-4xl font-bold text-darkText mb-6">
            Heb je Vragen voor Ons Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We horen graag van je! Of je nou een vraag hebt over onze gidsen, 
            persoonlijk advies wilt of gewoon hallo wilt zeggen.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Mail className="mr-3 h-5 w-5" />
            Neem Contact Op
          </Link>
        </div>
      </section>
    </div>
  )
}