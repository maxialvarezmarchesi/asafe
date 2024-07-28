import { IRoutesOptions, userRoutes } from "./user.route";
import { healthcheck } from "./healthcheck.route";

export const routes: Array<Array<IRoutesOptions>> = [
    userRoutes,
    healthcheck
];
