# Batameta — Manual da Marca

> Guia rápido para o time de design. Cobre paleta, tipografia, sombras, tom de voz e persona.
> Fontes da verdade no código: `styles/globals.css`, `tailwind.config.ts`.

---

## 1. Posicionamento

**Tagline oficial:** *"Foque em bater a meta, não em calcular."*

**Promessa:** O motorista de aplicativo faz o que ele sabe fazer (dirigir). A Batameta calcula tudo o resto — IPVA, seguro, financiamento, gasolina, manutenção — e ajusta a meta diária automaticamente, em tempo real.

**Diferencial central:** somos o único produto do mercado que mostra a **linha real de segurança** (quanto o motorista PRECISA faturar por dia pra não trabalhar no prejuízo). Os concorrentes mostram só faturamento bruto.

---

## 2. Persona

| Atributo | Detalhe |
|---|---|
| **Idade** | 18–35 anos (concentração 22–28) |
| **Gênero** | 90% masculino |
| **Renda mensal** | R$ 3.500 – R$ 6.500 (bruto rodando Uber/99) |
| **Educação** | Ensino médio completo / técnico em curso |
| **Smartphone** | Android (90%), iPhone básico (10%) |
| **Conexão** | 4G (rural ou periferia urbana), Wi-Fi em casa |
| **Tempo no app/dia** | 8–12h dirigindo + 30min revisando finanças |
| **Pagamento preferido** | Pix (60%), Cartão de crédito (40%) |
| **Frustração principal** | "No fim do mês não sobra nada e não sei por quê" |
| **Linguagem** | Direta, sem jargão, gosta de gírias regionais sutis |
| **Aspiração** | Quitar o carro, comprar casa, sair do app |

**Estado emocional:** desconfiado de "guru financeiro", cansado de planilha, cético com promessa milagrosa. Quer **prova rápida** (resultado em 7 dias) e **controle**, não terapia.

---

## 3. Paleta de Cores

Todas as cores vivem em CSS variables (`globals.css`). O Tailwind expõe via tokens semânticos (`primary`, `success`, etc).

### 3.1 Cor Primária — Azul Batameta

| Token | Hex | Uso |
|---|---|---|
| `primary` | **#0051FF** | CTAs principais, links, foco de input, ícones de ação |
| `primary-light` | #E8F0FF | Backgrounds de destaque, badges, hover states sutis |
| `primary-dark` | #003EB3 | Hover de botão primário, estados pressed |
| `primary-darker` | #002D85 | Active states, texto sobre fundos claros que precisam contraste extra |

**Por que azul?** Confiança + profissionalismo + neutro de gênero. Diferencia da Uber (preto) e 99 (amarelo).

> ⚠️ **Ambiente HML:** o `primary` vira **#DC2626** (vermelho) automaticamente via `html.env-hml`. É proposital — toda vez que o time vê vermelho, sabe que está em homologação. Não usar vermelho como cor de marca em prod.

### 3.2 Cores Semânticas

| Token | Hex | Light Variant | Quando usar |
|---|---|---|---|
| `success` | **#10B981** | #ECFDF5 | Meta batida, copilot "Aceita", confirmações de pagamento |
| `warning` | **#F59E0B** | #FFFBEB | Copilot "Avalia", alertas que pedem atenção sem urgência |
| `error` | **#EF4444** | #FEE2E2 | Copilot "Não compensa", erros de pagamento, prejuízo |
| `info` | **#0284C7** | #EFF6FF | Mensagens neutras, dicas, banners informativos |
| `success-premium` | #15803D | — | Variante mais escura de success (badges premium, status pago) |
| `error-premium` | #B91C1C | — | Variante mais escura de error (cancelamentos definitivos) |

**Regra de ouro do Copiloto (semáforo):**
- Verde = Aceita (corrida acima do break-even)
- Amarelo = Avalia (no break-even, decida pelo contexto)
- Vermelho = Não compensa (abaixo do break-even, perdeu dinheiro)

### 3.3 Neutros (escala de cinza)

| Token | Hex | Uso |
|---|---|---|
| `neutral-950` | #0F172A | Reserva pra dark mode (não usado em light) |
| `neutral-900` | #111827 | **Texto primário** (`text-primary`) |
| `neutral-800` | #1F2937 | Headings em ênfase |
| `neutral-700` | #374151 | Texto de corpo secundário |
| `neutral-600` | #4B5563 | Labels |
| `neutral-500` | #6B7280 | **Texto secundário** (`text-secondary`) |
| `neutral-400` | #9CA3AF | **Texto terciário** (`text-tertiary`), placeholders |
| `neutral-300` | #D1D5DB | Bordas ativas, separators de destaque |
| `neutral-200` | #E5E7EB | **Borda padrão** (`border`), divisores |
| `neutral-100` | #F3F4F6 | **Background terciário** (`bg-tertiary`), chips |
| `neutral-50` | #F9FAFB | **Background secundário** (`bg-secondary`), cards |

