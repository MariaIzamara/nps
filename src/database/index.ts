import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  // 'ormconfig' values
  const defaultOptions = await getConnectionOptions();
  
  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === "test"
        ? "./src/database/database.test.sqlite"
        : defaultOptions.database,
    })
  );
}