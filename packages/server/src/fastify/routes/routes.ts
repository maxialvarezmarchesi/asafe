import { IRoutesOptions, userRoutes } from "./protected/user.route";
import { loginRoutes } from "./public/login.route";
import { myAccountRoutes } from "./protected/my.account.route";
import { healthcheck } from "./public/healthcheck.route";

export const PublicRoutes: Array<Array<IRoutesOptions>> = [
    loginRoutes,
    healthcheck
];

export const ProtectedRoutes: Array<Array<IRoutesOptions>> = [
    userRoutes,
    myAccountRoutes
];