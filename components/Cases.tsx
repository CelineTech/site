'use client'

import AnimateInView from './AnimateInView'

const cases = [
  {
    category: 'Automação',
    title: 'Gestão de Redes Sociais',
    before: 'Equipe gastava horas criando e agendando posts manualmente toda semana',
    after: 'Agentes de IA publicam conteúdo automaticamente no Instagram e LinkedIn',
    metric: '+40%',
    metricLabel: 'de tempo livre',
    sub: 'Presença constante nas redes',
  },
  {
    category: 'IA',
    title: 'Chatbot Inteligente',
    before: 'Atendimento limitado ao horário comercial — leads noturnos se perdiam',
    after: 'Chatbot qualifica leads e responde dúvidas 24h por dia, 7 dias por semana',
    metric: '+45%',
    metricLabel: 'de conversão',
    sub: 'Atendimento instantâneo',
  },
  {
    category: 'Automação',
    title: 'Automação de Licitações',
    before: '8h por semana analisando editais manualmente em portais de licitação',
    after: 'Sistema monitora portais 24/7 e entrega resumos executivos prontos',
    metric: '+65%',
    metricLabel: 'de tempo economizado',
    sub: '0 editais perdidos',
  },
  {
    category: 'Dashboard',
    title: 'Dashboard Inteligente',
    before: '4h por semana compilando dados de fontes diferentes para relatórios',
    after: 'Dashboard consolida métricas e gera relatórios em tempo real automaticamente',
    metric: '+40%',
    metricLabel: 'de tempo recuperado',
    sub: 'Decisões baseadas em dados',
  },
]

export default function Cases() {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: '#160D10' }}>
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-16">
          <span className="block font-sans text-xs tracking-[0.22em] text-ct-rose-mid uppercase mb-4">
            Projetos reais
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ct-off-white mb-4">
            Cases de Sucesso
          </h2>
          <p className="font-sans text-base text-ct-rose-light/55 max-w-md mx-auto leading-relaxed">
            Transformações reais que entregamos para nossos clientes.
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((item, i) => (
            <AnimateInView key={item.title} delay={i * 0.12}>
              <div className="group h-full rounded-2xl border border-ct-rose-dark/20 bg-[#1C0F13] hover:border-ct-rose-dark/45 transition-all duration-300 overflow-hidden flex flex-col">

                {/* Header */}
                <div className="px-6 pt-6 pb-4 border-b border-ct-rose-dark/10">
                  <span className="inline-block font-sans text-xs tracking-[0.14em] text-ct-rose-mid border border-ct-rose-dark/40 rounded-full px-3 py-1 mb-3 uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-ct-off-white">
                    {item.title}
                  </h3>
                </div>

                {/* Before / After */}
                <div className="px-6 py-5 flex-1 space-y-4">
                  <div>
                    <p className="font-sans text-xs tracking-[0.12em] text-ct-rose-dark/65 uppercase mb-2">
                      Antes
                    </p>
                    <p className="font-sans text-sm text-ct-rose-light/55 leading-relaxed">
                      {item.before}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-ct-rose-dark/15" />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C06070"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 opacity-70"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    <div className="flex-1 h-px bg-ct-rose-dark/15" />
                  </div>

                  <div>
                    <p className="font-sans text-xs tracking-[0.12em] text-ct-rose-mid uppercase mb-2">
                      Depois
                    </p>
                    <p className="font-sans text-sm text-ct-off-white/75 leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-4 rounded-xl bg-ct-rose-dark/[0.08] border border-ct-rose-dark/20 px-5 py-4">
                    <div>
                      <p className="font-serif text-2xl text-ct-rose-mid leading-none">
                        {item.metric}
                      </p>
                      <p className="font-sans text-xs text-ct-rose-light/55 mt-0.5">
                        {item.metricLabel}
                      </p>
                    </div>
                    <div className="w-px h-8 bg-ct-rose-dark/25 flex-shrink-0" />
                    <p className="font-sans text-sm text-ct-rose-light/70">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
