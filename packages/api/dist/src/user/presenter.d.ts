import { Results } from "@maxialvarez/asafe-app/src/users/entities/Results";
type userType = {
    id: Number | null;
    name: String;
    surname: String;
    email: String;
};
export type userPresented = {
    user: userType;
    errors: Array<Error>;
};
export declare const present: (result: Results) => Array<userPresented>;
export {};
