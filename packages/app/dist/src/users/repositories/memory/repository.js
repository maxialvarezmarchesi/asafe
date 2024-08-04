"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const Query_1 = require("../Query");
let data = [];
class Repository {
    get(query) {
        // TODO: add behaviour to find for diferents criterias
        const userFound = data.filter(user => query.match(user));
        return userFound !== null && userFound !== void 0 ? userFound : [];
    }
    nextId() {
        if (!data.length) {
            return 1;
        }
        const ids = data.map((user) => { var _a, _b; return parseInt((_b = (_a = user === null || user === void 0 ? void 0 : user.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "1"); });
        return Math.max(...ids) + 1;
    }
    save(user) {
        if (!user.id) {
            user.id = this.nextId();
        }
        if (user.password) {
            user.password = this.encryptPassword(user.password);
        }
        data.push(user);
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
            userToUpdate.password = this.encryptPassword(user.password);
        }
        return user;
    }
    delete(user) {
        const query = new Query_1.Query();
        query.setId(user.id).setDeleted(false);
        let userToDelete = this.get(query)[0];
        const index = data.indexOf(userToDelete);
        console.log(index);
        if (index != -1) {
            data[index].deleted = true;
            return true;
        }
        return false;
    }
    encryptPassword(password) {
        // TODO use Utils to encrypt
        return btoa(password.toString());
    }
}
exports.Repository = Repository;
