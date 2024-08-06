import { hashPassword } from "@maxialvarez/asafe-utils";
import { service as userService } from "../users/service";
import { Results } from "../users/entities/Results";

export async function auth(email: String, password: String): Promise<Results> {
    const query = new userService.Query();
    query.setEmail(email)
        .setPasswordEncrypted(await hashPassword(password))
        .setDeleted(false);
        
    return await userService.getByQuery(query);
}


