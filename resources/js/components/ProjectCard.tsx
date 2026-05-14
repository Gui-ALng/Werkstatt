import React from 'react'
import { Link } from '@inertiajs/react'

type Props = {
  title: string
  slug: string
  img: string
  desc?: string
}

export default function ProjectCard({ title, slug, img, desc }: Props) {
  return (
    <article className="group rounded-lg border border-zinc-100 overflow-hidden bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <Link href={`/projects/${slug}`} className="block">
        <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100">
          <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium">{title}</h3>
          {desc ? <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{desc}</p> : null}
        </div>
      </Link>
    </article>
  )
}
