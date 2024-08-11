import { presentTransaction } from "../../src/user/presenter"
import { Results, Entity as User } from "@maxialvarez/asafe-app";

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

        expect(presentTransaction(result)).toStrictEqual({
            user: user,
            errors: []
        });

    });
});