import fastifySwaggerUi from '@fastify/swagger-ui';
import { server as fastify } from './server';
import fastifySwagger from "@fastify/swagger";
import config from '@maxialvarez/asafe-config';
import { loginAdminUrl, loginUrl } from './routes/public/login.route';

interface SecuritySchemeApiKey {
    type: 'apiKey';
    name: string;
    in: string;
    description?: string;
    authorizationUrl?: string;
}
interface SecurityDefinitionsObject {
    [index: string]: SecuritySchemeApiKey;
}
const securityDefinitionsObject: SecurityDefinitionsObject = {
    "User JWT": {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Enter JWT token with the `Bearer: ` prefix, e.g. "Bearer:"',
        authorizationUrl: "localhost:" + config.port + loginUrl,
    },
    "Admin JWT": {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
        description: 'Enter JWT token with the `Bearer: ` prefix, e.g. "Bearer:"',
        authorizationUrl: "localhost:" + config.port + loginAdminUrl,
    },
};

const swaggerOptions = {
    swagger: {
        info: {
            title: "A-Safe Api Doc",
            description: "Doc to use the A-Safe API.",
            version: "1.0.0",
        },
        host: "localhost:" + config.port,
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




export const initSwagger = async () => {
    await fastify.register(fastifySwagger, swaggerOptions);
    await fastify.register(fastifySwaggerUi, swaggerUiOptions);
};

