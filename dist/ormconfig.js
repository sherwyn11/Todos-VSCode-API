"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devConfig = void 0;
let devConfig = {
    type: "mongodb",
    url: process.env.TYPEORM_URL,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["src/entities/**/*.*"],
    migrations: ["src/migration/**/*.*"],
    subscribers: ["src/subscriber/**/*.*"],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
    },
};
exports.devConfig = devConfig;
//# sourceMappingURL=ormconfig.js.map