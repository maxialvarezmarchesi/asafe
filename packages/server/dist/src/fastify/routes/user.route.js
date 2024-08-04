"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const asafe_api_1 = require("@maxialvarez/asafe-api");
const basePath = "/user";
const doGet = (request, reply) => {
    const { id } = request.params;
    return reply.send(asafe_api_1.ApiUserService.get(id));
};
const doPost = (request, reply) => {
    const data = request.body;
    return reply.send(asafe_api_1.ApiUserService.add(data));
};
const doPut = (request, reply) => {
    const { id } = request.params;
    const data = request.body;
    return reply.send(asafe_api_1.ApiUserService.update(id, data));
};
const doDelete = (request, reply) => {
    const { id } = request.params;
    const data = request.body;
    return reply.send(asafe_api_1.ApiUserService.remove(id, data));
};
exports.userRoutes = [
    {
        method: 'GET',
        url: `${basePath}/:id`,
        handler: doGet
    },
    {
        method: 'POST',
        url: `${basePath}/`,
        handler: doPost
    },
    {
        method: 'PUT',
        url: `${basePath}/:id`,
        handler: doPut
    },
    {
        method: 'DELETE',
        url: `${basePath}/:id`,
        handler: doDelete
    }
];
