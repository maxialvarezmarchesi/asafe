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
exports.initSwagger = void 0;
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const server_1 = require("./server");
const swagger_1 = __importDefault(require("@fastify/swagger"));
const asafe_config_1 = __importDefault(require("@maxialvarez/asafe-config"));
const login_route_1 = require("./routes/public/login.route");
const securityDefinitionsObject = {
    "User JWT": {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Enter JWT token with the `Bearer: ` prefix, e.g. "Bearer:"',
        authorizationUrl: "localhost:" + asafe_config_1.default.port + login_route_1.loginUrl,
    },
    "Admin JWT": {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Enter JWT token with the `Bearer: ` prefix, e.g. "Bearer:"',
        authorizationUrl: "localhost:" + asafe_config_1.default.port + login_route_1.loginAdminUrl,
    },
};
const swaggerOptions = {
    swagger: {
        info: {
            title: "A-Safe Api Doc",
            description: "Doc to use the A-Safe API.",
            version: "1.0.0",
        },
        host: "localhost:" + asafe_config_1.default.port,
        schemes: ["http"],
        consumes: ["application/json"],
        produces: ["application/json"],
        securityDefinitions: securityDefinitionsObject
    }
};
const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
};
const initSwagger = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server_1.server.register(swagger_1.default, swaggerOptions);
    yield server_1.server.register(swagger_ui_1.default, swaggerUiOptions);
});
exports.initSwagger = initSwagger;
