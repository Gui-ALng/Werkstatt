import React from 'react'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="mt-12 border-t border-zinc-100 bg-white/0 py-12 text-sm dark:border-zinc-800/40 dark:bg-zinc-900/0">
      <Container>
        <div className="flex items-center justify-between">
          <p className="text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} — Meu Portfólio</p>
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <a href="https://github.com" target="_blank" className="hover:underline">GitHub</a>
            <a href="https://linkedin.com" target="_blank" className="hover:underline">LinkedIn</a>
            <a href="mailto:seu@email.com" className="hover:underline">E‑mail</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
