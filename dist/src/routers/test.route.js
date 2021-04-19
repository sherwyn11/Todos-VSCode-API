"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testRouter = express_1.Router();
testRouter.route("/test-route").get((_req, res) => {
    res.status(200).send({ message: "Test Works!" });
});
exports.default = testRouter;
//# sourceMappingURL=test.route.js.map