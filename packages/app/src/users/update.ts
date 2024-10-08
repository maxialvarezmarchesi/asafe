import { constraintForUpdate } from "./constraints/service";
import { Results } from "./entities/Results";
import { User } from "./entities/User";
import { IdNotFoundException, UncaughtError } from "./exceptions/Exceptions";
import { get } from "./get";
import { Repository } from "./repositories/Service";
import { validatedForUpdate } from "./validators/service";

const repository = new Repository();

export async function update(user: User): Promise<Results> {

    const result = new Results();
    // find user
    const userToUpdate = await get(Number(user.id));
    if (!userToUpdate.getUsers().length) {
        result.addOneValidationFailed(new IdNotFoundException());
        return result;
    }


    const userInvalid = validatedForUpdate(user);
    if (userInvalid.length) {
        result.addValidationsFailed(userInvalid);

    }

    const userConstraintInvalid = await constraintForUpdate(user, repository);
    if (userConstraintInvalid.length) {
        result.addValidationsFailed(userConstraintInvalid);

    }

    if (result.getValidationsFailed().length) {
        return result;
    }

    try {
        result.addOneUser(await repository.update(user));
    } catch (error) {
        if (error instanceof Error) {
            result.addOneValidationFailed(error);
        } else {
            result.addOneValidationFailed(new UncaughtError());
        }
    }


    return result;

}

