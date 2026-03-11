import Link from 'next/link'
import type { OrgProfile } from '@/lib/types'

interface OrgCardProps {
  org: OrgProfile
}

export function OrgCard({ org }: OrgCardProps) {
  return (
    <Link
      href={`/directory/${org.slug}`}
      className="group block bg-sand dark:bg-night-surface border border-sand dark:border-white/10 rounded-xl p-6 hover:border-gold/40 transition-colors"
    >
      {/* Tags */}
      {org.tags && org.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {org.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-gold/10 text-gold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Name */}
      <h3 className="font-sans text-base font-semibold text-night dark:text-parchment mb-2 group-hover:text-gold transition-colors">
        {org.name}
      </h3>

      {/* Mission */}
      <p className="font-sans text-sm text-night/60 dark:text-parchment/60 leading-relaxed line-clamp-2 mb-4">
        {org.mission}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {org.founded && (
          <span className="font-sans text-xs text-night/60 dark:text-parchment/60">
            Est. {org.founded}
          </span>
        )}
        <span className="font-sans text-xs text-gold group-hover:underline underline-offset-2">
          View profile →
        </span>
      </div>
    </Link>
  )
}
