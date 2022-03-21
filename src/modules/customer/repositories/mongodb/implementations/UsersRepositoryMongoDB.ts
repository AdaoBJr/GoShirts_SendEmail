import { User } from 'src/entities/User';
import Customer from 'src/infra/mongodb/models/customer';
import { IUsersRepositoryMongoDB } from '../IUsersRepositoryMongoDB';

class UsersRepositoryMongoDB implements IUsersRepositoryMongoDB {
  private static INSTANCE: UsersRepositoryMongoDB;

  public static getInstance(): UsersRepositoryMongoDB {
    if (!UsersRepositoryMongoDB.INSTANCE)
      return (UsersRepositoryMongoDB.INSTANCE = new UsersRepositoryMongoDB());
    return UsersRepositoryMongoDB.INSTANCE;
  }

  async create(data: User): Promise<User> {
    const user = new User();
    Object.assign(user, data);
    return await Customer.create(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await Customer.findOne({ email }).exec();
  }

  async findById(id: string): Promise<User> {
    return await Customer.findOne({ id }).exec();
  }

  async findAll(): Promise<User[]> {
    return await Customer.find();
  }
}

export { UsersRepositoryMongoDB };
