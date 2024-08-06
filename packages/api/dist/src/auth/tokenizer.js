"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizer = void 0;
const fast_jwt_1 = require("fast-jwt");
const asafe_config_1 = __importDefault(require("@maxialvarez/asafe-config"));
const signer = (0, fast_jwt_1.createSigner)({ key: () => __awaiter(void 0, void 0, void 0, function* () { return asafe_config_1.default.jwt.secret; }) });
const verifier = (0, fast_jwt_1.createVerifier)({ key: () => __awaiter(void 0, void 0, void 0, function* () { return asafe_config_1.default.jwt.secret; }) });
exports.tokenizer = {
    encode: (data) => __awaiter(void 0, void 0, void 0, function* () { return signer(data); }),
    decode: (token) => __awaiter(void 0, void 0, void 0, function* () { return new Promise(resolve => resolve(((0, fast_jwt_1.createDecoder)())(token))); }),
    verify: (data) => __awaiter(void 0, void 0, void 0, function* () { return verifier(data); }),
};
