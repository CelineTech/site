'use client'

import AnimateInView from './AnimateInView'

interface Message {
  type: 'received' | 'sent'
  text: string
  time: string
}

interface Conversation {
  name: string
  company: string
  initials: string
  messages: Message[]
}

const conversations: Conversation[] = [
  {
    name: 'Mariana R.',
    company: 'Clínica Vida Plena',
    initials: 'MR',
    messages: [
      {
        type: 'received',
        text: 'Cara, a automação mudou TUDO aqui 😅 antes a gente passava o dia ligando pra confirmar consulta, era de enlouquecer',
        time: '09:14',
      },
      {
        type: 'sent',
        text: 'Como ficou depois da implementação?',
        time: '09:15',
      },
      {
        type: 'received',
        text: 'Reduzimos falta em 60%!! 🙏 O sistema confirma, manda lembrete, reagenda... tudo sozinho. Nossa recepcionista finalmente foca no que importa',
        time: '09:16',
      },
    ],
  },
  {
    name: 'Rafael T.',
    company: 'Loja NaturaClick',
    initials: 'RT',
    messages: [
      {
        type: 'received',
        text: 'Sério que eu duvidei no começo 😂 achei que chatbot inteligente era só pra grande empresa... mas nossa, superou minhas expectativas demais',
        time: '14:32',
      },
      {
        type: 'sent',
        text: 'O que mudou na prática?',
        time: '14:33',
      },
      {
        type: 'received',
        text: '+45% de conversão 🔥 agora responde lead de madrugada, final de semana, feriado... nunca mais perdi cliente por falta de atendimento',
        time: '14:34',
      },
    ],
  },
  {
    name: 'Daniela C.',
    company: 'Costa & Associados',
    initials: 'DC',
    messages: [
      {
        type: 'received',
        text: 'Nossa equipe gastava umas 8h por semana só lendo edital em portal de licitação 😩 todo mundo reclamava, era exaustivo',
        time: '10:07',
      },
      {
        type: 'sent',
        text: 'Quanto tempo isso economizou?',
        time: '10:08',
      },
      {
        type: 'received',
        text: 'Praticamente zero agora 😂🔥 O sistema já entrega o resumo pronto com o que importa destacado. Zero edital perdido desde que a gente implementou!',
        time: '10:09',
      },
    ],
  },
]

function ChatBubble({ message }: { message: Message }) {
  const isReceived = message.type === 'received'
  return (
    <div className={`flex ${isReceived ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[84%] px-4 py-2.5 rounded-2xl ${
          isReceived ? 'rounded-tl-sm bg-[#2A1F22]' : 'rounded-tr-sm bg-[#6B2030]'
        }`}
      >
        <p className="font-sans text-sm text-ct-off-white/90 leading-relaxed">
          {message.text}
        </p>
        <p className="font-sans text-[10px] text-ct-rose-light/35 text-right mt-1.5 select-none">
          {message.time} ✓✓
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-28 px-6" style={{ backgroundColor: '#1A1118' }}>
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="text-center mb-16">
          <span className="block font-sans text-xs tracking-[0.22em] text-ct-rose-mid uppercase mb-4">
            O que dizem por aí
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ct-off-white mb-4">
            Clientes que transformaram seu negócio
          </h2>
          <p className="font-sans text-base text-ct-rose-light/55 max-w-md mx-auto leading-relaxed">
            Conversas reais de quem viveu a transformação.
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-3 gap-5">
          {conversations.map((conv, i) => (
            <AnimateInView key={conv.name} delay={i * 0.14}>
              <div className="rounded-2xl overflow-hidden border border-ct-rose-dark/20 bg-[#1E1216]">

                {/* Chat Header */}
                <div
                  className="flex items-center gap-3 px-4 py-3.5 border-b border-ct-rose-dark/15"
                  style={{ backgroundColor: '#2C1B22' }}
                >
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-ct-rose-dark/30 border border-ct-rose-dark/40 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-xs text-ct-rose-light select-none">
                      {conv.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm text-ct-off-white font-medium leading-tight">
                      {conv.name}
                    </p>
                    <p className="font-sans text-xs text-ct-rose-light/45 leading-tight truncate">
                      {conv.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="font-sans text-[10px] text-emerald-400/75">online</span>
                  </div>
                </div>

                {/* Messages */}
                <div
                  className="px-4 py-4 flex flex-col gap-2.5"
                  style={{ backgroundColor: '#1A1014' }}
                >
                  {conv.messages.map((msg, j) => (
                    <ChatBubble key={j} message={msg} />
                  ))}
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
