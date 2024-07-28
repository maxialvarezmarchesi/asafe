import { UserService } from "@maxialvarez/asafe-app";
import { User } from "@maxialvarez/asafe-app";
import { present, userPresented, } from "./presenter";


const get = (id: Number): Array<userPresented> => {
    return present(
        UserService.get(id)
    );
};


const add = (data: any) => {

    const user = new User;
    user.id = data.id;
    user.name = data.name;
    user.surname = data.surname;
    user.email = data.email;
    user.password = data.password;
    return ["ok"];

    return present(UserService.add(user))
}

export const service = {
    get,
    add
};