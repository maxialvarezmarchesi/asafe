"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuthService = exports.ApiUserService = void 0;
var service_1 = require("./user/service");
Object.defineProperty(exports, "ApiUserService", { enumerable: true, get: function () { return service_1.service; } });
var service_2 = require("./auth/service");
Object.defineProperty(exports, "ApiAuthService", { enumerable: true, get: function () { return service_2.service; } });
