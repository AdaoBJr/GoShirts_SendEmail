import { UsersRepositoryMongoDB } from 'src/modules/customer/repositories/mongodb/implementations/UsersRepositoryMongoDB';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const usersRepositoryMongoDB = UsersRepositoryMongoDB.getInstance();

const createUserUseCase = new CreateUserUseCase(usersRepositoryMongoDB);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
