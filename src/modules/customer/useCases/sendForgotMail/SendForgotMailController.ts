import { Request, Response } from 'express';
import { parseRequestBody } from 'src/utils';
import { SendForgotMailUseCase } from './SendForgotMailUseCase';

class SendForgotMailController {
  constructor(private sendForgotMailUseCase: SendForgotMailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token, body } = parseRequestBody(request);

    await this.sendForgotMailUseCase.execute({ token, ...body });
    return response.status(200).json({ sent: true });
  }
}

export { SendForgotMailController };
