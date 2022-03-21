import { IMailProvider } from 'src/providers/MailProvider/IMailProvider';
import { resolve } from 'path';
import { User } from 'src/entities/User';
const { FORGOT_LINK_URL } = process.env;

class SendForgotMailUseCase {
  constructor(private mailProvider: IMailProvider) {}

  async execute(data: User): Promise<void> {
    const { token, email, firstname } = data;

    const templatePath = resolve(
      __dirname,
      '..',
      '..',
      'views',
      'emails',
      'forgotPassword.hbs'
    );

    const variables = {
      name: firstname,
      link: `${FORGOT_LINK_URL}${token}`,
    };

    await this.mailProvider.sendMail(
      email,
      'Recuperação de Senha',
      variables,
      templatePath
    );
  }
}

export { SendForgotMailUseCase };
