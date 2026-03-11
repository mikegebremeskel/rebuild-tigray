import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { BlogPostCard } from '@/components/BlogPostCard'
import { getBlogPosts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Interviews, perspectives, and reflections from the Tigrayan diaspora — the people doing the work of rebuilding, in their own words.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <>
      <Nav />

      <main className="px-6 pt-24 pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="pt-12 mb-16">
            <p className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-6">
              Blog
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-night dark:text-parchment mb-6 max-w-xl">
              Their stories
            </h1>
            <p className="font-sans text-base text-night dark:text-parchment max-w-lg leading-relaxed">
              Interviews and perspectives from the people doing the work — on what
              drives them, what they have learned, and what they still need.
            </p>
          </div>

          {/* Post list */}
          <div className="divide-y divide-sand dark:divide-white/10">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>

          {posts.length === 0 && (
            <p className="font-sans text-sm text-night dark:text-parchment">
              No posts yet. Check back soon.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
