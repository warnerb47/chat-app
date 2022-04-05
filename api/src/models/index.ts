import { userSchema } from './user';
import { Model, model } from 'mongoose';
import { IArticle, ICategory, IUser } from '../interfaces';
import { categorySchema } from './category';
import { articleSchema } from './article';

export const userModel: Model<IUser> =  model<IUser>('User', userSchema);
export const categoryModel: Model<ICategory> =  model<ICategory>('Category', categorySchema);
export const articleModel: Model<IArticle> =  model<IArticle>('Article', articleSchema);
