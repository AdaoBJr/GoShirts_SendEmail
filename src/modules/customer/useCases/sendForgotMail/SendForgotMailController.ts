import { Request, Response } from 'express';
import { parseRequestBody } from 'src/utils/parseRequestBody';
import { SendForgotMailUseCase } from './SendForgotMailUseCase';

class SendForgotMailController {
  constructor(private sendForgotMailUseCase: SendForgotMailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data = parseRequestBody(request);

    await this.sendForgotMailUseCase.execute(data);
    return response.status(200).json({ sent: true });
  }
}

export { SendForgotMailController };
