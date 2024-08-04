import { IRepository } from "../../repositories/Irepository";
export declare const emailExists: (email: any, repository: IRepository) => Boolean;
export declare const emailExistsInOtherUser: (email: any, id: any, repository: IRepository) => Boolean;
