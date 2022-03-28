import { ChangeEmail } from 'src/entities/ChangeEmail';
import { IMailProvider } from 'src/providers/MailProvider/IMailProvider';
import { templatePathEmail } from 'src/utils';
const { CHANGE_EMAIL_URL } = process.env;

class SendChangeMailUseCase {
  constructor(private mailProvider: IMailProvider) {}

  async execute(data: ChangeEmail): Promise<void> {
    const { token, email, firstname } = data;

    const templatePath = templatePathEmail('changeEmail.hbs');

    const variables = {
      name: firstname,
      link: `${CHANGE_EMAIL_URL}${token}`,
    };

    await this.mailProvider.sendMail(email, 'Troca de e-mail', variables, templatePath);
  }
}

export { SendChangeMailUseCase };
