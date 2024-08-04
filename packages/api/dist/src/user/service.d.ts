import { userType } from "./presenter";
export declare const service: {
    get: (id: Number) => Promise<userType[]>;
    add: (data: any) => Promise<import("./presenter").userTransactionPresented>;
    update: (id: Number, data: any) => Promise<import("./presenter").userTransactionPresented>;
    remove: (id: Number, data: any) => Promise<import("./presenter").userTransactionPresented>;
};
