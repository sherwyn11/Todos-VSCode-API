import { Router, Request, Response } from "express";

const todoRouter: Router = Router();

todoRouter.route("/add").post((_req: Request, res: Response) => {
  res.status(200).send("Add Todo!");
});

todoRouter.route("/update").patch((_req: Request, res: Response) => {
  res.status(200).send("Update Todo!");
});

todoRouter.route("/delete").delete((_req: Request, res: Response) => {
  res.status(200).send("Delete Todos!");
});

export default todoRouter;