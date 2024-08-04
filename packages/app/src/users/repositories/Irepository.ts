import { User } from "../entities/User";
import { Query } from "./Query";

export interface IRepository {
    get(query: Query): Promise<Array<User>>;
    save(user: User): Promise<User>;
    update(user: User): Promise<User>;
    delete(user: User): Promise<boolean>;
}
