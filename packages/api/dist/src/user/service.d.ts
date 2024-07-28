import { userPresented } from "./presenter";
export declare const service: {
    get: (id: Number) => Array<userPresented>;
    add: (data: any) => userPresented[] | string[];
};
