'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function FormContato() {
  const router = useRouter()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    cargo: '',
    whatsapp: '',
    email: '',
    mensagem: '',
  })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '69684122-2479-43ff-b34d-0b8369a782da',
          subject: `Novo contato: ${form.nome}`,
          ...form,
        }),
      })

      const data = await res.json()
      if (!data.success) throw new Error()
      router.push('/obrigado')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="ativacao-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="f-nome">Nome completo *</label>
        <input id="f-nome" type="text" placeholder="Seu nome completo" value={form.nome} onChange={set('nome')} required />
      </div>
      <div className="form-field">
        <label htmlFor="f-empresa">Empresa</label>
        <input id="f-empresa" type="text" placeholder="Nome da empresa" value={form.empresa} onChange={set('empresa')} />
      </div>
      <div className="form-field">
        <label htmlFor="f-cargo">Cargo</label>
        <input id="f-cargo" type="text" placeholder="CEO, Fundador, Diretor..." value={form.cargo} onChange={set('cargo')} />
      </div>
      <div className="form-field">
        <label htmlFor="f-whatsapp">WhatsApp *</label>
        <input id="f-whatsapp" type="tel" placeholder="+55 11 99999-9999" value={form.whatsapp} onChange={set('whatsapp')} required />
      </div>
      <div className="form-field">
        <label htmlFor="f-email">E-mail *</label>
        <input id="f-email" type="email" placeholder="seu@email.com" value={form.email} onChange={set('email')} required />
      </div>
      <div className="form-field">
        <label htmlFor="f-mensagem">O que você está enfrentando agora?</label>
        <textarea
          id="f-mensagem"
          rows={4}
          placeholder="Descreva brevemente o momento do seu negócio..."
          value={form.mensagem}
          onChange={set('mensagem')}
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ width: '100%', textAlign: 'center' }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : 'Quero conversar com o Arthur'}
      </button>

      {status === 'error' && (
        <p className="form-note" style={{ color: '#f87171' }}>
          Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
        </p>
      )}

      <p className="form-note">Campos marcados com * são obrigatórios</p>
    </form>
  )
}
