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
exports.service = void 0;
const asafe_app_1 = require("@maxialvarez/asafe-app");
const presenter_1 = require("./presenter");
const get = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, presenter_1.presentList)(yield asafe_app_1.UserService.get(id));
});
const add = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new asafe_app_1.Entity();
    user.name = data.name;
    user.surname = data.surname;
    user.email = data.email;
    user.password = data.password;
    let result = yield asafe_app_1.UserService.add(user);
    return (0, presenter_1.presentTransaction)(result);
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new asafe_app_1.Entity();
    user.id = id;
    user.name = data === null || data === void 0 ? void 0 : data.name;
    user.surname = data === null || data === void 0 ? void 0 : data.surname;
    user.email = data === null || data === void 0 ? void 0 : data.email;
    user.password = data === null || data === void 0 ? void 0 : data.password;
    let result = yield asafe_app_1.UserService.update(user);
    return (0, presenter_1.presentTransaction)(result);
});
const remove = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new asafe_app_1.Entity();
    user.id = id;
    const result = yield asafe_app_1.UserService.remove(user);
    return (0, presenter_1.presentTransaction)(result);
});
exports.service = {
    get,
    add,
    update,
    remove
};
