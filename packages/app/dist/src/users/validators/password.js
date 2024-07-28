"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.password = void 0;
const password = (password) => password.toString() === password && password.length > 1;
exports.password = password;
