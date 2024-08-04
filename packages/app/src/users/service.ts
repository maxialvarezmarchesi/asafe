import { User } from "./entities/User";
import { Results } from "./entities/Results";
import { Query } from "./repositories/Query";
import { Repository } from "./repositories/Service";
import { validatedForCreate, validatedForRemove, validatedForUpdate } from "./validators/service";
import { UncaughtError } from "./exceptions/Exceptions";
import { constraintForCreate, constraintForRemove, constraintForUpdate } from "./constraints/service";

export const Entity = User;
const repository = new Repository();

export const service = {

    get: (id: Number): Results => {
        const query = new Query();
        query.setId(id).setDeleted(false);
        const results = new Results();
        results.addUsers(repository.get(query));
        return results;
    },

    add: (user: User): Results => {

        const result = new Results();

        const userInvalid = validatedForCreate(user);
        if (userInvalid.length) {
            result.addValidationsFailed(userInvalid);
        }

        const userConstraintInvalid = constraintForCreate(user, repository);
        if (userConstraintInvalid.length) {
            result.addValidationsFailed(userConstraintInvalid);
        }

        if (result.getValidationsFailed().length) {
            return result;
        }

        try {
            result.addOneUser(repository.save(user));
        } catch (error) {
            if (error instanceof Error) {
                result.addOneValidationFailed(error);
            } else {
                result.addOneValidationFailed(new UncaughtError());
            }
        }

        return result;
    },

    update: (user: User): Results => {
        const result = new Results();

        const userInvalid = validatedForUpdate(user);
        if (userInvalid.length) {
            result.addValidationsFailed(userInvalid);

        }

        const userConstraintInvalid = constraintForUpdate(user, repository);
        if (userConstraintInvalid.length) {
            result.addValidationsFailed(userConstraintInvalid);

        }
        if (result.getValidationsFailed().length) {
            return result;
        }

        try {
            result.addOneUser(repository.update(user));
        } catch (error) {
            if (error instanceof Error) {
                result.addOneValidationFailed(error);
            } else {
                result.addOneValidationFailed(new UncaughtError());
            }
        }


        return result;

    },
    remove: (user: User): Results => {
        const result = new Results();

        const userInvalid = validatedForRemove(user);
        if (userInvalid.length) {
            result.addValidationsFailed(userInvalid);
        }

        const userConstraintInvalid = constraintForRemove(user, repository);
        if (userConstraintInvalid.length) {
            result.addValidationsFailed(userConstraintInvalid);
        }

        if (result.getValidationsFailed().length) {
            return result;
        }
        

        return result;

    }
}