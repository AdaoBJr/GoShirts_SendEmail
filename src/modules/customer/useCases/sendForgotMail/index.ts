import { EtherealMailProvider } from 'src/providers/MailProvider/implementations/EtherealMailProvider';
import { SendForgotMailController } from './SendForgotMailController';
import { SendForgotMailUseCase } from './SendForgotMailUseCase';

const mailProvider = new EtherealMailProvider();

const sendForgotMailUseCase = new SendForgotMailUseCase(mailProvider);

const sendFogotMailController = new SendForgotMailController(sendForgotMailUseCase);

export { sendForgotMailUseCase, sendFogotMailController };
