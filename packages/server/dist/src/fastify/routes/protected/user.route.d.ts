import { RouteOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from "http";
type IParamsGet = {
    Params: {
        id: Number;
    };
};
export type IRoutesOptions = RouteOptions<Server, IncomingMessage, ServerResponse, IParamsGet>;
export declare const userRoutes: Array<IRoutesOptions>;
export {};
