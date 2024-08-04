import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";
import { hashPassword } from "@maxialvarez/asafe-utils"
import { dbService } from "@maxialvarez/asafe-infra";

let data: Array<User> = [];


export class Repository implements IRepository {


    async get(query: Query): Promise<User[]> {
        const results = await dbService.user.findMany({
            where: queryToWhere(query)
        });

        const users: User[] = [];
        results.forEach(userFound => users.push(buildUserFromDBResult(userFound)));
        return new Promise(resolve => resolve(users));
    }

    nextId(): Number {

        if (!data.length) {
            return 1;
        }
        const ids = data.map((user: User) => parseInt(user?.id?.toString() ?? "1"));

        return Math.max(...ids) + 1;
    }


    async save(user: User): Promise<User> {

        if (user.password) {
            user.password = hashPassword(user.password);
        }

        let userCreated = await dbService.user.create({
            data: {
                name: String(user.name),
                surname: String(user.surname),
                password: String(user.password),
                email: String(user.email)
            }
        })

        user.id = userCreated.id;
        return new Promise(resolve => resolve(user));
    }

    async update(user: User): Promise<User> {
        // find user
        const query = new Query();
        query.setId(user.id).setDeleted(false);
        let userToUpdate: User = (await this.get(query))[0];

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
            userToUpdate.password = hashPassword(user.password);
        }

        let updateUser = await dbService.user.update({
            where: {
                id: Number(user.id)
            },
            data: {
                name: String(userToUpdate.name),
                surname: String(userToUpdate.surname),
                password: String(userToUpdate.password),
                email: String(userToUpdate.email)
            }
        })

        return new Promise(resolve => resolve(buildUserFromDBResult(updateUser)));
    }

    async delete(user: User): Promise<boolean> {

        const query = new Query();
        query.setId(user.id).setDeleted(false);
        console.log({
            where: queryToWhere(query)
        });
        let deletedUser = await dbService.user.delete({
            where: queryToWhere(query)
        });

        return new Promise(resolve => resolve((deletedUser?.id || 0) > 0));
    }


}

function queryToWhere(query: Query): any {
    let where: any = {};

    if (query.getId()) {
        where.id = Number(query.getId());
    }

    if (query.getEmail()) {
        where.email = query.getEmail();
    }

    if (query.getDeleted()) {
        where.email = query.getDeleted();
    }
    return where;

}
function buildUserFromDBResult(userFound: { id: number; email: string; name: string | null; surname: string | null; password: string; deleted: boolean; }): User {
    const user: User = new User();
    user.id = userFound.id;
    user.name = userFound.name?.toString() || '';
    user.surname = userFound.surname?.toString() || '';
    user.email = userFound.email?.toString() || '';
    user.deleted = userFound.deleted;
    return user;
}

