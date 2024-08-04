import { BaseUserException } from "./BaseUserException";

export class Uncaught implements BaseUserException {
    public readonly message: string = "Uncaught User Error";
    public readonly name: string = "UncaughtUserError";

}