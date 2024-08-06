"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presentAuth = void 0;
const presentAuth = (result) => {
    let response = [];
    result.getUsers().forEach(user => {
        response = user;
    });
    return response;
};
exports.presentAuth = presentAuth;
