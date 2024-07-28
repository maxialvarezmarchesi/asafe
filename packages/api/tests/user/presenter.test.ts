import { User } from "@maxialvarez/asafe-app/src/users/entities/User";
import { present } from "../../src/user/presenter";
import { Results } from "@maxialvarez/asafe-app/src/users/entities/Results";

describe("test user", () => {
    it("presenter", () => {

        const dataset = {
            id: 100,
            name: 'test Name',
            surname: 'test Surname',
            email: 'email@test.com',
            password: '123456'
        }

        const user = new User();
        user.id = dataset.id;
        user.name = dataset.name;
        user.surname = dataset.surname;
        user.email = dataset.email;
        user.password = dataset.password;
        const result = new Results();
        result.addOneUser(user);

        expect(present(result)).toStrictEqual([
            {
                user: {
                    id: dataset.id,
                    name: dataset.name,
                    surname: dataset.surname,
                    email: dataset.email
                },
                errors: []
            }]);

    });
});