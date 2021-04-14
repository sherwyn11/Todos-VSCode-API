import { Router, Request, Response } from "express";
import passport from "passport";

const authRouter: Router = Router();

authRouter
  .route("/github")
  .get(passport.authenticate("github", { session: false }));

authRouter
  .route("/github/callback")
  .get(
    passport.authenticate("github", { session: false }),
    (_req: Request, res: Response) => {
      res.send("You have been logged in with GitHub successfully!");
    }
  );

export default authRouter;
