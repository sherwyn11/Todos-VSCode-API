"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../middleware/auth"));
const todo_controller_1 = require("../controllers/todo.controller");
const todoRouter = express_1.Router();
todoRouter.route("/add").post(auth_1.default, todo_controller_1.addTodoController);
todoRouter.route("/get-all").get(auth_1.default, todo_controller_1.getAllTodosController);
todoRouter.route("/update").patch(auth_1.default, todo_controller_1.updateTodoController);
todoRouter.route("/delete").delete((_req, res) => {
    res.status(200).send("Delete Todos!");
});
exports.default = todoRouter;
//# sourceMappingURL=todo.route.js.map