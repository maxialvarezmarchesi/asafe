"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdNotExists = void 0;
const BaseUserException_1 = require("./BaseUserException");
class IdNotExists extends BaseUserException_1.BaseUserException {
    constructor() {
        super(...arguments);
        this.message = "Id Not Exists";
        this.name = "InvalidUserId.IdNotExists";
    }
}
exports.IdNotExists = IdNotExists;
