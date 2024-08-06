"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    constructor() {
        this.id = null;
        this.email = null;
        this.passwordEncrypted = null;
        this.deleted = null;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
        return this;
    }
    getEmail() {
        return this.email;
    }
    setEmail(value) {
        this.email = value;
        return this;
    }
    getPasswordEncrypted() {
        return this.passwordEncrypted;
    }
    setPasswordEncrypted(passwordEncrypted) {
        this.passwordEncrypted = passwordEncrypted;
        return this;
    }
    getDeleted() {
        return this.deleted;
    }
    setDeleted(value) {
        this.deleted = value;
        return this;
    }
    match(user) {
        var _a;
        let found = true;
        if (this.getId()) {
            found = found && user.id == this.getId();
        }
        if (this.getPasswordEncrypted()) {
            found = found && user.password && user.password === this.getPasswordEncrypted();
        }
        if (this.getEmail()) {
            found = found && user.email.toLowerCase() == ((_a = this.getEmail()) === null || _a === void 0 ? void 0 : _a.toLowerCase());
        }
        if (this.getDeleted() === true || this.getDeleted() === false) {
            found = found && user.isDeleted === this.getDeleted();
        }
        return found;
    }
}
exports.Query = Query;
