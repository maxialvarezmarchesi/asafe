import Config from "@maxialvarez/asafe-config";
import Fastify, { FastifyInstance } from "fastify";


export const server: FastifyInstance = Fastify({
    logger: Config.log_enable
});
