'use client'

import { motion } from 'framer-motion'
import AnimateInView from './AnimateInView'

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative py-36 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 55% at 50% 50%, rgba(192,96,112,0.13) 0%, transparent 70%),
          #0E0B0D
        `,
      }}
    >
      {/* Slowly rotating decorative rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-ct-rose-dark/[0.07] hidden lg:block pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-ct-rose-dark/[0.05] hidden lg:block pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateInView>
          <span className="block font-sans text-xs tracking-[0.22em] text-ct-rose-mid uppercase mb-6">
            Vamos conversar?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ct-off-white mb-6 leading-tight">
            Pronta para transformar{' '}
            <span className="text-ct-rose-mid italic">seu negócio?</span>
          </h2>
          <p className="font-sans text-base text-ct-rose-light/65 mb-11 leading-relaxed max-w-xl mx-auto">
            Fale com nossa equipe e descubra como podemos simplificar sua
            operação e aumentar seus resultados — sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-ct-rose-dark text-ct-off-white font-sans text-sm tracking-wide rounded-full hover:bg-ct-rose-mid transition-all duration-300 hover:shadow-[0_0_32px_rgba(192,96,112,0.5)]"
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>
            <a
              href="https://calendly.com/celinetech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-ct-rose-dark/55 text-ct-rose-light font-sans text-sm tracking-wide rounded-full hover:bg-ct-rose-dark/10 hover:border-ct-rose-dark transition-all duration-300"
            >
              {/* Calendar icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar uma conversa
            </a>
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
