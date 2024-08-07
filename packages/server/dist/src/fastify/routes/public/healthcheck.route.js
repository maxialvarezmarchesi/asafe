"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthcheck = void 0;
const healthcheck_schema_1 = require("./healthcheck.schema");
const basePath = "/";
const get = (request, reply) => {
    return reply.send({ date: new Date(), status: 'online' });
};
exports.healthcheck = [
    {
        method: 'GET',
        url: `${basePath}healthcheck`,
        handler: get,
        schema: healthcheck_schema_1.schema
    }
];
