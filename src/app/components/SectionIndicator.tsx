'use client'

import { useEffect, useRef, useState } from 'react'

const sections = [
  {
    id: 'hero',
    label: 'Abertura',
    desc: 'O visitante precisa sentir que essa página foi escrita para alguém no nível dele. O headline instala o gap entre a decisão que ele toma e a melhor decisão possível.',
  },
  {
    id: 'problema',
    label: 'Problema Invisível',
    desc: 'Fazer o CEO se reconhecer na situação descrita. Ele precisa sentir que alguém nomeou algo que ele vivia mas não tinha palavras para descrever.',
  },
  {
    id: 'arthur',
    label: 'Posicionamento',
    desc: 'Apresentar Arthur como resposta ao gap sem soar como ferramenta ou software. A percepção precisa ser de presença estratégica, não de produto.',
  },
  {
    id: 'como-funciona',
    label: 'Como Funciona',
    desc: 'Tangibilizar o que é abstrato. A timeline mostra o fluxo de raciocínio do Arthur — estrutura, confronto, caminhos, memória.',
  },
  {
    id: 'features',
    label: 'Features',
    desc: 'Mostrar profundidade e sofisticação sem cair no tom de catálogo de software. Cada feature é uma dimensão da presença do Arthur, não uma funcionalidade.',
  },
  {
    id: 'para-quem',
    label: 'Para Quem',
    desc: 'Criar identidade no visitante certo e afastar o errado. Quem se vê nos perfis positivos precisa sentir que isso foi construído especificamente para ele.',
  },
  {
    id: 'autoridade',
    label: 'Autoridade',
    desc: 'Conectar Arthur a experiência real de decisão, não a laboratório de IA. A credibilidade vem de quem construiu e do contexto onde foi gerado.',
  },
  {
    id: 'prova-social',
    label: 'Prova Social',
    desc: 'Depoimentos reais de líderes que usam Arthur. A função é espelhar o visitante em alguém parecido com ele — mesmo contexto, mesmo nível de pressão.',
  },
  {
    id: 'ativacao',
    label: 'Oferta',
    desc: 'Clareza total sobre o que está sendo comprado, por quanto e o que está incluído. O botão vai para o checkout — sem fricção adicional.',
  },
  {
    id: 'faq',
    label: 'Dúvidas Frequentes',
    desc: 'Antecipar as objeções reais antes que o visitante feche a aba. Cada pergunta responde uma razão de não comprar.',
  },
  {
    id: 'fechamento',
    label: 'Fechamento',
    desc: 'O visitante chegou até aqui. A função é converter sem pressionar. Termina com uma decisão clara, não com um resumo do que já foi dito.',
  },
]

export default function SectionIndicator() {
  const [collapsed, setCollapsed] = useState(true)
  const [active, setActive] = useState(sections[0])
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id)
            if (match) setActive(match)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className={`section-indicator${collapsed ? ' collapsed' : ''}`}>
      <div className="si-toggle" onClick={() => setCollapsed((c) => !c)}>
        <span className="si-arrow">‹</span>
      </div>
      <div className="si-body">
        <span className="si-name">{active.label}</span>
        <span className="si-desc">{active.desc}</span>
      </div>
    </div>
  )
}
