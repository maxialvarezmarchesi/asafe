"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailExists = void 0;
const BaseUserException_1 = require("./BaseUserException");
class EmailExists extends BaseUserException_1.BaseUserException {
    constructor() {
        super(...arguments);
        this.message = "Email Exists";
        this.name = "InvalidUserEmail.EmailExists";
    }
}
exports.EmailExists = EmailExists;
