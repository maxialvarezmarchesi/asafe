const userResponse = {
    _id: { type: "number" },
    _name: { type: "string" },
    _surname: { type: "string" },
    _email: { type: "string" }
};

const userUpdateResponse = {
    user: { type: "object",
        properties: userResponse
     },
    errors: { type: "array" }
};



export const schemaMyAccount = {
    tags: ["Protected MyAccount"],
    description: 'Access data for the logged user',
    summary: 'Response a JSON with the user data',
    security: [{ "User JWT": [] }],
    response: {
        200: {
            description: 'Successful response',
            type: "object",
            properties: userResponse,
        },
        401: {
        }
    }
};
export const schemaUpdateProfile = {
    tags: ["Protected MyAccount"],
    description: 'Update user name and surname',
    summary: 'Response a JSON with the user name and surname',
    security: [{ "User JWT": [] }],
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            surname: { type: 'string' },
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: "object",
            properties: userUpdateResponse,
        },
        401: {
        }
    }
}