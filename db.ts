import knex from "knex";

const db = knex({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./dev.sqlite3",
  },
});

export default db;
