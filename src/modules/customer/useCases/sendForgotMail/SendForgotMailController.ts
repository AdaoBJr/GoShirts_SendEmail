import { Request, Response } from 'express';
import { SendForgotMailUseCase } from './SendForgotMailUseCase';

class SendForgotMailController {
  constructor(private sendForgotMailUseCase: SendForgotMailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    if (!request.body.user) throw new Error(`User does not exists!`);
    const { user } = request.body;

    await this.sendForgotMailUseCase.execute(user);
    return response.status(200).send();
  }
}

export { SendForgotMailController };
