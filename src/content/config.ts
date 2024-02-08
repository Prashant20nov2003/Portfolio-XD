// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      github: z.string().optional(),
      liveLink: z.string().optional(),
      postLink: z.string().optional(),
      tags: z.array(z.string()),
      featured: z.boolean().optional(),
      featuredOrder: z.number().optional(),
    }),
});

const aboutSnippetsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    organization: z.string().optional(),
    timeline: z.string().optional(),
    order: z.number().optional()
  }),
});
//
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  aboutSnippets: aboutSnippetsCollection,
};
