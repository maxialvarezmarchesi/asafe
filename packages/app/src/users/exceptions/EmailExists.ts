import { BaseUserException } from "./BaseUserException";

export class EmailExists extends BaseUserException {
    message: string = "Email Exists";
    name: string = "InvalidUserEmail.EmailExists";
}