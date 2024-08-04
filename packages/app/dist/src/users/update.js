"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = update;
const service_1 = require("./constraints/service");
const Results_1 = require("./entities/Results");
const Exceptions_1 = require("./exceptions/Exceptions");
const get_1 = require("./get");
const Service_1 = require("./repositories/Service");
const service_2 = require("./validators/service");
const repository = new Service_1.Repository();
function update(user) {
    const result = new Results_1.Results();
    // find user
    const userToUpdate = (0, get_1.get)(Number(user.id));
    if (!userToUpdate.getUsers().length) {
        result.addOneValidationFailed(new Exceptions_1.IdNotFoundException());
        return result;
    }
    const userInvalid = (0, service_2.validatedForUpdate)(user);
    if (userInvalid.length) {
        result.addValidationsFailed(userInvalid);
    }
    const userConstraintInvalid = (0, service_1.constraintForUpdate)(user, repository);
    if (userConstraintInvalid.length) {
        result.addValidationsFailed(userConstraintInvalid);
    }
    if (result.getValidationsFailed().length) {
        return result;
    }
    try {
        result.addOneUser(repository.update(user));
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
}
