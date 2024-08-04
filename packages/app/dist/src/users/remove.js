"use strict";
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
    const result = new Results_1.Results();
    // find user
    const userToRemove = (0, get_1.get)(Number(user.id));
    if (!userToRemove.getUsers().length) {
        result.addOneValidationFailed(new Exceptions_1.IdNotFoundException());
        return result;
    }
    const userInvalid = (0, service_2.validatedForRemove)(user);
    if (userInvalid.length) {
        result.addValidationsFailed(userInvalid);
    }
    const userConstraintInvalid = (0, service_1.constraintForRemove)(user, repository);
    if (userConstraintInvalid.length) {
        result.addValidationsFailed(userConstraintInvalid);
    }
    if (result.getValidationsFailed().length) {
        return result;
    }
    try {
        if (!repository.delete(user)) {
            throw new NotDeleted_1.NotDeleted();
        }
    }
    catch (error) {
        if (error instanceof Error) {
            result.addOneValidationFailed(error);
        }
        else {
            console.log(error);
            result.addOneValidationFailed(new Exceptions_1.UncaughtError());
        }
    }
    return result;
}
