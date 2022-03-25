import requestAPIGateway from 'src/utils/requestAPIGateway';
import { CHANGE_PASSWORD_MUTATION } from '../gql/customer.gql';
import { IGoShirtsProvider, IResponse } from '../IGoShirtsProvider';
import { IGoShirtsProviderDTO } from '../IGoShirtsProviderDTO';

class GoShirtsProvider implements IGoShirtsProvider {
  async changePassword(data: IGoShirtsProviderDTO): Promise<IResponse> {
    const { userId, newPassword } = data;
    const variables = { userId, newPassword };
    const query = CHANGE_PASSWORD_MUTATION;
    const token = null;

    const newData = { variables, query, token };
    const response = await requestAPIGateway({ data: newData });

    return { newPassword: !!response };
  }
}

export { GoShirtsProvider };
