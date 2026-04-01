'use client'

import AnimateInView from './AnimateInView'

const services = [
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Desenvolvimento de Sistemas',
    description:
      'Criamos sistemas sob medida para o seu processo — do zero à entrega. Plataformas web, painéis de gestão, APIs e integrações que funcionam exatamente do jeito que você precisa.',
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Automação de Processos',
    description:
      'Eliminamos tarefas repetitivas e erros manuais com automações inteligentes. Conectamos suas ferramentas, otimizamos seus fluxos e liberamos seu time para o que realmente importa.',
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44L7 19H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.5V4.5A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44L17 19h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5V4.5A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    ),
    title: 'Inteligência Artificial',
    description:
      'Aplicamos IA de forma prática para gerar resultados reais. Chatbots, análise de dados, predições e modelos customizados — tecnologia de ponta adaptada à realidade do seu negócio.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-28 px-6" style={{ backgroundColor: '#1A1118' }}>
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-16">
          <span className="block font-sans text-xs tracking-[0.22em] text-ct-rose-mid uppercase mb-4">
            O que fazemos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ct-off-white mb-4">
            Nossos Serviços
          </h2>
          <p className="font-sans text-base text-ct-rose-light/55 max-w-md mx-auto leading-relaxed">
            Soluções tecnológicas completas para transformar a operação da sua empresa.
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimateInView key={service.title} delay={i * 0.14}>
              <div className="group h-full p-8 rounded-2xl border border-ct-rose-dark/20 bg-ct-rose-dark/[0.04] hover:border-ct-rose-dark/55 hover:bg-ct-rose-dark/10 transition-all duration-300 cursor-default">
                <div className="text-ct-rose-dark mb-5 group-hover:text-ct-rose-mid transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl text-ct-off-white mb-3 group-hover:text-ct-rose-light transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-base text-ct-rose-light/55 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