### 3.4 Backgrounds e Texto (tokens semânticos)

| Token | Hex | Uso |
|---|---|---|
| `bg-primary` | #FFFFFF | Fundo do app, modais, body principal |
| `bg-secondary` | #F9FAFB | Cards, seções alternadas, sidebars |
| `bg-tertiary` | #F3F4F6 | Hover states de cards, inputs desabilitados |
| `bg-card` | #F9FAFB | Específico para cards (mesmo que secondary, semântico) |
| `text-primary` | #111827 | Texto principal — headings e corpo |
| `text-secondary` | #6B7280 | Subtítulos, captions, suporte |
| `text-tertiary` | #9CA3AF | Helpers, contadores, microcopy |
| `border-color` | #E5E7EB | Borda padrão de inputs, cards, divisores |

---

## 4. Tipografia

### 4.1 Fonte primária — Inter

**Family:** `Inter` via Google Fonts (variável `--font-inter`).
**Fallbacks:** `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

**Pesos usados:**
- **400 Regular** → corpo de texto, captions
- **500 Medium** → labels, botões secundários, ênfase suave
- **600 Semibold** → CTAs, botões primários, headings de card
- **700 Bold** → Headings (h1, h2, h3)
- **800 Extrabold** → Hero / landing apenas (em raras ocasiões)

**Por que Inter?**
- Excelente legibilidade em telas pequenas (motorista lê no farol vermelho)
- Variável (1 arquivo, vários pesos) — performance no 4G
- Suporte completo ao português (acentos, ç)
- Open-source, sem custo de licença

### 4.2 Escala tipográfica (referência mobile-first)

| Estilo | Tamanho | Peso | Line-height | Uso |
|---|---|---|---|---|
| **Hero** | 32px / 2rem | 700 | 1.1 | Onboarding, landing hero |
| **H1** | 24px / 1.5rem | 700 | 1.2 | Títulos de tela |
| **H2** | 20px / 1.25rem | 700 | 1.3 | Seções dentro de tela |
| **H3** | 18px / 1.125rem | 600 | 1.3 | Cards e subseções |
| **Body** | 16px / 1rem | 400 | 1.5 | Texto principal |
| **Body-strong** | 16px / 1rem | 600 | 1.5 | Ênfase em corpo |
| **Caption** | 14px / 0.875rem | 400 | 1.4 | Subtítulos, descrições |
| **Microcopy** | 12px / 0.75rem | 500 | 1.3 | Helpers, contadores, badges |

### 4.3 Ícones — Material Symbols Outlined

**Family:** `Material Symbols Outlined` via Google Fonts (eixos variáveis FILL e wght).
**Display:** `block` (intencional — preferimos ícone vazio por 100ms a mostrar o nome cru "dashboard" enquanto carrega).

**Configuração padrão:**
```css
font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
```

**Tamanhos comuns:** 16px (inline), 20px (botões), 24px (default), 32px (cards), 48px (hero).

**Mobile (React Native):** usamos `@expo/vector-icons` com Ionicons como família principal — mantenha consistência semântica (mesmo conceito → mesmo ícone em web e mobile).

---

## 5. Sombras (Elevation)

5 níveis, sempre transparência sobre preto puro (rgba 0,0,0).

| Token | Valor CSS | Uso |
|---|---|---|
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.04)` | Cards inline, separadores sutis |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Cards padrão, inputs com foco |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | Cards destacados, dropdowns |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | Modais, sheets, floating elements |
| `shadow-xl` | `0 12px 32px rgba(0,0,0,0.15)` | Tooltips críticos, overlays máximos |

**Princípio:** quanto mais alto o elemento (z-index), mais sombra. Nunca usar sombra colorida.

---

## 6. Espaçamento e bordas

**Base de espaçamento:** múltiplos de 4px (Tailwind default — `p-1`=4px, `p-2`=8px, `p-3`=12px, `p-4`=16px...).

**Border radius:**
- `rounded` (4px) — chips, badges menores
- `rounded-lg` (8px) — botões, inputs, cards pequenos
- `rounded-xl` (12px) — cards principais
- `rounded-2xl` (16px) — modais, hero cards
- `rounded-full` — avatars, pills, indicadores circulares

