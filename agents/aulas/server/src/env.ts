import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().refine((val) =>
    val.startsWith('postgresql://') || val.startsWith('postgres://'),
    {
      message: 'DATABASE_URL deve começar com postgresql:// ou postgres://',
    }
  ),
  GEMINI_API_KEY: z.string(),
  HOST_PRODUCTION: z.string().url().optional(),
})

export const env = envSchema.parse(process.env)