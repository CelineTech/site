import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

// Atualizar com o domínio real antes do deploy
const siteUrl = 'https://celinetech.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Celine Tech | Desenvolvimento, Automação e IA',
    template: '%s | Celine Tech',
  },
  description:
    'Transforme seu negócio com tecnologia que funciona. A Celine Tech desenvolve sistemas, automações e soluções de IA para empresas que querem crescer com eficiência.',
  keywords: [
    'desenvolvimento de sistemas',
    'automação de processos',
    'inteligência artificial',
    'agência de tecnologia',
    'chatbot',
    'dashboard',
    'Celine Tech',
  ],

  openGraph: {
    title: 'Celine Tech | Desenvolvimento, Automação e IA',
    description:
      'Transforme seu negócio com tecnologia que funciona. Sistemas, automações e IA para empresas que querem crescer.',
    url: siteUrl,
    siteName: 'Celine Tech',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Celine Tech — Desenvolvimento, Automação e IA',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Celine Tech | Desenvolvimento, Automação e IA',
    description: 'Transforme seu negócio com tecnologia que funciona.',
    images: ['/opengraph-image'],
    creator: '@celinetech_',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={ebGaramond.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
