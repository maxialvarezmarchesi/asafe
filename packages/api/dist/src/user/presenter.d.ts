import { Results } from "@maxialvarez/asafe-app";
import { userType } from "../types";
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
