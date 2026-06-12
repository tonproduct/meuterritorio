'use client'

import { useRef, useCallback } from 'react'
import gsap from 'gsap'

export default function FormDrawer() {
  const drawerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const isOpen = useRef(false)

  const open = useCallback(() => {
    if (isOpen.current) return
    isOpen.current = true
    document.body.style.overflow = 'hidden'
    gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3, ease: 'power2.out' })
    gsap.to(drawerRef.current, { x: 0, duration: 0.45, ease: 'power3.out' })
  }, [])

  const close = useCallback(() => {
    if (!isOpen.current) return
    isOpen.current = false
    document.body.style.overflow = ''
    gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.25, ease: 'power2.in' })
    gsap.to(drawerRef.current, { x: '100%', duration: 0.35, ease: 'power3.in' })
  }, [])

  return (
    <>
      <button className="drawer-trigger" onClick={open}>
        Tem alguma dúvida antes de ativar?
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="drawer-overlay"
        onClick={close}
        style={{ opacity: 0, visibility: 'hidden' }}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="drawer"
        style={{ transform: 'translateX(100%)' }}
      >
        <button className="drawer-close" onClick={close} aria-label="Fechar">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <p className="ativacao-form-title">Tem alguma dúvida?</p>

        <form className="ativacao-form">
          <div className="form-field">
            <label htmlFor="d-nome">Nome</label>
            <input id="d-nome" type="text" placeholder="Seu nome" />
          </div>
          <div className="form-field">
            <label htmlFor="d-email">E-mail</label>
            <input id="d-email" type="email" placeholder="seu@email.com" />
          </div>
          <div className="form-field">
            <label htmlFor="d-duvida">Dúvida</label>
            <textarea
              id="d-duvida"
              rows={4}
              placeholder="O que você quer entender melhor antes de ativar?"
            />
          </div>
          <button type="submit" className="btn-ghost" style={{ width: '100%', textAlign: 'center' }}>
            Enviar dúvida
          </button>
          <p className="form-note">Respondemos em até 24h</p>
        </form>
      </div>
    </>
  )
}
