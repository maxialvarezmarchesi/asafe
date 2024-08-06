export { User as Entity } from "./entities/User";
export { Results } from "./entities/Results";
import { get, getByQuery } from "./get";
import { add } from "./add";
import { update } from "./update";
import { remove } from "./remove";
import { Query } from "./repositories/Query";
export declare const service: {
    Query: typeof Query;
    getByQuery: typeof getByQuery;
    get: typeof get;
    add: typeof add;
    update: typeof update;
    remove: typeof remove;
};
