import { User } from "./User";
export declare class Results {
    private validationsFailed;
    private users;
    addOneValidationFailed(error: Error): Results;
    addalidationsFailed(errors: Array<Error>): Results;
    getValidationsFailed(): Array<Error>;
    addOneUser(user: User): Results;
    addUsers(users: Array<User>): Results;
    getUsers(): Array<User>;
}
