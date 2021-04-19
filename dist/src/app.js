"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/passport");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const passport_1 = __importDefault(require("passport"));
const index_route_1 = __importDefault(require("./routers/index.route"));
const app = express_1.default();
let accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, "access.log"), {
    flags: "a",
});
app.use(morgan_1.default("combined", { stream: accessLogStream }));
app.use(cors_1.default({ origin: "*" }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.serializeUser(function (user, done) {
    done(null, user.accessToken);
});
app.use("/api", index_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map