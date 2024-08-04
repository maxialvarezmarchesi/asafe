"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constraintForRemove = exports.constraintForUpdate = exports.constraintForCreate = void 0;
const Exceptions_1 = require("../exceptions/Exceptions");
const email_1 = require("./types/email");
const id_1 = require("./types/id");
const constraintForCreate = (user, repository) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = [];
    if (yield (0, email_1.emailExists)(user.email, repository)) {
        errors.push(new Exceptions_1.EmailExistsException());
    }
    return errors;
});
exports.constraintForCreate = constraintForCreate;
const constraintForUpdate = (user, repository) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = [];
    /** For send fields */
    if (user.email && (yield (0, email_1.emailExistsInOtherUser)(user.email, user.id, repository))) {
        errors.push(new Exceptions_1.EmailExistsException());
    }
    return errors;
});
exports.constraintForUpdate = constraintForUpdate;
const constraintForRemove = (user, repository) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = [];
    /** For Mandatories fields */
    if (!(0, id_1.idExists)(user.id, repository)) {
        errors.push(new Exceptions_1.IdException());
    }
    return new Promise(resolve => resolve(errors));
});
exports.constraintForRemove = constraintForRemove;
