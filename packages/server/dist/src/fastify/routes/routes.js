"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedRoutes = exports.PublicRoutes = void 0;
const user_route_1 = require("./protected/user.route");
const login_route_1 = require("./public/login.route");
const my_account_route_1 = require("./protected/my.account.route");
const healthcheck_route_1 = require("./public/healthcheck.route");
exports.PublicRoutes = [
    login_route_1.loginRoutes,
    healthcheck_route_1.healthcheck
];
exports.ProtectedRoutes = [
    user_route_1.userRoutes,
    my_account_route_1.myAccountRoutes
];
