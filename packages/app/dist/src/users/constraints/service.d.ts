import { User } from "../entities/User";
import { IRepository } from "../repositories/Irepository";
export declare const constraintForCreate: (user: User, repository: IRepository) => Promise<Error[]>;
export declare const constraintForUpdate: (user: User, repository: IRepository) => Promise<Error[]>;
export declare const constraintForRemove: (user: User, repository: IRepository) => Promise<Error[]>;
