import { User } from "../entities/User";
export declare class Query {
    private id;
    private email;
    private passwordEncrypted;
    deleted: Boolean | null;
    getId(): Number | null;
    setId(value: Number | null): Query;
    getEmail(): String | null;
    setEmail(value: String | null): Query;
    getPasswordEncrypted(): String | null;
    setPasswordEncrypted(passwordEncrypted: String): this;
    getDeleted(): Boolean | null;
    setDeleted(value: Boolean | null): Query;
    match(user: User): Boolean;
}
