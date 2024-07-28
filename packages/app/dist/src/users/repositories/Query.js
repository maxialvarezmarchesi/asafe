"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    constructor() {
        this.id = null;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
        return this;
    }
}
exports.Query = Query;
