import { Router } from 'express';
import { passwordRouter } from './password.routes';
import { welcomeRouter } from './newsletter.routes';
import { emailRouter } from './email.routes';

const router = Router();

router.use('/password', passwordRouter);
router.use('/newsletter', welcomeRouter);
router.use('/email', emailRouter);

export { router };
