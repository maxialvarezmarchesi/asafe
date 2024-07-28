import { Results } from "@maxialvarez/asafe-app/src/users/entities/Results";
import { User } from "@maxialvarez/asafe-app/src/users/entities/User";

type userType = { id: Number|null, name: String, surname: String, email: String };
export type userPresented = {
    user: userType
    errors: Array<Error>
};

export const present = (result: Results): Array<userPresented> => {
    return result.getUsers().map((user: User): userPresented=> {
        return {
            user: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email
            },
            errors: []
        }
    });
}