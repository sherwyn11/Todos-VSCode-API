import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app";
import { createConnection, getMongoRepository } from "typeorm";
import { devConfig } from "../ormconfig";
import { User } from "./entities/User";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 8000;

const main = async () => {
  createConnection(Object(devConfig))
    .then(async (connection) => {
      const db = connection.mongoManager;

      const user = new User();
      user.username = "sherwyn111";

      await db.save(user);
      console.log("Saved a new user with id: " + user.id);

      console.log("Loading users from the db...");
      const users = await db.find(User);
      console.log({ users });

      const userRepository = getMongoRepository(User);
      userRepository.deleteMany({ username: "sherwyn11" });

      const usersUpdated = await db.find(User);
      console.log({ usersUpdated });
    })
    .catch((error) => console.log(error));

  app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}!`);
  });
};

main();
