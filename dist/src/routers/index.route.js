"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_route_1 = __importDefault(require("./test.route"));
const auth_route_1 = __importDefault(require("./auth.route"));
const user_route_1 = __importDefault(require("./user.route"));
const todo_route_1 = __importDefault(require("./todo.route"));
const router = express_1.Router();
router.use("/test", test_route_1.default);
router.use("/auth", auth_route_1.default);
router.use("/user", user_route_1.default);
router.use("/todo", todo_route_1.default);
exports.default = router;
//# sourceMappingURL=index.route.js.map