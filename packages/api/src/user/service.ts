import { UserService, Entity as User } from "@maxialvarez/asafe-app";
import { presentTransaction, presentList, userType } from "./presenter";


const get = (id: Number): Array<userType> => {
    return presentList(
        UserService.get(id)
    );
};


const add = (data: any) => {

    const user = new User();

    user.name = data.name;
    user.surname = data.surname;
    user.email = data.email;
    user.password = data.password;

    return presentTransaction(UserService.add(user))
}

const update = (id: Number, data: any) => {

    const user = new User();

    user.id = id
    user.name = data?.name;
    user.surname = data?.surname;
    user.email = data?.email;
    user.password = data?.password;
    console.log(user);
    return presentTransaction(UserService.update(user))
}

const remove = (id: Number, data: any) => {

    const user = new User();
    user.id = id
console.log(user);

    return presentTransaction(UserService.remove(user))
}

export const service = {
    get,
    add,
    update,
    remove
};