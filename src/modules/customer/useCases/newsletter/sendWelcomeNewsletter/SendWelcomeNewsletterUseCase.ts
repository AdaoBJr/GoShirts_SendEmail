import { IGoShirtsProvider } from 'src/providers/GoShirtsProvider/IGoShirtsProvider';
import { IMailProvider } from 'src/providers/MailProvider/IMailProvider';
import { templatePathEmail } from 'src/utils';
const { HOMEPAGE_GOSHIRTS_URL } = process.env;

class SendWelcomeNewsletterUseCase {
  constructor(
    private mailProvider: IMailProvider,
    private goShirtsProvider: IGoShirtsProvider
  ) {}

  async execute(email: string) {
    const templatePath = templatePathEmail('welcomeNewsletter.hbs');

    const variables = {
      link: `${HOMEPAGE_GOSHIRTS_URL}`,
    };

    await this.goShirtsProvider.sendWelcomeNewsletter(email);

    await this.mailProvider.sendMail(
      email,
      'Newsletter GoShirts',
      variables,
      templatePath
    );
  }
}

export { SendWelcomeNewsletterUseCase };
