export default function ObrigadoPage() {
  return (
    <div className="obrigado-root">

      {/* ── NAV MINIMAL ── */}
      <header className="checkout-nav" style={{ position: 'relative' }}>
        <a href="/" className="checkout-nav__back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar ao início
        </a>
        <img
          src="/logo.png"
          alt="Meu Território"
          className="checkout-nav__logo"
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
        />
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
          <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.78 6.72L2 30l7.5-1.75A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.45 11.45 0 01-5.83-1.59l-.42-.25-4.35 1.01 1.04-4.24-.28-.44A11.5 11.5 0 1116 27.5zm6.3-8.6c-.34-.17-2.02-1-2.33-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69a10.3 10.3 0 01-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.83 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.31-.23-.65-.4z"/>
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
