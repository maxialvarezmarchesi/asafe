import { constraintForCreate } from "./constraints/service";
import { Results } from "./entities/Results";
import { User } from "./entities/User";
import { UncaughtError } from "./exceptions/Exceptions";
import { validatedForCreate } from "./validators/service";
import { Repository } from "./repositories/Service";
import { BaseUserException } from "./exceptions/BaseUserException";

const repository = new Repository();

export function add(user: User): Results {

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
        if (error instanceof BaseUserException) {
            result.addOneValidationFailed(error);
        } else {
            result.addOneValidationFailed(new UncaughtError());
        }
    }

    return result;
}