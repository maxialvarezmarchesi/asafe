"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidator = void 0;
const Exceptions_1 = require("./exceptions/Exceptions");
const id_1 = require("./id");
const email_1 = require("./email");
const password_1 = require("./password");
const name_1 = require("./name");
const surname_1 = require("./surname");
const userValidator = (user) => {
    const errors = [];
    if (!(0, id_1.id)(user.id)) {
        errors.push(new Exceptions_1.IdException());
    }
    if (!(0, email_1.email)(user.email)) {
        errors.push(new Exceptions_1.EmailException());
    }
    if (!(0, password_1.password)(user.password)) {
        errors.push(new Exceptions_1.PasswordException());
    }
    if (!(0, name_1.name)(user.name)) {
        errors.push(new Exceptions_1.NameException());
    }
    if (!(0, surname_1.surname)(user.surname)) {
        errors.push(new Exceptions_1.SurnameException());
    }
    return errors;
};
exports.userValidator = userValidator;
