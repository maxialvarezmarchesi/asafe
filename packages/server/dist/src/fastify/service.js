"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asafe_config_1 = __importDefault(require("@maxialvarez/asafe-config"));
const routes_1 = require("./routes/routes");
const server_1 = require("./server");
exports.default = () => {
    server_1.server.listen({ port: asafe_config_1.default.port }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
    routes_1.PublicRoutes.forEach(routePath => {
        routePath.forEach(route => {
            console.log("set public route", route);
            server_1.server.route(Object.assign({}, route));
        });
    });
    routes_1.ProtectedRoutes.forEach(routePath => {
        routePath.forEach(route => {
            console.log("set protected route", route);
            server_1.server.route(Object.assign({}, route));
        });
    });
};
