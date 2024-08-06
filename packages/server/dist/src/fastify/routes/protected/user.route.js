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
exports.userRoutes = void 0;
const asafe_api_1 = require("@maxialvarez/asafe-api");
const handler_1 = require("../../authorization/handler");
const basePath = "/user";
const doGet = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    return reply.send(yield asafe_api_1.ApiUserService.get(id));
});
const doPost = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    return reply.send(yield asafe_api_1.ApiUserService.add(data));
});
const doPut = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const data = request.body;
    return reply.send(yield asafe_api_1.ApiUserService.update(id, data));
});
const doDelete = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const data = request.body;
    return reply.send(yield asafe_api_1.ApiUserService.remove(id, data));
});
exports.userRoutes = [
    {
        method: 'GET',
        url: `${basePath}/:id`,
        handler: doGet,
        preHandler: handler_1.authAdmin
    },
    {
        method: 'POST',
        url: `${basePath}/`,
        handler: doPost,
        preHandler: handler_1.authAdmin
    },
    {
        method: 'PUT',
        url: `${basePath}/:id`,
        handler: doPut,
        preHandler: handler_1.authAdmin
    },
    {
        method: 'DELETE',
        url: `${basePath}/:id`,
        handler: doDelete,
        preHandler: handler_1.authAdmin
    }
];
