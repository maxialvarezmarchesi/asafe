"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("@maxialvarez/asafe-app/src/users/entities/User");
const presenter_1 = require("../../src/user/presenter");
describe("test user", () => {
    it("presenter", () => {
        const dataset = {
            id: 100,
            name: 'test Name',
            surname: 'test Surname',
            email: 'email@test.com',
            password: '123456'
        };
        const user = new User_1.User();
        user.id = dataset.id;
        user.name = dataset.name;
        user.surname = dataset.surname;
        user.email = dataset.email;
        user.password = dataset.password;
        expect((0, presenter_1.present)(user)).toStrictEqual({
            id: dataset.id,
            name: dataset.name,
            surname: dataset.surname,
            email: dataset.email
        });
    });
});
