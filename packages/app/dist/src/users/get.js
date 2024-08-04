"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
const Results_1 = require("./entities/Results");
const Query_1 = require("./repositories/Query");
const Service_1 = require("./repositories/Service");
const repository = new Service_1.Repository();
function get(id) {
    const query = new Query_1.Query();
    query.setId(id).setDeleted(false);
    const results = new Results_1.Results();
    results.addUsers(repository.get(query));
    return results;
}
