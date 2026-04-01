'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'

const links = [
  {
    label: 'Agendar uma conversa',
    description: 'Marque um horário com nossa equipe',
    href: 'https://calendly.com/camillyvianna',
    external: true,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: 'Falar pelo WhatsApp',
    description: 'Atendimento rápido e direto',
    href: 'https://wa.link/rv9nvp',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Conhecer nosso site',
    description: 'Veja nossos serviços completos',
    href: '/',
    external: false,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

export default function LinksContent() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{
        background: `
          radial-gradient(ellipse 90% 60% at 50% 25%, rgba(192,96,112,0.11) 0%, transparent 65%),
          #0E0B0D
        `,
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-3 mb-12"
      >
        <Logo size={72} />
        <h1 className="font-serif text-2xl text-ct-off-white tracking-wide mt-1">
          Celine Tech
        </h1>
        <p className="font-sans text-xs tracking-[0.2em] text-ct-rose-mid uppercase">
          Desenvolvimento · Automação · IA
        </p>
      </motion.div>

      {/* Link cards */}
      <div className="w-full max-w-sm flex flex-col gap-3.5">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.28 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="flex items-center gap-4 p-5 rounded-2xl border border-ct-rose-dark/30 bg-ct-rose-dark/[0.06] hover:border-ct-rose-dark/65 hover:bg-ct-rose-dark/[0.12] transition-colors duration-250 group"
          >
            <div className="text-ct-rose-dark group-hover:text-ct-rose-mid transition-colors duration-200 flex-shrink-0">
              {link.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-base text-ct-off-white group-hover:text-white transition-colors duration-200">
                {link.label}
              </p>
              <p className="font-sans text-sm text-ct-rose-light/45 mt-0.5">
                {link.description}
              </p>
            </div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 text-ct-rose-dark/45 group-hover:text-ct-rose-mid group-hover:translate-x-0.5 transition-all duration-200"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        ))}
      </div>


      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="font-sans text-xs text-ct-rose-light/20 mt-14 tracking-widest"
      >
        celinetech.com.br
      </motion.p>

      
    </main>
  )
}
