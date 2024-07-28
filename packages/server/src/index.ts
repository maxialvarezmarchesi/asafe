import server from "./fastify/server";

export default {
    up: () => server() 
};

