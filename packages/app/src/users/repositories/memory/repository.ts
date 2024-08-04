import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";

export class Repository implements IRepository {
    private data: Array<User> = [];


    get(query: Query): Array<User> {
        // TODO: add behaviour to find for diferents criterias
        const userFound = this.data.filter(user => query.match(user));
        return userFound ?? [];
    }

    nextId(): Number {

        if (!this.data.length) {
            return 1;
        }
        const ids = this.data.map((user: User) => parseInt(user?.id?.toString() ?? "1"));

        return Math.max(...ids) + 1;
    }


    save(user: User): User {
        if (!user.id) {
            user.id = this.nextId();
        }
        if (user.password) {
            user.password = this.encryptPassword(user.password);
        }
        this.data.push(user);
        return user;
    }

    update(user: User): User {
        // find user
        const query = new Query();
        query.setId(user.id).setDeleted(false);
        let userToUpdate: User = this.get(query)[0];

        if (user.email) {
            userToUpdate.email = user.email;
        }

        if (user.name) {
            userToUpdate.name = user.name;
        }

        if (user.surname) {
            userToUpdate.name = user.surname;
        }

        if (user.password) {
            userToUpdate.name = this.encryptPassword(user.password);
        }

        return user;
    }

    encryptPassword(password: String): String {
        // TODO use Utils to encrypt
        return btoa(password.toString());
    }

    delete(user: User): boolean {
        const index = this.data.indexOf(user, 0);
        if (index != -1) {
            this.data[index].deleted = true;
            return true;
        }
        return false;
    }
}