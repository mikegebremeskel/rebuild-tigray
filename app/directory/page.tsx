import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { DirectoryGrid } from '@/components/DirectoryGrid'
import { getOrgProfiles } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Directory',
  description:
    'A living index of diaspora organizations rebuilding Tigray — who they are, what they do, and how to find them.',
}

export default function DirectoryPage() {
  const orgs = getOrgProfiles()

  return (
    <>
      <Nav />

      <main className="px-6 pt-24 pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="pt-12 mb-16">
            <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-6">
              Directory
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-night dark:text-parchment mb-6 max-w-xl">
              The organizations
            </h1>
            <p className="font-sans text-base text-night dark:text-parchment max-w-lg leading-relaxed">
              Diaspora organizations doing the work of rebuilding — across health,
              advocacy, education, culture, and community. Each one in their own
              words.
            </p>
          </div>

          <DirectoryGrid orgs={orgs} />
        </div>
      </main>

      <Footer />
    </>
  )
}
