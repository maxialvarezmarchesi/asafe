"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const BaseUserException_1 = require("./BaseUserException");
class Email extends BaseUserException_1.BaseUserException {
    constructor() {
        super(...arguments);
        this.message = "Invalid Email";
        this.name = "InvalidUserEmail";
    }
}
exports.Email = Email;
