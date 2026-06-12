'use client'

import { useState } from 'react'

const items = [
  {
    q: 'Arthur é uma IA como o ChatGPT?',
    a: 'Não no sentido de uso. Arthur foi construído com uma personalidade, método e postura específicos para o contexto executivo. Ele não é um assistente genérico — é um advisor cognitivo com identidade, rigor e memória contextual.',
  },
  {
    q: 'Como funciona o acesso pelo WhatsApp?',
    a: 'Após a ativação, você recebe o contato direto do Arthur. Não há instalação, não há dashboard, não há curva de aprendizado. Você abre o WhatsApp e começa a conversar.',
  },
  {
    q: 'Arthur substitui coach, mentor ou consultoria?',
    a: 'Não substitui — e não é esse o objetivo. Arthur opera entre as sessões. Quando a decisão precisa ser tomada agora, não na próxima quinta-feira.',
  },
  {
    q: 'Quanto tempo por semana preciso dedicar?',
    a: 'Nenhum tempo fixo. Arthur se adapta ao ritmo do seu negócio. Pode ser uma conversa de 5 minutos antes de uma reunião crítica ou um diálogo mais longo para estruturar uma decisão complexa.',
  },
  {
    q: 'Arthur consegue analisar dados e relatórios do meu negócio?',
    a: 'Sim. Você pode compartilhar planilhas, relatórios e números diretamente pelo WhatsApp. Arthur lê, interpreta e transforma dados em perspectiva estratégica.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Sem multa, sem fidelidade mínima forçada. Se o Arthur não estiver gerando valor real, não há razão para continuar.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div className="faq-accordion__item" key={i}>
          <button
            className="faq-accordion__trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className={`faq-accordion__icon${open === i ? ' faq-accordion__icon--open' : ''}`}>+</span>
          </button>
          <div className={`faq-accordion__body${open === i ? ' faq-accordion__body--open' : ' faq-accordion__body--closed'}`}>
            <p className="faq-accordion__answer">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
