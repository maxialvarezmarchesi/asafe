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
exports.loginRoutes = void 0;
const asafe_api_1 = require("@maxialvarez/asafe-api");
const basePath = "/";
const doLogin = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    let loginToken = yield asafe_api_1.ApiAuthService.auth(data);
    if (loginToken) {
        // create token
        return reply.code(200).send(loginToken);
    }
    else {
        return reply.code(401).send();
    }
});
const doAdminLogin = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    let loginToken = yield asafe_api_1.ApiAuthService.authAdmin(data);
    if (loginToken) {
        // create token
        return reply.code(200).send(loginToken);
    }
    else {
        return reply.code(401).send();
    }
});
exports.loginRoutes = [
    {
        method: 'POST',
        url: `${basePath}login`,
        handler: doLogin
    },
    {
        method: 'POST',
        url: `${basePath}admin/login`,
        handler: doAdminLogin
    }
];
