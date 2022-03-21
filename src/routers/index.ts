import { Router } from 'express';
import { createUserRouter } from './createUser.routes';
import { passwordRouter } from './password.routes';

const router = Router();

router.use('/register', createUserRouter);
router.use('/password', passwordRouter);

export { router };
