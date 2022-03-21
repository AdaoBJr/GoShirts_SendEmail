import { User } from 'src/entities/User';

interface IUsersRepositoryMongoDB {
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findAll(): Promise<User[]>;
  create(data: User): Promise<User>;
}

export { IUsersRepositoryMongoDB };
