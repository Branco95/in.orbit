import z from 'zod'

//obligatory to have a DATABASE_URL env variable to run this project
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
