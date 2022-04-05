import { Types } from 'mongoose';

export interface IArticle {
    title: string,
    createdAt: Date,
    updatedAt: Date,
    category: Types.ObjectId,
    content: string,
    description: string
}