module.exports =  {
  migrations: ["./src/database/migrations/*.ts"],
  entities: [`./src/modules/**/entities/*.entity{.ts,.js}`],
  cli: {
    migrationsDir: "./src/database/migrations",
    entitiesDir: `./src/modules/**/entities/*.entity{.ts,.js}`,
  },
  synchronize: true,
  keepConnectionAlive: true,
};
