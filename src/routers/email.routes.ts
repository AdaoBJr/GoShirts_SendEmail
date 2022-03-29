import { Router } from 'express';

import { sendChangeMailController } from 'src/modules/customer/useCases/sendChangeMail';

const emailRouter = Router();

emailRouter.post('/reset', (request, response) =>
  sendChangeMailController.handle(request, response)
);

export { emailRouter };
