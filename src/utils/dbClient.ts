import knex, { Knex } from "knex";

type KnexConnection = Knex<any, unknown[]> | null;

let cachedConnection: KnexConnection = null;

const getDbClient = (): Knex<any, unknown[]> => {
  if (cachedConnection) {
    return cachedConnection;
  }

  const connection = knex({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "brandon",
      password: "brandongs123",
      database: "cursos",
    },
  });

  cachedConnection = connection;
  return connection;
};

export default getDbClient;
