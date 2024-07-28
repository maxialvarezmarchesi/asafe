import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";
export declare class Repository implements IRepository {
    private data;
    get(query: Query): Array<User>;
    save(user: User): User;
    delete(user: User): boolean;
}
