"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const hashPassword = (password) => {
    // TODO: hash password
    return btoa(password.toString());
};
exports.hashPassword = hashPassword;
