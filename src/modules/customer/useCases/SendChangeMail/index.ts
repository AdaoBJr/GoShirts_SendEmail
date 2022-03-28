import { EtherealMailProvider } from 'src/providers/MailProvider/implementations/EtherealMailProvider';
import { SendChangeMailController } from './SendChangeMailController';
import { SendChangeMailUseCase } from './SendChangeMailUseCase';

const mailProvider = new EtherealMailProvider();

const sendChangeMailUseCase = new SendChangeMailUseCase(mailProvider);

const sendChangeMailController = new SendChangeMailController(sendChangeMailUseCase);

export { sendChangeMailController };
