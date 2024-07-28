import { name as nameValidator } from "../../../src/users/validators/name";

describe('Validate name', () => {
    it("valid", () => {

        
        expect(nameValidator('Name')).toBe(true);
        expect(nameValidator('')).toBe(false);
        expect(nameValidator(' ')).toBe(false);
        expect(nameValidator('  ')).toBe(false);
        expect(nameValidator(null)).toBe(false);
        expect(nameValidator(undefined)).toBe(false);
        expect(nameValidator(false)).toBe(false);
        expect(nameValidator(1)).toBe(false);
        expect(nameValidator(0)).toBe(false);
    })
});