export { User as Entity} from "./entities/User";
export { Results } from "./entities/Results";
import { get, getByQuery } from "./get";
import { add } from "./add";
import { update } from "./update"
import { remove } from "./remove";
import { Query } from "./repositories/Query";


export const service = {
    Query,
    getByQuery,
    get,
    add,
    update,
    remove
}