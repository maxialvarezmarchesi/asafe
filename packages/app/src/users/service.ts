import { User } from "./entities/User";
import { Repository } from "./repositories/Service";
import { get } from "./get";
import { add } from "./add";
import { update } from "./update"
import { remove } from "./remove";


export const Entity = User;
const repository = new Repository();

export const service = {

    get,
    add,
    update,
    remove
}