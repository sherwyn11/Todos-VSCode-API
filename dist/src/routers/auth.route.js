"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const authRouter = express_1.Router();
authRouter
    .route("/github")
    .get(passport_1.default.authenticate("github", { session: false }));
authRouter
    .route("/github/callback")
    .get(passport_1.default.authenticate("github", { session: false }), (req, res) => {
    const { accessToken } = req.user;
    res.redirect(process.env.VSCODE_POLKA_ENDPOINT + accessToken);
});
exports.default = authRouter;
//# sourceMappingURL=auth.route.js.map