---

## 7. Transições (Motion)

3 durações pra cobrir todos os casos. Sempre cubic-bezier(0.4, 0, 0.2, 1) — easing padrão "material-like".

| Token | Duração | Uso |
|---|---|---|
| `transition-fast` | 100ms | Hover, foco, microinterações |
| `transition-normal` | 150ms | Toggle, accordion, cards |
| `transition-smooth` | 200ms | Tema (light/dark), modais, page-level |

**Animações nomeadas em CSS:**
- `fade-in-up` (600ms) — entrada de cards na landing
- `scale-in` (400ms) — modais, popovers
- `slide-down` (400ms) — banners, notificações
- `check-pop` (500ms) — confirmação de meta batida
- `pulse-slow` / `pulse-fast` — chamadas de atenção
- `shimmer-slide` — loading skeletons

**Acessibilidade:** sempre respeitar `prefers-reduced-motion` (já configurado em `.landing-animate`).

---

## 8. Logo

**Arquivo:** `/Users/pmartinsdev/dev/batameta/batameta-web/public/logo.png`

**Variantes futuras desejáveis:**
- `logo.svg` (vetor — pendente)
- `logo-dark.svg` (sobre fundos escuros — pendente)
- `logo-mark.svg` (apenas o ícone — pendente)
- `logo-wordmark.svg` (só a wordmark — pendente)

**Espaço de respiro:** mínimo de 16px ao redor do logo em qualquer aplicação.

