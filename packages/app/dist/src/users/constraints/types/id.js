"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idExists = void 0;
const Query_1 = require("../../repositories/Query");
const idExists = (id, repository) => {
    const query = new Query_1.Query();
    query.setDeleted(false).setId(Number(id));
    const usersList = repository.get(query);
    // return if userList has length
    return usersList.length > 0;
};
exports.idExists = idExists;
