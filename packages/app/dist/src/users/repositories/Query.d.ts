import { User } from "../entities/User";
export declare class Query {
    private id;
    private email;
    deleted: Boolean | null;
    getId(): Number | null;
    setId(value: Number | null): Query;
    getEmail(): String | null;
    setEmail(value: String | null): Query;
    getDeleted(): Boolean | null;
    setDeleted(value: Boolean | null): Query;
    match(user: User): Boolean;
}
