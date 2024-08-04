"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = void 0;
class Results {
    constructor() {
        this.validationsFailed = [];
        this.users = [];
    }
    addOneValidationFailed(error) {
        this.validationsFailed.push(error);
        return this;
    }
    addValidationsFailed(errors) {
        errors.map(e => this.validationsFailed.push(e));
        return this;
    }
    getValidationsFailed() {
        return this.validationsFailed;
    }
    addOneUser(user) {
        this.users.push(user);
        return this;
    }
    addUsers(users) {
        users.map(u => this.users.push(u));
        return this;
    }
    getUsers() {
        return this.users;
    }
}
exports.Results = Results;
