import requestAPIGateway from 'src/utils/requestAPIGateway';
import { SUBSCRIBE_NEWSLETTER_MUTATION } from '../gql/customer.gql';
import { IGoShirtsProvider } from '../IGoShirtsProvider';

class GoShirtsProvider implements IGoShirtsProvider {
  async sendWelcomeNewsletter(email: string): Promise<any> {
    const variables = { email };
    const query = SUBSCRIBE_NEWSLETTER_MUTATION;
    const token = null;
    const data = { variables, query, token };

    return await requestAPIGateway({ data });
  }
}

export { GoShirtsProvider };
