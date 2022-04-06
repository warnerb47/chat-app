import { Router } from 'express';
import { authenticateToken } from '../token/token.service';
import {
    deleteDiscussion,
    getDiscussionById,
    getUsersDiscussions,
    postDiscussion,
    updateDiscussion,
} from './discussion.service';

export const discussionRouter: Router = Router();

discussionRouter.get('/user/:idUser', authenticateToken, async (req, res) => {
    try {
        const data = await getUsersDiscussions(req.params.idUser);
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

discussionRouter.get('/:id', async (req, res) => {
    try {
        if (req.params.id) {
            const data = await getDiscussionById(req.params.id);
            res.status(200).send(data);
        }else{
            res.sendStatus(400);
        }   
    } catch (error) {
        console.log(error);
        res.sendStatus(500);     
    }
});

discussionRouter.post('/', async (req, res) => {
    try {

        if (req.body) {
            const data = await postDiscussion(req.body);
            res.send(data);
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

discussionRouter.patch('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id && req.body) {
            const data = updateDiscussion(req.body, req.params.id);
            res.send(data);
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});

discussionRouter.delete('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id) {
            const data = deleteDiscussion(req.params.id);
            res.send(data);
        }else{
            res.sendStatus(400);
        }
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});