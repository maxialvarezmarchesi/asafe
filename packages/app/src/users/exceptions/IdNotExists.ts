import { BaseUserException } from "./BaseUserException";

export class IdNotExists extends BaseUserException {
    message: string = "Id Not Exists";
    name: string = "InvalidUserId.IdNotExists";
}