import { Router } from 'express';
import { passwordRouter } from './password.routes';
import { welcomeRouter } from './newsletter.routes';

const router = Router();

router.use('/password', passwordRouter);
router.use('/newsletter', welcomeRouter);

export { router };
