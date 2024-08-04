import { BaseUserException } from "./BaseUserException";

export class Surname extends BaseUserException {
    message: string = "Invalid Surname";
    name: string = "InvalidUserSurname";
}