import { IArticle } from '../../../interfaces';
import { articleModel } from './../../../models'

export const getArticles = async () => {
    try {
        return await articleModel.find();
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getArticleById = async (idArticle: string) => {
    if (idArticle) {
        try {
            return await articleModel.findById(idArticle);
        } catch (error) {
            console.log(error);
            return [];
        }            
    }else{
        return [];
    }
};

export const getArticleByTitle = async (title: string) => {
    if (title) {
        try {
            return await articleModel.findOne({title});
        } catch (error) {
            console.log(error);
            return [];
        }            
    }else{
        return [];
    }
};

export const postArticle = async (payload: IArticle) => {
    try {
        const Article = new articleModel(payload);
        return await Article.save();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updateArticle = async (payload: IArticle, id: string) =>{
    try {
        return await articleModel.findByIdAndUpdate(id, payload);               
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteArticle = async (id: string) => {
    try {
        return await articleModel.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        return null;
    }
};

