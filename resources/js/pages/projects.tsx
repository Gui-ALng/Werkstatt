import { Head } from '@inertiajs/react'
import Layout from '@/components/Layout'
import ProjectCard from '@/components/ProjectCard'

const sample = [
  { title: 'Projeto Alpha', slug: 'projeto-alpha', img: '/images/portfolio/proj-1.jpg', desc: 'Interface e branding' },
  { title: 'Projeto Beta', slug: 'projeto-beta', img: '/images/portfolio/proj-2.jpg', desc: 'Produto e pesquisa' },
  { title: 'Projeto Gamma', slug: 'projeto-gamma', img: '/images/portfolio/proj-3.jpg', desc: 'Prototipagem imersiva' },
]

export default function Projects() {
  return (
    <>
      <Head title="Projetos — Meu Portfólio" />
      <Layout>
        <div className="min-h-screen p-6">
          <main className="mx-auto max-w-6xl">
            <header className="mb-8">
              <h1 className="text-3xl font-semibold">Projetos</h1>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">Uma seleção de trabalhos recentes. Clique para ver detalhes.</p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sample.map((p) => (
                <ProjectCard key={p.slug} title={p.title} slug={p.slug} img={p.img} desc={p.desc} />
              ))}
            </div>
          </main>
        </div>
      </Layout>
    </>
  )
}
