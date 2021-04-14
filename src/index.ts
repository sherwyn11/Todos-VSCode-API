require("dotenv-safe").config();
import "reflect-metadata";
import app from "./app";
import { createConnection } from "typeorm";
import { devConfig } from "../ormconfig";

const PORT: number = Number(process.env.PORT) || 8000;

const main = async () => {
  createConnection(Object(devConfig))
    .then(async () => {
      console.log("Connected to MongoDB successfully!");
    })
    .catch((error) => console.log(error));

  app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}!`);
  });
};

main();
