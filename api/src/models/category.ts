import { Schema } from 'mongoose';
import { ICategory } from '../interfaces';

export const categorySchema: Schema = new Schema<ICategory>({
    title: { type: String, required: true }
});