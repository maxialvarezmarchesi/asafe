import { BaseUserException } from "./BaseUserException";

export class Password extends BaseUserException {
    message: string = "Invalid Password";
    name: string = "InvalidUserPassword";
}