import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getOrgProfile, getOrgProfiles } from '@/lib/content'
import type { OrgProfile } from '@/lib/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const orgs = getOrgProfiles()
  return orgs.map((org) => ({ slug: org.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { frontmatter } = getOrgProfile(params.slug)
    return {
      title: (frontmatter as OrgProfile).name,
      description: (frontmatter as OrgProfile).mission,
    }
  } catch {
    return { title: 'Organization' }
  }
}

export default async function OrgProfilePage({ params }: Props) {
  let data
  try {
    data = getOrgProfile(params.slug)
  } catch {
    notFound()
  }

  const { frontmatter, content } = data
  const org = frontmatter as OrgProfile

  return (
    <>
      <Nav />

      <main className="px-6 pt-24 pb-32">
        <div className="max-w-reading mx-auto">
          {/* Breadcrumb */}
          <div className="pt-12 mb-12">
            <Link
              href="/directory"
              className="font-sans text-xs text-night dark:text-parchment hover:text-gold transition-colors"
            >
              ← Directory
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12 pb-12 border-b border-sand dark:border-white/10">
            <div className="flex flex-wrap gap-2 mb-6">
              {org.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="font-sans text-xs font-medium px-3 py-1 rounded-full bg-gold/10 text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-night dark:text-parchment mb-4">
              {org.name}
            </h1>
            <p className="font-sans text-base text-night dark:text-parchment leading-relaxed">
              {org.mission}
            </p>
          </header>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-6 mb-12 pb-12 border-b border-sand dark:border-white/10">
            {org.founded && (
              <div>
                <p className="font-sans text-xs text-night dark:text-parchment uppercase tracking-widest mb-1">
                  Founded
                </p>
                <p className="font-sans text-sm text-night dark:text-parchment">
                  {org.founded}
                </p>
              </div>
            )}
            {org.location && (
              <div>
                <p className="font-sans text-xs text-night dark:text-parchment uppercase tracking-widest mb-1">
                  Based in
                </p>
                <p className="font-sans text-sm text-night dark:text-parchment">
                  {org.location}
                </p>
              </div>
            )}
          </div>

          {/* Body */}
          <article className="prose prose-lg dark:prose-invert font-serif">
            <MDXRemote source={content} />
          </article>

          {/* Link out */}
          {org.website && org.website !== '[website pending]' && (
            <div className="mt-16 pt-12 border-t border-sand dark:border-white/10">
              <a
                href={org.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-soft-gold transition-colors"
              >
                Visit {org.name}
                <span aria-hidden>↗</span>
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
