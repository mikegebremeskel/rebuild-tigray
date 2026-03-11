import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Emblem } from '@/components/Emblem'

export const metadata: Metadata = {
  title: 'About',
  description:
    'What Rebuild Tigray is, what it is not, and why it was built.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main className="px-6 pt-24 pb-32">
        <div className="max-w-reading mx-auto">
          <div className="pt-12 mb-16">
            <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-6">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-night dark:text-parchment mb-10">
              What this is
            </h1>
          </div>

          {/* Body */}
          <div className="space-y-8 font-serif text-reading text-night dark:text-parchment/90 leading-loose">
            <p>
              Rebuild Tigray is a platform of record for the Tigrayan diaspora.
              It is not a news outlet, a political organization, or a fundraising
              vehicle. It is a lens — pointed at the people already doing the
              work, so that others might find them, learn from them, join them,
              or simply feel less alone in caring.
            </p>

            <p>
              The diaspora is doing this work in fragments. Dozens of
              organizations across continents, each doing important, often
              invisible, work. This site exists to make that work visible, and
              to create the common ground from which more collaboration becomes
              possible.
            </p>

            <p>
              We believe that visibility creates empathy. That empathy creates
              common ground. And that common ground creates collaboration. This
              is not a perhaps. This is the bet.
            </p>

            <div className="border-l-2 border-gold pl-6">
              <p className="font-serif text-xl leading-relaxed text-night dark:text-parchment">
                A directory of the organizations rebuilding Tigray, in their own
                words. A space for their stories, interviews, and perspectives on
                what matters. A gallery of what we are fighting for.
              </p>
            </div>

            <p className="font-sans text-sm text-night dark:text-parchment">
              {/* TODO: Add founder bio and photo here */}
              [Founder bio and photo pending]
            </p>
          </div>

          {/* Pillars */}
          <div className="mt-20 pt-16 border-t border-sand dark:border-white/10 grid md:grid-cols-3 gap-10">
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-3">
                Directory
              </p>
              <p className="font-sans text-sm text-night dark:text-parchment leading-relaxed">
                Organizations across the diaspora, indexed and searchable — so
                anyone looking for a home in this work can find one.
              </p>
              <Link
                href="/directory"
                className="font-sans text-xs text-gold hover:text-soft-gold transition-colors mt-3 inline-block"
              >
                Explore →
              </Link>
            </div>
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-3">
                Blog
              </p>
              <p className="font-sans text-sm text-night dark:text-parchment leading-relaxed">
                Interviews and long-form writing, in the subjects' own words.
                No editorializing. The work speaks for itself.
              </p>
              <Link
                href="/blog"
                className="font-sans text-xs text-gold hover:text-soft-gold transition-colors mt-3 inline-block"
              >
                Read →
              </Link>
            </div>
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-3">
                Gallery
              </p>
              <p className="font-sans text-sm text-night dark:text-parchment leading-relaxed">
                The land, the people, and the future. What we are building
                toward, in images.
              </p>
              <Link
                href="/gallery"
                className="font-sans text-xs text-gold hover:text-soft-gold transition-colors mt-3 inline-block"
              >
                View →
              </Link>
            </div>
          </div>

          {/* Emblem seal */}
          <div className="mt-24 flex flex-col items-center gap-4 text-center text-night dark:text-parchment">
            <Emblem size={120} />
            <p className="font-sans text-xs text-night dark:text-parchment mt-2">
              ዘይንድይቦ ጎቦ ዘይንሰግሮ ሩባ
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
