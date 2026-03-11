export interface BlogPost {
  slug: string
  title: string
  subtitle?: string
  date: string
  tags?: string[]
  author?: string
  readTime?: string
}

export interface OrgProfile {
  slug: string
  name: string
  mission: string
  tags?: string[]
  website?: string
  founded?: string
  location?: string
}

export interface ManifestoFrontmatter {
  title: string
  subtitle?: string
}
