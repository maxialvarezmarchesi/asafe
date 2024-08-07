import { ApiAuthService } from '@maxialvarez/asafe-api';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { schemaLoginAdmin, schemaLoginUser } from './login.schema';

const basePath = "/";
export const loginUrl = `${basePath}login`;
export const loginAdminUrl = `${basePath}admin/login`;

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
        handler: doLogin,
        schema: schemaLoginUser
    },
    {
        method: 'POST',
        url: `${basePath}admin/login`,
        handler: doAdminLogin,
        schema: schemaLoginAdmin
    }
]