import { IMailProvider } from 'src/providers/MailProvider/IMailProvider';
import { User } from 'src/entities/User';
import templatePathEmail from 'src/utils/templatePathEmail';
const { FORGOT_PWD_URL } = process.env;

class SendMailForgotPwdUseCase {
  constructor(private mailProvider: IMailProvider) {}

  async execute(data: User): Promise<void> {
    const { token, email, firstname } = data;

    const templatePath = templatePathEmail('forgotPassword.hbs');

    const variables = {
      name: firstname,
      link: `${FORGOT_PWD_URL}${token}`,
    };

    await this.mailProvider.sendMail(
      email,
      'Recuperação de Senha',
      variables,
      templatePath
    );
  }
}

export { SendMailForgotPwdUseCase };
