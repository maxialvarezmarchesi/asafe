"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailExists = void 0;
class EmailExists extends Error {
    constructor() {
        super(...arguments);
        this.message = "Email Exists";
        this.name = "InvalidUserEmail.EmailExists";
    }
}
exports.EmailExists = EmailExists;
