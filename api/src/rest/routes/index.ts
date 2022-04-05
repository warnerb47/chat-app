import { Router } from 'express';
import { userRouter } from './user';
import { articleRouter } from './article';
import { categoryRouter } from './category';

export const router: Router = Router();

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/article', articleRouter);