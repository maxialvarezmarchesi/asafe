import { ApiUserService } from '@maxialvarez/asafe-api';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { auth } from '../../authorization/handler';
import { schemaMyAccount, schemaUpdateProfile } from './my.account.schema';

const basePath = "/my-account/";

const doGet = async (request: FastifyRequest, reply: FastifyReply) => {
    const id = request.tokenValidValue._id ?? 0;
    const response = await ApiUserService.get(id);
    return reply.send(response[0]);
}


const updateProfile = async (request: FastifyRequest, reply: FastifyReply) => {
    const id = request.tokenValidValue._id ?? 0;
    const data = request.body;
    return reply.send(await ApiUserService.update(id, data));
}

export const myAccountRoutes: Array<RouteOptions> = [
    {
        method: 'GET',
        url: `${basePath}`,
        handler: doGet,
        preHandler: auth,
        schema: schemaMyAccount
    },
    {
        method: 'PUT',
        url: `${basePath}profile`,
        handler: updateProfile,
        preHandler: auth,
        schema: schemaUpdateProfile
    }
]