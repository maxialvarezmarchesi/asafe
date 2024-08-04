import { User } from "./User";

export class Results {
    private validationsFailed: Array<Error> = [];
    private users: Array<User> = [];

    public addOneValidationFailed(error: Error): Results {
        this.validationsFailed.push(error);
        return this;
    }

    public addValidationsFailed(errors: Array<Error>): Results {
        errors.map(e => this.validationsFailed.push(e));
        return this;
    }

    public getValidationsFailed(): Array<Error> {
        return this.validationsFailed;
    }

    public addOneUser(user: User): Results {
        this.users.push(user);
        return this;
    }

    public addUsers(users: Array<User>): Results {
        users.map(u => this.users.push(u));
        return this;
    }

    public getUsers(): Array<User> {
        return this.users;
    }
}