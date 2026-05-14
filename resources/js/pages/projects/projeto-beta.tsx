import { Head, Link } from '@inertiajs/react'
import Layout from '@/components/Layout'

export default function ProjetoBeta() {
  return (
    <>
      <Head title="Projeto Beta — Meu Portfólio" />
      <Layout>
        <div className="min-h-screen bg-white p-6 dark:bg-zinc-900">
          <main className="mx-auto max-w-4xl">
            <Link href="/projects" className="text-sm text-zinc-600 hover:underline">← Voltar</Link>
            <header className="my-6">
              <h1 className="text-3xl font-semibold">Projeto Beta</h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">Design de produto e estratégia.</p>
            </header>

            <section>
              <div className="mb-6 w-full overflow-hidden rounded-lg bg-zinc-100">
                <img src="/images/portfolio/proj-2.jpg" alt="Projeto Beta" className="w-full object-cover" />
              </div>
              <div className="prose max-w-none text-zinc-700 dark:text-zinc-200">
                <p>Detalhes do Projeto Beta. Texto placeholder para descrever objetivos, processo e resultados.</p>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </>
  )
}
