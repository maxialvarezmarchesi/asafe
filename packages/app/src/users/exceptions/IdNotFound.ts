import { BaseUserException } from "./BaseUserException";

export class IdNotFound extends BaseUserException {
    message: string = "Id Not Exists";
    name: string = "InvalidUserId.IdNotFound";
}