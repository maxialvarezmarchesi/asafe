import { BaseUserException } from "./BaseUserException";

export class Id implements BaseUserException {
    public readonly message: string = "Invalid Id";
    public readonly name: string = "InvalidUserId";


}