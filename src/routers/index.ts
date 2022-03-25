import { Router } from 'express';
import { passwordRouter } from './password.routes';
import { resetPwdRouter } from './resetPwd.routes';

const router = Router();

router.use('/password', passwordRouter);
router.use('/password', resetPwdRouter);

export { router };
