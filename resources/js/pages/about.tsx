import { Head } from '@inertiajs/react'
import Layout from '@/components/Layout'

export default function About() {
  return (
    <>
      <Head title="Sobre — Meu Portfólio" />
      <Layout>
        <div className="min-h-screen p-6">
          <main className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="text-3xl font-semibold">Sobre mim</h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">Designer e desenvolvedor com foco em produtos digitais, pesquisa e direção criativa.</p>
            </header>

            <section className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-medium">O que eu faço</h2>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">Trabalho em projetos que exigem pensamento estratégico e execução técnica, desde protótipos de interface até aplicações completas. Minha prática mistura design de interação, pesquisa com usuários e front-end moderno.</p>

                <h3 className="mt-6 text-lg font-medium">Skills</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  <li className="rounded-full border px-3 py-1 text-xs">Design de Produto</li>
                  <li className="rounded-full border px-3 py-1 text-xs">React</li>
                  <li className="rounded-full border px-3 py-1 text-xs">Tailwind</li>
                  <li className="rounded-full border px-3 py-1 text-xs">Figma</li>
                </ul>
              </div>

              <aside className="rounded-lg border p-4 text-center">
                <img src="/images/portfolio/avatar.jpg" alt="Avatar" className="mx-auto mb-4 h-36 w-36 rounded-full object-cover" />
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Disponível para projetos freelance e colaborações.</p>
              </aside>
            </section>
          </main>
        </div>
      </Layout>
    </>
  )
}
