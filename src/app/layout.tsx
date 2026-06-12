import type { Metadata } from 'next'
import { Playfair_Display, Josefin_Sans, Outfit } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600', '700'],
  variable: '--font-label',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arthur — Advisor Cognitivo Estratégico',
  description: 'Entre a decisão que você vai tomar e a melhor decisão possível, existe Arthur.',
  openGraph: {
    title: 'Arthur — Advisor Cognitivo Estratégico',
    description: 'O advisor cognitivo para líderes que sabem que a qualidade da decisão é a última vantagem competitiva real.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${josefin.variable} ${outfit.variable}`}>
      <body className="bg-[#0C1826] text-[#F0EDE8] font-body antialiased">
        {children}
      </body>
    </html>
  )
}
