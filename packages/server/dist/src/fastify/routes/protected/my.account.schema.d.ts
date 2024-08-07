export declare const schemaMyAccount: {
    tags: string[];
    description: string;
    summary: string;
    security: {
        "User JWT": never[];
    }[];
    response: {
        200: {
            description: string;
            type: string;
            properties: {
                _id: {
                    type: string;
                };
                _name: {
                    type: string;
                };
                _surname: {
                    type: string;
                };
                _email: {
                    type: string;
                };
            };
        };
        401: {};
    };
};
export declare const schemaUpdateProfile: {
    tags: string[];
    description: string;
    summary: string;
    security: {
        "User JWT": never[];
    }[];
    body: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            surname: {
                type: string;
            };
        };
    };
    response: {
        200: {
            description: string;
            type: string;
            properties: {
                user: {
                    type: string;
                    properties: {
                        _id: {
                            type: string;
                        };
                        _name: {
                            type: string;
                        };
                        _surname: {
                            type: string;
                        };
                        _email: {
                            type: string;
                        };
                    };
                };
                errors: {
                    type: string;
                };
            };
        };
        401: {};
    };
};
