import { IMailProvider } from 'src/providers/MailProvider/IMailProvider';
import { templatePathEmail } from 'src/utils';
const { UNSUBSCRIBE_URL } = process.env;

class SendWelcomeNewsletterUseCase {
  constructor(private mailProvider: IMailProvider) {}

  async execute(email: string) {
    const templatePath = templatePathEmail('welcomeNewsletter.hbs');

    const variables = {
      link: `${UNSUBSCRIBE_URL}${email}`,
    };

    await this.mailProvider.sendMail(
      email,
      'Newsletter GoShirts',
      variables,
      templatePath
    );
  }
}

export { SendWelcomeNewsletterUseCase };
