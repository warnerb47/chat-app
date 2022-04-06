import { Router } from 'express';
import { userRouter } from './user';
import { articleRouter } from './article';
import { categoryRouter } from './category';
import { discussionRouter } from './discussion';

export const router: Router = Router();

router.use('/user', userRouter);
router.use('/discussion', discussionRouter);
router.use('/category', categoryRouter);
router.use('/article', articleRouter);