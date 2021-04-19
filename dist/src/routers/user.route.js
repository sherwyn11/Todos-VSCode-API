"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../middleware/auth"));
const userRouter = express_1.Router();
userRouter.route("/details").get(auth_1.default, (req, res) => {
    res.status(200).send(req.user);
});
exports.default = userRouter;
//# sourceMappingURL=user.route.js.map