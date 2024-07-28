"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surname = void 0;
class Surname extends Error {
    constructor() {
        super(...arguments);
        this.message = "Invalid Surname";
        this.name = "InvalidUserSurname";
    }
}
exports.Surname = Surname;
