'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ScrollAnimations() {
  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── PRÉ-SET — esconde elementos antes do primeiro paint ──
    // Roda fora do matchMedia para executar em useLayoutEffect (antes do browser pintar)
    if (!prefersReduced) {
      gsap.set('.section-title:not(#fechamento .section-title)', { autoAlpha: 0, y: 16 })
      gsap.set('.section-tese', { autoAlpha: 0, y: 12 })
      gsap.set('.section-body:not(#fechamento .section-body)', { autoAlpha: 0, y: 10 })
      gsap.set('.problema-symptom', { autoAlpha: 0, x: -20 })
      gsap.set('.problema-statement', { autoAlpha: 0, y: 14 })
      gsap.set('.narrative-card', { autoAlpha: 0, y: 20 })
      gsap.set('.feat-card', { autoAlpha: 0, y: 24, scale: 0.96 })
      gsap.set('.profile-chip', { autoAlpha: 0, scale: 0.88, y: 10 })
      gsap.set('.authority-box', { autoAlpha: 0, y: 18 })
      gsap.set('.authority-pullquote', { autoAlpha: 0, y: 12 })
      gsap.set('.offer-price__amount', { autoAlpha: 0 })
      gsap.set('#fechamento .section-title', { autoAlpha: 0, scale: 0.97 })
      gsap.set('.timeline-step', { autoAlpha: 0.35 })
    }

    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {

      // ── 1. SECTION TITLES ──
      gsap.utils.toArray<HTMLElement>('.section-title').forEach((el) => {
        if (el.closest('#fechamento')) return
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: 'top 87%', toggleActions: 'play none none none' },
          autoAlpha: 1, y: 0, filter: 'blur(0px)',
          duration: 0.95, ease: 'power2.out',
        })
      })

      // ── 2. SECTION TESE ──
      gsap.utils.toArray<HTMLElement>('.section-tese').forEach((el) => {
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          autoAlpha: 1, y: 0,
          duration: 0.75, ease: 'power2.out',
        })
      })

      // ── 3. SECTION BODY ──
      gsap.utils.toArray<HTMLElement>('.section-body').forEach((el) => {
        if (el.closest('#fechamento')) return
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: 'top 89%', toggleActions: 'play none none none' },
          autoAlpha: 1, y: 0,
          duration: 0.65, ease: 'power2.out',
        })
      })

      // ── 4. PROBLEMA SYMPTOMS ──
      const symptomsEl = document.querySelector('.problema-symptoms')
      if (symptomsEl) {
        gsap.to(gsap.utils.toArray<HTMLElement>('.problema-symptom'), {
          scrollTrigger: { trigger: symptomsEl, start: 'top 82%', toggleActions: 'play none none none' },
          autoAlpha: 1, x: 0, filter: 'blur(0px)',
          duration: 0.6, ease: 'power2.out', stagger: 0.15,
        })
      }

      // ── 5. PROBLEMA STATEMENT ──
      const statement = document.querySelector('.problema-statement')
      if (statement) {
        gsap.to(statement, {
          scrollTrigger: { trigger: statement, start: 'top 86%', toggleActions: 'play none none none' },
          autoAlpha: 1, y: 0,
          duration: 0.7, ease: 'power2.out',
        })
      }

      // ── 6. NARRATIVE CARDS ──
      const narrativeCards = gsap.utils.toArray<HTMLElement>('.narrative-card')
      if (narrativeCards.length) {
        gsap.to(narrativeCards, {
          scrollTrigger: { trigger: narrativeCards[0], start: 'top 84%', toggleActions: 'play none none none' },
          autoAlpha: 1, y: 0,
          duration: 0.65, ease: 'power2.out', stagger: 0.12,
        })
      }

      // ── 7. TIMELINE ──
      const timelineEl = document.querySelector('.timeline')
      if (timelineEl) {
        const track = timelineEl.querySelector<HTMLElement>('.timeline-track')
        if (track) {
          gsap.from(track, {
            scrollTrigger: { trigger: timelineEl, start: 'top 78%', end: 'bottom 30%', scrub: 1 },
            scaleY: 0, transformOrigin: 'top center', ease: 'none',
          })
        }

        const steps = gsap.utils.toArray<HTMLElement>('.timeline-step')
        steps.forEach((step) => {
          const num = step.querySelector<HTMLElement>('.step-num')
          const tl = gsap.timeline({
            scrollTrigger: { trigger: step, start: 'top 64%', toggleActions: 'play none none none' },
          })
          tl.to(step, { autoAlpha: 1, duration: 0.55, ease: 'power2.out' })
          if (num) {
            tl.to(num, { borderColor: 'rgba(200,169,110,0.55)', color: '#C8A96E', duration: 0.4, ease: 'power2.out' }, '<0.1')
          }
        })
      }

      // ── 8. FEATURES GRID ──
      const featGrid = document.querySelector('.features-grid')
      if (featGrid) {
        const cards = gsap.utils.toArray<HTMLElement>('.feat-card')
        const COLS = 3
        const rows: HTMLElement[][] = []
        for (let i = 0; i < cards.length; i += COLS) rows.push(cards.slice(i, i + COLS))

        rows.forEach((row, rowIndex) => {
          gsap.to(row, {
            scrollTrigger: { trigger: row[0], start: 'top 84%', toggleActions: 'play none none none' },
            autoAlpha: 1, y: 0, scale: 1,
            duration: 0.7, ease: 'power2.out', stagger: 0.1, delay: rowIndex * 0.12,
            clearProps: 'transform',
          })
        })
      }

      // ── 9. PARA QUEM — parallax na imagem de fundo ──
      const paraQuemBg = document.querySelector<HTMLElement>('.para-quem-parallax')
      if (paraQuemBg) {
        gsap.to(paraQuemBg, {
          scrollTrigger: {
            trigger: '#para-quem',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
          yPercent: 18,
          ease: 'none',
        })
      }

      // ── 10. PROFILE CHIPS ──
      const chips = gsap.utils.toArray<HTMLElement>('.profile-chip')
      if (chips.length) {
        gsap.to(chips, {
          scrollTrigger: { trigger: chips[0], start: 'top 86%', toggleActions: 'play none none none' },
          autoAlpha: 1, scale: 1, y: 0,
          duration: 0.5, ease: 'back.out(1.4)', stagger: 0.07,
          clearProps: 'transform',
        })
      }

      // ── 11. AUTHORITY BOX ──
      const authBox = document.querySelector('.authority-box')
      if (authBox) {
        gsap.to(authBox, {
          scrollTrigger: { trigger: authBox, start: 'top 82%', toggleActions: 'play none none none' },
          autoAlpha: 1, y: 0,
          duration: 1.0, ease: 'power2.out',
        })
      }

      // ── 12. AUTHORITY PULLQUOTE ──
      const pullquote = document.querySelector('.authority-pullquote')
      if (pullquote) {
        gsap.to(pullquote, {
          scrollTrigger: { trigger: pullquote, start: 'top 86%', toggleActions: 'play none none none' },
          autoAlpha: 1, y: 0,
          duration: 0.75, ease: 'power2.out',
        })
      }

      // ── 12. ATIVAÇÃO — esquerda entra da esq, form entra da dir ──
      const ativacaoLayout = document.querySelector('.ativacao-layout')
      if (ativacaoLayout) {
        const [left, right] = ativacaoLayout.children as unknown as HTMLElement[]
        gsap.set(left, { autoAlpha: 0, x: -40 })
        gsap.set(right, { autoAlpha: 0, x: 60 })
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ativacaoLayout, start: 'top 78%', toggleActions: 'play none none none' },
        })
        tl.to(left, { autoAlpha: 1, x: 0, duration: 0.75, ease: 'power2.out' })
          .to(right, { autoAlpha: 1, x: 0, duration: 0.75, ease: 'power2.out' }, '<0.15')
      }

      // ── 14. PREÇO ──
      const priceAmount = document.querySelector('.offer-price__amount')
      if (priceAmount) {
        gsap.to(priceAmount, {
          scrollTrigger: { trigger: priceAmount, start: 'top 85%', toggleActions: 'play none none none' },
          autoAlpha: 1,
          duration: 1.1, ease: 'power1.out',
        })
      }

      // ── 15. FECHAMENTO ──
      const fechTitle = document.querySelector('#fechamento .section-title')
      if (fechTitle) {
        gsap.to(fechTitle, {
          scrollTrigger: { trigger: '#fechamento', start: 'top 80%', toggleActions: 'play none none none' },
          autoAlpha: 1, scale: 1,
          duration: 0.85, ease: 'power2.out', clearProps: 'transform',
        })
      }

    })
  })

  return null
}
