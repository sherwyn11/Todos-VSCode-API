require("dotenv-safe").config();
import "reflect-metadata";
import app from "./app";
import { createConnection } from "typeorm";
import { devConfig } from "../ormconfig";

const PORT: number = Number(process.env.PORT) || 8000;

const main = async () => {
  await createConnection(Object(devConfig));
  console.log("Connected to MongoDB successfully!");
  app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}!`);
  });
};

main();
