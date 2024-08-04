"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailExistsInOtherUser = exports.emailExists = void 0;
const Query_1 = require("../../repositories/Query");
const emailExists = (email, repository) => {
    const query = new Query_1.Query();
    console.log(email);
    query.setDeleted(false).setEmail(String(email));
    return repository.get(query).length > 0;
};
exports.emailExists = emailExists;
const emailExistsInOtherUser = (email, id, repository) => {
    const query = new Query_1.Query();
    query.setDeleted(false).setEmail(String(email));
    const usersList = repository.get(query);
    // not exists email in users
    if (!usersList.length) {
        return false;
    }
    /* find id in userList, to exists in other user, must have length */
    return usersList.filter(user => user.id = id).length > 0;
};
exports.emailExistsInOtherUser = emailExistsInOtherUser;
