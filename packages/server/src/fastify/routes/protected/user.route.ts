import { ApiUserService } from '@maxialvarez/asafe-api';
import { authAdmin } from '../../authorization/handler';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from "http";

const basePath = "/user";

type IParamsGet = { Params: { id: Number } };

const doGet = async (request: FastifyRequest<IParamsGet>, reply: FastifyReply) => {
    const { id } = request.params;
    return reply.send(await ApiUserService.get(id));
}

const doPost = async (request: FastifyRequest, reply: FastifyReply) => {
    const data = request.body;
    return reply.send(await ApiUserService.add(data));
}

const doPut = async (request: FastifyRequest<IParamsGet>, reply: FastifyReply) => {
    const { id } = request.params;
    const data = request.body;
    return reply.send(await ApiUserService.update(id, data));
}

const doDelete = async (request: FastifyRequest<IParamsGet>, reply: FastifyReply) => {
    const { id } = request.params;
    const data = request.body;
    return reply.send(await ApiUserService.remove(id, data));
}

export type IRoutesOptions = RouteOptions<Server, IncomingMessage, ServerResponse, IParamsGet>;
export const userRoutes: Array<IRoutesOptions> = [
    {
        method: 'GET',
        url: `${basePath}/:id`,
        handler: doGet,
        preHandler: authAdmin
    },
    {
        method: 'POST',
        url: `${basePath}/`,
        handler: doPost,
        preHandler: authAdmin
    },
    {
        method: 'PUT',
        url: `${basePath}/:id`,
        handler: doPut,
        preHandler: authAdmin
    },
    {
        method: 'DELETE',
        url: `${basePath}/:id`,
        handler: doDelete,
        preHandler: authAdmin
    }
];