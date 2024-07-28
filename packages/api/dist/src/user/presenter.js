"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.present = void 0;
const present = (result) => {
    return result.getUsers().map((user) => {
        return {
            user: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email
            },
            errors: []
        };
    });
};
exports.present = present;
