import 'dotenv/config'
import postgres from 'postgres'

const {
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD
} = process.env

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  ssl: true,
  project: PGDATABASE // aqui você passa o nome do banco/projeto do Neon
})

export default sql
