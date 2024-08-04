import { emailsData } from "../dataset";
import { email as emailValidator } from "../../../src/users/validators/types/email";

describe('Validate email', () => {
    it("valid", () => {

        emailsData.forEach(email => {
            expect(emailValidator(email.email)).toBe(email.isValid);

        });

    })
});