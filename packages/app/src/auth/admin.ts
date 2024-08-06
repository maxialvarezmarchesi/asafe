import config from "@maxialvarez/asafe-config";

export async function authAdmin(email: String, password: String): Promise<Boolean> {

    const validCredential = (email && email === config.adminCredentials.email)
        && (password && password === config.adminCredentials.password);

    return new Promise(resolve => resolve(validCredential));
}


