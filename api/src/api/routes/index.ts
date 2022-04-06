import { Router } from 'express';
import { userRouter } from './user';
import { discussionRouter } from './discussion';
import { messageRouter } from './message';

export const router: Router = Router();

router.use('/user', userRouter);
router.use('/discussion', discussionRouter);
router.use('/message', messageRouter);