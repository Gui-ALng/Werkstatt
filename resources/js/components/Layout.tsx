import React from 'react'
import { Footer } from './Footer'
import { GridPattern } from './GridPattern'
import { Header } from './Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex w-full flex-col">
        <Header />
        <div className="relative flex flex-auto overflow-hidden pt-12">
          <div className="relative isolate flex w-full flex-col pt-6">
            <div className="absolute inset-0 -z-20 bg-white dark:bg-zinc-900" />
            <GridPattern
              className="pointer-events-none absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full opacity-80 [mask-image:radial-gradient(120%_80%_at_50%_10%,white_50%,transparent_100%)] fill-zinc-50 stroke-zinc-950/5 dark:fill-zinc-950 dark:stroke-white/10"
              yOffset={-96}
              interactive
            />
            <main className="relative z-10 w-full flex-auto">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
