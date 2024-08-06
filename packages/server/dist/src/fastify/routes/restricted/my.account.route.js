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
exports.myAccountRoutes = void 0;
const asafe_api_1 = require("@maxialvarez/asafe-api");
const basePath = "/my-account/";
const doGet = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer: ", "");
    try {
        let tokenVerified = yield asafe_api_1.ApiAuthService.tokenizer.verify(token);
        if (tokenVerified) {
            // show user data
            return reply.send(yield asafe_api_1.ApiUserService.get((_b = tokenVerified._id) !== null && _b !== void 0 ? _b : null));
        }
    }
    catch (error) {
        reply.status(401).send();
    }
});
const updateProfile = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer: ", "");
    try {
        let tokenVerified = yield asafe_api_1.ApiAuthService.tokenizer.verify(token);
        if (tokenVerified) {
            // update profile
            const id = tokenVerified._id;
            const data = request.body;
            return reply.send(yield asafe_api_1.ApiUserService.update(id, data));
        }
    }
    catch (error) {
        reply.status(401).send();
    }
});
exports.myAccountRoutes = [
    {
        method: 'GET',
        url: `${basePath}`,
        handler: doGet
    },
    {
        method: 'PUT',
        url: `${basePath}profile`,
        handler: updateProfile
    }
];
