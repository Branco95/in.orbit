import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import 'dotenv/config'
import { env } from '../env'

console.log(env.DATABASE_URL)
export const client = postgres(env.DATABASE_URL) //add your database URL here
export const db = drizzle(client, { schema, logger: true })
