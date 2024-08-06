import { AuthSevice } from "@maxialvarez/asafe-app";
import { presentAuth } from "./presenter";
import { Entity as User } from "@maxialvarez/asafe-app";
import { tokenizer } from "./tokenizer";

const auth = async (data: any): Promise<{ token: string } | null> => {

    let result = await AuthSevice.auth(data.email ?? '', data.password ?? '');

    const user: User | null = result.getUsers()[0] ?? null;

    if (user) {
        try {
            const token = await tokenizer.encode(presentAuth(result));
            return { "token": token };
        } catch (error) { }
    }

    return null;
}

const authAdmin = async (data: any): Promise<{ token: string } | null> => {

    let result = await AuthSevice.authAdmin(data.email ?? '', data.password ?? '');

    if (result) {
        try {
            const token = await tokenizer.encode({ "admin": true });
            return { "token": token };
        } catch (error) { }
    }

    return null;
}


export const service = {
    auth,
    authAdmin,
    tokenizer
};