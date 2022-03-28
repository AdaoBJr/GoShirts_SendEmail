import { Request, Response } from 'express';
import { parseRequestBody } from 'src/utils';
import { SendChangeMailUseCase } from './SendChangeMailUseCase';

class SendChangeMailController {
  constructor(private sendChangeMailUseCase: SendChangeMailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token, body } = parseRequestBody(request);

    await this.sendChangeMailUseCase.execute({ token, ...body });
    return response.status(200).json({ sent: true });
  }
}

export { SendChangeMailController };
