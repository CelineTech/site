'use client'

import AnimateInView from './AnimateInView'

const differentials = [
  {
    number: '01',
    title: 'Atendimento personalizado',
    description:
      'Cada projeto é único. Ouvimos, entendemos e entregamos exatamente o que seu negócio precisa — sem soluções genéricas, sem surpresas no meio do caminho.',
  },
  {
    number: '02',
    title: 'Entrega com resultado',
    description:
      'Não entregamos só código. Entregamos soluções que funcionam e geram retorno mensurável. Nosso sucesso é medido pelo crescimento do seu negócio.',
  },
  {
    number: '03',
    title: 'Tecnologia acessível',
    description:
      'Democratizamos o acesso à tecnologia de ponta para empresas de todos os tamanhos. Qualidade premium não precisa ser caro — precisa ser estratégico.',
  },
]

export default function WhyCeline() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: '#0E0B0D' }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-20">
          <span className="block font-sans text-xs tracking-[0.22em] text-ct-rose-mid uppercase mb-4">
            Por que escolher
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ct-off-white">
            Por que a Celine Tech?
          </h2>
        </AnimateInView>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {differentials.map((item, i) => (
            <AnimateInView key={item.number} delay={i * 0.15}>
              <div className="flex flex-col gap-3">
                <span className="font-serif text-[3.5rem] leading-none text-ct-rose-dark/50 select-none">
                  {item.number}
                </span>
                <div className="w-10 h-px bg-ct-rose-dark" />
                <h3 className="font-serif text-xl text-ct-off-white">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-ct-rose-light/55 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
