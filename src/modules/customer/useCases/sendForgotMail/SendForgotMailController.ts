import { Request, Response } from 'express';
import { SendForgotMailUseCase } from './SendForgotMailUseCase';

class SendForgotMailController {
  constructor(private sendForgotMailUseCase: SendForgotMailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    if (!request.body.data) throw new Error(`User does not exists!`);
    const { data } = request.body;

    await this.sendForgotMailUseCase.execute(data);
    return response.status(200).send();
  }
}

export { SendForgotMailController };
