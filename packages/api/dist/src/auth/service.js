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
exports.service = void 0;
const asafe_app_1 = require("@maxialvarez/asafe-app");
const presenter_1 = require("./presenter");
const tokenizer_1 = require("./tokenizer");
const auth = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let result = yield asafe_app_1.AuthSevice.auth((_a = data.email) !== null && _a !== void 0 ? _a : '', (_b = data.password) !== null && _b !== void 0 ? _b : '');
    const user = (_c = result.getUsers()[0]) !== null && _c !== void 0 ? _c : null;
    if (user) {
        try {
            const token = yield tokenizer_1.tokenizer.encode((0, presenter_1.presentAuth)(result));
            return { "token": token };
        }
        catch (error) { }
    }
    return null;
});
const authAdmin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let result = yield asafe_app_1.AuthSevice.authAdmin((_a = data.email) !== null && _a !== void 0 ? _a : '', (_b = data.password) !== null && _b !== void 0 ? _b : '');
    if (result) {
        try {
            const token = yield tokenizer_1.tokenizer.encode({ "admin": true });
            return { "token": token };
        }
        catch (error) { }
    }
    return null;
});
exports.service = {
    auth,
    authAdmin,
    tokenizer: tokenizer_1.tokenizer
};
