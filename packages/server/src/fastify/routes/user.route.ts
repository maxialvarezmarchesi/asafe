import { ApiUserService } from '@maxialvarez/asafe-api';
import { FastifyReply, FastifyRequest, RouteOptions} from 'fastify';
import { IncomingMessage, Server, ServerResponse } from "http";

const basePath = "/user";

type IParamsGet = { Params: { id: Number } };
const get = (request: FastifyRequest<IParamsGet>, reply: FastifyReply) => {
    const { id } = request.params;
    return reply.send( ApiUserService.get(id));
}

const post = (request: FastifyRequest, reply: FastifyReply) => {
    const data = request.body;
    return reply.send( ApiUserService.add(data));
}

export type IRoutesOptions = RouteOptions<Server, IncomingMessage, ServerResponse, IParamsGet>;
export const userRoutes: Array<IRoutesOptions> = [
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