export interface Essential {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  sections: { title: string; content: string }[];
}

export const essentials: Essential[] = [
  {
    slug: "aow-pensioen",
    title: "AOW & Pensioen",
    description: "Wat gebeurt er met je AOW en pensioen als je emigreert? Alles over opbouw, uitbetaling en belasting.",
    icon: "Wallet",
    sections: [
      {
        title: "AOW en emigratie",
        content: "Je AOW-opbouw stopt zodra je Nederland verlaat. Voor elk jaar dat je niet verzekerd bent, wordt je AOW 2% lager. Je kunt vrijwillig bijverzekeren via de SVB, maar dit moet je binnen een jaar na vertrek aanvragen."
      },
      {
        title: "Pensioen in het buitenland",
        content: "Je bedrijfspensioen wordt gewoon uitbetaald in het buitenland. Let op: afhankelijk van het belastingverdrag betaal je belasting in Nederland of in je nieuwe woonland."
      },
      {
        title: "Vrijwillige verzekering",
        content: "Via de SVB kun je je vrijwillig verzekeren voor AOW. Dit kost een percentage van je inkomen en moet je aanvragen binnen 12 maanden na emigratie."
      },
      {
        title: "Pensioenopbouw stopzetten",
        content: "Informeer je huidige pensioenuitvoerder over je emigratie. Sommige pensioenen kun je voortzetten, andere niet. Check ook of je pensioen mee kan naar een andere uitvoerder."
      }
    ]
  },
  {
    slug: "bankieren",
    title: "Bankieren",
    description: "Nederlandse bankrekening houden of niet? Alles over bankieren als emigrant.",
    icon: "Landmark",
    sections: [
      {
        title: "Nederlandse rekening behouden",
        content: "De meeste Nederlandse banken staan toe dat je je rekening houdt na emigratie, maar sommige sluiten accounts na verhuizing buiten de EU. Check dit vooraf bij je bank."
      },
      {
        title: "Lokale bankrekening openen",
        content: "In je nieuwe woonland heb je vrijwel altijd een lokale bankrekening nodig. Neem je NIE/BSN-equivalent en bewijs van adres mee."
      },
      {
        title: "Internationaal geld overmaken",
        content: "Gebruik diensten als Wise of Revolut voor voordelige internationale overboekingen. Traditionele banken rekenen vaak hoge kosten."
      },
      {
        title: "Creditcards en betaalmiddelen",
        content: "Zorg dat je Nederlandse betaalpassen ook in het buitenland werken. Informeer bij je bank over kosten en beperkingen voor gebruik buiten Nederland."
      }
    ]
  },
  {
    slug: "belastingen",
    title: "Belastingen",
    description: "Van conserverende aanslag tot dubbele belasting: voorkom fiscale verrassingen bij emigratie.",
    icon: "Calculator",
    sections: [
      {
        title: "Fiscale woonplaats",
        content: "Je fiscale woonplaats bepaalt waar je belasting betaalt. Dit is niet per se waar je ingeschreven staat, maar waar je feitelijk woont en leeft."
      },
      {
        title: "Belastingverdragen",
        content: "Nederland heeft met veel landen verdragen om dubbele belasting te voorkomen. Check altijd welk verdrag geldt voor jouw situatie."
      },
      {
        title: "Conserverende aanslag",
        content: "Bij emigratie kan de Belastingdienst een conserverende aanslag opleggen over je pensioen en aanmerkelijk belang. Dit is een voorwaardelijke aanslag die je vaak niet hoeft te betalen."
      },
      {
        title: "Jaaropgave en definitieve aanslag",
        content: "Je krijgt een jaaropgave over het jaar van emigratie. Check of alle gegevens kloppen en vraag om correctie als dat niet zo is."
      }
    ]
  },
  {
    slug: "huisdieren",
    title: "Huisdieren",
    description: "Van chip en vaccinatie tot invoerregels: neem je huisdier stressvrij mee naar het buitenland.",
    icon: "PawPrint",
    sections: [
      {
        title: "Europees dierenpaspoort",
        content: "Binnen de EU heb je een Europees dierenpaspoort nodig met geldige rabiësvaccinatie. De vaccinatie moet minimaal 21 dagen oud zijn."
      },
      {
        title: "Chip en registratie",
        content: "Je huisdier moet gechipt zijn met een ISO-conforme microchip. Zorg dat de chipgegevens overeenkomen met het paspoort."
      },
      {
        title: "Invoerregels per land",
        content: "Buiten de EU gelden strengere regels, zoals bloedtesten, quarantaine of specifieke vaccinaties. Check altijd de regels van je bestemmingsland."
      },
      {
        title: "Vervoer en reisdocumenten",
        content: "Plan de reis zorgvuldig. Bij vliegen gelden strenge regels voor vervoer van dieren. Sommige rassen mogen niet in de bagageruimte."
      }
    ]
  },
  {
    slug: "ondernemen",
    title: "Ondernemen",
    description: "Een bedrijf starten of je Nederlandse onderneming voortzetten vanuit het buitenland.",
    icon: "Briefcase",
    sections: [
      {
        title: "ZZP in het buitenland",
        content: "Als je als ZZP'er emigreert, moet je je meestal lokaal inschrijven. Je Nederlandse KvK-inschrijving vervalt niet automatisch."
      },
      {
        title: "BV en emigratie",
        content: "Een Nederlandse BV kun je aanhouden vanuit het buitenland, maar let op de vestigingsplaatsfictie en substance-eisen."
      },
      {
        title: "Lokaal ondernemen",
        content: "Elk land heeft eigen regels voor het starten van een bedrijf. Informeer je goed over vergunningen, belastingplichten en sociale premies."
      },
      {
        title: "BTW en administratie",
        content: "Bij grensoverschrijdende diensten gelden complexe BTW-regels. Zorg voor goede administratie en overweeg professionele hulp."
      }
    ]
  },
  {
    slug: "onderwijs",
    title: "Onderwijs",
    description: "Schoolkeuze voor je kinderen: van internationale school tot lokaal onderwijs.",
    icon: "GraduationCap",
    sections: [
      {
        title: "Internationale scholen",
        content: "Internationale scholen bieden onderwijs in het Engels of Nederlands, maar zijn vaak duur (€5.000-€25.000 per jaar)."
      },
      {
        title: "Lokaal onderwijs",
        content: "Lokale scholen zijn meestal gratis of goedkoop. Kinderen leren snel de taal, maar de overgang kan in het begin lastig zijn."
      },
      {
        title: "Nederlandse afstandsscholen",
        content: "Via het Wereldschool of NOB kun je kinderen Nederlands onderwijs laten volgen naast hun lokale school."
      },
      {
        title: "Diploma-erkenning",
        content: "Check of Nederlandse diploma's erkend worden in je nieuwe land en andersom. Soms is een apostille of vertaling nodig."
      }
    ]
  },
  {
    slug: "uitschrijven",
    title: "Uitschrijven",
    description: "Wat moet je regelen bij de gemeente, Belastingdienst en andere instanties voor vertrek?",
    icon: "ClipboardCheck",
    sections: [
      {
        title: "Gemeente uitschrijving",
        content: "Meld je emigratie bij de gemeente, bij voorkeur 5 dagen voor vertrek tot maximaal 5 dagen erna. Je ontvangt een bewijs van uitschrijving."
      },
      {
        title: "Belastingdienst",
        content: "De Belastingdienst wordt automatisch geïnformeerd. Je ontvangt een M-biljet voor het jaar van emigratie."
      },
      {
        title: "Overige instanties",
        content: "Denk aan: zorgverzekering opzeggen, DigiD (blijft beperkt werken), SVB, UWV, en je rijbewijs."
      },
      {
        title: "Checklist voor vertrek",
        content: "Maak een lijst van alle abonnementen, lidmaatschappen en automatische incasso's die je moet opzeggen of aanpassen."
      }
    ]
  },
  {
    slug: "visum-verblijfsvergunning",
    title: "Visum & Verblijfsvergunning",
    description: "Welk visum heb je nodig? Overzicht van verblijfsvergunningen per type land.",
    icon: "Stamp",
    sections: [
      {
        title: "Binnen de EU",
        content: "Als EU-burger mag je vrij wonen en werken in alle EU-landen. Na 3 maanden moet je je vaak lokaal registreren."
      },
      {
        title: "Buiten de EU",
        content: "Voor landen buiten de EU heb je meestal een visum of verblijfsvergunning nodig. Dit kan een werkvisum, investeerdersvisum of gepensioneerdenvisum zijn."
      },
      {
        title: "Digital nomad visa",
        content: "Steeds meer landen bieden speciale visa voor digital nomads, zoals Portugal, Griekenland, Kroatië en de VAE."
      },
      {
        title: "Aanvraagproces",
        content: "Begin tijdig met de aanvraag. Sommige visa kunnen maanden duren. Zorg dat je paspoort nog minstens 6 maanden geldig is."
      }
    ]
  },
  {
    slug: "wonen-huis-kopen",
    title: "Wonen & Huis Kopen",
    description: "Een huis kopen of huren in het buitenland: regels, kosten en praktische tips.",
    icon: "Home",
    sections: [
      {
        title: "Huren vs kopen",
        content: "Begin altijd met huren. Je leert de buurt kennen, begrijpt de lokale markt en voorkomt overhaaste beslissingen."
      },
      {
        title: "Koopproces per land",
        content: "Het koopproces verschilt sterk per land. In sommige landen heb je een fiscaal nummer nodig voordat je kunt kopen."
      },
      {
        title: "Hypotheek in het buitenland",
        content: "Een lokale hypotheek is vaak mogelijk maar met andere voorwaarden dan in Nederland. Verwacht hogere rentes en lagere LTV-ratio's."
      },
      {
        title: "Juridische aspecten",
        content: "Schakel altijd een lokale advocaat of notaris in bij een aankoop. De wetgeving verschilt sterk per land."
      }
    ]
  },
  {
    slug: "zorgverzekering",
    title: "Zorgverzekering",
    description: "Hoe blijf je verzekerd in je nieuwe woonland? Alles over EHIC, lokale zorg en internationale polissen.",
    icon: "HeartPulse",
    sections: [
      {
        title: "Nederlandse zorgverzekering opzeggen",
        content: "Bij emigratie kun je je Nederlandse basisverzekering opzeggen. Dit moet je doen bij je zorgverzekeraar met bewijs van uitschrijving."
      },
      {
        title: "EHIC en overgangsperiode",
        content: "De EHIC (European Health Insurance Card) biedt tijdelijke dekking in EU-landen, maar is geen vervanging voor een lokale verzekering."
      },
      {
        title: "Internationale zorgverzekering",
        content: "Een internationale polis (bijv. Cigna, Allianz Care) kan handig zijn als tussenstap, vooral als je nog geen lokale verzekering hebt."
      },
      {
        title: "Lokale zorgverzekering",
        content: "Informeer je goed over het lokale zorgsysteem. In sommige landen is verzekering verplicht, in andere landen betaal je per behandeling."
      }
    ]
  }
];

export const getEssentialBySlug = (slug: string) => {
  return essentials.find(essential => essential.slug === slug);
};