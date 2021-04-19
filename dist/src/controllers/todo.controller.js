"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoController = exports.getAllTodosController = exports.addTodoController = void 0;
const typeorm_1 = require("typeorm");
const Todo_1 = __importDefault(require("../entities/Todo"));
const addTodoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const todo = req.body.todo;
        const status = req.body.status;
        const todoRepository = typeorm_1.getMongoRepository(Todo_1.default);
        let t = yield todoRepository.save({
            userID: id,
            todo: todo,
            status: status,
            createdAt: Date.now(),
        });
        res.status(201).json({ message: t });
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
});
exports.addTodoController = addTodoController;
const getAllTodosController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const todoRepository = typeorm_1.getMongoRepository(Todo_1.default);
        let todos = yield todoRepository.find({
            userID: id,
        });
        todos.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
        res.status(201).json({ message: todos });
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
});
exports.getAllTodosController = getAllTodosController;
const updateTodoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.tid;
        const todoRepository = typeorm_1.getMongoRepository(Todo_1.default);
        const todo = yield todoRepository.findOneOrFail(id);
        todo.status = !todo.status;
        yield todoRepository.save(todo);
        res.status(201).json({ message: todo });
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
});
exports.updateTodoController = updateTodoController;
//# sourceMappingURL=todo.controller.js.map