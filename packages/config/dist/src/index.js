"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const defaultValues_1 = __importDefault(require("./defaultValues"));
// set ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// load dotenv
const dotEnvConfig = dotenv_1.default.config();
if (dotEnvConfig.error) {
    // error, continue with default
}
exports.default = {
    port: parseInt(process.env.PORT || '', 10) || defaultValues_1.default.port,
    log_enable: (process.env.LOG_ENABLE === 'true'),
    db_uri: process.env.DB_URI || defaultValues_1.default.db_uri,
    jwt: {
        secret: process.env.JWT_SECRET || defaultValues_1.default.jwt.secret,
        algo: process.env.JWT_ALGO || defaultValues_1.default.jwt.algo
    }
};
