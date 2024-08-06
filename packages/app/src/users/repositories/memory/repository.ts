import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";
import { hashPassword } from "@maxialvarez/asafe-utils";

let data: Array<User> = [];

export class Repository implements IRepository {


    async get(query: Query): Promise<User[]> {
        const userFound = data.filter(user => query.match(user));
        return new Promise(resolve => resolve(userFound ?? []));
    }

    nextId(): Number {

        if (!data.length) {
            return 1;
        }
        const ids = data.map((user: User) => parseInt(user?.id?.toString() ?? "1"));

        return Math.max(...ids) + 1;
    }


    async save(user: User): Promise<User> {
        if (!user.id) {
            user.id = this.nextId();
        }
        if (user.password) {
            user.password = await hashPassword(user.password);
        }
        data.push(user);
        return new Promise(resolve => resolve(user));
    }

    async update(user: User): Promise<User> {
        // find user
        const query = new Query();
        query.setId(user.id).setDeleted(false);
        let userToUpdate: User = (await this.get(query))[0];
        const index = data.indexOf(userToUpdate);

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
            userToUpdate.password = await hashPassword(user.password);
        }

        data[index] = userToUpdate;
        return new Promise(resolve => resolve(user));
    }

    async delete(user: User): Promise<boolean> {

        const query = new Query();
        query.setId(user.id).setDeleted(false);
        let userToDelete: User = (await this.get(query))[0];

        const index = data.indexOf(userToDelete);
        if (index != -1) {
            data[index].deleted = true;
            return true;
        }
        return new Promise(resolve => resolve(false));
    }


}