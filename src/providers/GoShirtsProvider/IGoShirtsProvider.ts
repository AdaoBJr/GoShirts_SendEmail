import { IGoShirtsProviderDTO } from './IGoShirtsProviderDTO';

export interface IResponse {
  newPassword: boolean;
}

interface IGoShirtsProvider {
  changePassword(data: IGoShirtsProviderDTO): Promise<IResponse>;
}

export { IGoShirtsProvider };
