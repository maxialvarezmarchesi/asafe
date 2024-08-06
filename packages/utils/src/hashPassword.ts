import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const hashPassword = async (password: String): Promise<String> => {
    return await bcrypt.hash(password.toString(), SALT_ROUNDS);
}