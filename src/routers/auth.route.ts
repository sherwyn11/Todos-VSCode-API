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
    (req: Request, res: Response) => {
      const { accessToken } = req.user as any;
      res.redirect(process.env.VSCODE_POLKA_ENDPOINT! + accessToken);
    }
  );

export default authRouter;