import type { Metadata } from 'next'
import '../index.css'
import I18nProvider from '../components/I18nProvider'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
