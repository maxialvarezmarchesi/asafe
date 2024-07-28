
import { Query } from "../../../src/users/repositories/Query";
import { Repository as Repository } from "../../../src/users/repositories/Service";

import { usersData , buildUserFromUserData} from "../dataset";



describe("test memory repository", () => {
    it("save", () => {


        const repo = new Repository()
        const query = new Query();
        let user = buildUserFromUserData(0);

        repo.save(user);

        query.setId(usersData[0].id);
        const resultUser1 = repo.get(query);

        expect(resultUser1[0]?.id).toBe(user.id);

        user = buildUserFromUserData(1);

        repo.save(user);

        const resultUser2 = repo.get(query);
        expect(resultUser2[0]?.id).not.toBe(user.id);

    });

    it("delete", () => {


        let user = buildUserFromUserData(0);

        const repo = new Repository()
        const query = new Query();

        repo.save(user);

        user = buildUserFromUserData(1);
        repo.save(user);
        user = buildUserFromUserData(2);
        repo.save(user);

        const deleted = repo.delete(user);

        expect(deleted).toBe(true);

        query.setId(user.id);
        const userDeleted = repo.get(query);

        expect(userDeleted).toStrictEqual([]);

    });


});