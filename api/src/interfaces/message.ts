export interface IMessage {
    _id?: string;
    text?: string;
    media?: string;
    from?: string;
    created_at?: Date;
    updated_at?: Date;
}