import { Router } from 'express';

import { sendMailForgotPwdController } from 'src/modules/customer/useCases/sendMailForgotPwd';

const passwordRouter = Router();

passwordRouter.post('/forgot', (request, response) =>
  sendMailForgotPwdController.handle(request, response)
);

export { passwordRouter };
