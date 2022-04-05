import { Router } from 'express';
import { authenticateToken } from './../token/token.service';
import {
    deleteArticle,
    getArticleById,
    getArticleByTitle,
    getArticles,
    postArticle,
    updateArticle,
} from './article.service';

export const articleRouter: Router = Router();

articleRouter.get('/', async (req, res) => {
    try {
        const data = await getArticles();
        res.status(200).send({data});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

articleRouter.get('/:id', async (req, res) => {
    try {
        if (req.params.id) {
            const data = await getArticleById(req.params.id);
            res.status(200).send({data});
        }else{
            res.sendStatus(400);
        }   
    } catch (error) {
        console.log(error);
        res.sendStatus(500);     
    }
});

articleRouter.get('/title/:title', async (req, res) => {
    try {
        if (req.params.title) {
            const data = await getArticleByTitle(req.params.title);
            res.status(200).send({data});
        }else{
            res.sendStatus(400);
        }   
    } catch (error) {
        console.log(error);
        res.sendStatus(500);     
    }
});

articleRouter.post('/', async (req, res) => {
    try {

        if (req.body) {
            const data = await postArticle(req.body);
            res.send({data});
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

articleRouter.patch('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id && req.body) {
            const data = updateArticle(req.body, req.params.id);
            res.send({data});
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});

articleRouter.delete('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id) {
            const data = deleteArticle(req.params.id);
            res.send({data});
        }else{
            res.sendStatus(400);
        }
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});