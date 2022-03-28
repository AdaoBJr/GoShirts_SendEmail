import { Request, Response } from 'express';
import { parseRequestBody } from 'src/utils';
import { SendWelcomeNewsletterUseCase } from './SendWelcomeNewsletterUseCase';

class SendWelcomeNewsletterController {
  constructor(private sendWelcomeNewsletterUseCase: SendWelcomeNewsletterUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { body } = parseRequestBody(request);

    await this.sendWelcomeNewsletterUseCase.execute(body.email);

    return response.status(200).json({ subscribed: true });
  }
}

export { SendWelcomeNewsletterController };
