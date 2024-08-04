import { BaseUserException } from "./BaseUserException";
export declare class Uncaught implements BaseUserException {
    readonly message: string;
    readonly name: string;
}
