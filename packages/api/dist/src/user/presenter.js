"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.presentList = exports.presentTransaction = void 0;
const presentTransaction = (result) => {
    const errors = result.getValidationsFailed().map((error) => {
        return {
            message: error.message,
            type: error.name
        };
    });
    const response = {
        user: result.getUsers()[0],
        errors
    };
    return response;
};
exports.presentTransaction = presentTransaction;
const presentList = (result) => {
    const response = [];
    result.getValidationsFailed().map((error) => {
        return {
            message: error.message,
            type: error.name
        };
    });
    result.getUsers().forEach(user => {
        response.push(user);
    });
    return response;
};
exports.presentList = presentList;
