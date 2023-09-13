export type TLogin = {
    email: string;
    password: string;
}

export type TUser = {
    user: {
        email: string;
        name: string;
        lastLogin: string;
    }
}