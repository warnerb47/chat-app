import { Router } from 'express';
import { upload } from '../../../config/multerConfig';
import { IMessage } from '../../../interfaces';
import { defaultMessage, getMessageFromPayload, IMessagePayload } from '../../../interfaces/message';
import { authenticateToken } from '../token/token.service';
import { getFileUrl } from '../utils';
import {
    deleteMessage,
    getMessageById,
    postMessage,
    updateMessage,
} from './message.service';

export const messageRouter: Router = Router();

messageRouter.get('/:id',authenticateToken, async (req, res) => {
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

messageRouter.post('/',authenticateToken, upload.single('image'), async (req, res) => {
    try {
        const payload: IMessagePayload = JSON.parse(req.body?.payload);
        if (payload && payload.discussion) {
            if (req.file) {
                payload.media.link = getFileUrl(req.file);  
            }
            const data = await postMessage(getMessageFromPayload(payload), payload.discussion);
            res.send(data);
        }else{
            res.send('payload is not valid');
        }
    } catch (error) {
        console.log(error);
        res.send(error);
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