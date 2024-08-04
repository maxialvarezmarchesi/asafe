"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constraintForRemove = exports.constraintForUpdate = exports.constraintForCreate = void 0;
const Exceptions_1 = require("../exceptions/Exceptions");
const email_1 = require("./types/email");
const id_1 = require("./types/id");
const constraintForCreate = (user, repository) => {
    const errors = [];
    if ((0, email_1.emailExists)(user.email, repository)) {
        errors.push(new Exceptions_1.EmailExistsException());
    }
    return errors;
};
exports.constraintForCreate = constraintForCreate;
const constraintForUpdate = (user, repository) => {
    const errors = [];
    /** For send fields */
    if (user.email && (0, email_1.emailExistsInOtherUser)(user.email, user.id, repository)) {
        errors.push(new Exceptions_1.EmailExistsException());
    }
    return errors;
};
exports.constraintForUpdate = constraintForUpdate;
const constraintForRemove = (user, repository) => {
    const errors = [];
    /** For Mandatories fields */
    if (!(0, id_1.idExists)(user.id, repository)) {
        errors.push(new Exceptions_1.IdException());
    }
    return errors;
};
exports.constraintForRemove = constraintForRemove;
