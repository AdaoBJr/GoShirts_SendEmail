import { IMailProvider } from 'src/providers/MailProvider/IMailProvider';
import { v4 as uuidV4 } from 'uuid';
import { resolve } from 'path';
import { User } from 'src/entities/User';
const { FORGOT_LINK_URL } = process.env;

class SendForgotMailUseCase {
  constructor(private mailProvider: IMailProvider) {}

  async execute(user: User): Promise<void> {
    const { email, firstname } = user;

    const token = uuidV4();

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
