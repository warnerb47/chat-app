import { Schema } from 'mongoose';
import { IUser } from '../interfaces';
import bcrypt from 'bcrypt';

export const userSchema: Schema = new Schema<IUser>(
    {
        fullName: { type: String, default:'indisponible'},
        telephone: { type: String, required: true },
        salt: { type: String },
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

// hash password before saving
userSchema.pre('save', function(next: any){
    var user = this;
        user.updated_at = Date.now;
    if(user.password)
    {
        bcrypt.genSalt(10, (err,salt) => {
            if(err) return next(err);
            user.salt = salt;
            bcrypt.hash(user.password, salt, (err,hash) => {
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    }
});