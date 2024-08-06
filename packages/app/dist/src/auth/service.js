"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const admin_1 = require("./admin");
const auth_1 = require("./auth");
exports.service = {
    auth: auth_1.auth,
    authAdmin: admin_1.authAdmin
};
