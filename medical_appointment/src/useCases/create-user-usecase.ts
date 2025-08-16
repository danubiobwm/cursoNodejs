import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user-repositories";

type UserRequest = {
  name: string;
  username: string;
  password: string;
};



export class CreateUserUseCase {
  async execute(data: UserRequest) {
    const userRepository = new UserRepository();
    const user = UserEntity.create(data);


    if(!data.username || !data.password) {
      throw new Error("Username and password are required");
    }

    const existingUser = await userRepository.findByUsername(data.username);
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const userCreate = await userRepository.save(user);

    return userCreate;

  }
}