**Cores permitidas:**
- Logo principal sobre fundo branco (#FFFFFF)
- Logo branco (a desenhar) sobre fundo `primary` (#0051FF)
- **Não fazer:** logo sobre fundo amarelo/vermelho/colorido sem aprovação

---

## 9. Tom de Voz (Voice & Tone)

### 9.1 Princípios

1. **Direto** — sem rodeio, sem floreio. Motorista tem 30s lendo no farol.
2. **Concreto** — fala em R$, dias, km. Nunca em "potencial" ou "oportunidade".
3. **Empático sem paternalismo** — não somos professor, somos o "amigo que entende de finanças".
4. **Honesto** — se a meta dele tá errada, dizemos. "Você está trabalhando no prejuízo" é melhor que "atenção: revisar meta".
5. **Otimista, mas sem promessa milagrosa** — "Em 7 dias você descobre" ✅. "Ganhe 30% mais!" ❌.

### 9.2 Voz: somos / não somos

| Somos | Não somos |
|---|---|
| Direto | Seco |
| Honesto | Agressivo |
| Próximo | Íntimo demais |
| Confiante | Arrogante |
| Pragmático | Frio |
| Brasileiro (PT-BR informal) | Gírias datadas / regionalismos pesados |

### 9.3 Exemplos práticos (DO / DON'T)

#### Cenário: meta diária na home

✅ **DO:** "Sua Meta Hoje: R$ 287"
❌ **DON'T:** "Objetivo financeiro proposto para o dia: R$ 287"

#### Cenário: corrida ruim no copilot

✅ **DO:** "Não compensa. R$/km abaixo do seu mínimo."
❌ **DON'T:** "Esta corrida pode não ser ideal para o seu perfil."

#### Cenário: usuário no prejuízo

✅ **DO:** "Você pode estar trabalhando no prejuízo sem perceber."
❌ **DON'T:** "Atenção: identificamos uma possível ineficiência financeira."

#### Cenário: erro de pagamento

✅ **DO:** "Cartão recusado. Tenta outro ou usa Pix."
❌ **DON'T:** "Houve uma falha no processamento da sua transação. Por gentileza, verifique os dados."

#### Cenário: trial de 7 dias

✅ **DO:** "7 dias grátis. Sem cartão agora. Cancele quando quiser."
❌ **DON'T:** "Experimente nossa solução premium gratuitamente por uma semana, sem compromisso!"

### 9.4 Vocabulário canônico

| Sempre usar | Evitar |
|---|---|
| Meta | Objetivo financeiro |
| Faturar / Faturamento | Receita |
| Lucro | Margem líquida |
| Despesa | Custo operacional |
| Bater a meta | Atingir o objetivo |
| Linha de segurança | Threshold mínimo |
| Trabalhar no prejuízo | Operar abaixo do break-even |
| Aceita / Avalia / Não compensa | Recomendado / Atenção / Reprovado |
| Copiloto | Assistente de corrida |
| Sessão | Período de trabalho |
| Você / seu | Nós / nosso (quando falando do motorista) |

### 9.5 Emojis e gamificação

**Onde usar emoji:**
- ✅ Saudação na home: `Olá, João 👋`
- ✅ Conquistas/badges: `🎯 🔥 💎 💰 🏃 📈 ⭐ 🏆 👑 🤝 📢 🌟`
- ✅ Microcopy comemorativo: `Meta batida! 🎉`
- ❌ Em mensagens de erro
- ❌ Em CTAs principais
- ❌ Em descrições de produto

**Lista oficial de badges (mantenha consistência):**
- 🎯 Largada (1ª sessão)
- 🔥 Pique 7 (7 dias seguidos)
- 💎 Ferro 30 (30 dias)
- 🎯 Na Mosca (meta com precisão)
- 💰 Dia de Rei (R$500+ no dia)
- 🏃 200km (200km+ no dia)
- 📈 Bolso Cheio (R$3k+ lucro/mês)
- ⭐ Relógio (meta batida 20 dias)
- 🏆 Firme 3 (3 meses no app)
- 👑 Estrada 6 (6 meses no app)
- 🤝 Embaixador (1 indicação)
- 📢 Influente (3 indicações)
- 🌟 Líder (5+ indicações)

### 9.6 Formatação de valores

- **Moeda:** `R$ 287` (sem decimais quando inteiro), `R$ 287,50` (com decimais quando fracionário). Símbolo + espaço + valor. **Nunca** `R$287` colado.
- **Decimais:** vírgula, não ponto (`R$ 12,50`).
- **Milhar:** ponto (`R$ 1.500`).
- **Por dia / por mês:** sempre `/dia`, `/mês` (sem espaço antes da barra).
- **Datas:** `27/04/2026` (DD/MM/AAAA). Em copy mais coloquial: `27 de abril`.
- **Horas:** `14h30`, `08h00`. Evitar `14:30:00`.

---

## 10. Princípios de UI

1. **Mobile-first.** Layout é desenhado pra 360×640 antes de tudo. Web acompanha.
2. **Uma decisão por tela.** Cada tela tem **um** CTA principal. Secondary actions vão pra menu / overflow.
3. **Card-based.** Conteúdo agrupado em cards de `bg-card` com `shadow-sm`. Hierarquia visual via gap (não bordas).
4. **Cores com significado.** Verde = bom, Vermelho = ruim, Amarelo = atenção. Não usar verde decorativo aleatório.
5. **Loading com skeleton.** Nunca spinner solo — usa `shimmer` em layout idêntico ao final.
6. **Vazio com CTA.** Empty state sempre tem ação ("Adicione sua primeira corrida").
7. **Acessibilidade:** contraste mínimo AA (4.5:1), `prefers-reduced-motion` respeitado, `aria-label` em ícones.

---

## 11. Componentes-chave (referência rápida)

| Componente | Cor de fundo | Borda | Sombra | Uso |
|---|---|---|---|---|
| Botão Primário | `primary` | — | `shadow-sm` | CTA principal |
| Botão Secundário | `bg-primary` | `border` | — | Ação alternativa |
| Botão Ghost | transparente | — | — | Voltar, cancelar |
| Card | `bg-card` | — | `shadow-sm` | Conteúdo agrupado |
| Card destacado | `primary-light` | — | `shadow-md` | Promoção, próximo passo |
| Input | `bg-primary` | `border` | — | Padrão; foco vira `primary` + ring 3px |
| Badge sucesso | `success-light` | — | — | Status positivo |
| Badge atenção | `warning-light` | — | — | Aviso |
| Badge erro | `error-light` | — | — | Status negativo |

---

## 12. Roadmap de design (assets faltando)

Lista do que ainda falta produzir pra ter o sistema completo:

- [ ] Logo SVG (vetor)
- [ ] Logo branco para fundos coloridos
- [ ] Logo mark (só ícone, sem wordmark)
- [ ] Ilustrações de empty states (sem corridas, sem despesas, etc)
- [ ] Ilustrações dos passos do onboarding
- [ ] Ícones de badges em alta resolução (substituir emojis)
- [ ] Sistema de avatar (placeholder + variações)
- [ ] Tema escuro (dark mode) — variáveis prontas em `--color-neutral-950`
- [ ] Modelo de OG image (para compartilhamento social)

---

**Atualizado em:** 27 de abril de 2026
**Mantenedor:** time de produto Batameta
**Fonte primária:** `batameta-web/styles/globals.css`, `batameta-web/tailwind.config.ts`
