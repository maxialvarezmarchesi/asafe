"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.idExists = void 0;
const Query_1 = require("../../repositories/Query");
const idExists = (id, repository) => __awaiter(void 0, void 0, void 0, function* () {
    const query = new Query_1.Query();
    query.setDeleted(false).setId(Number(id));
    const usersList = yield repository.get(query);
    // return if userList has length
    return usersList.length > 0;
});
exports.idExists = idExists;
