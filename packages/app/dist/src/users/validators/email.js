"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.email = void 0;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = (email) => { var _a; return emailRegex.test((_a = email === null || email === void 0 ? void 0 : email.toString()) !== null && _a !== void 0 ? _a : ''); };
exports.email = email;
