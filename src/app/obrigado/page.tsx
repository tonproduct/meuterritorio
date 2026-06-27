export default function ObrigadoPage() {
  return (
    <div className="obrigado-root">

      {/* ── NAV MINIMAL ── */}
      <header className="checkout-nav">
        <a href="/" className="checkout-nav__back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar ao início
        </a>
        <img src="/logo.png" alt="Meu Território" className="checkout-nav__logo" />
        <span />
      </header>

      {/* ── CONTEÚDO CENTRAL ── */}
      <main className="obrigado-main">

        {/* Ícone de confirmação */}
        <div className="obrigado-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="currentColor" strokeOpacity=".25" strokeWidth="1.5"/>
            <path d="M9 16.5l4.5 4.5 9-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Headline */}
        <p className="obrigado-eyebrow">Acesso liberado</p>
        <h1 className="obrigado-headline">
          Sua conversa com<br />
          <strong>Arthur começa agora.</strong>
        </h1>

        <p className="obrigado-body">
          Clique no botão abaixo para iniciar sua primeira conversa<br />
          com o Arthur diretamente pelo WhatsApp.
        </p>

        {/* CTA principal */}
        <a
          href="https://wa.me/5551991945384"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary obrigado-cta"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1C4.6 1 1 4.6 1 9c0 1.5.4 2.9 1.1 4.1L1 17l3.9-1.1A8 8 0 109 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M6.5 6.8c.2.5.5 1 .9 1.4.5.5 1 .8 1.5.9l.5-.5c.2-.2.4-.2.6-.1l1.4.7c.2.1.3.3.2.5-.1.9-.9 1.6-1.8 1.5a6 6 0 01-5.1-5.1c-.1-.9.6-1.7 1.5-1.8.2 0 .4.1.5.2l.7 1.4c.1.2 0 .4-.1.6l-.8.3z" fill="currentColor"/>
          </svg>
          Conversar com o Arthur agora
        </a>

        <p className="obrigado-note">
          Abre diretamente no WhatsApp
        </p>

      </main>

    </div>
  )
}
