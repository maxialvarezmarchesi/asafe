import { User } from "./entities/User";
import { Results } from "./entities/Results";
export declare const service: {
    get: (id: Number) => Results;
    add: (user: User) => Results;
};
