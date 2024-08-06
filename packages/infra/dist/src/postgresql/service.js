"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const client_1 = require("@prisma/client");
const asafe_config_1 = __importDefault(require("@maxialvarez/asafe-config"));
exports.db = new client_1.PrismaClient({
    datasourceUrl: asafe_config_1.default.db_uri,
    log: ['query', 'info']
});
