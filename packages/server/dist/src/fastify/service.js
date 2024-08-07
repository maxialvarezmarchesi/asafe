"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asafe_config_1 = __importDefault(require("@maxialvarez/asafe-config"));
const routes_1 = require("./routes/routes");
const server_1 = require("./server");
const swagger_1 = require("./swagger");
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, swagger_1.initSwagger)();
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
    yield server_1.server.ready();
    server_1.server.swagger();
});
