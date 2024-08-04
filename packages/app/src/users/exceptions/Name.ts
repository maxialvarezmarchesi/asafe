import { BaseUserException } from "./BaseUserException";

export class Name extends BaseUserException {
    message: string = "Invalid Name";
    name: string = "InvalidUserName";
}