import { Schema } from 'mongoose';
import { IArticle } from '../interfaces';

export const articleSchema: Schema = new Schema<IArticle>({
    title: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    content: { type: String, required: true },
    description: { type: String, required: true },
});