import { EtherealMailProvider } from 'src/providers/MailProvider/implementations/EtherealMailProvider';
import { SendMailForgotPwdController } from './SendMailForgotPwdController';
import { SendMailForgotPwdUseCase } from './SendMailForgotPwdUseCase';

const mailProvider = new EtherealMailProvider();

const sendMailForgotPwdUseCase = new SendMailForgotPwdUseCase(mailProvider);

const sendMailForgotPwdController = new SendMailForgotPwdController(
  sendMailForgotPwdUseCase
);

export { sendMailForgotPwdController };
