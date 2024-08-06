import { Results } from "@maxialvarez/asafe-app";
import { userType } from "../types";

type errorType = { message: String, type: String };

export type userTransactionPresented = {
    user: userType
    errors: Array<errorType>
};

export const presentTransaction = (result: Results): userTransactionPresented => {
    const errors = result.getValidationsFailed().map((error: Error) => {
        return {
            message: error.message,
            type: error.name
        }
    });

    const response: userTransactionPresented = {
        user: result.getUsers()[0],
        errors
    }
    return response;
}


export const presentList = (result: Results): Array<userType> => {

    const response: Array<userType> = [];

    result.getValidationsFailed().map((error: Error) => {
        return {
            message: error.message,
            type: error.name
        }
    });

    result.getUsers().forEach(user => {
        response.push(user);
    });

    return response;
}
