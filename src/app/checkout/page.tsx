'use client'

import { useState } from 'react'

export default function CheckoutPage() {
  const [method, setMethod] = useState<'card' | 'pix'>('card')

  return (
    <div className="checkout-root">

      {/* ── NAV MINIMAL ── */}
      <header className="checkout-nav">
        <a href="/" className="checkout-nav__back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar
        </a>
        <img src="/logo.png" alt="Meu Território" className="checkout-nav__logo" />
        <span className="checkout-nav__secure">
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
            <path d="M6.5 0L0 2.5v4.75C0 10.8 2.8 13.9 6.5 15c3.7-1.1 6.5-4.2 6.5-7.75V2.5L6.5 0z" fill="currentColor" opacity=".25"/>
            <path d="M6.5 1.5L1 3.7v3.55C1 10.2 3.5 13 6.5 13.9c3-.9 5.5-3.7 5.5-6.65V3.7L6.5 1.5z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M4 7.5l1.8 1.8L9 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Pagamento seguro
        </span>
      </header>

      {/* ── LAYOUT ── */}
      <main className="checkout-layout">

        {/* ── COLUNA ESQUERDA — RESUMO ── */}
        <aside className="checkout-summary">

          <div className="checkout-summary__header">
            <p className="checkout-summary__label">Você está ativando</p>
            <h1 className="checkout-summary__product">Arthur</h1>
            <p className="checkout-summary__sub">Advisor Cognitivo Estratégico</p>
          </div>

          <div className="checkout-price-block">
            <div className="checkout-price">
              <span className="checkout-price__currency">R$</span>
              <span className="checkout-price__amount">497</span>
              <span className="checkout-price__period">/mês</span>
            </div>
            <p className="checkout-price__note">Cobrado mensalmente · Cancele quando quiser</p>
          </div>

          <ul className="checkout-includes">
            {[
              'Acesso direto via WhatsApp, sem limite de mensagens',
              'Weekly Executive Brief toda semana',
              'Real-Time Alerts estratégicos',
              'Análise de planilhas e relatórios do negócio',
              'Memória contextual acumulada',
              'Think-With-Me Mode para decisões complexas',
            ].map((item) => (
              <li key={item}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.5" stroke="currentColor" opacity=".3"/>
                  <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <blockquote className="checkout-testimonial">
            <div className="checkout-testimonial__stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                  <path d="M6.5 0l1.6 4.9H13l-4.2 3 1.6 4.9-4.2-3-4.2 3 1.6-4.9L0 4.9h4.9z"/>
                </svg>
              ))}
            </div>
            <p>"Arthur mudou a forma como eu entro em decisões difíceis. Antes eu chegava com a resposta pronta. Agora chego com as perguntas certas."</p>
            <footer>
              <strong>Felipe Andrade</strong>
              <span>CEO · Empresa de Construção Regional</span>
            </footer>
          </blockquote>

        </aside>

        {/* ── COLUNA DIREITA — PAGAMENTO ── */}
        <section className="checkout-form-col">

          <h2 className="checkout-form-col__title">Informações de pagamento</h2>

          {/* TODO: Envolver com <Elements stripe={stripePromise}> do @stripe/react-stripe-js */}
          <form className="checkout-form" id="checkout-form">

            {/* Dados do cliente */}
            <fieldset className="checkout-fieldset">
              <legend className="checkout-fieldset__legend">Seus dados</legend>

              <div className="checkout-field">
                <label htmlFor="c-name">Nome completo</label>
                <input id="c-name" type="text" placeholder="Seu nome" autoComplete="name" />
              </div>

              <div className="checkout-field">
                <label htmlFor="c-email">E-mail</label>
                <input id="c-email" type="email" placeholder="seu@email.com" autoComplete="email" />
              </div>
            </fieldset>

            {/* Seletor de método */}
            <div className="checkout-method-tabs">
              <button
                type="button"
                className={`checkout-method-tab${method === 'card' ? ' checkout-method-tab--active' : ''}`}
                onClick={() => setMethod('card')}
              >
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <rect x=".5" y=".5" width="15" height="11" rx="1.5" stroke="currentColor" strokeOpacity=".5"/>
                  <rect x="0" y="3" width="16" height="2.5" fill="currentColor" opacity=".25"/>
                  <rect x="2" y="7.5" width="4" height="1.5" rx=".75" fill="currentColor" opacity=".5"/>
                </svg>
                Cartão de crédito
              </button>
              <button
                type="button"
                className={`checkout-method-tab${method === 'pix' ? ' checkout-method-tab--active' : ''}`}
                onClick={() => setMethod('pix')}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6.1 1.5L8 3.4l1.9-1.9a2.7 2.7 0 013.8 3.8L11.8 7.2a.5.5 0 000 .7l1.9 1.9a2.7 2.7 0 01-3.8 3.8L8 11.7l-1.9 1.9a2.7 2.7 0 01-3.8-3.8l1.9-1.9a.5.5 0 000-.7L2.3 5.3a2.7 2.7 0 013.8-3.8z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                </svg>
                PIX
              </button>
            </div>

            {/* Campos de cartão */}
            {method === 'card' && (
              <fieldset className="checkout-fieldset">
                <legend className="checkout-fieldset__legend">Dados do cartão</legend>

                {/* TODO: Substituir pelos componentes do Stripe Elements */}
                <div className="checkout-field">
                  <label htmlFor="c-card">Número do cartão</label>
                  <div className="checkout-card-input" id="card-number-element">
                    <input id="c-card" type="text" placeholder="1234 5678 9012 3456" maxLength={19} />
                    <div className="checkout-card-brands">
                      <span className="card-brand">VISA</span>
                      <span className="card-brand">MC</span>
                    </div>
                  </div>
                </div>

                <div className="checkout-field-row">
                  <div className="checkout-field">
                    <label htmlFor="c-expiry">Validade</label>
                    <input id="c-expiry" type="text" placeholder="MM / AA" maxLength={7} />
                  </div>
                  <div className="checkout-field">
                    <label htmlFor="c-cvc">CVC</label>
                    <input id="c-cvc" type="text" placeholder="123" maxLength={4} />
                  </div>
                </div>
              </fieldset>
            )}

            {/* PIX */}
            {method === 'pix' && (
              <div className="checkout-pix">
                <div className="checkout-pix__info">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeOpacity=".3"/>
                    <path d="M9 8v5M9 6v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  <p>Ao confirmar, um <strong>QR Code PIX</strong> será gerado. Você terá <strong>1 hora</strong> para realizar o pagamento. O acesso é liberado automaticamente após a confirmação.</p>
                </div>
                <div className="checkout-pix__qr-placeholder" aria-hidden="true">
                  {/* TODO: Renderizar QR Code do Stripe após criar o PaymentIntent com pix */}
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" opacity=".15">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="7" y="7" width="10" height="10" fill="currentColor"/>
                    <rect x="34" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="39" y="7" width="10" height="10" fill="currentColor"/>
                    <rect x="2" y="34" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="7" y="39" width="10" height="10" fill="currentColor"/>
                    <rect x="34" y="34" width="4" height="4" fill="currentColor"/>
                    <rect x="40" y="34" width="4" height="4" fill="currentColor"/>
                    <rect x="46" y="34" width="4" height="4" fill="currentColor"/>
                    <rect x="34" y="40" width="4" height="4" fill="currentColor"/>
                    <rect x="46" y="40" width="4" height="4" fill="currentColor"/>
                    <rect x="34" y="46" width="4" height="4" fill="currentColor"/>
                    <rect x="40" y="46" width="4" height="4" fill="currentColor"/>
                    <rect x="46" y="46" width="4" height="4" fill="currentColor"/>
                  </svg>
                  <span>QR Code gerado após confirmar</span>
                </div>
              </div>
            )}

            {/* Resumo antes de confirmar */}
            <div className="checkout-order-line">
              <span>Arthur · Acesso mensal</span>
              <strong>R$ 497,00</strong>
            </div>

            {/* TODO: No submit handler, usar stripe.confirmCardPayment() ou stripe.confirmPixPayment() */}
            <button type="submit" className="checkout-submit">
              {method === 'pix' ? 'Gerar QR Code PIX' : 'Ativar Arthur agora'}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p className="checkout-legal">
              Ao confirmar você concorda com os{' '}
              <a href="#">Termos de Uso</a> e{' '}
              <a href="#">Política de Privacidade</a>.
              Assinatura recorrente mensal. Cancele a qualquer momento.
            </p>

          </form>

          <div className="checkout-trust">
            <span>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M6 0L0 2.3v4.35C0 9.9 2.6 12.7 6 13.7c3.4-1 6-3.8 6-7.05V2.3L6 0z" fill="currentColor" opacity=".2"/>
                <path d="M3.5 7l1.8 1.8L8.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Pagamento processado pelo Stripe
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1"/>
                <path d="M4 4V3a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1"/>
              </svg>
              SSL 256-bit
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                <path d="M7 4v3.5l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              Cancele quando quiser
            </span>
          </div>

        </section>

      </main>
    </div>
  )
}
