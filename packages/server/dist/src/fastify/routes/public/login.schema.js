"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaLoginAdmin = exports.schemaLoginUser = void 0;
const tokenResponse = {
    token: { type: "string" }
};
const bodyParams = {
    email: { type: "string" },
    password: { type: "string" }
};
exports.schemaLoginUser = {
    tags: ["Login"],
    description: 'Get a JWT for login as user',
    summary: 'Response a JWT to used in header to request protected user endpoints',
    body: {
        type: 'object',
        properties: bodyParams
    },
    response: {
        200: {
            description: 'Successful response',
            type: "object",
            properties: tokenResponse,
        },
        401: {}
    }
};
exports.schemaLoginAdmin = {
    tags: ["Login"],
    description: 'Get a JWT for login as admin',
    summary: 'Response a JWT to used in header to request protected admin endpoints',
    body: {
        type: 'object',
        properties: bodyParams
    },
    response: {
        200: {
            description: 'Successful response',
            type: "object",
            properties: tokenResponse,
        },
        401: {}
    }
};
