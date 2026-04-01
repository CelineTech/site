'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 65% 55% at 15% 65%, rgba(192,96,112,0.11) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 85% 25%, rgba(212,132,138,0.07) 0%, transparent 65%),
          #0E0B0D
        `,
      }}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(192,96,112,0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative orbiting rings (desktop only) */}
      <motion.div
        animate={{ y: [-14, 14, -14] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[6%] top-[18%] w-72 h-72 rounded-full border border-ct-rose-dark/12 hidden lg:block pointer-events-none"
      />
      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[10%] top-[22%] w-48 h-48 rounded-full border border-ct-rose-mid/8 hidden lg:block pointer-events-none"
      />
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[14%] top-[26%] w-28 h-28 rounded-full border border-ct-rose-dark/10 hidden lg:block pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block font-sans text-xs tracking-[0.22em] text-ct-rose-mid uppercase mb-7">
            Desenvolvimento · Automação · Inteligência Artificial
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-6xl lg:text-[5rem] text-ct-off-white leading-[1.1] max-w-3xl mb-7"
        >
          Transforme seu negócio com{' '}
          <span className="text-ct-rose-mid italic">tecnologia que funciona</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-lg md:text-xl text-ct-rose-light/65 max-w-lg mb-11 leading-relaxed"
        >
          Desenvolvemos sistemas, automações e soluções de IA para empresas
          que querem crescer com eficiência — sem complicação, sem enrolação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-ct-rose-dark text-ct-off-white font-sans text-sm tracking-wide rounded-full hover:bg-ct-rose-mid transition-all duration-300 hover:shadow-[0_0_28px_rgba(192,96,112,0.45)]"
          >
            Falar com especialista
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-ct-rose-dark/50 text-ct-rose-light font-sans text-sm tracking-wide rounded-full hover:bg-ct-rose-dark/10 hover:border-ct-rose-dark transition-all duration-300"
          >
            Conhecer nossos serviços
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-ct-black to-transparent pointer-events-none" />
    </section>
  )
}
