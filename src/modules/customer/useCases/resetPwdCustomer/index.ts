import { GoShirtsProvider } from 'src/providers/GoShirtsProvider/implementations/GoShirtsProvider';
import { ResetPwdCustomerController } from './ResetPwdCustomerController';
import { ResetPwdCustomerUseCase } from './ResetPwdCustomerUseCase';

const goShirtsProvider = new GoShirtsProvider();

const resetPwdCustomerUseCase = new ResetPwdCustomerUseCase(goShirtsProvider);

const resetPwdCustomerController = new ResetPwdCustomerController(
  resetPwdCustomerUseCase
);

export { resetPwdCustomerUseCase, resetPwdCustomerController };
