module.exports =  {
  type: "sqlite",
  database: "src/database/database.sqlite",
  migrations: ["src/migrations/**/*.ts"],
  entities: [`${__dirname}/modules/**/entities/*.entity{.ts,.js}`],
  cli: {
    migrationsDir: "src/migrations",
    entitiesDir: `${__dirname}/modules/**/entities/*.entity{.ts,.js}`,
  },
  synchronize: true,
  keepConnectionAlive: true,
};
