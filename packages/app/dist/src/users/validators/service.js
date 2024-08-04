"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatedForRemove = exports.validatedForUpdate = exports.validatedForCreate = void 0;
const Exceptions_1 = require("../exceptions/Exceptions");
const id_1 = require("./types/id");
const email_1 = require("./types/email");
const password_1 = require("./types/password");
const name_1 = require("./types/name");
const surname_1 = require("./types/surname");
const validatedForCreate = (user) => {
    const errors = [];
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
exports.validatedForCreate = validatedForCreate;
const validatedForUpdate = (user) => {
    const errors = [];
    /** Mandatories fields */
    if (!(0, id_1.id)(user.id)) {
        errors.push(new Exceptions_1.IdException());
    }
    /** Optionals fields */
    if (user.email && !(0, email_1.email)(user.email)) {
        errors.push(new Exceptions_1.EmailException());
    }
    if (user.password && !(0, password_1.password)(user.password)) {
        errors.push(new Exceptions_1.PasswordException());
    }
    if (user.name && !(0, name_1.name)(user.name)) {
        errors.push(new Exceptions_1.NameException());
    }
    if (user.surname && !(0, surname_1.surname)(user.surname)) {
        errors.push(new Exceptions_1.SurnameException());
    }
    return errors;
};
exports.validatedForUpdate = validatedForUpdate;
const validatedForRemove = (user) => {
    const errors = [];
    if (!(0, id_1.id)(user.id)) {
        errors.push(new Exceptions_1.IdException());
    }
    return errors;
};
exports.validatedForRemove = validatedForRemove;
