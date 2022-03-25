import { Router } from 'express';

import { resetPwdCustomerController } from 'src/modules/customer/useCases/resetPwdCustomer';

const resetPwdRouter = Router();

resetPwdRouter.post('/reset', (request, response) =>
  resetPwdCustomerController.handle(request, response)
);

export { resetPwdRouter };
