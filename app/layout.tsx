import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Celine Tech | Desenvolvimento, Automação e IA',
  description:
    'Transforme seu negócio com tecnologia que funciona. A Celine Tech desenvolve sistemas, automações e soluções de IA para empresas que querem crescer com eficiência.',
  keywords: [
    'desenvolvimento de sistemas',
    'automação de processos',
    'inteligência artificial',
    'agência de tecnologia',
    'Celine Tech',
  ],
  openGraph: {
    title: 'Celine Tech | Desenvolvimento, Automação e IA',
    description: 'Transforme seu negócio com tecnologia que funciona.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Celine Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celine Tech | Desenvolvimento, Automação e IA',
    description: 'Transforme seu negócio com tecnologia que funciona.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={ebGaramond.variable}>
      <body>{children}</body>
    </html>
  )
}
