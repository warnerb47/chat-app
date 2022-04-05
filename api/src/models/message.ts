import { Schema } from 'mongoose';
import { IMessage } from '../interfaces/message';

export const messageSchema: Schema = new Schema<IMessage>(
    {
        from: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        text: { type: String },
        media: { type: String },
    },
    {timestamps: true},
);
