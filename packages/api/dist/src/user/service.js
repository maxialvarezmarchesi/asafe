"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const asafe_app_1 = require("@maxialvarez/asafe-app");
const presenter_1 = require("./presenter");
const get = (id) => {
    return (0, presenter_1.presentList)(asafe_app_1.UserService.get(id));
};
const add = (data) => {
    const user = new asafe_app_1.Entity();
    user.name = data.name;
    user.surname = data.surname;
    user.email = data.email;
    user.password = data.password;
    return (0, presenter_1.presentTransaction)(asafe_app_1.UserService.add(user));
};
const update = (id, data) => {
    const user = new asafe_app_1.Entity();
    user.id = id;
    user.name = data === null || data === void 0 ? void 0 : data.name;
    user.surname = data === null || data === void 0 ? void 0 : data.surname;
    user.email = data === null || data === void 0 ? void 0 : data.email;
    user.password = data === null || data === void 0 ? void 0 : data.password;
    console.log(user);
    return (0, presenter_1.presentTransaction)(asafe_app_1.UserService.update(user));
};
const remove = (id, data) => {
    const user = new asafe_app_1.Entity();
    user.id = id;
    console.log(user);
    return (0, presenter_1.presentTransaction)(asafe_app_1.UserService.remove(user));
};
exports.service = {
    get,
    add,
    update,
    remove
};
