import { User } from "../entities/User";
import { EmailExistsException, IdException } from "../exceptions/Exceptions";
import { IRepository } from "../repositories/Irepository";
import { emailExists, emailExistsInOtherUser } from "./types/email";
import { idExists } from "./types/id";

export const constraintForCreate = (user: User, repository: IRepository): Array<Error> => {
    const errors: Array<Error> = [];

    if (emailExists(user.email, repository)) {
        errors.push(new EmailExistsException());
    }

    return errors;

}

export const constraintForUpdate = (user: User, repository: IRepository): Array<Error> => {
    const errors: Array<Error> = [];

   
    /** For send fields */
    if (user.email && emailExistsInOtherUser(user.email, user.id, repository)) {
        errors.push(new EmailExistsException());
    }

    return errors;

}


export const constraintForRemove = (user: User, repository: IRepository): Array<Error> => {

    const errors: Array<Error> = [];

    /** For Mandatories fields */
    if (!idExists(user.id, repository)) {
        errors.push(new IdException());
    }
    return errors;

}
