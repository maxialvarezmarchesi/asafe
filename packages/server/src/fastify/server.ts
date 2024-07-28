import Config from "@maxialvarez/asafe-config";
import Fastify, { FastifyInstance } from "fastify";
import { routes } from "./routes/routes";

const server: FastifyInstance = Fastify({
    logger: Config.log_enable
});



export default () => {

    server.listen({ port: Config.port }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });


    routes.forEach(routePath => {
        routePath.forEach(route => {
            console.log("set route", route);
            server.route({ ...route });
        })
    });



};