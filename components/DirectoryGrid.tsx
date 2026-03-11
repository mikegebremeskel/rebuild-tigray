'use client'

import { useState, useMemo } from 'react'
import { OrgCard } from './OrgCard'
import type { OrgProfile } from '@/lib/types'

interface DirectoryGridProps {
  orgs: OrgProfile[]
}

export function DirectoryGrid({ orgs }: DirectoryGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Collect all unique tags across all orgs, sorted alphabetically
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    orgs.forEach((org) => {
      org.tags?.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [orgs])

  const filtered = useMemo(() => {
    if (!activeTag) return orgs
    return orgs.filter((org) => org.tags?.includes(activeTag))
  }, [orgs, activeTag])

  return (
    <div>
      {/* Tag filter */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveTag(null)}
            className={[
              'font-sans text-xs font-medium px-4 py-1.5 rounded-full border transition-colors',
              activeTag === null
                ? 'bg-gold text-night border-gold'
                : 'border-sand dark:border-white/20 text-night dark:text-parchment hover:border-gold hover:text-gold',
            ].join(' ')}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={[
                'font-sans text-xs font-medium px-4 py-1.5 rounded-full border transition-colors',
                activeTag === tag
                  ? 'bg-gold text-night border-gold'
                  : 'border-sand dark:border-white/20 text-night dark:text-parchment hover:border-gold hover:text-gold',
              ].join(' ')}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((org) => (
            <OrgCard key={org.slug} org={org} />
          ))}
        </div>
      ) : (
        <p className="font-sans text-sm text-night dark:text-parchment">
          No organizations found for this filter.
        </p>
      )}

      {/* Count */}
      <p className="font-sans text-xs text-night dark:text-parchment mt-8">
        {filtered.length} organization{filtered.length !== 1 ? 's' : ''}
        {activeTag ? ` tagged "${activeTag}"` : ' in the directory'}
      </p>
    </div>
  )
}
