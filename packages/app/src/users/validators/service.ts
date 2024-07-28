import { IdException, EmailException, PasswordException, NameException, SurnameException } from "./exceptions/Exceptions";
import { User } from "../entities/User"
import { id } from "./id";
import { email } from "./email";
import { password } from "./password";
import { name } from "./name";
import { surname } from "./surname";

export const userValidator = (user: User): Array<Error> => {
    const errors: Array<Error> = [];

    if (!id(user.id)) {
        errors.push(new IdException());
    }

    if (!email(user.email)) {
        errors.push(new EmailException());
    }

    if (!password(user.password)) {
        errors.push(new PasswordException());
    }

    if (!name(user.name)) {
        errors.push(new NameException());
    }

    if (!surname(user.surname)) {
        errors.push(new SurnameException());
    }

    return errors;

}