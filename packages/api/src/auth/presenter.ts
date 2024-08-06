import { Results } from "@maxialvarez/asafe-app";

import { userType } from "../types";

export const presentAuth = (result: Results): userType | [] => {

    let response: userType | [] = [];

    result.getUsers().forEach(user => {
        response = user;
    });

    return response;
}
