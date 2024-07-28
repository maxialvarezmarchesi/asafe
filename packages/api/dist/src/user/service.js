"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const asafe_app_1 = require("@maxialvarez/asafe-app");
const asafe_app_2 = require("@maxialvarez/asafe-app");
const presenter_1 = require("./presenter");
const get = (id) => {
    return (0, presenter_1.present)(asafe_app_1.UserService.get(id));
};
const add = (data) => {
    const user = new asafe_app_2.User;
    user.id = data.id;
    user.name = data.name;
    user.surname = data.surname;
    user.email = data.email;
    user.password = data.password;
    return ["ok"];
    return (0, presenter_1.present)(asafe_app_1.UserService.add(user));
};
exports.service = {
    get,
    add
};
