"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const mongodb_1 = require("mongodb");
let Todo = class Todo {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", mongodb_1.ObjectID)
], Todo.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Todo.prototype, "userID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Todo.prototype, "todo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Todo.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("timestamp"),
    __metadata("design:type", Date)
], Todo.prototype, "createdAt", void 0);
Todo = __decorate([
    typeorm_1.Entity()
], Todo);
exports.default = Todo;
//# sourceMappingURL=Todo.js.map