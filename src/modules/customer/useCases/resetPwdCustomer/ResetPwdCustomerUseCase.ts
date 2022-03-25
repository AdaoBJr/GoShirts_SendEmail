import { ResetPwd } from 'src/entities/ResetPassword';
import {
  IGoShirtsProvider,
  IResponse,
} from 'src/providers/GoShirtsProvider/IGoShirtsProvider';

class ResetPwdCustomerUseCase {
  constructor(private goShirtsProvider: IGoShirtsProvider) {}

  async execute(data: ResetPwd): Promise<IResponse> {
    return this.goShirtsProvider.changePassword(data);
  }
}

export { ResetPwdCustomerUseCase };
