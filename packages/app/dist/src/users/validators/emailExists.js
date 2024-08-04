"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailExists = void 0;
const Query_1 = require("../repositories/Query");
const emailExists = (email, repository) => {
    const query = new Query_1.Query();
    query.setDeleted(false).setEmail(String(email));
    return repository.get(query).length > 0;
};
exports.emailExists = emailExists;
