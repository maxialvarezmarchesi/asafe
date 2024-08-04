import { Results } from "./entities/Results";
import { Query } from "./repositories/Query";
import { Repository } from "./repositories/Service";

const repository = new Repository();

export function get(id: Number): Results {
    const query = new Query();
    query.setId(id).setDeleted(false);
    const results = new Results();
    results.addUsers(repository.get(query));
    return results;
}


