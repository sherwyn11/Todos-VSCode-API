import { Router, Request, Response } from "express";
import auth from "../middleware/auth";

const userRouter: Router = Router();

userRouter.route("/details").get(auth, (req: Request, res: Response) => {
  res.status(200).send(req.user);
});

export default userRouter;