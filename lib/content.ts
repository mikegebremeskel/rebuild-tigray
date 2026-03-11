import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogPost, OrgProfile, ManifestoFrontmatter } from './types'

const contentRoot = path.join(process.cwd(), 'content')

function readMdx(filePath: string): { data: Record<string, unknown>; content: string } {
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { data, content }
}

// ─── Blog ──────────────────────────────────────────────────────────────────

export function getBlogPosts(): BlogPost[] {
  const dir = path.join(contentRoot, 'blog')
  const files = fs.readdirSync(dir).filter((f) => /\.(mdx?|md)$/.test(f))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(mdx?|md)$/, '')
      const { data, content } = readMdx(path.join(dir, filename))
      const rt = readingTime(content)
      return {
        slug,
        title: (data.title as string) ?? '[Untitled]',
        subtitle: data.subtitle as string | undefined,
        date: (data.date as string) ?? '',
        tags: (data.tags as string[]) ?? [],
        author: data.author as string | undefined,
        readTime: rt.text,
      } satisfies BlogPost
    })
    .sort((a, b) => {
      if (!a.date && !b.date) return 0
      if (!a.date) return 1
      if (!b.date) return -1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
}

export function getBlogPost(slug: string): {
  frontmatter: BlogPost
  content: string
  readTime: string
} {
  const filePath = path.join(contentRoot, 'blog', `${slug}.mdx`)
  const altPath = path.join(contentRoot, 'blog', `${slug}.md`)
  const resolved = fs.existsSync(filePath) ? filePath : altPath

  const { data, content } = readMdx(resolved)
  const rt = readingTime(content)

  return {
    frontmatter: {
      slug,
      title: (data.title as string) ?? '[Untitled]',
      subtitle: data.subtitle as string | undefined,
      date: (data.date as string) ?? '',
      tags: (data.tags as string[]) ?? [],
      author: data.author as string | undefined,
    },
    content,
    readTime: rt.text,
  }
}

// ─── Directory ──────────────────────────────────────────────────────────────

export function getOrgProfiles(): OrgProfile[] {
  const dir = path.join(contentRoot, 'directory')
  const files = fs.readdirSync(dir).filter((f) => /\.(mdx?|md)$/.test(f))

  return files.map((filename) => {
    const slug = filename.replace(/\.(mdx?|md)$/, '')
    const { data } = readMdx(path.join(dir, filename))
    return {
      slug,
      name: (data.name as string) ?? '[Organization name]',
      mission: (data.mission as string) ?? '',
      tags: (data.tags as string[]) ?? [],
      website: data.website as string | undefined,
      founded: data.founded as string | undefined,
      location: data.location as string | undefined,
    } satisfies OrgProfile
  })
}

export function getOrgProfile(slug: string): {
  frontmatter: OrgProfile
  content: string
} {
  const filePath = path.join(contentRoot, 'directory', `${slug}.mdx`)
  const altPath = path.join(contentRoot, 'directory', `${slug}.md`)
  const resolved = fs.existsSync(filePath) ? filePath : altPath

  const { data, content } = readMdx(resolved)

  return {
    frontmatter: {
      slug,
      name: (data.name as string) ?? '[Organization name]',
      mission: (data.mission as string) ?? '',
      tags: (data.tags as string[]) ?? [],
      website: data.website as string | undefined,
      founded: data.founded as string | undefined,
      location: data.location as string | undefined,
    },
    content,
  }
}

// ─── Manifesto ───────────────────────────────────────────────────────────────

export function getManifesto(): {
  frontmatter: ManifestoFrontmatter
  content: string
} {
  const filePath = path.join(contentRoot, 'manifesto.mdx')
  const { data, content } = readMdx(filePath)

  return {
    frontmatter: {
      title: (data.title as string) ?? 'The manifesto',
      subtitle: data.subtitle as string | undefined,
    },
    content,
  }
}
