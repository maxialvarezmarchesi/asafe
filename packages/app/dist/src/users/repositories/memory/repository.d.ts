import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";
export declare class Repository implements IRepository {
    private data;
    get(query: Query): Array<User>;
    nextId(): Number;
    save(user: User): User;
    update(user: User): User;
    encryptPassword(password: String): String;
    delete(user: User): boolean;
}
