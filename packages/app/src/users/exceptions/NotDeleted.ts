import { BaseUserException } from "./BaseUserException";

export class NotDeleted implements BaseUserException {
    public readonly message: string = "User Not Deleted";
    public readonly name: string = "UserNotDeleted";

}