"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const asafe_config_1 = __importDefault(require("@maxialvarez/asafe-config"));
const fastify_1 = __importDefault(require("fastify"));
exports.server = (0, fastify_1.default)({
    logger: asafe_config_1.default.log_enable
});
