"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const Query_1 = require("../Query");
class Repository {
    constructor() {
        this.data = [];
    }
    get(query) {
        // TODO: add behaviour to find for diferents criterias
        const userFound = this.data.filter(user => query.match(user));
        return userFound !== null && userFound !== void 0 ? userFound : [];
    }
    nextId() {
        if (!this.data.length) {
            return 1;
        }
        const ids = this.data.map((user) => { var _a, _b; return parseInt((_b = (_a = user === null || user === void 0 ? void 0 : user.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "1"); });
        return Math.max(...ids) + 1;
    }
    save(user) {
        if (!user.id) {
            user.id = this.nextId();
        }
        if (user.password) {
            user.password = this.encryptPassword(user.password);
        }
        this.data.push(user);
        return user;
    }
    update(user) {
        // find user
        const query = new Query_1.Query();
        query.setId(user.id).setDeleted(false);
        let userToUpdate = this.get(query)[0];
        if (user.email) {
            userToUpdate.email = user.email;
        }
        if (user.name) {
            userToUpdate.name = user.name;
        }
        if (user.surname) {
            userToUpdate.name = user.surname;
        }
        if (user.password) {
            userToUpdate.name = this.encryptPassword(user.password);
        }
        return user;
    }
    encryptPassword(password) {
        // TODO use Utils to encrypt
        return btoa(password.toString());
    }
    delete(user) {
        const index = this.data.indexOf(user, 0);
        if (index != -1) {
            this.data[index].deleted = true;
            return true;
        }
        return false;
    }
}
exports.Repository = Repository;
