"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = exports.Entity = void 0;
const User_1 = require("./entities/User");
const Results_1 = require("./entities/Results");
const Query_1 = require("./repositories/Query");
const Service_1 = require("./repositories/Service");
const service_1 = require("./validators/service");
const Exceptions_1 = require("./exceptions/Exceptions");
const service_2 = require("./constraints/service");
exports.Entity = User_1.User;
const repository = new Service_1.Repository();
exports.service = {
    get: (id) => {
        const query = new Query_1.Query();
        query.setId(id).setDeleted(false);
        const results = new Results_1.Results();
        results.addUsers(repository.get(query));
        return results;
    },
    add: (user) => {
        const result = new Results_1.Results();
        const userInvalid = (0, service_1.validatedForCreate)(user);
        if (userInvalid.length) {
            result.addValidationsFailed(userInvalid);
        }
        const userConstraintInvalid = (0, service_2.constraintForCreate)(user, repository);
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
            if (error instanceof Error) {
                result.addOneValidationFailed(error);
            }
            else {
                result.addOneValidationFailed(new Exceptions_1.UncaughtError());
            }
        }
        return result;
    },
    update: (user) => {
        const result = new Results_1.Results();
        const userInvalid = (0, service_1.validatedForUpdate)(user);
        if (userInvalid.length) {
            result.addValidationsFailed(userInvalid);
        }
        const userConstraintInvalid = (0, service_2.constraintForUpdate)(user, repository);
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
    },
    remove: (user) => {
        const result = new Results_1.Results();
        const userInvalid = (0, service_1.validatedForRemove)(user);
        if (userInvalid.length) {
            result.addValidationsFailed(userInvalid);
        }
        const userConstraintInvalid = (0, service_2.constraintForRemove)(user, repository);
        if (userConstraintInvalid.length) {
            result.addValidationsFailed(userConstraintInvalid);
        }
        if (result.getValidationsFailed().length) {
            return result;
        }
        return result;
    }
};
