import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import Todo from "../entities/Todo";

const addTodoController = async (req: Request, res: Response) => {
  try {
    const { id }: any = req.user!;
    const todo: string = req.body.todo;
    const status: boolean = req.body.status;
    const todoRepository = getMongoRepository(Todo);

    await todoRepository.save({
      userID: id,
      todo: todo,
      status: status,
      createdAt: Date.now(),
    });
    res.status(201).json({ message: "Todo saved successfully!" });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

const getAllTodosController = async (req: Request, res: Response) => {
  try {
    const { id }: any = req.user!;
    const todoRepository = getMongoRepository(Todo);

    let todos = await todoRepository.find({
      userID: id,
    });

    todos.sort(
      (a: Todo, b: Todo): number => Number(b.createdAt) - Number(a.createdAt)
    );

    res.status(201).json({ message: todos });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

const updateTodoController = async (req: Request, res: Response) => {
  try {
    const id: any = req.body.tid;
    const todoRepository = getMongoRepository(Todo);

    const todo: Todo = await todoRepository.findOneOrFail(id);
    todo.status = !todo.status;
    await todoRepository.save(todo);

    res.status(201).json({ message: todo });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export { addTodoController, getAllTodosController, updateTodoController };