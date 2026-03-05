export interface Country {
  slug: string;
  name: string;
  continent: string;
  description: string;
  highlights: string[];
  climate: string;
  costOfLiving: string;
  language: string;
  currency: string;
  timezone: string;
  image: string;
}

const genericImage = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800";

export const countries: Country[] = [
  // Europa
  {
    slug: "spanje",
    name: "Spanje",
    continent: "Europa",
    description: "Zon, cultuur en een ontspannen levensritme. Spanje trekt jaarlijks duizenden Nederlandse emigranten.",
    highlights: ["Mediterraan klimaat", "Betaalbaar levensonderhoud", "Grote expat-gemeenschap", "Uitstekende gezondheidszorg"],
    climate: "Mediterraan tot semi-aride",
    costOfLiving: "20-30% lager dan Nederland",
    language: "Spaans",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800"
  },
  {
    slug: "portugal",
    name: "Portugal",
    continent: "Europa",
    description: "Betaalbaar, veilig en prachtig klimaat. Portugal is een van de snelst groeiende emigratiebestemmingen.",
    highlights: ["NHR belastingregime", "Veilig en stabiel", "Prachtige kustlijn", "Groeiende tech-scene"],
    climate: "Mediterraan, mild",
    costOfLiving: "25-35% lager dan Nederland",
    language: "Portugees",
    currency: "Euro (EUR)",
    timezone: "WET (UTC+0)",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800"
  },
  {
    slug: "frankrijk",
    name: "Frankrijk",
    continent: "Europa",
    description: "Ruimte, natuur en savoir-vivre. Frankrijk biedt een ongeevenaarde levensstijl.",
    highlights: ["Culinaire cultuur", "Diverse landschappen", "Uitstekend onderwijs", "Rijk cultureel leven"],
    climate: "Gevarieerd per regio",
    costOfLiving: "Vergelijkbaar met Nederland",
    language: "Frans",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800"
  },
  {
    slug: "italie",
    name: "Italië",
    continent: "Europa",
    description: "La dolce vita voor wie van het goede leven houdt. Italië combineert cultuur, natuur en gastronomie.",
    highlights: ["Wereldberoemde keuken", "Historische steden", "Flat tax voor expats", "Mediterraan klimaat"],
    climate: "Mediterraan in het zuiden, continentaal in het noorden",
    costOfLiving: "10-20% lager dan Nederland",
    language: "Italiaans",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800"
  },
  {
    slug: "griekenland",
    name: "Griekenland",
    continent: "Europa",
    description: "Eilandleven of vasteland, altijd bijzonder. Griekenland biedt betaalbaar wonen in een prachtig landschap.",
    highlights: ["Betaalbaar wonen", "Eilanden en kustleven", "Digital nomad visum", "Gastvrije cultuur"],
    climate: "Mediterraan",
    costOfLiving: "30-40% lager dan Nederland",
    language: "Grieks",
    currency: "Euro (EUR)",
    timezone: "EET (UTC+2)",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800"
  },
  {
    slug: "duitsland",
    name: "Duitsland",
    continent: "Europa",
    description: "Dichtbij, vertrouwd en economisch sterk. Duitsland is de populairste bestemming voor Nederlandse grensgangers.",
    highlights: ["Sterke economie", "Goede infrastructuur", "Dichtbij Nederland", "Hoog salarisniveau"],
    climate: "Gematigd",
    costOfLiving: "Vergelijkbaar met Nederland",
    language: "Duits",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800"
  },
  {
    slug: "belgie",
    name: "België",
    continent: "Europa",
    description: "Het dichtstbijzijnde buitenland met eigen karakter. België biedt een vertrouwde maar toch andere levensstijl.",
    highlights: ["Nederlandstalig (Vlaanderen)", "Centraal in Europa", "Goede gezondheidszorg", "Culturele diversiteit"],
    climate: "Gematigd zeeklimaat",
    costOfLiving: "Vergelijkbaar met Nederland",
    language: "Nederlands, Frans, Duits",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=800"
  },
  {
    slug: "verenigd-koninkrijk",
    name: "Verenigd Koninkrijk",
    continent: "Europa",
    description: "Ondanks Brexit blijft het VK een populaire bestemming voor Nederlanders die van de Britse cultuur houden.",
    highlights: ["Internationale werkmarkt", "Engelstalig", "Culturele diversiteit", "Wereldsteden"],
    climate: "Gematigd oceaanklimaat",
    costOfLiving: "20-40% hoger dan Nederland",
    language: "Engels",
    currency: "Pond sterling (GBP)",
    timezone: "GMT (UTC+0)",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800"
  },
  {
    slug: "zweden",
    name: "Zweden",
    continent: "Europa",
    description: "Scandinavische kwaliteit van leven met prachtige natuur en een sterk sociaal vangnet.",
    highlights: ["Hoge levenskwaliteit", "Prachtige natuur", "Work-life balance", "Goed onderwijs"],
    climate: "Subarctisch tot gematigd",
    costOfLiving: "10-20% hoger dan Nederland",
    language: "Zweeds",
    currency: "Zweedse kroon (SEK)",
    timezone: "CET (UTC+1)",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=800"
  },
  {
    slug: "zwitserland",
    name: "Zwitserland",
    continent: "Europa",
    description: "Hoge salarissen, spectaculaire natuur en uitmuntende infrastructuur maken Zwitserland aantrekkelijk.",
    highlights: ["Hoogste salarissen in Europa", "Spectaculaire Alpen", "Politieke stabiliteit", "Meertalig"],
    climate: "Alpien, gevarieerd",
    costOfLiving: "50-80% hoger dan Nederland",
    language: "Duits, Frans, Italiaans",
    currency: "Zwitserse frank (CHF)",
    timezone: "CET (UTC+1)",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800"
  },
  {
    slug: "bulgarije",
    name: "Bulgarije",
    continent: "Europa",
    description: "Een van de goedkoopste EU-landen met berglandschappen en Zwarte Zee kust. Bulgarije biedt betaalbaar leven in Europa.",
    highlights: ["Zeer lage kosten van leven", "EU-lidmaatschap", "Prachtige natuur", "Lage belastingen"],
    climate: "Continentaal",
    costOfLiving: "60-70% lager dan Nederland",
    language: "Bulgaars",
    currency: "Bulgaarse lev (BGN)",
    timezone: "EET (UTC+2)",
    image: genericImage
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    continent: "Europa",
    description: "Het eiland van Aphrodite combineert EU-voordelen met mediterraan klimaat. Cyprus trekt expats met zijn belastingvoordelen.",
    highlights: ["EU-lidmaatschap", "Belastingvoordelen", "Jaar-rond zon", "Engelstalig"],
    climate: "Mediterraan",
    costOfLiving: "15-25% lager dan Nederland",
    language: "Grieks, Turks, Engels",
    currency: "Euro (EUR)",
    timezone: "EET (UTC+2)",
    image: genericImage
  },
  {
    slug: "denemarken",
    name: "Denemarken",
    continent: "Europa",
    description: "Het land van hygge en hoge levenskwaliteit. Denemarken staat bekend om zijn work-life balance en sociale zekerheid.",
    highlights: ["Hoge levenskwaliteit", "Work-life balance", "Uitstekend onderwijs", "Sociaal vangnet"],
    climate: "Gematigd zeeklimaat",
    costOfLiving: "25-35% hoger dan Nederland",
    language: "Deens",
    currency: "Deense kroon (DKK)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "finland",
    name: "Finland",
    continent: "Europa",
    description: "Het land van duizend meren en noorderlicht. Finland biedt rust, natuur en een uitstekend onderwijssysteem.",
    highlights: ["Beste onderwijs ter wereld", "Prachtige natuur", "Hoge veiligheid", "Work-life balance"],
    climate: "Subarctisch",
    costOfLiving: "10-20% hoger dan Nederland",
    language: "Fins, Zweeds",
    currency: "Euro (EUR)",
    timezone: "EET (UTC+2)",
    image: genericImage
  },
  {
    slug: "georgie",
    name: "Georgië",
    continent: "Europa",
    description: "De parel van de Kaukasus met wijn, gastvrijheid en spectaculaire bergen. Georgië biedt avontuur voor een fractie van de kosten.",
    highlights: ["Zeer betaalbaar", "Gastvrije cultuur", "Wijnland", "Startup-vriendelijk"],
    climate: "Subtropisch tot alpien",
    costOfLiving: "70-80% lager dan Nederland",
    language: "Georgisch",
    currency: "Georgische lari (GEL)",
    timezone: "GET (UTC+4)",
    image: genericImage
  },
  {
    slug: "hongarije",
    name: "Hongarije",
    continent: "Europa",
    description: "Centraal Europa met thermale baden en rijke geschiedenis. Hongarije combineert EU-voordelen met lage kosten.",
    highlights: ["EU-lidmaatschap", "Lage kosten", "Thermale baden", "Centrale ligging"],
    climate: "Continentaal",
    costOfLiving: "40-50% lager dan Nederland",
    language: "Hongaars",
    currency: "Hongaarse forint (HUF)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "ierland",
    name: "Ierland",
    continent: "Europa",
    description: "Het groene eiland met Engelstalige cultuur en sterke tech-industrie. Ierland trekt vooral jonge professionals.",
    highlights: ["Engelstalig", "Sterke tech-sector", "EU-lidmaatschap", "Vriendelijke cultuur"],
    climate: "Gematigd oceaanklimaat",
    costOfLiving: "10-30% hoger dan Nederland",
    language: "Engels, Iers",
    currency: "Euro (EUR)",
    timezone: "GMT (UTC+0)",
    image: genericImage
  },
  {
    slug: "kroatie",
    name: "Kroatië",
    continent: "Europa",
    description: "Kristalhelder water en mediterrane charme. Kroatië combineert EU-lidmaatschap met betaalbaar leven aan de kust.",
    highlights: ["EU-lidmaatschap", "Prachtige kust", "Betaalbaar wonen", "Digital nomad-vriendelijk"],
    climate: "Mediterraan aan de kust, continentaal inland",
    costOfLiving: "35-45% lager dan Nederland",
    language: "Kroatisch",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "luxemburg",
    name: "Luxemburg",
    continent: "Europa",
    description: "Klein maar welvarend. Luxemburg biedt hoge salarissen en een internationale omgeving in het hart van Europa.",
    highlights: ["Hoogste salarissen in EU", "Meertalig", "Financieel centrum", "EU-instituties"],
    climate: "Gematigd",
    costOfLiving: "20-40% hoger dan Nederland",
    language: "Luxemburgs, Frans, Duits",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "malta",
    name: "Malta",
    continent: "Europa",
    description: "Het mediterrane eiland met Engelstalige cultuur en belastingvoordelen. Malta is populair bij digital nomads en gepensioneerden.",
    highlights: ["Engelstalig", "EU-lidmaatschap", "Belastingvoordelen", "Jaar-rond zon"],
    climate: "Mediterraan",
    costOfLiving: "20-30% lager dan Nederland",
    language: "Maltees, Engels",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "noorwegen",
    name: "Noorwegen",
    continent: "Europa",
    description: "Fjorden, noorderlicht en olie-rijkdom. Noorwegen biedt spectaculaire natuur maar tegen hoge kosten.",
    highlights: ["Spectaculaire natuur", "Hoge salarissen", "Oliefonds", "Work-life balance"],
    climate: "Subarctisch tot gematigd",
    costOfLiving: "40-60% hoger dan Nederland",
    language: "Noors",
    currency: "Noorse kroon (NOK)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "oostenrijk",
    name: "Oostenrijk",
    continent: "Europa",
    description: "Alpine schoonheid en culturele rijkdom. Oostenrijk combineert berglandschappen met een hoog levensstandaard.",
    highlights: ["Alpine natuur", "Cultureel erfgoed", "Hoge levensstandaard", "Centrale ligging"],
    climate: "Alpien tot gematigd",
    costOfLiving: "5-15% hoger dan Nederland",
    language: "Duits",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "polen",
    name: "Polen",
    continent: "Europa",
    description: "Groeiende economie in het hart van Europa. Polen biedt moderne steden en betaalbaar leven voor EU-burgers.",
    highlights: ["Groeiende economie", "EU-lidmaatschap", "Betaalbaar leven", "Historische steden"],
    climate: "Gematigd",
    costOfLiving: "45-55% lager dan Nederland",
    language: "Pools",
    currency: "Poolse zloty (PLN)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "roemenie",
    name: "Roemenië",
    continent: "Europa",
    description: "Van de Karpaten tot de Zwarte Zee. Roemenië biedt EU-voordelen met zeer lage kosten van leven.",
    highlights: ["Zeer betaalbaar", "EU-lidmaatschap", "Diverse natuur", "Groeiende tech-sector"],
    climate: "Continentaal",
    costOfLiving: "60-70% lager dan Nederland",
    language: "Roemeens",
    currency: "Roemeense leu (RON)",
    timezone: "EET (UTC+2)",
    image: genericImage
  },
  {
    slug: "slovenie",
    name: "Slovenië",
    continent: "Europa",
    description: "Alpine prachtigheid in miniaturformaat. Slovenië biedt bergen, meren en mediterrane kust in één klein land.",
    highlights: ["Diverse natuur", "EU-lidmaatschap", "Veilig", "Centrale ligging"],
    climate: "Alpien tot mediterraan",
    costOfLiving: "25-35% lager dan Nederland",
    language: "Sloveens",
    currency: "Euro (EUR)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },
  {
    slug: "turkije",
    name: "Turkije",
    continent: "Europa",
    description: "Waar Europa en Azië elkaar ontmoeten. Turkije biedt rijke geschiedenis, diverse landschappen en zeer betaalbaar leven.",
    highlights: ["Zeer betaalbaar", "Rijk erfgoed", "Diverse landschappen", "Kustklimaet"],
    climate: "Mediterraan tot continentaal",
    costOfLiving: "60-70% lager dan Nederland",
    language: "Turks",
    currency: "Turkse lira (TRY)",
    timezone: "TRT (UTC+3)",
    image: genericImage
  },
  {
    slug: "tsjechie",
    name: "Tsjechië",
    continent: "Europa",
    description: "Het sprookjesland met Praag als parel. Tsjechië combineert geschiedenis, cultuur en betaalbaar leven in Centraal-Europa.",
    highlights: ["Historische steden", "EU-lidmaatschap", "Betaalbaar bier", "Centrale ligging"],
    climate: "Gematigd continentaal",
    costOfLiving: "40-50% lager dan Nederland",
    language: "Tsjechisch",
    currency: "Tsjechische kroon (CZK)",
    timezone: "CET (UTC+1)",
    image: genericImage
  },

  // Amerika's
  {
    slug: "verenigde-staten",
    name: "Verenigde Staten",
    continent: "Amerika's",
    description: "The American Dream leeft voor wie bereid is de bureaucratie te trotseren. Enorme diversiteit in klimaat en cultuur.",
    highlights: ["Grote werkmarkt", "Culturele diversiteit", "Ondernemerskansen", "Diverse klimaten"],
    climate: "Sterk variërend per staat",
    costOfLiving: "Variabel, gemiddeld vergelijkbaar",
    language: "Engels",
    currency: "US Dollar (USD)",
    timezone: "Meerdere tijdzones",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?q=80&w=800"
  },
  {
    slug: "canada",
    name: "Canada",
    continent: "Amerika's",
    description: "Ruimte, natuur en een welkomstbeleid voor immigranten. Canada scoort hoog op leefbaarheid.",
    highlights: ["Immigratievriendelijk", "Prachtige natuur", "Multicultureel", "Hoge levenskwaliteit"],
    climate: "Continentaal tot arctisch",
    costOfLiving: "Vergelijkbaar met Nederland",
    language: "Engels, Frans",
    currency: "Canadese dollar (CAD)",
    timezone: "Meerdere tijdzones",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800"
  },
  {
    slug: "curacao",
    name: "Curaçao",
    continent: "Amerika's",
    description: "Nederlands spreken onder de tropische zon. Curaçao biedt een vertrouwde taal in een Caribische setting.",
    highlights: ["Nederlandstalig", "Tropisch klimaat", "Geen visum nodig", "Caribische levensstijl"],
    climate: "Tropisch, droog",
    costOfLiving: "Vergelijkbaar met Nederland",
    language: "Nederlands, Papiaments",
    currency: "Antilliaanse gulden (ANG)",
    timezone: "AST (UTC-4)",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800"
  },
  {
    slug: "argentinie",
    name: "Argentinië",
    continent: "Amerika's",
    description: "Tango, steaks en wijngaarden. Argentinië biedt Europese flair in Zuid-Amerika met een betaalbare levensstijl.",
    highlights: ["Europese cultuur", "Wijnland", "Betaalbaar leven", "Diverse landschappen"],
    climate: "Subtropisch tot gematigd",
    costOfLiving: "50-60% lager dan Nederland",
    language: "Spaans",
    currency: "Argentijnse peso (ARS)",
    timezone: "ART (UTC-3)",
    image: genericImage
  },
  {
    slug: "brazilie",
    name: "Brazilië",
    continent: "Amerika's",
    description: "Het land van carnaval en stranden. Brazilië biedt een levendige cultuur en diverse mogelijkheden voor expats.",
    highlights: ["Levendige cultuur", "Prachtige stranden", "Groeiende economie", "Gastvrije mensen"],
    climate: "Tropisch tot subtropisch",
    costOfLiving: "50-60% lager dan Nederland",
    language: "Portugees",
    currency: "Braziliaanse real (BRL)",
    timezone: "BRT (UTC-3)",
    image: genericImage
  },
  {
    slug: "chili",
    name: "Chili",
    continent: "Amerika's",
    description: "Van woestijn tot gletsjers. Chili is het meest ontwikkelde land van Zuid-Amerika met stabiele economie.",
    highlights: ["Stabiele economie", "Diverse geografie", "Goede infrastructuur", "Wijnland"],
    climate: "Zeer gevarieerd",
    costOfLiving: "30-40% lager dan Nederland",
    language: "Spaans",
    currency: "Chileense peso (CLP)",
    timezone: "CLT (UTC-3)",
    image: genericImage
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    continent: "Amerika's",
    description: "Pura vida in Centraal-Amerika. Costa Rica staat bekend om zijn stabiliteit, natuur en vriendelijke bevolking.",
    highlights: ["Politieke stabiliteit", "Biodiversiteit", "Geen leger", "Pura vida mentaliteit"],
    climate: "Tropisch",
    costOfLiving: "40-50% lager dan Nederland",
    language: "Spaans",
    currency: "Costa Ricaanse colón (CRC)",
    timezone: "CST (UTC-6)",
    image: genericImage
  },
  {
    slug: "dominicaanse-republiek",
    name: "Dominicaanse Republiek",
    continent: "Amerika's",
    description: "Caribische stranden en jaar-rond zon. De DR biedt tropisch leven tegen betaalbare prijzen.",
    highlights: ["Tropische stranden", "Jaar-rond zon", "Betaalbaar leven", "Groeiend toerisme"],
    climate: "Tropisch",
    costOfLiving: "55-65% lager dan Nederland",
    language: "Spaans",
    currency: "Dominicaanse peso (DOP)",
    timezone: "AST (UTC-4)",
    image: genericImage
  },
  {
    slug: "mexico",
    name: "Mexico",
    continent: "Amerika's",
    description: "Rijke cultuur en diverse landschappen. Mexico trekt steeds meer Noord-Amerikaanse en Europese expats.",
    highlights: ["Rijke cultuur", "Betaalbaar leven", "Diverse klimaten", "Groeiende expat-gemeenschap"],
    climate: "Tropisch tot woestijn",
    costOfLiving: "50-60% lager dan Nederland",
    language: "Spaans",
    currency: "Mexicaanse peso (MXN)",
    timezone: "Meerdere tijdzones",
    image: genericImage
  },
  {
    slug: "panama",
    name: "Panama",
    continent: "Amerika's",
    description: "Brug tussen twee oceanen. Panama biedt belastingvoordelen en groeiende economie voor expats.",
    highlights: ["Belastingvoordelen", "Dollar als munteenheid", "Twee oceanen", "Groeinde economie"],
    climate: "Tropisch",
    costOfLiving: "40-50% lager dan Nederland",
    language: "Spaans",
    currency: "US Dollar (USD)",
    timezone: "EST (UTC-5)",
    image: genericImage
  },
  {
    slug: "paraguay",
    name: "Paraguay",
    continent: "Amerika's",
    description: "Het hart van Zuid-Amerika met lage belastingen en betaalbaar leven. Paraguay trekt steeds meer expats.",
    highlights: ["Zeer lage belastingen", "Betaalbaar leven", "Permanente verblijfsvergunning", "Centrale ligging"],
    climate: "Subtropisch",
    costOfLiving: "60-70% lager dan Nederland",
    language: "Spaans, Guaraní",
    currency: "Paraguayaanse guaraní (PYG)",
    timezone: "PYT (UTC-3)",
    image: genericImage
  },
  {
    slug: "uruguay",
    name: "Uruguay",
    continent: "Amerika's",
    description: "Het meest progressieve land van Zuid-Amerika. Uruguay biedt stabiliteit en kwaliteit van leven.",
    highlights: ["Politieke stabiliteit", "Progressieve wetten", "Veiligheid", "Goede infrastructuur"],
    climate: "Gematigd",
    costOfLiving: "30-40% lager dan Nederland",
    language: "Spaans",
    currency: "Uruguayaanse peso (UYU)",
    timezone: "UYT (UTC-3)",
    image: genericImage
  },

  // Azië & Oceanië
  {
    slug: "australie",
    name: "Australië",
    continent: "Azië & Oceanië",
    description: "Zon, ruimte en een ontspannen levensstijl. Australië trekt avontuurlijke Nederlanders.",
    highlights: ["Outdoor lifestyle", "Sterke economie", "Diverse natuur", "Multicultureel"],
    climate: "Tropisch tot gematigd",
    costOfLiving: "10-20% hoger dan Nederland",
    language: "Engels",
    currency: "Australische dollar (AUD)",
    timezone: "Meerdere tijdzones",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800"
  },
  {
    slug: "thailand",
    name: "Thailand",
    continent: "Azië & Oceanië",
    description: "Betaalbaar leven in een tropisch paradijs. Thailand is populair bij digital nomads en gepensioneerden.",
    highlights: ["Zeer betaalbaar", "Tropisch klimaat", "Gastvrije cultuur", "Goede gezondheidszorg"],
    climate: "Tropisch",
    costOfLiving: "50-60% lager dan Nederland",
    language: "Thai",
    currency: "Baht (THB)",
    timezone: "ICT (UTC+7)",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800"
  },
  {
    slug: "filipijnen",
    name: "Filipijnen",
    continent: "Azië & Oceanië",
    description: "7.000 eilanden met tropisch paradijs. De Filipijnen bieden betaalbaar leven en Engelstalige cultuur.",
    highlights: ["Engelstalig", "Zeer betaalbaar", "Tropische eilanden", "Gastvrije cultuur"],
    climate: "Tropisch",
    costOfLiving: "60-70% lager dan Nederland",
    language: "Filipino, Engels",
    currency: "Filipijnse peso (PHP)",
    timezone: "PHT (UTC+8)",
    image: genericImage
  },
  {
    slug: "indonesie",
    name: "Indonesië",
    continent: "Azië & Oceanië",
    description: "Duizenden eilanden van Bali tot Java. Indonesië biedt tropisch leven tegen zeer lage kosten.",
    highlights: ["Zeer betaalbaar", "Tropische eilanden", "Rijke cultuur", "Digital nomad-vriendelijk"],
    climate: "Tropisch",
    costOfLiving: "60-70% lager dan Nederland",
    language: "Indonesisch",
    currency: "Indonesische rupiah (IDR)",
    timezone: "Meerdere tijdzones",
    image: genericImage
  },
  {
    slug: "japan",
    name: "Japan",
    continent: "Azië & Oceanië",
    description: "Eeuwenoude tradities ontmoeten moderne technologie. Japan biedt unieke ervaringen voor expats.",
    highlights: ["Unieke cultuur", "Uitstekend openbaar vervoer", "Veiligheid", "Technologisch geavanceerd"],
    climate: "Gematigd tot subtropisch",
    costOfLiving: "20-30% hoger dan Nederland",
    language: "Japans",
    currency: "Japanse yen (JPY)",
    timezone: "JST (UTC+9)",
    image: genericImage
  },
  {
    slug: "maleisie",
    name: "Maleisië",
    continent: "Azië & Oceanië",
    description: "Multicultureel Zuidoost-Azië met Engelstalige cultuur. Maleisië combineert moderniteit met traditie.",
    highlights: ["Meertalig", "Moderne infrastructuur", "Betaalbaar leven", "Multicultureel"],
    climate: "Tropisch",
    costOfLiving: "50-60% lager dan Nederland",
    language: "Maleis, Engels, Chinees",
    currency: "Maleisische ringgit (MYR)",
    timezone: "MYT (UTC+8)",
    image: genericImage
  },
  {
    slug: "nieuw-zeeland",
    name: "Nieuw-Zeeland",
    continent: "Azië & Oceanië",
    description: "Adembenemende natuur en outdoor lifestyle. Nieuw-Zeeland biedt rust en avontuur in één land.",
    highlights: ["Spectaculaire natuur", "Outdoor activiteiten", "Veiligheid", "Work-life balance"],
    climate: "Gematigd oceaanklimaat",
    costOfLiving: "5-15% hoger dan Nederland",
    language: "Engels, Māori",
    currency: "Nieuw-Zeelandse dollar (NZD)",
    timezone: "NZST (UTC+12)",
    image: genericImage
  },
  {
    slug: "singapore",
    name: "Singapore",
    continent: "Azië & Oceanië",
    description: "De stadstaat waar Oost en West elkaar ontmoeten. Singapore is een financieel centrum met hoge levensstandaard.",
    highlights: ["Financieel centrum", "Meertalig", "Uitstekende infrastructuur", "Veiligheid"],
    climate: "Tropisch",
    costOfLiving: "30-50% hoger dan Nederland",
    language: "Engels, Chinees, Maleis, Tamil",
    currency: "Singapore dollar (SGD)",
    timezone: "SGT (UTC+8)",
    image: genericImage
  },

  // Afrika
  {
    slug: "zuid-afrika",
    name: "Zuid-Afrika",
    continent: "Afrika",
    description: "Spectaculaire natuur, betaalbaar leven en een groeiende economie in het zuidelijkste puntje van Afrika.",
    highlights: ["Prachtige natuur", "Betaalbaar", "Engelstalig", "Goede infrastructuur"],
    climate: "Subtropisch tot gematigd",
    costOfLiving: "40-50% lager dan Nederland",
    language: "Engels, Afrikaans",
    currency: "Rand (ZAR)",
    timezone: "SAST (UTC+2)",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=800"
  },

  // Midden-Oosten
  {
    slug: "verenigde-arabische-emiraten",
    name: "Verenigde Arabische Emiraten",
    continent: "Midden-Oosten",
    description: "Belastingvrij inkomen en een luxe levensstijl. De VAE trekken professionals uit de hele wereld.",
    highlights: ["Geen inkomstenbelasting", "Luxe levensstijl", "Internationale gemeenschap", "Veilig"],
    climate: "Woestijn, heet",
    costOfLiving: "Variabel, kan hoog zijn",
    language: "Arabisch, Engels",
    currency: "Dirham (AED)",
    timezone: "GST (UTC+4)",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
  },
  {
    slug: "oman",
    name: "Oman",
    continent: "Midden-Oosten",
    description: "Het rustige juweeltje van het Midden-Oosten. Oman combineert traditie met moderniteit in veilige omgeving.",
    highlights: ["Veilig en stabiel", "Vriendelijke cultuur", "Diverse landschappen", "Groeiende economie"],
    climate: "Woestijn tot bergachtig",
    costOfLiving: "20-30% lager dan Nederland",
    language: "Arabisch, Engels",
    currency: "Omaanse rial (OMR)",
    timezone: "GST (UTC+4)",
    image: genericImage
  }
];

export const getCountriesByContinent = () => {
  return countries.reduce((acc, country) => {
    if (!acc[country.continent]) {
      acc[country.continent] = [];
    }
    acc[country.continent].push(country);
    return acc;
  }, {} as Record<string, Country[]>);
};

export const getCountryBySlug = (slug: string) => {
  return countries.find(country => country.slug === slug);
};