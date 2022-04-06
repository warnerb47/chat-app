import { IMessage } from "./message";
import { IUser } from "./user";

export interface IDiscussion {
    _id?: string;
    messages: Array<string>;
    users: Array<string>;
    created_at?: Date;
    updated_at?: Date;
}


export interface IDiscussionPopulated {
    _id?: string;
    messages: Array<IMessage>;
    users: Array<IUser>;
    created_at?: Date;
    updated_at?: Date;
}

export const defaultDiscussion: IDiscussion = {
    messages: [],
    users: []
}


// {
//     "messages": [],
//     "users": [
//         "624cd29f761ff7212a607535",
//         "624ce1fc5b1958617dab43f8"
//     ]
// }