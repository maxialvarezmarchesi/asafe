import { constraintForRemove } from "./constraints/service";
import { Results } from "./entities/Results";
import { User } from "./entities/User";
import { IdNotFoundException, UncaughtError } from "./exceptions/Exceptions";
import { NotDeleted } from "./exceptions/NotDeleted";
import { get } from "./get";
import { Repository } from "./repositories/Service";
import { validatedForRemove } from "./validators/service";

const repository = new Repository();

export async function remove(user: User): Promise<Results> {
    const result = new Results();

    // find user
    const userToRemove = await get(Number(user.id));
    if (!userToRemove.getUsers().length) {
        result.addOneValidationFailed(new IdNotFoundException());
        return result;
    }

    const userInvalid = validatedForRemove(user);
    if (userInvalid.length) {
        result.addValidationsFailed(userInvalid);
    }

    const userConstraintInvalid = await constraintForRemove(user, repository);
    if (userConstraintInvalid.length) {
        result.addValidationsFailed(userConstraintInvalid);
    }

    if (result.getValidationsFailed().length) {
        return result;
    }

    try {
        if (!await repository.delete(user)) {
            throw new NotDeleted();
        }
    } catch (error) {
        if (error instanceof Error) {
            result.addOneValidationFailed(error);
        } else {
            result.addOneValidationFailed(new UncaughtError());
        }
    }


    return result;

}
