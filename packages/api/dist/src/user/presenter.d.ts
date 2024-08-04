import { Results } from "@maxialvarez/asafe-app/src/users/entities/Results";
export type userType = {
    id: Number | null;
    name: String;
    surname: String;
    email: String;
};
type errorType = {
    message: String;
    type: String;
};
export type userTransactionPresented = {
    user: userType;
    errors: Array<errorType>;
};
export declare const presentTransaction: (result: Results) => userTransactionPresented;
export declare const presentList: (result: Results) => Array<userType>;
export {};
