import { Router } from 'express';
import { authenticateToken } from './../token/token.service';
import {
    deleteCategory,
    getCategoryById,
    getCategoryByTitle,
    getCategories,
    postCategory,
    updateCategory,
} from './category.service';

export const categoryRouter: Router = Router();

categoryRouter.get('/', async (req, res) => {
    try {
        const data = await getCategories();
        res.status(200).send({data});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

categoryRouter.get('/:id', async (req, res) => {
    try {
        if (req.params.id) {
            const data = await getCategoryById(req.params.id);
            res.status(200).send({data});
        }else{
            res.sendStatus(400);
        }   
    } catch (error) {
        console.log(error);
        res.sendStatus(500);     
    }
});

categoryRouter.get('/title/:title', async (req, res) => {
    try {
        if (req.params.title) {
            const data = await getCategoryByTitle(req.params.title);
            res.status(200).send({data});
        }else{
            res.sendStatus(400);
        }   
    } catch (error) {
        console.log(error);
        res.sendStatus(500);     
    }
});

categoryRouter.post('/', async (req, res) => {
    try {

        if (req.body) {
            const data = await postCategory(req.body);
            res.send({data});
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

categoryRouter.patch('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id && req.body) {
            const data = updateCategory(req.body, req.params.id);
            res.send({data});
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});

categoryRouter.delete('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id) {
            const data = deleteCategory(req.params.id);
            res.send({data});
        }else{
            res.sendStatus(400);
        }
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});