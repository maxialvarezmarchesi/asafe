import { IRepository } from "../../repositories/Irepository";
import { Query } from "../../repositories/Query";

export const idExists = async (id: any, repository: IRepository): Promise<Boolean> => {
    const query = new Query();
    query.setDeleted(false).setId(Number(id));
    const usersList = await repository.get(query);
    // return if userList has length
    return usersList.length > 0

}