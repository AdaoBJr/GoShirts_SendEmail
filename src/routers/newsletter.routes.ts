import { Router } from 'express';

import { sendWelcomeNewsletterController } from 'src/modules/customer/useCases/newsletter/sendWelcomeNewsletter';

const welcomeRouter = Router();

welcomeRouter.post('/welcome', (request, response) =>
  sendWelcomeNewsletterController.handle(request, response)
);

export { welcomeRouter };
