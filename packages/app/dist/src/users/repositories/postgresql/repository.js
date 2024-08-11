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
const User_1 = require("../../entities/User");
const Query_1 = require("../Query");
const asafe_utils_1 = require("@maxialvarez/asafe-utils");
const asafe_infra_1 = require("@maxialvarez/asafe-infra");
let data = [];
class Repository {
    get(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield asafe_infra_1.dbService.user.findMany({
                where: queryToWhere(query)
            });
            const users = [];
            results.forEach((userFound) => users.push(buildUserFromDBResult(userFound)));
            return new Promise(resolve => resolve(users));
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
            if (user.password) {
                user.password = yield (0, asafe_utils_1.hashPassword)(user.password);
            }
            let userCreated = yield asafe_infra_1.dbService.user.create({
                data: {
                    name: String(user.name),
                    surname: String(user.surname),
                    password: String(user.password),
                    email: String(user.email)
                }
            });
            user.id = userCreated.id;
            return new Promise(resolve => resolve(user));
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // find user
            const query = new Query_1.Query();
            query.setId(user.id).setDeleted(false);
            let userToUpdate = (yield this.get(query))[0];
            if (user.email) {
                userToUpdate.email = user.email;
            }
            if (user.name) {
                userToUpdate.name = user.name;
            }
            if (user.surname) {
                userToUpdate.surname = user.surname;
            }
            if (user.password) {
                userToUpdate.password = yield (0, asafe_utils_1.hashPassword)(user.password);
            }
            let updateUser = yield asafe_infra_1.dbService.user.update({
                where: {
                    id: Number(user.id)
                },
                data: {
                    name: String(userToUpdate.name),
                    surname: String(userToUpdate.surname),
                    password: String(userToUpdate.password),
                    email: String(userToUpdate.email)
                }
            });
            return new Promise(resolve => resolve(buildUserFromDBResult(updateUser)));
        });
    }
    delete(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = new Query_1.Query();
            query.setId(user.id).setDeleted(false);
            let deletedUser = yield asafe_infra_1.dbService.user.delete({
                where: queryToWhere(query)
            });
            return new Promise(resolve => resolve(((deletedUser === null || deletedUser === void 0 ? void 0 : deletedUser.id) || 0) > 0));
        });
    }
}
exports.Repository = Repository;
function queryToWhere(query) {
    let where = {};
    if (query.getId()) {
        where.id = Number(query.getId());
    }
    if (query.getEmail()) {
        where.email = {
            equals: query.getEmail(),
            mode: 'insensitive'
        };
    }
    if (query.getDeleted()) {
        where.delete = query.getDeleted();
    }
    return where;
}
function buildUserFromDBResult(userFound) {
    var _a, _b, _c;
    const user = new User_1.User();
    user.id = userFound.id;
    user.name = ((_a = userFound.name) === null || _a === void 0 ? void 0 : _a.toString()) || '';
    user.surname = ((_b = userFound.surname) === null || _b === void 0 ? void 0 : _b.toString()) || '';
    user.email = ((_c = userFound.email) === null || _c === void 0 ? void 0 : _c.toString()) || '';
    user.deleted = userFound.deleted;
    user.password = userFound.password;
    return user;
}
