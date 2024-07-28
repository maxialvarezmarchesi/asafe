"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor() {
        this.data = [];
    }
    get(query) {
        // TODO: extend behaviour to find for diferent criterias
        //const userFound = this.data.filter(user => user.id = query.getId());
        return [];
    }
    save(user) {
        this.data.push(user);
        return user;
    }
    delete(user) {
        const index = this.data.indexOf(user, 0);
        if (index) {
            delete this.data[index];
            return true;
        }
        return false;
    }
}
exports.Repository = Repository;
