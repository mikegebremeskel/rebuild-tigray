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
            We are not waiting.
          </h1>
          <p className="font-sans text-lg text-night dark:text-parchment max-w-lg leading-relaxed mb-12">
            There's strength in numbers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/manifesto"
              className="inline-flex items-center gap-2 bg-gold text-night font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-soft-gold transition-colors"
            >
              Read the manifesto
              <span aria-hidden>→</span>
            </Link>
            <a
              href="https://form.typeform.com/to/jXQC8kTT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-night dark:border-parchment text-night dark:text-parchment font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:border-gold hover:text-gold dark:hover:border-gold dark:hover:text-gold transition-colors"
            >
              Share your voice
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-sand dark:border-white/10 max-w-5xl mx-auto px-6" />

        {/* Voice CTA context */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <div className="max-w-xl">
            <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-6">
              Contribute
            </p>
            <p className="font-serif text-2xl text-night dark:text-parchment leading-snug mb-6">
              We want to hear from you.
            </p>
            <p className="font-sans text-base text-night dark:text-parchment leading-relaxed mb-8">
              This is early. Tell us what you're working on and what's missing.
            </p>
            <a
              href="https://form.typeform.com/to/jXQC8kTT"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-gold underline underline-offset-4 hover:text-soft-gold transition-colors"
            >
              Share your thoughts →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
