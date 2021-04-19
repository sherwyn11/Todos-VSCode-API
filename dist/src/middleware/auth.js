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
const typeorm_1 = require("typeorm");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../entities/User"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const userRepository = typeorm_1.getMongoRepository(User_1.default);
        const user = yield userRepository.findOneOrFail(uid);
        if (!user) {
            res.status(404).json({ message: "User not found!" });
            return;
        }
        req.user = user;
        next();
    }
    catch (e) {
        res
            .status(401)
            .json({ message: "Unauthenticated user found! Please aunthenticate!" });
    }
});
exports.default = auth;
//# sourceMappingURL=auth.js.map