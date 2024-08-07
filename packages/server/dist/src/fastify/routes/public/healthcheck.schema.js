"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
exports.schema = {
    tags: ["Healtcheck"],
    description: 'Check server status',
    summary: 'Response a JSON with the current date and the server status',
    response: {
        200: {
            description: 'Successful response',
            type: "object",
            properties: {
                date: { type: "string" },
                status: { type: "string" }
            },
        },
    }
};
