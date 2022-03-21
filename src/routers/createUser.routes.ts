import { Router } from 'express';

import { createUserController } from 'src/modules/customer/useCases/CreateUser';

const createUserRouter = Router();

createUserRouter.post('/', (request, response) =>
  createUserController.handle(request, response)
);

export { createUserRouter };
