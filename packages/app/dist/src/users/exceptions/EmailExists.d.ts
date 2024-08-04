import { BaseUserException } from "./BaseUserException";
export declare class EmailExists extends BaseUserException {
    message: string;
    name: string;
}
