import Link from 'next/link'
import type { BlogPost } from '@/lib/types'

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block py-10 hover:opacity-80 transition-opacity"
    >
      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-gold/10 text-gold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h2 className="font-serif text-2xl md:text-3xl text-night dark:text-parchment leading-snug mb-3 group-hover:text-gold transition-colors">
        {post.title}
      </h2>

      {/* Subtitle */}
      {post.subtitle && (
        <p className="font-serif text-lg text-night dark:text-parchment italic leading-relaxed mb-4">
          {post.subtitle}
        </p>
      )}

      {/* Meta */}
      <div className="flex items-center gap-3 font-sans text-xs text-night dark:text-parchment">
        {post.author && <span>{post.author}</span>}
        {post.author && formattedDate && (
          <span className="text-sand dark:text-white/20">·</span>
        )}
        {formattedDate && <time dateTime={post.date}>{formattedDate}</time>}
        {post.readTime && (
          <>
            <span className="text-sand dark:text-white/20">·</span>
            <span>{post.readTime}</span>
          </>
        )}
      </div>
    </Link>
  )
}
