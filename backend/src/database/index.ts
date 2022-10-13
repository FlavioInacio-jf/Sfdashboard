import { DataSource } from "typeorm";

const appDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
});
appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized");
  })
  .catch(() => {
    console.error("Error during Data Source initialization");
  });

export { appDataSource };
