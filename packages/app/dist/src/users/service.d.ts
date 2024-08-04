import { User } from "./entities/User";
import { get } from "./get";
import { add } from "./add";
import { update } from "./update";
import { remove } from "./remove";
export declare const Entity: typeof User;
export declare const service: {
    get: typeof get;
    add: typeof add;
    update: typeof update;
    remove: typeof remove;
};
