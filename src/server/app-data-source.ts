import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { UserProfile } from "./entity/UserProfile";
import { createSSHTunnel, portIsForwarding } from "./app-data-source-connection";

export const postGresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 3307, //import.meta.env.DEV ? 3307 : 5432,
  username: "postgres",
  password: import.meta.env.VITE_DB_PASSWORD,
  database: "postgres",
  entities: [UserProfile],
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  schema: 'public'
  // synchronize: true,
});

export const initializeDatabase = async () => {
  
  if (/*import.meta.env.DEV &&*/ await portIsForwarding(3307) === false) 
  await createSSHTunnel();

  return await new Promise<void>((resolve, reject) => {

    postGresDataSource
    .initialize()
    .then(async () => {
        console.log("Data Source has been initialized!")
        resolve();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
        reject();
    })
  });
}

