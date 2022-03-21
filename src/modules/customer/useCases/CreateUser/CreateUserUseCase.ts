import { IUsersRepositoryMongoDB } from 'src/modules/customer/repositories/mongodb/IUsersRepositoryMongoDB';
import { ICreateUserDTO } from './CreateUserDTO';

class CreateUserUseCase {
  constructor(private usersRespository: IUsersRepositoryMongoDB) {}

  async execute(data: ICreateUserDTO) {
    const userExists = await this.usersRespository.findByEmail(data.email);

    if (userExists) throw new Error('User already exists');

    return await this.usersRespository.create(data);
  }
}

export { CreateUserUseCase };
