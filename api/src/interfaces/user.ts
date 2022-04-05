export interface IUser {
    _id?: string;
    fullName?: string;
    login: string;
    password: string;
    image: string;
    description: string;
    connected: boolean;
    friends: Array<string>;
    discussions: Array<string>;
    created_at?: Date;
    updated_at?: Date;
}