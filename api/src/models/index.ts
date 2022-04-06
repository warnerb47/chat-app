import { userSchema } from './user';
import { Model, model } from 'mongoose';
import { IDiscussion, IUser } from '../interfaces'
import { discussionSchema } from './discussion';
import { IMessage } from '../interfaces/message';
import { messageSchema } from './message';

export const userModel: Model<IUser> =  model<IUser>('User', userSchema);
export const discussionModel: Model<IDiscussion> =  model<IDiscussion>('Discussion', discussionSchema);
export const messageModel: Model<IMessage> =  model<IMessage>('Message', messageSchema);
