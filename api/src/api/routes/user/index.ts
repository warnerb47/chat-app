import { Router } from 'express';
import { upload } from '../../../config/multerConfig';
import { IUser } from '../../../interfaces';
import { authenticateToken } from '../token/token.service';
import { getFileUrl } from '../utils';
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
    try {
        if (req.body) {
            const data = await login(req.body);
            res.send(data);
        }else{
            res.send('data is invalid');
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

userRouter.post('/register', upload.single('image'), async (req, res) => {
    try {
        const payload: IUser = JSON.parse(req.body?.payload);
        if (payload) {
            if (req.file) {
                payload.image = getFileUrl(req.file);  
            }
            const exist = await getUsers({ telephone: payload.telephone });
            console.log(exist);
            if (exist.length <= 0) {
                const data = await postUser(payload);
                res.send(data);  
            } else if (exist.length > 0) {
                res.send('user already exist');
            }
        }else{
            res.send('payload invalid');
        }
    } catch (error) {
        console.log(error);
        res.send(error);
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