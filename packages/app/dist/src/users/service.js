"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = exports.Entity = void 0;
const User_1 = require("./entities/User");
const Service_1 = require("./repositories/Service");
const get_1 = require("./get");
const add_1 = require("./add");
const update_1 = require("./update");
const remove_1 = require("./remove");
exports.Entity = User_1.User;
const repository = new Service_1.Repository();
exports.service = {
    get: get_1.get,
    add: add_1.add,
    update: update_1.update,
    remove: remove_1.remove
};
