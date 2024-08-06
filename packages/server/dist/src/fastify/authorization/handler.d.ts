import type { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
export declare const auth: (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => Promise<void>;
export declare const authAdmin: (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => Promise<void>;
