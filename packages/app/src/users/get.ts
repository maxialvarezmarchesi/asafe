import { Results } from "./entities/Results";
import { Query } from "./repositories/Query";
import { Repository } from "./repositories/Service";

const repository = new Repository();

export async function get(id: Number): Promise<Results> {
    const query = new Query();
    query.setId(id).setDeleted(false);
    const results = new Results();
    results.addUsers(await repository.get(query));
    return results;
}

export async function getByQuery(query: Query): Promise<Results> {
    const results = new Results();
    results.addUsers(await repository.get(query));
    return results;
}
