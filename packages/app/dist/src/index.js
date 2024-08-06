"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSevice = exports.Results = exports.Entity = exports.UserService = void 0;
var service_1 = require("./users/service");
Object.defineProperty(exports, "UserService", { enumerable: true, get: function () { return service_1.service; } });
Object.defineProperty(exports, "Entity", { enumerable: true, get: function () { return service_1.Entity; } });
Object.defineProperty(exports, "Results", { enumerable: true, get: function () { return service_1.Results; } });
var service_2 = require("./auth/service");
Object.defineProperty(exports, "AuthSevice", { enumerable: true, get: function () { return service_2.service; } });
