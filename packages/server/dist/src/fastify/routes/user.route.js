"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const asafe_api_1 = require("@maxialvarez/asafe-api");
const basePath = "/user";
const get = (request, reply) => {
    const { id } = request.params;
    return reply.send(asafe_api_1.ApiUserService.get(id));
};
const post = (request, reply) => {
    const data = request.body;
    return reply.send(asafe_api_1.ApiUserService.add(data));
};
exports.userRoutes = [
    {
        method: 'GET',
        url: `${basePath}/:id`,
        handler: get
    },
    {
        method: 'POST',
        url: `${basePath}/`,
        handler: post
    }
];
