import fastify from 'fastify';

declare module 'fastify' {
    export interface FastifyRequest {
        tokenValidValue: any;
    }
}

export const up: () => void;
