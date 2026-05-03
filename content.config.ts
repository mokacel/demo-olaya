import { defineCollection, z } from '@nuxt/content'

export const collections = {
  index: defineCollection({
    type: 'page',
    source: 'index.yml',
    schema: z.object({
      title: z.string(),
      subtitle: z.string(),
      seo: z.object({
        title: z.string(),
        description: z.string()
      })
    })
  }),

  work: defineCollection({
    type: 'page',
    source: 'work/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      image: z.string(),
      tags: z.array(z.string()).default([]),
      client: z.string().optional(),
      role: z.string().optional(),
      duration: z.string().optional(),
      technologies: z.array(z.string()).default([]),
      featured: z.boolean().default(false)
    })
  }),

  blog: defineCollection({
    type: 'page',
    source: 'blog/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      tags: z.array(z.string()).default([]),
      image: z.string().optional(),
      published: z.boolean().default(false),
      minRead: z.number().optional()
    })
  }),

  pages: defineCollection({
    type: 'page',
    source: 'pages/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      seo: z.object({
        title: z.string(),
        description: z.string()
      }).optional()
    })
  })
}
