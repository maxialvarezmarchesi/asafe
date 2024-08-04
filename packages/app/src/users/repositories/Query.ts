import { User } from "../entities/User";

export class Query {

    private id: Number | null = null;
    private email: String | null = null;
    deleted: Boolean | null = null;

    public getId(): Number | null {
        return this.id;
    }

    public setId(value: Number | null): Query {
        this.id = value;
        return this;
    }

    public getEmail(): String | null {
        return this.email;
    }

    public setEmail(value: String | null): Query {
        this.email = value;
        return this;
    }

    public getDeleted(): Boolean | null {
        return this.deleted;
    }

    public setDeleted(value: Boolean | null): Query {
        this.deleted = value;
        return this;
    }


    match(user: User): Boolean {
        let found = true;
        if (this.getId()) {
            found = found && user.id == this.getId();
        }

        if (this.getEmail()) {
            found = found && user.email.toLowerCase() == this.getEmail()?.toLowerCase();
        }

        if (this.getDeleted() === true || this.getDeleted() === false) {
            found = found && user.isDeleted === this.getDeleted();
        }
        return found;
    }

}