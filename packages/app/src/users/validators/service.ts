import { IdException, EmailException, EmailExistsException, PasswordException, NameException, SurnameException, IdNotExistsException } from "../exceptions/Exceptions";
import { User } from "../entities/User"
import { id as isValidId } from "./types/id";
import { email as isValidEmail } from "./types/email";
import { password as isValidPassword } from "./types/password";
import { name as isValidName } from "./types/name";
import { surname as isValidSurname } from "./types/surname";

export const validatedForCreate = (user: User): Array<Error> => {
    const errors: Array<Error> = [];

    if (!isValidEmail(user.email)) {
        errors.push(new EmailException());
    }

    if (!isValidPassword(user.password)) {
        errors.push(new PasswordException());
    }

    if (!isValidName(user.name)) {
        errors.push(new NameException());
    }

    if (!isValidSurname(user.surname)) {
        errors.push(new SurnameException());
    }

    return errors;

}

export const validatedForUpdate = (user: User,): Array<Error> => {
    const errors: Array<Error> = [];

    /** Mandatories fields */

    if (!isValidId(user.id)) {
        errors.push(new IdException());
    }

    /** Optionals fields */

    if (user.email && !isValidEmail(user.email)) {
        errors.push(new EmailException());
    }

    if (user.password && !isValidPassword(user.password)) {
        errors.push(new PasswordException());
    }

    if (user.name && !isValidName(user.name)) {
        errors.push(new NameException());
    }

    if (user.surname && !isValidSurname(user.surname)) {
        errors.push(new SurnameException());
    }

    return errors;

}


export const validatedForRemove = (user: User): Array<Error> => {
    const errors: Array<Error> = [];

    if (!isValidId(user.id)) {
        errors.push(new IdException());
    }

    return errors;

}

