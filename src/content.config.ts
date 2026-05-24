import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    category: z.string().default('技术'),
    tags: z.array(z.string()).default([]),
    summary: z.string().default(''),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    category: z.string().default('LLM'),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    orderInSeries: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    category: z.string().default('LLM'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    techStack: z.array(z.string()).default([]),
    summary: z.string().default(''),
    category: z.string().default('Agent'),
    draft: z.boolean().default(false),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    description: z.string(),
    category: z.array(z.string()).default([]),
    rating: z.number().min(1).max(5).default(3),
    pricing: z.enum(['free', 'freemium', 'paid']).default('freemium'),
    website: z.string().url().optional().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    guideSlug: z.string().optional(),
    ratings: z.object({
      usability: z.number().min(1).max(5).default(3),
      functionality: z.number().min(1).max(5).default(3),
      costEffectiveness: z.number().min(1).max(5).default(3),
      innovation: z.number().min(1).max(5).default(3),
    }).default({ usability: 3, functionality: 3, costEffectiveness: 3, innovation: 3 }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, notes, faqs, cases, tools };
