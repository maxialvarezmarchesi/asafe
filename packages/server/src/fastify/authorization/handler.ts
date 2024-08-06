import { ApiAuthService } from '@maxialvarez/asafe-api';
import type { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { server as fastify } from '../server';


fastify.decorateRequest('tokenVerified', '');


export const auth = async (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    const token = request.headers.authorization?.replace("Bearer: ", "");
    let tokenVerified: any = false;

    try {
        tokenVerified = await ApiAuthService.tokenizer.verify(token);
    } catch (error) { }

    if (tokenVerified) {
        request.tokenValidValue = tokenVerified;
        done();
    } else {
        reply.code(403).send();
    }
}

export const authAdmin = async (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    const token = request.headers.authorization?.replace("Bearer: ", "");
    let tokenVerified: any = false;

    try {
        tokenVerified = await ApiAuthService.tokenizer.verify(token);
    } catch (error) { }
console.log(tokenVerified);
    if (tokenVerified?.admin) {
        request.tokenValidValue = tokenVerified;
        done();
    } else {
        reply.code(403).send();
    }
}