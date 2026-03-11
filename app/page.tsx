import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="px-6 pt-28 pb-24 md:pt-40 md:pb-36 max-w-5xl mx-auto">
          <p className="font-sans text-sm font-medium tracking-widest text-gold uppercase mb-8">
            rebuild-tigray.com
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-night dark:text-parchment max-w-3xl mb-8">
            The work is already happening.
          </h1>
          <p className="font-sans text-lg text-night dark:text-parchment max-w-xl leading-relaxed mb-12">
            Rebuild Tigray is a platform of record for the diaspora organizations and
            individuals doing the quiet, tireless work of rebuilding — in their own
            words, without agenda.
          </p>
          <Link
            href="/manifesto"
            className="inline-flex items-center gap-2 bg-gold text-night font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-soft-gold transition-colors"
          >
            Read the manifesto
            <span aria-hidden>→</span>
          </Link>
        </section>

        {/* Divider */}
        <div className="border-t border-sand dark:border-white/10 max-w-5xl mx-auto px-6" />

        {/* Three pillars */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="font-sans text-xs font-semibold tracking-widest text-night dark:text-parchment uppercase mb-16">
            What this is
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <PillarCard
              label="Directory"
              href="/directory"
              heading="The organizations"
              body="A living index of diaspora organizations — who they are, what they do, and how to find them."
            />
            <PillarCard
              label="Blog"
              href="/blog"
              heading="Their stories"
              body="Interviews, perspectives, and reflections from the people doing the work — in their own words."
            />
            <PillarCard
              label="Gallery"
              href="/gallery"
              heading="What we are fighting for"
              body="The land, the people, and the future we are trying to build toward."
            />
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-sand dark:border-white/10 max-w-5xl mx-auto px-6" />

        {/* Manifesto excerpt */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <div className="max-w-reading mx-auto">
            <h2 className="font-sans text-xs font-semibold tracking-widest text-night dark:text-parchment uppercase mb-10">
              From the manifesto
            </h2>
            <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-night dark:text-parchment border-l-2 border-gold pl-8">
              It is a lens. Pointed at the people in this diaspora who are already
              doing the work, so that others might find them, learn from them, join
              them, or simply feel less alone in caring.
            </blockquote>
            <div className="mt-10">
              <Link
                href="/manifesto"
                className="font-sans text-sm text-gold underline underline-offset-4 hover:text-soft-gold transition-colors"
              >
                Read in full →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function PillarCard({
  label,
  href,
  heading,
  body,
}: {
  label: string
  href: string
  heading: string
  body: string
}) {
  return (
    <div className="group">
      <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-4">
        {label}
      </p>
      <h3 className="font-serif text-2xl text-night dark:text-parchment mb-4 leading-snug">
        {heading}
      </h3>
      <p className="font-sans text-sm text-night dark:text-parchment leading-relaxed mb-6">
        {body}
      </p>
      <Link
        href={href}
        className="font-sans text-sm text-night dark:text-parchment/70 hover:text-gold dark:hover:text-gold transition-colors inline-flex items-center gap-1"
      >
        Explore <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
