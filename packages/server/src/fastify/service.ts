import Config from "@maxialvarez/asafe-config";
import { PublicRoutes, ProtectedRoutes } from "./routes/routes";
import { server } from "./server";



export default () => {

    server.listen({ port: Config.port }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });


    PublicRoutes.forEach(routePath => {
        routePath.forEach(route => {
            console.log("set public route", route);
            server.route({ ...route });
        })
    });


    ProtectedRoutes.forEach(routePath => {
        routePath.forEach(route => {
            console.log("set protected route", route);
            server.route({ ...route });
        })
    });


};