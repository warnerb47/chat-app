import { Schema } from 'mongoose';
import { IDiscussion } from '../interfaces';

export const discussionSchema: Schema = new Schema<IDiscussion>(
    {
        messages: [{
            type: Schema.Types.ObjectId,
            ref: 'Message',
        }],
        users: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
    },
    {timestamps: true},
);
