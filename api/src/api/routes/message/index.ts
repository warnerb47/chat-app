import { Router } from 'express';
import { authenticateToken } from '../token/token.service';
import {
    deleteMessage,
    getMessageById,
    postMessage,
    updateMessage,
} from './message.service';

export const messageRouter: Router = Router();

messageRouter.get('/:id', async (req, res) => {
    try {
        if (req.params.id) {
            const data = await getMessageById(req.params.id);
            res.status(200).send(data);
        }else{
            res.sendStatus(400);
        }   
    } catch (error) {
        console.log(error);
        res.sendStatus(500);     
    }
});

messageRouter.post('/', async (req, res) => {
    try {

        if (req.body) {
            const data = await postMessage(req.body);
            res.send(data);
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

messageRouter.patch('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id && req.body) {
            const data = updateMessage(req.body, req.params.id);
            res.send(data);
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});

messageRouter.delete('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id) {
            const data = deleteMessage(req.params.id);
            res.send(data);
        }else{
            res.sendStatus(400);
        }
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});