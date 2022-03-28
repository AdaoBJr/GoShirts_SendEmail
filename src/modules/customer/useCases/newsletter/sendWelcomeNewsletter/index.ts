import { EtherealMailProvider } from 'src/providers/MailProvider/implementations/EtherealMailProvider';
import { SendWelcomeNewsletterController } from './sendWelcomeNewsletterController';
import { SendWelcomeNewsletterUseCase } from './SendWelcomeNewsletterUseCase';

const mailProvider = new EtherealMailProvider();

const sendWelcomeNewsletterUseCase = new SendWelcomeNewsletterUseCase(mailProvider);

const sendWelcomeNewsletterController = new SendWelcomeNewsletterController(
  sendWelcomeNewsletterUseCase
);

export { sendWelcomeNewsletterController };
