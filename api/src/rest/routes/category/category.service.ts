import { ICategory } from '../../../interfaces';
import { categoryModel } from './../../../models'

export const getCategories = async () => {
    try {
        return await categoryModel.find();
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getCategoryById = async (idCategory: string) => {
    if (idCategory) {
        try {
            return await categoryModel.findById(idCategory);
        } catch (error) {
            console.log(error);
            return [];
        }            
    }else{
        return [];
    }
};

export const getCategoryByTitle = async (title: string) => {
    if (title) {
        try {
            return await categoryModel.findOne({title});
        } catch (error) {
            console.log(error);
            return [];
        }            
    }else{
        return [];
    }
};

export const postCategory = async (payload: ICategory) => {
    try {
        const Category = new categoryModel(payload);
        return await Category.save();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateCategory = async (payload: ICategory, id: string) =>{
    try {
        return await categoryModel.findByIdAndUpdate(id, payload);               
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteCategory = async (id: string) => {
    try {
        return await categoryModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        return null;
    }
};

