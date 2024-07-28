"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asafe_config_1 = __importDefault(require("@maxialvarez/asafe-config"));
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes/routes");
const server = (0, fastify_1.default)({
    logger: asafe_config_1.default.log_enable
});
exports.default = () => {
    server.listen({ port: asafe_config_1.default.port }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
    routes_1.routes.forEach(routePath => {
        routePath.forEach(route => {
            console.log("set route", route);
            server.route(Object.assign({}, route));
        });
    });
};
