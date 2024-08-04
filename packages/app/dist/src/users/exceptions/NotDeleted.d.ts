import { BaseUserException } from "./BaseUserException";
export declare class NotDeleted implements BaseUserException {
    readonly message: string;
    readonly name: string;
}
