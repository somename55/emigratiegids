import type { Metadata } from 'next'
import { DM_Serif_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emigratie Kompas - Jouw route naar een nieuw begin',
  description: 'De meest complete gids voor emigreren vanuit Nederland. Alles over belastingen, zorgverzekering, wonen, werken en je nieuwe leven opbouwen in het buitenland.',
  keywords: 'emigratie, emigreren, nederland, buitenland, belasting, zorgverzekering, wonen, werken, visum',
  authors: [{ name: 'Emigratie Kompas' }],
  openGraph: {
    title: 'Emigratie Kompas - Jouw route naar een nieuw begin',
    description: 'De meest complete gids voor emigreren vanuit Nederland.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${dmSerif.variable} ${sourceSans.variable}`}>
      <body className="font-sans text-darkText bg-lightBg antialiased">
        {children}
      </body>
    </html>
  )
}