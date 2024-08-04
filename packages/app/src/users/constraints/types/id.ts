import { IRepository } from "../../repositories/Irepository";
import { Query } from "../../repositories/Query";

export const idExists = (id: any, repository: IRepository): Boolean => {
    const query = new Query();
    query.setDeleted(false).setId(Number(id));
    const usersList = repository.get(query);
    // return if userList has length
    return usersList.length > 0

}