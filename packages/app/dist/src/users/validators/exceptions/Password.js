"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password extends Error {
    constructor() {
        super(...arguments);
        this.message = "Invalid Password";
        this.name = "InvalidUserPassword";
    }
}
exports.Password = Password;
