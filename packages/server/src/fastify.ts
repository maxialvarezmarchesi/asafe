import Config from "@maxialvarez/asafe-config";
import Fastify, { FastifyInstance } from "fastify";


const fastify: FastifyInstance = Fastify({
    logger: true //Config.log_enable
});



export default () => {
   
    fastify.listen({ port: 9909 /*Config.port*/ }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });

};