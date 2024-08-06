import { Results } from "./entities/Results";
import { Query } from "./repositories/Query";
export declare function get(id: Number): Promise<Results>;
export declare function getByQuery(query: Query): Promise<Results>;
