import { User } from "../../entities/User";
import { IRepository } from "../Irepository";
import { Query } from "../Query";

export class Repository implements IRepository {
    private data: Array<User> = [];

    get(query: Query): Array<User> {
        // TODO: add behaviour to find for diferent criterias
        //const userFound = this.data.filter(user => user.id = query.getId());
        return [];
    }
    
    save(user: User): User {
        this.data.push(user);
        return user;
    }
    
    update(user: User): User {
        throw new Error("Method not implemented.");
    }

    delete(user: User): boolean {
        const index = this.data.indexOf(user, 0);
        if(index){
            delete this.data[index];
            return true;
        }
        return false;
    }
}