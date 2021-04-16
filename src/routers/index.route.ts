import { Router } from "express";
import testRouter from "./test.route";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import todoRouter from "./todo.route";

const router: Router = Router();

router.use("/test", testRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/todo", todoRouter);

export default router;