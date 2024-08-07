export declare const schemaLoginUser: {
    tags: string[];
    description: string;
    summary: string;
    body: {
        type: string;
        properties: {
            email: {
                type: string;
            };
            password: {
                type: string;
            };
        };
    };
    response: {
        200: {
            description: string;
            type: string;
            properties: {
                token: {
                    type: string;
                };
            };
        };
        401: {};
    };
};
export declare const schemaLoginAdmin: {
    tags: string[];
    description: string;
    summary: string;
    body: {
        type: string;
        properties: {
            email: {
                type: string;
            };
            password: {
                type: string;
            };
        };
    };
    response: {
        200: {
            description: string;
            type: string;
            properties: {
                token: {
                    type: string;
                };
            };
        };
        401: {};
    };
};
