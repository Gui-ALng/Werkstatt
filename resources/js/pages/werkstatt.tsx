import { Head, Link} from '@inertiajs/react'
import Layout from '@/components/Layout'
import ProjectCard from '@/components/ProjectCard'

export default function Werkstatt() {

  const projects = [
    { title: 'Projeto Alpha', slug: 'projeto-alpha', img: '/images/portfolio/proj-1.jpg', desc: 'Interface, front-end e branding.' },
    { title: 'Projeto Beta', slug: 'projeto-beta', img: '/images/portfolio/proj-2.jpg', desc: 'Design de produto e estratégia.' },
    { title: 'Projeto Gamma', slug: 'projeto-gamma', img: '/images/portfolio/proj-3.jpg', desc: 'Experiências imersivas.' },
  ]

  return (
    <>
      <Head title="Werkstatt — Meu Portfólio" />
      <Layout>
        <div className="flex min-h-screen flex-col items-center py-12 px-6 text-zinc-900 lg:py-20 lg:px-8 dark:text-zinc-100">
          <main className="w-full max-w-6xl">
            <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <h1 className="mb-4 text-4xl font-semibold leading-tight">Werkstatt — Criações digitais e design estratégico</h1>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">Sou um criador que combina design, produto e desenvolvimento para construir experiências digitais memoráveis. Trabalho com UI, pesquisa e direção criativa.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/projects" className="inline-flex items-center rounded bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-black">Projetos</Link>
                  <Link href="/about" className="inline-flex items-center rounded border border-zinc-200 px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200">Sobre</Link>
                  <a href="https://linkedin.com" target="_blank" className="inline-flex items-center rounded px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300">LinkedIn</a>
                </div>
              </div>

              <div className="order-1 relative mb-4 lg:order-2 lg:mb-0">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <img src="/images/portfolio/hero.jpg" alt="Hero" className="h-full w-full object-cover" />
                </div>
              </div>
            </section>

            <section className="mt-14">
              <h2 className="mb-6 text-xl font-medium">Projetos em destaque</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                  <ProjectCard key={p.slug} title={p.title} slug={p.slug} img={p.img} desc={p.desc} />
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="mb-6 text-xl font-medium">Galeria</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <img src="/images/portfolio/photo-1.jpg" alt="foto" className="h-48 w-full rounded object-cover" />
                <img src="/images/portfolio/photo-2.jpg" alt="foto" className="h-48 w-full rounded object-cover" />
                <img src="/images/portfolio/photo-3.jpg" alt="foto" className="h-48 w-full rounded object-cover" />
              </div>
            </section>

            <section className="mt-14 mb-20 flex flex-col items-start gap-4 rounded-lg border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-medium">Vamos conversar?</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Sinta-se livre para me encontrar nas redes ou enviar um e‑mail.</p>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" className="inline-flex items-center rounded border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-700">GitHub</a>
                <a href="mailto:seu@email.com" className="inline-flex items-center rounded bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black">Enviar e‑mail</a>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </>
  )
}
