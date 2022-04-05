import { userSchema } from './user';
import { Model, model } from 'mongoose';
import { IArticle, ICategory, IDiscussion, IUser } from '../interfaces';
import { categorySchema } from './category';
import { articleSchema } from './article';
import { discussionSchema } from './discussion';

export const userModel: Model<IUser> =  model<IUser>('User', userSchema);
export const categoryModel: Model<ICategory> =  model<ICategory>('Category', categorySchema);
export const articleModel: Model<IArticle> =  model<IArticle>('Article', articleSchema);
export const discussionModel: Model<IDiscussion> =  model<IDiscussion>('Discussion', discussionSchema);
