import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    category: z.string()
  })
})

const tagsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    description: z.string(),
    lowerHeading: z.string()
  })
})

export const collections = {
  blog: blogCollection,
  tags: tagsCollection
}
