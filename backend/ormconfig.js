module.exports =  {
  type: "sqlite",
  database: "src/app/database/database.sqlite",
  migrations: ["src/migrations/**/*.ts"],
  entities: [`${__dirname}/**/**/**/*.entity{.ts,.js}`],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: `${__dirname}/**/**/**/*.entity{.ts,.js}`,
  },
  synchronize: true,
  keepConnectionAlive: true,
};
