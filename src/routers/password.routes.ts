import { Router } from 'express';

import { sendFogotMailController } from 'src/modules/customer/useCases/SendForgotMail';

const passwordRouter = Router();

passwordRouter.post('/forgot', (request, response) =>
  sendFogotMailController.handle(request, response)
);

export { passwordRouter };
