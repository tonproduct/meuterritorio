'use client'

import { useEffect, useRef, useState } from 'react'

// 0=oculto | 1=usuário digitando | 2=analisando | 3=abrindo | 4=chat
type Phase = 0 | 1 | 2 | 3 | 4

const messages = [
  { from: 'user', text: 'Várias áreas da empresa entraram em desorganização ao mesmo tempo. Leads entrando… mas vendas não convertem. Equipe perdida. Operação bagunçada. Já não sei qual é o problema principal.', time: '17:19' },
  { from: 'arthur', text: 'O que você está vivendo é efeito dominó. O negócio cresceu em volume, mas a estrutura, o time e o processo não acompanharam.', time: '17:20' },
  { from: 'arthur', text: 'O caos não indica incompetência. Indica que o modelo antigo foi superado pela nova complexidade.', time: '17:20' },
  { from: 'user', text: 'Preciso aprofundar mais.', time: '17:21' },
  { from: 'arthur', text: 'O problema central não é vendas ou operação isoladamente. É a ausência de um centro de comando claro — um único objetivo que alinhe todas as áreas.', time: '17:25' },
  { from: 'user', text: 'O que você acha?', time: '17:24' },
  { from: 'arthur', text: 'Defina o objetivo central dos próximos 30 dias. Comunique: "Tudo que não for isso, pausa." Seu papel é fazer o corte e sustentar o desconforto do foco.', time: '17:25' },
  { from: 'user', text: 'Obrigado.', time: '17:26' },
  { from: 'arthur', text: 'Você está fazendo o movimento certo: buscando clareza e não aceitando resposta rasa. Quando precisar, estarei aqui.', time: '17:27' },
]

const reasoningLines = [
  { w: '78%', delay: '0s' },
  { w: '55%', delay: '0.15s' },
  { w: '88%', delay: '0.3s' },
  { w: '42%', delay: '0.45s' },
]

const LOOP_DELAY = 1200 // pausa antes de reiniciar

function useLoop() {
  const [phase, setPhase] = useState<Phase>(0)
  const [visible, setVisible] = useState(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  function clear() {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  function schedule(fn: () => void, ms: number) {
    const t = setTimeout(fn, ms)
    timers.current.push(t)
  }

  function start(isRestart = false) {
    clear()
    setPhase(0)
    setVisible(0)
    if (!isRestart) {
      // Primeira vez: pílula → raciocínio → abre → chat
      schedule(() => setPhase(1), 400)
      schedule(() => setPhase(2), 2800)
      schedule(() => setPhase(3), 5400)
      schedule(() => setPhase(4), 6000)
    } else {
      // Loop: pílula → abre direto → chat (sem raciocínio)
      schedule(() => setPhase(1), 400)
      schedule(() => setPhase(3), 2000)
      schedule(() => setPhase(4), 2600)
    }
  }

  // Inicia na montagem
  useEffect(() => {
    start(false)
    return clear
  }, [])

  // Avança mensagens na phase 4
  useEffect(() => {
    if (phase !== 4) return
    if (visible >= messages.length) return
    const t = setTimeout(() => setVisible(v => v + 1), visible === 0 ? 300 : 1800)
    timers.current.push(t)
    return () => clearTimeout(t)
  }, [phase, visible])

  // Quando todas as mensagens aparecem, fica congelado em phase 4

  return { phase, visible }
}

export default function HeroPhone() {
  const { phase, visible } = useLoop()
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
  }, [visible])

  const cardPhase = phase >= 2 ? phase : 0

  return (
    <div className="chat-stage">

      {/* ── FASE 1: USUÁRIO DIGITANDO ── */}
      <div className={`user-trigger user-trigger--${phase === 1 ? 'visible' : 'hidden'}`}>
        <div className="user-trigger__avatar">M</div>
        <div className="user-trigger__content">
          <span className="user-trigger__name">Marco</span>
          <span className="user-trigger__label">está digitando para Arthur</span>
          <div className="user-trigger__typing">
            <span /><span /><span />
          </div>
        </div>
      </div>

      {/* ── FASES 2–5: CHAT CARD ── */}
      <div className={`chat-card chat-card--p${cardPhase}`}>

        {/* Header */}
        <div className="chat-card__header">
          <div className={`chat-card__avatar${phase === 2 ? ' chat-card__avatar--thinking' : ''}`}>A</div>
          <div className="chat-card__info">
            <span className="chat-card__name">Arthur</span>
            <span className="chat-card__status">
              {phase === 2
                ? <><span className="think-dot" />raciocinando</>
                : <><span className="avail-dot" />online agora</>}
            </span>
          </div>
          <div className="chat-card__badge">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-label="WhatsApp">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </div>

        {/* Raciocínio */}
        <div className="chat-card__reasoning">
          <div className="reasoning-lines">
            {reasoningLines.map((l, i) => (
              <div key={i} className="reasoning-line"
                style={{ '--w': l.w, '--d': l.delay } as React.CSSProperties} />
            ))}
          </div>
          <div className="reasoning-label">
            <span className="reasoning-spinner" />
            Analisando contexto
            <span className="reasoning-ellipsis"><span>.</span><span>.</span><span>.</span></span>
          </div>
        </div>

        {/* Chat */}
        <div className="chat-card__body chat-card__expandable" ref={chatRef}>
          <div className="chat-card__date">19 de maio</div>
          {messages.slice(0, visible).map((msg, i) => (
            <div key={i} className={`chat-card__row chat-card__row--${msg.from}`}>
              {msg.from === 'arthur' && (
                <div className="chat-card__bubble-avatar chat-card__bubble-avatar--arthur">A</div>
              )}
              <div className={`chat-card__msg chat-card__msg--${msg.from}`}>
                <p>{msg.text}</p>
                <span className="chat-card__time">{msg.time}</span>
              </div>
              {msg.from === 'user' && (
                <div className="chat-card__bubble-avatar chat-card__bubble-avatar--user">M</div>
              )}
            </div>
          ))}
          {phase === 4 && visible < messages.length && (
            <div className="chat-card__typing"><span /><span /><span /></div>
          )}
        </div>

        {/* Footer */}
        <div className="chat-card__footer chat-card__expandable">
          <div className="chat-card__input"><span>Mensagem</span></div>
        </div>
      </div>
    </div>
  )
}
