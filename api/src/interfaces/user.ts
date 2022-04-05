export interface IUser {
    _id?: string;
    telephone: string;
    fullName?: string;
    // login: string;
    password: string;
    image?: string;
    description: string;
    connected: boolean;
    friends: Array<string>;
    discussions: Array<string>;
    created_at?: Date;
    updated_at?: Date;
    salt?: string;
}


export const defaultUser: IUser = {
    fullName: '',
    // login: '',
    password: '',
    description: '',
    connected: false,
    friends: [],
    discussions: [],
    telephone: "",
}

// {
//     "fullName": "h",
//     "password": "h",
//     "description": "h",
//     "connected": true,
//     "friends": [],
//     "discussions": [],
//     "telephone": "777494817",
//     "image": "http://localhost:3000/static/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png"
// }