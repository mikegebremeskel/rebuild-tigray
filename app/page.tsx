import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section className="px-6 pt-28 pb-24 md:pt-40 md:pb-0 max-w-5xl mx-auto">
          <div className="md:grid md:grid-cols-[1fr_360px] md:gap-16 md:items-center">

            {/* Text column */}
            <div className="md:pb-36">
              <p className="font-sans text-sm font-medium tracking-widest text-gold uppercase mb-8">
                rebuild-tigray.com
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-night dark:text-parchment max-w-3xl mb-8">
                We are not waiting.
              </h1>

              {/* Mobile-only illustration — sits between headline and subheader */}
              <div className="md:hidden relative -mx-6 h-[280px] sm:h-[340px] mb-8">
                <Image
                  src="/images/hero-illustration.png"
                  alt="Tigrayans carrying the flag across the mountains"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-parchment dark:from-night to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-parchment dark:from-night via-parchment/80 dark:via-night/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-parchment dark:from-night to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-parchment dark:from-night to-transparent pointer-events-none" />
              </div>

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
            </div>

            {/* Desktop-only illustration — right column */}
            <div className="hidden md:block self-end relative h-[520px]">
              <Image
                src="/images/hero-illustration.png"
                alt="Tigrayans carrying the flag across the mountains"
                fill
                className="object-contain object-bottom"
                priority
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-parchment dark:from-night to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-parchment dark:from-night via-parchment/80 dark:via-night/80 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-parchment dark:from-night to-transparent pointer-events-none" />
            </div>

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
