export declare const schemaUserGetAll: {
    tags: string[];
    description: string;
    summary: string;
    security: {
        "Admin JWT": never[];
    }[];
    response: {
        200: {
            description: string;
            type: string;
            properties: {
                _id: {
                    type: string;
                };
                _email: {
                    type: string;
                };
                _name: {
                    type: string;
                };
                _surname: {
                    type: string;
                };
                _deleted: {
                    type: string;
                };
            };
        };
        401: {};
    };
};
export declare const schemaUserGetOne: {
    tags: string[];
    description: string;
    summary: string;
    security: {
        "Admin JWT": never[];
    }[];
    response: {
        200: {
            description: string;
            type: string;
            properties: {
                _id: {
                    type: string;
                };
                _email: {
                    type: string;
                };
                _name: {
                    type: string;
                };
                _surname: {
                    type: string;
                };
                _deleted: {
                    type: string;
                };
            };
        };
        401: {};
    };
};
export declare const schemaPostUser: {
    tags: string[];
    description: string;
    summary: string;
    security: {
        "Admin JWT": never[];
    }[];
    body: {
        type: string;
        properties: {
            email: {
                type: string;
            };
            password: {
                type: string;
            };
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
                        _email: {
                            type: string;
                        };
                        _name: {
                            type: string;
                        };
                        _surname: {
                            type: string;
                        };
                        _deleted: {
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
export declare const schemaPutUser: {
    tags: string[];
    description: string;
    summary: string;
    security: {
        "Admin JWT": never[];
    }[];
    body: {
        type: string;
        properties: {
            email: {
                type: string;
            };
            password: {
                type: string;
            };
            name: {
                type: string;
            };
            surname: {
                type: string;
            };
        };
        required: never[];
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
                        _email: {
                            type: string;
                        };
                        _name: {
                            type: string;
                        };
                        _surname: {
                            type: string;
                        };
                        _deleted: {
                            type: string;
                        };
                    };
                };
                errors: {
                    type: string;
                    properties: {
                        message: {
                            type: string;
                        };
                        type: {
                            type: string;
                        };
                    };
                };
            };
        };
        401: {};
    };
};
export declare const schemaDeleteUser: {
    tags: string[];
    description: string;
    summary: string;
    security: {
        "Admin JWT": never[];
    }[];
    response: {
        200: {
            description: string;
            type: string;
            properties: {
                errors: {
                    type: string;
                    properties: {
                        message: {
                            type: string;
                        };
                        type: {
                            type: string;
                        };
                    };
                };
            };
            401: {};
        };
    };
};
