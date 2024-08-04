"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
const service_1 = require("./constraints/service");
const Results_1 = require("./entities/Results");
const Exceptions_1 = require("./exceptions/Exceptions");
const service_2 = require("./validators/service");
const Service_1 = require("./repositories/Service");
const BaseUserException_1 = require("./exceptions/BaseUserException");
const repository = new Service_1.Repository();
function add(user) {
    const result = new Results_1.Results();
    const userInvalid = (0, service_2.validatedForCreate)(user);
    if (userInvalid.length) {
        result.addValidationsFailed(userInvalid);
    }
    const userConstraintInvalid = (0, service_1.constraintForCreate)(user, repository);
    if (userConstraintInvalid.length) {
        result.addValidationsFailed(userConstraintInvalid);
    }
    if (result.getValidationsFailed().length) {
        return result;
    }
    try {
        result.addOneUser(repository.save(user));
    }
    catch (error) {
        if (error instanceof BaseUserException_1.BaseUserException) {
            result.addOneValidationFailed(error);
        }
        else {
            result.addOneValidationFailed(new Exceptions_1.UncaughtError());
        }
    }
    return result;
}
