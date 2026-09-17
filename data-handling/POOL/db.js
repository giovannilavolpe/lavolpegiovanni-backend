import { configDotenv } from 'dotenv'
import { Pool } from 'pg'
configDotenv()



export const pool = new Pool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database_name,
})