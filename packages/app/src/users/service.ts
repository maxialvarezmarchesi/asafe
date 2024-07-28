import { User } from "./entities/User";
import { Results } from "./entities/Results";
import { Query } from "./repositories/Query";
import { Repository } from "./repositories/Service";
import { userValidator } from "./validators/service";
import { UncaughtError } from "./validators/exceptions/Exceptions";

export const service = {

    get: (id: Number): Results => {
        const repository = new Repository();
        const query = new Query();
        query.setId(id);
        const results = new Results();
        results.addUsers(repository.get(query));
        return results;
    },

    add: (user: User): Results => {
        const repository = new Repository();
        const validation = userValidator(user);
        const result = new Results();

        if (!validation.length) {
            try {
                result.addOneUser(repository.save(user));
            } catch (error) {
                if (error instanceof Error) {
                    result.addOneValidationFailed(error);
                } else {
                    result.addOneValidationFailed(new UncaughtError());
                }
            }
        } else {
            result.addalidationsFailed(validation);
        }

        return result;
    }
}