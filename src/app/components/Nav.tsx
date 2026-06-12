'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-logo">
        Arthur<span>.</span>
        <span className="nav-logo__sub">Advisor Cognitivo Estratégico</span>
      </div>
      <a href="#fechamento" className="nav-cta">
        Ativar Arthur
      </a>
    </nav>
  )
}
