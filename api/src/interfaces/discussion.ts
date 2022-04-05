export interface IDiscussion {
    _id?: string;
    messages: Array<string>;
    users: Array<string>;
    created_at?: Date;
    updated_at?: Date;
}