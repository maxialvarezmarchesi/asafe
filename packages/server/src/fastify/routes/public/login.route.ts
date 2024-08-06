import { ApiAuthService } from '@maxialvarez/asafe-api';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

const basePath = "/";

const doLogin = async (request: FastifyRequest, reply: FastifyReply) => {
    const data = request.body;
    let loginToken = await ApiAuthService.auth(data);

    if (loginToken) {
        // create token
        return reply.code(200).send(loginToken);
    } else {
        return reply.code(401).send();
    }
}

const doAdminLogin = async (request: FastifyRequest, reply: FastifyReply) => {
    const data = request.body;
    let loginToken = await ApiAuthService.authAdmin(data);

    if (loginToken) {
        // create token
        return reply.code(200).send(loginToken);
    } else {
        return reply.code(401).send();
    }
}


export const loginRoutes: Array<RouteOptions> = [
    {
        method: 'POST',
        url: `${basePath}login`,
        handler: doLogin
    },
    {
        method: 'POST',
        url: `${basePath}admin/login`,
        handler: doAdminLogin
    }
]