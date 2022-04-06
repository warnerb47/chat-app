import { Router } from 'express';
import { userRouter } from './user';
import { articleRouter } from './article';
import { categoryRouter } from './category';
import { discussionRouter } from './discussion';
import { messageRouter } from './message';

export const router: Router = Router();

router.use('/user', userRouter);
router.use('/discussion', discussionRouter);
router.use('/message', messageRouter);
router.use('/category', categoryRouter);
router.use('/article', articleRouter);