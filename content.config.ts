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
