import { Request, Response } from 'express';
import { parseRequestBody } from 'src/utils';
import { SendMailForgotPwdUseCase } from './SendMailForgotPwdUseCase';

class SendMailForgotPwdController {
  constructor(private sendMailForgotPwdUseCase: SendMailForgotPwdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { token, body } = parseRequestBody(request);

    await this.sendMailForgotPwdUseCase.execute({ token, ...body });
    return response.status(200).json({ requested: true });
  }
}

export { SendMailForgotPwdController };
