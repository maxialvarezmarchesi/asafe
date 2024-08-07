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
exports.authAdmin = exports.auth = void 0;
const asafe_api_1 = require("@maxialvarez/asafe-api");
const server_1 = require("../server");
server_1.server.decorateRequest('tokenVerified', '');
const auth = (request, reply, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer: ", "");
    let tokenVerified = false;
    try {
        tokenVerified = yield asafe_api_1.ApiAuthService.tokenizer.verify(token);
    }
    catch (error) { }
    if (tokenVerified) {
        request.tokenValidValue = tokenVerified;
        done();
    }
    else {
        reply.code(401).send();
    }
});
exports.auth = auth;
const authAdmin = (request, reply, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer: ", "");
    let tokenVerified = false;
    try {
        tokenVerified = yield asafe_api_1.ApiAuthService.tokenizer.verify(token);
    }
    catch (error) { }
    if (tokenVerified === null || tokenVerified === void 0 ? void 0 : tokenVerified.admin) {
        request.tokenValidValue = tokenVerified;
        done();
    }
    else {
        reply.code(401).send();
    }
});
exports.authAdmin = authAdmin;
