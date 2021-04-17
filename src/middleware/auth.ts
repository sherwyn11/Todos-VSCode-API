import { Request, Response, NextFunction } from "express";
import { getMongoRepository, ObjectID } from "typeorm";
import jwt from "jsonwebtoken";
import User from "../entities/User";

interface DECODE_TOKEN {
  uid: ObjectID;
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")!.replace("Bearer ", "");
    const { uid } = jwt.verify(token, process.env.JWT_SECRET!) as DECODE_TOKEN;
    const userRepository = getMongoRepository(User);
    const user = await userRepository.findOneOrFail(uid);
    if (!user) {
      res.status(404).json({ message: "User not found!" });
      return;
    }
    req.user = user;
    next();
  } catch (e) {
    res
      .status(401)
      .json({ message: "Unauthenticated user found! Please aunthenticate!" });
  }
};

export default auth;