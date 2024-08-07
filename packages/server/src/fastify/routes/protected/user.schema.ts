const responseGetUser =
{
    "_id": { type: "number" },
    "_email": { type: "string" },
    "_name": { type: "string" },
    "_surname": { type: "string" },
    "_deleted": { type: "boolean" }
};
const responseGeAlltUser =
{
    type: "array",
    properties: responseGetUser
};
const responseErrors =

{
    "message": { type: "string" },
    "type": { type: "string" }
}
    ;

const responseTransaction = {
    user: { type: "object", properties: responseGetUser },
    errors: { type: "array" },
}

export const schemaUserGetAll = {
    tags: ["Protected Admin User"],
    description: 'As logged in admin get all users data ',
    summary: 'Response a JSON with the users data',
    security: [{ "Admin JWT": [] }],
    response: {
        200: {
            description: 'Successful response',
            type: "array",
            properties: responseGetUser
        },
        401: {
        }
    }
}

export const schemaUserGetOne = {
    tags: ["Protected Admin User"],
    description: 'As logged in admin get one user data',
    summary: 'Response a JSON with the users data',
    security: [{ "Admin JWT": [] }],
    response: {
        200: {
            description: 'Successful response',
            type: "array",
            properties: responseGetUser
        },
        401: {
        }
    }
};


export const schemaPostUser = {
    tags: ["Protected Admin User"],
    description: 'As logged in admin create a new user',
    summary: 'Response a JSON with the new user data or errors',
    security: [{ "Admin JWT": [] }],
    body: {
        type: 'object',
        properties: {
            email: { type: 'string' },
            password: { type: 'string' },
            name: { type: 'string' },
            surname: { type: 'string' },
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: "object",
            properties: responseTransaction
        },
        401: {
        }
    }
}

export const schemaPutUser = {
    tags: ["Protected Admin User"],
    description: 'As logged in admin update user',
    summary: 'Response a JSON with the user data updated or errors',
    security: [{ "Admin JWT": [] }],
    body: {
        type: 'object',
        properties: {
            email: { type: 'string' },
            password: { type: 'string' },
            name: { type: 'string' },
            surname: { type: 'string' },
        },
        required: []
    },
    response: {
        200: {
            description: 'Successful response',
            type: "object",
            properties: {
                "user": { type: "object", properties: responseGetUser},
                "errors": { type: 'array', properties: responseErrors }
            },
        },
        401: {
        }
    }
}

export const schemaDeleteUser = {
    tags: ["Protected Admin User"],
    description: 'As logged in admin delete one user',
    summary: 'Response a JSON with errors. If errors is empty, the process the user was deleted',
    security: [{ "Admin JWT": [] }],
    response: {
        200: {
            description: 'Successful response',
            type: "object",
            properties: {
                "errors": { type: 'array', properties: responseErrors }
            },
            401: {
            }
        }
    }
}