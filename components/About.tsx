'use client'

import AnimateInView from './AnimateInView'
import Logo from './Logo'

export default function About() {
  return (
    <section
      id="sobre"
      className="py-28 px-6"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(192,96,112,0.05) 50%, transparent 100%), #160D10',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — decorative */}
          <AnimateInView direction="right">
            <div className="flex flex-col items-start gap-10">
              <div className="relative inline-block">
                <Logo size={110} />
                <div className="absolute inset-0 blur-[60px] bg-ct-rose-dark/15 -z-10 rounded-full" />
              </div>

              <blockquote className="pl-5 border-l-2 border-ct-rose-dark">
                <p className="font-serif text-xl md:text-2xl text-ct-rose-light/75 italic leading-relaxed">
                  &ldquo;Tecnologia de qualidade não é privilégio de grandes empresas.&rdquo;
                </p>
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-serif text-3xl text-ct-rose-mid mb-1">100%</p>
                  <p className="font-sans text-sm text-ct-rose-light/50 tracking-wide">Projetos entregues</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-ct-rose-mid mb-1">3×</p>
                  <p className="font-sans text-sm text-ct-rose-light/50 tracking-wide">Mais eficiência média</p>
                </div>
              </div>
            </div>
          </AnimateInView>

          {/* Right — text */}
          <AnimateInView direction="left">
            <div>
              <span className="block font-sans text-xs tracking-[0.22em] text-ct-rose-mid uppercase mb-6">
                Nossa história
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-ct-off-white mb-7">
                Sobre a Celine Tech
              </h2>
              <div className="space-y-4 mb-8">
                <p className="font-sans text-base text-ct-rose-light/60 leading-relaxed">
                  A Celine Tech nasceu para provar que tecnologia de qualidade não é privilégio
                  de grandes empresas. Somos uma agência especializada em desenvolvimento de
                  sistemas, automação de processos e inteligência artificial — com foco em
                  resultado e atendimento próximo.
                </p>
                <p className="font-sans text-base text-ct-rose-light/60 leading-relaxed">
                  Atendemos pequenas e médias empresas, MEIs e startups que querem crescer com
                  eficiência, mas não têm tempo ou equipe interna para isso. Cuidamos da
                  tecnologia para que você possa cuidar do seu negócio.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-ct-rose-dark/25 bg-ct-rose-dark/[0.06]">
                <p className="font-sans text-xs tracking-[0.15em] text-ct-rose-mid uppercase mb-3">
                  Nossa missão
                </p>
                <p className="font-serif text-lg text-ct-off-white/85 leading-relaxed">
                  Transformar processos em vantagens competitivas, conectando sua empresa às
                  melhores soluções tecnológicas do mercado com agilidade e clareza.
                </p>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
