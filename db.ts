import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: process.env.POSTGRESDB_LOCAL_PORT,
    user: process.env.POSTGRESDB_USER,
    database: process.env.POSTGRESDB_DATABASE,
    password: process.env.POSTGRESDB_ROOT_PASSWORD,
  },
});
