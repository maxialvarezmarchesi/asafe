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
exports.remove = remove;
const service_1 = require("./constraints/service");
const Results_1 = require("./entities/Results");
const Exceptions_1 = require("./exceptions/Exceptions");
const NotDeleted_1 = require("./exceptions/NotDeleted");
const get_1 = require("./get");
const Service_1 = require("./repositories/Service");
const service_2 = require("./validators/service");
const repository = new Service_1.Repository();
function remove(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = new Results_1.Results();
        // find user
        const userToRemove = yield (0, get_1.get)(Number(user.id));
        if (!userToRemove.getUsers().length) {
            result.addOneValidationFailed(new Exceptions_1.IdNotFoundException());
            return result;
        }
        const userInvalid = (0, service_2.validatedForRemove)(user);
        if (userInvalid.length) {
            result.addValidationsFailed(userInvalid);
        }
        const userConstraintInvalid = yield (0, service_1.constraintForRemove)(user, repository);
        if (userConstraintInvalid.length) {
            result.addValidationsFailed(userConstraintInvalid);
        }
        if (result.getValidationsFailed().length) {
            return result;
        }
        try {
            if (!(yield repository.delete(user))) {
                throw new NotDeleted_1.NotDeleted();
            }
        }
        catch (error) {
            if (error instanceof Error) {
                result.addOneValidationFailed(error);
            }
            else {
                result.addOneValidationFailed(new Exceptions_1.UncaughtError());
            }
        }
        return result;
    });
}
