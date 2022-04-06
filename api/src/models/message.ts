import { Schema } from 'mongoose';
import { IMessage } from '../interfaces/message';

export const messageSchema: Schema = new Schema<IMessage>(
    {
        from: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        text: { type: String },
        media: { 
            contentType: { type: String },
            link: { type: String },   
        },
    },
    {timestamps: true},
);
