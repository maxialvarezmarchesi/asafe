import { User } from "../../src/users/entities/User";

type TypeUserData = { id: Number, name: String, surname: String, email: String, password: String };
export const usersData: Array<TypeUserData> = [
    {
        "id": 1,
        "name": "test 1",
        "surname": "surname test 1",
        "email": "email_test1@test.com",
        "password": "123456"
    },
    {
        "id": 2,
        "name": "test 2",
        "surname": "surname test 2",
        "email": "email_test2@test.com",
        "password": "654321"
    },
    {
        "id": 3,
        "name": "test 3",
        "surname": "surname test 3",
        "email": "email_test3@test.com",
        "password": "abcdef"
    },
    {
        "id": 4,
        "name": "test 4",
        "surname": "surname test 4",
        "email": "email_test4@test.com",
        "password": "123abc"
    },
    {
        "id": 5,
        "name": "test 5",
        "surname": "surname test 5",
        "email": "email_test5@test.com",
        "password": "password5"
    }
];

type TypeEmailsData = { email: any, isValid: boolean };
export const emailsData: Array<TypeEmailsData> = [
    { 'email': "valid.email@test.com", isValid: true },
    { 'email': "invalid-email-test.com", isValid: false },
    { 'email': "another.invalid@test", isValid: false },
    { 'email': "", isValid: false },
    { 'email': null, isValid: false },
    { 'email': false, isValid: false }
]


export const buildUserFromUserData = (index: number) => {
    const user = new User();
    user.id = usersData[index].id;
    user.email = usersData[index].email;
    user.password = usersData[index].password;
    user.name = usersData[index].name;
    user.surname = usersData[index].surname;
    return user;
}