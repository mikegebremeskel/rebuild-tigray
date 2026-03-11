import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getBlogPost, getBlogPosts } from '@/lib/content'
import type { BlogPost } from '@/lib/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { frontmatter } = getBlogPost(params.slug)
    const post = frontmatter as BlogPost
    return {
      title: post.title,
      description: post.subtitle,
    }
  } catch {
    return { title: 'Post' }
  }
}

export default async function BlogPostPage({ params }: Props) {
  let data
  try {
    data = getBlogPost(params.slug)
  } catch {
    notFound()
  }

  const { frontmatter, content, readTime } = data
  const post = frontmatter as BlogPost

  return (
    <>
      <Nav />

      <main className="px-6 pt-24 pb-32">
        <div className="max-w-reading mx-auto">
          {/* Breadcrumb */}
          <div className="pt-12 mb-12">
            <Link
              href="/blog"
              className="font-sans text-xs text-night dark:text-parchment hover:text-gold transition-colors"
            >
              ← Blog
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="font-sans text-xs font-medium px-3 py-1 rounded-full bg-gold/10 text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-night dark:text-parchment mb-4">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="font-serif text-xl text-night dark:text-parchment leading-relaxed italic mb-8">
                {post.subtitle}
              </p>
            )}

            {/* Byline */}
            <div className="flex items-center gap-4 font-sans text-xs text-night dark:text-parchment border-t border-b border-sand dark:border-white/10 py-4">
              {post.author && <span>{post.author}</span>}
              {post.author && post.date && (
                <span className="text-sand dark:text-white/20">·</span>
              )}
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              {readTime && (
                <>
                  <span className="text-sand dark:text-white/20">·</span>
                  <span>{readTime}</span>
                </>
              )}
            </div>
          </header>

          {/* Body */}
          <article className="prose prose-lg dark:prose-invert font-serif">
            <MDXRemote source={content} />
          </article>
        </div>
      </main>

      <Footer />
    </>
  )
}
