import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

import {
  AddQuantitySalesInUsers1662682413723,
  AddTotalSalesInUsers1662682067817,
  CreateClient1662594576534,
  CreateProduct1653931908410,
  CreateRefreshToken1654060959317,
  CreateSales1662682882098,
  CreateUser1654024593729,
} from "../database/migrations";

dotenv.config({ path: ".env" });

const appDataSource = new DataSource({
  type: "sqlite",
  database: `./src/database/database.sqlite`,
  synchronize: true,
  logging: false,
  entities: [`./src/modules/**/*.entity.ts`],
  migrations: [
    CreateProduct1653931908410,
    AddQuantitySalesInUsers1662682413723,
    AddTotalSalesInUsers1662682067817,
    CreateClient1662594576534,
    CreateRefreshToken1654060959317,
    CreateSales1662682882098,
    CreateUser1654024593729,
  ],
  migrationsRun: true,
});

export { appDataSource };
