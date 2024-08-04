import { User } from "../entities/User";
import { Query } from "./Query";

export interface IRepository {
    get(query: Query): Array<User>;
    save(user: User): User;
    update(user: User): User;
    delete(user: User): boolean;
}
