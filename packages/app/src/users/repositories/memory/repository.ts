import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";

let data: Array<User> = [];
    
export class Repository implements IRepository {
   

    get(query: Query): Array<User> {
        // TODO: add behaviour to find for diferents criterias
        const userFound = data.filter(user => query.match(user));
        return userFound ?? [];
    }

    nextId(): Number {

        if (!data.length) {
            return 1;
        }
        const ids = data.map((user: User) => parseInt(user?.id?.toString() ?? "1"));

        return Math.max(...ids) + 1;
    }


    save(user: User): User {
        if (!user.id) {
            user.id = this.nextId();
        }
        if (user.password) {
            user.password = this.encryptPassword(user.password);
        }
        data.push(user);
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
            userToUpdate.password = this.encryptPassword(user.password);
        }

        return user;
    }

    delete(user: User): boolean {

        const query = new Query();
        query.setId(user.id).setDeleted(false);
        let userToDelete: User = this.get(query)[0];
        
        const index = data.indexOf(userToDelete);
        console.log(index);
        if (index != -1) {
            data[index].deleted = true;
            return true;
        }
        return false;
    }

    encryptPassword(password: String): String {
        // TODO use Utils to encrypt
        return btoa(password.toString());
    }
}