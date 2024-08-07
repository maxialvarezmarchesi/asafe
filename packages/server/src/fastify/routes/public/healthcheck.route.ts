
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { schema } from './healthcheck.schema';

const basePath = "/";

const get = (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ date: new Date(), status: 'online' });
}

export const healthcheck: Array<RouteOptions> = [
    {
        method: 'GET',
        url: `${basePath}healthcheck`,
        handler: get,
        schema: schema
    }
];
