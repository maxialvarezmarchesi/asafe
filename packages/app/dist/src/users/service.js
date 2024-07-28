"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const Results_1 = require("./entities/Results");
const Query_1 = require("./repositories/Query");
const Service_1 = require("./repositories/Service");
const service_1 = require("./validators/service");
const Exceptions_1 = require("./validators/exceptions/Exceptions");
exports.service = {
    get: (id) => {
        const repository = new Service_1.Repository();
        const query = new Query_1.Query();
        query.setId(id);
        const results = new Results_1.Results();
        results.addUsers(repository.get(query));
        return results;
    },
    add: (user) => {
        const repository = new Service_1.Repository();
        const validation = (0, service_1.userValidator)(user);
        const result = new Results_1.Results();
        if (!validation.length) {
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
        }
        else {
            result.addalidationsFailed(validation);
        }
        return result;
    }
};
