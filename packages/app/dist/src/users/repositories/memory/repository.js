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
exports.Repository = void 0;
const Query_1 = require("../Query");
const asafe_utils_1 = require("@maxialvarez/asafe-utils");
let data = [];
class Repository {
    get(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = data.filter(user => query.match(user));
            return new Promise(resolve => resolve(userFound !== null && userFound !== void 0 ? userFound : []));
        });
    }
    nextId() {
        if (!data.length) {
            return 1;
        }
        const ids = data.map((user) => { var _a, _b; return parseInt((_b = (_a = user === null || user === void 0 ? void 0 : user.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "1"); });
        return Math.max(...ids) + 1;
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!user.id) {
                user.id = this.nextId();
            }
            if (user.password) {
                user.password = (0, asafe_utils_1.hashPassword)(user.password);
            }
            data.push(user);
            return new Promise(resolve => resolve(user));
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // find user
            const query = new Query_1.Query();
            query.setId(user.id).setDeleted(false);
            let userToUpdate = (yield this.get(query))[0];
            const index = data.indexOf(userToUpdate);
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
                userToUpdate.password = (0, asafe_utils_1.hashPassword)(user.password);
            }
            data[index] = userToUpdate;
            return new Promise(resolve => resolve(user));
        });
    }
    delete(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = new Query_1.Query();
            query.setId(user.id).setDeleted(false);
            let userToDelete = (yield this.get(query))[0];
            const index = data.indexOf(userToDelete);
            console.log(index);
            if (index != -1) {
                data[index].deleted = true;
                return true;
            }
            return new Promise(resolve => resolve(false));
        });
    }
}
exports.Repository = Repository;
