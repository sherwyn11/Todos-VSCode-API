let devConfig = {
  type: "mongodb",
  url: process.env.TYPEORM_URL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

export { devConfig };
