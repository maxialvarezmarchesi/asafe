"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_route_1 = require("./user.route");
const healthcheck_route_1 = require("./healthcheck.route");
exports.routes = [
    user_route_1.userRoutes,
    healthcheck_route_1.healthcheck
];
