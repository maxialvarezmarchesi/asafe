import { IRepository } from "../../repositories/Irepository";
import { Query } from "../../repositories/Query";


export const emailExists = async (email: any, repository: IRepository): Promise<Boolean> => {
    const query = new Query();
    query.setDeleted(false).setEmail(String(email));

    return (await repository.get(query)).length > 0;
}

export const emailExistsInOtherUser = async (email: any, id: any, repository: IRepository): Promise<Boolean> => {
    const query = new Query();
    query.setDeleted(false).setEmail(String(email));
    const usersList = await repository.get(query);

    // not exists email in users
    if (!usersList.length) {
        return false;
    }

    /* find id in userList other user*/
    return usersList.filter(user => user.id != id).length > 0;

}