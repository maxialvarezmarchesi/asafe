"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asafe_server_1 = __importDefault(require("@maxialvarez/asafe-server"));
const main = () => {
    console.log("starting server...");
    asafe_server_1.default.up();
};
main();
