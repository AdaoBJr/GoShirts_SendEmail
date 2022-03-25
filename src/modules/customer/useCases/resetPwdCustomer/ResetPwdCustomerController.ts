import { Request, Response } from 'express';
import 'express-async-errors';
import { ResetPwdCustomerUseCase } from './ResetPwdCustomerUseCase';
import ApiError, { tokenInvalidOrUnath } from 'src/errors';

class ResetPwdCustomerController {
  constructor(private resetPwdCustomerUseCase: ResetPwdCustomerUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { newPassword } = request.body;
    const { token } = request.query;

    try {
      const res = await this.resetPwdCustomerUseCase.execute({
        userId: String(token),
        newPassword,
      });

      return response.status(200).json({ newPassword: res });
    } catch (error) {
      throw new ApiError(tokenInvalidOrUnath);
    }
  }
}

export { ResetPwdCustomerController };
