"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("@maxialvarez/asafe-server"));
const main = () => {
    console.log("starting server...");
    src_1.default.up();
};
main();
