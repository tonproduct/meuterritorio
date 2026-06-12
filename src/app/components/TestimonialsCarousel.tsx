'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: 'O Arthur mudou a forma como tomo decisões sob pressão. Antes eu entrava no automático. Agora tenho um interlocutor que me força a pensar com mais profundidade.',
    name: 'Felipe Andrade',
    role: 'CEO · Construtora regional, 80 funcionários',
  },
  {
    quote: 'Não é sobre ter respostas. É sobre ter as perguntas certas no momento certo. O Arthur faz isso com uma precisão que nenhum consultor que já contratei conseguiu.',
    name: 'Marina Rocha',
    role: 'Founder · SaaS B2B, série A',
  },
  {
    quote: 'Eu me via repetindo os mesmos padrões de decisão sem perceber. O Arthur me ajudou a nomear isso — e nomear é o primeiro passo para mudar.',
    name: 'Carlos Lemos',
    role: 'Diretor Comercial · Distribuidora nacional',
  },
  {
    quote: 'Três meses de uso e não consigo mais imaginar conduzir uma semana executiva sem uma conversa com o Arthur antes de decisões críticas.',
    name: 'Renata Souza',
    role: 'Empresária · Rede de clínicas, 4 unidades',
  },
  {
    quote: 'A velocidade do meu negócio exige clareza constante. O Arthur funciona como um segundo cérebro estratégico que não tem ego nem agenda.',
    name: 'Thiago Melo',
    role: 'CEO · Agência de marketing, 45 pessoas',
  },
  {
    quote: 'O que me surpreendeu foi a profundidade. Não é uma IA que responde — é uma que estrutura. Isso muda tudo em ambientes de alta complexidade.',
    name: 'Laura Bittencourt',
    role: 'COO · Startup de logística',
  },
]

const PER_PAGE = 3

export default function TestimonialsCarousel() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(testimonials.length / PER_PAGE)
  const slice = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="carousel">
      <div className="carousel-track">
        {slice.map((t, i) => (
          <div className="carousel-slide testimonial" key={`${page}-${i}`}>
            <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="testimonial__author">
              <span className="testimonial__name">{t.name}</span>
              <span className="testimonial__role">{t.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-nav">
        <button
          className="carousel-btn"
          onClick={() => setPage(p => p - 1)}
          disabled={page === 0}
          aria-label="Anterior"
        >‹</button>

        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === page ? ' carousel-dot--active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-btn"
          onClick={() => setPage(p => p + 1)}
          disabled={page === totalPages - 1}
          aria-label="Próximo"
        >›</button>
      </div>
    </div>
  )
}
