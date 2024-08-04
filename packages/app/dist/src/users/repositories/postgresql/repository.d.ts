import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";
export declare class Repository implements IRepository {
    get(query: Query): Promise<User[]>;
    nextId(): Number;
    save(user: User): Promise<User>;
    update(user: User): Promise<User>;
    delete(user: User): Promise<boolean>;
}
