import { User } from "./entities/User";
import { Results } from "./entities/Results";
export declare const Entity: typeof User;
export declare const service: {
    get: (id: Number) => Results;
    add: (user: User) => Results;
    update: (user: User) => Results;
    remove: (user: User) => Results;
};
