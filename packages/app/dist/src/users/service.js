"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = exports.Results = exports.Entity = void 0;
var User_1 = require("./entities/User");
Object.defineProperty(exports, "Entity", { enumerable: true, get: function () { return User_1.User; } });
var Results_1 = require("./entities/Results");
Object.defineProperty(exports, "Results", { enumerable: true, get: function () { return Results_1.Results; } });
const get_1 = require("./get");
const add_1 = require("./add");
const update_1 = require("./update");
const remove_1 = require("./remove");
const Query_1 = require("./repositories/Query");
exports.service = {
    Query: Query_1.Query,
    getByQuery: get_1.getByQuery,
    get: get_1.get,
    add: add_1.add,
    update: update_1.update,
    remove: remove_1.remove
};
