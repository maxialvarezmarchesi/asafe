"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdNotFound = void 0;
const BaseUserException_1 = require("./BaseUserException");
class IdNotFound extends BaseUserException_1.BaseUserException {
    constructor() {
        super(...arguments);
        this.message = "Id Not Exists";
        this.name = "InvalidUserId.IdNotFound";
    }
}
exports.IdNotFound = IdNotFound;
