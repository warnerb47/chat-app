import { Schema } from 'mongoose';
import { IUser } from '../interfaces';

export const userSchema: Schema = new Schema<IUser>(
    {
        fullName: { type: String, default:'indisponible'},
        telephone: { type: String, required: true },
        // login: { type: String, required: true },
        password: { type: String, required: true },
        connected: { type: Boolean, default: false },
        description: { type: String},
        discussions: [{
            type: Schema.Types.ObjectId,
            ref: 'Discussion',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],
        image: { type: String, default: 'http://urbanistes.be/cub/wp-content/uploads/2017/01/0.png'},

    },
    {timestamps: true},
);
