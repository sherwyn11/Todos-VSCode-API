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
require("dotenv-safe").config();
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = require("../ormconfig");
const PORT = Number(process.env.PORT) || 8000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection(Object(ormconfig_1.devConfig));
    console.log("Connected to MongoDB successfully!");
    app_1.default.listen(PORT, () => {
        console.log(`Server is up on ${PORT}!`);
    });
});
main();
//# sourceMappingURL=index.js.map