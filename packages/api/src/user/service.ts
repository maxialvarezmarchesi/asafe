import { UserService, Entity as User } from "@maxialvarez/asafe-app";
import { presentTransaction, presentList, userType } from "./presenter";


const get = async (id: Number): Promise<userType[]> => {
    return presentList(
        await UserService.get(id)
    );
};


const add = async (data: any) => {

    const user = new User();

    user.name = data.name;
    user.surname = data.surname;
    user.email = data.email;
    user.password = data.password;
    let result = await UserService.add(user);
    return presentTransaction(result)
}

const update = async (id: Number, data: any) => {

    const user = new User();

    user.id = id
    user.name = data?.name;
    user.surname = data?.surname;
    user.email = data?.email;
    user.password = data?.password;

    let result = await UserService.update(user);
    return presentTransaction(result)
}

const remove = async (id: Number, data: any) => {

    const user = new User();
    user.id = id
    const result = await UserService.remove(user);

    return presentTransaction(result)
}

export const service = {
    get,
    add,
    update,
    remove
};