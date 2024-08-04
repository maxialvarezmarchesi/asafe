import { userType } from "./presenter";
export declare const service: {
    get: (id: Number) => Array<userType>;
    add: (data: any) => import("./presenter").userTransactionPresented;
    update: (id: Number, data: any) => import("./presenter").userTransactionPresented;
    remove: (id: Number, data: any) => import("./presenter").userTransactionPresented;
};
