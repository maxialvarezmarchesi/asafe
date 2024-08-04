import { User } from "../entities/User";
import { EmailExistsException, IdException } from "../exceptions/Exceptions";
import { IRepository } from "../repositories/Irepository";
import { emailExists, emailExistsInOtherUser } from "./types/email";
import { idExists } from "./types/id";

export const constraintForCreate = async (user: User, repository: IRepository): Promise<Error[]> => {
    const errors: Array<Error> = [];

    if (await emailExists(user.email, repository)) {
        errors.push(new EmailExistsException());
    }

    return errors;

}

export const constraintForUpdate = async (user: User, repository: IRepository): Promise<Error[]> => {
    const errors: Array<Error> = [];


    /** For send fields */
    if (user.email && await emailExistsInOtherUser(user.email, user.id, repository)) {
        errors.push(new EmailExistsException());
    }

    return errors;

}


export const constraintForRemove = async (user: User, repository: IRepository): Promise<Error[]> => {

    const errors: Array<Error> = [];

    /** For Mandatories fields */
    if (!idExists(user.id, repository)) {
        errors.push(new IdException());
    }
    return new Promise(resolve => resolve(errors));

}
