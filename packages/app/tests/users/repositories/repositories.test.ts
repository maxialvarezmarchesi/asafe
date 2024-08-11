
import { Query } from "../../../src/users/repositories/Query";
import { Repository } from "../../../src/users/repositories/memory/repository";

import { usersData, buildUserFromUserData } from "../dataset";



describe("test memory repository", () => {
    it("save", async () => {


        const repo = new Repository()
        const query = new Query();
        let user = buildUserFromUserData(0);

        await repo.save(user);

        query.setId(usersData[0].id);
        const resultUser1 = await repo.get(query);

        expect(resultUser1[0]?.id).toBe(user.id);

        user = buildUserFromUserData(1);

        await repo.save(user);

        const resultUser2 = await repo.get(query);
        expect(resultUser2[0]?.id).not.toBe(user.id);

    });

    it("delete", async () => {


        let user = buildUserFromUserData(0);

        const repo = new Repository()
        const query = new Query();

        await repo.save(user);

        user = buildUserFromUserData(1);
        await repo.save(user);
        user = buildUserFromUserData(2);
        await repo.save(user);

        const deleted = await repo.delete(user);

        expect(deleted).toBe(true);

        query.setId(user.id).setDeleted(false);
        const userDeleted = await repo.get(query);

        expect(userDeleted).toStrictEqual([]);

    });


});