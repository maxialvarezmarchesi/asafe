import { ApiUserService } from '@maxialvarez/asafe-api';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from "http";

const basePath = "/user";

type IParamsGet = { Params: { id: Number } };

const doGet = (request: FastifyRequest<IParamsGet>, reply: FastifyReply) => {
    const { id } = request.params;
    return reply.send(ApiUserService.get(id));
}

const doPost = (request: FastifyRequest, reply: FastifyReply) => {

    const data = request.body;
    return reply.send(ApiUserService.add(data));
}

const doPut = (request: FastifyRequest<IParamsGet>, reply: FastifyReply) => {
    const { id } = request.params;
    const data = request.body;
    return reply.send(ApiUserService.update(id, data));
}

const doDelete = (request: FastifyRequest<IParamsGet>, reply: FastifyReply) => {
    const { id } = request.params;
    const data = request.body;
    return reply.send(ApiUserService.remove(id, data));
}

export type IRoutesOptions = RouteOptions<Server, IncomingMessage, ServerResponse, IParamsGet>;
export const userRoutes: Array<IRoutesOptions> = [
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