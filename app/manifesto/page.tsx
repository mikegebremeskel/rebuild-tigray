import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Emblem } from '@/components/Emblem'
import { getManifesto } from '@/lib/content'

export const metadata: Metadata = {
  title: 'The manifesto',
  description:
    'The belief behind everything on this site. A platform of record for the Tigrayan diaspora, without spin and without agenda.',
}

export default async function ManifestoPage() {
  const { content } = getManifesto()

  return (
    <>
      <Nav />

      <main className="px-6 pt-24 pb-32">
        {/* Header */}
        <div className="max-w-reading mx-auto mb-16 pt-12">
          <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-6">
            Manifesto
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-night dark:text-parchment mb-6">
            The work
          </h1>
          <p
            className="font-sans text-base text-night dark:text-parchment"
            title="zeynidiyibo gobo zeynisegiro ruba — there are no mountains we would not climb, no rivers we would not cross"
          >
            ዘይንድይቦ ጎቦ ዘይንሰግሮ ሩባ
          </p>
        </div>

        {/* Body */}
        <article className="max-w-reading mx-auto prose prose-lg dark:prose-invert font-serif">
          <MDXRemote source={content} />
        </article>

        {/* Seal */}
        <div className="max-w-reading mx-auto mt-24 flex flex-col items-center gap-6 text-center">
          <div className="text-night dark:text-parchment">
            <Emblem size={160} />
          </div>
          <p className="font-sans text-xs text-night dark:text-parchment tracking-wide">
            ዘይንድይቦ ጎቦ ዘይንሰግሮ ሩባ
          </p>
          <p className="font-sans text-xs text-night dark:text-parchment italic">
            zeynidiyibo gobo zeynisegiro ruba — there are no mountains we would
            not climb, no rivers we would not cross
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
