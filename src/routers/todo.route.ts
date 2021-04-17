import { Router, Request, Response } from "express";
import auth from "../middleware/auth";
import {
  addTodoController,
  getAllTodosController,
  updateTodoController,
} from "../controllers/todo.controller";

const todoRouter: Router = Router();

todoRouter.route("/add").post(auth, addTodoController);

todoRouter.route("/get-all").get(auth, getAllTodosController);

todoRouter.route("/update").patch(auth, updateTodoController);

todoRouter.route("/delete").delete((_req: Request, res: Response) => {
  res.status(200).send("Delete Todos!");
});

export default todoRouter;