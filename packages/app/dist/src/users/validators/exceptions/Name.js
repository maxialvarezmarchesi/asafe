"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name extends Error {
    constructor() {
        super(...arguments);
        this.message = "Invalid Name";
        this.name = "InvalidUserName";
    }
}
exports.Name = Name;
