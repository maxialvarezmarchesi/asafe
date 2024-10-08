import { ApiUserService } from '@maxialvarez/asafe-api';
import { authAdmin } from '../../authorization/handler';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from "http";
import { schemaDeleteUser, schemaPostUser, schemaPutUser, schemaUserGetAll, schemaUserGetOne } from './user.schema';

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
        preHandler: authAdmin,
        schema: schemaUserGetOne
    },
    {
        method: 'GET',
        url: `${basePath}/`,
        handler: doGet,
        preHandler: authAdmin,
        schema: schemaUserGetAll
    },
    {
        method: 'POST',
        url: `${basePath}/`,
        handler: doPost,
        preHandler: authAdmin,
        schema: schemaPostUser
    },
    {
        method: 'PUT',
        url: `${basePath}/:id`,
        handler: doPut,
        preHandler: authAdmin,
        schema: schemaPutUser
    },
    {
        method: 'DELETE',
        url: `${basePath}/:id`,
        handler: doDelete,
        preHandler: authAdmin,
        schema: schemaDeleteUser
    }
];