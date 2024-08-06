import server from "./fastify/service";

export default {
    up: () => server() 
};

