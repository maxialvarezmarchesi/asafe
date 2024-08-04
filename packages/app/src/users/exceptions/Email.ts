import { BaseUserException } from "./BaseUserException";

export class Email extends BaseUserException {
    message: string = "Invalid Email";
    name: string = "InvalidUserEmail";
}