import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";
export declare class Repository implements IRepository {
    get(query: Query): Array<User>;
    nextId(): Number;
    save(user: User): User;
    update(user: User): User;
    delete(user: User): boolean;
    encryptPassword(password: String): String;
}
