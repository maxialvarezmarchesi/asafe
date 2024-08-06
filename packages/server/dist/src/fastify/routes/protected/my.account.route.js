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
const handler_1 = require("../../authorization/handler");
const basePath = "/my-account/";
const doGet = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = request.tokenValidValue._id) !== null && _a !== void 0 ? _a : 0;
    return reply.send(yield asafe_api_1.ApiUserService.get(id));
});
const updateProfile = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = request.tokenValidValue._id) !== null && _a !== void 0 ? _a : 0;
    const data = request.body;
    return reply.send(yield asafe_api_1.ApiUserService.update(id, data));
});
exports.myAccountRoutes = [
    {
        method: 'GET',
        url: `${basePath}`,
        handler: doGet,
        preHandler: handler_1.auth
    },
    {
        method: 'PUT',
        url: `${basePath}profile`,
        handler: updateProfile,
        preHandler: handler_1.auth
    }
];
