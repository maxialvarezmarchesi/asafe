"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email extends Error {
    constructor() {
        super(...arguments);
        this.message = "Invalid Email";
        this.name = "InvalidUserEmail";
    }
}
exports.Email = Email;
