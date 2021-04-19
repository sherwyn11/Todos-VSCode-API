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
const passport_1 = __importDefault(require("passport"));
const passport_github_1 = require("passport-github");
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../entities/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
passport_1.default.use(new passport_github_1.Strategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_OAUTH_CALLBACK_URI,
}, function (_, __, profile, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepository = typeorm_1.getMongoRepository(User_1.default);
        let user = yield userRepository.findOne({ username: profile.username });
        if (!user) {
            user = yield userRepository.save({
                username: profile.username,
                email: profile._json.email !== undefined ? profile._json.email : "",
            });
        }
        cb(null, {
            accessToken: jsonwebtoken_1.default.sign({ uid: user.id }, process.env.JWT_SECRET, {
                expiresIn: "7 days",
            }),
        });
    });
}));
//# sourceMappingURL=passport.js.map