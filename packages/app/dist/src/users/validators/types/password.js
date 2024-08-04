"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.password = void 0;
const password = (password) => (password === null || password === void 0 ? void 0 : password.toString()) === password && (password === null || password === void 0 ? void 0 : password.length) > 1;
exports.password = password;
