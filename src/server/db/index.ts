import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createPool } from "@vercel/postgres";
import * as schema from "./schema"
import { env } from "../../env"

const vercelClient = createPool({
  connectionString: env.DATABASE_URL
})

// Use this object to send drizzle queries to your DB
export const db = drizzle(vercelClient, { schema });