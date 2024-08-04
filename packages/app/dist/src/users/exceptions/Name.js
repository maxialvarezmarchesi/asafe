"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
const BaseUserException_1 = require("./BaseUserException");
class Name extends BaseUserException_1.BaseUserException {
    constructor() {
        super(...arguments);
        this.message = "Invalid Name";
        this.name = "InvalidUserName";
    }
}
exports.Name = Name;
