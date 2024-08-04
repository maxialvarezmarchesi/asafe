"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const BaseUserException_1 = require("./BaseUserException");
class Password extends BaseUserException_1.BaseUserException {
    constructor() {
        super(...arguments);
        this.message = "Invalid Password";
        this.name = "InvalidUserPassword";
    }
}
exports.Password = Password;
