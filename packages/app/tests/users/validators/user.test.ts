import { EmailException, IdException } from "../../../src/users/exceptions/Exceptions";
import { validatedForCreate, validatedForUpdate } from "../../../src/users/validators/service";
import { buildUserFromUserData } from "../dataset";

describe('Validate User', () => {

    it("valid", () => {
        const user = buildUserFromUserData(0);
        expect(validatedForCreate(user)).toStrictEqual([]);
    });

    it("invalid email", () => {
        const user = buildUserFromUserData(0);
        user.email = '';
        expect(validatedForCreate(user)).toStrictEqual([new EmailException()]);
    });

    it("invalid id", () => {
        const user = buildUserFromUserData(0);
        user.id = 0;
        expect(validatedForUpdate(user)).toStrictEqual([new IdException()]);
    });

    it("invalid id and email", () => {
        const user = buildUserFromUserData(0);
        user.id = 0;
        user.email = 'asd-test.com';
        expect(
            validatedForUpdate(user).sort(
                (error1: Error, error2: Error) => error1.name.localeCompare(error2.name)
            )
        ).toStrictEqual(
            [new IdException(), new EmailException()].sort(
                (error1: Error, error2: Error) => error1.name.localeCompare(error2.name)
            )
        );
    });


});