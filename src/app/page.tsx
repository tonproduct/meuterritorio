import SectionIndicator from './components/SectionIndicator'
import Nav from './components/Nav'
import HeroPhone from './components/HeroPhone'
import ScrollAnimations from './components/ScrollAnimations'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import FaqAccordion from './components/FaqAccordion'
import FormContato from './components/FormContato'

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <SectionIndicator />
      <Nav />

      {/* ── BLOCO 1 — HERO ── */}
      <section id="hero">
        <div className="hero-bg-layer" aria-hidden="true">
          <div className="hero-glow hero-glow--accent" />
          <div className="hero-glow hero-glow--blue" />
          <div className="hero-dot-grid" />
        </div>

        <div className="container hero-layout">
          <div className="hero-copy">
            <img src="/logo.png" alt="Meu Território" className="hero-logo" />

            <h1 className="hero-headline">
              <span style={{ display: 'block' }}>Entre a decisão que você</span>
              <span style={{ display: 'block' }}>vai tomar e a melhor decisão</span>
              <span style={{ display: 'block' }}>possível, <strong>existe Arthur.</strong></span>
            </h1>

            <p className="hero-subheadline">
              Arthur é um advisor cognitivo estratégico criado para empresários,
              CEOs e C-Levels que precisam sustentar clareza, profundidade e
              qualidade de decisão em ambientes de alta complexidade.
            </p>

            <div className="btn-group">
              <a href="#ativacao" className="btn-primary">
                Quero conversar com o Arthur
              </a>
              <a href="#arthur" className="btn-ghost">
                Conhecer o Arthur
              </a>
            </div>

            <p className="hero-availability">
              <span className="avail-dot" />
              Disponível via WhatsApp · Sem instalação · Ativação imediata
            </p>
          </div>

          <div className="hero-visual">
            <div className="hero-orb" aria-hidden="true" />
            <HeroPhone />
          </div>
        </div>
      </section>

      {/* ── BLOCO 2 — O PROBLEMA INVISÍVEL ── */}
      <section id="problema">
        <div className="container--narrow">
          <h2 className="section-title">
            Existe um ponto no crescimento<br />
            em que o excesso de decisões<br />
            <strong>começa a reduzir a clareza.</strong>
          </h2>

          <p className="section-tese">
            Não é falta de esforço. É falta de{' '}
            <strong>estrutura cognitiva para o novo nível.</strong>
          </p>

          <div className="section-body">
            <p>Você continua executando. Continua conduzindo. Continua resolvendo.</p>
            <p>Mas sempre dentro do mesmo loop.</p>
          </div>

          <div className="problema-symptoms">
            {[
              'Mesmo campo mental',
              'Mesmo padrão de leitura',
              'Mesmo repertório',
              'Mesmo tipo de decisão',
            ].map((item) => (
              <div className="problema-symptom" key={item}>
                <svg className="problema-symptom__arrow" width="28" height="10" viewBox="0 0 28 10" fill="none">
                  <path d="M0 5h26M22 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="problema-symptom__text">{item}</span>
              </div>
            ))}
          </div>

          <div className="problema-statement">
            <p className="problema-statement__primary">Você trava. Sem perceber, sem entender por quê.</p>
            <p className="problema-statement__secondary">O negócio cresceu. A exigência cresceu. O modelo mental ficou para trás.</p>
          </div>
        </div>
      </section>

      {/* ── BLOCO 4 — POSICIONAMENTO ── */}
      <section id="arthur">
        <div className="container--narrow">
          <h2 className="section-title">
            Arthur não foi criado para responder.<br />
            Foi criado para{' '}
            <strong>
              ampliar<br />a qualidade da decisão.
            </strong>
          </h2>

          <p className="section-tese">
            Arthur é um <strong>advisor cognitivo estratégico</strong> que atua entre decisões,
            conflitos, pressão, expansão e momentos críticos do negócio.
          </p>

          <div className="section-body">
            <p>Ele não substitui o líder. Ele confronta, organiza e conduz o pensamento enquanto o jogo acontece.</p>
          </div>

          <div className="narrative-cards">
            {[
              {
                label: 'Quando a decisão travar',
                body: 'Muitos líderes entram no mesmo loop de análise sem avançar. Arthur organiza as variáveis, identifica o ponto de tensão real e apresenta perspectivas que o padrão mental do momento não consegue ver.',
              },
              {
                label: 'Quando o padrão se repetir',
                body: 'A mesma decisão aparece com nomes diferentes. Arthur nomeia o padrão, confronta a distorção e evita que o líder continue decidindo dentro do mesmo campo de sempre.',
              },
              {
                label: 'Quando a complexidade supera a clareza',
                body: 'Crescimento exige um nível de estrutura cognitiva que o ritmo da operação não oferece. Arthur sustenta clareza sob pressão — não para decidir por você, mas para que a decisão aconteça com profundidade.',
              },
            ].map((card) => (
              <div className="narrative-card" key={card.label}>
                <p className="narrative-card__label">{card.label}</p>
                <p className="narrative-card__body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOCO 5 — COMO FUNCIONA ── */}
      <section id="como-funciona">
        <div className="container">
          <h2 className="section-title">
            Uma presença cognitiva<br />
            <strong>dentro da rotina executiva.</strong>
          </h2>

          <div className="timeline">
            <div className="timeline-track" aria-hidden="true" />
            {[
              {
                n: '1',
                title: 'O líder entra em diálogo',
                desc: 'Uma situação, decisão pendente, conflito ou pressão específica',
              },
              {
                n: '2',
                title: 'Arthur organiza o cenário',
                desc: 'Estrutura o contexto, identifica variáveis e remove ruído',
              },
              {
                n: '3',
                title: 'Arthur confronta distorções',
                desc: 'Nomeia pontos cegos, padrões repetitivos e vieses de decisão',
              },
              {
                n: '4',
                title: 'Arthur estrutura caminhos',
                desc: 'Apresenta perspectivas estratégicas com clareza e profundidade',
              },
              {
                n: '5',
                title: 'Arthur acompanha decisões',
                desc: 'Mantém memória contextual e evolui junto com o negócio',
              },
            ].map((step) => (
              <div className="timeline-step" key={step.n}>
                <div className="step-num">{step.n}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BLOCO 6 — FEATURES PREMIUM ── */}
      <section id="features">
        <div className="container">
          <h2 className="section-title">
            O Arthur não espera ser acionado.<br />
            <strong>Ele acompanha o jogo.</strong>
          </h2>

          <div className="features-grid">
            {[
              {
                tag: 'Semanal',
                title: 'Semana com clareza',
                desc: 'Resumo de decisões e padrões do período, sem precisar pedir.',
              },
              {
                tag: 'Tempo Real',
                title: 'Arthur avisa antes do problema',
                desc: 'Alertas baseados em incoerência, risco ou padrão repetitivo.',
              },
              {
                tag: 'Raciocínio',
                title: 'Você pensa junto, não sozinho',
                desc: 'Modo guiado para decisões complexas com confronto de variáveis.',
              },
              {
                tag: 'Painel',
                title: 'O que importa agora, organizado',
                desc: 'Prioridades, gargalos e decisões em aberto por relevância.',
              },
              {
                tag: 'Análise',
                title: 'Dados lidos com profundidade',
                desc: 'Planilhas e relatórios com foco em implicações decisórias.',
              },
              {
                tag: 'Memória',
                title: 'Arthur lembra suas decisões',
                desc: 'Calibração contínua com base em padrões e contexto acumulado.',
              },
            ].map((feat) => (
              <div className="feat-card" key={feat.title}>
                <span className="feat-tag">{feat.tag}</span>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOCO 7 — PARA QUEM É ── */}
      <section id="para-quem">
        <div className="para-quem-parallax" aria-hidden="true" />
        <div className="container--narrow para-quem-content">
          <h2 className="section-title">
            O Arthur foi criado<br />
            <strong>para quem opera sob pressão.</strong>
          </h2>

          <div className="profiles-grid">
            {['CEOs', 'C-Levels', 'Empresários', 'Founders', 'Líderes de crescimento', 'Executivos sob pressão decisória'].map(
              (p) => (
                <span className="profile-chip" key={p}>{p}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── BLOCO 8 — AUTORIDADE ── */}
      <section id="autoridade">
        <div className="container">
          <h2 className="section-title">
            Construído dentro do<br />
            <strong>ecossistema Meu Território.</strong>
          </h2>

          <div className="authority-box">
            <div className="authority-avatar">
              <img
                src="/ig/egidio1.png"
                alt="Egidio Dias"
              />
            </div>
            <div className="authority-text">
              <h3>Egidio Dias</h3>
              <p className="role">Fundador · Meu Território</p>
              <p>
                Arthur nasce da experiência de mentorias, sparrings executivos e
                ambientes reais de decisão conduzidos junto a empresários, CEOs
                e líderes de crescimento.
              </p>
              <p>
                Não foi criado para o mercado de massa.<br />
                Foi criado para ambientes de alta exigência.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROVA SOCIAL ── */}
      <section id="prova-social">
        <div className="container">
          <h2 className="section-title">
            Líderes que pensam<br />
            <strong>com o Arthur.</strong>
          </h2>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── ATIVAÇÃO — FORMULÁRIO ── */}
      <section id="ativacao">
        <div className="container--narrow">
          <p className="ativacao-form-title">Fale com o Arthur</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
            Preencha o formulário<br />
            <strong>e inicie sua conversa.</strong>
          </h2>
          <p className="section-body" style={{ marginBottom: 40 }}>
            Após o envio, entraremos em contato para liberar seu acesso ao Arthur via WhatsApp.
          </p>
          <FormContato />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <div className="container--narrow">
          <p className="faq-label">Perguntas frequentes</p>
          <h2 className="section-title">
            O que líderes perguntam<br />
            <strong>antes de ativar.</strong>
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ── BLOCO 9 — FECHAMENTO / ATIVAÇÃO ── */}
      <section id="fechamento">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ maxWidth: 680, margin: '0 auto 28px' }}>
            Você não precisa de mais informação.<br />
            Precisa aumentar<br />
            <strong>a qualidade da decisão.</strong>
          </h2>

          <div className="section-body" style={{ maxWidth: 540, margin: '0 auto 48px', fontSize: 15 }}>
            <p>
              Arthur não substitui sua inteligência. Ele amplia sua capacidade
              de leitura, organização e clareza em momentos onde pressão,
              velocidade e complexidade começam a reduzir profundidade.
            </p>
            <p>
              Porque no nível em que você opera, não é sobre decidir mais.<br />
              É sobre não continuar decidindo sozinho dentro do mesmo padrão de
              sempre.
            </p>
          </div>

          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <a href="#ativacao" className="btn-primary">
              Quero conversar com o Arthur
            </a>
            <a href="#arthur" className="btn-ghost">
              Entender o Arthur
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <p>
          Arthur · <span>Meu Território</span> · Ecossistema Executivo
        </p>
      </footer>
    </>
  )
}
