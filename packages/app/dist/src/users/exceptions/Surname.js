"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surname = void 0;
const BaseUserException_1 = require("./BaseUserException");
class Surname extends BaseUserException_1.BaseUserException {
    constructor() {
        super(...arguments);
        this.message = "Invalid Surname";
        this.name = "InvalidUserSurname";
    }
}
exports.Surname = Surname;
