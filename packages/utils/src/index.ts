
export const hashPassword = (password: String): String => {
    // TODO: hash password
    return btoa(password.toString());
}