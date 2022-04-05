import { Router } from 'express';
import { authenticateToken } from './../token/token.service';
import { deleteUser, getUser, getUsers, login, postUser, updateUser } from './user.service';

export const userRouter: Router = Router();

userRouter.get('/', authenticateToken, async (req, res) => {
    try {
        const data = await getUsers();
        res.status(200).send({data});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

userRouter.get('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id) {
            const data = await getUser(req.params.id);
            res.status(200).send({data});
        }else{
            res.sendStatus(400);
        }   
    } catch (error) {
        console.log(error);
        res.sendStatus(500);     
    }
});

userRouter.post('/login', async (req, res) => {
    // console.log(req.body);
    try {
        if (req.body) {
            const data = await login(req.body);
            res.send({data});
        }else{
            res.sendStatus(400);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

userRouter.post('/', async (req, res) => {
    try {

        if (req.body) {
            const data = await postUser(req.body);
            res.send({data});
        }else{  
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

userRouter.patch('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id && req.body) {
            const data = updateUser(req.body, req.params.id);
            res.send({data: 'utilisateur modifier'});
        }else{
            res.sendStatus(400);
        }        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});

userRouter.delete('/:id', authenticateToken, async (req, res) => {
    try {
        if (req.params.id) {
            const data = deleteUser(req.params.id);
            res.send({data: 'utilisateur supprimé'});
        }else{
            res.sendStatus(400);
        }
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
});