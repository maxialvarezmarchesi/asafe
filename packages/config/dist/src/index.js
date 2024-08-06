"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const defaultValues_1 = __importDefault(require("./defaultValues"));
// set ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// load dotenv
dotenv_1.default.config();
exports.default = {
    port: parseInt(process.env.PORT || '', 10) || defaultValues_1.default.port,
    log_enable: (process.env.LOG_ENABLE === 'true'),
    db_uri: ((_a = process.env.DATABASE_URL) === null || _a === void 0 ? void 0 : _a.replace("${DB_PASSWORD}", process.env.DB_PASSWORD || '')) || defaultValues_1.default.db_uri,
    jwt: {
        secret: process.env.JWT_SECRET || defaultValues_1.default.jwt.secret,
        algo: process.env.JWT_ALGO || defaultValues_1.default.jwt.algo
    },
    adminCredentials: {
        email: process.env.ADMIN_EMAIL || defaultValues_1.default.adminCredentials.email,
        password: process.env.ADMIN_PASSWORD || defaultValues_1.default.adminCredentials.password,
    }
};
