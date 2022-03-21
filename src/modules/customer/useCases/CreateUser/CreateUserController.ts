import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.createUserUseCase.execute(request.body);
      return response.status(201).send(user);
    } catch (error) {
      return response.status(400).json({ message: error.message || 'Unexpected Error.' });
    }
  }
}

export { CreateUserController };
